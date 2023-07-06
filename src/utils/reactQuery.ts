import { useQuery, QueryClient } from "@tanstack/react-query";

type Posts = {};

const getPosts = (): Promise<Posts[]> =>
  fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=4").then(
    (res) => res.json()
  );

export const usePostsQuery = () => {
  return useQuery({
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
