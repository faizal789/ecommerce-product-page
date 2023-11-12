import React from "react";

const Images = () => {
  const [isLightbox, setLightbox] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(
    "images/image-product-1.jpg"
  );

  const images = [
    {
      thumbnail: "images/image-product-1-thumbnail.jpg",
      fullsize: "images/image-product-1.jpg",
    },
    {
      thumbnail: "images/image-product-2-thumbnail.jpg",
      fullsize: "images/image-product-2.jpg",
    },
    {
      thumbnail: "images/image-product-3-thumbnail.jpg",
      fullsize: "images/image-product-3.jpg",
    },
    {
      thumbnail: "images/image-product-4-thumbnail.jpg",
      fullsize: "images/image-product-4.jpg",
    },
  ];

  function handleClick() {
    setLightbox(!isLightbox);
  }

  function handleOverlayClick(event) {
    if (event.target === event.currentTarget) {
      setLightbox(!isLightbox);
    }
  }

  function fullSizeClick(image) {
    setSelectedImage(image);
  }

  const [currentIndex, setCurrentIndex] = React.useState(0);

  function nextImage() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }

  function prevImage() {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  }

  return (
    <div className="grid grid-cols-1 w-1/2 max-lg:w-10/12 max-sm:h-3/4 max-sm:w-screen max-sm:mb-[-140px]">
      {selectedImage && (
        <img
          src={selectedImage}
          onClick={handleClick}
          className="rounded-lg w-10/12 max-sm:w-screen max-sm:h-3/4 max-sm:rounded-none"
          alt=""
        />
      )}
      <div className="grid grid-cols-4 gap-3 pt-4 w-10/12 max-sm:hidden">
        {images.map((image, imageIndex) => {
          return (
            <button key={imageIndex} className="focus:opacity-60">
              <img
                className="rounded-md hover:opacity-70"
                src={`images/image-product-${imageIndex + 1}-thumbnail.jpg`}
                alt={`image thumbnail ${imageIndex + 1}`}
                onClick={() => {
                  fullSizeClick(image.fullsize);
                  setCurrentIndex(imageIndex);
                }}
              />
            </button>
          );
        })}
      </div>
      <div
        onClick={handleOverlayClick}
        style={{ display: isLightbox ? "flex" : "none" }}
        className="flex flex-col items-center justify-center group-hover:block fixed inset-0 bg-black bg-opacity-50 max-sm:justify-start"
      >
        <div className="relative flex flex-col items-end">
          <img
            src="images/icon-previous.svg"
            onClick={prevImage}
            className="hover:opacity-80 cursor-pointer bg-white rounded-full w-fit h-[44px] absolute -left-5 top-1/2 transform -translate-y-1/2 px-4 py-2 max-sm:left-0"
          />
          <img
            src="images/icon-next.svg"
            onClick={nextImage}
            className="hover:opacity-80 cursor-pointer bg-white rounded-full w-fit h-[44px] absolute -right-5 top-1/2 transform -translate-y-1/2 px-4 py-2 max-sm:right-0"
          />
          <svg
            className=" fill-white active:fill-orange cursor-pointer"
            width="15"
            height="25"
            xmlns="http://www.w3.org/2000/svg"
            onClick={handleClick}
          >
            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" />
          </svg>
          <img
            className="rounded-lg max-sm:mt-12 max-sm:h-2/3"
            src={images[currentIndex].fullsize}
            alt={`Image ${currentIndex + 1}`}
            width={550}
          />
        </div>
      </div>
    </div>
  );
};

export default Images;
