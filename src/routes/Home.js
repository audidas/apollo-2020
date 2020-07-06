import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import Movie from "../components/Movie";

const Container = styled.div`
  display: flex;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  align-items: center;
  align-items: center;
  width: 100%;
  width: 100%;
`;
const Header = styled.header`
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  height: 45vh;
  height: 45vh;
  color: white;
  color: white;
  display: flex;
  display: flex;
  flex-direction: column;
  flex-direction: column;
  justify-content: center;
  justify-content: center;
  align-items: center;
  align-items: center;
  width: 100%;
  width: 100%;
`;
const Title = styled.h1`
  font-size: 60px;
  font-size: 60px;
  font-weight: 600;
  font-weight: 600;
  margin-bottom: 20px;
  margin-bottom: 20px;
`;
const Subtitle = styled.h3`
  font-size: 35px;
  font-size: 35px;
`;
const Loading = styled.div`
  font-size: 18px;
  font-size: 18px;
  opacity: 0.5;
  opacity: 0.5;
  font-weight: 500;
  font-weight: 500;
  margin-top: 10px;
  margin-top: 10px;
`;

const Movies = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 25px;
  width: 60%;
  position: relative;
  top: -50px;
`;

const GET_MOVIES = gql`
  {
    movies {
      id
      medium_cover_image
      isLiked @client
    }
  }
`;

export default () => {
  const { loading, data } = useQuery(GET_MOVIES);
  console.log(data);
  return (
    <Container>
      <Header>
        <Title>Apollo 2020</Title>
        <Subtitle>I Love GraphQL</Subtitle>
      </Header>
      {loading && <Loading>Loading...</Loading>}

      <Movies>
        {data?.movies?.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            bg={movie.medium_cover_image}
            isLiked={movie.isLiked}
          />
        ))}
      </Movies>
    </Container>
  );
};
