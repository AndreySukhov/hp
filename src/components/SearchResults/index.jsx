import React from "react";
import styles from './styles.module.css';
import {CharecterCard} from "../CharecterCard/index.jsx";


export const SearchResults = ({results, isLoading}) => {

    return (
        <ul className={styles['character-list']}>
            {isLoading ? (
                <li>
                    <h3 >Loading...</h3>
                </li>
            ) : (
                <>
                    {results.map((result) => {
                        return (
                            <li key={result.id} className={styles['character-item']}>
                                <CharecterCard
                                    id={result.id}
                                    name={result.name}
                                    image={result.image}
                                    gender={result.gender}
                                    species={result.species}
                                    house={result.house}
                                    patronus={result.patronus}
                                    boggart={result.boggart}
                                />
                            </li>
                        )
                    })}
                </>
            )}
        </ul>
    )
}
