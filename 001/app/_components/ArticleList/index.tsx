import Link from "next/link";
import Image from "next/image";
import Styles from "./index.module.css";

import { getSelectPosts, sliceArray } from "@/app/_lib/api";
import { Page } from "@/app/_interfaces/page";

export default function ArticleList(props?: Page) {
  let pageNumber: number = 1;
  if (Number.isNaN(props?.page) && props?.page !== undefined) {
    pageNumber = props?.page;
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
