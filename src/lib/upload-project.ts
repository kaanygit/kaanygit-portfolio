import { mongo } from "mongoose";
import { json } from "stream/consumers";

const mongoose=require('mongoose');
const fs=require('fs');

require('dotenv').config();

const databaseUrl=process.env.MONGO_DB_URL as string;

mongoose.connect(databaseUrl,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>{
        console.log('MongoDB bağlantı başarılı!');
        const projectSchema=new mongoose.Schema({

        });
        const Projects=mongoose.model('Projects',projectSchema);

        const projectsJsonData=fs.readFileSync('../lib/project-data.json', 'utf8');
        const data=JSON.parse(projectsJsonData);

    })
    .catch((error: Error) => {
        console.error('MongoDB\'ye bağlantı hatası:', error);
    });