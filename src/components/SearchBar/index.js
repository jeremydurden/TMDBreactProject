import React, { useState, useEffect, useRef } from "react";

// Image
import searchIcon from "../../images/search-icon.svg";

//Styles
import { Wrapper, Content } from "../Grid/Grid.styles";

const SearchBar = ({ setSearchTerm }) => {
  const [state, setState] = useState("");

  // set initial to true for the first render doesn't trigger the useEffect
  const initial = useRef(true);

  useEffect(() => {
    //with initial set to true, we don't get a fetch on the first render -
    //useRef is mutable without causing a rerender unlike useState
    //this swaps the value of initial after the first render
    //so it doesn't trigger the fetch until the user
    //types something into the search bar
    if (initial.current) {
      initial.current = false;
      return;
    }

    const timer = setTimeout(() => {
      setSearchTerm(state);
    }, 500);
    return () => clearTimeout(timer);
  }, [setSearchTerm, state]);

  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input
          type="text"
          placeholder="Search Movie"
          onChange={(e) => setState(e.currentTarget.value)}
          value={state}
        />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
