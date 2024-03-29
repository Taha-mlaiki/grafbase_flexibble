import { footerLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type footerTypesProps = {
    title:string,
    links:string[],
}
function FooterColumn({title,links}:footerTypesProps){
    return(
        <div className='footer_column'>
            <h4 className='font-semibold'>{title}</h4>
            <ul className='flex flex-col gap-2 font-normal'>
                {links.map((link)=> <Link href='/' key={link}>{link}</Link>)}
            </ul>
        </div>
    )
}

const Footer = () => {
  return (
    <footer className='flexStart footer'>
      <div className='flex flex-col gap-12 w-full'>
        <div className='flex items-start flex-col'>
            <Image src={"/logo-purple.svg"} width={115} height={38} alt='flexibble' />
            <p className='text-start text-sm font-normal mt-5 max-w-xs'>
                Flexibble is the worlds leading community for creatives to share
                ,grow,and get hired.
            </p>
        </div>
        <div className='flex flex-wrap gap-12'>
            {footerLinks.map((ele)=> (
                <FooterColumn key={ele.title} title={ele.title} links={ele.links} />
            ))}
        </div>
        <div className="flexBetween footer-copyright">
            <p>@ 2024 Flexibble. All rights reserved</p>
            <p className='text-gray'><span className='text-black font-semibold'>10,214 </span>
            projects submitted
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
