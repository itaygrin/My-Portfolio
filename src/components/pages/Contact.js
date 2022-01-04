import { useState, useEffect, useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';


const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    
    // const [toSend, setToSend] = useState({              //HOW TO REDIRECT FORM TO MAIL??? AND FIX HOME!!
    //     name: '',
    //     email: '',
    //     phone: '',
    //     message: ''
    // });

    const handleNameChange = (e) => { setName(e.target.value) }
    const handleEmailChange = (e) => { setEmail(e.target.value) }
    const handlePhoneChange = (e) => { setPhone(e.target.value) }
    const handleMessageChange = (e) => { setMessage(e.target.value) }

    const form = useRef();

    useEffect (() => {
        emailjs.init("user_uuZdNyrizj3km2mbV6yuz");
    });
    const handleSubmit = (e)=>{
        e.preventDefault();

        console.log(e);
        
        if (verifyDetails()){
            emailjs.sendForm(
                'service_dfbkczg', 
                'template_rf6kpyg',
                form.current,
                'user_uuZdNyrizj3km2mbV6yuz'
            ).then(res => {
                console.log(res.next);
                swal({
                    icon: "success", 
                    text: "Form Submitted"});
            }).catch(err => {
                console.log(err.text);
                swal({
                    icon: "error", 
                    text: err.text});

            });
        }
    }

    const verifyDetails = ()=> {
        if (name === '') {
            swal("Please fill in the 'Name' field.");
            return false;
        }

        if (!name.match(/^[a-zA-Z]+$/)) {
            alert("Please fill in a valid name.");
            return false;
        }

        if (!email.includes('@')){
            if (email === '') alert("Please fill in the 'Email' field.");
            else alert("Please fill in a valid email address.");
            return false;
        }
        if (phone.length !== 10 || isNaN(phone)){
            if(phone === '') alert("Please fill in the 'Phone' field.");
            else alert("Please fill in a valid phone number.");
            return false;
        }
        return true;
    }

    return ( 
        <div className="contact">
            <div className="contact-box">
                    <h2>Contact Me!</h2>
                    <form ref={form} onSubmit={handleSubmit}>
                        <input type="text" className="field" name='user_name' placeholder='Name:' value={name} onChange={handleNameChange}/>
                        <input type="text" className="field" name='user_email' placeholder='Email:' value={email} onChange={handleEmailChange}/>
                        <input type="text" className="field" name='user_phone' placeholder='Phone:' value={phone} onChange={handlePhoneChange}/>
                        <textarea placeholder='Message' name='user_message' className='field' value={message} onChange={handleMessageChange}></textarea>
                        <button className='btn' onClick={handleSubmit}>Submit</button>

                    </form>
            </div>
        </div>
     );
}
 
export default Contact;