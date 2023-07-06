import * as React from "react";
import { queryClient } from "../../utils/reactQuery";
import { PostInterface } from "../../interfaces/post";

const AddCommentForm: React.FC = () => {
  const [comment, setComment] = React.useState<string>("");

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (comment) {
      const previousValue: PostInterface[] | undefined =
        queryClient.getQueryData(["posts"]);

      const newPosts: PostInterface[] = [
        {
          body: comment,
          id: `${Math.floor(Math.random() * 1000)}`,
          title: "Коментар",
          createdAt: new Date(),
        },
        ...(previousValue ? previousValue : []),
      ];

      queryClient.setQueryData(["posts"], newPosts);
      setComment("");
    }
  };

  return (
    <form
      className="absolute left-0 right-3 bottom-0 bg-white px-4 py-3 mt-3 flex flex-wrap"
      onSubmit={handleAddComment}
    >
      <div className="w-full pr-3 sm:w-3/4">
        <input
          required
          type="text"
          name="comment"
          placeholder="Add comment here"
          value={comment}
          onChange={handleCommentChange}
          className="w-full h-10 rounded-md border border-[#e0e0e0] bg-white py-3 px-3 text-base text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
        />
      </div>
      <div className="w-full sm:w-1/4">
        <div className="w-full lg:w-1/3">
          <button
            type="submit"
            className="py-2 w-full cursor-pointer rounded bg-indigo-500 text-center text-indigo-50"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddCommentForm;
