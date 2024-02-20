import React, {useState} from "react";

import style from './styles.module.css'

export const SearchForm = ({onSubmit}) => {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(search);
    }

    const handleReset = () => {
        setSearch('');
        onSubmit('');
    }

    return (
        <form className={style.form} onSubmit={(e) => handleSubmit(e)}>
            <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className={style['form__input']}
                placeholder="character" />
            <button type="submit">search</button>
            <button type="button" onClick={handleReset}>reset</button>
        </form>
    )
}