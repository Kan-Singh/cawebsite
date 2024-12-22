import { client } from "@/sanity/lib/client";

import Container from "../../components/Container";
import BlogPostHeader from "./components/BlogPostHeader";
import { PortableText } from "next-sanity";
import { urlForImage } from "@/sanity/lib/image";
import { tryGetImageDimensions } from "@sanity/asset-utils";
import Image from "next/image";



  function ImageComponent({ value }) {
    const { width, height } = tryGetImageDimensions(value);
  
    return (
      <Image
        src={urlForImage(value).fit("max").auto("format").url()}
        width={width}
        height={height}
        loading="lazy"
        className="mx-auto md:max-w-prose rounded-lg"
        style={{
          aspectRatio: width / height,
        }}
      />
    );
  }
  const portableTextComponents = {
    types: {
      image: ImageComponent,
    },
  };
  

async function getBlogPosts(slug) {
    const query = `*[_type == "blogPost" && slug.current == $slug] {
      title,
      description,
      date,
      "slug":slug.current,
      image,
      content
    }`;
  
    const posts = await client.fetch(query, { slug });
    return posts;
  }

export default async function Page({ params }) {
  console.log(params);
    
    const post = await getBlogPosts(params.post);
  
    console.log(post);
    return (
      <Container>
        <div className="mx-auto max-w-prose space-y-8 py-8">
          <BlogPostHeader post={post[0]} />
          <hr className="border-primary-200" />
          <article className="prose md:prose-md prose-primary mx-auto">
            <PortableText value={post[0].body} components={portableTextComponents} />
          </article>
        </div>
      </Container>
    );
  }





















