import React from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";
import "./Contact.css"

export default function Contact() {

    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();

    
    const [email, setEmail] = useState({
        value:'',
        show:''
    });

    const [message, setMessage] = useState({
        value:'',
        show:''
    });
    
    function insertContactInfo(email, message){

        const insertAsync = async() => {
            await db("CONTACT").insert({
            email: email,
            message: message
            }).one();
          }
        insertAsync();
    
    }

    const handleChangeEmail = (e) => {
        setEmail({value: e.target.value})
    }

    const handleChangeMessage = (e) => {
        setMessage({value: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        setEmail({value: ''})
        setMessage({value: ''})
        alert('Message sent! Thank you for your feedback :)')
    }

    return(
            <div className="form-box" style={{textAlign: "center"}}>
                <h1 style={{marginTop: "2em"}}>
                    Please send us feedback!
                </h1>
                <h3 style={{margin: "1em"}}>
                    Suggestions on adding places & people, adjusting rating, correcting wrong information, and any other questions are welcomed!
                </h3>
                <br />
                <form onSubmit={(e)=>submit(e)}>
                    <input placeholder="example@email.com" type="text" value={email.value} onChange={(e)=>handleChangeEmail(e)} />
                    <br />
                    <textarea placeholder="message" type="text" value={message.value} onChange={(e)=>handleChangeMessage(e)} />
                    <br />
                    <input style={{background: "lightgray"}} type="submit" onClick={insertContactInfo.bind(this, email.value, message.value)} />
                </form>
            </div>
    )
}