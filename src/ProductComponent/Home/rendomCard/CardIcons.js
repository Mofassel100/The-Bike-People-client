import React from 'react';
import { IconName } from 'react-icons/fc';
import { FaFlagUsa, FaCommentsDollar, FaSearchLocation } from 'react-icons/fa';
import { CiDeliveryTruck } from 'react-icons/ci';
const CardIcon = () => {
  return (
    <div className="grid bg-black my-6 justify-center items-center ">
      <div className="grid justify-evenly lg:grid-cols-4 gap-9 mx-2 md:grid-cols-2 grid-cols-1 my-3 text-white bg-black ">
        <div
          data-aos="zoom-out-right"
          className=" w-52 h-52 text-center shadow-xl"
        >
          <div className="grid justify-center items-center">
            <figure className="mt-2 pt-1">
              {' '}
              <FaFlagUsa className="text-5xl text-lime-500" />
            </figure>
          </div>
          <div className="mx-2 my-2">
            <h2 className="text-center text-2xl">
              Country Best Superbike Dealer
            </h2>
            <p>
              With our 20 locations & 9 manufacturers throughout the country,
              we're the number one choice for superbikes.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-left"
          className=" w-52 h-52  text-center shadow-xl"
        >
          <div className="grid justify-center items-center">
            <figure className="mt-2 pt-1">
              {' '}
              <FaCommentsDollar className="text-5xl text-lime-500" />
            </figure>
          </div>
          <div className="mx-2 mt-5 my-2">
            <h2 className="text-center text-2xl mt-3">Sell Your Bike</h2>
            <p>
              Offering competitive prices along with a quick, reliable, hassle
              and risk free service.
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-right"
          className=" w-52 h-52 text-center shadow-xl"
        >
          <div className="grid justify-center items-center">
            <figure className="mt-2 pt-1">
              {' '}
              <FaSearchLocation className="text-5xl text-lime-500" />
            </figure>
          </div>{' '}
          <div className="mx-2 my-2">
            <h2 className="text-center text-2xl">Visit Our Showrooms</h2>
            <p>
              Find our locations throughout the country and visit us to see what
              great service looks like
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-left"
          className=" w-52 h-52 text-center shadow-xl"
        >
          <div className="grid justify-center items-center">
            <figure className="mt-2 pt-1">
              {' '}
              <CiDeliveryTruck className="text-5xl text-lime-500" />
            </figure>
          </div>
          <div className="mx-2 my-2">
            <h2 className="text-center text-2xl">Free UK Delivery</h2>
            <p>
              We offer Free UK Mainland Delivery - Delivering dreams right to
              your door. No Catches!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardIcon;
