import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const SessionCheckerRoute = ({ children }) => {
  const navigate = useNavigate();
  const { createLogOut } = useContext(AuthContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const checkSession = () => {
      const token = localStorage.getItem('token');
      const expireAt = sessionStorage.getItem('expireAt');
      const now = Date.now();

      const sessionExpired = expireAt && now > parseInt(expireAt);

      if (!token || sessionExpired) {
        sessionStorage.removeItem('expireAt');
        localStorage.removeItem('token');
        createLogOut();
        navigate('/');
      }
       else {
        setChecked(true);
      }
    };

    setTimeout(checkSession, 300);
  }, [createLogOut, navigate]);

  if (!checked) return null;

  return children;
};

export default SessionCheckerRoute;
