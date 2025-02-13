import Head from "next/head";
import Showcase from "../components/showcase";
import { useEffect } from "react";

export const getServerSideProps = async ({ req, query }) => {
  const res = await fetch("https://rickandmortyapi.com/api/character/", {
    method: "GET",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(),
  });
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Home = (props) => {
  useEffect(() => {
    console.log("home mounted");
    return () => {
      console.log("home unmounted");
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Rick And Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Showcase data={props.data.results} />
    </div>
  );
};

export default Home;
