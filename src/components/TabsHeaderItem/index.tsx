import React from "react";
import classNames from "classnames";

import ArrowDownIcon from "../Icons/ArrowDown";
import Modal from "../Modal";
import TabsModalContent from "../TabModalContent";

import { EVENTS } from "../../utils/constants";

type TabType = {
  title: string;
  index: number;
  useModal?: boolean;
};

export interface ITabsHeaderItemProps {
  tab: TabType;
  activeTab: number;
  eventCounter?: number;
  onTabChange: (value: number) => void;
}

export default function TabsHeaderItem({
  tab,
  eventCounter,
  activeTab,
  onTabChange,
}: ITabsHeaderItemProps) {
  const [eventType, setEventType] = React.useState<string>(EVENTS.TYPES.ALL);
  const [isModalShow, setModalShow] = React.useState<boolean>(false);
  const spanClassName = classNames(
    "tabsHeaderItem flex transition-all relative z-1 text-xs cursor-pointer font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-grey bg-grey-600 text-grey-600 bg-white",
    {
      "bg-blue-600 text-white": activeTab === tab.index,
    }
  );

  const iconWrapClassNames = classNames(
    "transition-transform pt-[1px] pl-[2px]",
    {
      "rotate-180 translate-y-[2px]": isModalShow,
    }
  );

  const handleModalToggle = (): void => {
    setModalShow(!isModalShow);
  };

  const handleEventChange = (event: string): void => {
    setEventType(event);
    setModalShow(false);
  };

  return (
    <li className="-mb-px mr-2 z-1 last:mr-0 flex-auto text-center relative ">
      <span
        className={spanClassName}
        onClick={() => onTabChange(tab.index)}
        role="tablist"
      >
        <span className="px-2">{tab.title}</span>
        <span className="px-2">{eventCounter}</span>

        {tab.useModal && (
          <>
            <button className="flex" onClick={handleModalToggle}>
              <span className="full-w min-w-[40px]">{eventType}</span>

              <span className={iconWrapClassNames}>
                <ArrowDownIcon />
              </span>
            </button>

            <div id="modal-root"></div>

            {isModalShow && (
              <Modal>
                <TabsModalContent
                  eventType={eventType}
                  handleEventChange={handleEventChange}
                  handleModalToggle={handleModalToggle}
                />
              </Modal>
            )}
          </>
        )}
      </span>
    </li>
  );
}
