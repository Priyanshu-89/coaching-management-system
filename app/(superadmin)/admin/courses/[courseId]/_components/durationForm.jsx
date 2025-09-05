"use client"

import { Button } from "@/components/ui/button"
import { FormControl, FormDescription, FormField, FormItem, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { Pencil } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Form } from "@/components/ui/form"

import toast from "react-hot-toast"
import z from "zod"
import { formatDuration } from "@/lib/format"

const formSchema = z.object({
    duration: z.string().min(1, {
        message: "duration is required"
    })
})
const DurationForm = ({ initalData, courseId }) => {
    const router = useRouter()
    const [isEditing, setIsEditing] = useState(false)

    const toggleEditing = () => setIsEditing((current) => !current);

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            duration: initalData.duration
        }
    })
    const { isSubmitting, isValid } = form.formState;

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
                Course duration
                <Button onClick={toggleEditing} variant={"ghost"}>
                    {
                        isEditing ? (
                            <div>Cancel</div>
                        ) : (
                            <>
                                <Pencil className="h-4 w-4 mr-2" />
                                Edit duration
                            </>
                        )
                    }
                </Button>
            </div>
            {
                !isEditing && (
                    <p className="text-sm mt-2 dark:text-slate-50">
                        {formatDuration(initalData?.duration)}
                    </p>
                )
            }

            {
                isEditing && (
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
                            <FormField 
                            control={form.control}
                            name="duration"
                            render={({field})=>(
                                <FormItem>
                                    <FormControl>
                                        <Input disabled={isSubmitting} placeholder="e.g, Web designing course"{...field}/>
                                    </FormControl>
                                    <FormDescription>Put Only duration no of weeks</FormDescription>
                                    <FormMessage/>
                                </FormItem>
                            )}
                            />
                            <div className="flex items-center gap-x-2">
                                <Button type="submit" disabled={!isValid || isSubmitting}>Submit</Button>
                            </div>
                        </form>
                    </Form>
                )
            }
        </div>
    )
}

export default DurationForm
