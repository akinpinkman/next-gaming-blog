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
    <article className="laptop:mt-10 relative transform hover:scale-105 transition-transform duration-300 ease-in-out">
      <div className="mt-10 relative" style={{ textDecoration: "none" }}>
        <div style={{ position: "relative" }}>
          <Link href={`/article/[slug]`} as={`/article/${slug}`} passHref>
            <Image
              src={image}
              alt={heading}
              width={imageWidth}
              height={imageHeight}
              priority
            />
          </Link>
          <li
            className="list-none bg-blue-500 px-2 rounded-sm"
            style={{ position: "absolute", bottom: "1rem", left: "1rem" }}
          >
            <Link
              href={`/tag/[tag]`}
              as={`/tag/${article.metadata.tags[0].sys.id}`}
              passHref
            >
              <span className="hidden laptop:inline-block font-bold text-white">
                {fixMetaTag({ article })}
              </span>
            </Link>
          </li>
        </div>
        <Link href={`/article/[slug]`} as={`/article/${slug}`} passHref>
          <h1 className="tablet:text-xl ">{heading}</h1>
        </Link>
        <h2 className="tablet:text-lg">{subtitle}</h2>
      </div>
    </article>
  );
}
