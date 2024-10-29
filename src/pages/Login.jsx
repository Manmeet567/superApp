import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bg from "../assets/bg.png";

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: false,
  });

  const [error, setError] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    checkbox: "",
  });

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let errors = {};

    if (!data.name || data.name.trim() === "") {
      errors.name = "Name is required";
    }
    if (!data.username || data.username.trim() === "") {
      errors.username = "Username is required";
    }
    if (!data.email || data.email.trim() === "") {
      errors.email = "Email is required";
    }
    if (!data.mobile || data.mobile.trim() === "") {
      errors.mobile = "Mobile is required";
    }
    if (!data.checkbox) {
      errors.checkbox = "Check this box if you want to proceed";
    }

    setError(errors);
    if (Object.keys(errors).length > 0) {
      return;
    } else {
      localStorage.setItem("user", JSON.stringify(data));
      setData({
        name: "",
        username: "",
        email: "",
        mobile: "",
        checkbox: false,
      });
      navigate("/selection");
    }
  };

  return (
    <div className="h-screen w-full flex">
      <div className="w-1/2 h-screen relative">
        <img className="h-full w-full" src={bg} alt="bg" />
        <p className="absolute z-10 bottom-[100px] px-[40px] text-white font-black leading-[77px] md:text-[40px] lg:text-[40px] xl:text-[50px] 2xl:text-[60px]">
          Discover new things on Superapp
        </p>
      </div>

      <div className="w-1/2 h-screen flex flex-col bg-black justify-center items-center">
        <p className="app-name text-[#72DB73] text-center leading-[70px] text-[38px] xl:text-[45px] 2xl:text-[67px]">
          Super app
        </p>
        <p className="dm-sans text-white leading-[34px] 2xl:leading-[50px] text-[18px] md:text-[18px] xl:text-[18px] 2xl:text-[25px]">
          Create your new account
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-[512px] my-[20px] mt-[20px] mx-auto md:mt-[30px] xl:mt-[45px] 2xl:mt-[60px]"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={data.name}
            onChange={handleInput}
            className="dm-sans bg-[#292929] outline-none text-white rounded-[3px] px-[15px] py-[10px] xl:py-[5px] text-[16px] xl:text-[16px] 2xl:text-[20px] leading-[27px] placeholder-[#7C7C7C]"
            style={{
              margin: `${error.name ? "0" : "0 0 20px 0"}`,
              border: `${
                error.name ? "1px solid #FF0000" : "1px solid #292929"
              }`,
            }}
          />
          {error.name && (
            <span
              className="dm-sans"
              style={{ color: "red", fontSize: "16px", margin: "5px 0 10px" }}
            >
              {error.name}
            </span>
          )}

          <input
            type="text"
            name="username"
            placeholder="Username"
            value={data.username}
            onChange={handleInput}
            className="dm-sans bg-[#292929] outline-none text-white rounded-[3px] px-[15px] py-[10px] xl:py-[5px] text-[16px] xl:text-[16px] 2xl:text-[20px] leading-[27px] placeholder-[#7C7C7C] "
            style={{
              margin: `${error.username ? "0" : "0 0 20px 0"}`,
              border: `${
                error.username ? "1px solid #FF0000" : "1px solid #292929"
              }`,
            }}
          />
          {error.username && (
            <span
              style={{ color: "red", fontSize: "16px", margin: "5px 0 10px" }}
            >
              {error.username}
            </span>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={data.email}
            onChange={handleInput}
            className="dm-sans bg-[#292929] outline-none text-white rounded-[3px] px-[15px] py-[10px] xl:py-[5px] text-[16px] xl:text-[16px] 2xl:text-[20px] leading-[27px] placeholder-[#7C7C7C] "
            style={{
              margin: `${error.email ? "0" : "0 0 20px 0"}`,
              border: `${
                error.email ? "1px solid #FF0000" : "1px solid #292929"
              }`,
            }}
          />
          {error.email && (
            <span
              style={{ color: "red", fontSize: "16px", margin: "5px 0 10px" }}
            >
              {error.email}
            </span>
          )}

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            value={data.mobile}
            onChange={handleInput}
            className="dm-sans bg-[#292929] outline-none text-white rounded-[3px] px-[15px] py-[10px] xl:py-[5px] text-[16px] xl:text-[16px] 2xl:text-[20px] leading-[27px] placeholder-[#7C7C7C] "
            style={{
              margin: `${error.mobile ? "0" : "0 0 20px 0"}`,
              border: `${
                error.mobile ? "1px solid #FF0000" : "1px solid #292929"
              }`,
            }}
          />
          {error.mobile && (
            <span
              style={{ color: "red", fontSize: "16px", margin: "5px 0 10px" }}
            >
              {error.mobile}
            </span>
          )}

          <div>
            <input
              type="checkbox"
              name="checkbox"
              id="checkbox"
              value={data.checkbox}
              onChange={handleInput}
            />
            <label htmlFor="checkbox" className="text-[#7C7C7C] mx-2 dm-sans">
              Share my registration data with Superapp
            </label>
          </div>
          {error.checkbox && (
            <span style={{ color: "red" }}>{error.checkbox}</span>
          )}

          <button
            style={{ fontWeight: "600" }}
            className="text-white py-1 my-3 text-[20px] leading-[31px] rounded-[30px] bg-[#72DB73]"
            type="submit"
          >
            SIGN UP
          </button>

          <p className="text-[#7C7C7C] text-[16px]">
            By clicking on Sign up. you agree to Superapp{" "}
            <span className="text-[#72DB73]">Terms and Conditions of Use</span>
          </p>
          <p className="text-[#7C7C7C] mt-2 text-[16px]">
            To learn more about how Superapp collects, uses, shares and protects
            your personal data please head Superapp{" "}
            <span className="text-[#72DB73]">Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Home;
