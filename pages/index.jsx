import { fetchArticlesAndGames } from "@/pages/api/hello";
import Hero from "@/components/Hero";
import Head from "next/head";
import ArticleCategory from "@/components/ArticleCategory";
import ReleaseDateTracker from "@/components/ReleaseDateTracker";

export async function getStaticProps() {
  const { articles, games } = await fetchArticlesAndGames();

  return {
    props: {
      articles,
      games,
    },
  };
}

export default function Home({ articles, games }) {
  const latestArticlesFilter = (article) =>
    !article.metadata.tags.some(
      (tag) => tag.sys.id === "nextgamingoriginals" || tag.sys.id === "news"
    );

  const latestNewsFilter = (article) =>
    article.metadata.tags.some((tag) => tag.sys.id === "news");

  return (
    <main>
      <section>
        <Head>
          <title>Next Gaming</title>
        </Head>
        <Hero articles={articles} />
      </section>
      <section className="flex items-baseline justify-center">
        <div>
          <ArticleCategory
            articles={articles}
            games={games}
            categoryTitle="Latest Articles"
            filterFunction={latestArticlesFilter}
          />
          <ArticleCategory
            articles={articles}
            games={games}
            categoryTitle="Latest News"
            filterFunction={latestNewsFilter}
          />
        </div>
        <ReleaseDateTracker games={games} />
      </section>
    </main>
  );
}
