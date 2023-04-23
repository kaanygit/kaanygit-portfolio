import { initializeApp } from "firebase/app";
import { getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);


//  set data firebase
// export const firestoreProductAdding=async(collectionKey,objectsToAdd)=>{
//     const collectionRef=collection(db,collectionKey);
//     const batch=writeBatch(db);

//       if(Array.isArray(objectsToAdd)){
//         objectsToAdd.forEach((object)=>{
//           const docRef=doc(collectionRef,object.title.toLowerCase());
//           batch.set(docRef,object);
//       })};
//     await batch.commit()
//     console.log("urunler firestore a yazıldı");
// };

//data get firebase
// export const firestoreGetProjects=async()=>{
//   const collectionRef=collection(db,'projects');
//   const q=query(collectionRef);
//   const querySnapShot=await getDocs(q);
//   querySnapShot.forEach((doc)=>{
//     console.log(doc.data());
//   })
//   const projectMap=querySnapShot.docs.reduce((acc,docSnapShot)=>{
//     const {title,project}=docSnapShot.data();
//     acc[title.toLowerCase()]=project;
//     return acc;
//   },{});
//   return projectMap;
// };
