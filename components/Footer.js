import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link href="/">
              <a className="text-2xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
                CRYPTOCANUCK
              </a>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Electronic music producer blending progressive house, melodic techno, and future bass into immersive sonic experiences.
            </p>
            <div className="flex gap-3">
              <a
                href="https://twitter.com/cryptocanuck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-purple-500/50 text-gray-400 hover:text-white rounded-lg transition-all"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com/cryptocanuck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-purple-500/50 text-gray-400 hover:text-white rounded-lg transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://soundcloud.com/cryptocanuck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-purple-500/50 text-gray-400 hover:text-white rounded-lg transition-all"
                aria-label="SoundCloud"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1"/>
                </svg>
              </a>
              <a
                href="https://open.spotify.com/artist/YOUR_ARTIST_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-gray-800 border border-gray-800 hover:border-purple-500/50 text-gray-400 hover:text-white rounded-lg transition-all"
                aria-label="Spotify"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/music">
                  <a className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    Music
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/shows">
                  <a className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    Shows
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    About
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-gray-400 hover:text-purple-400 transition-colors text-sm">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Music Platforms */}
          <div>
            <h3 className="text-white font-semibold mb-4">Listen</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://open.spotify.com/artist/YOUR_ARTIST_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://music.apple.com/artist/YOUR_ARTIST_ID"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Apple Music
                </a>
              </li>
              <li>
                <a
                  href="https://soundcloud.com/cryptocanuck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m.899.828c-.051 0-.09.04-.099.099l-.145 1.326.145 1.281c.009.051.048.09.099.09.05 0 .09-.039.101-.09l.176-1.281-.176-1.326c-.011-.059-.051-.099-.101-.099m1.8-1.465c-.058 0-.106.046-.106.107l-.207 2.559.207 2.458c0 .06.048.106.106.106.061 0 .106-.046.114-.106l.227-2.458-.227-2.559c-.008-.061-.053-.107-.114-.107m.9-.123c-.066 0-.115.052-.122.113l-.179 2.682.179 2.559c.007.061.056.113.122.113.06 0 .11-.052.118-.113l.206-2.559-.206-2.682c-.008-.061-.058-.113-.118-.113m.964-.135c-.075 0-.129.057-.135.128l-.167 2.917.167 2.658c.006.071.06.129.135.129.068 0 .128-.058.135-.129l.193-2.658-.193-2.917c-.007-.071-.067-.128-.135-.128m.9-.122c-.077 0-.136.06-.142.137l-.151 3.039.151 2.742c.006.076.065.137.142.137.074 0 .135-.061.141-.137l.175-2.742-.175-3.039c-.006-.077-.067-.137-.141-.137m.964-.14c-.076 0-.141.063-.146.141l-.138 3.179.138 2.816c.005.077.07.14.146.14.074 0 .14-.063.145-.14l.159-2.816-.159-3.179c-.005-.078-.071-.141-.145-.141m.97-.093c-.084 0-.147.066-.153.15l-.125 3.272.125 2.817c.006.084.069.15.153.15.08 0 .145-.066.151-.15l.146-2.817-.146-3.272c-.006-.084-.071-.15-.151-.15m.97-.009c-.09 0-.158.07-.164.158l-.112 3.281.112 2.728c.006.089.074.157.164.157.089 0 .158-.068.164-.157l.131-2.728-.131-3.281c-.006-.088-.075-.158-.164-.158m11.27 3.264c-.492 0-.979.097-1.432.274-.454-3.98-3.838-7.038-7.937-7.038-.418 0-.833.035-1.238.104-.174.03-.217.048-.217.193v10.592c0 .142.053.188.207.206 0 0 9.47.056 10.617.056 1.869 0 3.384-1.516 3.384-3.385s-1.515-3.386-3.384-3.386"/>
                  </svg>
                  SoundCloud
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@cryptocanuck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:booking@cryptocanuck.com"
                  className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                >
                  booking@cryptocanuck.com
                </a>
              </li>
              <li>
                <p className="text-gray-400 text-sm">
                  For bookings, collaborations, and inquiries
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} CryptoCanuck. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Made with 🎵 and code
          </p>
        </div>
      </div>
    </footer>
  );
}
