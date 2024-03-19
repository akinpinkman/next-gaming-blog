import { useRouter } from "next/router";

const Article = () => {
  const router = useRouter();
  const { slug, heading, subtitle } = router.query;
  console.log(heading);

  return (
    <>
      <p>This is the page for post: {slug}</p>
      <h1>A{heading}</h1>
      <h2>A{subtitle}</h2>
    </>
  );
};

export default Article;
