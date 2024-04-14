import React from "react";
import ArticleCard from "../../../components/ArticleCard";
import { FaArrowRight } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { changeCount } from "../../../stores/actions/countActions";
export default function Articles() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  const countChangeHandler = (type) => {
    dispatch(changeCount(type));
  };
  return (
    <section className="container mx-auto px-5 py-10 flex flex-col">
      <div className="flex flex-wrap md:gap-x-5 md:gap-y-5 pb-10">
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"}
        />
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"}
        />
        <ArticleCard
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"}
        />
      </div>
      <button className="flex gap-2 items-center mx-auto font-bold text-primary border-2 border-primary px-6 py-3 rounded-lg">
        <span>More Articles</span>
        <FaArrowRight className="h-3 w-3" />
      </button>
      <div className="mt-2 flex items-center gap-x-5">
        <button onClick={() => countChangeHandler("DECREASE")}>Decrease</button>
        {count.number}
        <button onClick={() => countChangeHandler("INCREASE")}>Increase</button>
      </div>
    </section>
  );
}
