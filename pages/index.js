import Products from "./products";
import Login from "./login";
import Details from "./product-details";
import Protected from "../lib/protectedRoute";

export default function Home() {
  return (
    <>
      <Login />
      <Protected>
        <Products />
      </Protected>
    </>
  );
}
