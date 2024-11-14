import React, { createContext, useContext, useState } from 'react'
import "./SideBar.css"
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
const SideBar = () => {
    let [extended,setExtended]=useState(true)
   const {prevPrompt,onSent,recentpromt,setRecentprompt}=useContext(Context)
    let HandleAppearence=()=>
    {
        setExtended(!extended)
    }

    let HandleRecent=async(prompt)=>
    {    setRecentprompt(prompt)
        await onSent(prompt);
    }
  return (
    <div className="sidebar">
        <div className="top">
            <img src={assets.menu_icon} className="menu" alt="" onClick={()=>{HandleAppearence()}} />
            <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                   {extended? <p>New Chat</p>:null} 
            </div>
            {extended? <div className="recent">
                <p className="recent-title">Recent</p>
                {prevPrompt.map((item,index)=>
                    
                        <div key={index} onClick={()=>HandleRecent(item)} className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p >{item.slice(0,18)}</p>
                    </div>
                    )}
                        
            </div>:null}

        </div>
        <div className="bottom">
            <div className="bottom-item recent-entry">
                <img src={assets.question_icon} alt="" />
                {extended? <p>Help</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.history_icon} alt="" />
               {extended ?<p>Activites</p>:null}
            </div>
            <div className="bottom-item recent-entry">
                <img src={assets.setting_icon} alt="" />
               {extended ?<p>setting</p>:null}
            </div>
        </div>
    </div>
  )
}

export default SideBar