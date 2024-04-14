/* eslint-disable react/prop-types */
import React from "react";
import { FiEdit2, FiMessageSquare, FiTrash2 } from "react-icons/fi";
import { images } from "../../constants";
import CommentForm from "./CommentForm";

export default function Comment({
  data,
  logginedUserId,
  setAffectedComment,
  affectedComment,
  addComment,
  updateComment,
  deleteComment,
  parentId = null,
  replies,
}) {
  const isUserLogin = Boolean(logginedUserId);
  const commentBelongsToUser = logginedUserId === data.user._id;
  const isReplying =
    affectedComment &&
    affectedComment.type === "replying" &&
    affectedComment._id === data._id;
  const repliedCommmentId = parentId ? parentId : data._id;
  const replyOnUserId = data._id;
  const isEditing =
    affectedComment &&
    affectedComment.type === "editing" &&
    affectedComment._id === data._id;
  return (
    <div className="flex flex-nowrap items-start gap-x-3 bg-[#f2f4f5] rounded-lg p-3">
      <img
        src={images.profile}
        className="w-9 h-9 object-cover rounded-lg"
        alt="user profile"
      />
      <div className="flex-1 flex flex-col">
        <h5 className="font-bold text-darK-hard text-xs lg:text-sm">
          {data?.user?.name}
        </h5>
        <span className="text-xs text-darK-light my-0.5">
          {new Date(data.createdAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "2-digit",
          })}
        </span>
        {!isEditing && (
          <p className="font-opensans mt-2.5 text-darK-light">{data.desc}</p>
        )}
        {isEditing && (
          <CommentForm
            btnLabel="Update"
            formCancelHandler={() => setAffectedComment(null)}
            formSubmitHandler={(value) => updateComment(value, data._id)}
            initialText={data.desc}
          />
        )}
        <div className="flex items-center gap-x-3 text-darK-light font-roboto mt-3 mb-3 text-sm">
          {isUserLogin && (
            <button
              onClick={() => {
                setAffectedComment({ type: "replying", _id: data._id });
              }}
              className="flex items-center space-x-2 justify-center hover:bg-slate-200 px-2 py-1 rounded-lg"
            >
              <FiMessageSquare className="w-4 h-auto" />
              <span>Reply</span>
            </button>
          )}
          {commentBelongsToUser && (
            <>
              <button
                onClick={() => {
                  setAffectedComment({ type: "editing", _id: data._id });
                }}
                className="flex items-center space-x-2 justify-center hover:bg-slate-200 px-2 py-1 rounded-lg"
              >
                <FiEdit2 className="w-4 h-auto" />
                <span>Edit</span>
              </button>
              <button className="flex items-center space-x-2 justify-center hover:bg-slate-200 px-2 py-1 rounded-lg">
                <FiTrash2
                  className="w-4 h-auto"
                  onClick={() => deleteComment(data._id)}
                />
                <span>Delete</span>
              </button>{" "}
            </>
          )}
        </div>
        {isReplying && (
          <CommentForm
            formSubmitHandler={(value) => {
              addComment(value, repliedCommmentId, replyOnUserId);
            }}
            formCancelHandler={() => setAffectedComment(null)}
            btnLabel="Reply"
          />
        )}
        {replies.length > 0 && (
          <div>
            {replies.map((item) => (
              <Comment
                key={item._id}
                addComment={addComment}
                affectedComment={affectedComment}
                setAffectedComment={setAffectedComment}
                data={item}
                deleteComment={deleteComment}
                logginedUserId={logginedUserId}
                replies={[]}
                updateComment={updateComment}
                parentId={data._id}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
