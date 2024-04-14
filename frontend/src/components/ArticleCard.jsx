import React from "react";
import { images } from "../constants";
import { BsCheckLg } from "react-icons/bs";
export default function ArticleCard({ className }) {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] ${className} `}
    >
      <img
        src={images.post1}
        className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
        alt="title"
      />
      <div className="p-5">
        <h2 className="font-roboto font-bold text-xl text-darK-soft md:text-2xl lg:text-[28px]">
          Future of Work
        </h2>
        <p className="text-sm mt-3 text-darK-light md:text-lg">
          Majority of peole will work in jobs that don’t exist today.
        </p>
        <div className="flex justify-between flex-nowrap items-center mt-6">
          <div className="flex items-center gap-x-2 md:gap-x-2.5">
            <img
              src={images.profile}
              alt=""
              className="w-9 h-9 md:w-10 md:h-10"
            />
            <div className="flex flex-col gap-1">
              <h4 className="font-bol italic text-darK-soft text-sm md:text-base">
                Viola Manisa
              </h4>
              <div className="flex items-center gap-x-2">
                <span className="bg-[#36B37E] w-fit bg-opacity-20 p-1.5 rounded-full">
                  <BsCheckLg className="w-1.5 h-1.5 text-[#36B37E]" />
                </span>
                <span className="text-xs italic text-darK-light md:text-sm">
                  Verified writer
                </span>
              </div>
            </div>
          </div>
          <span className="font-bold text-darK-light italic text-sm md:text-base">
            03 May
          </span>
        </div>
      </div>
    </div>
  );
}
