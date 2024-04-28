import Image from "next/image";
import React from "react";

const Loader = () => {
  return (
    <div className="w-full h-[100vh] bg-white flex items-center justify-center">
      <div className="w-[90px] h-[90px]">
        <Image
          src={"/assets/loading.gif"}
          width={512}
          height={512}
          alt="loading"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Loader;
