import Head from "next/head";
import { FC, Fragment } from "react";

import PostContent from "@/components/posts/post-detail/post-content";
import { getPostData, getPostsFiles, IPostData } from "@/lib/posts-util";
import { Metadata } from "next";

interface IProps {
  params: {
    slug: string;
  };
}

export const generateStaticParams = async () => {
  const postFilenames = getPostsFiles();
  const slugs = postFilenames.map((fileName) => fileName.replace(/\.md$/, ""));

  return slugs.map((slug) => ({ slug }));
};

export const generateMetadata = async ({
  params,
}: IProps): Promise<Metadata> => {
  const postData = getPostData(params.slug);
  return {
    title: postData.title,
    description: postData.excerpt,
  };
};

const PostDetailPage: FC<IProps> = ({ params }) => {
  const postData: IPostData = getPostData(params.slug);
  return (
    <Fragment>
      <Head>
        <title>{postData.title}</title>
        <meta name="description" content={postData.excerpt} />
      </Head>
      <PostContent post={postData} />
    </Fragment>
  );
};

export default PostDetailPage;
