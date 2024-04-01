import ArticleCard from "./ArticleCard";

export default function ArticleCategory({
  articles,
  games,
  categoryTitle,
  filterFunction,
}) {
  const filteredArticles = articles.filter(filterFunction);

  return (
    <>
      <div className="mobile:px-3 flex mt-10 gap-5 justify-center items-baseline">
        <div>
          <div className="flex items-center gap-5">
            <span className="bg-blue-500 w-5 h-5"></span>
            <h1 className="text-xl font-bold">{categoryTitle}</h1>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {filteredArticles.map((article) => (
              <ArticleCard key={article.sys.id} article={article} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
