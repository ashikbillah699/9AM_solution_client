// import { useEffect, useState } from 'react';
// import axios from 'axios';

const Shops = () => {
   const hostname = window.location.hostname; // যেমন: beautyhub.localhost
  const shopName = hostname.split('.')[0];
//   const [loading, setLoading] = useState(true);
//   const [shopName, setShopName] = useState('');
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     const hostname = window.location.hostname;
//     const subdomain = hostname.split('.')[0];
//     setShopName(subdomain);

//     // ✅ Token check request to server
//     axios.get('http://localhost:5000/verify-token', {
//       withCredentials: true,
//     })
//     .then(() => setLoading(false))
//     .catch(() => {
//       setError(true);
//       setLoading(false);
//     });
//   }, []);

//   if (loading) return <p className="text-center mt-20">🔄 Checking session...</p>;
//   if (error) return <p className="text-center mt-20 text-red-600">❌ Session expired. Please log in again.</p>;

  return (
    <div className="text-center mt-20">
      <h1 className="text-3xl font-bold">This is {shopName} shop</h1>
    </div>
  );
};

export default Shops;
