import styled from 'styled-components';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(278px, 1fr));
  grid-gap: 16px;

  margin-bottom: 20px;
  padding: 0;
`;

export { List };
