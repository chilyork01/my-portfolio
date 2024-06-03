import React, { useState } from 'react';
import Modal from 'react-modal';

const photos = [
  { src: '/images/Screenshot 2024-06-02 204157.jpg', alt: 'Photo 1' },
  { src: '/images/Screenshot 2024-06-02 204226.jpg', alt: 'Photo 2' },
  { src: '/images/Screenshot 2024-06-02 204259.jpg', alt: 'Photo 3' },
  { src: '/images/Screenshot 2024-06-02 204324.jpg', alt: 'Photo 4' },
  // Agrega más fotos aquí
];

const Photos = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
    setModalIsOpen(false);
  };

  return (
    <div className="container mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Photos Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <div key={index} className="bg-gray-200 p-4 rounded-lg">
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => openModal(photo)}
            />
          </div>
        ))}
      </div>

      {selectedPhoto && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Foto Ampliada"
          className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-75"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50"
        >
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
            <button
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Photos;
