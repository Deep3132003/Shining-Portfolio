// "use client";
// import React from "react";

// import { motion } from "framer-motion";
// import { slideInFromTop } from "@/utils/motion";
// import Image from "next/image";

// const Encryption = () => {
//   return (
//     <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
//       <div className="absolute w-auto h-auto top-0 z-[5]">
//         <motion.div
//           variants={slideInFromTop}
//           className="text-[40px] font-medium text-center text-gray-200"
//         >
//           Performance
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
//             {" "}
//             &{" "}
//           </span>
//           Security
//         </motion.div>
//       </div>

//       <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
//         <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
//           <Image
//             src="/LockTop.png"
//             alt="Lock top"
//             width={50}
//             height={50}
//             className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
//           />
//           <Image
//             src="/LockMain.png"
//             alt="Lock Main"
//             width={70}
//             height={70}
//             className=" z-10"
//           />
//         </div>

//         <div className="Welcome-box px-[15px] py-[4px] z-[20] brder my-[20px] border-[#7042f88b] opacity-[0.9]">
//           <h1 className="Welcome-text text-[12px]">Encryption</h1>
//         </div>
//       </div>
//       <div className="absolute z-[20] bottom-[10px] px-[5px]">
//         <div className="cursive text-[20px] font-medium text-center text-gray-300">
//           Secure your data with end-to-end encryption
//         </div>
//       </div>

//       <div className="w-full flex items-start justify-center absolute">
//         <video
//           loop
//           muted
//           autoPlay
//           playsInline
//           preload="false"
//           className="w-full h-auto"
//           src="/encryption.webm/"
//         />
//       </div>
//     </div>
//   );
// };

// export default Encryption;
"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gray-900">
      <div className="absolute top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          animate="visible"
          className="text-4xl font-bold text-center text-gray-200"
        >
          Performance
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Security
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/LockTop.png"
            alt="Lock top"
            width={50}
            height={50}
            className="w-[50px] transform transition-transform duration-500 group-hover:translate-y-11"
          />
          <Image
            src="/LockMain.png"
            alt="Lock Main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="Welcome-box px-4 py-2 mt-4 border border-purple-600 rounded opacity-90">
          <h1 className="Welcome-text text-sm text-gray-300">Encryption</h1>
        </div>
      </div>

      <div className="absolute bottom-10 z-[20] px-4">
        <div className="text-xl font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm"
        />
      </div>
    </div>
  );
};

export default Encryption;
