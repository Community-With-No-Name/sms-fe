import React from 'react'
import Layout from '../components/Layout'
import { Input, Button } from "@material-tailwind/react";
import { BsBuildingAdd } from 'react-icons/bs'
import Modal from '../components/Modal';

export default function Rooms() {
  const Action =()=> (
    <Button onClick={handleOpen} size='md' variant="gradient" className="flex items-center gap-3 px-6 justify-between">
        <BsBuildingAdd className="h-5 w-5" />
        <div className="text-xs flex-grow">
         Add Room
        </div>
      </Button>
  )
  const [open, setOpen] = React.useState(false);
  const [room, setRoom] = React.useState(false);
   const handleOpen = () => setOpen(!open);
   const handleSubmit = (e)=> {
    e.preventDefault()
    console.log(room)
   }
   const handleChange = (e) => {
    setRoom(e.target.value)
   }
  return (
    <Layout>
      <div className="flex flex-col">
        <div className="flex items-center justify-between w-full gap-5">
          <div className="w-72">
          <Input label="Search Room" />
          </div>
          <Modal open={open} setOpen={setOpen} Action={Action} size={'xs'}>
            <form onSubmit={handleSubmit}>
            <div className="font-medium text-2xl">
              Add New Room
            </div>
            <div className="pt-5 flex flex-col gap-3">
          <Input label="Room Name" onChange={handleChange} />
            </div>
            <div className="flex w-full justify-end pt-5">
            <Button type='submit' size='md' variant="gradient" className="flex items-center gap-3 px-6 justify-between">
        <div className="text-xs flex-grow">
         Add Room
        </div>
      </Button>
            </div>
            </form>
            </Modal>
        </div>
      </div>
    </Layout>
  )
}
