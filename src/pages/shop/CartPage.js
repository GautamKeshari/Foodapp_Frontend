// Cart-page is used to store the items select by user (used in Navbar.js)

import React, { useContext, useState } from "react";
import {FaTrash} from "react-icons/fa";
import useCart from "../../hook/useCart";
import Swal from 'sweetalert2'
import { AuthContext } from "../../contexts/AuthProvider";

const CartPage = () => {
  const [cart,refetch] = useCart();
  const {user}=useContext(AuthContext);
  const [cartItems, setCartItems]=useState([]);


  // calculate price after increasing the amount
  const calculatePrice= (item)=>{
    return item.price * item.quantity;
  } 

  // handle Increase function
  const handleIncrease=(item)=>{
    fetch(`${process.env.REACT_APP_LOCALHOSTDOMAIN}/carts/${item._id}`,
    {
      method:"PUT",
      headers:{
        "Content-Type": "application/json; charset=UTF-8"
      },
      body:JSON.stringify({quantity: item.quantity+1})
    }).then(res=>res.json())
    .then(data=>{
      const updateCart=cartItems.map((cartItem)=>{
        if(cartItem.id=== item.id){
          return {
            ...cartItem,
            quantity: cartItem.quantity+1
          }
        }
        return cartItem;
      });
      refetch();
      setCartItems(updateCart);
    })
    refetch();
  } 


  // handle Decrease function
  const handleDecrease=(item)=>{
    if(item.quantity>1){
      fetch(`${process.env.REACT_APP_LOCALHOSTDOMAIN}/carts/${item._id}`,
        {
          method:"PUT",
          headers:{
            "Content-Type": "application/json; charset=UTF-8"
          },
          body:JSON.stringify({quantity: item.quantity-1})
        }).then(res=>res.json())
        .then(data=>{
          const updateCart=cartItems.map((cartItem)=>{
            if(cartItem.id=== item.id){
              return {
                ...cartItem,
                quantity: cartItem.quantity-1,
              }
            }
            return cartItem;
          });
          refetch();
          setCartItems(updateCart);
        })
        refetch();
    }else{
      alert("Item cannot be zero");
    }
    refetch();
  }

  // handleDelete function 
  const handleDelete = (item)=>{
    Swal.fire({
      title: `Are you sure you want to delete ${item.name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${process.env.REACT_APP_LOCALHOSTDOMAIN}/${item._id}`,
        {
          method:"DELETE"
        })
        .then(res=>res.json()).
        then(data=>{
          if(data.deletedCount > 0){
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Item has been deleted succesfully.",
              icon: "success"
            });
          }
        })
      }
    });
  }

  // calculate the total amount of all item present in cart
  const cartSubTotal = cart;

  return (
    <div className="section-container mt-16 glass bg-gradient-to-r from-white via-white to-indigo-500 ">
        <div className="py-6 flex flex-col  justify-center items-center gap-8 ">
          {/* texts stuff */}
          <div className=" space-y-8 px-4">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-sung ">
              <span className="text-blue"> Cart Items</span>
            </h2>
          </div>
        </div>
    

      {/* table for the cart */}
      <div>
        <div className="overflow-x-auto pb-10">
          <div className=" bg-neutral">
          <table className="table">
            {/* head */}
            <thead className="bg-blue text-white">
              <tr>
                <th>#</th>
                <th>Food</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                cart.map((item,index)=>{
                  return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    {/* <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th> */}
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={item.image}
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="font-medium">{item.name}</td>
                    <td>
                      <button className="btn btn-xs" onClick={()=> handleDecrease(item)}>-</button>
                      <input type="number" value={item.quantity} className="w-10 mx-2 py-0.5 text-center overflow-hidden appearance-none" />
                      <button className="btn btn-xs" onClick={()=> handleIncrease(item)}>+</button>
                    </td>
                    <td>{item.price}</td>
                    <td>{calculatePrice(item).toFixed(2)}</td>
                    <th>
                      <button className="btn btn-ghost text-red text-lg" onClick={()=>{handleDelete(item)}}><FaTrash/></button>
                    </th>
                  </tr>
                )})
              }
            </tbody>
            {/* foot */}
            {/* <tfoot>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </tfoot> */}
          </table>
          </div> 
        </div>
      </div>

      {/* Customer Details */}
      <div className="bg-neutral">
        <div className="mb-5 flex flex-col md:flex-row justify-between items-start text-base-content">
          <div className="md:w-1/2 space-y-3 pt-2 pl-2">
            <h3 className="font-medium text-2xl"><u>Customer Details:-</u></h3>
            <p>Name: {user.displayName}</p>
            <p>Email: {user.email}</p>
            <p>User id: {user.uid}</p>
          </div>
          <div className="md:w-1/2 space-y-3 pt-2 pl-2">
          <h3 className="font-medium text-2xl"><u>Shopping Details:-</u></h3>
            <p>Total Items: <span className="text-red font-bold">{cart.length}</span> </p>
            <p>Total Price: <span className="text-red font-bold">$0.0</span> </p>
            <button className="btn bg-blue text-white">Proceed to checkout</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default CartPage;
