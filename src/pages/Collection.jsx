
import React, { useContext, useState, useEffect } from 'react';
import { Shopcontext } from '../context/Shopcontext';
import { assets } from '../assets/assets';
import Title from '../components/Title.jsx';
import ProductItem from '../components/ProductItem.jsx';

const Collection = () => {
  const { products } = useContext(Shopcontext);
  const [showfilter, setshowfilter] = useState(false);
  const [filterProducts, setfilterProducts] = useState([]);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);

  const [sorttype,setsorttype]=useState('relevant');
  // Toggle category filter
  const toggleCategory = (e) => {
    const value = e.target.value;
    setcategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };
  const sortProduct=()=>{
    let fpCopy=filterProducts.slice();
    switch(sorttype){
      case 'low-high':
        setfilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)))
        break;
      case 'high-low':
        setfilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)))
        break;
      default:
        ApplyFilter();
        break;
    }

  }

  // Toggle subcategory filter
  const toggleSubcategory = (e) => {
    const value = e.target.value;
    setsubcategory((prev) =>
      prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
    );
  };

  // Filter products based on selected category and subcategory
  const ApplyFilter = () => {
    let filteredProducts = products;

    // Apply category filter
    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        category.includes(item.category)
      );
    }

    // Apply subcategory filter
    if (subcategory.length > 0) {
      filteredProducts = filteredProducts.filter((item) =>
        subcategory.includes(item.subcategory)
      );
    }

    setfilterProducts(filteredProducts);
  };

  // Initialize products to be shown
  useEffect(() => {
    setfilterProducts(products); // Show all products by default
  }, [products]);

  // Apply filter whenever category or subcategory changes
  useEffect(() => {
    ApplyFilter();
  }, [category, subcategory]);

  useEffect(() => {
    sortProduct();
  }, [sorttype])
  

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p
          onClick={() => setshowfilter(!showfilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showfilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=''
          />
        </p>

        {/* Category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Men' onChange={toggleCategory} />Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Women' onChange={toggleCategory} />Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='Kids' onChange={toggleCategory} />Kids
            </p>
          </div>
        </div>

        {/* Subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showfilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='TopWear' onChange={toggleSubcategory} />TopWear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='BottomWear' onChange={toggleSubcategory} />BottomWear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value='WinterWear' onChange={toggleSubcategory} />WinterWear
            </p>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1='ALL' text2='COLLECTIONS' />
          {/* Product sort */}
          <select onChange={(e)=>setsorttype(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
            <option value='relavent'>Sort by : Relevant</option>
            <option value='low-high'>Sort by : Low to High</option>
            <option value='high-low'>Sort by : High to Low</option>
          </select>
        </div>
        {/* Map filtered products */}
        <div className='grid grid-cols-2 md:grid-cols lg:grid-cols-4 gap-6'>
          {filterProducts.length > 0 ? (
            filterProducts.map((item, index) => (
              <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Collection;
