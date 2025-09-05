"use client"

import { Button } from "@/components/ui/button"
import axios from "axios"
import { ImageIcon, Pencil, PlusCircle } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"
import z from "zod"
import Image from "next/image"
import { FileUpload } from "@/components/file-upload"


const formSchema = z.object({
    image: z.string().min(1, {
        message: "image is required"
    })
})
export const ImageForm = ({ initalData, courseId }) => {
    const router = useRouter()
    const [isEditing, setIsEditing] = useState(false)

    const toggleEditing = () => setIsEditing((current) => !current);


    const onSubmit = async (values) => {
        try {
            const response = await axios.patch(`/api/courses/${courseId}`, values)
            toast.success("Course updated successfully")
            router.refresh();
            toggleEditing();
        } catch (error) {
            toast.error("Something went wrong")
        }
    }
    return (
        <div className="mt-6 bg-slate-100 rounded-md dark:bg-gray-800 dark:text-slate-50 p-2">
            <div className="font-meduim flex items-center justify-between">
                Course image
                <Button onClick={toggleEditing} variant={"ghost"}>
                    {
                        isEditing && (
                            <div>Cancel</div>
                        )

                    }

                    {
                        !isEditing && !initalData.image && (
                            <>
                                <PlusCircle className="w-3 h-3 mr-3" />
                                Add an Image
                            </>
                        )
                    }

                    {
                        !isEditing && initalData.image && (
                            <>
                                <Pencil className="w-3 h-3 mr-3" />
                                Edit Image
                            </>
                        )
                    }
                </Button>
            </div>
            {
                !isEditing && (
                    initalData?.image ? (
                        <div className="relative aspect-video mt-2">
                            <Image
                                src={initalData.image.startsWith("/") ? initalData.image : `/${initalData.image}`}
                                alt="upload"
                                fill
                                className="object-cover rounded-md"
                            />

                        </div>
                    ) : (
                        <div className="flex items-center justify-center bg-slate-200 rounded-md h-56">
                            <ImageIcon className="w-10 h-10 text-slate-500" />
                        </div>
                    )
                )
            }

            {
                isEditing && (
                    <div>
                        <FileUpload endPoint="images" onChange={(url) => {
                            if (url) {
                                onSubmit({ image: url })
                            }
                        }} />
                        <div className="flex items-center gap-x-2">
                            <p>16:9 as aspect ratio recommended</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}


