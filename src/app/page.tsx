"use client"
import Image from 'next/image'
import DeveloperPhoto from '../assets/developerphoto-removebg-preview.png'
import { Button } from '@/export.material'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { startPage, stopPage } from '@/redux/features/startPage/startPage-action'
import { useEffect } from 'react'

export default function Home() {
  const test=useAppSelector(state=>state.startPageReducer.startPage);
  const dispatch=useAppDispatch();
  const handleHiButton=()=>{
    console.log("Hi button")
  }
  useEffect(()=>{console.log(test)},[test])
  const handleTest=()=>{
    dispatch(startPage());
  }

  const handleTest2=()=>{
    dispatch(stopPage());
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className='flex flex-col justify-center items-center text-center'>
        <Image className='flex justify-center items-center' src={DeveloperPhoto} width={500} alt='developer photo'/>
        <Button onClick={handleHiButton} color='blue' fullWidth>Hello 👋</Button>

      </div>
        <Button onClick={handleTest} color='blue' fullWidth>start 👋</Button>
        <Button onClick={handleTest2} color='blue' fullWidth>stop 👋</Button>
    </main>
  )
}
