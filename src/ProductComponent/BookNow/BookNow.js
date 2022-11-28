import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BookNow = ({product}) => {
    const {OrginalePrice,reSalesPrice,company,name,phone}=product
    const {user,loader}=useContext(AuthContext)
    console.log(product);
    const toasts = ()=>{
      toast.success('Booked')
      navigate(from,{replace:true})
    }
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/"
    
    if(loader){
        return <div className="flex justify-center items-center h-screen bg-green-300">
        <div className="grid gap-2">
             
            <div className="flex items-center justify-center ">Loading
                <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
            </div>
        </div>

    </div>
    }
    return (
        <div>
           {/* The button to open modal */}


{/* Put this part before </body> tag */}
<input type="checkbox" id="bookNow" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <div>
    <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input type="text"  defaultValue={company} readOnly className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Salar Name</span>
          </label>
          <input type="text" defaultValue={user?.displayName} readOnly className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" readOnly defaultValue={user?.email} className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone</span>
          </label>
          <input type="text"  defaultValue={phone} className="input input-bordered" />
          <label className="label">
           
          </label>
        </div>
        <div>
          
          
          <p className='text-primary'>Location:</p>
        

         
          <textarea className="textarea" placeholder="Bangladesh ,Dhaka ,New Market"></textarea>
        </div>
       
        <div className="form-control mt-6">
          <Link >
          
          <button  onClick={toasts}  className="btn btn-primary"> Submit</button>
          </Link>
          
        </div>
      </div>
    </div>
  
    
    
  </div>
</div> 
        </div>
    );
};

export default BookNow;