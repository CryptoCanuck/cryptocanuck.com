import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [closeTimeout, setCloseTimeout] = useState(null);
  const { theme, setTheme } = useTheme();
  const router = useRouter();

  useEffect(() => setMounted(true), []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  if (!mounted) return null;

  const handleMouseEnter = (menu) => {
    // Clear any existing timeout
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    // Add a delay before closing the menu
    const timeout = setTimeout(() => {
      setActiveMenu(null);
    }, 300); // 300ms delay
    setCloseTimeout(timeout);
  };

  return (
    <header className="w-full sticky top-0 z-50 bg-black/90 backdrop-blur-lg border-b border-gray-800">
      <div className="max-w-7xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-purple-400 hover:to-purple-600 transition-all duration-300">
              CRYPTOCANUCK
            </a>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" onMouseLeave={handleMouseLeave}>
            {/* Home - Simple Link */}
            <Link href="/">
              <a
                className={`text-sm font-medium transition-all duration-300 ${
                  router.pathname === "/"
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Home
              </a>
            </Link>

            {/* Music - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('music')}
            >
              <Link href="/music">
                <a
                  className={`text-sm font-medium transition-all duration-300 ${
                    router.pathname === "/music"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Music
                </a>
              </Link>
              {activeMenu === 'music' && (
                <MusicMegaMenu
                  onMouseEnter={() => handleMouseEnter('music')}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </div>

            {/* Shows - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('shows')}
            >
              <Link href="/shows">
                <a
                  className={`text-sm font-medium transition-all duration-300 ${
                    router.pathname === "/shows"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Shows
                </a>
              </Link>
              {activeMenu === 'shows' && (
                <ShowsMegaMenu
                  onMouseEnter={() => handleMouseEnter('shows')}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </div>

            {/* About - Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('about')}
            >
              <Link href="/about">
                <a
                  className={`text-sm font-medium transition-all duration-300 ${
                    router.pathname === "/about"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  About
                </a>
              </Link>
              {activeMenu === 'about' && (
                <AboutMegaMenu
                  onMouseEnter={() => handleMouseEnter('about')}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </div>

            {/* Contact - Compact Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('contact')}
            >
              <Link href="/contact">
                <a
                  className={`text-sm font-medium transition-all duration-300 ${
                    router.pathname === "/contact"
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  Contact
                </a>
              </Link>
              {activeMenu === 'contact' && (
                <ContactDropdown
                  onMouseEnter={() => handleMouseEnter('contact')}
                  onMouseLeave={handleMouseLeave}
                />
              )}
            </div>
          </nav>

          {/* Right side - Theme toggle */}
          <div className="flex items-center gap-4">
            <button
              aria-label="Toggle Dark Mode"
              type="button"
              className="w-10 h-10 p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {mounted && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  stroke="currentColor"
                  className="w-full h-full text-gray-200"
                >
                  {theme === "dark" ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  ) : (
                    <svg className="svg-icon" viewBox="0 0 20 20">
                      <path
                        fill="none"
                        d="M10.544 8.717l1.166-.855 1.166.855-.467-1.399 1.012-.778h-1.244l-.467-1.243-.466 1.244H10l1.011.778-.467 1.398zm5.442.855l-.467 1.244h-1.244l1.011.777-.467 1.4 1.167-.855 1.165.855-.466-1.4 1.011-.777h-1.244l-.466-1.244zm-8.979-3.02c0-2.259.795-4.33 2.117-5.955A9.418 9.418 0 00.594 9.98c0 5.207 4.211 9.426 9.406 9.426 2.94 0 5.972-1.354 7.696-3.472-.289.026-.987.044-1.283.044-5.194.001-9.406-4.219-9.406-9.426M10 18.55c-4.715 0-8.551-3.845-8.551-8.57 0-3.783 2.407-6.999 5.842-8.131a10.32 10.32 0 00-1.139 4.703c0 5.368 4.125 9.788 9.365 10.245A9.733 9.733 0 0110 18.55m9.406-16.246h-1.71l-.642-1.71-.642 1.71h-1.71l1.39 1.069-.642 1.924 1.604-1.176 1.604 1.176-.642-1.924 1.39-1.069z"
                      />
                    </svg>
                  )}
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

// Music Mega Menu Component
function MusicMegaMenu({ onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[600px] animate-fadeIn"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Left: Featured Track */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Latest Release</h3>
            <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-lg flex items-center justify-center border border-purple-500/20">
              <svg className="w-16 h-16 text-purple-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Midnight Frequencies</h4>
              <p className="text-gray-400 text-sm">Progressive House • 128 BPM</p>
            </div>
            <Link href="/music">
              <a className="block text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300">
                Listen Now
              </a>
            </Link>
          </div>

          {/* Right: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Stream On</h3>
            <div className="space-y-2">
              <a
                href="https://open.spotify.com/artist/YOUR_ARTIST_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">Spotify</span>
              </a>
              <a
                href="https://music.apple.com/artist/YOUR_ARTIST_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">Apple Music</span>
              </a>
              <a
                href="https://soundcloud.com/cryptocanuck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all group"
              >
                <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m.899.828c-.051 0-.09.04-.099.099l-.145 1.326.145 1.281c.009.051.048.09.099.09.05 0 .09-.039.101-.09l.176-1.281-.176-1.326c-.011-.059-.051-.099-.101-.099m1.8-1.465c-.058 0-.106.046-.106.107l-.207 2.559.207 2.458c0 .06.048.106.106.106.061 0 .106-.046.114-.106l.227-2.458-.227-2.559c-.008-.061-.053-.107-.114-.107m.9-.123c-.066 0-.115.052-.122.113l-.179 2.682.179 2.559c.007.061.056.113.122.113.06 0 .11-.052.118-.113l.206-2.559-.206-2.682c-.008-.061-.058-.113-.118-.113m.964-.135c-.075 0-.129.057-.135.128l-.167 2.917.167 2.658c.006.071.06.129.135.129.068 0 .128-.058.135-.129l.193-2.658-.193-2.917c-.007-.071-.067-.128-.135-.128m.9-.122c-.077 0-.136.06-.142.137l-.151 3.039.151 2.742c.006.076.065.137.142.137.074 0 .135-.061.141-.137l.175-2.742-.175-3.039c-.006-.077-.067-.137-.141-.137m.964-.14c-.076 0-.141.063-.146.141l-.138 3.179.138 2.816c.005.077.07.14.146.14.074 0 .14-.063.145-.14l.159-2.816-.159-3.179c-.005-.078-.071-.141-.145-.141m.97-.093c-.084 0-.147.066-.153.15l-.125 3.272.125 2.817c.006.084.069.15.153.15.08 0 .145-.066.151-.15l.146-2.817-.146-3.272c-.006-.084-.071-.15-.151-.15m.97-.009c-.09 0-.158.07-.164.158l-.112 3.281.112 2.728c.006.089.074.157.164.157.089 0 .158-.068.164-.157l.131-2.728-.131-3.281c-.006-.088-.075-.158-.164-.158m11.27 3.264c-.492 0-.979.097-1.432.274-.454-3.98-3.838-7.038-7.937-7.038-.418 0-.833.035-1.238.104-.174.03-.217.048-.217.193v10.592c0 .142.053.188.207.206 0 0 9.47.056 10.617.056 1.869 0 3.384-1.516 3.384-3.385s-1.515-3.386-3.384-3.386"/>
                </svg>
                <span className="text-gray-300 group-hover:text-white text-sm font-medium transition-colors">SoundCloud</span>
              </a>
            </div>
            <Link href="/music">
              <a className="block text-center text-purple-400 hover:text-purple-300 text-sm font-medium mt-4 transition-colors">
                View All Tracks →
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Shows Mega Menu Component
function ShowsMegaMenu({ onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[700px] animate-fadeIn"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-6">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Upcoming Shows</h3>
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* Show 1 */}
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all group">
            <div className="w-10 h-10 mb-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-purple-400 transition-colors">Electric Paradise</h4>
            <p className="text-gray-400 text-xs mb-1">Miami Beach, FL</p>
            <p className="text-gray-500 text-xs">Dec 15, 2025</p>
          </div>

          {/* Show 2 */}
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all group">
            <div className="w-10 h-10 mb-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-purple-400 transition-colors">Exchange LA</h4>
            <p className="text-gray-400 text-xs mb-1">Los Angeles, CA</p>
            <p className="text-gray-500 text-xs">Nov 20, 2025</p>
          </div>

          {/* Show 3 */}
          <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all group">
            <div className="w-10 h-10 mb-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-purple-400 transition-colors">Hakkasan</h4>
            <p className="text-gray-400 text-xs mb-1">Las Vegas, NV</p>
            <p className="text-gray-500 text-xs">Oct 30, 2025</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
          <Link href="/shows">
            <a className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
              View All Shows →
            </a>
          </Link>
          <button className="px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all">
            Get Tour Alerts
          </button>
        </div>
      </div>
    </div>
  );
}

// About Mega Menu Component
function AboutMegaMenu({ onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[600px] animate-fadeIn"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-6">
        <div className="grid grid-cols-2 gap-6">
          {/* Left: Mini Bio */}
          <div className="space-y-4">
            <div className="aspect-square bg-gradient-to-br from-purple-600/20 to-purple-400/20 rounded-lg flex items-center justify-center border border-purple-500/20">
              <svg className="w-20 h-20 text-purple-400/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-2">CryptoCanuck</h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                Toronto-based EDM producer blending progressive house and melodic techno. From bedroom productions to Tomorrowland stages.
              </p>
            </div>
            <div className="flex gap-3">
              <a href="https://twitter.com/cryptocanuck" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-purple-500/50 rounded-lg transition-all">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                </svg>
              </a>
              <a href="https://instagram.com/cryptocanuck" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-purple-500/50 rounded-lg transition-all">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Stats & Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Quick Stats</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">5M+</div>
                <div className="text-gray-400 text-xs">Total Streams</div>
              </div>
              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">75+</div>
                <div className="text-gray-400 text-xs">Live Shows</div>
              </div>
              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">100K+</div>
                <div className="text-gray-400 text-xs">Listeners</div>
              </div>
              <div className="p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">25+</div>
                <div className="text-gray-400 text-xs">Countries</div>
              </div>
            </div>
            <div className="pt-2 space-y-2">
              <Link href="/about">
                <a className="block text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  Full Biography →
                </a>
              </Link>
              <Link href="/contact">
                <a className="block text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors">
                  Download Press Kit →
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Contact Dropdown Component
function ContactDropdown({ onMouseEnter, onMouseLeave }) {
  return (
    <div
      className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[320px] animate-fadeIn"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-xl border border-purple-500/30 shadow-2xl shadow-purple-500/20 p-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Get In Touch</h3>
        <div className="space-y-2">
          <a
            href="mailto:booking@cryptocanuck.com"
            className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all group"
          >
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
            <div>
              <div className="text-white text-sm font-medium">Bookings</div>
              <div className="text-gray-400 text-xs">Shows & Events</div>
            </div>
          </a>
          <a
            href="mailto:press@cryptocanuck.com"
            className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all group"
          >
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
            <div>
              <div className="text-white text-sm font-medium">Press & Media</div>
              <div className="text-gray-400 text-xs">Interviews & Features</div>
            </div>
          </a>
          <a
            href="mailto:collab@cryptocanuck.com"
            className="flex items-center gap-3 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 transition-all group"
          >
            <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <div>
              <div className="text-white text-sm font-medium">Collaborations</div>
              <div className="text-gray-400 text-xs">Production & Remixes</div>
            </div>
          </a>
        </div>
        <Link href="/contact">
          <a className="block mt-4 text-center px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-medium rounded-lg hover:from-purple-500 hover:to-purple-400 transition-all duration-300">
            Send Message
          </a>
        </Link>
      </div>
    </div>
  );
}
