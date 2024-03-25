import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const { slug, heading, subtitle } = router.query;
  console.log();

  return (
    <>
      <p>This is the page for post: {slug}</p>
      <h1>{heading}</h1>
      <h2>{subtitle}</h2>
    </>
  );
};

export default Article;
