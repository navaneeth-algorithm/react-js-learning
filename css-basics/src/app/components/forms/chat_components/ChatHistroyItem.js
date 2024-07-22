import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const ChatHistroyItem = ({ history }) => {
    return (
        <div className='border-b border-gray-300 p-3 grid grid-cols-6 items-start gap-1 hover:opacity-75 cursor-pointer'>
            {/*Profle Photo*/}
            <div className='flex mt-1 col-span-1'>
                <img className='rounded-full w-10 h-10' src={history.profile} />
            </div>

            {/*Chat Description and username*/}
            <div className='flex flex-grow flex-col items-start justify-center col-span-4'>
                <div className='font-bold text-sm'>{history.username}</div>
                <p className='text-gray-600 text-xs ellipsis mt-1 justify-center'>{history.lastMessage}</p>
            </div>

            {/*Time and Status icon*/}
            <div className='flex col-span-1 items-end justify-end'>
                <div className='text-gray-400 text-xs'>{history.lastMessageTime}</div>
            </div>
        </div>
    )
}

export default ChatHistroyItem