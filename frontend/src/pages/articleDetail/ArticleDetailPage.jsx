import React from "react";
import Layout from "../../components/Layout";
import BreadCrumbs from "../../components/BreadCrumbs";
import { images } from "../../constants";
import { Link } from "react-router-dom";
import SuggestedPost from "./container/SuggestedPost";
import CommentsContainer from "../../components/comments/CommentsContainer";
import SocialShare from "../../components/SocialShare";
const tags = ["medical", "Lifestyle", "Learn", "Healthy", "Food", "Diet"];
const data = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Article title",
    link: "/article",
  },
];
const posts = [
  {
    id: 1,
    image: images.post1,
    name: "Item title",
    createdAt: "2022-12-31T17:22:05.092+0000",
    subtitle: "lorem ipusm sin a dummy text yused for dummy thig",
  },
  {
    id: 2,
    image: images.post1,
    name: "Help children to get laptops",
    createdAt: "2022-12-31T17:22:05.092+0000",
  },
  {
    id: 3,
    image: images.post1,
    name: "Item title",
    createdAt: "2022-12-31T17:22:05.092+0000",
  },
  {
    id: 4,
    image: images.post1,
    name: "Item title",
    createdAt: "2022-12-31T17:22:05.092+0000",
  },
];
export default function ArticleDetailPage() {
  return (
    <Layout>
      <section className="container mx-auto max-w-5xl flex flex-col px-5 py-5 lg:flex-row lg:gap-5 lg:items-start">
        <article className="flex-1 mt-4">
          <BreadCrumbs data={data} />
          <img src={images.post1} className="rounded-xl w-full" alt="post" />
          <Link
            className="text-primary text-sm font-roboto inline-block mt-4 md:text-base"
            to="/blog?category=selectedCategory"
          >
            EDUCATION
          </Link>
          <h1 className="font-medium text-xl font-roboto mt-4 text-darK-hard md:text-[26px]">
            Help children get better education
          </h1>
          <div className="mt-4 text-darK-soft">
            <p className="leading-7 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Egeus.
              Mattis pellentesque id nibh tortor id aliquet lectus proin. Lorem
              ipsum dolor sit amet, consectetur adipiscing eursus vitae congue
              mauris rhoncus s pellentesque id nibh tortor id aliquet lectus
              proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum.
            </p>
          </div>
          <CommentsContainer className={"mt-10"} />
        </article>

        <div className="flex flex-col">
          <div className="">
            <SuggestedPost
              posts={posts}
              tags={tags}
              className={"mt-8 lg:mt-0 lg:max-w-xs"}
            />
          </div>
          <div className="mt-7">
            <h2 className="font-roboto text-darK-hard font-medium mb-4 md:text-xl">
              Share on :
            </h2>
            <SocialShare
              url={encodeURI(`https://github.com/Syed-Farazuddin`)}
              title={encodeURIComponent("Creaters github account")}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
