import React from 'react';
import Link from "next/link";
import walmart from '../../walmart copy.png';
import micro from '../../micro copy.png';
import google from '../../google copy.png';
import iv from '../../hi copy.png';
import ui from '../ui.png';
import bi from '../design.png';
import img1 from '../../img1.png';
import img2 from '../../Illustration.png';
import img3 from '../../no.png';
import img4 from '../../last.png';
import img5 from '../f.png'
import img6 from '../../call.png'
import img7 from '../../contact.png'
import img8 from '../Activity.png'
import img9 from '../../ok.png'
import img10 from '../../photo.png'
import img11 from '../../right.png'
import img12 from '../../im.png'
import img13 from '../../welcome.png'
import img14 from '../../aws.png'
import img15 from '../../figma.png'
import img16 from '../../mongo.png'
import img17 from '../../dash.png'
import img18 from '../../xd.png'
import img19 from '../../react.png'
import img20 from '../../gitlab.png'
import img21 from '../../dice.png'
import img22 from '../../Group.png'
import img23 from '../../node.png'
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
      
      <main className="container mx-auto py-6 bg-white font-geist">
        <section className="mx-6 px-3">
          <div className='text-left'>
            <h1 className="text-4xl font-bold mb-5 mt-7 font-geist text-black">Let's Unlock Next</h1>
            <h2 className="text-gray-600 mb-8 text-[10px] font-geist">DISCOVER UNPRECEDENTED EFFICIENCY WITH OUR MOST ADVANCED, INTUITIVE, AND USER-CENTRIC UPDATE YET.</h2>
          </div>
          <div className="flex justify-start space-x-4 mb-8 px-3">
            <img src={google.src} alt="Google" className="h-4" />
            <img src={micro.src} alt="Microsoft" className="h-4" />
            <img src={walmart.src} alt="Walmart" className="h-4" />
            <img src={google.src} alt="Google" className="h-4" />
          </div>
        </section>

        <div>
          <img src={iv.src} className='' alt="Main Visual" />
        </div>

        <section id="services" className="mt-12 mx-6 px-3">
          <h2 className="text-3xl text-left text-black mb-6">Services</h2>
          <p className='text-gray-500 text-[10px] mb-8'>Clients trust Us From Our Clarity. High Performance And Intuitive Functionality Across Every Stage Of The Software Development process</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <div className="bg-gray-100 p-6 rounded-lg border-t-4 border-black h-[13rem] shadow-first">
              <h3 className="text-[14px] font-bold mb-4 text-black">DATA AUTOMATION</h3>
              <div className='space-y-5 space-x-3'>
                <p className="text-gray-500 text-[7px]">From automation to artificial intelligence, discover a world where quality work is the standard.</p>
                <img src={img4.src} className='h-[6rem]' alt="Data Automation" />
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg border-t-4 border-black h-[13rem] shadow-first">
              <h3 className="text-[14px] font-bold mb-4 text-black">PRODUCT DESIGN</h3>
              <p className="text-gray-500 text-[8px]">From automation to artificial intelligence, discover a world where quality work is the standard.</p>
              <div className='flex justify-center'>
                <img src={img1.src} className='h-[6rem]' alt="Product Design" />
              </div>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg border-t-4 border-black h-[13rem] shadow-first">
              <img src={img3.src} className='h-[4rem]' alt="Platform and Product Engineering" />
              <h3 className="text-[14px] font-bold mb-4 text-black">PLATFORM AND PRODUCT ENGINEERING</h3>
              <p className="text-gray-500 text-[7px]">From automation to artificial intelligence, discover a world where quality work is the standard.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg border-t-4 border-black h-[13rem] shadow-first">
              <h3 className="text-[14px] font-bold mb-4 text-black">SCALABLE AND AGILE DELIVERY</h3>
              <p className="text-gray-500 text-[7px]">From automation to artificial intelligence, discover a world where quality work is the standard.</p>
              <img src={img2.src} className='h-[6rem]' alt="Scalable and Agile Delivery" />
            </div>
          </div>
        </section>

        <section className="py-16 mx-6 px-3 bg-white">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl text-left text-black  mb-6">CAPABILITIES</h2>
            <p className="text-[10px] text-left text-gray-500 mb-8">Clients Trust Us For Our Clarity, Structure, High Performance And Intuitive Functionality Across Every Stage Of The Software Development Process.</p>
            <div className="flex justify-start space-x-16 text-[9px]">
              <span className="font-bold ">ARTIFICIAL INTELLIGENCE</span>

              <span  className="font-bold">CLOUD AND DATA</span>
              <span  className="font-bold ">INTERNET OF THINGS</span>
            </div>
          </div>
        </section>

        <section className="py-9  bg-gray-200  ">
          <div className="container mx-6  text-black">
            <h2 className="text-3xl font-geist  mb-8 text-left">INDUSTRIES</h2>
            <p className="text-left text-[10px] font-geist mb-8">Clients Industry Expertise Enhances Your Innovation And Improves Your Customers’ Experience.</p>
            <div className="bg-white p-8 rounded-lg shadow-lg w-[29rem]">
              <h3 className="text-1xl  mb-4">HEALTHCARE</h3>
              <div className="grid grid-cols-3 gap-4 text-[8px] ">
                <div className="p-4 border ">LIFE SCIENCES TOOLS & SERVICES</div>
                <div className="p-4 border">HEALTHCARE BOOKING</div>
                <div className="p-4 border">DATA COLLECTION</div>
                <div className="p-4 border">LIFE SCIENCES TOOLS</div>
                <div className="p-4 border">HEALTHCARE INVENTORY & REPORTING</div>
                <div className="p-4 border">TOOLS & SERVICES</div>
              </div>
            </div>
            <div className="mt-8 space-y-3 w-[29rem]">
              <div className="p-4 border-t border-b bg-slate-50">ARTIFICIAL INTELLIGENCE</div>
              <div className="p-4 border-t border-b bg-slate-50">DEFI</div>
              <div className="p-4 border-t border-b bg-slate-50">HEALTHCARE</div>
              <div className="p-4 border-t border-b bg-slate-50">FINANCE</div>
              <div className="p-4 border-t border-b bg-slate-50">EDUCATION</div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white text-black">
          <div className="container  text-center">
            <h2 className="text-2xl  mb-8">TECHNOLOGIES WE USE</h2>
            <div className="grid grid-cols-8 text-[5px]">
              <div className="p-4">Frontend</div>
              <div className="p-4">Backend</div>
              <div className="p-4">Mobile</div>
              <div className="p-4">Database</div>
              <div className="p-4">Frameworks</div>
              <div className="p-4">DveOps</div>
              <div className="p-4">Cloud</div>
              <div className="p-4">Python</div>
            </div>

         
            <div className='grid grid-cols-7 space-between justify-center p-7'>
  <div className='h-[1rem]'>
    <img src={img14.src} className='h-full' />
    </div>
  <div className='h-[1.2rem] '><img src={img15.src} className='h-full' /></div>
  <div className='h-[1.5rem]'><img src={img16.src} className='h-full' /></div>
  <div className='h-[1.5rem]'><img src={img17.src} className='h-full' /></div>
  <div className='h-[1.5rem]'><img src={img18.src} className='h-full' /></div>
  <div className='h-[1.5rem]'><img src={img19.src} className='h-full' /></div>
  <div className='h-[1.5rem]'><img src={img20.src} className='h-full' /></div>
  <div className='h-[1.5rem]'><img src={img21.src} className='h-full' /></div>
  <div className='h-[1.5rem]  '><img src={img22.src} className='h-full' /></div>
  <div className='h-[1.5rem]'  ><img src={img23.src} className='h-full' /></div>
