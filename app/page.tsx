'use client'
import Image from 'next/image'
import { initializeApp, deleteApp } from "firebase/app";
import { getFirestore, collection, doc, setDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

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
  const [userData, setUserData] = useState<JSX.Element[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const querySnapshot = await getDocs(collection(db, "users"));
      const userDataArray: JSX.Element[] = [];
      let totalCount = 0
      querySnapshot.forEach((doc) => {
        totalCount++
        userDataArray.push(
          <tr>
            <td>{doc.data().firstName}</td>
            <td>{doc.data().lastName}</td>
            <td>{doc.id}</td>
          </tr>
        );
      });
      setCount(totalCount)
      setUserData(userDataArray);
    }
    fetchData();
  }, [db]);

  return <div className="w-full h-full flex gap-56">
    <table className='w-1/3 h-full m-3'>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
        </tr>
      {userData}
    </table>
    <p className='m-3 font-semibold text-2xl text-purple-900'>Number of Sign-Ups: {count}</p>
  </div>;
}
