import { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';
import fetchImmages from 'helpers/api';

import Searchbar from 'components/Searchbar/Searchbar';
import Section from 'components/Section/Section';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import Button from 'components/Button/Button';
import Loader from 'components/Loader/Loader';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    largeImageURL: '',
    tags: '',
    currentPage: 1,
    perPage: 12,
    totalPages: 0,
    showModal: false,
    isLoading: false,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.currentPage !== this.state.currentPage
    ) {
      this.fetchImmagesData();
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  getQuery = query => {
    if (query === this.state.searchQuery && query !== '') return;

    query
      ? this.setState({ searchQuery: query, images: [], currentPage: 1 })
      : Notify.info(
          'Sorry, you need to fill in the search field to search for images.'
        );
  };

  async fetchImmagesData() {
    const { searchQuery, currentPage, perPage } = this.state;
    this.setState({ isLoading: true });

    try {
      const { data } = await fetchImmages(searchQuery, currentPage, perPage);
      this.takeImmages(data);
    } catch (error) {
      console.log(error.message); //???
      Report.failure('ERROR', `${error.message}`, 'Close');
    } finally {
      this.setState({ isLoading: false });
    }
  }

  takeImmages = ({ hits, totalHits }) => {
    const { perPage } = this.state;

    if (hits.length !== 0) {
      this.setState(prevState => ({
        images: [...prevState.images, ...hits],
        totalPages: totalHits / perPage,
      }));
    } else {
      Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    }
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  getModalImage = (largeImageURL, tags) => {
    this.setState({ largeImageURL: largeImageURL, tags: tags });
    this.toggleModal();
  };

  onLoadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  render() {
    const {
      images,
      largeImageURL,
      tags,
      currentPage,
      totalPages,
      showModal,
      isLoading,
    } = this.state;

    return (
      <>
        <Searchbar getQuery={this.getQuery} />

        {images.length > 0 && (
          <Section title="Image gallery">
            <ImageGallery data={images} onClickImage={this.getModalImage} />
            {currentPage < totalPages && !isLoading && (
              <Button text="Load more" onClickBtn={this.onLoadMore} />
            )}
          </Section>
        )}

        {isLoading && <Loader />}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={tags} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
