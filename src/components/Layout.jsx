import React from 'react'
import Sidebar from './Sidebar'
import { Typography } from '@material-tailwind/react'

export default function Layout({children}) {
  return (
     <div className='flex w-full h-screen overflow-scroll'>
        <Sidebar />
        <div className="flex-grow h-screen w-full">
            <div className="py-3 px-6 flex justify-between w-full shadow-md">
                <Typography variant='h4'>
                    SMS
                </Typography>
            </div>
            <div className="px-6 pt-5">
                {children}
            </div>
        </div>
    </div>
  )
}
