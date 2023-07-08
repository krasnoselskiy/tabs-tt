import classNames from "classnames";

export const getSpanClassName = (isActive: boolean): string => {
  return classNames(
    "flex justify-center font-normal flex transition-all relative z-1 text-xs font-bold uppercase px-8 max-[768px]:px-4 py-[9px] leading-normal text-grey bg-grey-600 text-grey-600",
    {
      "bg-grey-lighter text-white cursor-pointer": !isActive,
      "cursor-default": isActive,
    }
  );
};

export const getTabTitleClassNames = (): string => {
  return "normal-case text-base text-primary-black";
};
