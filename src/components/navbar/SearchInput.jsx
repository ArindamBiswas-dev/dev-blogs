import { Input } from '@chakra-ui/input';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchInput() {
  const [searchInput, setSearchInput] = useState(null);
  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    if (searchInput && searchInput.length > 0) {
      // console.log(searchInput);
      history.push(`/search?q=${searchInput}`);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        maxW="350px"
        size="lg"
        placeholder="Search..."
        borderColor="black"
        outline="0"
        transition="cubic-bezier(0.17, 0.67, 0.5, 0.71)"
        _hover={{ borderColor: 'black' }}
        _focus={{
          borderColor: 'blue',
          boxShadow: '2px 2px 0 blue',
        }}
        onChange={(e) => setSearchInput(e.target.value.trim())}
      />
    </form>
  );
}

export default SearchInput;
