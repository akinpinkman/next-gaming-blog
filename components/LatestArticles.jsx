import ArticleCard from "./ArticleCard";
import ReleaseDateTracker from "./ReleaseDateTracker";

export default function LatestArticles({ articles, games }) {
  return (
    <>
      <div className="flex mt-10 gap-5 justify-center items-baseline">
        <div>
          <div className="flex items-center gap-5">
            <span className="bg-blue-500 w-5 h-5"></span>
            <h1 className="text-xl font-bold">Latest Articles</h1>
          </div>

          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {articles.slice(6).map((article) => (
              <ArticleCard key={article.sys.id} article={article} />
            ))}
          </div>
        </div>
        <ReleaseDateTracker games={games} />
      </div>
    </>
  );
}

{
  /* <div className="flex ml-[315px] mt-10 space-x-[710px]">
<div className="flex flex-col gap-5">
  <div className="flex items-center gap-5">
    <span className="bg-blue-500 w-5 h-5"></span>
    <h1 className="text-xl font-bold">Latest Articles</h1>
  </div>
  {articles.slice(6).map((article) => (
    <ArticleCard key={article.sys.id} article={article} />
  ))}
</div>

<ReleaseDateTracker games={games} />
</div> */
}
