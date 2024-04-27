//import { useEffect, useState } from 'react'
import './message.css'
import Avatar from './avatar'
import error from '../assets/error.png'

function Message(name: string, text:string, time:string, id:string) {
    return (
        <>
        <div className='mess'>
            <div className='ava'>
            {id=='error'?<img src={error} className='err'></img>:Avatar(name)}
            </div>
            <div className='cont'>
                <div className={id=='error'?'errNm':"nm"} data-userid={" #"+id}>
                    {name}
                </div>
                <div className={id=='error'?'errTxt':"txt"}>
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
    