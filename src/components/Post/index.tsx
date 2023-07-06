import { useEffect, useState } from "react";
import { PostInterface } from "../../interfaces/post";
import * as dayjs from "dayjs";

export const Post = ({ post }: PostInterface) => {
  const [className, setClassName] = useState("");
  const date = dayjs(new Date());

  useEffect(() => {
    const updatedClassName =
      post?.createdAt && date.diff(post?.createdAt, "seconds") <= 1
        ? "bg-blue-400 text-white"
        : "";

    setClassName(updatedClassName);
  }, []);

  useEffect(() => {
    if (className.length) {
      const timeout = setInterval(() => {
        setClassName("");
      }, 1000);

      return () => {
        clearInterval(timeout);
      };
    }
  }, [className]);

  return (
    <div
      className={`px-2 mb-2 border transition-bg duration-1000 ${className}`}
    >
      <h3>{post.title}</h3>
      <h4>{post.body}</h4>
    </div>
  );
};
