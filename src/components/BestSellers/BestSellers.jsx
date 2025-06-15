import React from 'react'
import Card from '../Card/Card'

const BestSellers = () => {
  return (
    <section className='mt-20 mx-4 items-center flex flex-col '>
        <div className='flex flex-col items-center'>
            <h2 className='text-3xl font-medium text-[#0d0d0dce]'>Mais vendidos</h2>
            <p className='text-[#F2440599] font-medium'>Ver Todos</p>
            </div>
        <div className='mt-10'>
            <Card linkImg='/oculos1.jpg' name='Óculos 1' price='350,90'/>
            <Card linkImg='/oculos2.jpg' name='Óculos 2' price='278,45'/>
            <Card linkImg='/oculos3.jpg' name='Óculos 3' price='350,90'/>
            <Card linkImg='/oculos4.jpg' name='Óculos 4' price='350,90'/>

        </div>
    </section>
  )
}

export default BestSellers