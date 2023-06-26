import { useState } from 'react';

import { ReactComponent as SearchIcon } from '../../icons/search-icon.svg';
import PropTypes from 'prop-types';

import {
  Header,
  Container,
  Form,
  SearchBtn,
  SearchIconWrap,
  Input,
} from 'components/Searchbar/Searchbar.styled';

const Searchbar = ({ getQuery }) => {
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value.toLowerCase().trim());
  };

  const handleSubmit = event => {
    event.preventDefault();

    getQuery(query);

    reset(); //????
  };

  const reset = () => {
    setQuery('');
  }; //????

  return (
    <Header>
      <Container>
        <Form onSubmit={handleSubmit}>
          <SearchBtn type="submit" aria-label="Search">
            <SearchIconWrap>
              <SearchIcon width="24" height="24" fill="currentColor" />
            </SearchIconWrap>
          </SearchBtn>
          <Input
            type="text"
            name="query"
            value={query}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
        </Form>
      </Container>
    </Header>
  );
};

Searchbar.propTypes = { getQuery: PropTypes.func.isRequired };

export default Searchbar;
