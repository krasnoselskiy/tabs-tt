type Tab = {
  index: number;
  title: string;
  useModal?: boolean;
  eventCounter?: number;
};

export const getTabList = (): Tab[] => {
  return [
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
};
