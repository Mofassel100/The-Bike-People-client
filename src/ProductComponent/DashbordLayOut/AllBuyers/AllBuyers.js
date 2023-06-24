import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
const AllBuyers = () => {
  const [buyers, setBuyers] = useState([]);
  const [loader, setLoader] = useState(true);
  const handleDelete = id => {
    fetch(
      `https://final-project-server-assignmen.vercel.app/userBuyer/Delete/${id}`,
      {
        method: 'DELETE',
      }
    )
      .then(res => res.json())
      .then(deletes => {
        const confirms = window.confirm('Are You Sure Delete');
        if (deletes.deletedCount > 0 && confirms) {
          const Buyerrremaining = buyers.filter(remain => remain._id !== id);
          toast.error('delete Succes Fully Items Removes');
          setBuyers(Buyerrremaining);
        } else {
          toast.error('Not Delete item');
        }
      });
  };
  useEffect(() => {
    fetch('https://final-project-server-assignmen.vercel.app/userInfoUserData')
      .then(res => res.json())
      .then(buyer => {
        const filters = buyer.filter(buyer => buyer?.role === 'buyer');
        setLoader(false);
        setBuyers(filters);
        console.log(buyer);
      });
  }, []);
  return (
    <div className="bg-black px-3 pb-6 text-white">
      <div>
        <h1 className="text-center text-4xl py-5">
          {' '}
          All Buyers : {buyers?.length}
        </h1>
        <div className="overflow-x-auto text-black">
          <table className="table   w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {buyers?.map(buyer => (
                <tr>
                  <th> {buyer?.name}</th>
                  <td>{buyer?.email}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(buyer?._id)}
                      className="btn text-4xl text-red-600 tooltip"
                      data-tip="Delete Buyer"
                    >
                      <AiFillDelete />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default AllBuyers;
{
  /*  */
}
