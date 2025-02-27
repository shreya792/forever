import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Shopcontext } from '../context/Shopcontext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId}=useParams();
  const {products,currency,addtocart}=useContext(Shopcontext);
  const [productdata,setproductdata]=useState(false);
  const [image,setimage]=useState('')
  const [size,setsize]=useState('')
  const fetchProductData=async()=>{
 products.map((item)=>{
  if(item._id===productId){
    setproductdata(item);
  
    
    setimage(item.image[0]);
    
    
    return null;
  }
 })
  }
  useEffect(()=>{
    fetchProductData();

  },[productId,products])
  
  return  productdata?(
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12  sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row '>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productdata.image.map((item,index)=>(
                <img onClick={()=>setimage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto ' alt="" />
          </div>
        </div>
        {/* ----------------------Product info ------------- */}
        <div className='flex-1 '>
          <h1 className='font-medium text-2xl mt-2'>{productdata.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
           <img src={assets.star_icon} alt="" className="w-3 5" />
           <img src={assets.star_icon} alt="" className="w-3 5" />
           <img src={assets.star_icon} alt="" className="w-3 5" />
           <img src={assets.star_icon} alt="" className="w-3 5" />
           <img src={assets.star_dull_icon} alt="" className="w-3 5" />
           <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productdata.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productdata.description }</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productdata.sizes.map((item,index)=>(
                <button onClick={()=>setsize(item)} className={`border py-2 px-4 bg-gray-100 ${item===size?'border-orange-500 bg-orange-500 text-white ':''}`} key={index}>{item}</button>

              ))}
            </div>
          </div>
          <button onClick={()=>addtocart(productId,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700 '>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original Product</p>
            <p>COD is Available</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>

      </div>
      {/* Description & review section*/}
      <div className='mt-10 '>
        <div className='flex '>
          <b className='border px-5 text-sm py-3'>Description</b>
          <p className='border px-5 text-sm py-3'>Reviews 122</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gary-500'>
          <p>Welcome to Forever! Discover endless deals and timeless products. From trendy fashion to must-have gadgets and everyday essentials, we’ve got everything you need in one place. Shop smart, shop Forever—your ultimate shopping destination.</p>
          <p>Explore a wide range of categories, from fashion-forward outfits to cutting-edge gadgets, home essentials, and more. Experience hassle-free shopping, exclusive offers, and fast delivery—because you deserve the best. Shop timelessly, shop Forever!</p>
        </div>
      </div>
          {/*related products  */}
          <RelatedProducts category={productdata.category } subcategory={productdata.subcategory}/>

    </div>
  ): <div className='opacity-0'></div>
}

export default Product