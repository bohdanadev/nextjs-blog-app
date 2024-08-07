import Image from "next/image";
import { FC } from "react";

import css from "./post-header.module.css";

interface IProps {
  title: string;
  image: string;
}

const PostHeader: FC<IProps> = (props) => {
  const { title, image } = props;

  return (
    <header className={css.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} width={200} height={150} />
    </header>
  );
};

export default PostHeader;
