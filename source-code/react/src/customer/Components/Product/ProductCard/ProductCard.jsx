import React from 'react';
import "./ProductCard.css";
import{useLocation, useNavigate} from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, brand, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();
  

  const handleNavigate=()=>{
    navigate(`/product/${product?.id}`)
  }

  return (
   <div onClick={handleNavigate} className='productCard w-[15rem] border m-3 transition-all cursor-pointer '>
    <div className='h-[20rem]'>
        <img className='h-full w-full object-cover object-left-top' src='https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1701194302/Croma%20Assets/Computers%20Peripherals/Laptop/Images/275678_0_kuhq8q.png?tr=w-360' alt="" />
    </div>
    <div className='textPart bg-white p-3 '>
        <div>
        <p  className='font-bold opacity-60'>HP</p>
            <p className=''>{title}</p>
        
        <p className='font-semibold opacity-50'>{color}</p>
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='font-semibold'>₹71,990</p>
            <p className='opacity-50 line-through'>₹84,830</p>
            <p className='text-green-600 font-semibold'>15.14 % off</p>
        </div>
        
    </div>
   </div>
  );
};

export default ProductCard;
