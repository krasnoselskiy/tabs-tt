import { getSpanClassName, getTabTitleClassNames } from "./styles";
import EventCounter from "../EventCounter";
import ModalTrigger from "../ModalTrigger";

type TabType = {
  title: string;
  index: number;
  useModal?: boolean;
};

export interface IHeaderItemProps {
  tab: TabType;
  activeTab: number;
  eventCounter?: number;
  onTabChange: (value: number) => void;
}

const HeaderItem = ({
  tab,
  eventCounter,
  activeTab,
  onTabChange,
}: IHeaderItemProps): JSX.Element => {
  const isActive = activeTab === tab.index;

  return (
    <li className="z-1 max-[768px]:min-w-[190px] text-center relative">
      <span
        className={getSpanClassName(isActive)}
        onClick={() => onTabChange(tab.index)}
        role="tablist"
      >
        <span className={getTabTitleClassNames()}>{tab.title}</span>

        {eventCounter && <EventCounter counter={eventCounter} />}

        {tab.useModal && <ModalTrigger isActive={isActive} />}
      </span>
    </li>
  );
};

export default HeaderItem;
