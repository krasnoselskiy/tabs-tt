import React from "react";

const Preloader: React.FC = (): JSX.Element => {
  return (
    <p className="font-normal text-base px-8 py-5 max-[468px]:px-5 max-[468px]:py-3 border-[1px] border-b-grey-lighter">
      Loading...
    </p>
  );
};

export default Preloader;
