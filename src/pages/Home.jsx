import React, { useEffect, useState } from 'react'

import heroimagesvg from './images/hero/hero-image-06.svg'
import heroshapesvg from './images/hero/hero6-shape-1.svg'
import graygridssvg from './images/brands/graygrids.svg'
import lineicons from './images/brands/lineicons.svg'
import uideck from './images/brands/uideck.svg'
import ayroui from './images/brands/ayroui.svg'
import servicesvg from './images/services/services-08/image-01.svg'
import dotsvg from './images/hero/hero6-shape-1.svg'
import image1jpg from './images/team/team-03/image-01.jpg'
import image2jpg from './images/team/team-03/image-02.jpg'
import image3jpg from './images/team/team-03/image-03.jpg'
import mobilesvg from './images/cta/mobile-01.svg'
import logowhitesvg from './images/logo/logo-white.svg'
import testimonialpng from './images/testimonials/testimonial-03/image-01.png'
import testimonial2png from './images/testimonials/testimonial-03/image-02.png'
const Home = () => {
    const [users, setUsers] = useState([testimonial2png, testimonialpng])
    const [index, setIndex] = useState(0)
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(pre => (pre + 1) % users.length)
        }, 2000);
        return () => clearInterval(interval)
    }, [])
    return <>

        <div className='grid lg:grid-cols-2'>

            <div className='bg-slate-100 rounded-br-[30%] h-screen'>
                <p className='text-blue-700 mt-48 ml-40 text-lg'>App Landing Page Example</p>
                <p className='font-bold text-4xl pt-4 ml-36'>Crafted with MATIC UI</p>
                <p className='font-bold text-4xl pt-2 ml-36'>Components</p>
                <p className='text-slate-500 pt-7 ml-36'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
                <p className='text-slate-500 pt-3 ml-36'>sed do eiusmod tempor incididunt ut.</p>

                <div class="flex space-x-4 pt-9 ml-40 ">
                    <button class="bg-slate-100 shadow-lg hover:text-blue-600 text-xl font-semibold rounded mb-4 py-3 px-4 sm:mb-0 sm:mr-2 "><i class="bi bi-apple"></i>App Store</button>
                    <button class="hover:bg-slate-200 font-semibold text-xl py-2 px-4 rounded mb-4 sm:mb-0 sm:mr-2"><i class="bi bi-google-play "></i>Play Store</button>
                </div>
            </div>
            <div className="  relative  h-screen m-28">
                <img className='absolute ' src={heroshapesvg} alt="" />
                <img className='pt-10  ml-10  absolute' src={heroimagesvg} alt="" />

            </div>
        </div>

        <div className='grid grid-cols-12 px-28 '>
            <div className='col-span-12 md:col-span-4 lg:col-span-3'>
                <img className=' hover:bg-blue-200 text-center p-3 px-3 mx-2 rounded-full' src={graygridssvg} alt="" />
            </div>
            <div className='col-span-12 md:col-span-4 lg:col-span-3'>
                <img className=' hover:bg-blue-200 text-center p-3 px-3 mx-4 rounded-full' src={lineicons} alt="" />
            </div>
            <div className=' col-span-12 md:col-span-4 lg:col-span-3'>
                <img className='hover:bg-blue-200 text-center p-3 px-3 mx-4 rounded-full' src={uideck} alt="" />
            </div>
            <div className=' col-span-12 md:col-span-4 lg:col-span-3'>
                <img className='hover:bg-blue-200 text-center p-3 px-3 mx-4 rounded-full' src={ayroui} alt="" />
            </div>
        </div>

        {/* about start */}


        <div className='grid lg:grid-cols-2 mt-32'>
            <div className=' p-4    '>
                <div className='px-5'>
                    <p className='text-blue-700  text-lg font-semibold'>About Our App</p>
                    <p className='font-bold text-3xl lg:text-5xl  '>All You Need to Know</p>
                    <p className='font-bold text-3xl lg:text-5xl '>About The App</p>
                </div>
                <div className='flex flex-col lg:flex-row  gap-5'>
                    <div className='ml-4 lg:ml-28  mt-5'>
                        <i className="bi bi-lock fs-1 bg-blue-300 text-white h-10 text-center p-2 px-3 mx-2 rounded-xl w-[25%]"></i>
                        <p className='font-semibold text-2xl pt-3'>Security Maintenance</p>
                        <p className='text-slate-500 pt-2'>The little rotter bevvy I gormless mush</p>
                        <p className='text-slate-500 pt-2'>golly gosh cras.</p>
                    </div>
                    <div className='px-4 lg:px-14 mt-5'>
                        <i className="bi bi-database fs-1 bg-amber-300 text-white h-10 text-center p-2 px-3 mx-2 rounded-xl w-[25%]"></i>
                        <p className='font-semibold text-lg lg:text-2xl pt-3'>Backup Database</p>
                        <p className='text-slate-500 pt-2'>The little rotter bevvy I gormless mush</p>
                        <p className='text-slate-500 pt-2'>golly gosh cras.</p>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row '>
                    <div className='ml-4 lg:ml-28 mt-5 '>
                        <i className="bi-stack fs-1 bg-purple-400 text-white h-10 text-center p-2 px-3 mx-2 rounded-xl w-[25%]"></i>
                        <p className='font-semibold text-2xl pt-3'>Server Maintenance</p>
                        <p className='text-slate-500 pt-2'>The little rotter bevvy I gormless mush</p>
                        <p className='text-slate-500 pt-2'>golly gosh cras.</p>
                    </div>
                    <div className='px-4 lg:px-14 mt-5 '>
                        <i className="bi bi-bezier2 fs-1 bg-green-500 text-white h-10 text-center p-2 px-3 mx-2 rounded-xl w-[25%]"></i>
                        <p className='font-semibold text-2xl pt-3 '>No Risk Protestable</p>
                        <p className='text-slate-500 pt-2'>The little rotter bevvy I gormless mush</p>
                        <p className='text-slate-500 pt-2'>golly gosh cras.</p>
                    </div>
                </div>
            </div>
            <div className="mx-20 mt-10 sm:mt-0">
                <img className=' ' src={servicesvg} alt="" />
            </div>
        </div>

        {/* about end */}

        {/* table start */}

        <div className='bg-white pt-20 lg:pt-[120px] '>
            <div className="container mx-auto p-28">
                <div className='mx-4 flex flex-wrap'>
                    <div className='w-full px-4'>
                        <div className='mx-auto mb-[60px] max-w-[510px] text-center'>
                            <span className='mb-2 block text-xl font-semibold text-primary'>pricing table </span>
                            <h2 className='mb-2 block text-lg font-bold text-dark sm:text-4xl md:text-[40px]'>Awesome Pricing Plan</h2>
                            <p className='text-base text-body-color'>There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
                        </div>
                    </div>
                </div>

                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4">
                        <div class="relative z-10 overflow-hidden rounded-xl bg-white p-11 shadow-lg">
                            <div class="w-full overflow-x-auto">
                                <table class="table-auto">
                                    <thead>
                                        <tr >
                                            <th class="w-1/4 min-w-[200px] px-5">
                                                <img src={dotsvg} alt="" />
                                            </th>
                                            <th class="w-1/4 min-w-[200px] px-5">
                                                <div className='mb-10 text-left'>
                                                    <span className='mb-5 text-xl font-semibold  '>
                                                        Starter
                                                    </span>
                                                    <h4 className='class="mb-4 text-[28px] font-bold text-dark lg:text-[32px] '>
                                                        $59
                                                        <span class="text-base font-medium text-body-color  text-slate-500 px-2">
                                                            Per Month
                                                        </span>
                                                    </h4>
                                                    <p class="mb-6 text-base font-normal text-body-color mt-3 text-slate-500">
                                                        Best suited for freelancers who works individually.
                                                    </p>
                                                    <button className='block w-full rounded bg-primary p-3 text-center text-base font-semibold text-white transition hover:bg-opacity-90"'>Purchase Now</button>
                                                </div>
                                            </th>
                                            <th class="w-1/4 min-w-[200px] px-5">
                                                <div className='mb-10 text-left'>
                                                    <span className='mb-5 text-xl font-medium text-dark'>
                                                        Agency
                                                    </span>
                                                    <h4 className='class="mb-4 text-[28px] font-bold text-dark lg:text-[32px]"'>
                                                        $99
                                                        <span class="text-base font-medium text-body-color text-slate-500 px-2">
                                                            Per Month
                                                        </span>
                                                    </h4>
                                                    <p class="mb-6 text-base  mt-3 font-normal text-body-color text-slate-500">
                                                        Best suited for freelancers who works individually.
                                                    </p>
                                                    <button className='block w-full rounded bg-success p-3 text-center text-base font-semibold text-white transition hover:bg-opacity-90"'>Purchase Now</button>
                                                </div>
                                            </th>
                                            <th class="w-1/4 min-w-[200px] px-5">
                                                <div className='mb-10 text-left'>
                                                    <span className='mb-5 text-xl font-medium text-dark'>
                                                        Extended
                                                    </span>
                                                    <h4 className='class="mb-4 text-[28px] font-bold text-dark lg:text-[32px]"'>
                                                        $149
                                                        <span class="text-base  font-medium text-body-color text-slate-500 px-2">
                                                            Per Month
                                                        </span>
                                                    </h4>
                                                    <p class="mb-6  mt-3 text-base font-normal text-body-color text-slate-500">
                                                        Best suited for freelancers who works individually.
                                                    </p>
                                                    <button className='block w-full rounded bg-primary p-3 text-center text-base font-semibold text-white transition hover:bg-opacity-90"'>Purchase Now</button>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <h5 class="text-base font-medium text-dark">
                                                    Key Features
                                                </h5>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <h5 class="text-base font-medium text-dark">
                                                    Key limits
                                                </h5>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <h5 class="text-base font-medium text-dark">
                                                    Key limits
                                                </h5>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <h5 class="text-base font-medium text-dark">
                                                    Key limits
                                                </h5>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">Seats</p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">1 Developer</p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">5 Developer</p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">20 Developer</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">
                                                    Domains/Products
                                                </p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">
                                                    5 Product
                                                </p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">
                                                    5 Product
                                                </p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">
                                                    5 Product
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">Email Support</p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">6 Months</p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">6 Months</p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">6 Months</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body- text-slate-500">
                                                    All Pro Components
                                                </p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color">
                                                    <i class="bi bi-check-circle text-2xl  text-green-400"></i>
                                                </p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color">
                                                    <i class="bi bi-check-circle text-2xl text-green-400"></i>
                                                </p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color">
                                                    <i class="bi bi-check-circle text-2xl  text-green-400"></i>
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color text-slate-500">
                                                    Design Source Files
                                                </p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color">
                                                    <i class=" bi bi-x-circle text-2xl text-red-400"></i>
                                                </p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color">
                                                    <i class="bi bi-check-circle text-2xl  text-green-400"></i>
                                                </p>
                                            </td>
                                            <td class="border-t border-stroke py-4 px-5">
                                                <p class="text-base text-body-color">
                                                    <i class="bi bi-check-circle text-2xl  text-green-400"></i>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* table end */}

        {/* team start */}
        <div className='text-center'>
            <p className='text-xl text-blue-600 font-semibold'>Our Team</p>
            <p className='text-5xl font-bold'>Meet Our Team</p>
            <p className='pt-2 text-slate-500'>There are many variations of passages of Lorem Ipsum available</p>
            <p className='pt-1 text-slate-500 px-5'>but the majority have suffered alteration in some form.</p>
        </div>

        <div className='grid lg:grid-cols-12 gap-3 px-28 my-5 group '>

            <div className=' relative overflow-hidden col-span-6 border md:col-span-4 sm:col-span-12 lg:col-span-4 justify-between my-3 p-4 rounded-md '>
                <div className='h-20 w-20 group-hover:block hidden  bg-blue-500 rounded-full absolute top-1 right-[-3rem]'></div>
                <div className='h-20 w-20 group-hover:block hidden bg-green-400 rounded-full top-[-3rem] right-0 absolute '></div>
                <img src={image1jpg} alt="" />
                <p className='my-2 text-xl font-semibold'>Jackie Sanders</p>
                <p className='text-slate-500'>CONTENT WRITER</p>
                <p className='my-2 text-slate-500'>Fermentum massa justo sit amet risus morbi leo.</p>
                <p className='my-4'>
                    <p className='space-x-5'>
                        <i class="text-slate-400 hover:text-blue-600 bi bi-facebook"></i>
                        <i class="text-slate-400 hover:text-blue-600 bi bi-instagram"></i>
                        <i class="text-slate-400 hover:text-blue-600 bi bi-twitter"></i>
                    </p>
                </p>
            </div>
            <div className='relative group overflow-hidden col-span-6 border md:col-span-4 sm:col-span-12 lg:col-span-4 justify-between my-3 p-4 rounded-md '>
                <div className='h-20 w-20  group-hover:block hidden  bg-blue-500 rounded-full absolute top-1 right-[-3rem]'></div>
                <div className='h-20 w-20  group-hover:block hidden bg-green-400 rounded-full top-[-3rem] right-0 absolute '></div>
                <img src={image2jpg} alt="" />
                <p className='my-2 text-xl font-semibold '>Andrieo Gloree</p>
                <p className='text-slate-500'>WEB DEVELOPER</p>
                <p className='my-2 text-slate-500'>Fermentum massa justo sit amet risus morbi leo.</p>
                <p className='my-4'>
                    <p className='space-x-5'>
                        <i class="text-slate-400 hover:text-blue-600 bi bi-facebook"></i>
                        <i class="text-slate-400 hover:text-blue-600 bi bi-instagram"></i>
                        <i class="text-slate-400 hover:text-blue-600 bi bi-twitter"></i>
                    </p>
                </p>
            </div>
            <div className=' relative  group overflow-hidden col-span-6 border md:col-span-4 sm:col-span-12 lg:col-span-4 justify-between my-3 p-4 rounded-md '>

                <div className='h-20 w-20 group-hover:block hidden  bg-blue-500 rounded-full absolute top-1 right-[-3rem]'></div>
                <div className='h-20 w-20 group-hover:block hidden  bg-green-400 rounded-full top-[-3rem] right-0 absolute '></div><img src={image3jpg} alt="" />
                <p className='my-2 text-xl font-semibold'>Adveen Desuza</p>
                <p className='text-slate-500'>DIGITAL MARKETER</p>
                <p className='my-2 text-slate-500'>Fermentum massa justo sit amet risus morbi leo.</p>
                <p className='my-4'>
                    <p className='space-x-5'>
                        <i class="text-slate-400 hover:text-blue-600 bi bi-facebook"></i>
                        <i class="text-slate-400 hover:text-blue-600 bi bi-instagram"></i>
                        <i class="text-slate-400 hover:text-blue-600 bi bi-twitter"></i>
                    </p>
                </p>
            </div>
        </div>
        {/* team end */}

        {/* download start */}
        <div className='grid grid-cols-12 mx-16 bg-slate-200 py-20 rounded-lg relative z-10 overflow-hidden '>
            <div className='h-80 w-80  hidden md:block lg:block bg-green-400 rounded-full  absolute top-[-3rem] right-[-2.4rem]'></div>
            <div className=' h-44 w-44  hidden md:block lg:block  bg-blue-500 rounded-full absolute top-[7rem] right-[-5rem] '></div>
            <div className="grid col-span-12 lg:col-span-6 ">
                <div className='grid-cols-2  '>

                    <div className='text-4xl font-bold my-3 mb-5 ml-16'>Download Now and Get Started Immediately!</div>
                    <p className='text-2xl my-3 text-slate-500 ml-16'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        <br />sed do eiusmod tempor incididunt ut.</p>

                    <div class=" lg:flex md:flex space-x-4 pt-9 mx-5">
                        <button class="bg-slate-50 hover:text-blue-600  rounded mb-2 py-3 px-5 text-2xl">
                            <i class="bi bi-apple text-2xl"></i> App Store</button>
                        <button class="hover:bg-slate-300 hover:text-blue-600 py-3 px-5 rounded text-2xl">
                            <i class="bi bi-google-play"></i> Play Store</button>
                    </div>
                </div>
            </div>
            <div className='grid col-span-12 lg:col-span-6 mx-60'>
                <img className='hidden absolute sm:block lg:block n mt-1 ' src={mobilesvg} alt="" />
            </div>
        </div>

        {/* download end */}

        {/* Client Testimonials start */}
        <div class="pt-20 pb-10 lg:pt-[120px] lg:pb-20 overflow-hidden">
            <div class="container mx-auto">
                <div class="-mx-4 flex flex-wrap">
                    <div class="w-full px-4">
                        <div class="mx-auto mb-[60px] max-w-[510px] text-center">
                            <span class="mb-2 block text-lg font-semibold text-primary">
                                What People Says
                            </span>
                            <h2 class="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                                Client Testimonials
                            </h2>
                            <p class=" text-gray-400 text-xl">
                                There are many variations of passages of Lorem Ipsum available
                                but the majority have suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>

                <div class="flex justify-center ">
                    {/* <div class="w-full px-4 md:w-1/2 lg:w-1/3 bg-blue-700">
                    </div> */}
                    <div className='flex w-full md:w-[70%] lg:w-[50%] lg:px-10 bg-gray-100 md:p-5 lg:p-16 rounded-md'>
                        <img className='animate-pulse' src={users[index]} alt="" />

                        <div className='lg:px-10'>
                            <p className=''>Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour, or randomised words which don't look slightly believable, If you are to passage.</p>
                            <p className='text-blue-600 font-semibold mt-3'>Healther Bennit</p>
                            <p className='text-gray-500'><i>Founder - Dailousm</i></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <div className='text-center'>
            <button onClick={e => setIndex(index === 0 ? 0 : index - 1)}><i class="bi bi-dot fs-1 hover:text-green-400 "></i></button>
            <button onClick={e => setIndex(index === users.length - 1 ? index : index + 1)}><i class="bi bi-dot fs-1 hover:text-green-400"></i></button>

        </div>
        {/* <div className="relative h-screen ">
            <img className='absolute  h-20 px-56 mt-9' src={heroshapesvg} alt="" />
        </div> */}

        {/* Client Testimonials end */}

        {/* Get In Touch with us start */}
        <div div class="relative z-40 bg-white py-36 lg:py-[120px]" >
            <div class="container">
                <div class="relative bg-white mx-8">
                    <div class="-mx-4 flex flex-wrap items-stretch lg:flex-row">
                        <div class="w-full px-4 lg:w-4/12">
                            <div class="relative z-10 flex h-full  items-end overflow-hidden bg-blue-700 2xl:max-w-[370px]">
                                <div>
                                    <div class="top-[120px] lg:absolute lg:-rotate-90 lg:p-0">
                                        <h2 class="inline-flex items-center text-xl font-bold uppercase text-white">
                                            <span class="bg-white"></span>
                                            CONTACT US
                                        </h2>
                                    </div>
                                    <div class="w-full p-10">
                                        <span class="mb-5 block text-base font-semibold text-white">
                                            Follow Us On
                                        </span>
                                        <div class="flex items-center">
                                            <a href="" class="mr-7  hover:text-blue-800">
                                                <i class="bi bi-facebook"></i>
                                            </a>
                                            <a href="" class="mr-7  hover:text-blue-800">
                                                <i class="bi bi-twitter"></i>
                                            </a>
                                            <a href="" class="mr-7  hover:text-blue-800">
                                                <i class="bi bi-instagram"></i>
                                            </a>
                                            <a href="" class="mr-7  hover:text-blue-800">
                                                <i class="bi bi-linkedin"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>

                                    <span class="absolute bottom-0 left-0 z-[-1]">
                                        <svg width="370" height="339" viewBox="0 0 370 339" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 192.445L370 0V339H0V192.445Z" fill="#13C296"></path>
                                        </svg>
                                    </span>
                                    <span class="absolute bottom-[140px] left-0 z-[-1]">
                                        <svg width="152" height="174" viewBox="0 0 152 174" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M152 93.5L0 173.5V0L152 93.5Z" fill="#13C296" fill-opacity="0.44"></path>
                                        </svg>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="w-full  lg:w-8/12  ">
                            <div class="p-7 md:p-[70px] lg:p-14 xl:p-[50px]">
                                <h2 class="mb-5 text-[28px] font-bold text-black px-1">
                                    Get In Touch With Us
                                </h2>
                                <p class="mb-[60px] max-w-[490px] text-base text-body-color">
                                    There are many variations of passages of Lorem Ipsum available
                                    but the majority have suffered alteration in some form.
                                </p>

                                <form>
                                    <div class="-mx-4 flex flex-wrap">
                                        <div class="w-full px-4 md:w-1/2">
                                            <div class="mb-4">
                                                <input type="text" placeholder="Full Name" class="w-full border-b border-[#ececec] py-4 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                                            </div>
                                        </div>
                                        <div class="w-full px-4 md:w-1/2">
                                            <div class="mb-4">
                                                <input type="email" placeholder="Email Address" class="w-full border-b border-[#ececec] py-4 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                                            </div>
                                        </div>
                                        <div class="w-full px-4 md:w-1/2">
                                            <div class="mb-4">
                                                <input type="text" placeholder="Phone Number" class="w-full border-b border-[#ececec] py-4 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                                            </div>
                                        </div>
                                        <div class="w-full px-4 md:w-1/2">
                                            <div class="mb-4">
                                                <input type="text" placeholder="Subject" class="w-full border-b border-[#ececec] py-4 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none" />
                                            </div>
                                        </div>
                                        <div class="w-full px-4">
                                            <div class="mb-10">
                                                <textarea rows="4" placeholder="Type Your Message" class="w-full resize-none border-b border-[#ececec] py-4 text-sm text-body-color outline-none focus:border-primary focus-visible:shadow-none"></textarea>
                                            </div>
                                        </div>

                                        <div class="w-full px-4">
                                            <button type="submit" class="rounded bg-primary py-3 px-9 text-base font-medium text-white transition hover:bg-opacity-90">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        {/* Get In Touch With us end */}

        {/* footer section start */}
        <div class="container mx-auto bg-blue-700 py-20 relative z-10 overflow-hidden ">
            <div className='h-44 w-44 opacity-10 hidden md:block lg:block bg-green-300 rounded-full  absolute top-[-3rem] right-[-2.4rem]'></div>

            <div class="mx-4 flex flex-wrap ">
                <div class="w-full   px-4 sm:w-2/3 lg:w-3/12">

                    <div class=" mb-10 mt-3 w-full">
                        <a href="" class="mb-6 inline-block max-w-[160px]">
                            <img src={logowhitesvg} alt="logo" class="max-w-full" />
                        </a>
                        <p class="mb-7 text-base text-white">
                            Sed ut perspiciatis undmnis is iste natus error sit amet
                            voluptatem totam rem aperiam.
                        </p>
                        <p class="flex items-center text-sm font-medium text-white">
                            <span class="mr-3 text-white">

                            </span>
                            <span><i class="bi bi-telephone-forward"></i> +012 (345) 678 99</span>
                        </p>
                    </div>
                </div>
                <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
                    <div class="mb-10 w-full mt-4">
                        <h4 class="mb-9 text-lg font-semibold text-white">Resources</h4>
                        <ul>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    SaaS Development
                                </a>
                            </li>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    Our Products
                                </a>
                            </li>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    User Flow
                                </a>
                            </li>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    User Strategy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
                    <div class="mb-10 w-full mt-4">
                        <h4 class="mb-9 text-lg font-semibold text-white">Company</h4>
                        <ul>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    About Matic UI
                                </a>
                            </li>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    Contact Support
                                </a>
                            </li>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    Success History
                                </a>
                            </li>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    Setting Privacy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-full px-4 sm:w-1/2 lg:w-2/12">
                    <div class="mb-10 w-full mt-4">
                        <h4 class="mb-9 text-lg font-semibold text-white">Quick Links</h4>
                        <ul>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    Premium Support
                                </a>
                            </li>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    Know Our Team
                                </a>
                            </li>
                            <li>
                                <a href="" class="mb-2 inline-block text-base leading-loose text-white hover:opacity-70">
                                    Download App
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="w-full px-4 sm:w-1/2 lg:w-3/12">
                    <div class="mb-10 w-full mt-4">
                        <h4 class="mb-9 text-lg font-semibold text-white">
                            Follow Us On
                        </h4>
                        <div class="mb-6 flex items-center">
                            <a href="" class="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-white hover:border-white hover:bg-gray-300 hover:text-primary sm:mr-4 lg:mr-3 xl:mr-4">
                                <i class="bi bi-facebook"></i>
                            </a>
                            <a href="" class="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-white hover:border-white hover:bg-gray-300 hover:text-primary sm:mr-4 lg:mr-3 xl:mr-4">
                                <i class="bi bi-twitter"></i>
                            </a>
                            <a href="" class="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-white hover:border-white hover:bg-gray-300 hover:text-primary sm:mr-4 lg:mr-3 xl:mr-4">
                                <i class="bi bi-instagram"></i>
                            </a>
                            <a href="" class="mr-3 flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 text-white hover:border-white hover:bg-gray-300 hover:text-primary sm:mr-4 lg:mr-3 xl:mr-4">
                                <i class="bi bi-linkedin"></i>
                            </a>
                        </div>
                        <p class="text-base text-white">© 2025 Matic UI</p>
                    </div>
                </div>
            </div>
        </div>
        {/* footer section end */}

































    </>


}

export default Home