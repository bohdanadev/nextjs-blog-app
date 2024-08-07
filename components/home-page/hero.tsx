import Image from "next/image";

import css from "./hero.module.css";

const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.image}>
        <Image
          src="/images/site/me.jpg"
          alt="An image showing Me"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello and welcome to the ABCs of Web Development</h1>
      <p>I blog about web development</p>
    </section>
  );
};

export default Hero;
