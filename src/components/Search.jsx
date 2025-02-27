import React, { useContext, useEffect, useState } from 'react'
import { Shopcontext } from '../context/Shopcontext'
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const Search = () => {
    const {search,setsearch,showsearch,setshowsearch
    }=useContext(Shopcontext);
    const [visible,setvisible]=useState(false);
    const location=useLocation();
    useEffect(()=>{
        if(location.pathname.includes('collection') && showsearch){
            setvisible(true)

        }
        else{
            setvisible(false);
        }

    },[location])
  return showsearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
        <input value={search} onChange={(e)=>setsearch(e,target.value)} className='flex-1 outline-none bg-inherit text-sm ' type="text"  placeholder='Search'/>
        <img src={assets.search_icon} className='w-4' alt="" />
        </div>
        <img src={assets.cross_icon} className='inline w-3 cursor-pointer' onClick={()=>setshowsearch(false)} alt="" />
   
    </div>
  ):null
}

export default Search