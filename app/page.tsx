import { Fragment } from "react";
import styles from "./page.module.css";
import Hero from "@/components/home-page/hero";
import FeaturedPosts from "@/components/home-page/featured-posts";

export default function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts />
    </Fragment>
  );
}
