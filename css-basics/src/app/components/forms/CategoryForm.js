import React from 'react'

const CategoryForm = () => {
  return (
    <form className='category-form'>
        <div className="flex flex-row gap-2 items-center">
            <input  type="text" placeholder="Category" />
            <button >Add</button>
        </div>
    </form>
  )
}

export default CategoryForm