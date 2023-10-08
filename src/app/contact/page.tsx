"use client"

import { Transition } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import DeveloperContactPagePhoto from '../../assets/developerphoto-removebg-preview.png'
import Image from "next/image";
import { Button, Input, Textarea } from "@material-tailwind/react";

interface InitialStateInterface{
    name:string;
    surname:string;
    email:string;
    message:string;
}

const initialState:InitialStateInterface={
    name:"",
    surname:"",
    email:"",
    message:""
}

const ContactPage:React.FC=()=>{
    const [showPageTransition,setShowPageTransition]=useState<boolean>(false);
    const [formValue,setFormValue]=useState<InitialStateInterface>(initialState);
    const [messageSendSuccess,setMessageSendSuccess]=useState<boolean>(false);

    
    const {name,surname,email,message}=formValue;
    const chanceHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name,value}=e.target;
        setFormValue({...formValue,[name]:value});
    }
    const chanceTextAreaHandler=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        const textAreaElement=e.target.value;
        setFormValue((prevForm:any)=>({
            ...prevForm,
            message:textAreaElement
        }))
    }
    const formSubmit=async(e:React.ChangeEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try {
           console.log("Veri Gönderildi"); 
           console.log(formValue);
            const response=await fetch("/api/message",{
                method:"POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(formValue)
            });
            if(response.ok){
                console.log("Mesaj Gönderildi");
                setMessageSendSuccess(true);
            }else{
                console.error("Mesaj gönderilirken bir hata oluştu");
            }
        } catch (error) {
            console.log("Veri Gönderilirken Hata Oluştu : ",error);
        }
    }

    useEffect(()=>{
        setShowPageTransition(true);
        },[])
return(
    !messageSendSuccess?
    <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
        <section className="mx-auto flex min-h-full w-full flex-col items-center justify-center px-24 pt-20 pb-16 transform duration-300 ease-in-out">
            <div className="flex w-full flex-row flex-wrap justify-center  items-center text-center">
                <div className="flex-1 flex flex-col justify-center w-full text-md">
                    <div className="flex justify-center text-4xl font-bold text-background-color-2 mb-3">Contact Me</div>
                    <form onSubmit={formSubmit} className="flex flex-col text-md">
                        <div>
                            <input required className="rounded-xl mt-2 px-4 py-2 w-full" name="name" type="text" value={name} onChange={chanceHandler} placeholder="Name"/>
                        </div>
                        <div>
                            <input required className="rounded-xl mt-2 px-4 py-2 w-full" name="surname" type="text" value={surname} onChange={chanceHandler} placeholder="Surname"/>
                        </div>
                        <div>
                            <input required className="rounded-xl mt-2 px-4 py-2 w-full" name="email" type="email" value={email} onChange={chanceHandler} placeholder="E-mail"/>
                        </div>
                        <div>
                            <textarea minLength={20} className="rounded-xl my-2 px-4 w-full" rows={12} cols={40} value={message} onChange={chanceTextAreaHandler} placeholder="Message"/>
                        </div>
                        <button className="p-3 bg-blue-500 justify-center text-white text-xl font-bold rounded-xl hover:bg-blue-700 transform duration-300 ease-in-out" type="submit">Send</button>
                    </form>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <Image width={500} src={DeveloperContactPagePhoto} alt="contact-page-developer-photo.png"/>
                </div>
            </div>
        </section>
    </Transition>:<div className="p-24 flex mx-auto w-full h-screen justify-center items-center text-center text-background-color-2 text-5xl font-bold">Send Message to Succesfull 😎</div>
)
}

export default ContactPage