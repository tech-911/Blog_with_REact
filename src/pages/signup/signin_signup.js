import React from "react";

const Signup_Signin = () => {
  return (
    <div>
      {/* ============================container========================================= */}
      <div className="container mx-auto px-[200px] md:container md:mx-auto my-20 flex justify-between items-start">
        {/* =======================================Sign in section======================================================== */}
        <div className=" w-[40%] flex flex-col ">
          <p className="font-[Open Sans] font-semibold text-[20px]">
            I already have an account
          </p>
          <p className="font-[Open Sans] text-[16px] text-[#B1AFB5] mt-4">
            Signin with your email and password
          </p>
          <div className="w-full relative group mt-10">
            <input
              type="text"
              id="email"
              required
              className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
            />
            <label
              for="email"
              className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Email
            </label>

            {/* <label className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
            Email
          </label> */}
          </div>
          <div className="w-full relative group mt-10">
            <input
              type="password"
              id="password"
              required
              className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
            />
            <label
              for="password"
              className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Password
            </label>

            {/* <label className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
            Email
          </label> */}
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="px-7 py-3 rounded-[5px] bg-[#331947] text-[white]">
              Sign in
            </div>
            <div className="px-7 py-3 rounded-[5px] bg-[#497DF6] text-[white]">
              Sign in with Google
            </div>
          </div>
        </div>

        {/* ===============================signup section========================================= */}

        <div className=" w-[40%] flex flex-col ">
          <p className="font-[Open Sans] font-semibold text-[20px]">
            I do not have an account
          </p>
          <p className="font-[Open Sans] text-[16px] text-[#B1AFB5] mt-4">
            Signup with your email and password
          </p>
          <div className="w-full relative group mt-10">
            <input
              type="text"
              id="email"
              required
              className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
            />
            <label
              for="email"
              className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Display Name
            </label>

            {/* <label className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
            Email
          </label> */}
          </div>
          <div className="w-full relative group mt-10">
            <input
              type="password"
              id="password"
              required
              className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
            />
            <label
              for="password"
              className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Password
            </label>

            {/* <label className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
            Email
          </label> */}
          </div>
          <div className="w-full relative group mt-10">
            <input
              type="password"
              id="password"
              required
              className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
            />
            <label
              for="password"
              className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Password
            </label>

            {/* <label className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
            Email
          </label> */}
          </div>
          <div className="w-full relative group mt-10">
            <input
              type="password"
              id="password"
              required
              className="w-full h-10 text-sm peer outline-none border-b-2 p-2"
            />
            <label
              for="password"
              className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0"
            >
              Password
            </label>

            {/* <label className="text-[#8A8B8B] pb-4 transform transition-all absolute top-0 left-0 h-full flex items-center pl-1 text-sm group-focus-within:text-xs peer-valid:text-xs group-focus-within:h-1/2 peer-valid:h-1/2 group-focus-within:-translate-y-full peer-valid:-translate-y-full group-focus-within:pl-0 peer-valid:pl-0">
            Email
          </label> */}
          </div>
          <div className="flex items-center justify-between mt-10">
            <div className="px-7 py-3 rounded-[5px] bg-[#331947] text-[white]">
              Sign in
            </div>
            <div className="px-7 py-3 rounded-[5px] bg-[#497DF6] text-[white]">
              Sign in with Google
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup_Signin;
