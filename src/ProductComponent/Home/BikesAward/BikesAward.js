import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { FaCommentsDollar, FaFlagUsa, FaSearchLocation } from 'react-icons/fa';

const BikesAward = () => {
  return (
    <div className="grid bg-black my-6 justify-center items-center ">
      <div className="text-white">
        {' '}
        <h1>our bride</h1>
        <h1 className="text-4xl">ACHIEVMENT</h1>
      </div>
      <div className="grid justify-evenly lg:grid-cols-4 gap-9 mx-2 md:grid-cols-2 grid-cols-1 my-3 text-white bg-black ">
        <div
          data-aos="zoom-out-right"
          className=" w-52 h-96 text-center shadow-xl"
        >
          <div className="grid justify-center items-center">
            <figure className="mt-2 pt-1">
              {' '}
              <img
                className="w-52 h-44"
                src="https://www.tvsmotor.com/-/media/Feature/25-10-22/award-01.jpg?h=210&w=250&la=en&hash=58792823724580D5203B2FA98D5383D7"
                alt=""
              ></img>
            </figure>
          </div>
          <div className="mx-2 my-2">
            <h2 className="text-center text-1xl">
              HIGHEST IN CUSTOMER SATISFACTION
            </h2>
            <p>
              RS MOTOR has been awarded Highest in Customer satisfaction by J.D
              Power USD Pacific Awards for 2018 .{' '}
            </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-left"
          className=" w-52 h-96  text-center shadow-xl"
        >
          <div className="grid justify-center items-center">
            <figure className="mt-2 pt-1">
              {' '}
              <img
                className="w-52 h-44"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoFg4K1BUfzIaNPIGJ3F4AykZac0obqmEQig&usqp=CAU"
                alt=""
              ></img>
            </figure>
          </div>
          <div className="mx-2 mt-5 my-2">
            <h2 className="text-center text-2xl mt-3">COMMUTER OF THE YEAR</h2>
            <p>Commuter of ther yerar - APRILIA RAider </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-right"
          className=" w-52 h-96 text-center shadow-xl"
        >
          <div className="grid justify-center items-center">
            <figure className="mt-2 pt-1">
              {' '}
              <img
                className="w-52 h-44"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVTY6qOqXYbDPPxpQa9bblq1SeZeeYyrtMWQ&usqp=CAU"
                alt=""
              ></img>
            </figure>
          </div>{' '}
          <div className="mx-2 my-2">
            <h2 className="text-center text-2xl">MOTORCYCLE OF THE YEAR </h2>
            <p>Motorcycle of the year - ZERO Bikes </p>
          </div>
        </div>
        <div
          data-aos="zoom-out-left"
          className=" w-52 h-96 text-center shadow-xl"
        >
          <div className="grid justify-center items-center">
            <figure className="mt-2 pt-1">
              {' '}
              <img
                className="w-52 h-44"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSgW2teovfG1Vf7D_AsuzixjNEoE4fkQtfnXMOfJOP3zJBP6CmbVKATQF2kNbUkMpNORM&usqp=CAU"
                alt=""
              ></img>
            </figure>
          </div>
          <div className="mx-2 my-2">
            <h2 className="text-center text-2xl">BIKE AWARDS - 2022</h2>
            <p>Two wheeler manufacturers of the year</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikesAward;
