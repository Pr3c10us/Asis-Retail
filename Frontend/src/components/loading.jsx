import React from "react";
import Rotation from "../assets/icons/rotation.svg";
import Ace from "../assets/icons/aceRotation.svg";
const Loading = () => {
  return (
    <div className="bg-fit fixed inset-0 left-0 top-0 z-50 flex h-screen items-center justify-center w-screen flex-col bg-[url('./assets/images/bg_img.png')] bg-repeat">
      <div className="border-t-4 border-t-black animate-spin rounded-full w-24 h-24 ">

      </div>
      <div className="absolute -left-[20rem] top-1/3 flex  h-[40rem] w-[40rem] -translate-y-1/3 items-center justify-center md:-left-[25rem] md:h-[50rem] md:w-[50rem]">
        <img
          src={Ace}
          alt="Ace"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <img
          src={Rotation}
          alt="rotation"
          className="slow-spin h-full w-full animate-spin"
        />
      </div>
      <img
        src={Rotation}
        alt="rotation"
        className="slow-spin absolute -bottom-[25rem] -right-[25rem] h-[50rem] w-[50rem] animate-spin"
      />
    </div>
  );
};

export default Loading;
// import React, { useState } from "react";

// const CardCenteringComponent = () => {
//   const [centered, setCentered] = useState(false);

//   const toggleCenter = () => {
//     setCentered(!centered);
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div className="space-x-4 flex">
//         <div
//           className={`h-64 w-64 rounded-lg bg-blue-300 p-4 transition-transform ${
//             centered ? "translate-x-0 transform" : "translate-x-20 transform"
//           }`}
//         >
//           Card 1
//         </div>
//         <div
//           className={`h-64 w-64 rounded-lg bg-green-300 p-4 transition-transform ${
//             centered ? "translate-x-0 transform" : "translate-x-20 transform"
//           }`}
//         >
//           Card 2
//         </div>
//         <div
//           className={`h-64 w-64 rounded-lg bg-red-300 p-4 transition-transform ${
//             centered ? "translate-x-0 transform" : "translate-x-20 transform"
//           }`}
//         >
//           Card 3
//         </div>
//       </div>

//       <button
//         className="mt-4 rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 z-10"
//         onClick={toggleCenter}
//       >
//         {centered ? "Reset" : "Center"}
//       </button>
//     </div>
//   );
// };

// export default CardCenteringComponent;