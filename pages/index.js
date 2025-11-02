import Head from "next/head";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <NextSeo
        title="CryptoCanuck | EDM Producer & Electronic Music Artist"
        description="Official website of CryptoCanuck - Electronic Dance Music producer, DJ, and developer. Listen to latest tracks, tour dates, and exclusive releases."
        canonical="https://cryptocanuck.com/"
        openGraph={{
          url: "https://cryptocanuck.com/",
          title: "CryptoCanuck | EDM Producer & Electronic Music Artist",
          description: "Official website of CryptoCanuck - Electronic Dance Music producer, DJ, and developer. Listen to latest tracks, tour dates, and exclusive releases.",
          images: [
            {
              url: "https://cryptocanuck.com/og-image.jpg",
              width: 1200,
              height: 630,
              alt: "CryptoCanuck - EDM Producer",
            },
          ],
          site_name: "CryptoCanuck",
        }}
        twitter={{
          handle: "@cryptocanuck",
          site: "@cryptocanuck",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {/* Unified Background Wrapper */}
      <div className="relative bg-black overflow-hidden">
        {/* Gradient Background with decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10"></div>

          {/* Top decorations */}
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

          {/* Middle decorations */}
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

          {/* Bottom decorations */}
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl"></div>
        </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">

        {/* Content */}
        <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl text-center">
          <h1 className="mb-6 text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-white">
            CRYPTOCANUCK
          </h1>

          <p className="mb-8 text-2xl sm:text-3xl md:text-4xl font-bold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Progressive House • Melodic Techno • Future Bass
            </span>
          </p>

          <p className="mb-12 text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Where code meets melody. Blending driving basslines with ethereal soundscapes to create tracks that move both body and soul.
          </p>

          {/* Streaming Platforms */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            <span className="text-gray-400 text-sm font-medium">STREAM NOW ON</span>
            <div className="flex gap-4">
              <a
                href="https://open.spotify.com/artist/YOUR_ARTIST_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white rounded-lg transition-all text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                Spotify
              </a>
              <a
                href="https://music.apple.com/artist/YOUR_ARTIST_ID"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white rounded-lg transition-all text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Apple Music
              </a>
              <a
                href="https://soundcloud.com/cryptocanuck"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white rounded-lg transition-all text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m.899.828c-.051 0-.09.04-.099.099l-.145 1.326.145 1.281c.009.051.048.09.099.09.05 0 .09-.039.101-.09l.176-1.281-.176-1.326c-.011-.059-.051-.099-.101-.099m1.8-1.465c-.058 0-.106.046-.106.107l-.207 2.559.207 2.458c0 .06.048.106.106.106.061 0 .106-.046.114-.106l.227-2.458-.227-2.559c-.008-.061-.053-.107-.114-.107m.9-.123c-.066 0-.115.052-.122.113l-.179 2.682.179 2.559c.007.061.056.113.122.113.06 0 .11-.052.118-.113l.206-2.559-.206-2.682c-.008-.061-.058-.113-.118-.113m.964-.135c-.075 0-.129.057-.135.128l-.167 2.917.167 2.658c.006.071.06.129.135.129.068 0 .128-.058.135-.129l.193-2.658-.193-2.917c-.007-.071-.067-.128-.135-.128m.9-.122c-.077 0-.136.06-.142.137l-.151 3.039.151 2.742c.006.076.065.137.142.137.074 0 .135-.061.141-.137l.175-2.742-.175-3.039c-.006-.077-.067-.137-.141-.137m.964-.14c-.076 0-.141.063-.146.141l-.138 3.179.138 2.816c.005.077.07.14.146.14.074 0 .14-.063.145-.14l.159-2.816-.159-3.179c-.005-.078-.071-.141-.145-.141m.97-.093c-.084 0-.147.066-.153.15l-.125 3.272.125 2.817c.006.084.069.15.153.15.08 0 .145-.066.151-.15l.146-2.817-.146-3.272c-.006-.084-.071-.15-.151-.15m.97-.009c-.09 0-.158.07-.164.158l-.112 3.281.112 2.728c.006.089.074.157.164.157.089 0 .158-.068.164-.157l.131-2.728-.131-3.281c-.006-.088-.075-.158-.164-.158m11.27 3.264c-.492 0-.979.097-1.432.274-.454-3.98-3.838-7.038-7.937-7.038-.418 0-.833.035-1.238.104-.174.03-.217.048-.217.193v10.592c0 .142.053.188.207.206 0 0 9.47.056 10.617.056 1.869 0 3.384-1.516 3.384-3.385s-1.515-3.386-3.384-3.386"/>
                </svg>
                SoundCloud
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/music">
              <a className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transform transition-all duration-300">
                <span className="flex items-center gap-2 justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Listen to Latest Tracks
                </span>
              </a>
            </Link>

            <Link href="/shows">
              <a className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white border-2 border-purple-500/50 rounded-lg hover:border-purple-500 hover:bg-purple-500/10 hover:scale-105 transform transition-all duration-300">
                See Live Shows
              </a>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Release
            </h2>
            <p className="text-gray-400 text-lg">
              My latest track pushing the boundaries of progressive sound
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Featured Release */}
            <div className="relative aspect-square bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-32 h-32 text-gray-700 group-hover:text-gray-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>

              {/* Play button overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-2xl shadow-purple-500/50">
                  <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
                  OUT NOW
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">Midnight Frequencies</h3>
                <p className="text-gray-300 text-sm mb-4">Progressive House • 128 BPM • Released October 2025</p>
              </div>
            </div>

            {/* Track Details & Streaming Links */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">About This Track</h3>
                <p className="text-gray-400 leading-relaxed">
                  A hypnotic journey through late-night frequencies, combining pulsing basslines with atmospheric pads and ethereal vocals. Perfect for those 3 AM sets where the energy is just right.
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Stream & Download</h4>
                <div className="space-y-3">
                  <a
                    href="https://open.spotify.com/track/YOUR_TRACK_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-6 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-white rounded-lg transition-all group"
                  >
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                      </svg>
                      <span className="font-medium">Listen on Spotify</span>
                    </span>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <a
                    href="https://music.apple.com/album/YOUR_ALBUM_ID"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-6 py-4 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-white rounded-lg transition-all group"
                  >
                    <span className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                      <span className="font-medium">Listen on Apple Music</span>
                    </span>
                    <svg className="w-5 h-5 text-gray-600 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>

                  <Link href="/music">
                    <a className="flex items-center justify-center gap-2 w-full px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-[1.02] transition-all duration-300">
                      View All Releases
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-2">
                100K+
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                Monthly Listeners
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-2">
                50+
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                Tracks Released
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-2">
                75+
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                Live Shows
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-2">
                25+
              </div>
              <div className="text-gray-400 text-sm md:text-base">
                Countries Reached
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sound Description */}
      <section className="relative py-24">
        <div className="relative px-4 mx-auto max-w-5xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Sound</span>
            </h2>
            <p className="text-gray-300 text-xl leading-relaxed max-w-3xl mx-auto">
              My music lives in the space between euphoria and introspection. Drawing from the driving energy of progressive house, the emotional depth of melodic techno, and the soaring melodies of future bass, each track is designed to take you on a journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-gradient-to-br from-pink-500/10 via-transparent to-transparent rounded-xl border border-gray-800 hover:border-pink-500/50 transition-all">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">High Energy</h3>
              <p className="text-gray-400">
                Driving basslines and punchy drums that keep the dance floor moving from first drop to final breakdown.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Emotional Depth</h3>
              <p className="text-gray-400">
                Lush pads and soaring melodies that create moments of pure euphoria and emotional connection.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Production Quality</h3>
              <p className="text-gray-400">
                Crisp, professional production with attention to every detail, from sound design to mastering.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/music">
              <a className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Experience the Sound
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured On / Played At */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured & Supported By
            </h2>
            <p className="text-gray-400 text-lg">
              Playing at top venues and supported by industry leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Festivals & Venues */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
                Performed At
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <span className="text-gray-300">Electric Paradise Festival</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                  <span className="text-gray-300">Bass Nation</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"></div>
                  <span className="text-gray-300">Neon Nights Club</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500"></div>
                  <span className="text-gray-300">Frequency Festival</span>
                </div>
              </div>
            </div>

            {/* Radio & Playlist Support */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
                Playlist Support
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <span className="text-gray-300">Spotify Editorial Playlists</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500"></div>
                  <span className="text-gray-300">Apple Music's Best New Tracks</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"></div>
                  <span className="text-gray-300">SiriusXM BPM</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500"></div>
                  <span className="text-gray-300">UKF's Future Bass Selection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24">
        <div className="relative px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get New Music First
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Join the VIP list for early access to new releases, exclusive track previews, and behind-the-scenes studio updates
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 mb-8">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-500"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-300"
            >
              Join VIP List
            </button>
          </form>

          {/* Benefits */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Early access to tracks</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Exclusive previews</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No spam, ever</span>
            </div>
          </div>
        </div>
      </section>

      </div>
      {/* End Unified Background Wrapper */}

      <Footer />
    </div>
  );
}
