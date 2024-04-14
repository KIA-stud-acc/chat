//import { useEffect, useState } from 'react'
import './draftMsgPage.css'
import { useNavigate } from 'react-router-dom';
//import Message from './components/message';




function Draft() {
  // const [nm, setName] = useState('')
  // const [cls, setCls] = useState('close')
  const navigate = useNavigate();
  const submitBack = ()=>{
    navigate('/web/chat')
  }
  const submitSend = ()=>{
    navigate('/web/chat')
  }

  // useEffect(()=>{
  //   setCls('open')
  // }
  //   ,[])

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
              <div className='draft' contentEditable data-placeholder="Напишите сообщение"></div>
          </div>
          <div className='contentZone31'>
          </div>
        </div>
    </>
  )
}

export default Draft