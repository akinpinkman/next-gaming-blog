import ArticleCard from "./ArticleCard";

export default function Hero({ articles }) {
  const filteredArticles = articles.filter((article) =>
    article.metadata.tags.some((tag) => tag.sys.id === "nextgamingoriginals")
  );

  return (
    <div>
      <div className="tablet:flex justify-center gap-5 px-8">
        {filteredArticles.slice(0, 2).map((article) => (
          <ArticleCard key={article.sys.id} article={article} isFirst={true} />
        ))}
      </div>
      <div className="tablet:flex justify-center gap-5 px-8">
        {filteredArticles.slice(2, 6).map((article) => (
          <ArticleCard key={article.sys.id} article={article} />
        ))}
      </div>
    </div>
  );
}
