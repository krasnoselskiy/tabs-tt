import React from "react";

import Post from "../Post";
import AddCommentForm from "../AddComment";
import Error from "../Error";
import Preloader from "../Preloader";

import { PostInterface } from "../../interfaces/post";
import { usePostsQuery } from "../../utils/reactQuery";

const EventTab: React.FC = (): JSX.Element => {
  const { isLoading, error, data: posts } = usePostsQuery();

  if (isLoading) return <Preloader />;

  if (error) return <Error error={error} />;

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
