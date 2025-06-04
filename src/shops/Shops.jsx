import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const Shops = () => {
  const { getSubdomain } = useContext(AuthContext);

  const shop = getSubdomain();
  if (shop && shop !== 'localhost') {
    return <h1 className="text-center text-3xl mt-20">This is {shop} shop</h1>;
  }

  // const hostname = window.location.hostname;
  // const shopName = hostname.split('.')[0];
  // return (
  //   <div className="text-center mt-20">
  //     <h1 className="text-3xl font-bold">This is {shopName} shop</h1>
  //   </div>
  // );
};

export default Shops;
