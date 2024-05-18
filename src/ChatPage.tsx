import { useCallback, useEffect, useRef, useState } from 'react'
import './ChatPage.css'
import { useNavigate } from 'react-router-dom';
import Message from './components/message';
import { setChatHistoryAction, setWebSocketAction, useChatHistory, useName, useWebSocket } from './slices/dataSlice';
import { useDispatch } from 'react-redux';

//{Avatar(nm)}


function ChatPage() {
  const name = useName()
  const chatHistory = useChatHistory();
  const [chat, setChat] = useState(new Map(chatHistory))
  const [cls, setCls] = useState('close')
  const ws = useRef<WebSocket | null>(useWebSocket());
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const submitExit = ()=>{
    setCls('close')
    dispatch(setChatHistoryAction(new Map()))
    ws.current?ws.current.close():null
    navigate('/chat/auth')
  }
  
  const submitWrite = ()=>{
    setCls('close')
    navigate('/chat/draft')
  }
  const gettingData = useCallback(() => {
    if (!ws.current) return;

    ws.current.onmessage = e => {   
        const message = JSON.parse(e.data);
        if (message.sender_name != name){
          setChat(new Map(chat.set(message.send_time,message)))
          dispatch(setChatHistoryAction(new Map(chat)))
        }
    };
}, []);

  useEffect(()=>{
    setCls('open')
    if (ws.current == null){
      const HOST = '192.168.31.235';
      const PORT = "8004";
      const url = `ws://${HOST}:${PORT}/`;
      ws.current = new WebSocket(url);
      dispatch(setWebSocketAction(ws.current))
    }
    gettingData();
  }
    ,[])
  //const reg = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/
  return (
    <>
      <div className="mainZone1">
          <div className='contentZone1'>
            <div className='forTrans'>
            <div className={`nameSh ${cls}`}>
              {name}
            </div>
            </div>
            <button className='exitBtn buttonWithHover' onClick={()=>submitExit()}>
              Выйти
            </button>
          </div>
          <div className='contentZone2'>
          {[...chat.values()].reverse().map((mess:any)=>(
            mess.error?Message('Ошибка доставки сообщения', "Подробнее: потеря сегмента при доставке сообщения",mess.send_time.split(':')[0].padStart(2,'0')+':'+mess.send_time.split(':')[1].padStart(2,'0'), 'error'):Message(mess.sender_name, mess.message,mess.send_time.split(':')[0]+':'+mess.send_time.split(':')[1].padStart(2,'0'), 'сообщение', mess.sender_name == name)
          ))}
              
              
          </div>
          <div className='contentZone3'>
            
            <button className='exitBtn buttonWithHover' onClick={()=>{submitWrite()}}>
              Написать
            </button>
          </div>
        </div>
    </>
  )
}


export default ChatPage