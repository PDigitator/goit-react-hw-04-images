import PropTypes from 'prop-types';

import {
  Thumb,
  Image,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

const ImageGalleryItem = ({
  element: { webformatURL, largeImageURL, tags },
  onClickImage,
}) => {
  return (
    <>
      <Thumb>
        <Image
          src={webformatURL}
          alt={tags}
          onClick={() => {
            onClickImage(largeImageURL, tags);
          }}
        />
      </Thumb>
    </>
  );
};

ImageGalleryItem.propTypes = {
  element: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClickImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
