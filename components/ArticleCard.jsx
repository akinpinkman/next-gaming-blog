import Image from "next/image";
import fixMetaTag from "@/utils/fixMetaTags";

export default function Article({ article, isFirst }) {
  const { heading, subtitle, slug, featureImage, articleDate, author } =
    article.fields;

  const image = `https:${featureImage.fields.file.url}`;
  const imageWidth = isFirst ? 920 : 450;
  const imageHeight = isFirst ? 300 : 225;

  return (
    <article className="mt-10 relative">
      <div style={{ position: "relative" }}>
        <Image
          src={image}
          alt={heading}
          width={imageWidth}
          height={imageHeight}
          priority
        />
        <li
          className="list-none bg-blue-500 px-2 rounded-sm"
          style={{ position: "absolute", bottom: "1rem", left: "1rem" }}
        >
          <a href="PATH/TO/THIS/TAG" className="font-bold text-white">
            {fixMetaTag({ article })}
          </a>
        </li>
      </div>

      <h1 className="text-xl">{article.fields.heading}</h1>
      <h2 className="text-lg">{article.fields.subtitle}</h2>
    </article>
  );
}
