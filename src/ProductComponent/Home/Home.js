import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['catagory'],
    queryFn: async () => {
      const res = await fetch('https://final-resale-project-assignment.vercel.app/catagory')
      const data = await res.json()
     
      return data;
    }
  })

  if (isLoading) {
    return <>
       <div className="flex justify-center items-center h-screen bg-green-300">
            <div className="grid gap-2">
                 
                <div className="flex items-center justify-center ">Loading
                    <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
                </div>
            </div>

        </div></>
  }
 
  return (
    <div>
      <div>
        <h1 className="text-center text-4xl my-4 text-teal-500">Re-Sales Motor Bikes Collection</h1>
      </div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2014_Zero_Motorcycles_Zero_S.JPG/640px-2014_Zero_Motorcycles_Zero_S.JPG" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://bd.gaadicdn.com/processedimages/aprilia/aprilia-sr-150/494X300/m_sr-150_11540291105.jpg?imwidth=880" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://www.drivespark.com/images/2020-10/aprilia-rs-660-1.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://images.hindustantimes.com/auto/img/2022/09/29/1600x900/Zero_SRS_1664461438743_1664461443823_1664461443823.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
      <div className='my-10'>
        <h1 className="text-4xl my-6 text-center">Product Sales</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        

        {data?.map(catagory =>
        
       
            <div key={catagory._id}  className=''>
              
              <div className="hero min-h-screen" style={{ backgroundImage: `url(${catagory?.picture})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-cyan-400 font-bold">{catagory?.name}</h1>
                    <p className="mb-5 text-pink-300">{catagory?.company}</p>
                   <div className='mt-10'>
                   <Link to={`/products/${catagory?.company}`} className='text-xl btn btn-success text-pink-300 '>Buy Now {catagory?.company} MotorBikes</Link>
                   </div>
                   
                  </div>
                </div>
              </div>
            </div>
   
        )}

      </div>
      </div>

      <div className='my-4'>
        <h1 className="text-center text-3xl">RE - Sales MotorCycle</h1>
        <p>motorcycle, any two-wheeled or, less commonly, three-wheeled motor vehicle, usually propelled by an internal-combustion engine.</p>
        <h1 className="text-center text-3xl my-2"> MotorCycle History</h1>
        <p>ust as the automobile was the answer to the 19th-century dream of self-propelling the horse-drawn carriage, the invention of the motorcycle created the self-propelled bicycle. The first commercial design was a three-wheeler built by Edward Butler in Great Britain in 1884. It employed a horizontal single-cylinder gasoline engine mounted between two steerable front wheels and connected by a drive chain to the rear wheel.

</p>
        
      </div>
    

    </div>
  );
};

export default Home;