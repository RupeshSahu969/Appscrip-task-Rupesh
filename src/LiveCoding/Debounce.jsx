import React, { useEffect, useState } from 'react'
//use Debounce are use serch box in 500 ms dely

const useDebounce = (value, dely) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect(() => {
        const timer = setTimeout(() =>
            setDebounceValue(value), dely
        );
        return () => clearTimeout(timer);
    }, [value, dely]);

    return debounceValue;
}

function Search() {
    const [query, setQuery] = useState('')
    const debounceQuery = useDebounce(query, 500);

    useEffect(() => {
        if (debounceQuery) {
            console.log('Search for :', debounceQuery)
        }
    }, [debounceQuery])

    return (
        <div
        >Debounce
            <input type='text'
                placeholder='Serch...'
                onChange={(e) => setQuery(e.target.value)}
                value={query}
            />
        </div>
    )
}

export default Search