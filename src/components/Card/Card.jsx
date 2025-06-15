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
            height={290}
            className='rounded-2xl w-[290px] h-[320px] '
            />
        </div>
        <div className='flex justify-between mt-2'>
            <p className='font-bold text-[18px]'>{props.name}</p>
            <p className='text-[#F2440599] font-medium'>R$:{props.price}</p>
        </div>
    </div>
  )
}

export default Card