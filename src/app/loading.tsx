import Image from 'next/image'
import React from 'react'

export default function loading() {
  return (
    <div className='flex justify-center items-center h-screen'>
        <Image className="h-52 " src="/spinner.svg" alt="loading" width={50} height={50} />
    </div>
  )
}
