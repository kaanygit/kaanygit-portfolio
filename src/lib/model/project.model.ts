import {Schema, model, models} from 'mongoose'

export interface ProjectsDataModel{
    id:number;
    imageUrl:string;
    name:string;
    lang:string[];
    website:string;
    githubLink:string;
    description:string;
};

const projectsSchema=new Schema({
    id:Number,
    name:String,
    imageUrl:String,
    lang:[],
    website:String,
    githubLink:String,
    description:String,
})


const ProjectsModelSchema=models.Projects||model("Projects",projectsSchema);

export {ProjectsModelSchema};