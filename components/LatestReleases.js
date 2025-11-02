export default function LatestReleases() {
  // Placeholder data - replace with real data later
  const releases = [
    {
      id: 1,
      title: "Midnight Frequencies",
      releaseDate: "2025-10-15",
      artwork: "/images/midnight-frequencies.jpg", // Placeholder
      platforms: {
        spotify: "https://open.spotify.com/track/YOUR_TRACK_ID",
        apple: "https://music.apple.com/album/YOUR_ALBUM_ID",
        soundcloud: "https://soundcloud.com/YOUR_USERNAME/track",
        youtube: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
      }
    },
    {
      id: 2,
      title: "Electric Dreams",
      releaseDate: "2025-08-22",
      artwork: "/images/electric-dreams.jpg", // Placeholder
      platforms: {
        spotify: "https://open.spotify.com/track/YOUR_TRACK_ID",
        apple: "https://music.apple.com/album/YOUR_ALBUM_ID",
        soundcloud: "https://soundcloud.com/YOUR_USERNAME/track",
        youtube: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
      }
    },
    {
      id: 3,
      title: "Neon Nights",
      releaseDate: "2025-06-10",
      artwork: "/images/neon-nights.jpg", // Placeholder
      platforms: {
        spotify: "https://open.spotify.com/track/YOUR_TRACK_ID",
        apple: "https://music.apple.com/album/YOUR_ALBUM_ID",
        soundcloud: "https://soundcloud.com/YOUR_USERNAME/track",
        youtube: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
      }
    }
  ];

  return (
    <section id="music" className="py-16 md:py-24 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest Releases
          </h2>
          <p className="text-gray-400 text-lg">
            Stream my latest tracks on your favorite platform
          </p>
        </div>

        {/* Music Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {releases.map((release) => (
            <MusicCard key={release.id} release={release} />
          ))}
        </div>
      </div>
    </section>
  );
}

function MusicCard({ release }) {
  return (
    <div className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1">
      {/* Album Artwork */}
      <div className="relative aspect-square bg-gray-800 overflow-hidden">
        {/* Placeholder gradient for missing images */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 flex items-center justify-center">
          <svg className="w-24 h-24 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      </div>

      {/* Track Info */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          {release.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4">
          Released {new Date(release.releaseDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>

        {/* Streaming Platform Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <a
            href={release.platforms.spotify}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#1DB954] hover:bg-[#1ed760] text-white text-sm font-medium rounded transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
            Spotify
          </a>

          <a
            href={release.platforms.apple}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FA243C] hover:bg-[#ff3347] text-white text-sm font-medium rounded transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.45-2.865 2.78-.192.448-.292.925-.363 1.408a10.61 10.61 0 00-.1 1.18c-.01.193-.01.193-.01.193v12.223c0 .01.01.02.01.03.005.05.01.098.015.146.04.71.124 1.414.4 2.08.578 1.39 1.594 2.315 3.05 2.81.528.18 1.074.27 1.628.314.528.042 1.06.042 1.59.04h12.016c.14 0 .28-.002.418-.01.687-.024 1.37-.093 2.027-.295 1.384-.426 2.34-1.34 2.878-2.677.24-.596.335-1.22.39-1.853.025-.302.04-.604.04-.906V6.124z"/>
            </svg>
            Apple
          </a>

          <a
            href={release.platforms.soundcloud}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FF5500] hover:bg-[#ff6a1a] text-white text-sm font-medium rounded transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1"/>
            </svg>
            SoundCloud
          </a>

          <a
            href={release.platforms.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-[#FF0000] hover:bg-[#ff1a1a] text-white text-sm font-medium rounded transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/>
            </svg>
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
