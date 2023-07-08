import { memo } from "react";
import classnames from "classnames";

import { getTimeBetweenDates } from "./utils/getTimeBetweenDates";
import { useNewPost } from "./hooks/isNewPost";

interface IPostInterface {
  post: {
    createdAt?: Date;
    title: string;
    body: string;
  };
}

const Post = ({ post }: IPostInterface): JSX.Element => {
  const { seconds } = getTimeBetweenDates(post?.createdAt, new Date());
  const [isNewPost] = useNewPost(seconds);
  const postClassName = classnames({
    "bg-primary-blue text-white": isNewPost,
  });

  return (
    <div
      className={`px-8 py-5 max-[468px]:px-5 max-[468px]:py-3 border-[1px] border-b-grey-lighter transition-bg duration-1000 ${postClassName}`}
    >
      <h3 className="text-base font-bold">{post.title}</h3>
      <p className="text-base font-thin">{post.body}</p>
    </div>
  );
};

export default memo(Post);
