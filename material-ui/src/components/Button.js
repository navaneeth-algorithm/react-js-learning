import React from 'react'
import clasName from 'classnames';
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {




  const baseStyle = twMerge(clasName(
    rest.className,
    'flex items-center px-3 m-1 py-1.5 border',
    {
    'bg-blue-500 border-blue-600 text-white':primary,
    'bg-gray-900 border-gray-900 text-white':secondary,
    'bg-yellow-400 border-yellow-400 text-white':warning,
    'bg-green-500 border-green-500 text-white':success,
    'bg-red-500 border-red-500 text-white':danger,
    'bg-white':outline,
    'rounded-full':rounded,
    'text-blue-500':outline && primary,
    'text-gray-900':outline && secondary,
    'text-yellow-400':outline && warning,
    'text-green-500':outline && success,
    'text-red-500':outline && danger,

  }))
  return (
    <button {...rest} className={baseStyle}>{children}</button>
  )
}


Button.propTypes = {
  checkVariationRule :(props)=>{

    const {primary,secondary,success,warning,danger} = props;
    const count =
    Number(!!primary)
    + Number(!!secondary)
    + Number(!!success)
    + Number(!!warning)
    + Number(!!danger);

    console.log(props);
    if(count>1){
      throw new Error('Can be only primary or secondary or success or warning or danger');
    }
  }
}

export default Button
