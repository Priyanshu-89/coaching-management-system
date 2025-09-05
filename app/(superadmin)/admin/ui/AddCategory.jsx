"use client"
import { handleSubmitCategory } from '@/app/actions';
import toast from 'react-hot-toast';

export default function CategoryForm() {

const handleSubmit=async (formData)=>{
await handleSubmitCategory(formData)
toast.success("Category created Successfully")
}
  return (
    <form action={handleSubmit} className="p-6 bg-white shadow rounded-md space-y-4">
      <h2 className="text-xl font-semibold">Add Category</h2>
      
      <div>
        <label className="block text-sm font-medium">Category Name</label>
        <input
          type="text"
        name="name"
 
          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter category name"
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Description</label>
        <textarea
         name="description"

          className="mt-1 p-2 w-full border rounded-md"
          placeholder="Enter description"
        />
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Save
      </button>
    </form>
  );
}
