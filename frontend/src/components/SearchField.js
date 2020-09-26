import css from "./SearchField.pcss";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

function SearchField(props) {
    let {
        searchValue,
        onSearchChange
    } = props;

    return (
        <div className={css.searchContainer}>
            <input
                className={css.searchField}
                placeholder={"Search..."}
                value={searchValue}
                onChange={onSearchChange}
            />
            <SearchIcon
                className={css.searchIcon}
                color="primary"
                fontSize="small"
            />
        </div>
    )
}

export default SearchField;