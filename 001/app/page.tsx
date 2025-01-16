import Container from "@/app/_components/Container";
import ArticleList from "@/app/_components/ArticleList";
import Pagenation from "@/app/_components/Pagenation";

export default function Home() {
  return (
    <Container>
      <ArticleList page={1} />
      <Pagenation totalCount={10} page={1} />
    </Container>
  );
}
