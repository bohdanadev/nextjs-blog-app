import { FC } from "react";

import PostsGrid from "../posts/posts-grid";
import css from "./featured-posts.module.css";
import { IPostData } from "@/types";

interface IProps {
  posts: IPostData[];
}

const FeaturedPosts: FC<IProps> = ({ posts }) => {
  return (
    <section className={css.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
