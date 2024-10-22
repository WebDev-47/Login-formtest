import React, { useState } from "react";

const UseState = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [Submit, setSubmit] = useState(false)

  return (
//     <div className=" bg-blue-500 h-screen flex justify-center items-center">
//       <form
//         action=""
//         className=" border-2 border-gray-50 w-[25rem] h-[23rem] pl-4 rounded-md"
//       >
//         <h1 className=" flex justify-center items-center font-semibold text-2xl text-white relative top-4">
//           Login
//         </h1>

//         <div className=" relative top-10 text-white ">
//           <label htmlFor="" className="">
//             Email:
//           </label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e)=> setemail (
//                 e.target.value 
//             )}
//             placeholder="Enter email"
//             className=" pl-4 rounded-sm  w-[23rem] mt-4
//         h-[3rem] outline-none text-black "
//           />

//           <br /> <br />
//           <label htmlFor="">Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e)=> setpassword(
//                 e.target.value
//             )}
//             placeholder="Enter password"
//             className=" pl-4 rounded-sm w-[23rem] mt-4
//         h-[3rem] outline-none text-black"
//           />
//         </div>

// <div className=" relative top-[6rem]">
//         <p>Email: {email} </p>
//         <p>Password: {password} </p>
// </div>

//         {/* <div className=" flex justify-center items-center relative top-[4rem]">
//           <button onClick={Submit} className="bg-blue-800 rounded p-3 text-white">Submit</button>
//         </div> */}
//       </form>
//     </div>
    <div></div>
  );
};

export default UseState;
