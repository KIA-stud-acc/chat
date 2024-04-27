//import { useEffect, useState } from 'react'
import { useCallback, useEffect, useRef, useState } from 'react';
import './draftMsgPage.css'
import { useNavigate } from 'react-router-dom';
import { setChatHistoryAction, setWebSocketAction, useChatHistory, useName, useWebSocket } from './slices/dataSlice';
import { useDispatch } from 'react-redux';
//import Message from './components/message';




function Draft() {
  // const [nm, setName] = useState('')
  // const [cls, setCls] = useState('close')
  const navigate = useNavigate();
  const chatHistory = useChatHistory();
  const [chat, setChat] = useState(new Map(chatHistory))
  const [mess, setMess] = useState<string | null>('')
  const name = useName()
  const dispatch = useDispatch()
  const ws = useRef<WebSocket | null>(useWebSocket());
  const submitBack = ()=>{
    navigate('/chat/')
  }
  let now = new Date();
  const submitSend = ()=>{
    ws.current?ws.current.send(JSON.stringify({
      "sender_name":name,
      "send_time":now.getHours().toString()+':'+now.getMinutes().toString()+':'+now.getSeconds().toString()+':'+now.getMilliseconds().toString(),
      "message":mess
    })):null
    navigate('/chat/')
  }
  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = e => {   
        const message = JSON.parse(e.data);
        setChat(new Map(chat.set(message.send_time,message)))
        dispatch(setChatHistoryAction(new Map(chat)))

    };
}, []);
  useEffect(()=>{
    if (ws.current == null){
      const HOST = '192.168.31.235';
      const PORT = "8004";
      const url = `ws://${HOST}:${PORT}/`;
      ws.current = new WebSocket(url);
      dispatch(setWebSocketAction(ws.current))
   }
   gettingData();}
     ,[])

  return (
    <>
      <div className="mainZone2">
          <div className='contentZone11'>
            <button className='backBtn' onClick={()=>submitBack()}>
            ×
            </button>
            <button className='sendBtn buttonWithHover' onClick={()=>submitSend()}>
              Отправить
            </button>
          </div>
          <div className='contentZone21'>
              <div className='draft' contentEditable="plaintext-only" onInput={(event => setMess(event.currentTarget.textContent))} data-placeholder="Напишите сообщение"></div>
          </div>
          <div className='contentZone31'>
          </div>
        </div>
    </>
  )
}

export default Draft

