import React from 'react'
//component
import Button from '../Button/Button'


//image
import Image from 'next/image'

const Hero = () => {
  return (
    <main className='flex flex-col-reverse mt-4 lg:flex lg:flex-row lg:mx-32 lg:justify-between lg:items-center lg:mt-20 '>

        <div className='flex flex-col  items-center space-y-2 mt-4 lg:items-baseline lg:w-1/2'>

            <h1 className='text-[#0d0d0dd3] text-4xl font-bold text-center lg:text-7xl lg:text-left '>Um sol <br className='hidden lg:flex'/> pra cada um</h1>

            <p className='text-[#F26B1D] text-[20px] font-medium mb-8 lg:text-left lg:mt-2'>Conheça nossa coleção 2025</p >

            <div className='lg:mt-10'>
              <Button name='Ver coleção' linkBtn=''/>
              </div>
        </div>
        
        <div className=''>
            <Image
            src='/hero.jpg'
            alt='Hero'
            width={555}
            height={555}
            className='w-full l lg:rounded-2xl'
            />
        </div>
    </main>
  )
}

export default Hero