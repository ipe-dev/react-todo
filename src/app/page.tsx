"use client"
import { getCsrfToken } from "@/api/csrf";
import { useEffect, useState } from "react";
export default function Home() {
  const [ csrfToken, setCsrfToken ] = useState("")
  useEffect(() => {
    const fetchCsrfToken = async () => {
      const data = await getCsrfToken()
      if (!data) {
        return
      }
      setCsrfToken(data.csrf_token)
    }
    fetchCsrfToken()
  }, [])
  return (
    <h1>test</h1>
  );
}
