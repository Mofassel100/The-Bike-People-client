import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BookNow = ({product}) => {
    const {OrginalePrice,reSalesPrice,company,name,phone}=product
    const {user,loader}=useContext(AuthContext)
    console.log(product);
    const toasts = ()=>{
      toast.success('Booked')
    }
    
    if(loader){
        return <h1 className='text-center'> Loader</h1>
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
          <input type="text" defaultValue={company} readOnly className="input input-bordered" />
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
          <input type="text" defaultValue={user?.email} className="input input-bordered" />
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
          <button onClick={toasts} className="btn btn-primary"> Submit</button>
        </div>
      </div>
    </div>
    {/* <h3 className="font-bold text-lg text-center">{company}</h3>
    <div className='grid '>
    <p className="py-4">Orginal Price : {OrginalePrice}</p>
    <p className="py-4">Sales Price : {reSalesPrice}</p>
    <h4>Salar Name : {user?.displayName}</h4>
    <h1>Salar Email :{user?.email}</h1> */}

    {/* </div>
    <p>Phone : {phone}</p>
    */}
   
    
    
  </div>
</div> 
        </div>
    );
};

export default BookNow;