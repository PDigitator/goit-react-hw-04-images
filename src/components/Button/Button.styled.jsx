import styled from 'styled-components';

const LoadMoreBtn = styled.button`
  display: block;
  min-width: 180px;
  margin: 0 auto;
  padding: 8px 16px;
  border: 0;
  border-radius: 4px;
  background-color: #3f51b5;
  text-align: center;

  color: #fafafa;
  text-decoration: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 18px;
  line-height: 24px;
  font-style: normal;
  font-weight: 500;

  transition: all var(--animation-duration) var(--timing-function);
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  &:hover,
  &:focus {
    background-color: #303f9f;
  }
`;

export { LoadMoreBtn };
