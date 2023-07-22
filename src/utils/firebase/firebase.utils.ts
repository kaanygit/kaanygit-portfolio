import { FirebaseApp, initializeApp } from "firebase/app";
import { getFirestore,doc,collection,writeBatch,query,getDocs, Firestore, QuerySnapshot, DocumentData, DocumentSnapshot } from 'firebase/firestore';


interface firebaseConfigTS{
    apiKey:string | undefined;
    authDomain:string | undefined;
    projectId:string | undefined;
    storageBucket:string | undefined;
    messagingSenderId:string | undefined;
    appId:string | undefined;
}
const firebaseConfig:firebaseConfigTS ={
    apiKey: process.env.API_KEY,
    authDomain:process.env.AUTH_DOMAIN,
    projectId:process.env.PROJECT_ID,
    storageBucket:process.env.STORAGE_BUCKET,
    messagingSenderId:process.env.MESSAGING_SENDER_ID,
    appId:process.env.DATABASE_URL, 
};

const app:FirebaseApp = initializeApp(firebaseConfig);
const firestoreDB:Firestore=getFirestore(app);

export const addCollectionDocuments=async(collectionKey:string,objectsToAdd:any[])=>{
    const collectionRef=collection(firestoreDB,collectionKey);
    const batch=writeBatch(firestoreDB);

    objectsToAdd.forEach((element:any) => {
        const docRef=doc(collectionRef);
        batch.set(docRef,element);
    });
    await batch.commit();
    console.log("Documents Write a Firestore");
} 

export const getCollectionDocuments=async():Promise<{[key:string]:any}>=>{
    const collectionRef=collection(firestoreDB,'projects');
    const q=query(collectionRef);
    const querySnapShot:QuerySnapshot<DocumentData>=await getDocs(q);

    const projectsMap:{[key:string]:any}=querySnapShot.docs.reduce((acc:any,docSnapShot:DocumentSnapshot<DocumentData>)=>{
        const {projects,portfolioPage}=docSnapShot.data() as { projects: string, portfolioPage: string };
        acc[portfolioPage]=projects;
        return acc;
    },{});
    return projectsMap;
}