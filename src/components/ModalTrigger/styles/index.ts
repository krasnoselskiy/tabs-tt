import classNames from "classnames";

export const getEventTypeClassNames = (isActive: boolean): string => {
  return classNames("full-w text-base text-primary-blue", {
    "hover:underline": isActive,
  });
};

export const getIconWrapClassNames = (isModalShow: boolean): string => {
  return classNames(
    "pl-1 flex items-center transition-transform text-primary-blue h-[25px]",
    {
      "rotate-180": isModalShow,
    }
  );
};
