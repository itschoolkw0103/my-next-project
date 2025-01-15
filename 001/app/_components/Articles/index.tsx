import Link from "next/link";
import Image from "next/image";
import Styles from "./index.module.css";

import { getAllPosts } from "@/app/_lib/api";

type Props = {
  tag?: string;
};

export default function Articles({ tag }: Props) {
  const allPosts = getAllPosts();

  if (!tag) {
    return <p>not found</p>;
  }

  return (
    <div className={Styles.articles}>
      {allPosts.map((posts) => (
        <article key={posts.slug} className={Styles.postcard}>
          <Link href={"posts/" + posts.slug}>
            <Image
              src={posts.ogImage.url}
              alt={posts.title}
              width={1200}
              height={900}
              layout="responsive"
            />
            <h2>{posts.title}</h2>
            <div>作成日：{posts.date}</div>
            <div>タグ：{posts.tag}</div>
          </Link>
        </article>
      ))}
    </div>
  );
}
