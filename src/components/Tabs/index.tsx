import React from "react";

import TabsContent from "../TabsContent";
import TabsHeaderItem from "../HeaderItem";
import { getTabList } from "./utils/getTabList";

const Tabs: React.FC = (): JSX.Element => {
  const [activeTab, setActiveTab] = React.useState<number>(2);
  const tabsList = getTabList();

  const handleTabChange = (index: number): void => {
    setActiveTab(index);
  };

  return (
    <div className="flex flex-wrap">
      <div className="w-full">
        <ul className="flex list-none flex-wrap pt-3 pb-0 flex-row max-[768px]:flex-nowrap max-[768px]:overflow-y-auto">
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

        <div id="modal-root-mobile" className="relative"></div>

        <div className="relative flex flex-col w-full min-w-0 break-words bg-white rounded shadow-lg">
          <div className="flex-auto h-[calc(100vh-70px)] pb-[80px] overflow-y-auto">
            <TabsContent activeTab={activeTab} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
