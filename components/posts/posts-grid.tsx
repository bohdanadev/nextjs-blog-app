import { FC } from "react";

import PostItem from "./post-item";
import css from "./posts-grid.module.css";
import { IPostData } from "@/types";

interface IProps {
  posts: IPostData[];
}

const PostsGrid: FC<IProps> = ({ posts }) => {
  return (
    <ul className={css.grid}>
      {posts?.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};

export default PostsGrid;
