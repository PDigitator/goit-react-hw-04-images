import styled from 'styled-components';

const Thumb = styled.div`
  height: 260px;

  border-radius: 4px;
  overflow: hidden;

  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;

  transition: transform var(--animation-duration) var(--timing-function);

  &:hover,
  &:focus {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;

export { Thumb, Image };
