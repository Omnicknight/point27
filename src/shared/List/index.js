import React from "react";
import PropTypes from "prop-types"

const List = ({ list }) => {
    return (
        <ul>
            {list.map(listElement => (
                <li key={listElement.id}>{listElement.value}</li>
            ))}
        </ul>
    )
};

List.propTypes = {
    list: PropTypes.array
};

export default List;