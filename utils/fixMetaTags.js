export default function fixMetaTag({ article }) {
  const { tags } = article.metadata || {};
  console.log(tags);

  const tag = tags && tags.length > 0 ? tags[0].sys.id : "Guide";

  let fixedTag;
  if (tag === "nextgamingoriginals") {
    fixedTag = "Next Gaming Originals";
  } else {
    fixedTag =
      tag.charAt(0).toUpperCase() +
      tag
        .substring(1)
        .split(/(?=[A-Z])/)
        .map((word) => word.replace(/,/g, " "))
        .join(" ");
  }

  return <span>{fixedTag}</span>;
}
