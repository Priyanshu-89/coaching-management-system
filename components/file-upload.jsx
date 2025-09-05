"use client"
import { UploadDropZone } from "@/lib/uploadthing"
import toast from "react-hot-toast"

export const FileUpload=({onChange, endPoint})=>{
    return (
        <UploadDropZone endpoint={endPoint} onClientUploadComplete={(res)=>{
            console.log("-------------Files--------------", res)
            onChange(res?.[0].url)
        }} onUploadError={(error)=>{
            toast.error(`ERROR! ${error.message}`)
        }}>

        </UploadDropZone>
    )
}