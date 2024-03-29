import { createClient } from "contentful";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import * as contentful from "contentful";
import Image from "next/image";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export const getStaticPaths = async () => {
  const res = await client.getEntries({
    content_type: "article",
  });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { items } = await client.getEntries({
    content_type: "article",
    "fields.slug": params.slug,
  });

  return {
    props: { article: items[0] },
  };
};

const RICHTEXT_CONFIGURES = {
  renderNode: {
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-3xl">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="text-2xl">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h4 className="text-xl">{children}</h4>;
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="list-disc pl-6">{children}</ul>; // Apply styling here
    },
    [BLOCKS.LIST_ITEM]: (node, children) => {
      return <li className="">{children}</li>;
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="text-base">{children}</p>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="list-decimal pl-6">{children}</ol>;
    },
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      console.log(node);

      return (
        <Image
          src={`https:${node.data.target.fields.file.url}`}
          alt={node.data.target.fields.title}
          width={700}
          height={300}
        />
      );
    },
    [INLINES.HYPERLINK]: (node, children) => {
      return (
        <a className="text-base font-bold text-blue-400" href={node.data.uri}>
          {children}
        </a>
      );
    },
  },
};

export default function ArticleDetails({ article }) {
  const image = `https:${article.fields.featureImage.fields.file.url}`;
  // console.log(article);

  return (
    <main className="flex flex-col items-center">
      <h1 className="pb-3">{article.fields.heading}</h1>
      <h2 className="pb-3">{article.fields.subtitle}</h2>
      <p className="pb-3">
        {article.fields.author.fields.name} -{" "}
        {/*Make a util function to format date */}
        {article.fields.articleDate.match(/^\d{4}-\d{2}-\d{2}/)[0]}
      </p>
      <Image
        src={image}
        alt={article.fields.featureImage.fields.title}
        width={800}
        height={400}
      />
      <div>
        {documentToReactComponents(article.fields.content, RICHTEXT_CONFIGURES)}
      </div>
    </main>
  );
}
