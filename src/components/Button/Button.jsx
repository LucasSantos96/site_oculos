'use client'
import React from 'react'
import Link from 'next/link'


const Button = (props) => {
  return (
     <Link href={props.linkBtn}>
      <button className='bg-[#F26B1D] py-4 px-8 text-white rounded-2xl shadow-[1px_1px_24px_0px_#F2440599] cursor-pointer'>{props.name}</button>
    </Link>
  )
}

export default Button