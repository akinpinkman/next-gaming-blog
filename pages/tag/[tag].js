import ArticleCard from "@/components/ArticleCard";
import * as contentful from "contentful";
import { createClient } from "contentful";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "article",
  });

  const paths = res.items.map((item) => {
    return {
      params: { tag: item.metadata.tags[0].sys.id },
      revalidate: 1,
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "article",
  });

  // Filter articles based on the provided tag
  const filteredArticles = items.filter((item) =>
    item.metadata.tags.find((tag) => tag.sys.id === params.tag)
  );

  return {
    props: { articles: filteredArticles },
  };
};

export default function TagPage({ articles }) {
  return (
    <section className="flex flex-wrap items-center justify-center gap-5 mobile:px-3">
      {articles.map((article) => (
        <div key={article.sys.id} className="">
          <ArticleCard article={article} />
        </div>
      ))}
    </section>
  );
}
