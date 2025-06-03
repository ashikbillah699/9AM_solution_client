
const Shops = () => {
    const hostname = window.location.hostname;
  const shopName = hostname.split('.')[0];  
  console.log(shopName)
    return (
        <div>
            {shopName}
        </div>
    );
};

export default Shops;