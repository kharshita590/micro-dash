import React from 'react';
import Link from "next/link";
import walmart from '../walmart.png';
import micro from '../micro.png';
import google from '../google.png';
import iv from '../hi.png';
import ui from '../ui.png';
import bi from '../../m.png';
import img1 from '../../bg.png';
import img9 from '../../ok.png'
import img10 from '../../exam.png'
import img11 from '../../right.png'

import img24 from '../../Image Placeholder.png'

export default function Home() {
     const data =[
        {
            no:"01",
            one:"Accessibility",
            two:"Developing an accessible platform that puts user needs and satisfaction first."
        },
        {
            no:"02",
            one:"Innovation",
            two:"Leveraging technology thoughtfully to expand possibilities for expression, creativity, and community."
        },
        {
            no:"03",
            one:"Connection",
            two:"Enabling deeper connections through shared experiences rather than unfiltered broadcasting."
        },
        {
            no:"04",
            one:"Ownership",
            two:"Designing pathways for creators to own their content, thrive economically, and participate in governance"
        },
        {
            no:"05",
            one:"Respect",
            two:"Fostering respectful discourse and upholding legal speech by combining user oversight with safeguards."
        },
        {
            no:"06",
            one:"Control",
            two:"Providing users control over their data and online footprint across spaces."
        }
     ]


  return (
    <div className="flex flex-col items-center justify-center min-h-screen  font-geist">   
      <header className="w-full bg-white shadow-md">
        <div className="container py-5 flex justify-between items-center h-[calc(12vh-9vh)]">
          <nav className="md:flex space-x-2.5 text-[8.19px]">
            <button className='bg-black h-[2.5rem] p-2'>
              <a href="#services" className="text-white hover:text-gray-800 font-bold bg-black">DASH MICRO SERVICES</a>
            </button>
            <a href="#about" className="text-gray-600 hover:text-gray-800">SERVICES + </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">INDUSTRIES +</a>
            <a href="#services" className="text-gray-600 hover:text-gray-800">CASESTUDIES</a>
            <a href="#about" className="text-gray-600 hover:text-gray-800">ABOUT US</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-800">COMPANY</a>
            <button className='bg-black h-[2.5rem] p-3'>
              <a href="#contact" className="text-white hover:text-gray-800">GET IN TOUCH -> </a>
            </button>
          </nav>
        </div>
      </header>
      
      
      <main className="font-geist container mx-auto py-6 bg-white font-geist">
      <section className="text-left p-10 font-geist ">
    <div className="h-50 bg-cover bg-center " 
      style={{ backgroundImage: `url(${img1})` }}
      >
   <h1 className='text-black text-2xl '>ABOUT COMPUTOOLS</h1>
   <p className='text-gray-500 text-[10px] '>Computools shapes the future with products, services and solutions that businesses need to Unlock Tomorrow. We are a global company that delivers on the world-changing ideas that we co-create together with our clients.</p>
      </div>
   </section>
    
<img src={img10.src}/>


<section className='text-left  p-10 font-geist'>
    <div className=''>
    <h2 className='text-[1.6rem]  font-geist  mb-2 text-left text-black' >SOPHIE IS BASED ON THREE PRINCIPLES</h2>
    <p className=' text-[8px] text-gray-500 mb-10' >As Head of Marketing, you want to use the web app as a dynamic platform for brand storytelling, targeted campaigns and personalised audience engagement. This will allow you to make the most of content marketing, integrate with social media, and personalise recommendations. This way, you can increase brand awareness, website traffic and provide qualified leads.</p>
    </div>
    <div className='grid grid-cols-3 md:grid-cols-3 gap-[16rem] overflow-x-hidden'>
        {[1,2,3].map((_,index)=>(
            <div key={index} className='w-[15rem] h-[16rem] p-4 shadow-md border border-gray-100'>
            <h1 className='p-4 mb-6'>01</h1>
            <p className='text-gray-500 text-[8px] mb-8'>As Head of Marketing, you want to use the web app as a dynamic platform for brand storytelling, targeted campaigns and personalised audience engagement.</p>         
            <p className='text-gray-500 text-[8px] mb-5'>This will allow you to make the most of content marketing, integrate with social media, and personalise recommendations. This way, you can increase brand awareness, website traffic and provide qualified leads.</p>
        </div>
        ))}
    </div>
</section> 


<section className=' bg-white mx-2'>
  <div className='mx-12 py-11'>
  <div className='flex justify-between '>
    <div className=''>
      <h3 className='text-2xl font-geist  mb-1 text-left text-black'>VALUES</h3>
      <p className=' whitespace-normal text-left text-[8px] font-geist mb-8 text-gray-600 '>Clients trust us for our clarity, structure, high performance and intuitive functionality across every stage.</p>
    </div>
    <div className='flex space-x-1'>
    <button className='w-[2rem] h-[2rem] bg-gray-100'><img src={img11.src} className='p-2'/> </button>
              <button className='w-[2rem] h-[2rem] bg-gray-100'> <img src={img11.src} className='p-2'/> </button>     
</div>
  </div>
  <div className=" grid grid-cols-4 md:grid-cols-3 gap-[16rem] overflow-x-hidden   ">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="  w-[15rem] h-[10rem]  bg-white border border-gray-100">
                
                <div className=' p-8'>
                <h3 className="text- text-left mb-6 text-black">01</h3>
                <p className="text-gray-500 text-[7px] ">As Head of Marketing, you want to use the web app as a dynamic platform for brand storytelling, targeted campaigns and personalised audience engagement.</p>
                </div>
              </div>     
            ))}

          </div>
        
  </div>
 
