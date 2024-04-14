/* eslint-disable react/prop-types */
import React from "react";
import { images } from "../../../constants/index.js";
import { Link } from "react-router-dom";
export default function SuggestedPost({
  header = "Latest articles",
  posts,
  tags,
  className,
}) {
  return (
    <div
      className={`w-full shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-lg p-4 ${className}`}
    >
      <h2 className="font-roboto font-medium text-darK-hard md:text-xl ">
        {header}
      </h2>
      <div className="grid gap-y-5 mt-5  md:grid-cols-2 md:gap-x-5 lg:grid-cols-1">
        {posts.map((item) => (
          <div
            key={item.id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              src={item.image}
              alt=""
              className="aspect-square object-cover rounded-lg w-1/5"
            />
            <div>
              <h3 className="text-sm font-roboto text-darK-hard font-medium md:text-base lg:text-lg">
                {item.name}
              </h3>
              <span className="text-xs opacity-60">
                {new Date(item.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-roboto font-medium text-darK-hard mt-8 md:text-xl">
        Tags
      </h2>
      <div className="flex flex-wrap gap-2 mt-4">
        {tags.map((item) => (
          <Link
            className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white  md:text-sm"
            to={"/"}
            key={item}
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
}
