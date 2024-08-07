import { FC, Fragment } from "react";

import styles from "./page.module.css";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";
import { getFeaturedPosts, IPostData } from "@/lib/posts-util";

const HomePage: FC = () => {
  const featuredPosts: IPostData[] = getFeaturedPosts();
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </Fragment>
  );
};

export default HomePage;
