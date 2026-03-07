"use client"
// import { useRouter } from 'next/navigation'
import {redirect } from 'next/navigation'
export default function Home() {

  return (
    redirect('/hero')
  );
}
