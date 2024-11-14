import React, { createContext, useContext, useState } from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
import run from '../../config/gemini'
import "../SideBar/SideBar.jsx"
import SideBar from '../SideBar/SideBar.jsx'

const Main = (props) => {

    const {input,
        setInput,
        onSent,
        prevPrompt,
        setPrevPrompt,
        recentprompt,
        setRecentprompt,
        showResult,
        loading,
        result,run} =useContext(Context)
        const [temp,setTemp]=useState();        
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">

            {!showResult ?<>

                <div className="greet">
                <p><span>Hi Uday,</span></p>
                <p>How can i help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>suggest beautiful road map for a trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summerizing the Concept :Urban Planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>BrainStream Team bonding Acitviteis for our work retreat</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Improve the readibitliy od code </p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            </>:
            <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon}  className="title-icon"alt="" />
                    <p>{recentprompt}</p>
                </div>
                <div className="result-data">
                    <div> <img src={assets.gemini_icon} className='result-img' alt="" /></div>

                  
                    {
                        loading?<div className='loader'>
                            <hr />
                            <hr />
                            <hr />
                        </div>: <p dangerouslySetInnerHTML={{__html: result}}></p> 
                    }
                    
                    
                     
                     {/* */}
                </div>
            </div>
            
            }

           
            <div className="main-bottom">
                <div className="search-box">
                    <input   type="text"  placeholder='Enter Prompt here..'  onChange={(e)=>setInput(e.target.value)}  value ={input} id ="search-input-box"    />
                    <div className="input-images">
                    <img src={assets.gallery_icon}   alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} onClick={()=>onSent()}alt="" />
                    
                </div>
            </div>

                <p className="bottom-info">
                    Gemini may display inaccurate info ,including about people,so double check your response
                </p>
            </div>

        </div>
    </div>
  )
}

export default Main