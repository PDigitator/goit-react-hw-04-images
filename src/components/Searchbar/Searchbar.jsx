import { Component } from 'react';
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

class Searchbar extends Component {
  state = {
    query: '',
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ query: value.toLowerCase().trim() });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.getQuery(this.state.query);

    this.reset(); //????
  };

  reset = () => {
    this.setState({ query: '' });
  }; //????

  render() {
    const { query } = this.state;

    return (
      <Header>
        <Container>
          <Form onSubmit={this.handleSubmit}>
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
              onChange={this.handleChange}
            />
          </Form>
        </Container>
      </Header>
    );
  }
}

Searchbar.propTypes = { getQuery: PropTypes.func.isRequired };

export default Searchbar;
