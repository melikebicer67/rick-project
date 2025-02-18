import Head from "next/head";
import Showcase from "../components/showcase";
import { useEffect } from "react";
import { create } from "zustand";

const url = "https://rickandmortyapi.com/api/character/";
const useStore = create((set) => ({
  status: "All",
  gender: "All",
  setStatus: (newValue) => set({ status: newValue }),
  setStatus: (newValue) => set({ gender: newValue }),
}));

export const getServerSideProps = async (context) => {
  const { query } = context;
  const status = query.status;
  const gender = query.gender;
  let filter = "";
  if (typeof status !== "undefined") {
    filter = `?status=${status}`;
  }
  if (typeof gender !== "undefined") {
    filter = filter !== "" ? `${filter}&gender=${gender}` : filter;
  }
  const res = await fetch(`${url}${filter}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),
  });
  const data = await res.json();
  return { props: { data } };
};

const Home = (props) => {
  useEffect(() => {
    console.log("home mounted");
    return () => {
      console.log("home unmounted");
    };
  }, [props.data]);
  const { status, gender, setStatus, setGender } = useStore();

  return (
    <div>
      <Head>
        <title>Rick And Morty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Showcase
        data={props.data.results}
        setStatus={setStatus}
        status={status}
        setGender={setGender}
        gender={gender}
      />
    </div>
  );
};

export default Home;
