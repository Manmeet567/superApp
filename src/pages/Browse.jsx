import user from "../assets/user.png";

function Browse() {
  return (
    <div className="browse h-screen w-full overflow-hidden bg-black">
      <div className="nav flex justify-between px-10 pt-4">
        <p className="app-name text-[#72DB73] text-[47px] ">Super App</p>
        <div
          className="w-[81px] h-[81px] bg-cover bg-center mt-2"
          style={{
            backgroundImage: `url(${user})`,
            border: "1.41px solid white",
            borderRadius: "50%",
            boxShadow: "0px 2.53px 2.02px 0px #0000004F",
          }}
        ></div>
      </div>

      <div className="px-20">
        <p className="text-white text-[30px] font-semibold mb-5">Entertainment according to your choice</p>
      </div>
    </div>
  );
}

export default Browse;