</div>


        </div>
        </section>


<section className=' bg-gray-800'>
  <div className='mx-9 py-11'>
  <div className='flex justify-between'>
    <div className=''>
      <h3 className='text-2xl font-geist  mb-1 text-left text-white'>CASE STUDIES</h3>
      <p className='text-left text-[8px] font-geist mb-8 text-white '>Clients trust us for our clarity, structure, high performance and intuitive functionality across every stage.</p>
    </div>
    <button className='w-[2rem] h-[2rem] bg-gray-100'><img src={img11.src} className='p-2'/> </button>
              <button className='w-[2rem] h-[2rem] bg-gray-100'> <img src={img11.src} className='p-2'/> </button>
  </div>
  <div className=" grid grid-cols-4 md:grid-cols-3 gap-[16rem] ">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="  w-[15rem] h-[16rem]  bg-gray-600 border border-white">
                <div className='p-4'>
                  <img src={img24.src}/>
                </div>
                <div className='mx-5'>
                <h3 className="text- text-left text-white">DEVELOPED A MOBILE APP TRANSFORMATIVE</h3>
                <p className="text-white text-[7px] ">See how we developed a mobile app with the transformative power of advanced design.</p>
                </div>
              </div>     
            ))}

          </div>
          <div className='flex justify-center mt-[3rem]'>
          <button className='w-[9rem] h-[2rem] bg-black p-2 text-[9px] mb-2 text-white font-bold '>DASH MICRO SYSTEM</button>
          <button className='w-[2rem] h-[2rem] bg-gray-100'><img src={img11.src} className='p-2'/> </button>
          </div>
  </div>
 
