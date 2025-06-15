import React from 'react'
import Image from 'next/image'

const Card = (props) => {
  return (
    <div>
        <div>
            <Image
            src={props.linkImg}
            alt='img'
            width={320}
            height={100}
            className='rounded-2xl w-[300px] h-[300px] '
            />
        </div>
        <div className='flex justify-between mt-2'>
            <p className='font-bold text-[18px] text-[#0d0d0ddc]'>{props.name}</p>
            <p className='text-[#F2440599] font-medium'>R$:{props.price}</p>
        </div>
    </div>
  )
}

export default Card