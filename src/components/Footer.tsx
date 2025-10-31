export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 mt-24">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Column 1: Logo / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Kiwi</h2>
          <p className="text-sm leading-relaxed">
            A playful little project exploring modern web design with Next.js
            and TypeScript.
          </p>
        </div>

        {/* Column 2: Navigation */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Explore</h3>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:text-green-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-green-400 transition">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-green-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Contact</h3>
          <ul className="space-y-2">
            <li>
              Email:{' '}
              <a
                href="mailto:blanc.zeng@gmail.com"
                className="hover:text-green-400"
              >
                blanc.zeng@gmail.com
              </a>
            </li>
            <li>
              Phone: <span className="text-gray-400">don't call me</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Follow</h3>
          <ul className="flex gap-4">
            <li>
              <a href="#" className="hover:text-green-400">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                GitHub
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-400">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom line */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Notice me 🥺.
      </div>
    </footer>
  );
}
