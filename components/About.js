export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-black">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Artist Photo */}
          <div className="relative">
            <div className="relative aspect-square lg:aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20">
              {/* Placeholder for artist photo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-48 h-48 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full blur-3xl opacity-30"></div>
          </div>

          {/* Bio Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">CryptoCanuck</span>
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                CryptoCanuck is an emerging force in the electronic dance music scene, blending cutting-edge production techniques with infectious melodies and driving beats. Based in [Your City], this artist brings a unique fusion of technical expertise and creative vision to every track.
              </p>

              <p>
                With a background in software development and a passion for music production, CryptoCanuck crafts immersive sonic experiences that push the boundaries of EDM. From progressive house to melodic techno, each release showcases a commitment to innovation and quality.
              </p>

              <p>
                Drawing inspiration from both the digital age and classic electronic pioneers, CryptoCanuck is rapidly building a loyal following among fans who appreciate forward-thinking production and authentic artistry.
              </p>
            </div>

            {/* Stats (Optional) */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  10K+
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  Monthly Listeners
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500">
                  15+
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  Releases
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
                  5+
                </div>
                <div className="text-gray-400 text-sm mt-1">
                  Shows Played
                </div>
              </div>
            </div>

            {/* Press Kit Download (Optional) */}
            <div className="mt-8">
              <a
                href="/press-kit.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Press Kit
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
