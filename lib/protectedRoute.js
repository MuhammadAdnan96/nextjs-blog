import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Protected = (props) => {
  const token = useSelector((state) => state.tokenReducer.userToken);
  const router = useRouter();
  const { children } = props;
  useEffect(() => {
    const pusher = async () => {
      if (!token) {
        router.push("/login");
      } else {
        return { children };
      }
    };
    pusher();
  }, [token]);
};
export default Protected;
