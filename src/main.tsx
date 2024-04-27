import React from 'react'
import ReactDOM from 'react-dom/client'
import ChatPage from './ChatPage.tsx'
import NamingPage from './namingPage.tsx'
import './index.css'
//import { Provider } from "react-redux";
import {BrowserRouter as HashRouter,Route, Routes} from 'react-router-dom'
import Draft from './draftMsgPage.tsx'
import { Provider } from 'react-redux'
import store from './store.ts'

const App = () => {
  

  return (
      <>
            <Routes>
              <Route path="/chat/auth" element={<NamingPage/>} />
              <Route path="/chat/" element={<ChatPage/>} />
              <Route path="/chat/draft" element={<Draft/>} />
          </Routes>
      </>

  );
};


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </HashRouter>
  </React.StrictMode>
)
