import React, { useEffect, useRef, useState } from 'react'
import { GoChevronDown } from "react-icons/go";
import Panel from './Panel';

export const Dropdown = ({options,onChange,value}) => {
  const [showDropDown,setShowDropDown] = useState(false);

  const divRef = useRef();

  const onToggleDropDown = ()=>{
    setShowDropDown(!showDropDown);
  }

  const onSelectedDropDownItem = (option)=>{
    onChange(option);
    onToggleDropDown();
  }



  useEffect(()=>{
    
    const handler = (event)=>{

      if(!divRef.current){
        return;
      }

      if(!divRef.current.contains(event.target)){
        setShowDropDown(false);
      }
    }
    document.addEventListener('click',handler,true);

    return ()=>{
      document.removeEventListener('click',handler);
    }
  })

  const dropDowListItem = options.map((option,index)=>{
    return (
      <div className='p-1 cursor-pointer hover:bg-sky-100 rounded' key={index} onClick={()=>onSelectedDropDownItem(option)}>
        {option.label}
      </div>
    );
  })



  return (
    <div ref={divRef} className='w-48 relative'>
      <Panel onClick={onToggleDropDown} className='flex items-center cursor-pointer justify-between  bg-white'>
        {value?.label||'Select Colors'}
        <GoChevronDown className='text-lg'/>
      </Panel>
      {
        showDropDown&&(
        <Panel className='absolute top-full'>
          {dropDowListItem}
        </Panel>)
      }

    </div>
  )
}
