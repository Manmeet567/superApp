import React, { useEffect, useState } from "react";
import userpic from "../assets/user.png";

function ProfileWidget() {
  const [userData, setUserData] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const userdata = localStorage.getItem("user");
    const categorydata = localStorage.getItem("categories");
    if (userdata && categorydata) {
      setUserData(JSON.parse(userdata));
      setCategories(JSON.parse(categorydata));
    }
  }, []);

  return (
    <div className="profile w-full h-[57%] bg-[#5746ea] rounded-2xl flex justify-between p-5 2xl:p-7">
      <div
        className="w-[20%] xl:w-[20%] 2xl:w-[22%] bg-cover bg-center"
        style={{
          backgroundImage: `url(${userpic})`,
          border: "3px solid white",
          borderRadius: "42px",
        }}
      ></div>
      <div className="w-[72%] text-white flex flex-col justify-between">
        <div>
          <p className="text-[16px] 2xl:text-[20px]">{userData?.name}</p>
          <p className="text-[16px] 2xl:text-[20px]">{userData?.email}</p>
          <p className="font-medium text-[20px] 2xl:text-[30px]">{userData?.username}</p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {categories.slice(0, 4).map((category) => (
            <div
              key={category.id}
              className="bg-[#9F94FF] py-1 2xl:py-1 px-5 rounded-full text-base"
            >
              {category?.movie}
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default ProfileWidget;
