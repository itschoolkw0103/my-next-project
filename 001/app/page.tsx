import Container from "@/app/_components/Container";
import ArticleList from "@/app/_components/ArticleList";

export default function Home() {
  return (
    <Container>
      <ArticleList tag="test-tag" page={2} />
    </Container>
  );
}
