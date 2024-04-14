//import { useEffect, useState } from 'react'
import './message.css'
import Avatar from './avatar'

function Message(name: string, text:string, time:string, id:string) {
    return (
        <>
        <div className='mess'>
            <div className='ava'>
            {Avatar(name)}
            </div>
            <div className='cont'>
                <div className='nm' data-userId={" #"+id}>
                    {name}
                </div>
                <div className='txt'>
                    {text}
                </div>
            </div>
            <div className='time'>
                {time}
            </div>
        </div>
        </>
      )
    }
    
    export default Message
    