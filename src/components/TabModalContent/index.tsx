import * as React from "react";
import { useOnClickOutside } from "usehooks-ts";

import { EVENTS } from "../../utils/constants";

export interface ITabsModalContentProps {
  eventType: string;
  handleEventChange: (event: string) => void;
  handleModalToggle: () => void;
}

export default function TabsModalContent({
  eventType,
  handleEventChange,
  handleModalToggle,
}: ITabsModalContentProps) {
  const ref = React.useRef(null);
  const inputClassName = "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300";
  const labelClassName = "capitalize cursor-pointer ml-2 text-gray-900";
  const modalClassNames =
    "flex flex-col transition-opacity ease-in duration-200 modal z-10 shadow-lg w-[200px] p-2 absolute left-1/2 -bottom-[90px] -translate-x-1/2 bg-white";

  useOnClickOutside(ref, handleModalToggle);

  return (
    <div className={modalClassNames} ref={ref}>
      <h5 className="text-black text-left mb-2 capitalize">Фiльтри Подій</h5>

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
