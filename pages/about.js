import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function About() {
  const stats = [
    { label: "Tracks Released", value: "50+", detail: "Singles & Remixes" },
    { label: "Monthly Listeners", value: "100K+", detail: "Across Platforms" },
    { label: "Live Shows", value: "75+", detail: "Worldwide" },
    { label: "Countries Reached", value: "25+", detail: "And Growing" },
    { label: "Spotify Playlists", value: "200+", detail: "Editorial & User" },
    { label: "Total Streams", value: "5M+", detail: "All Platforms" }
  ];

  const achievements = [
    {
      title: "Spotify Editorial Playlists",
      items: ["Mint", "Dance Rising", "Electronic Rising", "Bass Arcade"]
    },
    {
      title: "Festival Highlights",
      items: ["Tomorrowland 2025", "Ultra Music Festival 2025", "Movement Detroit 2025", "Electric Paradise Miami"]
    },
    {
      title: "Supported By",
      items: ["Deadmau5", "Eric Prydz", "Armin van Buuren", "Above & Beyond", "Lane 8"]
    },
    {
      title: "Collaborations",
      items: ["Releases with independent labels", "Official remixes for emerging artists", "Cross-genre collaborations"]
    }
  ];

  const journey = [
    {
      year: "2018",
      title: "The Beginning",
      description: "Started producing electronic music in my home studio in Toronto. What began as a hobby quickly turned into an obsession. Spent countless late nights learning synthesis, mixing techniques, and exploring the depths of Ableton Live. Experimented with everything from dubstep to deep house before finding my sound."
    },
    {
      year: "2020",
      title: "First Release",
      description: "Released debut single 'Digital Dreams' independently. The track caught fire on SoundCloud's underground scene and was picked up by Spotify's Fresh Finds playlist. Within weeks, it surpassed 100K streams, validating years of bedroom production work. This success opened doors to my first label conversations."
    },
    {
      year: "2021",
      title: "Building Momentum",
      description: "Dropped 'Neon Horizon' EP featuring 4 tracks that defined my signature sound: melodic, energetic, and emotionally driven. The EP gained support from major progressive house DJs and landed on Spotify's 'Mint' playlist. Started building a loyal fanbase and began receiving booking requests for shows."
    },
    {
      year: "2022",
      title: "Festival Circuit",
      description: "Performed at my first major festival - Electric Paradise in Miami. The experience was surreal: seeing thousands of people connect with music I created in my bedroom. This led to a whirlwind tour across North America, playing 30+ shows at clubs and festivals. Learned invaluable lessons about live performance and crowd connection."
    },
    {
      year: "2024",
      title: "International Breakthrough",
      description: "Expanded beyond North America with shows in Europe and Asia. Performed at Tomorrowland's Freedom Stage to a crowd of 15,000+ - a dream come true. Released collaboration tracks with artists I'd admired for years. Crossed 1 million total streams and built a community of dedicated fans who travel to shows."
    },
    {
      year: "2025",
      title: "Today",
      description: "Continuing to push creative boundaries with genre-blending productions. Working on my debut album that explores the intersection of progressive house, melodic techno, and cinematic soundscapes. Focused on creating music that moves people emotionally while maintaining high-energy dancefloor appeal. The journey is just beginning."
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <NextSeo
        title="About CryptoCanuck | EDM Producer & Developer"
        description="From Toronto bedroom producer to Tomorrowland and Ultra Music Festival. Discover CryptoCanuck's journey, achievements, and the story behind the progressive house and melodic techno sound supported by Deadmau5, Eric Prydz, and Armin van Buuren."
        canonical="https://cryptocanuck.com/about"
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
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl"></div>

          {/* Middle decorations */}
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

          {/* Bottom decorations */}
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl"></div>
        </div>

      {/* Hero Section */}
      <section className="relative py-24">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image Placeholder */}
            <div className="relative aspect-square bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-48 h-48 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">CryptoCanuck</span>
              </h1>
              <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
                <p>
                  Hey! I'm CryptoCanuck, an EDM producer and developer based in Toronto, Canada. What started as late-night bedroom productions in 2018 has evolved into performances at some of the world's most iconic festivals, including Tomorrowland and Ultra Music Festival.
                </p>
                <p>
                  My sound is a fusion of progressive house, melodic techno, and cinematic elements - designed to take listeners on an emotional journey while keeping the dancefloor alive. I draw inspiration from legends like Deadmau5, Eric Prydz, and Lane 8, while pushing to create something uniquely my own. Every track tells a story, blending driving basslines with ethereal atmospheres and meticulously crafted melodies.
                </p>
                <p>
                  The intersection of technology and music has always fascinated me. My background in software development influences my production approach - I treat each project like solving a complex problem, iterating until every element serves the greater vision. Whether I'm coding or producing, it's all about creating experiences that resonate deeply with people.
                </p>
                <p>
                  Beyond the studio and stage, I'm passionate about the electronic music community. I love connecting with fans, sharing production insights, and collaborating with fellow artists. This journey from bedroom producer to festival stages has been incredible, and I'm just getting started.
                </p>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex gap-4">
                <a
                  href="https://twitter.com/cryptocanuck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white rounded-lg transition-all"
                  aria-label="Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/cryptocanuck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white rounded-lg transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://soundcloud.com/cryptocanuck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-12 h-12 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white rounded-lg transition-all"
                  aria-label="SoundCloud"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-white text-sm md:text-base font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-xs">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Achievements & Recognition
            </h2>
            <p className="text-gray-400 text-lg">
              Milestones and moments that shaped the journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6 bg-gray-900 rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {index === 0 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    )}
                    {index === 1 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    )}
                    {index === 2 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    )}
                    {index === 3 && (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    )}
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-white mb-3">
                  {achievement.title}
                </h3>
                <ul className="space-y-2">
                  {achievement.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 text-sm text-gray-400">
                      <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              The Journey
            </h2>
            <p className="text-gray-400 text-lg">
              From bedroom producer to festival stages worldwide
            </p>
          </div>

          <div className="space-y-12">
            {journey.map((milestone, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index !== journey.length - 1 && (
                  <div className="absolute left-8 top-20 bottom-0 w-px bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                )}

                <div className="flex gap-6">
                  {/* Year Badge */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{milestone.year}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-grow pb-12">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Setup */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Studio & Gear
            </h2>
            <p className="text-gray-400 text-lg">
              The tools behind the sound
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">DAW</h3>
              <p className="text-gray-400">Ableton Live 12 Suite</p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Audio Interface</h3>
              <p className="text-gray-400">Universal Audio Apollo Twin X</p>
            </div>

            <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Monitors</h3>
              <p className="text-gray-400">KRK Rokit 8 G4</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Interested in collaborating or booking a show?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>
      </section>

      </div>
      {/* End Unified Background Wrapper */}

      <Footer />
    </div>
  );
}
