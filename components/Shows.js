export default function Shows() {
  // Placeholder data - set to empty array to show empty state
  const shows = [];

  // Example data structure (uncomment and populate when you have shows):
  /*
  const shows = [
    {
      id: 1,
      venue: "Electric Arena",
      city: "Toronto",
      country: "Canada",
      date: "2025-12-01T21:00:00",
      ticketUrl: "https://tickets.example.com/cryptocanuck-toronto",
      soldOut: false,
      eventType: "Headline Show"
    }
  ];
  */

  return (
    <section id="shows" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Upcoming Shows
          </h2>
          <p className="text-gray-400 text-lg">
            Catch me live at these upcoming events
          </p>
        </div>

        {/* Shows List or Empty State */}
        {shows.length > 0 ? (
          <div className="space-y-4 max-w-4xl mx-auto">
            {shows.map((show) => (
              <ShowCard key={show.id} show={show} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </div>
    </section>
  );
}

function ShowCard({ show }) {
  const showDate = new Date(show.date);
  const dateFormatted = showDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
  const timeFormatted = showDate.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className={`group bg-gray-900 rounded-xl p-6 border ${
      show.soldOut ? 'border-gray-800 opacity-60' : 'border-gray-800 hover:border-purple-500/50'
    } transition-all duration-300`}>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Date */}
        <div className="flex items-center gap-6">
          <div className="flex-shrink-0 text-center">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              {showDate.getDate()}
            </div>
            <div className="text-sm text-gray-400 uppercase tracking-wider">
              {showDate.toLocaleDateString('en-US', { month: 'short' })}
            </div>
          </div>

          {/* Event Details */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="text-xl font-semibold text-white">
                {show.venue}
              </h3>
              {show.soldOut && (
                <span className="px-2 py-1 text-xs font-semibold bg-red-500/20 text-red-400 rounded">
                  SOLD OUT
                </span>
              )}
              {show.eventType && !show.soldOut && (
                <span className="px-2 py-1 text-xs font-semibold bg-purple-500/20 text-purple-400 rounded">
                  {show.eventType}
                </span>
              )}
            </div>
            <p className="text-gray-400">
              {show.city}, {show.country}
            </p>
            <p className="text-gray-500 text-sm mt-1">
              {timeFormatted}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          {!show.soldOut && (
            <a
              href={show.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 text-center"
            >
              Get Tickets
            </a>
          )}
          <button
            onClick={() => {
              // Add to calendar functionality
              alert('Add to calendar functionality - to be implemented');
            }}
            className="px-6 py-3 border border-gray-700 text-gray-300 font-semibold rounded-lg hover:border-purple-500 hover:text-white transition-all duration-300 text-center"
          >
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-800 flex items-center justify-center">
        <svg className="w-12 h-12 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>

      <h3 className="text-2xl font-bold text-white mb-4">
        No Upcoming Shows
      </h3>
      <p className="text-gray-400 mb-8">
        Stay tuned for announcements! Join the newsletter to be the first to know about upcoming performances.
      </p>

      {/* CTA to Newsletter */}
      <a
        href="#newsletter"
        className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
      >
        Join Newsletter
      </a>

      {/* Social Media Follow */}
      <div className="mt-8">
        <p className="text-gray-500 text-sm mb-4">
          Follow for updates:
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="https://twitter.com/cryptocanuck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#1DA1F2] transition-colors"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com/cryptocanuck"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#E4405F] transition-colors"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
