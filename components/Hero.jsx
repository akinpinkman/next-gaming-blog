import ArticleCard from "./ArticleCard";

export default function Hero({ articles }) {
  // console.log(articles[1].metadata.tags[0].sys.id);
  return (
    <>
      <div className="flex flex-col">
        <div className="flex justify-center gap-5">
          {articles.slice(0, 2).map((article, index) => (
            <ArticleCard
              key={article.sys.id}
              article={article}
              isFirst={true}
            />
          ))}
        </div>
        <div className="flex gap-5 justify-center ">
          {articles.slice(2, 6).map((article) => (
            <ArticleCard key={article.sys.id} article={article} />
          ))}
        </div>
      </div>
    </>
  );
}
