import React from 'react'
import Link from 'next/link'
import LogArtboard from '@/assets/images/LogArtboard 56.svg'



export default function Tokenomics() {
  return (
    <div className='w-[91%] xl:max-w-[1080px] mx-auto relative mt-[1px] sm:mt-[1px] text-center   ' >
                <div className=' max-w-[838px] mx-auto  ' >
            <h3 className=' f-f-r-b font-medium text-xl md:text-2xl text-primary ' >Welcome to Gaia Ecosystem</h3>
            <p className=' text-grey-light f-f-m text-tiny md:text-lg mt-[10px] ' >
            Prepare for ecological and sustainability knowledge.
            </p>
            <p className=' text-grey-light f-f-m text-tiny md:text-lg mt-6 ' >
            We are excited to have you here, and we can not wait to see you explore our project.
            </p>
<Link href="/project">
           <button className=' my-8 w-[162px] h-[52px] rounded-[58px] bg-[#1FD655] text-grey-light f-f-sm text-tiny ' >
           Explore
           </button>
    </Link>
            </div>
    </div>
  )
}
