import Image from 'next/image'
import { initializeApp, deleteApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRBNdSciIhOheTbcPr8WJHZoNyjM2y6Mo",
  authDomain: "northwestern-ai-website-3b846.firebaseapp.com",
  projectId: "northwestern-ai-website-3b846",
  storageBucket: "northwestern-ai-website-3b846.appspot.com",
  messagingSenderId: "157698718705",
  appId: "1:157698718705:web:d0e946befe26379927a250",
  measurementId: "G-MQHVCXC1KX"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default function Home() {
  const fetchData = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    let count = 0
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      count++
      return (
        <div>{doc.id}</div>
      )
    });
    console.log(count)
    // const docRef = doc(db, "users", "AidanMott2026@u.northwestern.edu");
    // const docSnap = await getDoc(docRef);

    // if (docSnap.exists()) {
    //   console.log("Document data:", docSnap.data());
    // } else {
    //   // docSnap.data() will be undefined in this case
    //   console.log("No such document!");
    // }
  }
  fetchData();
}
