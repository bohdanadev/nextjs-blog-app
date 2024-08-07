import { FC } from "react";
import css from "./all-posts.module.css";
import PostsGrid from "./posts-grid";
import { IPostData } from "@/types";

interface IProps {
  posts: IPostData[];
}

const AllPosts: FC<IProps> = ({ posts }) => {
  return (
    <section className={css.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

export default AllPosts;
