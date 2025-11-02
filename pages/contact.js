import { useState } from 'react';
import Head from "next/head";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    messageType: 'general',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    // TODO: Implement actual form submission (API route or email service)
    // For now, just simulate submission
    setTimeout(() => {
      setStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      });
      setIsSubmitting(false);
      setFormData({ name: '', email: '', messageType: 'general', message: '' });
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-black min-h-screen">
      <NextSeo
        title="Contact & Press Kit | CryptoCanuck"
        description="Get in touch with CryptoCanuck for show bookings, press inquiries, collaborations, and more. Download the complete press kit with high-resolution photos, logos, biography, and music samples."
        canonical="https://cryptocanuck.com/contact"
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
          <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Connect</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Whether you're interested in bookings, collaborations, press inquiries, or just want to connect - I'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Segmented Contact Information */}
      <section className="relative py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-gray-400">
              Choose the best way to reach out
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {/* Bookings */}
            <div className="p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Show Bookings</h3>
              <p className="text-gray-400 text-sm mb-4">For festival, club, and private event bookings</p>
              <a href="mailto:booking@cryptocanuck.com" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                booking@cryptocanuck.com
              </a>
            </div>

            {/* Press & Media */}
            <div className="p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Press & Media</h3>
              <p className="text-gray-400 text-sm mb-4">For interviews, press releases, and media inquiries</p>
              <a href="mailto:press@cryptocanuck.com" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                press@cryptocanuck.com
              </a>
            </div>

            {/* Collaborations */}
            <div className="p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Collaborations</h3>
              <p className="text-gray-400 text-sm mb-4">For production collabs, remixes, and features</p>
              <a href="mailto:collab@cryptocanuck.com" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                collab@cryptocanuck.com
              </a>
            </div>

            {/* General */}
            <div className="p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
              <div className="w-12 h-12 mb-4 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">General Inquiries</h3>
              <p className="text-gray-400 text-sm mb-4">For everything else or just to say hi</p>
              <a href="mailto:hello@cryptocanuck.com" className="text-purple-400 hover:text-purple-300 transition-colors text-sm font-medium">
                hello@cryptocanuck.com
              </a>
            </div>
          </div>

          {/* Social & Response Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-xl border border-gray-800">
              <h4 className="text-white font-semibold mb-4">Connect on Social Media</h4>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com/cryptocanuck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white rounded-lg transition-all"
                  aria-label="Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/cryptocanuck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white rounded-lg transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://soundcloud.com/cryptocanuck"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white rounded-lg transition-all"
                  aria-label="SoundCloud"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M1.175 12.225c-.051 0-.094.046-.101.1l-.233 2.154.233 2.105c.007.058.05.098.101.098.05 0 .09-.04.099-.098l.255-2.105-.27-2.154c0-.057-.045-.1-.09-.1m.899.828c-.051 0-.09.04-.099.099l-.145 1.326.145 1.281c.009.051.048.09.099.09.05 0 .09-.039.101-.09l.176-1.281-.176-1.326c-.011-.059-.051-.099-.101-.099m1.8-1.465c-.058 0-.106.046-.106.107l-.207 2.559.207 2.458c0 .06.048.106.106.106.061 0 .106-.046.114-.106l.227-2.458-.227-2.559c-.008-.061-.053-.107-.114-.107m.9-.123c-.066 0-.115.052-.122.113l-.179 2.682.179 2.559c.007.061.056.113.122.113.06 0 .11-.052.118-.113l.206-2.559-.206-2.682c-.008-.061-.058-.113-.118-.113m.964-.135c-.075 0-.129.057-.135.128l-.167 2.917.167 2.658c.006.071.06.129.135.129.068 0 .128-.058.135-.129l.193-2.658-.193-2.917c-.007-.071-.067-.128-.135-.128m.9-.122c-.077 0-.136.06-.142.137l-.151 3.039.151 2.742c.006.076.065.137.142.137.074 0 .135-.061.141-.137l.175-2.742-.175-3.039c-.006-.077-.067-.137-.141-.137m.964-.14c-.076 0-.141.063-.146.141l-.138 3.179.138 2.816c.005.077.07.14.146.14.074 0 .14-.063.145-.14l.159-2.816-.159-3.179c-.005-.078-.071-.141-.145-.141m.97-.093c-.084 0-.147.066-.153.15l-.125 3.272.125 2.817c.006.084.069.15.153.15.08 0 .145-.066.151-.15l.146-2.817-.146-3.272c-.006-.084-.071-.15-.151-.15m.97-.009c-.09 0-.158.07-.164.158l-.112 3.281.112 2.728c.006.089.074.157.164.157.089 0 .158-.068.164-.157l.131-2.728-.131-3.281c-.006-.088-.075-.158-.164-.158m11.27 3.264c-.492 0-.979.097-1.432.274-.454-3.98-3.838-7.038-7.937-7.038-.418 0-.833.035-1.238.104-.174.03-.217.048-.217.193v10.592c0 .142.053.188.207.206 0 0 9.47.056 10.617.056 1.869 0 3.384-1.516 3.384-3.385s-1.515-3.386-3.384-3.386"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="p-6 bg-gray-800/50 rounded-xl border border-gray-700">
              <h4 className="text-white font-semibold mb-2">Response Time</h4>
              <p className="text-gray-400 text-sm">
                I typically respond to all inquiries within 24-48 hours. For urgent booking requests, please indicate "URGENT" in your subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-16">
        <div className="px-4 mx-auto max-w-3xl sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Send a Message
            </h2>
            <p className="text-gray-400">
              Fill out the form below and I'll get back to you soon
            </p>
          </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-300 text-sm mb-2">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-300 text-sm mb-2">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Type */}
                <div>
                  <label htmlFor="messageType" className="block text-gray-300 text-sm mb-2">
                    Message Type
                  </label>
                  <select
                    id="messageType"
                    name="messageType"
                    value={formData.messageType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="booking">Booking Request</option>
                    <option value="press">Press & Media</option>
                    <option value="collaboration">Collaboration</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-300 text-sm mb-2">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-gray-700 text-white rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Status Message */}
                {status.message && (
                  <div className={`p-4 rounded-lg ${
                    status.type === 'success'
                      ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                      : 'bg-red-500/20 border border-red-500/50 text-red-400'
                  }`}>
                    {status.message}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all duration-300 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
        </div>
      </section>

      {/* Press Kit Section */}
      <section className="relative py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Press Kit
            </h2>
            <p className="text-gray-400 text-lg">
              High-resolution assets and information for media and promotional use
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {/* Press Kit Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {/* Press Photos */}
              <div className="p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Press Photos</h3>
                    <p className="text-gray-400 text-sm mb-4">High-resolution promotional photos in various formats</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download (ZIP)
                    </a>
                  </div>
                </div>
              </div>

              {/* Logo & Branding */}
              <div className="p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Logo & Branding</h3>
                    <p className="text-gray-400 text-sm mb-4">Logos in PNG, SVG, and EPS formats</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download (ZIP)
                    </a>
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Biography</h3>
                    <p className="text-gray-400 text-sm mb-4">Short and long-form artist bio in PDF and TXT</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download (ZIP)
                    </a>
                  </div>
                </div>
              </div>

              {/* Music Samples */}
              <div className="p-6 bg-black rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-2">Music Samples</h3>
                    <p className="text-gray-400 text-sm mb-4">Top tracks in high-quality WAV format</p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 border border-gray-700 hover:border-purple-500/50 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      Download (ZIP)
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats for Press */}
            <div className="p-8 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10 rounded-xl border border-gray-800">
              <h3 className="text-xl font-bold text-white mb-6 text-center">Quick Stats</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-1">
                    5M+
                  </div>
                  <div className="text-gray-400 text-sm">Total Streams</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-1">
                    100K+
                  </div>
                  <div className="text-gray-400 text-sm">Monthly Listeners</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-1">
                    75+
                  </div>
                  <div className="text-gray-400 text-sm">Live Shows</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-1">
                    25+
                  </div>
                  <div className="text-gray-400 text-sm">Countries</div>
                </div>
              </div>
            </div>

            {/* Download All Button */}
            <div className="mt-8 text-center">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-semibold rounded-lg shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 hover:scale-105 transition-all duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Complete Press Kit
              </a>
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
