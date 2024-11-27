import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('userLoginInfo'));
    const admin = token.admin
    if(admin !== 'admin') {
     navigate('/')
    }
  })
  return (
    <div className="">
      <Component />
    </div>
  );
};

export default PrivateRoute;
