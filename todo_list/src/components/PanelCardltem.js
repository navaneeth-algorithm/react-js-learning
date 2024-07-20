import React from 'react'
import useFormContext from '../hooks/form_hooks'
import { GoXCircleFill,GoPencil } from "react-icons/go";

const PanelCardltem = ({item}) => {

  const {onSetFormData,onDeleteFormData} = useFormContext();

  return (
    <div className='shadow p-2 mb-2 mt-2 bg-blue-100'>
      <div className='text-sm font-semibold flex items-center justify-between'>
      {item.title}
      <div className='flex gap-1'>
      <GoPencil className='text-lg text-gray-400 cursor-pointer hover:text-gray-700' onClick={()=>onSetFormData(item)} />
      <GoXCircleFill className='text-lg text-red-400 cursor-pointer hover:text-red-700' onClick={()=>onDeleteFormData(item)} />
      </div>

      </div>
      <div className='text-sm'>
        <div><span className=' text-gray-500'>Created At: </span>{item.created_date}</div>
        <div><span className=' text-gray-500'>Updated At: </span>{item.updated_date}</div>
      </div>
    </div>
  )
}

export default PanelCardltem
