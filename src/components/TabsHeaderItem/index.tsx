import Modal from "../Modal";

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
  // activeTab,
  onTabChange,
}: ITabsHeaderItemProps) {
  return (
    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
      <span
        className={
          "text-xs cursor-pointer font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
          "text-grey bg-grey-600 text-grey-600 bg-white"
        }
        onClick={() => onTabChange(tab.index)}
        role="tablist"
      >
        {tab.title} {eventCounter}
        {tab.useModal && <Modal />}
      </span>
    </li>
  );
}
