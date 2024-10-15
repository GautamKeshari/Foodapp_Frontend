import React from "react";

const Banner = () => {
  return (
    <div className="section-container bg-gradient-to-r from-white via-white to-indigo-500">
      <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8 ">  
        {/* texts stuff  in Left part*/}
        <div className="md:w-1/2 space-y-8 px-4">    {/* for medium size ,keep width=1/2 */}
          <h2 className="md:text-6xl text-5xl font-bold md:leading-snug leading-snug ">
            Get the tastiest and freshest{" "}
            <span className="text-blue"> Food</span> ever
          </h2>
          <p className="text-2xl text-[#4A4A4A]">
            Where each bite gives the taste of indian spices
          </p>
          <button className="btn bg-blue px-8 py-4 font-semibold text-white rounded-full">
            <a href="/menu">Order Now</a>
          </button>
        </div>
        {/* images stuff in right part*/}
        <div className="md:w-1/2 sm:m-auto">
          <img src="/images/home/banner.gif" alt="" className="rounded-full mt-35" />

          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className=" sm:flex-row flex-col bg-white py-2 px-2 rounded-2xl items-center gap-4 shadow-md w-1/4 hover:-translate-y-6 duration-300 transition-all">
              <img
                src="/images/home/category/img3.jpg"
                alt=""
                className="rounded-2xl bg-white"
              />     

              <div className="space-y-0.4">
                <h5 className="font-white mt-1 mb-1">IceCream</h5>
                {/* daisyUI -> components -> rating */}
                <div className="rating rating-sm ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>

                <p className="text-red ">$78.00</p>
              </div>
            </div>
          
            <div className="sm:flex hidden flex-col bg-white py-2 px-2 rounded-2xl items-center gap-4 shadow-md w-1/4  hover:-translate-y-6 duration-300 transition-all">
              <img
                src="/images/home/category/img6.png"
                alt=""
                className="rounded-2xl"
              />

              <div className="space-y-0.4">
                <h5 className="font-white mt- mb-1">Burgers</h5>

                <div className="rating rating-sm ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>

                <p className="text-red">$65.00</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;



// import React from "react";

// const Banner = () => {
//   return (
//     <div className="section-container bg-gradient-to-r from-white via-white to-indigo-500">
//       <div className="py-24 flex flex-col md:flex-row justify-between items-center gap-8 ">  
//         {/* texts stuff  in Left part*/}
//         <div className="md:w-1/2 space-y-8 px-4">    {/* for medium size ,keep width=1/2 */}
//           <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug ">
//             Get the tastiest and freshest{" "}
//             <span className="text-blue"> Food</span> ever
//           </h2>
//           <p className="text-xl text-[#4A4A4A]">
//             Where each bite gives the taste of indian spices
//           </p>
//           <button className="btn bg-blue px-8 py-4 font-semibold text-white rounded-full">
//             Order Now
//           </button>
//         </div>
//         {/* images stuff in right part*/}
//         <div className="md:w-1/2">
//           <img src="/images/home/banner.gif" alt="" className="rounded-full " />

//           <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
//             <div className="sm:flex hidden  bg-white py-2 px-3 rounded-2xl items-center gap-4 shadow-md w-20">
//               <img
//                 src="/images/home/category/img3.png"
//                 alt=""
//                 className="rounded-2xl"
//               />     
//               {/* image is saved in public -> images (directly specifies the path from images) */}

//               <div className="space-y-1">
//                 <h5 className="font-white mb-1">IceCream</h5>
//                 {/* daisyUI -> components -> rating */}
//                 <div className=" rating-sm ">
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     className="mask mask-star-2 bg-orange-400"
//                     checked
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                 </div>

//                 <p className="text-red bg-white">$78.00</p>
//               </div>
//             </div>
//             <div className="sm:flex hidden bg-white py-2 px-3 rounded-2xl items-center gap-4 shadow-md w-20">
//               <img
//                 src="/images/home/category/img2.png"
//                 alt=""
//                 className="rounded-2xl"
//               />
//               {/* two part left and right */}
//               <div className="space-y-1">
//                 <h5 className="font-white mb-1">Sandwich</h5>

//                 <div className="rating rating-sm ">
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     className="mask mask-star-2 bg-orange-400"
//                     checked
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                   <input
//                     type="radio"
//                     name="rating-2"
//                     className="mask mask-star-2 bg-orange-400"
//                     readOnly
//                   />
//                 </div>

//                 <p className="text-red">$78.00</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;
