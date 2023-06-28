import { useState, useEffect } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';

import fetchImmages from 'helpers/api';
import Searchbar from 'components/Searchbar/Searchbar';
import Section from 'components/Section/Section';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [tags, setTags] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    const fetchImmagesData = async () => {
      setIsLoading(true);

      try {
        const {
          response: { data },
          perPage,
        } = await fetchImmages(searchQuery, currentPage);
        takeImmages(data, perPage);
      } catch (error) {
        console.log(error); //???
        Report.failure('ERROR', `${error.message}`, 'Close');
      } finally {
        setIsLoading(false);
      }
    };

    const takeImmages = ({ hits, totalHits }, perPage) => {
      if (hits.length !== 0) {
        setImages(prevState => [...prevState, ...hits]);
        setTotalPages(totalHits / perPage);
      } else {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      }
    };

    fetchImmagesData();
  }, [searchQuery, currentPage]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }, [images]);

  const getQuery = query => {
    if (query === searchQuery && query !== '') return;

    if (query) {
      setSearchQuery(query);
      setImages([]);
      setCurrentPage(1);
    } else {
      Notify.info(
        'Sorry, you need to fill in the search field to search for images.'
      );
    }
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState);
  };

  const getModalImage = (largeImageURL, tags) => {
    setLargeImageURL(largeImageURL);
    setTags(tags);
    toggleModal();
  };

  const onLoadMore = () => {
    setCurrentPage(prevState => prevState + 1);
  };

  return (
    <>
      <Searchbar getQuery={getQuery} />

      {images.length > 0 && (
        <Section title="Image gallery">
          <ImageGallery data={images} onClickImage={getModalImage} />
          {currentPage < totalPages && !isLoading && (
            <Button text="Load more" onClickBtn={onLoadMore} />
          )}
        </Section>
      )}

      {isLoading && <Loader />}

      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </>
  );
};

export default App;
