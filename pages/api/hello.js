import * as contentful from "contentful";

export async function fetchArticlesAndGames() {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const articleEntries = await client.getEntries({ content_type: "article" });
  const gameEntries = await client.getEntries({
    content_type: "mostAnticipatedGames",
  });

  const articles = articleEntries.items;
  const games = gameEntries.items;

  return { articles, games };
}
