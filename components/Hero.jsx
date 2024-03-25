import ArticleCard from "./ArticleCard";

export default function Hero({ articles }) {
  const filteredArticles = articles.filter((article) =>
    article.metadata.tags.some((tag) => tag.sys.id === "nextGamingOriginal")
  );

  return (
    <>
      <div className="flex justify-center gap-5">
        {filteredArticles.slice(0, 2).map((article) => (
          <ArticleCard key={article.sys.id} article={article} isFirst={true} />
        ))}
      </div>
      <div className="flex gap-5 justify-center ">
        {filteredArticles.slice(1, 5).map((article) => (
          <ArticleCard key={article.sys.id} article={article} />
        ))}
      </div>
    </>
  );
}
