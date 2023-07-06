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

const TabsHeaderItem = ({
  tab,
  eventCounter,
  activeTab,
  onTabChange,
}: ITabsHeaderItemProps): JSX.Element => {
  const [eventType, setEventType] = React.useState<string>(EVENTS.TYPES.ALL);
  const [isModalShow, setModalShow] = React.useState<boolean>(false);
  const isActive = activeTab === tab.index;
  const spanClassName = classNames(
    "flex justify-center font-normal flex transition-all relative z-1 text-xs font-bold uppercase px-8 max-[768px]:px-4 py-[9px] leading-normal text-grey bg-grey-600 text-grey-600",
    {
      "bg-grey-lighter text-white cursor-pointer": !isActive,
      "cursor-default": isActive,
    }
  );
  const eventTypeClassNames = classNames("full-w text-base text-primary-blue", {
    "hover:underline": isActive,
  });
  const tabTitleClassNames = "normal-case text-base text-primary-black";
  const iconWrapClassNames = classNames(
    "pl-1 flex items-center transition-transform text-primary-blue h-[25px]",
    {
      "rotate-180": isModalShow,
    }
  );

  const handleModalHide = (): void => {
    setModalShow(false);
  };

  const handleModalShow = (): void => {
    isActive && setModalShow(true);
  };

  const handleEventChange = (event: string): void => {
    setEventType(event);
    setModalShow(false);
  };

  return (
    <li className="z-1 max-[768px]:min-w-[190px] text-center relative">
      <span
        className={spanClassName}
        onClick={() => onTabChange(tab.index)}
        role="tablist"
      >
        <span className={tabTitleClassNames}>{tab.title}</span>

        {eventCounter && (
          <>
            <span className="px-2 text-primary-black flex items-center">
              <span className="h-[2px] w-[2px] bg-black" />
            </span>
            <span className="text-base text-primary-black">{eventCounter}</span>
          </>
        )}

        {tab.useModal && (
          <div className="relative max-[768px]:initial">
            <button
              className="flex align-middle pl-2"
              onClick={handleModalShow}
            >
              <span className={eventTypeClassNames}>{eventType}</span>

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
                  handleModalHide={handleModalHide}
                />
              </Modal>
            )}
          </div>
        )}
      </span>
    </li>
  );
};

export default TabsHeaderItem;
