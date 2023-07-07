import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../utils/reactQuery";
import Tabs from "../Tabs";

const App: React.FC = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container px-4 w-full m-auto max-w-[732px]">
        <Tabs />
      </div>
    </QueryClientProvider>
  );
};

export default App;
