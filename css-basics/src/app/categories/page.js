import React from 'react'
import CategoryForm from '../components/forms/CategoryForm';
import CategoryTable from '../components/tables/CategoryTable';

const CategoriesPage = () => {
  return (
    <div> 
      <CategoryForm/>
      <div className='bg-white shadow mt-2'>
        <CategoryTable/>
      </div>
    </div>
  )
}

export default CategoriesPage;