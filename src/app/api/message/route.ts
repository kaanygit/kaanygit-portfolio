import startDatabase from "@/lib/db";
import MessageModel from "@/lib/model/message.model";
import { NextResponse } from "next/server";

interface MessageModelInterface{
    name:String;
    surname:String;
    email:String;
    message:String;
}

export async function POST(request:any){
    const messageData=await request.json();
    await startDatabase();
    const SendMessageDataModel:MessageModelInterface={
        name:messageData.name,
        surname:messageData.surname,
        email:messageData.email,
        message:messageData.message
    }
    console.log(SendMessageDataModel);

    await MessageModel.create(SendMessageDataModel);
    return NextResponse.json({message:"Mesaj Gönderildi"},{status:200});
}