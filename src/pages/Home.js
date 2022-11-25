import React from "react";
import Form from "../components/Form";
import FormFuse from "../components/FormFuse";
import FormQuery from "../components/FormQuery";
import Header from "../components/Header";
import Posts from "../components/Posts";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

const Home = () => {
  const queryClient = new QueryClient();

  return (
    <div className="home-page">
      <Header />
      <Form />
      <hr />
      <FormFuse />
      <hr />
      <QueryClientProvider client={queryClient}>
        <FormQuery />
      </QueryClientProvider>

      <hr />
      <Posts />
    </div>
  );
};

export default Home;
