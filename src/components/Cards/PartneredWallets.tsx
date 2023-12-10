import React from "react";

const PartneredWallets = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-center items-center">
        <div className="border-2 border-gray-800 rounded-lg py-2 px-4 w-[90%]">
          <p className=" text-center text-lg font-semibold pb-2">Wallet X</p>
          <div className=" flex flex-col justify-between items-start text-base font-medium">
            <p>Total Transaction Sponsered: 1542</p>
            <p>Total Gas Sponsored : 200000 USDT</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-2 border-gray-800 rounded-lg py-2 px-4 w-[90%]">
          <p className=" text-center text-lg font-semibold pb-2">Metamask</p>
          <div className=" flex flex-col justify-between items-start text-base font-medium">
            <p>Total Transaction Sponsered: 254</p>
            <p>Total Gas Sponsored : 35648 USDT</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-2 border-gray-800 rounded-lg py-2 px-4 w-[90%]">
          <p className=" text-center text-lg font-semibold pb-2">Ranbow</p>
          <div className=" flex flex-col justify-between items-start text-base font-medium">
            <p>Total Transaction Sponsered: 2356</p>
            <p>Total Gas Sponsored : 600000 USDT</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-2 border-gray-800 rounded-lg py-2 px-4 w-[90%]">
          <p className=" text-center text-lg font-semibold pb-2">1 Inch</p>
          <div className=" flex flex-col justify-between items-start text-base font-medium">
            <p>Total Transaction Sponsered: 5698</p>
            <p>Total Gas Sponsored : 23654 USDT</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="border-2 border-gray-800 rounded-lg py-2 px-4 w-[90%]">
          <p className=" text-center text-lg font-semibold pb-2">Coin Base</p>
          <div className=" flex flex-col justify-between items-start text-base font-medium">
            <p>Total Transaction Sponsered: 3654</p>
            <p>Total Gas Sponsored : 20356987 USDT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartneredWallets;
