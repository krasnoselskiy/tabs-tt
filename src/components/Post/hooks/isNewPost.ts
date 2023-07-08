import { useEffect, useState } from "react";

export const useNewPost = (seconds: number | null) => {
  const isNew = seconds === 0 || false;
  const [isNewPost, setNewPost] = useState<boolean>(isNew);

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

  return [isNewPost, setNewPost] as const;
};
