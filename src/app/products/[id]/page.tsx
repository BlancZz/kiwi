'use client';

import { products } from '@/data/products';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = React.use(params);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  const [selectedSize, setSelectedSize] = useState(
    product?.sizeOptions?.[0] || null
  );

  const [selectedColor, setSelectedColor] = useState(product?.type?.[0]);
  const [selectedImage, setSelectedImage] = useState(
    product?.type
      ? product.type[0]?.image
      : product?.imageGallery
      ? product.imageGallery[0]
      : product?.image
  );

  const handleSelectColor = (option: { color: string; image: string }) => {
    setSelectedColor(option);
    setSelectedImage(option.image);
    playAudio();
  };

  const handleSelectImage = (option: { color: string; image: string }) => {
    setSelectedImage(option.image);
    setSelectedColor(option);
    playAudio();
  };

  const playAudio = () => {
    if (product?.switchSfx) {
      const audio = new Audio(product.switchSfx);
      audio.currentTime = 0; // restart if replayed
      audio.play().catch((err) => {
        console.warn('Audio playback failed:', err);
      });
    }
  };

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        Product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black-900 flex items-center justify-center py-20 px-10">
      <div className="max-w-6xl w-full grid grid-cols-3 gap-10 bg-white rounded-3xl shadow-lg overflow-hidden">
        {/* LEFT SIDE - Images */}
        <div className="col-span-2 relative flex flex-col items-center justify-center p-6">
          <img
            src={selectedImage}
            alt={product.name}
            className="object-contain w-full h-[500px] rounded-2xl transition-all duration-300"
          />
          {/* Thumbnail Selector */}
          {product.type ? (
            <div className="flex gap-3 mt-4">
              {product.type?.map((option) => (
                <img
                  key={option.image}
                  src={option.image}
                  alt="Product variation"
                  onClick={() => handleSelectImage(option)}
                  className={`object-cover object-center w-20 h-20 rounded-lg cursor-pointer border-2 transition-all ${
                    selectedImage === option.image
                      ? 'border-green-500'
                      : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          ) : product.imageGallery ? (
            <div className="flex gap-2 mt-4">
              {product.imageGallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-16 h-16 rounded-md overflow-hidden border ${
                    selectedImage === img ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {/* RIGHT SIDE - Details */}
        <div className="col-span-1 flex flex-col justify-between p-8">
          <div>
            <h1 className="text-4xl font-semibold text-gray-800 mb-2">
              {product.name}
            </h1>
            <p className="text-2xl text-green-600 font-medium mb-6">
              ${product.price}
            </p>
            <p className="text-gray-600 mb-8">{product.desc}</p>

            {/* Colors */}

            <div className="flex gap-2 mt-4 mb-4">
              {product.type?.map((option) => (
                <button
                  key={option.color}
                  onClick={() => handleSelectColor(option)}
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-all ${
                    selectedColor?.color === option.color
                      ? 'border-green-500'
                      : 'border-gray-300'
                  }`}
                  style={{ backgroundColor: option.color }}
                />
              ))}
            </div>

            {/* Sizes */}
            {product.sizeOptions && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-800 mb-2">Size</h3>
                <div className="flex gap-3">
                  {product.sizeOptions.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-center rounded-md border text-sm cursor-pointer transition-all ${
                        selectedSize === size
                          ? 'bg-green-500 text-white border-green-900'
                          : 'border-gray-800 text-gray-800 hover:border-green-400'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Add to Cart */}
          <button className="w-full mt-6 bg-green-600 text-white py-4 rounded-xl text-lg font-semibold cursor-pointer transition-all hover:bg-green-500">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
