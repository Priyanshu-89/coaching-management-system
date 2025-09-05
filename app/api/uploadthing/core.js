// import {createUploadthing} from 'uploadthing/next'

// const f=createUploadthing();

// export const OurFileRouter={
//     images:f({image: {maxFileSize:"4MB", maxFileCount:1}})
//     .middleware(()=>{})
//     .onUploadComplete(()=>{})
// }

import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

export const OurFileRouter = {
  images: f({ image: { maxFileSize: "4MB", maxFileCount: 1 } })
    .middleware(async () => {
      // yaha authentication check kar sakte ho
      // minimum ek object return karna mandatory hai
      return { userId: "test-user" };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("✅ Upload complete:", file.url);
      return { uploadedBy: metadata.userId };
    }),
};


