import React from 'react'

import Image from 'next/image'

const About = () => {
  return (
    <section className='mt-20 flex flex-col items-center lg:flex-row lg:mx-32 lg:justify-between lg:my-36 '>
        <div className='lg:w-1/2'>
            <Image
            src='/sobre.jpg'
            alt='Sobre'
            width={390}
            height={300}
            className='w-full lg:rounded-2xl '
            />
        </div>
        <div className='mx-4 space-y-2 lg:ml-32'>
            <h2 className='text-2xl font-medium mt-6 text-[#0d0d0dda] lg:text-5xl'>Nossos Óculos</h2>
            <p className='text-[#0d0d0dbd] lg:leading-10 lg:w-[575px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in eveniet laborum voluptates delectus voluptatem iste aperiam dolore maiores quis quaerat, sequi dolores tempora hic optio natus eos obcaecati accusantium.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in eveniet laborum voluptates delectus voluptatem iste aperiam dolore maiores quis quaerat, sequi dolores tempora hic optio natus eos obcaecati accusantium.
            </p>
        </div>
    </section>
  )
}

export default About