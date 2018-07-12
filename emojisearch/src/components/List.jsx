import React from "react";
import PropTypes from "prop-types";
import emojis from "../data/emojis.json";

function List(props) {
  return (
    <main>
      {emojis.reduce((result, emoji) => {
        if (emoji.title.toLowerCase().includes(props.itemsToDisplay.toLowerCase())) {
          result.push(
            <span class="emoji" alt={emoji.title}>
              {emoji.symbol}
            </span>
          );
        }
        return result;
      }, [])}
    </main>
  );
}

List.propTypes = {
  itemsToDisplay: PropTypes.string.isRequired
};

export default List;
