import { FC } from "react";
import { Post } from "../Post";
import { AddCommentForm } from "../AddComment";

import { PostInterface } from "../../interfaces/post";

import { usePostsQuery } from "../../utils/reactQuery";

const EventTab: FC = () => {
  const { isLoading, error, data: posts } = usePostsQuery();

  if (isLoading) return <h2>Loading...</h2>;

  if (error) return <h2>{"An error has occurred: " + error}</h2>;

  return (
    <>
      {posts.map((post: PostInterface) => (
        <Post key={post.id} post={post} />
      ))}

      <AddCommentForm />
    </>
  );
};

export default EventTab;
