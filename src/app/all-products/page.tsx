'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { products } from '@/data/products';
import ProductGrid from '@/components/ProductGrid';

import Link from 'next/link';

const categories = ['All Items', 'Anime', 'Cat', 'Prints'];
const sortOptions = [
  'Newest',
  'Trending',
  'Price: Low to High',
  'Price: High to Low',
  'A → Z',
  'Z → A',
];

export default function AllProductsPage() {
  const searchParams = useSearchParams();

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('Newest');
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const categoryFromParams = searchParams.get('category') || 'all';
    setSelectedCategory(categoryFromParams);

    setFiltered(
      categoryFromParams === 'all'
        ? products
        : products.filter((p) => p.category.includes(categoryFromParams))
    );
  }, [searchParams]);

  const sorted = [...filtered].sort((a, b) => {
    switch (selectedSort) {
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Newest':
        return 0; //b.addedAt - a.addedAt; // add timestamp
      case 'A → Z':
        return a.name.localeCompare(b.name);
      case 'Z → A':
        return b.name.localeCompare(a.name);
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-black-800 flex mt-15">
      {/* Left section: product grid */}
      <div className="flex-1 p-10">
        <h1 className="text-4xl font-bold mb-8 text-gray-50">
          {selectedCategory[0].toUpperCase() +
            selectedCategory.slice(1) +
            ' Products'}
        </h1>

        <ProductGrid products={sorted.slice(0, 6)} />

        {/* {sorted.length === 0 ? (
          <p className="text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {sorted.map((p) => (
              <div
                key={p.id}
                className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative w-full h-60">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 flex flex-col gap-1">
                  <h2 className="text-lg font-semibold">{p.name}</h2>
                  <p className="text-green-600 font-medium">${p.price}</p>
                  <p className="text-sm text-gray-400">{p.category}</p>
                </div>
              </div>
            ))}
          </div>
        )} */}
      </div>

      {/* Right section: filters */}
      <aside className="w-72 border-l p-6 shadow-inner mt-10">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Category</h2>
          <div className="flex flex-col gap-2">
            {[
              { label: 'All Items', type: 'all' },
              { label: 'Anime', type: 'anime' },
              { label: 'Cats', type: 'cat' },
              { label: 'Fake', type: 'fake' },
            ].map(({ label, type }) => (
              <Link
                key={label}
                href={`/all-products?category=${type}`}
                className={`text-left px-3 py-2 rounded-md transition ${
                  selectedCategory === type
                    ? 'bg-green-100 text-green-700 font-semibold'
                    : 'hover:bg-gray-100 hover:text-gray-700 text-gray-50'
                }`}
                // className="block w-full text-left px-4 py-2 hover:bg-green-100 hover:text-green-600 transition-all duration-200"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Sort By</h2>
          <select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-black bg-white"
          >
            {sortOptions.map((s) => (
              <option key={s} value={s} className="text-black bg-white">
                {s}
              </option>
            ))}
          </select>
        </div>
      </aside>
    </div>
  );
}
