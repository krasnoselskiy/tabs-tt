import React from "react";
import { queryClient } from "../../utils/reactQuery";
import { PostInterface } from "../../interfaces/post";

const AddCommentForm: React.FC = (): JSX.Element => {
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
      className="absolute left-0 right-0 bottom-0 bg-white px-8 py-5 max-[468px]:px-5 flex flex-wrap"
      onSubmit={handleAddComment}
    >
      <div className="w-full absolute -top-[8px] h-[8px] z-1 left-0 right-0 bg-gradient-to-t opacity-[0.25] from-[#D9D9D9] to-transparent"></div>
      <div className="w-[calc(100%-150px)] max-[468px]:w-full max-[468px]:mr-0 mr-[10px] lg:pr-3 mb-0 max-[768px]:mb-3">
        <input
          required
          type="text"
          name="comment"
          placeholder="Додайте коментар"
          value={comment}
          onChange={handleCommentChange}
          className="w-full h-10 rounded-sm border placeholder-grey-light border-grey-light bg-white py-[10px] px-[7px] text-xl text-primary-grey outline-none"
        />
      </div>
      <div className="w-[140px] max-[468px]:w-full">
        <button
          type="submit"
          className="py-2 w-full cursor-pointer rounded-sm bg-primary-blue text-center font-bold text-white"
        >
          Додати
        </button>
      </div>
    </form>
  );
};

export default AddCommentForm;
