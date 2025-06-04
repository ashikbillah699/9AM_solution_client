

const Shops = () => {
   const hostname = window.location.hostname; 
  const shopName = hostname.split('.')[0];
  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">This is {shopName} shop</h1>
    </div>
  );
};

export default Shops;
