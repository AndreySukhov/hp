import React from "react";
import styles from "./styles.module.css";

export const SearchListNavigation = ({
    handlePageSet,
    currentPage,
    next
 }) => {
    const onPageSet = (val) => {
        handlePageSet(val)
    }

    return (
        <div className={styles['character-actions']}>
            {currentPage > 1 && <button onClick={() => onPageSet(1)}>First</button>}
            {currentPage > 1 && <button onClick={() => onPageSet(currentPage - 1)}>Prev</button>}
            {next && <button onClick={() => onPageSet(currentPage + 1)}>Next</button>}
        </div>
    )
}