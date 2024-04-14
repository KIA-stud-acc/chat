import './namingPage.css'
import google from './assets/googleLogo.png'
import { useNavigate } from 'react-router-dom';
function NamingPage(){
    const navigate = useNavigate();
    const submitName = ()=>{
        navigate("/web/chat")
    }
    return (
        <>
            <div className="mainZone">
                <div className='contentZone'>
                    <img src={google} className='logo'></img>
                    <h1 className='header'>Вход</h1>
                    <input name="text" type="text" className={`form-control inputField`} placeholder='Имя'/>
                    <div className='shl'><button className='enterBtn buttonWithHover' onClick={()=>submitName()}>Войти</button></div>
                </div>
            </div>
        </>
    )
}

export default NamingPage