import { createSlice } from "@reduxjs/toolkit"
import { useSelector } from "react-redux";
import Cookies from 'js-cookie';


const dataSlice = createSlice({
    name: "data",
    initialState: {
        name:Cookies.get('name')?(Cookies.get('name')):'',
        chatHistory:new Map(),
        draftMess:'',
        webSocket:<WebSocket | null>(null),
        
    },
    reducers: {
        setName(state, {payload}) {  
            state.name = payload
        },
        setChatHistory(state, {payload}) {  
            state.chatHistory = payload
        },
        setDraftMess(state, {payload}) {  
            state.draftMess = payload
        },
        setWebSocket(state, {payload}) {  
            state.webSocket = payload
        },
    }
})

export const useName = () =>
    useSelector((state:any) => state.ourData.name)

export const useChatHistory = () =>
    useSelector((state:any) => state.ourData.chatHistory)


export const useDraftMess = () =>
    useSelector((state:any) => state.ourData.draftMess)

export const useWebSocket = () =>
    useSelector((state:any) => state.ourData.webSocket)





export const {
    setName: setNameAction,
    setChatHistory: setChatHistoryAction,
    setDraftMess: setDraftMessAction,
    setWebSocket: setWebSocketAction,
} = dataSlice.actions


export default dataSlice.reducer