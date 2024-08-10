import { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/searchbar/SearchBar";
import Loader from "./components/loader/Loader";
import ErrorMessage from "./components/errormessage/ErrorMessage";
import LoadMoreBtn from "./components/loadmorebtn/LoadMoreBtn";
import ImageGallery from "./components/imagegallery/ImageGallery";
import ImageModal from "./components/imagemodal/ImageModal";
import { fetchImagesWithTag } from "./services/images-api";
import { Image, Images } from "../src/types";

function App() {
  const [images, setImages] = useState<Images>([]);
  const [tag, setTag] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1000000);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clickedImage, setClickedImage] = useState<Image | undefined>({
    id: "",
    urls: {
      small: "",
      regular: "",
    },
  });

  const handleSearch = async (newTag: string): Promise<void> => {
    setImages([]);
    setTag(newTag);
    setPage(1);
  };

  const handleLoadMore = (): void => {
    setPage(page + 1);
  };

  useEffect((): void => {
    if (tag === "") {
      return;
    }

    async function getImages(): Promise<void> {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImagesWithTag(tag, page);
        setTotalPages(data.total_pages);
        setImages((prevImages) => {
          return [...prevImages, ...data.results];
        });
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getImages();
  }, [tag, page]);

  const handleModalClose = (): void => {
    setIsOpen(false);
  };

  const handleOverlayClick = (
    event: React.MouseEvent<HTMLDivElement>
  ): void => {
    if (event.currentTarget === event.target) {
      setIsOpen(false);
    }
  };

  const handleClickOnImage = (
    event: React.MouseEvent<HTMLImageElement>
  ): void => {
    console.log(event.target);
    const { target } = event;
    const targetId = (target as HTMLImageElement).id;
    const clickedImage = images.find((image) => image.id === targetId);
    setClickedImage(clickedImage);
    setIsOpen(true);
  };

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery imagesToShow={images} onClickImage={handleClickOnImage} />
      )}
      {isOpen && clickedImage && (
        <ImageModal
          modalIsOpen={isOpen}
          handleRequestClose={handleModalClose}
          clickedImage={clickedImage}
          handleOverlayClick={handleOverlayClick}
        />
      )}
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {images.length > 0 && !loading && page < totalPages && (
        <LoadMoreBtn onClick={handleLoadMore} />
      )}
    </>
  );
}

export default App;
