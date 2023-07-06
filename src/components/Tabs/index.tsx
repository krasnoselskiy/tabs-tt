import { FC, useState } from "react";
import TabsContent from "../TabsContent";
import TabsHeaderItem from "../TabsHeaderItem";
// import Modal from "../Modal";

interface TabsProps {}

const tabsList = [
  {
    index: 1,
    title: "Резюме та відгуки",
  },
  {
    index: 2,
    title: "Події",
    useModal: true,
  },
  {
    index: 3,
    title: "Ще проходить",
    eventCounter: 2,
  },
];

const Tabs: FC<TabsProps> = () => {
  const [activeTab, setActiveTab] = useState(2);

  const handleTabChange = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
          {tabsList.map((tab) => (
            <TabsHeaderItem
              key={tab.title}
              tab={tab}
              eventCounter={tab.eventCounter}
              activeTab={activeTab}
              onTabChange={handleTabChange}
            />
          ))}
        </ul>
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded">
          <div className="px-4 py-5 flex-auto h-85v overflow-y-auto">
            <TabsContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
