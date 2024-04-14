import { useEffect, useState } from 'react'
import './ChatPage.css'
import { useNavigate } from 'react-router-dom';
import Message from './components/message';


//{Avatar(nm)}


function ChatPage() {
  //const [nm, setName] = useState('')
  const [cls, setCls] = useState('close')
  const navigate = useNavigate();
  const submitExit = ()=>{
    setCls('close')
    navigate('/web/auth')
  }
  
  const submitWrite = ()=>{
    setCls('close')
    navigate('/web/draft')
  }


  useEffect(()=>{
    setCls('open')
  }
    ,[])

  return (
    <>
      <div className="mainZone1">
          <div className='contentZone1'>
            <div className='forTrans'>
            <div className={`nameSh ${cls}`}>
              Андрей Быстров
            </div>
            </div>
            <button className='exitBtn buttonWithHover' onClick={()=>submitExit()}>
              Выйти
            </button>
          </div>
          <div className='contentZone2'>
              {Message('Андрей Быстров', "Текст текст тектс",'4:20', '1')}
              {Message('Андрей Быстров', "Текст текст тектс",'4:20', '1')}
              {Message('Ярило', "Текст текст тектс",'4:20', '2')}
              {Message('Платонов Антон', "Текст текст тектс",'4:20', '3')}
              {Message('Андрей Быстров', "Текст текст тектс",'4:20', '1')}
              {Message('Илья Кекин', "Текст текст тектс Текст текст тектс текст тектс Текст текст тектс текст тектс Текст текст тектс текст тектс Текст текст тектс текст тектс Текст текст тектс текст тектс Текст текст тектс текст тектс текст тектс Текст текст тектс текст тектс Текст текст тектс текст тектс Текст текст тектс текст тектс Текст текст тектс текст тектс Текст текст тектс",'4:20', '4')}
              {Message('Форд', "Текст текст тектс",'4:20', '5')}
              {Message('Юля', "Текст текст тектс",'4:20', '6')}
              {Message('Валиков Илья', "Текст текст тектс",'4:20', '7')}
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