import { useQuery, QueryClient } from "@tanstack/react-query";
import { PostInterface } from "../interfaces/post";

const getPosts = (): Promise<PostInterface[]> =>
  fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4").then(
    (res) => res.json()
  );

export const usePostsQuery = () => {
  return useQuery<PostInterface[], Error>({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});
