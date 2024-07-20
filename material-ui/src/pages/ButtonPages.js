import React from 'react'
import Button from '../components/Button';
import { VscBellDot,VscDebugRestart,VscGithub } from "react-icons/vsc";

const ButtonPages = () => {
  return (
    <div>

    <div>
      <Button primary rounded>
        <VscBellDot/>
        Click Here!</Button>
    </div>
    <div>
      <Button secondary outline>
        <VscDebugRestart />
        Deal!</Button>
    </div>
    <div>
      <Button success rounded>
        <VscGithub/>
        Buy ME</Button>
    </div>
    <div>
      <Button warning rounded>WARNING</Button>
    </div>
    <div>
      <Button danger outline rounded>HIDE ME!</Button>
    </div>

    </div>
  )
}

export default ButtonPages;
