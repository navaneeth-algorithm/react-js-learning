import React from 'react'
import ChatHistroyItem from './chat_components/ChatHistroyItem';
import { IoMdSend,IoMdAttach } from "react-icons/io";
import ChatContentItem from './chat_components/ChatContentItem';
import { chatItems,conversationItems } from '@/app/constants/chats_constants';


const ChatForm = () => {

   
    const renderHistoryItems = chatItems.map((item) => {
        return (
            <ChatHistroyItem history={item} key={item.id} />
        );
    })

    const renderChatMessageContents = conversationItems.map((content)=>{

            return (<ChatContentItem chat={content} key={content.id} />)
    });

    return (
        <div className='flex flex-row bg-white shadow h-[500px] rounded'>
            {/* Message List */}
            <div className='flex flex-col w-96 overflow-y-scroll'>
                {renderHistoryItems}
            </div>


            {/*Chat Interface*/}
            <div className='flex flex-col flex-grow'>

                {/*Chat Header*/}
                <div className='flex flex-row items-center px-1.5 py-1 shadow rounded'>
                <img className='w-12 h-14 rounded-full mr-1' src="./profile_images/young_male_20.png" />
                    <span className='text-sm font-bold'>Martin Nemis</span>
                </div>

                {/*Chat Message Content*/}
                <div className='flex flex-grow justify-center bg-gray-100'>
                    <div className='flex flex-col h-96 w-full items-start overflow-scroll'>
                        {renderChatMessageContents}
                    </div>
                    
                </div>

                {/*Chat Footer Form*/}
                <form className='flex flex-row items-center py-2 px-4 chat-form gap-4 rounded'>
                    <div className='shadow bg-slate-900 p-2 rounded text-white hover:opacity-80 cursor-pointer'>
                        <IoMdAttach />
                    </div>
                    <input className='flex flex-grow' placeholder='Enter message' />
                    <div className='shadow bg-slate-900 p-2 rounded text-white hover:opacity-80 cursor-pointer'>
                        <IoMdSend />
                    </div>
                </form>

            </div>

        </div>
    )
}

export default ChatForm