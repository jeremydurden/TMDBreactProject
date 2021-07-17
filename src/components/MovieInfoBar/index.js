import React from "react";
//Helper Functions
import { calcTime, convertMoney } from "../../helpers";
//Styles
import { Content, Wrapper } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
  <Wrapper>
    <Content>
      <div className="column">
        <p>Running Time:{calcTime(time)}</p>
      </div>
      <div className="column">
        <p>
          Budget:
          {"$0" === convertMoney(budget)
            ? " Budget Unknown"
            : convertMoney(budget)}
        </p>
      </div>
      <div className="column">
        <p>
          Revenue:
          {"$0" === convertMoney(revenue)
            ? " Revenue Unknown"
            : convertMoney(revenue)}
        </p>
      </div>
    </Content>
  </Wrapper>
);

export default MovieInfoBar;
