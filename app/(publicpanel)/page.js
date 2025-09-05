
import HomeHero from "./_components/Hero";
import AboutSection from "./_components/About";
import VisionSection from "./_components/Vision";
import CoursesGrid from "./_components/CoursesGrid";
import connectDb from "../utils/ConnectDb";
import Course from "../models/CourseModel";
import Category from "../models/Category";
import Categories from "./_components/categories";
import { getCourse } from "../actions";


export default async function Home({searchParams}) {
  await connectDb();

 const params = await searchParams;


  let courses = await getCourse({
    title: params?.title || "",
    categoryId: params?.categoryId || null,
  });

  // let courses = await getCourse({...searchParams})

  courses = JSON.parse(JSON.stringify(courses))
  let categories=await Category.find({})
  categories = JSON.parse(JSON.stringify(categories));
  // await main()
  return (
    <>
      <HomeHero />
      <AboutSection />
      <VisionSection />
      <Categories items={categories}/>
      <CoursesGrid courses={courses} />


    </>
  );
}
