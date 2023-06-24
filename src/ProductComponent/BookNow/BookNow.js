import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BookNow = ({ product }) => {
  const { OrginalePrice, reSalesPrice, company, name, phone } = product;
  const { user, loader } = useContext(AuthContext);
  console.log(product);
  const toasts = () => {
    toast.success('Booked Sucess Full');
    navigate(from, { replace: true });
  };
  const [closemodal, setCloseModale] = useState(true);
  const closeModale = () => {
    navigate(from, { replace: true });
    setCloseModale(false);
  };
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

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
  const handleBuyerOrder = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const location = form.location.value;
    const company = form.company.value;
    const modalData = {
      email,
      name,
      phone,
      location,
    };
    fetch('https://final-project-server-assignmen.vercel.app/bookmodal', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(modalData),
    })
      .then(res => res.json())
      .then(data => console.log(data));
  };
  return (
    <div className="text-black font-bold">
      <input type="checkbox" id="bookNow" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div>
            <form onSubmit={handleBuyerOrder}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    defaultValue={company}
                    readOnly
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Salar Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    readOnly
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    readOnly
                    defaultValue={user?.email}
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    defaultValue={phone}
                    className="input input-bordered"
                  />
                  <label className="label"></label>
                </div>
                <div>
                  <p className="text-primary">Location:</p>
                  <textarea
                    className="textarea"
                    name="location"
                    placeholder="Bangladesh ,Dhaka ,New Market"
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <Link>
                    <button onClick={toasts} className="btn btn-primary">
                      {' '}
                      Submit
                    </button>
                    <button
                      onClick={closeModale}
                      className="btn ml-5 btn-error text-black"
                    >
                      {' '}
                      Cencel
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
