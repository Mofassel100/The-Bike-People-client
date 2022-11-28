import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import SellarRole from '../../Hooks/SellarRoles';
import BookNow from '../BookNow/BookNow';
import { FaBeer, FaCheck, FaMars } from 'react-icons/fa';


const Product = () => {
    // AiOutlineCheck
    const {user}=useContext(AuthContext)
    const productsData = useLoaderData()
    const [isSeller]=SellarRole(user?.email)
    return (
        <div >
              <div className=''>
                        {
                            productsData?.map(product => <>
                               
                                <div className="card my-5   shadow-xl bg-green-200">
                                    <figure><img className='img flued' src={product?.picture} alt="Album" /></figure>
                                    <div className="card-body ">
                                        <h2 className="card-title text-center">{product?.name}</h2>
                                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center'>
                                        <p className=''><span className='text-'>Orginal Price : </span><span className='text-green-400'>{product?.OrginalePrice}</span></p>
                                        <p> Sales Prices : {product?.reSalesPrice}</p>
                                        <p>Used Times : {product?.age}</p>
                                        <p>Location : {product?.location? <><p>{product?.location}</p></>: <><p>Not Fund</p></>}</p>
                                        <p>Phone: {product?.phone? <><p>{product?.phone}</p></>: <><p>Not Fund</p></>}</p>
                                        <p>Sellar Name : {product?.role? <><p>{product?.role}</p></>: <><p>Not Fund</p></>}</p>
                                        <p>Verifi Stutas : {isSeller?<><FaCheck className='bg-green-700  '></FaCheck></>:<></>}</p>
                                        <p>Post Time : {product?.Year? <><p>{product?.Year}</p></>: <><p>Not Fund</p></>}</p>
                                        
                                        </div>
                                        
                                      
                                        <div className="card-actions justify-center">
                                           
                                            <label htmlFor="bookNow" className="btn btn-primary">Book Now</label>
                                        </div>
                                    </div>
                                </div>
                               

                           
                             <div>
                             <BookNow  product={product}></BookNow>
                             </div>
                            
                               

                        </>)
                        }
                    </div>


        </div>
     
            
            

                  
            
         
           

            
            
        

      
    );
};

export default Product;