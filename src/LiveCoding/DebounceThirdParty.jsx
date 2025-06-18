import React, { useState, useMemo, useEffect } from 'react';
import debounce from 'lodash.debounce';

function SearchWithDebounce() {
  const [query, setQuery] = useState('');

  // Memoize the debounced function so it doesn't get recreated on every render
  const debouncedSearch = useMemo(() => 
    debounce((text) => {
      console.log('Searching for:', text);
      // Imagine this is an API call
    }, 500), 
  []);

  // Call debounced function when query changes
  useEffect(() => {
    if (query) {
      debouncedSearch(query);
    }

    // Cleanup the debounced function on component unmount
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  return (
    <div>
      <h3>Debounce with lodash</h3>
      <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchWithDebounce;
