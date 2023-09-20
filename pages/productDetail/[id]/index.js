import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import styles from "../../../styles/detail.module.css";

export const getStaticProps = async (context) => {
  const res = await fetch(
    `https://fakestoreapi.com/products/${context.params.id}`
  );
  const productDetail = await res.json();
  return {
    props: { productDetail },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`https://fakestoreapi.com/products`);
  const productDetail = await res.json();
  const ids = productDetail.map((product) => product.id);

  const paths = ids.map((product) => ({ params: { id: product.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

const Details = ({ productDetail }) => {
  return (
    <>
      <div className={styles.desHeader}>
        <div>
          <h1 className={styles.heading}>Product details</h1>
        </div>
        <div>
          <BsSearch
            className={styles.iconSearchh}
            style={{ width: "30px", height: "30px" }}
          />
        </div>
        <div>
          <AiOutlineShoppingCart
            className={styles.iconCartt}
            style={{ width: "40px", height: "40px" }}
          />
        </div>
      </div>
      <div className={styles.desData} key={productDetail?.id}>
        <div className={styles.imgDiv}>
          <img
            className={styles.desImg}
            src={productDetail?.image}
            alt="React Image"
          />
        </div>
        <div className={styles.desDetail}>
          <h1>
            <b>{productDetail?.title}</b>
          </h1>
          <h3>Price: ${productDetail?.price}</h3>
          <h3>Category: {productDetail?.category}</h3>
          <div className="size">
            <button className={styles.btn}>M</button>
            <button className={styles.btn}>L</button>
            <button className={styles.btn}>XL</button>
          </div>
          <h4 className={styles.detail}>{productDetail?.description}</h4>
        </div>
      </div>
    </>
  );
};

export default Details;