</section>





        <section className='py-16 mx-11 '>
          <h1 className='text-2xl font-geist mb-8 text-black'>OUR PROCESS</h1>
          <div className='mb-[4rem] mx-8'>
            <div className=''> <img src={img6.src} className='w-[3rem]'/></div>       
            <div className='font-geist'>
            <h1 className='text-black font-geist text-1xl'>Join exploration call</h1>
            <p className='text-gray-500 text-[10px] font-geist'> Tell us more about your business on a discovery call. We'll discussteam structure and approch sucess criteria,timescale,budget,and required skill sets to see how we can help.</p>
            </div>
          </div>

          <div className='mb-[4rem] mx-[2rem]'>
            <img src={img7.src} className='w-[3rem] '/>
            <div className='text-left '>
            <h1 className='text-black font-geist text-1xl'>Discuss Solution and team structure</h1>
            <p className='text-gray-500 text-[10px] font-geist'>In a matter of dats, we will finalize your project specifications,agree on an enagagement model select and onboard your team.</p>
            </div>
          </div>


          <div className=' mx-[2rem]'>
            <img src={img7.src} className='w-[3rem] '/>
            <div className='text-left'>
            <h1 className='text-black font-geist text-1xl'>Get started and track performance</h1>
            <p className='text-gray-500 text-[10px] font-geist'> Once we agreed on milestones, we'll immediately get to work.
            We'll track progress, report updates,and continuos adapt to your needs.</p>
            </div>
          </div>
          <div className='flex p-5 mx-3' >
          <button className='bg-black h-[2rem] w-[10rem] p-2 text-[10px] font-geist text-white'>Get in touch -> </button>
          </div>
        </section>


        <section className='py-16 p-5 mb-8'>
          <div className='font-geist text-center mb-9 space-y-3' >
            <h1 className='text-2xl text-black'>WHAT OUR CLIENTS SAY</h1>
            <p className='text-gray-500 text-[12px]'>Computools' industry expertise enhances your innovation and improves your customers' experience.</p>
          </div>

          <div className='flex '>
            <div className='space-y-12 p-4'>
            
            <p className='text-gray-500 text-[13px]'>“Lorem ipsum dolor sit amet, consectetur   adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus.</p>
            <div className='space-y-2'>
            <div className='flex space-x-2'>
              <p className='text-black text-[8px]'>John Robert</p>
              <p className='text-gray-500 text-[8px]'>Senior Java Developer</p>
            </div>
            <div className='flex space-x-3 '>
              <button className='w-[2rem] h-[2rem] bg-gray-100'><img src={img11.src} className='p-2'/> </button>
              <button className='w-[2rem] h-[2rem] bg-gray-100'> <img src={img11.src} className='p-2'/> </button>
            </div>
            </div>
            </div>
            <img src={img10.src} className='border border-black border-3 h-[10rem] '/>
          </div>

        </section>



        <section className="relative flex flex-col items-center">
  <div className='relative z-10 mx-11'>
    <div className='p-4 h-[17rem] w-[27rem] bg-black'>
      <div className='justify-center text-center mb-12'>
        <h1 className='text-2xl text-white'>EXCELLENCE</h1>
        <p className='text-gray-500 text-[10px]'>
          Tell us more about your business on a discovery call. We’ll discuss team structure and approach, success criteria, timescale, budget, and required skill set.
        </p>
      </div>
      <div className='space-y-4'>
        <img src={img13.src} />
        <div className='flex justify-center'>
          <p className='text-[10px] text-center'>Get in touch</p>
          <img src={img11.src} />
        </div>
      </div>
    </div>
  </div>
  <div className='absolute bottom-[15rem]'>
    <img src={img12.src} />
  </div>
</section>



        <section className="text-left  p-12 my-7 font-geist">
          <h2 className="text-2xl  mb-6 text-black">OUR OFFICES</h2>
          <p className="text-gray-500 mb-8 text-[13px]">
            Computools Provides Software Development Services Worldwide. Get In Touch With One Of Our Experts In Your Region.
          </p>
          <div className=" grid grid-cols-4 md:grid-cols-3 gap-[13rem] ">
            {[1, 2, 3, 4].map((_, index) => (
              <div key={index} className="bg-white shadow-md p-6 w-[12rem] h-[13rem] rounded-lg border border-gray-300">
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
