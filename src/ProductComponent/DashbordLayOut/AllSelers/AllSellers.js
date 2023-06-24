import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
const AllSellers = () => {
  const [data, setDatas] = useState([]);
  const [loader, setLoader] = useState(true);
  const handleDelete = id => {
    fetch(
      `https://final-project-server-assignmen.vercel.app/userSeler/Delete/${id}`,
      {
        method: 'DELETE',
      }
    )
      .then(res => res.json())
      .then(deletes => {
        const confirms = window.confirm('Are Are Sure Delete Items');
        if (deletes.deletedCount > 0 && confirms) {
          const Sellarremaining = data.filter(remain => remain._id !== id);
          toast.error('delete Succes Fully Items Removes');
          setDatas(Sellarremaining);
        } else {
          toast.error('Not Delete item');
        }
      });
  };
  useEffect(() => {
    fetch('https://final-project-server-assignmen.vercel.app/userInfoUserData')
      .then(res => res.json())
      .then(sellar => {
        const filters = sellar.filter(sell => sell?.role === 'sellar');
        setLoader(false);
        setDatas(filters);
      });
  }, []);
  return (
    <div className="bg-black px-3 pb-6 text-white">
      <h1 className="text-center text-3xl py-4">
        {' '}
        All Sellar Total : {data?.length}
      </h1>
      <div className="">
        <table className="table text-black w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {data?.map(sellar => (
              <tr className=" text-black">
                <th> {sellar?.name}</th>
                <td>{sellar?.email}</td>
                <td>
                  <button
                    onClick={() => handleDelete(sellar?._id)}
                    className="btn text-4xl bg-red-500 tooltip"
                    data-tip="Delete User"
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
  );
};

export default AllSellers;
