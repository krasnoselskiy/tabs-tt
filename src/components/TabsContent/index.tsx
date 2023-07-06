import { FC } from "react";
import EventTab from "../EventTab";

interface ITabsHeaderProps {
  activeTab: number;
}

const TabsContent: FC<ITabsHeaderProps> = ({ activeTab }: ITabsHeaderProps) => {
  return (
    <>
      {activeTab === 2 && <EventTab />}
      {(activeTab === 1 || activeTab === 3) && <p>Поки що пусто</p>}
    </>
  );
};

export default TabsContent;
