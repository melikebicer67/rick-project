import React, { useState, useEffect } from "react";
import { Select, Card, Image, Text, Flex } from "@mantine/core";

const Showcase = ({ data }) => {
  const [state, setState] = useState({
    status: "All",
    gender: "All",
    data,
    filteredData: [],
  });
  const getRandomNums = ({ max, total }) => {
    const arr = [];
    const randomNum = () => Math.floor(Math.random() * max + 1);

    if (total === 1) {
      return randomNum();
    }

    while (arr.length < total) {
      const num = randomNum();
      if (arr.indexOf(num) > -1) {
        continue;
      }
      arr[arr.length] = num;
    }
    return arr;
  };

  const filterData = ({ status = state.status, gender = state.gender }) => {
    let data = JSON.parse(JSON.stringify(state.data));
    if (status !== "All") {
      data = data.filter((x) => x.status === status);
    }
    if (gender !== "All") {
      data = data.filter((x) => x.gender === gender);
    }
    let temp = { filteredData: data, status, gender };
    setState((prev) => ({ ...prev, ...temp }));
  };

  useEffect(() => {
    return () => {
      console.log("showcase unmounted");
    };
  }, []);

  const populateCards = () => {
    let temp = [];
    const data =
      state.filteredData.length > 0 ? state.filteredData : state.data;
    for (let k = 0; k < data.length; k++) {
      temp.push(
        <Card shadow="sm" radius="md" withBorder className="main-cards">
          <Card.Section>
            <Image src={data[k].image} width={80} alt="Norway" />
          </Card.Section>
          <div className="text-div">
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
    <section className="main-div">
      <Flex className="main-flex" gap={30} mb={20} wrap="nowrap">
        <Select
          className="filter-select"
          value={state.status}
          onChange={(e) => filterData({ status: e })}
          data={["All", "Alive", "unknown", "Dead"]}
        />
        <Select
          className="filter-select"
          value={state.gender}
          onChange={(e) => filterData({ gender: e })}
          data={["All", "Female", "Male", "Genderless", "unknown"]}
        />
      </Flex>
      <div> {populateCards()}</div>
    </section>
  );
};

export default Showcase;
