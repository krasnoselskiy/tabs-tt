import * as React from "react";
import { useOnClickOutside } from "usehooks-ts";

import { EVENTS } from "../../utils/constants";

export interface ITabsModalContentProps {
  eventType: string;
  handleEventChange: (event: string) => void;
  handleModalHide: () => void;
}

export default function TabsModalContent({
  eventType,
  handleEventChange,
  handleModalHide,
}: ITabsModalContentProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const inputClassName =
    "w-4 cursor-pointer h-4 text-blue-600 bg-gray-100 border-gray-300 checked:bg-primary-blue";
  const labelClassName =
    "capitalize cursor-pointer ml-2 text-primary-grey text-base";
  const modalClassNames =
    "flex flex-col rounded border-primary-grey-light cursor-auto transition-opacity ease-in duration-200 modal z-10 shadow-[0px_0px_20px_0px_rgb(0,0,0,25%)] w-[270px] px-5 py-2 absolute left-[10px] -bottom-[100px] bg-white";

  useOnClickOutside(ref, handleModalHide, "mouseup");

  return (
    <div className={modalClassNames} ref={ref}>
      <h5 className="text-secondary-grey font-bold text-sm text-left mb-2 capitalize">
        Фiльтри Подій
      </h5>

      <div className="flex items-center mb-1">
        <input
          checked={eventType === EVENTS.TYPES.ALL}
          id="all-events"
          type="radio"
          onChange={() => handleEventChange(EVENTS.TYPES.ALL)}
          value={EVENTS.TYPES.ALL}
          name="all-events"
          className={inputClassName}
        />
        <label
          onClick={() => handleEventChange(EVENTS.TYPES.ALL)}
          htmlFor="all-events"
          className={labelClassName}
        >
          {EVENTS.TYPES.ALL}
        </label>
      </div>
      <div className="flex items-center">
        <input
          checked={eventType === EVENTS.TYPES.COMMENTS}
          id="comments"
          type="radio"
          onChange={() => handleEventChange(EVENTS.TYPES.COMMENTS)}
          value={EVENTS.TYPES.COMMENTS}
          name="comments"
          className={inputClassName}
        />
        <label
          onClick={() => handleEventChange(EVENTS.TYPES.COMMENTS)}
          htmlFor="comments"
          className={labelClassName}
        >
          {EVENTS.TYPES.COMMENTS}
        </label>
      </div>
    </div>
  );
}
