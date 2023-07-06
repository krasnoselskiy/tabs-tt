import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { queryClient } from "../../utils/reactQuery";
import Tabs from "../Tabs";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container py-4 m-auto max-w-md">
        <Tabs />
      </div>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
