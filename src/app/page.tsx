"use client"
import Image from 'next/image'
import DeveloperPhoto from '../assets/developerphoto-removebg-preview.png'
import { Button } from '@/export.material'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { startPage, stopPage } from '@/redux/features/startPage/startPage-action'
import { useEffect, useState } from 'react'
import { Transition } from '@headlessui/react'

export default function Home() {
  const test=useAppSelector(state=>state.startPageReducer.startPage);
  const dispatch=useAppDispatch();

  const [showPageTransition,setShowPageTransition]=useState<boolean>(false);

  const handleHiButton=()=>{
    dispatch(startPage());
  }
  useEffect(()=>{console.log(test)},[test])

  useEffect(()=>{
    setShowPageTransition(true);
  },[])

  return (
    <Transition show={showPageTransition} enter='transition-opacity duration-1000' enterFrom='opacity-0' enterTo='opacity-100'>
      <main className="mx-auto flex min-h-screen flex-col items-center justify-center p-24 transform duration-300 ease-in-out ">
        <div className='flex flex-col justify-center items-center text-center'>
          <Image className='flex justify-center items-center' src={DeveloperPhoto} width={500} alt='developer photo'/>
          <Button onClick={handleHiButton} className='text-xl' color='blue' fullWidth>Hello 👋</Button>

        </div>
      </main>
    </Transition>
  )
}
