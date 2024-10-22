import React, { useState } from "react";

const Loginform = () => {
  const [Inputdata, setInputdata] = useState({
    Username: "",
    Password: "",
  });
  const [Inputed, setInputed] = useState(false);
  const [Submit, setSubmit] = useState(false);
  const [test, settest] = useState(false);

  const HandleUsernameinput = (e) => {
    setInputdata({ ...Inputdata, Username: e.target.value });
  };

  const HandlePasswordinput = (e) => {
    setInputdata({ ...Inputdata , Password: e.target.value });
  };

  const SUBMIT = (e) => {
    e.preventDefault();

    if (Inputdata.Username && Inputdata.Password) {
      setInputed(true);
    }

    setSubmit(true);
  };

  return (
    <div className="Log h-screen flex justify-center items-center">
      {Inputed ? (
        <div
          className=" backdrop-blur-md border bg-green-500/20 border-green-500 h-[3rem] text-white font-bold
w-[14rem] flex items-center justify-center rounded-md absolute
top-4 right-4"
        >
          Submitted Successfully
        </div>
      ) : null}

      {Submit &&
        (!Inputdata.Username ? (
          <div className=" backdrop-blur-md border bg-red-500/20 border-red-500 h-[3rem] text-white font-bold w-[17rem] flex items-center justify-center rounded-md absolute top-4 right-4">
            Username-input must have a value
          </div>
        ) : null)}

      {Submit &&
        (!Inputdata.Password ? (
          <div className=" backdrop-blur-md border bg-red-500/20 border-red-500 h-[3rem] text-white font-bold w-[17rem] flex items-center justify-center rounded-md absolute top-4 right-4">
            Password-input must have a value
          </div>
        ) : null)}

      <div>
        <form className="border-2 border-gray-200 w-[23rem] h-[28rem] rounded-lg backdrop-blur-md">
          <h1 className=" font-serif text-2xl text-center mt-8 text-gray-200 animate-bounce">
            Staff Login
          </h1>
          <div className=" flex flex-col justify-center items-center mt-[3rem]">
            <input
              type="text"
              onChange={HandleUsernameinput}
              value={Inputdata.Username}
              placeholder="Username"
              className=" w-[20rem] h-[3rem] hover:border-gray-200/80 
                    rounded-md bg-transparent pl-3 border-gray-400 border-2 outline-none text-xl text-white"
            />{" "}
            <br /> <br />
            <input
              type="text"
              onChange={HandlePasswordinput}
              value={Inputdata.Password}
              placeholder="Password"
              className=" w-[20rem] h-[3rem] hover:border-gray-200/80 
                    rounded-md bg-transparent pl-3 border-gray-400 border-2 outline-none text-xl text-white"
            />
          </div>{" "}
          <br />
          <span className=" text-white text-xl ml-[2rem]">
            Forget password?{" "}
            <a
              href="#"
              className="
                text-blue-400 underline text-xl hover:font-semibold"
            >
              click here
            </a>
          </span>
          <div className=" flex justify-center items-center ">
            <button
              className="  bg-transparent text-gray-200
                mt-[3rem] w-[8rem] h-[2.5rem] rounded hover:bg-blue-600/80 text-xl border-gray-200/80 border-2"
              onClick={SUBMIT}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginform;
