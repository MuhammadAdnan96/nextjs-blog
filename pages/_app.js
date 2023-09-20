import "../styles/globals.css";
import store from "../redux-toolkit/store";
import { Provider } from "react-redux";
import { wrapper } from "../redux-toolkit/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
