import Image from "next/image";
import fixMetaTag from "@/utils/fixMetaTags";
import Link from "next/link";

export default function Article({ article, isFirst }) {
  const { heading, subtitle, slug, featureImage, articleDate, author } =
    article.fields;
  const image = `https:${featureImage.fields.file.url}`;
  const imageWidth = isFirst ? 920 : 450;
  const imageHeight = isFirst ? 300 : 225;

  return (
    <article className="mt-10 relative">
      <Link href={`/article/[slug]`} as={`/article/${slug}`} passHref>
        <div className="mt-10 relative" style={{ textDecoration: "none" }}>
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
              <span className="font-bold text-white">
                {fixMetaTag({ article })}
              </span>
            </li>
          </div>
          <h1 className="text-xl">{heading}</h1>
          <h2 className="text-lg">{subtitle}</h2>
        </div>
      </Link>
    </article>
  );
}
