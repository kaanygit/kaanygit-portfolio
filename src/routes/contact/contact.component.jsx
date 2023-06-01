import { useState } from 'react';
import {Outlet} from 'react-router';
import DeveloperPhoto from '../../assets/developerImage.jpg';
import {ContactDiv,ContactPage,ContactForm,ContactPageLabel,FormInput,FormTextArea,FormButton,ImageContainer,ImageContainerImg,MessageSubmit} from './contact.style.jsx';

const Contact=()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [formVisible, setFormVisible] = useState(true);
    const [message,setMessage]=useState("");
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const handleNameSubmit=(e)=>{
        setName(e.target.value);
    };
    const handleEmailSubmit=(e)=>{
        setEmail(e.target.value);
    };
    const handleTextSubmit=(e)=>{
        setMessage(e.target.value);
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        setFormVisible(false);
        setSubmitSuccess(true);
    };

    return(
        <>
            <div className='contact-page'>
                {submitSuccess?(
                    <span>Mesaj Gönderildi !😎</span>
                ):(
                    
                )
                }
            </div>
        </>
        {/* <ContactDiv>{submitSuccess?(<MessageSubmit>Mesaj Gönderildi !😎</MessageSubmit>):(
            <ContactPage>
                <ContactForm onSubmit={handleSubmit} style={{display:formVisible?'block':'none'}}>
                    <ContactPageLabel>
                        Name:<FormInput type='text' value={name} onChange={handleNameSubmit} required/>
                    </ContactPageLabel>
                    <ContactPageLabel>
                        Email:<FormInput type='email' value={email} onChange={handleEmailSubmit} required />
                    </ContactPageLabel>
                    <ContactPageLabel>
                        Name:<FormTextArea value={message} onChange={handleTextSubmit} required/>
                    </ContactPageLabel>
                    <FormButton type='submit' >Send</FormButton>
                </ContactForm>
                <ImageContainer>
                    <ImageContainerImg src={DeveloperPhoto} alt='developerPhotos'/>
                </ImageContainer>
                <Outlet/>
            </ContactPage>
            )}
        </ContactDiv> */}
    );
}

export default Contact;