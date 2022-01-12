import React, {useState} from 'react';
import './Contact.css';

const axios = require('axios');
const qs = require('qs');

export default function Contact(){

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message:""
    });

    const [response, setResponse] = useState();

    const handleForm = (e) => {
        if(e.target.getAttribute('name') === 'name'){
            setFormState({
                    name: e.target.value,
                    tel: formState.tel,
                    email: formState.email,
                    message:formState.message
            });
        }else if(e.target.getAttribute('name') === 'email'){
            setFormState({
                name: formState.name,
                tel: formState.tel,
                email: e.target.value,
                message:formState.message
            });
        }else if(e.target.getAttribute('name') === 'message') {
            setFormState({
                name: formState.name,
                tel: formState.tel,
                email: formState.email,
                message:e.target.value
            });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setResponse("enviando, aguarde...");

        let data = qs.stringify(formState);

        var config = {
            method: 'post',
            url: 'http://localhost/sendmail/',
            headers: { 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data : data
        };

        axios(config).then(function (response) {
            setResponse(response.data);
        }).catch(function (error) {
            console.log(error);
        });
    }

    return (
        <div id="contact">
            <span className="title">Contato</span>
            <div className='container'>
                <form method="POST" action="http://localhost/sendmail">
                    <div className="form-group">
                        <span>* Nome</span><br/><input type="text" name="name" onChange={(e) => handleForm(e)} value={formState.name} />
                    </div>
                    <div className="form-group">
                        <span>* E-mail</span><br/><input type="email" onChange={(e) => handleForm(e)} name="email" value={formState.email} />
                    </div>
                    <div className="form-group">
                        <span>* Mensagem</span><br/><textarea name="message" onChange={(e) => handleForm(e)} value={formState.message}></textarea>
                    </div>
                    <div className="form-group">
                        <input className="submit" type="submit" onClick={(e) => handleSubmit(e)} value="Enviar" />
                    </div>
                    <div className="resApi">{response}</div>
                </form>
            </div>
        </div>  
    )
}