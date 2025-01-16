import Link from "next/link";
import Styles from "./index.module.css";

type Params = {
  totalCount: number;
  page?: number;
};

export default function Pagenation({ totalCount, page = 1 }: Params) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / 6) },
    (_, i) => i + 1
  );
  return (
    <nav>
      <ul className={Styles.container}>
        {pages.map((p) => (
          <li className={Styles.list} key={p}>
            {page !== p ? (
              <Link href={`/page/${p}`} className={Styles.item}>
                {p}
              </Link>
            ) : (
              <span className={`${Styles.item} ${Styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
