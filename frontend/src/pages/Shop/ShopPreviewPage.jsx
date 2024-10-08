import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import ShopInfo from "../../components/Shop/ShopInfo";
import ShopProfileData from "../../components/Shop/ShopProfileData";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ShopPreviewPage = () => {
  const { seller } = useSelector((state) => state.seller);
  const { id } = useParams();
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    if (seller) {
      if (seller._id === id) {
        setIsOwner(true);
      } else {
        setIsOwner(false);
      }
    }
  }, [seller, id]);

  return (
    <div className={`${styles.section} bg-[#f5f5f5]`}>
      <div className="w-full 800px:flex py-10 justify-between">
        <div className="800px:w-[25%] bg-[#fff] rounded-[4px] shadow-sm 800px:overflow-y-scroll 800px:h-[90vh] 800px:sticky top-10 left-0 z-10">
          <ShopInfo isOwner={isOwner} />
        </div>
        <div className="800px:w-[72%] mt-5 800px:mt-['unset'] rounded-[4px]">
          <ShopProfileData isOwner={isOwner} />
        </div>
      </div>
    </div>
  );
};

export default ShopPreviewPage;
