import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Styles from "./index.module.css";

import { getSelectPosts, sliceArray } from "@/app/_lib/api";

type Page = {
  tag?: string;
  page: number;
};

export default function ArticleList(props: Page) {
  const pageNumber: number = props.page;
  if (Number.isNaN(pageNumber) || pageNumber === undefined) {
    notFound();
  }
  const selectPosts = sliceArray(getSelectPosts(props?.tag), pageNumber);

  return (
    <div className={Styles.articles}>
      {selectPosts.map((posts) => (
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
