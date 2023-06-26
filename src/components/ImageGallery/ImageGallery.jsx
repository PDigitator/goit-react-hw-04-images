import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import { List } from 'components/ImageGallery/ImageGallery.styled';

const ImageGallery = ({ data, onClickImage }) => {
  return (
    <List>
      {data.map(element => (
        <li key={element.id}>
          <ImageGalleryItem element={element} onClickImage={onClickImage} />
        </li>
      ))}
    </List>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGallery;
