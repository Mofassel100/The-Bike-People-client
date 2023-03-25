import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const EshopSefty = () => {
    const data = useLoaderData()

    console.log(data);
    return (
        <div className='text-white bg-black'>
            <div>
                <div className='hove:border-'>
                    <Link to="/hand">
                        <div  className="hero hover:visible min-h-screen" data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="1000">
                            <div className="hero-content flex-col lg:flex-row">
                                <img src="https://images.ctfassets.net/x7j9qwvpvr5s/1yZbjxuMxAth3XnBBnB9hM/e967acc366890cc0157d6531740b163d/Shop-Ducati-banner-wide-663x249.jpg" className="max-w-sm h-80  rounded-lg shadow-2xl" />
                                <div className='max-w-sm w-96'>
                                    <h1 className="text-5xl font-bold">Take your safety into your own hands ! </h1>
                                    <p className="py-6">Out of all your body your hands are the part that have most influence over the way you ride ,so protecting them from impact and abrasions is key .</p>
                                    <Link  className="btn btn-primary" to="/hand">More Details....</Link>
                                    
                                </div>
                            </div>
                        </div>

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default EshopSefty;