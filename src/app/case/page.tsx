import React from 'react';
import bi from '../../m.png';
import img1 from '../../bg.png';
import img9 from '../../ok.png'
import img11 from '../../right.png'
import img3 from '../../green.png'
import img24 from '../../Image Placeholder.png'

export default function Home() {
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
      <section className="text-left p-10 font-geist " 
       style={{ backgroundImage: `url(${img1.src})` }}
      >

    <div className=" bg-cover bg-center " 
      >
   <h1 className='text-white text-2xl font-bold '>CASE STUDIES</h1>
   <p className='text-gray-300 text-[10px] mb-5'>Get in touch to discuss your project or service expectations. Simply fill in the form below or send us an e-mail to info@Dashmicrosystem.com</p>
   <button className='bg-white h-[2rem] w-[10rem] p-2 text-[10px] font-geist text-black'>Get in touch -> </button>
      </div>
      

   </section>
    


   


   

<section className=' bg-white'>
  <div className='mx-9 py-11'>
  <div className='flex justify-between '>
    <div className=''>
      <h3 className='text-2xl font-geist  mb-1 text-left text-black'>CASE STUDIES</h3>
      <p className='text-left text-[8px] font-geist mb-8 text-black '>Clients trust us for our clarity, structure, high performance and intuitive functionality across every stage.</p>
    </div>
    <div className='flex space-x-1'>
    <button className='w-[2rem] h-[2rem] bg-gray-100'><img src={img11.src} className='p-2'/> </button>
              <button className='w-[2rem] h-[2rem] bg-gray-100'> <img src={img11.src} className='p-2'/> </button>     
</div>
  </div>
  <div className=" grid grid-cols-4 md:grid-cols-3 gap-[16rem]">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="  w-[15rem] h-[17rem]  bg-white border border-gray-300">
                <div className='p-4'>
                  <img src={img24.src}/>
                </div>
                <div className='mx-5 '>
                <h3 className="text- text-left text-black">DEVELOPED A MOBILE APP TRANSFORMATIVE</h3>
                <p className="text-black text-[7px] mb-2 ">See how we developed a mobile app with the transformative power of advanced design.</p>

                <div className='flex space-x-2'>
                    <p className='text-[7px]'>GET IN TOUCH</p>
                    <img src={img3.src} className='h-3'/>
                </div>
                </div>
              </div>     
            ))}

          </div>
        
  </div>
 
</section>





<section className="text-left  p-12   font-geist">
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
