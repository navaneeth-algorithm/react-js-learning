import React from 'react'
import PanelCardltem from './PanelCardltem';


const Panel = ({title,items}) => {

  const renderItems = items.map((item)=>{
    return (
      <PanelCardltem key={item.id} item={item}>
        {item.title}
      </PanelCardltem>
    );
  })
  return (
    <div className='shadow bg-white h-96 overflow-hidden'>
      <div className='border-b-2 text-lg font-bold'>
        {title}
      </div>
      <div className='items-start pb-8 pl-1.5 pr-1.5 overflow-y-auto h-full'>
        {renderItems}
      </div>

    </div>
  )
}

export default Panel
