import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // TODO: Implement actual newsletter signup (Mailchimp, ConvertKit, etc.)
    // For now, just simulate submission
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Success! Check your email to confirm your subscription.'
      });
      setIsSubmitting(false);
      setEmail('');
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 via-purple-500/5 to-indigo-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>

      <div className="relative px-4 mx-auto max-w-4xl sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Stay in the Loop
          </h2>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
            Get exclusive updates on new releases, tour announcements, and behind-the-scenes content delivered straight to your inbox.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900 border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all placeholder-gray-500"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300 ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                }`}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>

            {/* Status Message */}
            {status.message && (
              <div className={`mt-4 p-4 rounded-lg ${
                status.type === 'success'
                  ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                  : 'bg-red-500/20 border border-red-500/50 text-red-400'
              }`}>
                {status.message}
              </div>
            )}

            {/* Privacy Note */}
            <p className="mt-4 text-gray-500 text-sm">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </form>

          {/* What You'll Get */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">New Releases</h4>
                <p className="text-gray-400 text-sm">Be the first to hear new tracks and exclusive previews</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Tour Dates</h4>
                <p className="text-gray-400 text-sm">Early access to tickets and show announcements</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Exclusive Content</h4>
                <p className="text-gray-400 text-sm">Behind-the-scenes updates and production tips</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
