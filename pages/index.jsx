import { fetchArticlesAndGames } from "@/pages/api/hello";
import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";
import Head from "next/head";

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
        <LatestArticles articles={articles} games={games} />
        {/* <ReleaseDateTracker games={games} /> */}
      </section>
    </main>
  );
}
