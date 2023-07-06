import { useRef, useState } from "react";

import { useOnClickOutside } from "usehooks-ts";

export interface IModalProps {}

export default function Modal(props: IModalProps) {
  const [isVisible, setVisible] = useState(false);
  console.log("props :>> ", props);
  const ref = useRef(null);

  const handleClickOutside = () => {
    setVisible(false);
  };

  const handleClickInside = () => {
    setVisible(!isVisible);
  };

  useOnClickOutside(ref, handleClickOutside);

  return (
    <div>
      <button ref={ref} onClick={handleClickInside}>
        Click
      </button>

      {isVisible && (
        <>
          <div className="flex items-center mb-4">
            <input
              id="default-radio-1"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Default radio
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked
              id="default-radio-2"
              type="radio"
              value=""
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Checked state
            </label>
          </div>
        </>
      )}
    </div>
  );
}
