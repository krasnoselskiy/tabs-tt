import { useQuery, QueryClient } from "@tanstack/react-query";

const getPosts = () =>
  fetch("https://jsonplaceholder.typicode.com/posts?_start=0&_limit=1").then(
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
