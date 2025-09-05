import User from "@/app/models/UserModel";
import connectDb from "@/app/utils/ConnectDb"
import NextAuth from "next-auth"
import CredentailsProviders from "next-auth/providers/credentials"
import bcrypt from 'bcrypt'
import { signIn } from "next-auth/react";

async function login(credentails){
    try {
        await connectDb();
        const user=await User.findOne({email:credentails.email});
        const isCorrect=await bcrypt.compare(credentails.password, user.password)
        if(!isCorrect) throw new Error("Wrong credentails")
            return user
    } catch (error) {
        console.log(error)
    }
}

async function createUserIfNotExists(token){
    await connectDb()
    let user=await User.findOne({email:token.email});

    if(!user){
        user=await new User({email:token.email, name:token.name, image:token.image}).save();
    }
    return user
}



export const authOptions={
    pages:{
        signIn:"/login"
    },
    providers:[
        CredentailsProviders({
            name:"credentails",
            credentials:{},
            async authorize(credentails){
                try {
                    const user=await login(credentails);
                    console.log("This is User: ", user)
                    return user
                } catch (error) {
                   console.log("Fail to login: ", error.message)
                   throw new Error("Falied to login")
         
                }
            }
        })
    ],

    callbacks:{
        async jwt({token, user}){
            if(user){
                token.id=user._id;
                token.email=user.email;

                const newUser=await createUserIfNotExists(token)
                token.name=newUser.name;
                token.role=newUser.role;
                console.log("This is token", token)
            }

            return token;
        },

        async session({session, token}){
               if(token){
                session.id=token.id;
                session.email=token.email;
                session.name=token.name;
                session.role=token.role
               } 

               return session;
        }
    }
}



const handler= NextAuth(authOptions);
export  {handler as GET, handler as POST}