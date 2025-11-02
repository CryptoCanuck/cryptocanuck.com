import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Music() {
  // Featured release
  const featured = {
    id: 0,
    title: "Midnight Frequencies",
    releaseDate: "2025-10-15",
    artwork: "/images/midnight-frequencies.jpg",
    description: "A hypnotic journey through late-night frequencies, combining pulsing basslines with atmospheric pads and ethereal vocals. Perfect for those 3 AM sets where the energy is just right.",
    genre: ["Progressive House"],
    bpm: 128,
    key: "Am",
    duration: "6:42",
    label: "Independent",
    featured: ["Spotify's Mint", "Apple Music's Best New Tracks"],
    support: ["Deadmau5", "Eric Prydz", "Armin van Buuren"],
    streams: "500K+",
    platforms: {
      spotify: "https://open.spotify.com/track/YOUR_TRACK_ID",
      apple: "https://music.apple.com/album/YOUR_ALBUM_ID",
      soundcloud: "https://soundcloud.com/YOUR_USERNAME/track",
      youtube: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
    }
  };

  // Latest releases
  const releases = [
    {
      id: 1,
      title: "Electric Dreams",
      releaseDate: "2025-08-22",
      artwork: "/images/electric-dreams.jpg",
      description: "Soaring melodies meet driving basslines in this future bass anthem that captures the essence of euphoric festival moments.",
      genre: ["Future Bass", "Progressive House"],
      bpm: 140,
      key: "F#m",
      duration: "5:28",
      label: "Independent",
      featured: ["SiriusXM BPM"],
      support: ["Illenium", "Seven Lions"],
      streams: "350K+",
      platforms: {
        spotify: "https://open.spotify.com/track/YOUR_TRACK_ID",
        apple: "https://music.apple.com/album/YOUR_ALBUM_ID",
        soundcloud: "https://soundcloud.com/YOUR_USERNAME/track",
        youtube: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
      }
    },
    {
      id: 2,
      title: "Neon Nights",
      releaseDate: "2025-06-10",
      artwork: "/images/neon-nights.jpg",
      description: "Melodic techno perfection with driving percussion and haunting synth melodies that build to an explosive climax.",
      genre: ["Melodic Techno"],
      bpm: 124,
      key: "Dm",
      duration: "7:15",
      label: "Independent",
      featured: ["Beatport Top 100"],
      support: ["Tale of Us", "Anyma"],
      streams: "280K+",
      platforms: {
        spotify: "https://open.spotify.com/track/YOUR_TRACK_ID",
        apple: "https://music.apple.com/album/YOUR_ALBUM_ID",
        soundcloud: "https://soundcloud.com/YOUR_USERNAME/track",
        youtube: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
      }
    },
    {
      id: 3,
      title: "Pulse Code",
      releaseDate: "2025-04-18",
      artwork: "/images/pulse-code.jpg",
      description: "Where code meets melody. A tech-inspired progressive journey featuring modular synth sequences and glitchy percussion.",
      genre: ["Progressive House", "Tech House"],
      bpm: 126,
      key: "Gm",
      duration: "6:33",
      label: "Independent",
      featured: ["Spotify's Housewerk"],
      support: ["CamelPhat", "John Summit"],
      streams: "420K+",
      platforms: {
        spotify: "https://open.spotify.com/track/YOUR_TRACK_ID",
        apple: "https://music.apple.com/album/YOUR_ALBUM_ID",
        soundcloud: "https://soundcloud.com/YOUR_USERNAME/track",
        youtube: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
      }
    },
    {
      id: 4,
      title: "Aurora",
      releaseDate: "2025-02-14",
      artwork: "/images/aurora.jpg",
      description: "An emotional odyssey featuring lush pads, delicate piano melodies, and a powerful vocal performance that builds to pure euphoria.",
      genre: ["Future Bass", "Melodic Bass"],
      bpm: 138,
      key: "C#m",
      duration: "5:47",
      label: "Independent",
      featured: ["UKF's Future Bass Selection"],
      support: ["Madeon", "Porter Robinson"],
      streams: "610K+",
      platforms: {
        spotify: "https://open.spotify.com/track/YOUR_TRACK_ID",
        apple: "https://music.apple.com/album/YOUR_ALBUM_ID",
        soundcloud: "https://soundcloud.com/YOUR_USERNAME/track",
        youtube: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
      }
    },
    {
      id: 5,
      title: "Midnight Protocol",
      releaseDate: "2024-12-20",
      artwork: "/images/midnight-protocol.jpg",
      description: "Deep, hypnotic grooves with dark techno undertones and industrial textures. Made for the underground warehouse scene.",
      genre: ["Melodic Techno", "Progressive House"],
      bpm: 122,
      key: "Em",
      duration: "8:21",
      label: "Independent",
      featured: ["Beatport Techno Top 10"],
      support: ["Adam Beyer", "Testpilot"],
      streams: "190K+",
      platforms: {
        spotify: "https://open.spotify.com/track/YOUR_TRACK_ID",
        apple: "https://music.apple.com/album/YOUR_ALBUM_ID",
        soundcloud: "https://soundcloud.com/YOUR_USERNAME/track",
        youtube: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
      }
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <NextSeo
        title="Music | CryptoCanuck"
        description="Listen to the latest releases from CryptoCanuck. Progressive house, melodic techno, and future bass tracks available on Spotify, Apple Music, and more."
        canonical="https://cryptocanuck.com/music"
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
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>

          {/* Middle decorations */}
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

          {/* Bottom decorations */}
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl"></div>
        </div>

      {/* Page Hero */}
      <section className="relative py-24">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Music
          </h1>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto mb-8">
            From progressive house to melodic techno and future bass, explore my sonic journey through electronic music
          </p>

          {/* Quick Platform Links */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://open.spotify.com/artist/YOUR_ARTIST_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-white rounded-lg transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
              Follow on Spotify
            </a>
            <a
              href="https://music.apple.com/artist/YOUR_ARTIST_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-white rounded-lg transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Follow on Apple Music
            </a>
            <a
              href="https://soundcloud.com/cryptocanuck"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-white rounded-lg transition-all text-sm font-medium"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m.899.828c-.051 0-.09.04-.099.099l-.145 1.326.145 1.281c.009.051.048.09.099.09.05 0 .09-.039.101-.09l.176-1.281-.176-1.326c-.011-.059-.051-.099-.101-.099m1.8-1.465c-.058 0-.106.046-.106.107l-.207 2.559.207 2.458c0 .06.048.106.106.106.061 0 .106-.046.114-.106l.227-2.458-.227-2.559c-.008-.061-.053-.107-.114-.107m.9-.123c-.066 0-.115.052-.122.113l-.179 2.682.179 2.559c.007.061.056.113.122.113.06 0 .11-.052.118-.113l.206-2.559-.206-2.682c-.008-.061-.058-.113-.118-.113m.964-.135c-.075 0-.129.057-.135.128l-.167 2.917.167 2.658c.006.071.06.129.135.129.068 0 .128-.058.135-.129l.193-2.658-.193-2.917c-.007-.071-.067-.128-.135-.128m.9-.122c-.077 0-.136.06-.142.137l-.151 3.039.151 2.742c.006.076.065.137.142.137.074 0 .135-.061.141-.137l.175-2.742-.175-3.039c-.006-.077-.067-.137-.141-.137m.964-.14c-.076 0-.141.063-.146.141l-.138 3.179.138 2.816c.005.077.07.14.146.14.074 0 .14-.063.145-.14l.159-2.816-.159-3.179c-.005-.078-.071-.141-.145-.141m.97-.093c-.084 0-.147.066-.153.15l-.125 3.272.125 2.817c.006.084.069.15.153.15.08 0 .145-.066.151-.15l.146-2.817-.146-3.272c-.006-.084-.071-.15-.151-.15m.97-.009c-.09 0-.158.07-.164.158l-.112 3.281.112 2.728c.006.089.074.157.164.157.089 0 .158-.068.164-.157l.131-2.728-.131-3.281c-.006-.088-.075-.158-.164-.158m11.27 3.264c-.492 0-.979.097-1.432.274-.454-3.98-3.838-7.038-7.937-7.038-.418 0-.833.035-1.238.104-.174.03-.217.048-.217.193v10.592c0 .142.053.188.207.206 0 0 9.47.056 10.617.056 1.869 0 3.384-1.516 3.384-3.385s-1.515-3.386-3.384-3.386"/>
              </svg>
              Follow on SoundCloud
            </a>
          </div>
        </div>
      </section>

      {/* Featured Release */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured Release
            </h2>
            <p className="text-gray-400 text-lg">
              My latest track pushing the boundaries of progressive sound
            </p>
          </div>

          <FeaturedTrackCard track={featured} />
        </div>
      </section>

      {/* Latest Releases */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Latest Releases
            </h2>
            <p className="text-gray-400 text-lg">
              Recent tracks across progressive house, melodic techno, and future bass
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {releases.map((release) => (
              <TrackCard key={release.id} track={release} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Never Miss a Release
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get notified when new tracks drop, plus exclusive previews and behind-the-scenes studio content
          </p>

          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
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
              Subscribe
            </button>
          </form>
        </div>
      </section>

      </div>
      {/* End Unified Background Wrapper */}

      <Footer />
    </div>
  );
}

function FeaturedTrackCard({ track }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
      {/* Artwork */}
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
            OUT NOW • {track.streams} STREAMS
          </span>
        </div>
      </div>

      {/* Track Details */}
      <div className="space-y-6">
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">{track.title}</h3>
          <p className="text-gray-400 leading-relaxed mb-4">
            {track.description}
          </p>

          {/* Genre Tags & Metadata */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {track.genre.map((g, i) => (
              <span key={i} className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 rounded-full">
                {g}
              </span>
            ))}
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-400 text-sm">{track.bpm} BPM</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-400 text-sm">{track.key}</span>
            <span className="text-gray-500 text-sm">•</span>
            <span className="text-gray-400 text-sm">{track.duration}</span>
          </div>

          {/* Social Proof */}
          {track.featured && track.featured.length > 0 && (
            <div className="mb-4 p-3 bg-gray-900/50 rounded-lg border border-gray-800">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-gray-300 font-medium">Featured in:</span>
                <span className="text-gray-400">{track.featured.join(", ")}</span>
              </div>
            </div>
          )}

          {/* Artist Support */}
          {track.support && track.support.length > 0 && (
            <div className="mb-6 p-3 bg-gray-900/50 rounded-lg border border-gray-800">
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-300 font-medium">Supported by:</span>
                <span className="text-gray-400">{track.support.join(", ")}</span>
              </div>
            </div>
          )}
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wider">Listen Now</h4>
          <div className="space-y-3">
            <a
              href={track.platforms.spotify}
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
              href={track.platforms.apple}
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

            <div className="grid grid-cols-2 gap-3">
              <a
                href={track.platforms.soundcloud}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all group"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m.899.828c-.051 0-.09.04-.099.099l-.145 1.326.145 1.281c.009.051.048.09.099.09.05 0 .09-.039.101-.09l.176-1.281-.176-1.326c-.011-.059-.051-.099-.101-.099m1.8-1.465c-.058 0-.106.046-.106.107l-.207 2.559.207 2.458c0 .06.048.106.106.106.061 0 .106-.046.114-.106l.227-2.458-.227-2.559c-.008-.061-.053-.107-.114-.107m.9-.123c-.066 0-.115.052-.122.113l-.179 2.682.179 2.559c.007.061.056.113.122.113.06 0 .11-.052.118-.113l.206-2.559-.206-2.682c-.008-.061-.058-.113-.118-.113m.964-.135c-.075 0-.129.057-.135.128l-.167 2.917.167 2.658c.006.071.06.129.135.129.068 0 .128-.058.135-.129l.193-2.658-.193-2.917c-.007-.071-.067-.128-.135-.128m.9-.122c-.077 0-.136.06-.142.137l-.151 3.039.151 2.742c.006.076.065.137.142.137.074 0 .135-.061.141-.137l.175-2.742-.175-3.039c-.006-.077-.067-.137-.141-.137m.964-.14c-.076 0-.141.063-.146.141l-.138 3.179.138 2.816c.005.077.07.14.146.14.074 0 .14-.063.145-.14l.159-2.816-.159-3.179c-.005-.078-.071-.141-.145-.141m.97-.093c-.084 0-.147.066-.153.15l-.125 3.272.125 2.817c.006.084.069.15.153.15.08 0 .145-.066.151-.15l.146-2.817-.146-3.272c-.006-.084-.071-.15-.151-.15m.97-.009c-.09 0-.158.07-.164.158l-.112 3.281.112 2.728c.006.089.074.157.164.157.089 0 .158-.068.164-.157l.131-2.728-.131-3.281c-.006-.088-.075-.158-.164-.158m11.27 3.264c-.492 0-.979.097-1.432.274-.454-3.98-3.838-7.038-7.937-7.038-.418 0-.833.035-1.238.104-.174.03-.217.048-.217.193v10.592c0 .142.053.188.207.206 0 0 9.47.056 10.617.056 1.869 0 3.384-1.516 3.384-3.385s-1.515-3.386-3.384-3.386"/>
                </svg>
                SoundCloud
              </a>

              <a
                href={track.platforms.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all group"
              >
                <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackCard({ track }) {
  const isNew = () => {
    const releaseDate = new Date(track.releaseDate);
    const now = new Date();
    const daysDiff = (now - releaseDate) / (1000 * 60 * 60 * 24);
    return daysDiff < 30;
  };

  return (
    <div className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
      {/* Artwork */}
      <div className="relative aspect-square bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-24 h-24 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>

        {/* Play button overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center shadow-lg shadow-purple-500/50">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        {/* Badges */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
          {isNew() && (
            <span className="px-2 py-1 text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
              NEW
            </span>
          )}
          <span className="ml-auto px-2 py-1 text-xs font-semibold bg-black/70 text-white rounded-full">
            {track.streams}
          </span>
        </div>
      </div>

      {/* Track Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {track.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {track.description}
        </p>

        {/* Genre Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {track.genre.map((g, i) => (
            <span key={i} className="px-2 py-1 text-xs font-medium bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 rounded">
              {g}
            </span>
          ))}
        </div>

        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
          <span>{track.bpm} BPM</span>
          <span>•</span>
          <span>{track.key}</span>
          <span>•</span>
          <span>{track.duration}</span>
        </div>

        {/* Platform Links */}
        <div className="space-y-2">
          <a
            href={track.platforms.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-black hover:bg-gray-950 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all group"
          >
            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Listen on Spotify
          </a>

          <div className="grid grid-cols-2 gap-2">
            <a
              href={track.platforms.apple}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 px-3 py-2 bg-black hover:bg-gray-950 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-xs font-medium rounded-lg transition-all"
            >
              Apple
            </a>
            <a
              href={track.platforms.soundcloud}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 px-3 py-2 bg-black hover:bg-gray-950 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-xs font-medium rounded-lg transition-all"
            >
              SoundCloud
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
