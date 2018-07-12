import React from "react";
import PropTypes from "prop-types";
import emojis from "../data/emojis.json";

function List(props) {
  return (
    <ul>
      {emojis.reduce((result, emoji) => {
        if (emoji.title.toLowerCase().includes(props.itemsToDisplay.toLowerCase())) {
          result.push(
            <li class="emoji" alt={emoji.title}>
              {emoji.symbol} - {emoji.title}
            </li>
          );
        }
        return result;
      }, [])}
    </ul>
  );
}

List.propTypes = {
  itemsToDisplay: PropTypes.string.isRequired
};

export default List;
