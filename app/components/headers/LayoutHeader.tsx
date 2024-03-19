import React from 'react'
import Fheader from './Fheader'
import Mheader from './Mheader'
import Navbar from './Navbar'

const LayoutHeader = () => {
  return (
    <>
        <Fheader />
        <Mheader />
        <div className="hidden lg:flex">
        <Navbar />
        </div>
    </>
  )
}

export default LayoutHeader