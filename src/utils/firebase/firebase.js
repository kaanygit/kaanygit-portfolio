import { initializeApp } from "firebase/app";
import { getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDkrobjWEk66P_Ztq6K0VdIkmdVg-SgSFc",
  authDomain: "kaanygit-portfolio.firebaseapp.com",
  projectId: "kaanygit-portfolio",
  storageBucket: "kaanygit-portfolio.appspot.com",
  messagingSenderId: "949164411975",
  appId: "1:949164411975:web:e875946f90cafeac917562"
};

const app = initializeApp(firebaseConfig);
export const database=getFirestore();

export const firestoreProductAdding=async(collectionKey,objectsToAdd)=>{
    const collectionRef=collection(database,collectionKey);
    const batch=writeBatch(database);

    objectsToAdd.forEach((object)=>{
        const docRef=doc(collectionRef,object.title.toLowerCase());
        batch.set(docRef,object)
    });
    await batch.commit()
    console.log("urunler firestore a yazıldı");
};
