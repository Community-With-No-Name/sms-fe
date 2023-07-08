import { DialogBody, Dialog } from '@material-tailwind/react'
import React from 'react'

export default function Modal({children, open, setOpen, Action, size}) {
    const handleOpen = () => setOpen(!open);
  return (
    <>
        <Action />
        <Dialog open={open} size={size} handler={handleOpen}>
            <DialogBody className='flex flex-col px-8'>
                {children}
            </DialogBody>
        </Dialog>
    </>
  )
}
