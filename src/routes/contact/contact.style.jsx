import styled from 'styled-components';

export const ContactDiv=styled.div`
    padding: 10rem;
    padding-top: 0px;
    @media(max-width:1425px){
        padding:70px 3%;
    }
`;
export const ContactPage=styled.div`
    min-height: 100vh;
    height: 100%;
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    align-items: center;
    grid-gap: 4rem; 
    @media(max-width:800px){
        grid-template-columns:1fr;
        min-height: 130vh;
        grid-gap:1rem;
    }
`;
export const ContactForm=styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    background-color:#f5f5f5;
    padding: 2rem;
    border-radius: 20px;
    height: 30rem;
`;

/* .contact-page{
    padding: 100px 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left:15%;
} */
export const ContactPageLabel=styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;
  
export const FormInput=styled.input`
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 16px;
`;
export const FormTextArea=styled.input`
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid gray;
    font-size: 16px;
`;
  
export const FormButton=styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    &:hover{
        background-color: #0062cc;
    }
`;
  
export const ImageContainer=styled.div`
    display: flex;
    justify-content: center;
`;

export const ImageContainerImg=styled.img`
    max-width: 100%;
    width: 540px;
    height: auto;
    border-radius: 50%;
    border:none;
    @media(max-width:800px){
        width: 440px;
        height: auto;
    }
`;

export const MessageSubmit=styled.p`
    padding-top: 10rem;
    font-weight: 300;
    font-size: 50px;
    align-items: center;
    display: flex;
    justify-content: center;
`;




