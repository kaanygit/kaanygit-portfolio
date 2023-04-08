import { createContext,useState} from "react";
import {firestoreGetProjects} from '../utils/firebase/firebase.js';

export const ProductsContext=createContext({
    products:[],
});
const ProductProvider=({children})=>{
    const [products,setProduct]=useState([]);
    // useEffect(()=>{
    //     firestoreProductAdding('projects',PROJECTS_DATA);
    // },[]);
    const value={products};
    return(
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
};

export default ProductProvider;