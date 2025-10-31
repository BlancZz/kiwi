'use client';
import Image from 'next/image';

export default function Banner() {
  const scrollToShop = () => {
    const section = document.getElementById('shop');
    if (section) {
      const offset = 75; // pixels above
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
      <Image
        src="/images/banner.jpg"
        alt="background"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center px-4 sm:px-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Art and Goodies</h1>
        <p className="text-lg md:text-2xl mb-6">
          Work in progress onlines store, lmk if you want more things.
        </p>
        <button
          onClick={scrollToShop}
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md text-lg transition-transform duration-200 hover:-translate-y-1"
        >
          View Shop
        </button>
      </div>
    </section>
  );
}
