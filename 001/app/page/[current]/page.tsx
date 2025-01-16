import { notFound } from "next/navigation";
import Container from "@/app/_components/Container";
import ArticleList from "@/app/_components/ArticleList";
import Pagenation from "@/app/_components/Pagenation";

type Params = {
  params: {
    current: string;
  };
};

export default function Page({ params }: Params) {
  const current = Number.parseInt(params.current);
  if (Number.isNaN(current) || current < 1) {
    notFound();
  }

  return (
    <Container>
      <ArticleList page={current} />
      <Pagenation totalCount={10} page={current} />
    </Container>
  );
}
