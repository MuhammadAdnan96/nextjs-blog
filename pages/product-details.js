// import React, { useState, useEffect } from "react";
// import useParams from "next/navigation";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { BsSearch } from "react-icons/bs";

// const Details = () => {
//   let id = useParams();
//   console.log("id is", id);
//   const [productDetail, setProductDetail] = useState([]);
//   console.log("id is", id);
//   useEffect(() => {
//     const getData = async () => {
//       const res = await fetch(`https://fakestoreapi.com/products/${id}`);
//       const response = await res.json();
//       console.log("response of detailProduct is:", response);
//       setProductDetail(response);
//     };
//     getData();
//   }, []);

//   return (
//     <>
//       <div className="desHeader">
//         <div>
//           <h1 className="heading">Product details</h1>
//         </div>
//         <div>
//           <BsSearch
//             className="iconSearch"
//             style={{ width: "30px", height: "30px" }}
//           />
//         </div>
//         <div>
//           <AiOutlineShoppingCart
//             className="iconCart"
//             style={{ width: "40px", height: "40px" }}
//           />
//         </div>
//       </div>
//       <div className="des-data" key={productDetail?.id}>
//         <div className="imgDiv">
//           <img
//             className="desImg"
//             src={productDetail?.image}
//             style={{ width: "460px", height: "460px" }}
//             alt="React Image"
//           />
//         </div>
//         <div className="desDetail">
//           <h1>
//             <b>{productDetail?.title}</b>
//           </h1>
//           <h3>Price: ${productDetail?.price}</h3>
//           <h3>Category: {productDetail?.category}</h3>
//           <div className="size">
//             <button className="btn">M</button>
//             <button className="btn">L</button>
//             <button className="btn">XL</button>
//           </div>
//           <h4 className="detail">{productDetail?.description}</h4>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Details;
