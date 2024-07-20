import React, { useState } from 'react'
import { Dropdown } from './components/Dropdown';

const App = () => {

  const dropDownOptions = [
    {label:'Red',value:'red'},
    {label:'Green',value:'green'},
    {label:'Blue',value:'blue'}
  ];

  const [optionValue,setOptionValue] = useState(null);

  const onSelectDropDown = (option)=>{
    console.log('Selected option: ',option);
    setOptionValue(option);
  }
  return (
    <div>
      <Dropdown options={dropDownOptions} value={optionValue} onChange={onSelectDropDown} />
    </div>
  )
}

export default App;
