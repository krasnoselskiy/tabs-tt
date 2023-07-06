import React from "react";
import EventTab from "../EventTab";

interface ITabsHeaderProps {
  activeTab: number;
}

const TabsContent: React.FC<ITabsHeaderProps> = ({
  activeTab,
}): JSX.Element => {
  return (
    <>
      {activeTab === 2 && <EventTab />}
      {(activeTab === 1 || activeTab === 3) && (
        <p className="font-normal text-base px-8 py-5 max-[468px]:px-5 max-[468px]:py-3 border-[1px] border-b-grey-lighter">
          Поки що пусто
        </p>
      )}
    </>
  );
};

export default TabsContent;
