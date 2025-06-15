import React from 'react'
//component
import Button from '../Button/Button'


//image
import Image from 'next/image'

const Hero = () => {
  return (
    <main className='flex flex-col-reverse mt-4 lg:flex lg:flex-row lg:mx-32 lg:justify-between lg:items-center'>
        <div className='flex flex-col  items-center space-y-2 mt-4'>
            <h1 className='text-[#0d0d0dd3] text-4xl font-medium text-center lg:text-7xl'>Um sol pra cada um</h1>
            <p className='text-[#F26B1D] text-[20px] font-medium mb-8'>Conheça nossa coleção 2025</p>

            <Button name='Ver coleção' linkBtn=''/>
        </div>
        <div className=''>
            <Image
            src='/hero.jpg'
            alt='Hero'
            width={500}
            height={100}
            className='w-full lg:w-[555px] lg:h-[555px] lg:rounded-2xl'
            />
        </div>
    </main>
  )
}

export default Hero