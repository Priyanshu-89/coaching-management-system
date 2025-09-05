import React from 'react'
import CategoryForm from '../ui/AddCategory'
import CategoryList from '../ui/Categories'
import connectDb from '@/app/utils/ConnectDb'
import Category from '@/app/models/Category'

const CategoryPage = async() => {
    await connectDb();

    let categories=await Category.find()
  return (
    <div className='flex flex-col gap-5 w-full px-[10%]'>
        <h1 className='my-3 text-3xl font-semibold text-slate-600'>Category Management</h1>
      <CategoryForm/>
      <CategoryList categories={categories}/>
    </div>
  )
}

export default CategoryPage
