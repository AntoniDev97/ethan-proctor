'use client';

import { useState } from 'react';
import { LuLoader, LuSend } from 'react-icons/lu';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(event.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      (event.target as HTMLFormElement).reset();
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col gap-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold uppercase leading-[0.9] font-heading text-white">
              Drop Me<br />A Message
            </h1>
            <p className="text-white text-lg md:text-xl leading-relaxed max-w-2xl">
              If you&apos;d like to chat through any of my projects, design the next big thing or just fancy a chat then fill out the form below!
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full">
            <form onSubmit={onSubmit} className="space-y-8">
              <div className="space-y-2">
                <label htmlFor="name" className="text-base font-bold text-white">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-base font-bold text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-base font-bold text-white">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  placeholder="What is this about?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-base font-bold text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  placeholder="What's on your mind?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              {error && (
                <div className="text-red-400 text-sm bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                  {error}
                </div>
              )}

              {isSuccess ? (
                <div className="text-green-400 text-sm bg-green-400/10 p-4 rounded-xl border border-green-400/20 flex items-center gap-2">
                  <LuSend className="w-4 h-4" />
                  Message sent successfully!
                </div>
              ) : (
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-white text-black font-bold py-4 px-12 rounded-full hover:bg-gray-200 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                >
                  {isLoading ? (
                    <>
                      <LuLoader className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              )}
            </form>
          </div>

          {/* Socials Section */}
          <div className="space-y-6 pt-12">
            <h3 className="text-2xl font-bold text-white">Or visit any of my socials.</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="mailto:proccygfx@gmail.com"
                className="text-white hover:text-gray-300 transition-colors text-lg underline underline-offset-4 decoration-white/30 hover:decoration-white"
              >
                proccygfx@gmail.com
              </a>
              <div className="h-4"></div>
              <a
                href="https://www.instagram.com/proccygfx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors text-lg underline underline-offset-4 decoration-white/30 hover:decoration-white w-fit"
              >
                Instagram
              </a>
              <a
                href="https://www.linkedin.com/in/ethan-proctor-gd"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors text-lg underline underline-offset-4 decoration-white/30 hover:decoration-white w-fit"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
