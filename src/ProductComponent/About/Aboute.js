import React from 'react';

const Aboute = () => {
    return (
        <div className='text-white bg-black'>

            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.pinimg.com/736x/47/76/45/477645ae152ddedb5811dd8b49ce507a.jpg")` }}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">RS MOTOR BIKE</h1>
                        {/* <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p> */}
                        <button className="btn btn-primary">Leanr More</button>
                    </div>

                </div>



            </div>

            <div>
                <div>
                    <h1 className='text-center my-6 text-5xl'>Welcome to RS Motors Bikes</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                        <div className='mx-5 my-3'>
                            <div>
                                <p className='my-3'>Welcome to RS Motor Bikes, the motorbike division of the RS Motor Bikes Group. As of March 2022 Thunder Road Motor Bikes is a proud part of RS Motoring Group too. Across our 11 locations we house over 1,500 new and premium used motorbikes. You read that right 1,500!</p>
                                <p className='my-3'>We have one of the largest ranges of new motorcycles for sale in the Asia! With our free motorbike delivery service, there’s no need to constrain your search for the perfect bike! Whether you’re looking for motor Bikes for sale in England, Wales or Scotland, our FREE delivery service means you’re always local to RS Motor Bikes! All of our deliveries are RS by ourselves! No courier companies… All of our bikes are delivered by passionate bikers who work for RS Motor Bikes.</p>
                                <p className='my-3'>The low-mileage, high-quality, second-hand motorbikes for sale in all of our centres, together with new bikes from Ducati, Honda, Indian Motorcycle, Kawasaki, Mv Agusta, Suzuki, Triumph and Yamaha make RS Motor Bikes the perfect destination whatever your budget! </p>


                            </div>

                        </div>
                        <div className='my-3 mx-5'>
                            <div>
                                <p className='my-3'>James and Rob Ayland manage and own RS Motor Bikes and are both passionate bikers - never happier than when talking about motorbikes and racing. Their love for motorbike racing has seen RS Motor Bikessponsor The British Superbike Series since 2019, Continuing into the 2023 Season. At the start of the 2021 Season The RS Motor Bikes Affinity Sports Academy was launched. This was the beginning of Completely Motorbikes supporting 8 young riders in the British Championship as part of Leon Haslam’s Academy.</p>
                                <p className='my-3'>2022 saw RS Motor Bikes sponsor the Academy for a second year, sponsoring young riders in both the Junior Superstock and Junior Supersport classes. This year we became Completely Champions, as James McManus brought home the gold in the Junior Supersport series! Not to mention all the podium finishes from all the other riders, well done team - what a mega year!</p>
                                <p className='my-3'>Throughout the years our love for everything motorbikes has translated into helping young Charlie Nesbitt win a British Moto 3 Championship in 2016. And we even backed a certain Bradley Smith during his rise through the ranks to MotoGP as a youngster. </p>
                                <p className='my-3'>One of our many experienced sales team across the group will be more than happy to talk bikes and show you around! They are all avid motorcyclists in their spare time with a good number of years experience between them.. and most of all, will always greet you with a smile on their face!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mx-10 my-5'>
                <div>
                    <div className="card  shadow-xl">
                        <figure><img className='w-full' style={{ height: "350px" }} src="https://i.pinimg.com/originals/5b/55/bd/5b55bd5d1f0459942e1921b8c73be2f7.jpg" alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-5xl">
                                RS Motor Bikes Nationwide Showrooms
                                <div className="badge badge-lime-500"></div>
                            </h2>

                            <div className="card-actions justify-start">
                                <div className="badge p-4 my-4 hover:bg-primary bg-lime-500 text-black font-bold">VIEW OUR LOVATIONS</div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* no presoure selling */}
            <div className='mx-4 my-5'>
                <div >

                    <div className="card lg:card-side  ">
                        <figure><img className='w-full ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQykKe_y5eS9fNx2B2XejxAQRTtfl9W1Mmryw&usqp=CAU" alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">No Pressure Selling</h2>
                            <p>When you visit our motorbike dealerships, you won't be subject to any high pressure, pushy sales techniques. Our teams are there to help you make an informed decision. Relax, take your time and ask us all the questions you want answers to.</p>
                          
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Aboute;