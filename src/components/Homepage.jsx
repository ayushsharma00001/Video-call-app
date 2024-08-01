import React, { useState } from "react";
import {useNavigate} from "react-router-dom";


const Homepage = ()=>{
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const submitHandler = ()=>{
        navigate(`/room/${input}`);
    }
    return(
        <div>
            <div>
                <input type="text" placeholder="Enter your name" onChange={(e)=>setInput(e.target.value)} value={input}/>
                <button onClick={submitHandler}>Join</button>
            </div>
        </div>
    )
};

export default Homepage