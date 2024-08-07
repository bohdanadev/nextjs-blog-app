import { FC } from "react";

import PostsGrid from "../posts/posts-grid";
import css from "./featured-posts.module.css";

type FeaturedPostsProps = {
  posts: IPost[];
};

const FeaturedPosts: FC<FeaturedPostsProps> = (props) => {
  return (
    <section className={css.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
};

export default FeaturedPosts;
