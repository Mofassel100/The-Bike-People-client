import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const HandProduct = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="bg-black text-white">
      <div className="grid justify-center items-center py-2">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-3">
          {data?.map(hand => (
            <>
              <div className="card w-72 h-96 glass">
                <figure>
                  <img src={hand?.picture} className="w-72 h-44" alt="car!" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{hand?.name}</h2>
                  <p>
                    Price :{' '}
                    <span className="text-lime-500">{hand?.OrginalePrice}</span>
                  </p>
                  <div className="card-actions justify-end">
                    <Link to={`/hand/${hand?._id}`} className="btn btn-primary">
                      Mor Details
                    </Link>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HandProduct;
