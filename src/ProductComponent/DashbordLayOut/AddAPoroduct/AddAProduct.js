import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
const AddAProduct = data => {
  const [startDate, setStartDate] = useState(new Date());
  const { NewRegisterUser, UpdateUsersProfils, user, loader } =
    useContext(AuthContext);
  let navigate = useNavigate();
  // image key
  const imageKey = process.env.REACT_APP_imgbb_key;
  let location = useLocation();
  let from = location.state?.from?.pathname || '/';
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const addProductSubmit = data => {
    const image = data.photoURL[0];
    const formData = new FormData();
    formData.append('image', image);
    const url = `https://api.imgbb.com/1/upload?key=${imageKey}`;
    fetch(url, {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(imageUpload => {
        const addProduct = {
          company: data.catagory,
          reSalesPrice: data.RePrice,
          name: data.names,
          picture: imageUpload.data.display_url,
          OrginalePrice: data.Orprice,
          phone: data.phone,
          commetsType: data.commetsType,
          location: data.location,
          description: data.descreption,
          Year: startDate,
          role: user?.displayName,
          email: user?.email,
          age: data.useTime,
        };
        console.log(addProduct);
        fetch('https://final-project-server-assignmen.vercel.app/addProduct', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(addProduct),
        })
          .then(res => res.json())
          .then(data => {
            toast.success('Product Add Succesfull|');
            navigate('/deshbord/myproduct');
          });
      });
  };
  if (loader) {
    return (
      <div className="flex justify-center items-center h-screen bg-green-300">
        <div className="grid gap-2">
          <div className="flex items-center justify-center ">
            Loading
            <div className="w-40 h-40 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className=" grid justify-center items-center bg-black text-white mx-2">
      <form onSubmit={handleSubmit(addProductSubmit)}>
        <p className="text-2xl ">Add New Product</p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <label className="label">
              <span className="">Product Catagory</span>
            </label>
            <select
              className="px-5 py-3 text-white bg-black border-white"
              {...register('catagory')}
            >
              <option selected className="p-3 " value="ZERO">
                ZERO
              </option>
              <option className="p-3" value="APRILIA">
                APRILIA
              </option>
              <option className="p-3" value="TVS">
                TVS
              </option>
            </select>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">Product Name</span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full text-black font-bold max-w-xs"
              {...register('names', { required: 'Name in required' })}
              placeholder="Enter Your name"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">Sellar Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              className="input input-bordered text-black font-bold w-full max-w-xs"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">Email</span>
            </label>
            <input
              type="email"
              defaultValue={user?.email}
              readOnly
              className="input input-bordered w-full text-black font-bold max-w-xs"
              {...register('eamil', { required: 'Name in required' })}
              placeholder="Enter Your name"
            />
          </div>
          <div required className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">Photo Choose</span>
            </label>
            <input
              type="file"
              className="input input-bordered w-full text-black font-bold max-w-xs"
              {...register('photoURL')}
              placeholder="Enter Your photo URL"
            />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">Orginal Price</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full max-w-xs"
              {...register('Orprice', {
                required: 'Email Address in required',
              })}
              placeholder="Enter Your Email"
            />
            <br />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">Resale Price</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full text-black font-bold max-w-xs"
              {...register('RePrice', {
                required: 'Email Address in required',
              })}
              placeholder="Enter Your Email"
            />
            <br />
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="">phone Number</span>
            </label>
            <input
              type="number"
              className="input input-bordered w-full text-black font-bold max-w-xs"
              {...register('phone', {
                required: 'phone address is Required',
                minLength: {
                  value: 11,
                  message: 'phone 11 min mum 6 caracters',
                },
              })}
              placeholder="Enter Your Number"
            />
            <br />
            {errors.resalePrice && (
              <p role="alert" className="text-red-600">
                {errors.resalePrice?.message}
              </p>
            )}
          </div>
          <div className="">
            <p className="my-2">Product Comments</p>
            <select
              required
              className="px-5 py-3 text-white bg-black border-white"
              {...register('commetsType')}
            >
              <option className="p-3" value="Excellent">
                Excellent
              </option>
              <option className="p-3" selected value="Good">
                Good
              </option>
              <option className="p-3" value="Fair">
                Fair
              </option>
            </select>
          </div>
          <div className="my-3">
            <p>Location :</p>
            <select
              required
              className="px-5 py-3 text-white bg-black border-white"
              {...register('location')}
            >
              <option className="p-3 " selected value="Dakha">
                Dakha
              </option>
              <option className="p-3" value="Chittagong">
                Chittagong
              </option>
              <option className="p-3" value="Rajshahi">
                Rajshahi
              </option>
              <option className="p-3" value="Commilla">
                Commilla
              </option>
            </select>
          </div>
          <div className="my-3">
            <p>Use Product Time :</p>
            <select
              required
              className="px-5 py-3 text-white bg-black border-white"
              {...register('useTime')}
            >
              <option className="p-3 " selected value="2 Month">
                2 Month
              </option>
              <option className="p-3 " value="4 Month">
                4 Month
              </option>
              <option className="p-3 " value="6 Month">
                6 Month
              </option>
              <option className="p-3" value="8 Month">
                8 Month
              </option>
              <option className="p-3" value="9 Month">
                9 Month
              </option>
              <option className="p-3" value="10 Month">
                10 Month
              </option>
              <option className="p-3" value="11 Month">
                11 Month
              </option>
              <option className="p-3" value="1 Year">
                1 Year
              </option>
              <option className="p-3" value="2 Year">
                2 Year
              </option>
              <option className="p-3" value="3 Year">
                3 year
              </option>{' '}
            </select>
          </div>
          <div className="my-3 ">
            <p className="py-2">Purchess Years</p>
            <DatePicker
              className="py-3 pl-3 text-white bg-black border-white"
              selected={startDate}
              onChange={date => setStartDate(date)}
            />
          </div>
          <div>
            <p className="py-3">Desccription</p>
            <textarea
              required
              {...register('descreption')}
              className="textarea textarea-secondary text-black font-bold"
              placeholder="Bio"
            ></textarea>
          </div>
        </div>
        <div className="text-center my-4">
          <button className="btn btn ">ADD PRODUCT</button>
        </div>
      </form>
    </div>
  );
};

export default AddAProduct;
