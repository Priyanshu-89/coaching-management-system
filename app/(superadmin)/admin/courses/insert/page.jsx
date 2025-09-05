"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from "zod"
import { isValid } from 'zod/v3'
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

import axios from 'axios'
import toast from 'react-hot-toast'

const formSchema = z.object({
  title: z.string().min(1, {
    message: "Title is required"
  })
})

const InsertPage = () => {
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: ""
    },
      mode: "onChange"
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (values) => {
    console.log(values);
    try{
      const response=await axios.post("/api/courses", values)
      router.push(`/admin/courses/${response.data._id}`)
      toast.success("Course created successfully")
    }catch(error){
      toast.error("Something went wrong")
    }
  };

  return (
    <div className='flex flex-col gap-5 w-full px-[10%]'>
      <div className="flex justify-between w-full items-center">
        <h1 className='my-3 text-3xl font-semibold text-slate-600'>Insert Course</h1>
        <Link href={'/admin/courses'} className='text-white bg-green-600 px-3 py-2 rounded-lg'>Go Back</Link>
      </div>

      <div className="flex gap-5 mx-auto max-w-5xl md:items-center md:justify-center h-full p-6">
        <div>
          <h1 className="text-xl">Name Your Course</h1>
          <p className='text-sm text-slate-600'>What would you like to name your course? don't worry you can change this later</p>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Title</FormLabel>
                    <FormControl>
                      <Input disabled={isSubmitting} placeholder="Web Designing" {...field} />
                    </FormControl>
                    <FormDescription>What will you teach in this course ?</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="mt-4">
                <Link href={'/admin/courses'}>
                  <Button type="button" variant={"ghost"}>Cancel</Button>
                </Link>
                <Button type="submit" disabled={!isValid || isSubmitting}>Continue</Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default InsertPage
