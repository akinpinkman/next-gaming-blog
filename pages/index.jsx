import { fetchArticlesAndGames } from "@/pages/api/hello";
import Hero from "@/components/Hero";
import Head from "next/head";
import ArticleCategory from "@/components/ArticleCategory";

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
  return (
    <main>
      <section>
        <Head>
          <title>Next Gaming</title>
        </Head>
        <Hero articles={articles} />
        <ArticleCategory
          articles={articles}
          games={games}
          header="Latest Articles"
        />
        {/* <ReleaseDateTracker games={games} /> */}
      </section>
    </main>
  );
}
