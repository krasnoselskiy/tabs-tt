export interface IErrorProps {
  error: {};
}

const Error = ({ error }: IErrorProps): JSX.Element => {
  return (
    <p className="font-normal text-base px-8 py-5 max-[468px]:px-5 max-[468px]:py-3 border-[1px] border-b-grey-lighter">
      {`An error has occurred:  ${error}`}
    </p>
  );
};

export default Error;
