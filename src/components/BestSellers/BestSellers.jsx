import React from 'react'
import Card from '../Card/Card'
import Link from 'next/link'

const BestSellers = () => {
  return (
    <section className='mt-20 mx-4 items-center flex flex-col lg:mx-32 lg:mt-32'>
        <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:w-full lg:mb-4'>

            <h2 className='text-3xl font-medium text-[#0d0d0dce] lg:text-[50px]'>Mais vendidos</h2>
            
          <Link href=''><p className='text-[#F2440599] font-medium'>Ver Todos</p> </Link>  
            </div>

        <div className='mt-10 space-y-6 flex flex-col lg:flex-row lg:space-x-6 lg:flex-wrap '>
            <Card linkImg='/oculos1.jpg' name='Casual' price='350,90'/>
            <Card linkImg='/oculos2.jpg' name='Descolado' price='278,45'/>
            <Card linkImg='/oculos3.jpg' name='Style' price='350,90'/>
            <Card linkImg='/oculos4.jpg' name='Summer' price='350,90'/>

        </div>
    </section>
  )
}

export default BestSellers