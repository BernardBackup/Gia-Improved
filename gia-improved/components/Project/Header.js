import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Drawermob from '../Drawermob'
import { ConnectWallet } from "@thirdweb-dev/react";
import { DocSearch } from "@docsearch/react";
import { Input } from "@material-tailwind/react";
import Link from 'next/link';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  const openDrawer = () => setOpen(true);
  const APP_ID = "your-app-id";
const INDEX_NAME = "your-index-name";
const API_KEY = "your-algolia-api-key";

  const [showSecondNavbar, setShowSecondNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Adjust the threshold as needed
      setShowSecondNavbar(scrollY > 1);

    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log(showSecondNavbar)

  return (
    <>

      <div className=' w-[91%] 3xl:max-w-[1836px] mx-auto  mt-[27px] ' >


        <nav className={`  top-[27px] fixed  nav-bg-top w-[91%] 3xl:max-w-[1836px] z-[99] rounded-[60px] px-[16px] sm:px-2 md:px-8 mx-auto `}  >
          <div className="   flex flex-wrap items-center justify-between mx-auto py-3">
            <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
  {/*<img src={Logo} className=" w-[48px] h-[48px] " alt="Flowbite Logo" />*/}
            <Image src="/favicon-32x32.png" width={30} height={30}></Image>
              <span className="self-center f-f-sm text-tiny  whitespace-nowrap text-white ">Gia Finance</span>
            </Link>
            <div className="group relative hidden md:block">
      <Input
        type="email"
        placeholder="Search"
        className="focus:!border-t-gray-900 group-hover:border-2 group-hover:!border-gray-900"
        labelProps={{
          className: "hidden",
        }}
        readOnly
      />
      <div className="absolute top-[calc(50%-1px)] right-2.5 -translate-y-2/4">
        <kbd className="rounded border border-blue-gray-100 bg-white px-1 pt-px pb-0 text-xs font-medium text-gray-900 shadow shadow-black/5">
          <span className="mr-0.5 inline-block translate-y-[1.5px] text-base">
            ⌘
          </span>
          K
        </kbd>
      </div>
      <div className="absolute inset-0 w-full opacity-0">
        <DocSearch indexName={INDEX_NAME} apiKey={API_KEY} appId={APP_ID} />
      </div>
    </div>
            <div className="ml-auto mr-2 inline-flex items-center  justify-center text-sm  md:hidden " >
            <ConnectWallet className='timebr'/>
            </div>
            <button onClick={openDrawer} data-collapse-toggle="navbar-default" type="button" className=" mr-3 inline-flex items-center  justify-center text-sm  md:hidden " aria-controls="navbar-default" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" viewBox="0 0 17 14">
                <path stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
              <ul className=" flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row space-x-8 lg:space-x-11 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent ">
                <li className="py-3">
                  <Link href="/project" className="block py-2 px-3 text-white f-f-m text-tiny  rounded md:bg-transparent  md:p-0">Projects</Link>
                </li>

                <li className="py-3">
                 <Link href="/raffles" className="block py-2 px-3 text-white f-f-m text-tiny rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">Raffles</Link>
                </li>
                <li className="py-3">
                <Link href="/account" className="block py-2 px-3 text-white f-f-m text-tiny rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:p-0 ">
                    <ul className=' inline-flex items-center ' >
                      <li>
                       Account
                      </li>
                      <li className=' ml-3 ' >
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.25 12.75L12.75 5.25" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          <path d="M5.25 5.25H12.75V12.75" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                      </li>
                    </ul>
                  </Link>
                </li>
                <li>
                <ConnectWallet className='timebr'/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Drawermob open={open} setOpen={setOpen} />
      </div>
    </>
  )
}