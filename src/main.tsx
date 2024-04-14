import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatPage from './ChatPage.tsx'
import NamingPage from './namingPage.tsx'
import './index.css'
//import { Provider } from "react-redux";
import {BrowserRouter as HashRouter,Route, Routes} from 'react-router-dom'
import Draft from './draftMsgPage.tsx'

const App = () => {
  

  return (
      <>
            <Routes>
              <Route path="/web/auth" element={<NamingPage/>} />
              <Route path="/web/chat" element={<ChatPage/>} />
              <Route path="/web/draft" element={<Draft/>} />
          </Routes>
      </>

  );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
