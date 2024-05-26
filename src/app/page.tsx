"use client"
import axios from "axios";
import App from "next/app";
import { useEffect, useState } from "react";


export default function Home() {
  const [csrfToken, setCsrfToken] = useState("")
  useEffect(() => {
    
    const csrfToken = async() => await getCsrfToken()
    setCsrfToken(csrfToken)
  },[])
  return (
    <App />
  );
}
