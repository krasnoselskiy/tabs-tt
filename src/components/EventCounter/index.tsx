export interface IEventCounterProps {
  counter: number;
}

const EventCounter = ({ counter }: IEventCounterProps): JSX.Element => {
  return (
    <>
      <span className="flex items-center px-2 text-primary-black">
        <span className="h-[2px] w-[2px] bg-black" />
      </span>
      <span className="text-base text-primary-black">{counter}</span>
    </>
  );
};

export default EventCounter;
