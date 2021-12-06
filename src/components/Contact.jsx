import React from 'react';
import { EasybaseProvider, useEasybase } from 'easybase-react';
import { useEffect, useState } from "react";

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Email: 
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default function Contact() {

    const [easybaseData, setEasybaseData] = useState([]);
    const { db } = useEasybase();

    
    const [email, setEmail] = useState({
        value:'example@email.com',
        show:''
    });

    const [message, setMessage] = useState({
        value:'send us feedback!',
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
        setEmail({value: ''})
        setMessage({value: ''})
        e.preventDefault();
        alert('Message sent!')
    }

    return(
            <>
                <form onSubmit={(e)=>submit(e)}>
                    <input type="text" value={email.value} onChange={(e)=>handleChangeEmail(e)} />
                    <br />
                    <br />
                    <input type="text" value={message.value} onChange={(e)=>handleChangeMessage(e)} />
                    <br />
                    <br />
                    <input type="submit" onClick={insertContactInfo.bind(this, email.value, message.value)} />
                </form>
            </>
    )
}