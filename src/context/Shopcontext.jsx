
import React, { createContext, useState } from "react";
import { products } from "../assets/assets"; // Ensure this path is correct
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Shopcontext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 10;
  const [search, setsearch] = useState("");
  const [showsearch, setshowsearch] = useState(false);
  const [cartitem, setcartitems] = useState({});
  const navigate = useNavigate();

  const addtocart = async (itemId, size) => {
    if (!size) {
      toast.error("Select Products Size");
      return;
    }
    const cartData = JSON.parse(JSON.stringify(cartitem)); // Replace structuredClone
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setcartitems(cartData);
  };

  const getcartcount = () => {
    let totalcount = 0;
    for (const items in cartitem) {
      for (let item in cartitem[items]) {
        try {
          if (cartitem[items][item] > 0) {
            totalcount += cartitem[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalcount;
  };

  const updatequantity = async (itemId, size, quantity) => {
    const cartData = JSON.parse(JSON.stringify(cartitem)); // Replace structuredClone
    if (cartData[itemId]) {
      cartData[itemId][size] = quantity;
    }
    setcartitems(cartData);
  };

  const getcartamount = () => {
    let totalamount = 0;
    for (const items in cartitem) {
      const iteminfo = products.find((product) => product._id === items);
      if (!iteminfo) continue; // Skip if product is undefined
      for (const item in cartitem[items]) {
        try {
          if (cartitem[items][item] > 0) {
            totalamount += iteminfo.price * cartitem[items][item];
          }
        } catch (error) {
          console.error(error);
        }
      }
    }
    return totalamount;
  };

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setsearch,
    showsearch,
    setshowsearch,
    cartitem,
    addtocart,
    getcartcount,
    updatequantity,
    getcartamount,
    navigate 
  };

  return (
    <Shopcontext.Provider value={value}>{props.children}</Shopcontext.Provider>
  );
};

export default ShopContextProvider;
