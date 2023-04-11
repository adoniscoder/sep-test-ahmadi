import { Banner, Content, Header, Spinner } from "@/components";
import { useGetMovies } from "@/hooks";

const Home = () => {
  const { data, isLoading } = useGetMovies();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Content>
      <Header />
      <Banner />
    </Content>
  );
};

export default Home;
