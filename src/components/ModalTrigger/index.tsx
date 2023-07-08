import React from "react";

import Modal from "../Modal";
import TabsModalContent from "../ModalContent";
import ArrowDownIcon from "../Icons/ArrowDown";

import { getEventTypeClassNames, getIconWrapClassNames } from "./styles";

import { EVENTS } from "../../utils/constants";

export interface IModalTriggerProps {
  isActive: boolean;
}

const ModalTrigger = ({ isActive }: IModalTriggerProps): JSX.Element => {
  const [eventType, setEventType] = React.useState<string>(EVENTS.TYPES.ALL);
  const [isModalShow, setModalShow] = React.useState<boolean>(false);

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
    <div className="relative max-[768px]:initial">
      <button className="flex pl-2 align-middle" onClick={handleModalShow}>
        <span className={getEventTypeClassNames(isActive)}>{eventType}</span>

        <span className={getIconWrapClassNames(isModalShow)}>
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
  );
};

export default ModalTrigger;
