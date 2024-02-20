import React from "react";

import styles from './styles.module.css';
import defaultImg from './stub.png';

export const CharecterCard = ({
    image = defaultImg,
    name = 'unknown',
    gender = 'unknown',
    species = 'unknown',
    house = 'unknown',
    patronus = 'unknown',
    boggart = 'unknown'
}) => {
    return (
        <>
            <div className={styles['character-item__image-container']}>
                <img src={image}
                     className={styles['character-item__image']}
                     alt={name} />
            </div>
            <h3 className="character-item__title" title={name}>{name}</h3>
            <p>gender: {gender}</p>
            <p>species: {species}</p>
            <p>house: {house}</p>
            <p>patronus: {patronus}</p>
            <p>boggart: {boggart}</p>
        </>
    )
}