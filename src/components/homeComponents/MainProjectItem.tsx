import React from "react";
type LineProps = {};
export const StraightLine = (props: LineProps) => {
  return (
    <div className="pb-line-cont ">
      <div className="pb-line "></div>
    </div>
  );
};

export const LongStraightLine = (props: LineProps) => {
  return (
    <div className="pb-line-cont h-24 sm:h-16 2xl:h-20">
      <div className="pb-line"></div>
    </div>
  );
};

export const ShortStraightLine = (props: LineProps) => {
  return (
    <div className="pb-line-cont h-10 sm:h-16 2xl:h-20">
      <div className="pb-line"></div>
    </div>
  );
};

export const LeftLine1 = (props: LineProps) => {
  return (
    <div className="flex flex-col h-fit w-full">
      <div className="w-full h-8">
        <h2 className=" flex justify-start items-start animate-pulse h-full sm:hidden mb-auto ">
          My projects
        </h2>
      </div>
      <div className="w-full h-96 rounded-tr-lg border-t-4 border-r-4 border-button"></div>
    </div>
  );
};

export const LeftLine2 = (props: LineProps) => {
  return (
    <div className="flex flex-col h-fit w-full">
      <div className="w-full h-8">
        <h2 className=" flex justify-start items-start animate-pulse h-full sm:hidden mb-auto ">
          My projects
        </h2>
      </div>
      <div className="w-full h-12 rounded-tr-lg border-t-4 border-r-4 border-button"></div>
    </div>
  );
};

export const RightLine = (props: LineProps) => {
  return (
    <div className="pb-line-cont-main pb-10 ">
      <div className=" col-start-2 sm:col-start-3 col-span-1 h-full w-full z-20 pb-5">
        <div className="h-20 w-full  rounded-bl-lg border-b-4 border-l-4 border-button"></div>
        <div className="block sm:hidden text-right text-sm mt-auto h-8 text-fillDrkactive">
          copyright Ichacodes &copy;{new Date().getFullYear()}
        </div>
      </div>
      <div className="hidden sm:block text-right text-sm mt-auto h-8 text-fillDrkactive">
        copyright Ichacodes &copy;{new Date().getFullYear()}
      </div>
    </div>
  );
};
