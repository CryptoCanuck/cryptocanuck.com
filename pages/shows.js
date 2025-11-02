import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Shows() {
  // Upcoming Shows
  const shows = [
    {
      id: 1,
      venue: "Electric Paradise Festival",
      location: "Miami Beach, FL",
      date: "2025-12-15",
      time: "9:00 PM",
      setTime: "9:00 PM - 10:30 PM",
      ticketUrl: "https://ticketmaster.com/event/YOUR_EVENT_ID",
      status: "on-sale",
      type: "Festival",
      supporting: ["Above & Beyond", "Ferry Corsten", "Cosmic Gate"],
      description: "Main stage performance at one of Miami's premier electronic music festivals. Expect a high-energy 90-minute set featuring unreleased tracks and fan favorites.",
      priceRange: "$89 - $299",
      capacity: "20,000+",
      venueUrl: "https://electricparadisefest.com"
    },
    {
      id: 2,
      venue: "Exchange LA",
      location: "Los Angeles, CA",
      date: "2025-11-20",
      time: "10:00 PM",
      setTime: "10:00 PM - 2:00 AM",
      ticketUrl: "https://ticketmaster.com/event/YOUR_EVENT_ID",
      status: "on-sale",
      type: "Club Night",
      supporting: ["Local support TBA"],
      description: "An intimate club night in downtown LA. Four-hour extended set diving deep into progressive and melodic techno.",
      priceRange: "$35 - $65",
      capacity: "1,200",
      venueUrl: "https://exchangela.com"
    },
    {
      id: 3,
      venue: "Hakkasan Nightclub",
      location: "Las Vegas, NV",
      date: "2025-10-30",
      time: "11:00 PM",
      setTime: "11:00 PM - 1:00 AM",
      ticketUrl: "https://ticketmaster.com/event/YOUR_EVENT_ID",
      status: "selling-fast",
      type: "Residency Show",
      supporting: ["Special guests"],
      description: "Halloween spectacular at Vegas' premier nightclub. Special themed production with exclusive remixes and mashups.",
      priceRange: "$50 - $150",
      capacity: "3,000",
      venueUrl: "https://hakkasan.com"
    }
  ];

  // Past Shows
  const pastShows = [
    {
      id: 1,
      venue: "Tomorrowland",
      location: "Boom, Belgium",
      date: "2025-07-22",
      type: "Festival",
      stage: "Freedom Stage",
      attendance: "15,000+",
      highlights: "Premiered 'Midnight Frequencies' to massive crowd response. Set featured collaborations with fellow artists and was live-streamed to 100K+ viewers worldwide.",
      image: "/images/tomorrowland-2025.jpg",
      videoUrl: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
    },
    {
      id: 2,
      venue: "Movement Detroit",
      location: "Detroit, MI",
      date: "2025-05-28",
      type: "Festival",
      stage: "Underground Stage",
      attendance: "8,000+",
      highlights: "Deep techno set in the birthplace of techno. Featured unreleased collaborations and special B2B session with techno legends.",
      image: "/images/movement-2025.jpg",
      videoUrl: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
    },
    {
      id: 3,
      venue: "Avalon Hollywood",
      location: "Los Angeles, CA",
      date: "2025-04-15",
      type: "Club Show",
      stage: "Main Room",
      attendance: "1,500",
      highlights: "Sold-out show featuring debut of new visual production. Extended 4-hour set exploring progressive house and melodic techno.",
      image: "/images/avalon-2025.jpg",
      videoUrl: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
    },
    {
      id: 4,
      venue: "Ultra Music Festival",
      location: "Miami, FL",
      date: "2025-03-26",
      type: "Festival",
      stage: "Live Stage",
      attendance: "12,000+",
      highlights: "First Ultra appearance. Peak-time set with surprise guests and premiere of three unreleased tracks. Set later featured on UMF Radio.",
      image: "/images/ultra-2025.jpg",
      videoUrl: "https://youtube.com/watch?v=YOUR_VIDEO_ID"
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <NextSeo
        title="Live Shows & Tour Dates | CryptoCanuck"
        description="Experience CryptoCanuck live at upcoming festivals and club shows worldwide. View tour dates, get tickets, and watch highlights from past performances including Tomorrowland, Ultra Music Festival, and more."
        canonical="https://cryptocanuck.com/shows"
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
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

          {/* Bottom decorations */}
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl"></div>
        </div>

      {/* Page Header */}
      <section className="relative py-24">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Live <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Shows</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Experience the energy live. Check out upcoming tour dates and relive the highlights from past performances across festivals and clubs worldwide.
          </p>
        </div>
      </section>

      {/* Upcoming Shows Grid */}
      <section className="relative py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          {shows.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shows.map((show) => (
                <ShowCard key={show.id} show={show} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <div className="inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-indigo-500/20">
                <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No Upcoming Shows
              </h3>
              <p className="text-gray-400 mb-8">
                Check back soon for new tour dates and announcements
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Performances */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Past Performances
            </h2>
            <p className="text-gray-400 text-lg">
              Highlights from recent shows and festivals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastShows.map((show) => (
              <PastShowCard key={show.id} show={show} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-24">
        <div className="relative px-4 mx-auto max-w-4xl sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Never Miss a Show
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Get notified when new tour dates are announced
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

          <p className="mt-4 text-gray-500 text-sm">
            We respect your privacy. Unsubscribe anytime.
          </p>
        </div>
      </section>

      </div>
      {/* End Unified Background Wrapper */}

      <Footer />
    </div>
  );
}

function PastShowCard({ show }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
      {/* Image Placeholder */}
      <div className="relative aspect-video bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <svg className="w-20 h-20 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-semibold bg-black/70 text-white rounded-full backdrop-blur-sm">
            {show.type}
          </span>
        </div>

        {/* Play Button Overlay */}
        {show.videoUrl && (
          <a
            href={show.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center bg-black/0 hover:bg-black/40 transition-all duration-300 group"
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300 shadow-lg shadow-purple-500/50">
              <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">
              {show.venue}
            </h3>
            <p className="text-gray-400 text-sm">{show.location}</p>
          </div>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(show.date)}
          </div>
        </div>

        {/* Stage and Attendance */}
        {(show.stage || show.attendance) && (
          <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-gray-800">
            {show.stage && (
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <span className="text-gray-400">{show.stage}</span>
              </div>
            )}
            {show.attendance && (
              <div className="flex items-center gap-2 text-sm">
                <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-gray-400">{show.attendance} attendees</span>
              </div>
            )}
          </div>
        )}

        {/* Highlights */}
        <p className="text-gray-400 text-sm leading-relaxed mb-4">
          {show.highlights}
        </p>

        {/* Watch Video Link */}
        {show.videoUrl && (
          <a
            href={show.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white font-medium rounded-lg transition-all group"
          >
            <svg className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            Watch Performance
          </a>
        )}
      </div>
    </div>
  );
}

function ShowCard({ show }) {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="group bg-black rounded-xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
      {/* Event Header */}
      <div className="relative bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-indigo-500/20 p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 text-xs font-semibold bg-black/50 text-white rounded-full backdrop-blur-sm">
            {show.type}
          </span>
          {show.status === 'selling-fast' && (
            <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full">
              Selling Fast
            </span>
          )}
        </div>

        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
        </div>

        <h3 className="text-2xl font-bold text-white mb-1">
          {show.venue}
        </h3>
        <p className="text-gray-300 text-sm">{show.location}</p>
      </div>

      {/* Event Details */}
      <div className="p-6">
        {/* Date and Time */}
        <div className="space-y-2 mb-4 pb-4 border-b border-gray-800">
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="font-medium">{formatDate(show.date)}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Set Time: {show.setTime}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {show.description}
        </p>

        {/* Supporting Acts */}
        {show.supporting && show.supporting.length > 0 && (
          <div className="mb-4">
            <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
              Also Featuring
            </h4>
            <div className="flex flex-wrap gap-2">
              {show.supporting.map((artist, index) => (
                <span
                  key={index}
                  className="px-2 py-1 text-xs bg-gray-900 text-gray-400 rounded border border-gray-800"
                >
                  {artist}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Event Info Grid */}
        <div className="grid grid-cols-2 gap-3 mb-6 p-4 bg-gray-900/50 rounded-lg">
          <div>
            <p className="text-xs text-gray-500 mb-1">Tickets</p>
            <p className="text-sm font-semibold text-white">{show.priceRange}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Capacity</p>
            <p className="text-sm font-semibold text-white">{show.capacity}</p>
          </div>
        </div>

        {/* Ticket Button */}
        <a
          href={show.ticketUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-300"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
          </svg>
          Get Tickets
        </a>

        {/* Secondary Actions */}
        <div className="grid grid-cols-2 gap-3 mt-3">
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all group">
            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Calendar
          </button>
          <a
            href={show.venueUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all group"
          >
            <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Venue
          </a>
        </div>
      </div>
    </div>
  );
}
