/* eslint-disable  */
import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import { getCommentsData } from "../../data/Comments";
import Comment from "./Comment";

export default function CommentsContainer({ className }) {
  const [commentData, setCommentData] = useState([]);
  const mainComments = commentData.filter((comment) => comment.parent === null);
  const [affectedComment, setAffectedComment] = useState(null);

  useEffect(() => {
    // const getComments = () => {};
    // getCommentsData()
    (async () => {
      const data = await getCommentsData();
      setCommentData(data);
    })();
  }, []);

  console.log(commentData);

  const getRepliesHandler = (commentId) => {
    return commentData
      .filter((item) => item.parent === commentId)
      .sort((a, b) => {
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
  };

  const updateCommentHandler = (value, commentId) => {
    const updatedComments = commentData.map((item) => {
      if (item._id === commentId) {
        return { ...item, desc: value };
      }
      return item;
    });
    setCommentData(updatedComments);
    setAffectedComment(null);
  };

  const addCommentHandler = (value, parent = null, replyOnUser = null) => {
    const newComment = {
      _id: Math.random().toString(),
      user: {
        _id: "a",
        name: "Mohammad Rezaii",
      },
      desc: value,
      post: "1",
      parent: parent,
      replyOnUser: replyOnUser,
      createdAt: new Date().toISOString(),
    };
    setCommentData((curr) => {
      return [newComment, ...curr];
    });
    setAffectedComment(null);
  };

  const deleteComment = (commentId) => {
    const updatedComments = commentData.filter((item) => {
      return item._id !== commentId;
    });
    setCommentData(updatedComments);
    console.log(commentData);
  };

  return (
    <div className={`${className}`}>
      <CommentForm
        formSubmitHandler={(comment) => addCommentHandler(comment)}
      />
      <div className="space-y-4 mt-8">
        <h1>All Comments {`(${commentData.length})`}</h1>
        {mainComments.map((item) => (
          <Comment
            affectedComment={affectedComment}
            setAffectedComment={setAffectedComment}
            data={item}
            key={item._id}
            logginedUserId={"a"}
            addComment={addCommentHandler}
            deleteComment={deleteComment}
            updateComment={updateCommentHandler}
            replies={getRepliesHandler(item._id)}
          />
        ))}
      </div>
    </div>
  );
}
