import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { DocSearch } from "@docsearch/react";
import { Input } from "@material-tailwind/react";
import Link from 'next/link';

export default function DrawerDefault({ open, setOpen }) {
  const APP_ID = "your-app-id";
const INDEX_NAME = "your-index-name";
const API_KEY = "your-algolia-api-key";
  const closeDrawer = () => setOpen(false);

  return (
   

      <Drawer
        placement="right"
        open={open} onClose={closeDrawer} className="p-4 bg-black">
        <div className="mb-6 text-end ">

          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>

            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </IconButton>
        </div>
        <div className="group relative ">
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
        <ul className=" pl-4 " >
       
          <li className=" mt-6 " >
            <Link href="/project"  onClick={closeDrawer} className=" f-f-m text-tiny text-black-dark  " >
              Projects
            </Link>
          </li>
          <li className=" mt-6 " >
          <Link href="/" className=" f-f-m text-tiny text-black-dark  ">
             Raffles
             </Link>
          </li>
          <li className=" mt-6 " >
            <Link href="/" onClick={closeDrawer} className=" f-f-m text-tiny text-black-dark  ">
              Account
            </Link>
          </li>
        </ul>
      </Drawer>
   
  );
}