</section>

<section className='bg-black  py-7'>
    <div className='mx-[3.5rem] mb-9'>
        <h1 className='text-2xl font-geist  mb-1 text-left text-white'>THE DIFFERENCE</h1>
    </div>
    <div className=''>
  {data.map((item, index) => (
    <div key={index} className='text-white flex  space-x-4 space-y-9'>
      <div className='flex space-x-[5rem] mx-[4rem]'>

        <p className='text-[14px]'>{item.no}</p>
        <p className='text-[14px]'>{item.one}</p>
      </div>
     
      <p className='text-[8px] text-gray-300'>{item.two}</p>
      <hr/>
     
    </div>
  ))}
</div>


</section >

<section className='text-left  mx-2 p-10 font-geist'>
    <div className=''>
    <h2 className='text-[2rem] font-geist  mb-1 text-left text-black' >THE CHALLENGE</h2>
    <p className=' text-[8px] text-gray-600 mb-12' >As Head of Marketing, you want to use the web app as a dynamic platform for brand storytelling, targeted campaigns and personalised audience engagement. This will allow you to make the most of content marketing, integrate with social media, and personalise recommendations. This way, you can increase brand awareness, website traffic and provide qualified leads.</p>
    </div>
    <div className='grid grid-cols-3 md:grid-cols-3 gap-[16rem] overflow-x-hidden'>
        {[1,2,3].map((_,index)=>(
            <div key={index} className='w-[15rem] h-[16rem] p-4 shadow-md border border-gray-100'>
                <h1 className='p-4 mb-6'>01</h1>
                <p className='text-gray-500 text-[8px] mb-8'>As Head of Marketing, you want to use the web app as a dynamic platform for brand storytelling, targeted campaigns and personalised audience engagement.  </p>
                <p className='text-gray-500 text-[8px] mb-5'>This will allow you to make the most of content marketing, integrate with social media, and personalise recommendations. This way, you can increase brand awareness, website traffic and provide qualified leads.</p>
            </div>
        ))}
    </div>
</section>



<section className="text-left  p-12 mx-3  font-geist">
          <h2 className="text-2xl  mb-6 text-black">OUR OFFICES</h2>
          <p className="text-gray-500 mb-8 text-[13px]">
            Computools Provides Software Development Services Worldwide. Get In Touch With One Of Our Experts In Your Region.
          </p>
          <div className=" grid grid-cols-4 md:grid-cols-3 gap-[13rem] ">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-white shadow-md p-6 w-[12rem] h-[13rem] rounded-lg border border-gray">
                <h3 className="text-lg  mb-2 text-black">UNITED STATES</h3>
                <p className="text-gray-600 mb-[4rem] text-[10px]">New York, 430 Park Ave, NY 10022</p>
                <p className="text-gray-600 mb-2 text-[8px]">+44 (0) 793 9311 355</p>
                <p className="text-gray-600 text-[8px]">mail@dashmicro.com</p>
              </div>
            ))}
        
          </div>
        </section>



        <footer className='w-full py-6 bg-gray-300 text-white'>
          <div className='container flex justify-between items-center '>
            <div className='p-9'>
              <button className='w-[9rem] h-[2rem] bg-black p-2 text-[9px] mb-2 text-white font-bold '>DASH MICRO SYSTEM</button>
              <div className='space-y-1'>
                <p className='text-[10px] text-gray-500'>Copyright © 2024</p>
                <p className='text-[10px] text-gray-500'>DASH MICRO SYSTEMS pvt ltd</p>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-3 mt-[-2rem] text-[8px] font-geist text-gray-500 ">
              <a href="#" className="hover:underline">HOME</a>
              <a href="#" className="hover:underline">INDUSTRIES</a>
              <a href="#" className="hover:underline">CASESTUDIES</a>
              <a href="#" className="hover:underline">ABOUT US</a>
              <a href="#" className="hover:underline">COMPANY</a>
              <a href="#" className="hover:underline">SERVICES</a>
              <a href="#" className="hover:underline">PRIVACYPOLICY</a>
            </div>
            
          </div>
          <div className='mx-9 space-y-3'>
            <hr className='bg-black'></hr>
              <img src={img9.src} />
            </div>
        </footer>



        

      </main>
      
     
    </div>
  );
}
