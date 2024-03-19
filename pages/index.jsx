import { fetchArticles } from "@/pages/api/hello";
import Hero from "@/components/Hero";
import LatestArticles from "@/components/LatestArticles";

// NOT: MOST ANTICIPATED GAMES EKLE

export async function getStaticProps() {
  const articles = await fetchArticles();
  return {
    props: {
      articles,
    },
  };
}

export default function Home({ articles }) {
  return (
    <main>
      <section>
        <Hero articles={articles} />
        <LatestArticles articles={articles} />
      </section>
    </main>
  );
}
