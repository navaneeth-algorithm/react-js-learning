import React from 'react'
import classNames from 'classnames'
import useNavigationContext from '../hooks/navigation-hook'
const Link = ({children,to,className,activeClassName}) => {


    const {navigate,currentPath} = useNavigationContext();

    const classes = classNames('text-blue-600',className,currentPath===to&&activeClassName)
    const onHandleClick = (event)=>{
        
        if(event.metaKey||event.ctrlKey){
            return;
        }
        
        event.preventDefault();
        navigate(to);
    }

  return (
    <a className={classes} href={to} onClick={onHandleClick}>
        {children}
    </a>
  )
}

export default Link