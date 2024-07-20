import classNames from 'classnames'
import React from 'react'

const Panel = ({children,className,...rest}) => {


  const styles = classNames('border rounded p-3 shadow bg-white w-full',className);
  console.log(styles);
  return (
    <div className={styles} {...rest}>
      {children}
    </div>
  )
}

export default Panel
