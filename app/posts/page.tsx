import Head from "next/head";
import { FC, Fragment } from "react";

import { getAllPosts } from "@/lib/posts-util";
import AllPosts from "@/components/posts/all-posts";
import { IPostData } from "@/types";

const AllPostsPage: FC = () => {
  const allPosts: IPostData[] = getAllPosts();
  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta
          name="description"
          content="A list of all programming-related tutorials and posts!"
        />
      </Head>
      <AllPosts posts={allPosts} />
    </Fragment>
  );
};

export default AllPostsPage;
