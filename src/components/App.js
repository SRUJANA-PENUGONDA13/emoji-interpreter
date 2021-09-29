import { useState } from "react";
import React from 'react';

const App = ()=>
{
    var emojiDict = {
        "😊" : "Smiling",
        "😳" : "disbelief",
        "😔" : "sad",
        "🥡" : "takeout box",
        "❤️" : "love",
        "😑" : "annoyance"

    }
    const emojis = Object.keys(emojiDict);
    const [ outputText , setOutputText ] = useState("Translation Will appear here.")
    const [ emojiOutput, setemojiOutput ]  = useState("")
    const emojiClickHandler = (emoji)=>
    {
        if( emoji in emojiDict)
        {
            setOutputText(emojiDict[emoji]);
        }
        else
        {
            setOutputText("Failure to recognise this emoji")
        }
    }
    const searchEmojiHandler = (emoji) =>
    {
        setemojiOutput(emoji)
        emojiClickHandler(emoji)
    }
   
    return (
        <div className="container">
            <div className="heading">
                <h1>inside outttttt</h1>
            </div>
            <div className="input">
                <input placeholder="Search your emoji" onChange= {(event) => { searchEmojiHandler(event.target.value) }}></input>
            </div>
            <div className="output">
                <div className="displayResult">
                    <h2>{emojiOutput}</h2>
                    <h3>{outputText}</h3>
                </div>
                <div className="emojis">
                {
                    emojis.map((emoji) => (
                    <span onClick={()=>emojiClickHandler(emoji)}>
                        {emoji}
                    </span>
                    ))
                }
                </div>
            </div>
            
        </div>
    
    )
    ;
}

export default App;