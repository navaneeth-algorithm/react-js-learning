import classNames from 'classnames'
import React from 'react'
import { IoMdDocument } from "react-icons/io";
const ChatContentItem = ({ chat }) => {

    const isSelf = chat.user === 'self';

    const isMessage = chat.type === 'message';

    const styles = classNames(
        'px-2 py-4 shadow rounded m-2 bg-white w-80 text-sm',
        {
            'rounded-bl-none': isSelf,
            'rounded-br-none': !isSelf

        })

    const mainStyle = classNames(
        'flex flex-col w-full mt-0.5',
        {
            'items-end': isSelf,
            'items.start': !isSelf
        });

    const fileStyle = classNames(
        'flex flex-row px-2 py-4 shadow rounded m-2 bg-white w-52 items-center',
        {
            'rounded-bl-none': isSelf,
            'rounded-br-none': !isSelf
        });


    const messageContent = isMessage ? (
        <div className={styles}>
            {chat.message}
        </div>
    ) :
        (<div className={fileStyle}>
            <IoMdDocument className='text-xl text-gray-700 mr-2' />
            <div className='flex flex-col'>
                <p className='text-xs text-gray-600'>{chat.filename}</p>
                <p className='text-xs text-gray-600'>{chat.filesize}</p>
            </div>
        </div>);


    const timeStyle = classNames(
        { 'ml-11 justify-end': !isSelf, 'mr-10': isSelf,
        'flex text-xs text-gray-400 w-80':isMessage,
        'flex text-xs text-gray-400 w-52':!isMessage
        })

    return (
        <div className={mainStyle}>

            {/*Message content and profile image row*/}
            <div className='flex flex-row items-end'>
                {!isSelf && (<img src={chat.profile} className='rounded-full w-10 h-10' />)}
                {messageContent}
                {isSelf && (<img src={chat.profile} className='rounded-full w-10 h-10' />)}
            </div>

            {/*Time of the message*/}
            <div className={timeStyle}>{chat.sent_time}</div>

        </div>)

}

export default ChatContentItem