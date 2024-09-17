import React, { useEffect } from 'react'
import ShopLogin from "../components/Shop/ShopLogin.jsx";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ShopLoginPage = () => {
  const navigate = useNavigate();
  const { isSeller, loading } = useSelector((state) => state.seller);

  useEffect(() => {
    if(isSeller === true){
      navigate("/dashboard");
    }
  }, [loading, isSeller]);

  return (
    <div>
      <ShopLogin />
    </div>
  )
}

export default ShopLoginPage