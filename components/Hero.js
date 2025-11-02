export default function Hero() {
  const scrollToMusic = () => {
    const musicSection = document.getElementById('music');
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background Animation */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20 animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 py-20 mx-auto max-w-7xl text-center">
        <h1 className="mb-6 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white">
          CRYPTOCANUCK
        </h1>

        <p className="mb-8 text-2xl sm:text-3xl md:text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            EDM Producer and Developer
          </span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <button
            onClick={scrollToMusic}
            className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transform transition-all duration-300"
          >
            Listen Now
          </button>

          <a
            href="#shows"
            className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white border-2 border-purple-500 rounded-lg hover:bg-purple-500/10 hover:scale-105 transform transition-all duration-300"
          >
            View Shows
          </a>
        </div>

        {/* Streaming Platform Icons */}
        <div className="flex gap-6 justify-center items-center mt-12 flex-wrap">
          <a
            href="https://open.spotify.com/artist/YOUR_ARTIST_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#1DB954] transition-colors transform hover:scale-110 duration-200"
            aria-label="Spotify"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>

          <a
            href="https://music.apple.com/artist/YOUR_ARTIST_ID"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FA243C] transition-colors transform hover:scale-110 duration-200"
            aria-label="Apple Music"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726 10.496 10.496 0 00-1.564-.15c-.04-.003-.083-.01-.124-.013H5.986c-.152.01-.303.017-.455.026-.747.043-1.49.123-2.193.4-1.336.53-2.3 1.45-2.865 2.78-.192.448-.292.925-.363 1.408a10.61 10.61 0 00-.1 1.18c-.01.193-.01.193-.01.193v12.223c0 .01.01.02.01.03.005.05.01.098.015.146.04.71.124 1.414.4 2.08.578 1.39 1.594 2.315 3.05 2.81.528.18 1.074.27 1.628.314.528.042 1.06.042 1.59.04h12.016c.14 0 .28-.002.418-.01.687-.024 1.37-.093 2.027-.295 1.384-.426 2.34-1.34 2.878-2.677.24-.596.335-1.22.39-1.853.025-.302.04-.604.04-.906V6.124zM12.237 3.378c1.314 0 2.628 0 3.943.002.467 0 .934.01 1.4.047.65.053 1.283.17 1.87.5.915.514 1.45 1.31 1.677 2.337.106.48.138.972.146 1.467.014.918.014 1.835.014 2.753 0 2.76 0 5.518-.002 8.277 0 .452-.01.903-.042 1.354-.05.72-.19 1.42-.55 2.05-.54 1.01-1.41 1.59-2.56 1.82-.42.084-.85.12-1.28.13-.65.014-1.3.014-1.95.014H8.11c-.467 0-.934-.01-1.4-.047-.65-.053-1.283-.17-1.87-.5-.915-.514-1.45-1.31-1.677-2.337-.106-.48-.138-.972-.146-1.467-.014-.918-.014-1.835-.014-2.753 0-2.76 0-5.518.002-8.277 0-.452.01-.903.042-1.354.05-.72.19-1.42.55-2.05.54-1.01 1.41-1.59 2.56-1.82.42-.084.85-.12 1.28-.13.65-.014 1.3-.014 1.95-.014h4.127z"/>
            </svg>
          </a>

          <a
            href="https://soundcloud.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FF5500] transition-colors transform hover:scale-110 duration-200"
            aria-label="SoundCloud"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m-.899.828c-.05 0-.09.04-.099.099l-.145 1.326.145 1.281c.009.051.049.09.099.09.051 0 .09-.039.101-.09l.176-1.281-.176-1.326c0-.059-.05-.099-.1-.099m1.8-1.465c-.058 0-.106.046-.106.107l-.207 2.559.207 2.458c0 .06.048.106.106.106.061 0 .107-.046.114-.106l.227-2.458-.227-2.559c-.007-.061-.053-.107-.114-.107m.9-.123c-.066 0-.114.052-.121.113l-.18 2.682.18 2.559c.007.061.055.114.121.114.061 0 .11-.053.119-.114l.205-2.559-.205-2.682c-.009-.061-.058-.113-.119-.113m.964-.135c-.075 0-.129.057-.135.128l-.166 2.917.166 2.658c.006.071.06.129.135.129.069 0 .129-.058.135-.129l.194-2.658-.194-2.917c-.006-.071-.066-.128-.135-.128m.9-.122c-.076 0-.135.06-.141.137l-.151 3.039.151 2.742c.006.076.065.137.141.137.075 0 .136-.061.142-.137l.175-2.742-.175-3.039c-.006-.077-.067-.137-.142-.137m.964-.14c-.075 0-.14.063-.146.141l-.138 3.179.138 2.816c.006.077.071.14.146.14.074 0 .14-.063.145-.14l.159-2.816-.159-3.179c-.005-.078-.071-.141-.145-.141m.97-.093c-.083 0-.146.066-.153.15l-.125 3.272.125 2.817c.007.084.07.15.153.15.08 0 .145-.066.151-.15l.146-2.817-.146-3.272c-.006-.084-.071-.15-.151-.15m.97-.009c-.089 0-.158.07-.164.158l-.112 3.281.112 2.728c.006.089.075.157.164.157.09 0 .158-.068.164-.157l.131-2.728-.131-3.281c-.006-.088-.074-.158-.164-.158m.964-.066c-.097 0-.169.073-.175.165l-.1 3.347.1 2.672c.006.093.078.166.175.166.093 0 .168-.073.174-.166l.117-2.672-.117-3.347c-.006-.092-.081-.165-.174-.165m.97-.006c-.104 0-.179.076-.185.171l-.087 3.353.087 2.636c.006.097.081.172.185.172.098 0 .177-.075.184-.172l.102-2.636-.102-3.353c-.007-.095-.086-.171-.184-.171m.964-.037c-.112 0-.191.08-.198.188l-.075 3.39.075 2.596c.007.104.086.188.198.188.105 0 .188-.084.195-.188l.088-2.596-.088-3.39c-.007-.108-.09-.188-.195-.188m.97.005c-.119 0-.203.084-.209.196l-.063 3.385.063 2.555c.006.111.09.197.209.197.112 0 .199-.086.206-.197l.074-2.555-.074-3.385c-.007-.112-.094-.196-.206-.196m.97.022c-.127 0-.216.087-.223.202l-.052 3.363.052 2.514c.007.119.096.203.223.203.119 0 .21-.084.217-.203l.061-2.514-.061-3.363c-.007-.115-.098-.202-.217-.202m.964.011c-.134 0-.228.091-.235.212l-.04 3.352.04 2.473c.007.126.101.213.235.213.127 0 .223-.087.23-.213l.048-2.473-.048-3.352c-.007-.121-.103-.212-.23-.212m.97.044c-.142 0-.239.095-.246.222l-.028 3.308.028 2.434c.007.133.104.223.246.223.135 0 .235-.09.242-.223l.034-2.434-.034-3.308c-.007-.127-.107-.222-.242-.222m.964.004c-.149 0-.251.099-.258.233l-.017 3.304.017 2.392c.007.141.109.234.258.234.142 0 .246-.093.253-.234l.02-2.392-.02-3.304c-.007-.134-.111-.233-.253-.233"/>
            </svg>
          </a>

          <a
            href="https://www.youtube.com/@YOUR_CHANNEL"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#FF0000] transition-colors transform hover:scale-110 duration-200"
            aria-label="YouTube"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToMusic}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-purple-400 hover:text-purple-300 transition-colors"
          aria-label="Scroll to music section"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
}
