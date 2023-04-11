import { Banner, Content, Header, RecentMovies, Spinner } from "@/components";
import { useGetMovies } from "@/hooks";

const Home = () => {
  const { data, isLoading } = useGetMovies();

  console.log("-> ", data);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Content>
      <Header />
      <Banner />
      <RecentMovies movies={data?.Search} />
    </Content>
  );
};

export default Home;
