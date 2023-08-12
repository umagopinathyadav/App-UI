import React from 'react'
import logosvg from './../pages/images/logo/logo.svg'
const Navbar = () => {
    return <>
        <div className='w-full bg-slate-200 opacity-90 sticky top-0 z-50' >
            <div className='flex  text-center justify-between mx-14 p-3'>
                <div className='flex items-center '>
                    <img className='pe-4 md:h-12 lg:h-16' src={logosvg} alt="" />

                    <div className='text-lg text-center ms-[8rem] hidden lg:block '>
                        <a className='hover:text-blue-700 p-3' href="">Home</a>
                        <a className='hover:text-blue-700 p-3' href="">About</a>
                        <a className='hover:text-blue-700 p-3' href="">Pricing</a>
                        <a className='hover:text-blue-700 p-3' href="">Features</a>
                    </div>
                </div>
                <div className='flex items-center'>
                    <div className='hidden sm:block '>
                        <a className='text-center text-lg pe-3 hover:text-blue-700' href="">Login</a>
                        <button className='bg-slate-400 hover:bg-blue-600 text-center p-3 px-5 mx-4 rounded-xl'>Donwload</button>
                    </div>
                    <button className='text-center'> <i class="bi text-3xl bi-list"></i></button>



                </div>
            </div>
        </div>
    </>
}

export default Navbar