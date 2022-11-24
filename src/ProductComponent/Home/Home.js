import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['catagory'],
    queryFn: async () => {
      const res = await fetch('http://localhost:4000/catagory')
      const data = await res.json()
      console.log(data);
      return data;
    }
  })

  if (isLoading) {
    return <h1>Loaserdf</h1>
  }
  console.log(data);
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
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
          <>
            <div className=''>
              
              <div className="hero min-h-screen" style={{ backgroundImage: `url(${catagory?.picture})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                    <h1 className="mb-5 text-5xl text-cyan-400 font-bold">{catagory?.name}</h1>
                    <p className="mb-5 text-pink-300">{catagory?.company}</p>
                   <div className='mt-10'>
                   <Link to={`/products/${catagory?.company}`} className='text-2xl btn btn-success text-pink-300 '>Buy Now {catagory?.company} MotorBikes</Link>
                   </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

      </div>
      </div>
    

    </div>
  );
};

export default Home;