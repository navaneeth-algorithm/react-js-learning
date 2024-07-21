import Image from "next/image";
import RegisterForm from "./components/forms/RegisterForm";
import LoginForm from "./components/forms/LoginForm";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-2">

        <div className='col-span-1'>
        <RegisterForm/>
        </div>

        <div className='col-span-1'>
          <LoginForm/>
        </div>

      </div>
      
    </div>
  );
}
