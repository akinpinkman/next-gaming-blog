export default function fixMetaTag({ article }) {
  const { tags } = article.metadata || {}; // Provide a default empty object if article.metadata doesn't exist or is undefined

  const tag = tags && tags.length > 0 ? tags[0].sys.id : "Guide"; // Check if tags exist and have length > 0, otherwise, assign 'Guide'

  const fixedTag =
    tag.charAt(0).toUpperCase() +
    tag
      .substring(1)
      .split(/(?=[A-Z])/)
      .map((word) => word.replace(/,/g, " "))
      .join(" ");

  return <span>{fixedTag}</span>;
}
