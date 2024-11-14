import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context=createContext();


const ContextProvider=(props)=>
{    

    const [input,setInput]=useState("");
    const [recentprompt,setRecentprompt]=useState("")
    const[result,setResult]=useState("");
    const[prevPrompt,setPrevPrompt]=useState([])
    const [showResult,setShowResult]=useState(false)
    const [loading,setLoading]=useState(false)

    let delayPara=(index,nextWord)=>
        {
          setTimeout(function ()
          {
                setResult(prev=>prev+nextWord)
          },75*index)
        
            }

   
    const onSent =async (prompt)=>
    {   
        setResult("")
        setLoading(true)
        setShowResult(true)
        // setRecentprompt(input)
        // setPrevPrompt(prev=>[...prev,input])
        // const response =await run(input)
        let response;

        if(prompt!==undefined)
        {
            response=await run (prompt)
            setRecentprompt(prompt)
        }
        else{
            setPrevPrompt(prev=>[...prev,input])
            response=await run(input)
            setRecentprompt(input)
            
        }

        
        let responseArray=response.split("**")
        let newArray="";

        for(let i=0;i<responseArray.length;i++)
        {
            if(i==0 || i%2!==1)
            {
                newArray+=responseArray[i]
            }
            else{
                newArray+="<b>"+responseArray[i]+"</b>"
            }
        }
        let newResponse=newArray.split("*").join("</br>")

        let newResponseArray=newResponse.split(" ");
        for( let i=0;i<newResponseArray.length;i++)
        {    
             let nextWord=newResponseArray[i];
                delayPara(i,nextWord+" ")
        }
       
       // setResult(newResponse)
        //console.log(response)
        setLoading(false)
        
        
        
    }

    // run(input);

    const ContextValue={
                input,
                setInput,
                onSent,
                prevPrompt,
                setPrevPrompt,
                recentprompt,
                setRecentprompt,
                showResult,
                loading,
                result,
                
    }
    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}
export default ContextProvider