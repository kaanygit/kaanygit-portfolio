import { useEffect ,createContext,useState} from "react";
import {firestoreProductAdding} from '../utils/firebase/firebase.js';
import PROJECTS_DATA from '../PROJECT_DATA.JS';
import PRODUCTS from '../projects-data.json';

export const ProductsContext=createContext({
    products:[],
});
const ProductProvider=({children})=>{
    const [products,setProduct]=useState([]);
    useEffect(()=>{
        firestoreProductAdding('projects',PROJECTS_DATA);
    },[]);
    const value={products};
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
};

export default ProductProvider;