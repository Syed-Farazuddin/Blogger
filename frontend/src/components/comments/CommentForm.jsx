/* eslint-disable  */
import React, { useState } from "react";

function CommentForm({
  btnLabel = "comment",
  formSubmitHandler,
  formCancelHandler = null,
  initialText = "",
}) {
  const [comment, setComment] = useState(initialText);

  const HandleSubmit = (e) => {
    e.preventDefault();
    formSubmitHandler(comment);
    setComment("");
  };

  return (
    <form onSubmit={(e) => HandleSubmit(e)}>
      <div className="flex flex-col items-end  border-[1px] border-primary px-4 py-4 rounded-lg">
        <textarea
          className="w-full focus:outline-none bg-transparent"
          onChange={(e) => {
            setComment(e.target.value);
          }}
          value={comment}
          placeholder="Leave your comment here"
          rows="5"
        ></textarea>
        <div className="flex flex-col-reverse gap-y-2 min-[420px]:flex-row items-center gap-x-2 pt-2">
          {formCancelHandler && (
            <button
              onClick={formCancelHandler}
              className="px-6 py-2.5 rounded-lg border border-red-500 text-red-500 font-semibold mt-2"
            >
              Cancel
            </button>
          )}
          <button
            type="submit"
            className="px-6 py-2.5 rounded-lg bg-primary text-white font-semibold mt-2"
          >
            {btnLabel}
          </button>
        </div>
      </div>
    </form>
  );
}

export default CommentForm;
