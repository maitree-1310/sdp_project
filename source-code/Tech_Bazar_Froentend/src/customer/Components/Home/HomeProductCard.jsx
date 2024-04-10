import React from "react";
import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product, section }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/gadget/type/${section}`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] h-[18rem]"
    >
      <div className="h-[13rem] w-[12rem] ">
        <img
          className="object-cover object-center w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
          style={{ height: "75%" }}
        />
      </div>

      <div className=" h-[8rem] w-[12rem]">
        <h3 className="text-lg font-medium text-gray-900 text-justify">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 text-justify">
          {product?.title}
        </p>
      </div>
    </div>
  );
};

export default HomeProductCard;
