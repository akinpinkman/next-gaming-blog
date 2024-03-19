import ArticleCard from "./ArticleCard";

export default function LatestArticles({ articles }) {
  return (
    <div className="flex flex-col ml-[315px] mt-10">
      <div className="flex gap-5 items-center">
        <span className="bg-blue-500 w-5 h-5"></span>
        <h1 className="text-xl font-bold">Latest Articles</h1>
      </div>
      {articles.slice(6).map((article) => (
        <ArticleCard key={article.sys.id} article={article} />
      ))}
    </div>
  );
}
