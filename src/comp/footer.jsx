import React from 'react';

const Footer = () => {
    return (
        <div className="mt-14">
      <div className="bg-green-500 h-48 flex">
        <div className="ml-14 items-center mt-9">
          <h1 className='text-2xl font-bold'>PT. Enak Lezat </h1>
          <h3 className='text-xl '>199 Tower - 13th Floor</h3>
          <h3 className='text-xl'>Jl. Pasundan Raya No.19, Grogol </h3>
          <h3 className='text-xl'>Jakarta 13245</h3>
        </div>
        <div className="ml-14 items-center mt-9">
          <h1 className='text-2xl font-bold'>Contact </h1>
          <h3 className='text-xl '>Email : NusantaraFood&Drink@gmail.com</h3>
          <h3 className='text-xl'>Phone : (021)66489279 </h3>
          <h3 className='text-xl'>Instagram : NusantaraFood&Drink</h3>
        </div>
        <div className="ml-auto items-center mt-9 flex">
          <h3 className=' '><a href="" className=' hover:text-white'><img src="gmm9.png" alt="" className='w-12'  /></a></h3> 
          <h3 className=' '><a href=""><img src="gmm10.png" alt="" className='w-12' /></a></h3> 
          <h3 className=' '><a href=""><img src="gmm11.png" alt="" className='w-12' /></a></h3> 
          <h3 className=' '><a href=""><img src="gmm12.png" alt="" className='w-12' /></a></h3> 
        </div>
        
      </div>
      <div className="">
      <footer className="bg-green-400 p-4 text-white text-center">
      <div className="container mx-auto">
        <p className='font-bold text-2xl'>&copy; NusantaraFood&Drink 2024. </p>
      </div>
    </footer>
      </div>
    </div> 
  );
}

export default Footer;
