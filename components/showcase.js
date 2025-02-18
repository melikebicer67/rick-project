import { Select, Card, Image, Text, Flex, ScrollArea } from "@mantine/core";
import { useRouter } from "next/router";
import { create } from "zustand";
import { useViewportSize } from "@mantine/hooks";
import { useState, useEffect } from "react";

/**
 * @typedef {Object} State
 * @property {string} status Character status.
 * @property {string} gender Character gender.
 */

/**
 * @typedef {Object} Action
 * @property {(status: string) => void} setStatus Sets character status.
 * @property {(gender: string) => void} setGender Sets character gender.
 */

// Creating the store with zustand
/**
 * @type {import('zustand').UseBoundStore<import('zustand').StoreApi<State & Action>>}
 */
const useStore = create((set) => ({
  status: "All",
  gender: "All",

  /**
   * @param {string} status
   * @returns {void}
   */
  setStatus: (status) => set({ status }),

  /**
   * @param {string} gender
   * @returns {void}
   */
  setGender: (gender) => set({ gender }),
}));

const Showcase = ({ data }) => {
  const { height } = useViewportSize();
  const router = useRouter();
  const { status, gender, setStatus, setGender } = useStore();

  const getData = ({ statusFilter = status, genderFilter = gender }) => {
    let filter = "";
    if (statusFilter !== "All") {
      filter = `/?status=${statusFilter}`;
    }
    if (genderFilter !== "All") {
      filter = filter !== "" ? `${filter}&gender=${genderFilter}` : filter;
    }
    router.push(`${filter}`);
  };

  useEffect(() => {
    getData({ status: "All", gender: "All" });
    console.log("showcase mounted");
    return () => {
      console.log("showcase unmounted");
    };
  }, [status, gender]);

  const populateCards = () => {
    let temp = [];
    for (let k = 0; k < data?.length; k++) {
      temp.push(
        <Card
          shadow="sm"
          radius="md"
          withBorder
          className="lg:w-[600px] sm:w-auto h-[220px] flex !flex-row !overflow-hidden !bg-[#3c3e44] rounded-lg m-[0.75rem] !p-0 gap-[50px]  sm:gap-[30px]"
        >
          <Card.Section>
            <Image
              className="w-full h-[250px] sm:w-[200px]"
              src={data[k].image}
              width={80}
              alt="Norway"
            />
          </Card.Section>
          <div className="flex flex-col items-start w-full m-auto gap-1">
            <Text size={"20px"} fw={500} c="#f9f9f9">
              {data[k].name}
            </Text>
            <Text mt={4} c="#f9f9f9" fw={500}>
              {data[k].status} - {data[k].species} - {data[k].gender}
            </Text>
            <Text mt={4} size={"17px"} c="#bababa">
              Last known location:
            </Text>
            <Text c="#f9f9f9">{data[k].origin.name}</Text>
            <Text mt={4} size={"17px"} c="#bababa">
              First seen in:
            </Text>
            <Text c="#f9f9f9">{data[k].location.name}</Text>
          </div>
        </Card>
      );
    }
    return temp;
  };

  return (
    <section className="bg-[#272b33] !flex justify-start items-center py-[2.5rem] flex-col min-h-screen">
      <Flex
        className="flex justify-center items-center flex-wrap max-w-[1320px] sm:pl-10px sm:pr-10px"
        gap={30}
        mb={20}
        wrap="nowrap"
      >
        <Select
          value={status || "All"}
          onChange={(e) => setStatus(e || "All")}
          data={["All", "Alive", "unknown", "Dead"]}
        />
        <Select
          value={gender || "All"}
          onChange={(e) => setGender(e || "All")}
          data={["All", "Female", "Male", "Genderless", "unknown"]}
        />
      </Flex>
      <div>{populateCards()}</div>
    </section>
  );
};

export default Showcase;
