import './namingPage.css'
import google from './assets/googleLogo.png'
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux'
import { setNameAction, setWebSocketAction } from './slices/dataSlice';
import Cookies from 'js-cookie';
function NamingPage(){
    const navigate = useNavigate();
    const [nameValue, setNameValue] = useState('')
    const dispatch = useDispatch()
    const ws = useRef<WebSocket | null>(null);
    const [alert, setAlert] = useState(false)

    const submitName = ()=>{
        if (nameValue.length > 0){
            const HOST = '192.168.31.235';
            const PORT = "8004";
            const url = `ws://${HOST}:${PORT}/`;
    
            ws.current = new WebSocket(url);
            dispatch(setWebSocketAction(ws.current))
            dispatch(setNameAction(nameValue))
            Cookies.set('name', nameValue)
            navigate("/chat/")
        }
        else {
            setAlert(true)
        }
    }
    return (
        <>
            <div className="mainZone">
                <div className='contentZone'>
                    <img src={google} className='logo'></img>
                    <h1 className='header'>Вход</h1>
                    <input maxLength={20} name="text" type="text" autoComplete="off" className={`form-control inputField`} placeholder='Имя'  onChange={(event => setNameValue(event.target.value))}/>
                    {alert&&<div className='alert'>Имя должно содержать от 1-го до 20-и символов</div>}
                    <div className='shl'><button className='enterBtn buttonWithHover' onClick={()=>submitName()}>Войти</button></div>
                </div>
            </div>
        </>
    )
}

export default NamingPage