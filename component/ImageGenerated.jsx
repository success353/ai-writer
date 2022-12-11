import Image from 'next/image';
import React from 'react';

function ImageGenerated({ image }) {
  return (
    <section className="flex justify-center items-center">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" />
      ) : (
        <div className="text-gray-700 font-bolder text-center">
          Your Image will show here
        </div>
      )}
    </section>
  );
}

export default ImageGenerated;
