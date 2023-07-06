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

const Post = ({ post }: IPostInterface): JSX.Element => {
  const date = dayjs(new Date());
  const [isNewPost, setNewPost] = useState(
    post?.createdAt && date.diff(post?.createdAt, "seconds") <= 1
  );
  const postClassName = classnames({
    "bg-primary-blue text-white": isNewPost,
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
      className={`px-8 py-5 max-[468px]:px-5 max-[468px]:py-3 border-[1px] border-b-grey-lighter transition-bg duration-1000 ${postClassName}`}
    >
      <h3 className="text-base font-bold">{post.title}</h3>
      <p className="text-base font-thin">{post.body}</p>
    </div>
  );
};

export default Post;
