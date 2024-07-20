import React, { useState } from 'react'
import { GoChevronLeft,GoChevronDown } from "react-icons/go";

const Accordian = ({items}) => {

  const [expandIndex,setExpandIndex] = useState(-1);

  const onHandleExpand = (item)=>{
    if(item.id===expandIndex){
      setExpandIndex(-1);
    }
    else{
      setExpandIndex(item.id);
    }

  }

  const renderItems = items.map((item)=>{

  const shouldExpand = expandIndex===item.id;

  const iconSelection = (<span className='text-2xl'>{shouldExpand?(<GoChevronDown/>):(<GoChevronLeft/>)}</span>)

    return (
      <div className='' key={item.id}>
        <div className='cursor-pointer flex justify-between p-3 bg-gray-50 border-b items-center' onClick={()=>onHandleExpand(item)}>
            {item.label}
            {iconSelection}
        </div>
        {
        shouldExpand&&
        (<div className='border-b p-5'>
            {item.content}
        </div>)
        }
      </div>
    );
  })

  return (
    <div className='border-x border-t rounded'>{renderItems}</div>
  )
}

export default Accordian
