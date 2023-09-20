import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/header";
import { addProducts } from "../redux-toolkit/features/productsSlice";
import { useSelector, useDispatch } from "react-redux";
import styles from "../styles/products.module.css";

export default function Products() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.productsReducer.products);
  useEffect(() => {
    const getData = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const response = await res.json();
      dispatch(addProducts(response));
    };
    getData();
  }, []);

  return (
    <div>
      <Header />
      <div className={styles.grid}>
        {products.map((product) => (
          <div className={styles.view} key={product.id}>
            <div>
              <Link
                href="/productDetail/[id]"
                as={`/productDetail/${product.id}`}
              >
                <img
                  id={product.id}
                  src={product.image}
                  style={{ width: "250px", height: "250px" }}
                  alt="React Image"
                />
              </Link>
            </div>
            <div>{product.title}</div>
            <div>{`$${product.price}`}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
