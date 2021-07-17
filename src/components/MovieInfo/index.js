import React from "react";
//Components
import Thumb from "../Thumb";
//Config
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
//Image
import NoImage from "../../images/no_image.jpg";
//styles
import { Wrapper, Content, Text } from "./MovieInfo.styles";

const MovieInfo = ({ movie }) => (
  <Wrapper backdrop={movie.backdrop_path}>
    {console.log(movie.backdrop_path, "this is mv.bp from index wrapper")}
    <Content>
      <Thumb
        image={
          movie.poster_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
            : NoImage
        }
        clickable={false}
      />
      <Text>
        <h1>{movie.title}</h1>
        <h2>Plot</h2>
        <p>{movie.overview}</p>

        <div className="rating-directors">
          <div>
            <h2>Rating</h2>
            <div className="score">{movie.vote_average}</div>
          </div>
          <div className="director">
            <h2>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h2>
            {movie.directors.map((director) => (
              <p key={director.credit_id}>{director.name}</p>
            ))}
          </div>
        </div>
      </Text>
    </Content>
  </Wrapper>
);

export default MovieInfo;
