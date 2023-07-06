import { useEffect, useState } from "react";
import * as dayjs from "dayjs";
import classnames from "classnames";

interface IPostInterface {
  post: {
    createdAt?: Date;
    title: string;
    body: string;
  };
}

export const Post = ({ post }: IPostInterface) => {
  const date = dayjs(new Date());
  const [isNewPost, setNewPost] = useState(
    post?.createdAt && date.diff(post?.createdAt, "seconds") <= 1
  );
  const postClassName = classnames({
    "bg-blue-400 text-white": isNewPost,
  });

  useEffect(() => {
    if (isNewPost) {
      const timeout = setInterval(() => {
        setNewPost(false);
      }, 1000);

      return () => {
        clearInterval(timeout);
      };
    }
  }, [isNewPost]);

  return (
    <div
      className={`px-2 mb-2 border transition-bg duration-1000 ${postClassName}`}
    >
      <h3>{post.title}</h3>
      <h4>{post.body}</h4>
    </div>
  );
};
