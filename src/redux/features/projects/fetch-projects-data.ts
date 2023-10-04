import { useAppDispatch } from "@/redux/hooks";
import axios from "axios"
import { setProjectData } from "./projects.action";
import { useEffect } from "react";



export const getProjectsData=()=>{
    const dispatch = useAppDispatch();
    useEffect(()=>{
        const getData=async()=>{
            try {
                const {data:response}=await axios.get('/api/projects');
                const setData=response.projects;
                dispatch(setProjectData(setData));
            } catch (error) {
                console.log('Veri Getirilirken hata oluştu : ',error)  
            }
        }
        getData();
    },[dispatch])
}