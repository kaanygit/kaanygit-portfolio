import {Schema, model, models} from 'mongoose'


const messageModel=new Schema({
    name:{type:String,require:true},
    surname:{type:String,require:true},
    email:{type:String,require:true},
    message:{type:String,require:true},
})  


const MessageModel=models.MessageBoxData || model("MessageBoxData",messageModel);

export default MessageModel