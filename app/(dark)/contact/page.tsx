'use client';

import { useState } from 'react';
import { LuLoader } from 'react-icons/lu';
import ArrowIcon from '@/app/components/ui/ArrowIcon';
import Container from '@/app/components/layout/Container';

const fieldClasses =
  'w-full bg-transparent border-2 border-black px-4 py-3 text-black text-[clamp(1.125rem,1.7vw,1.8125rem)] focus:outline-none focus:ring-1 focus:ring-black transition-shadow';

const labelClasses = 'block mb-2 text-[clamp(1.125rem,1.7vw,1.8125rem)]';

const socialLinkClasses =
  'w-fit underline underline-offset-4 decoration-1 hover:opacity-60 transition-opacity text-[clamp(1.125rem,1.7vw,1.8125rem)]';

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
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen">
      {/* Drop me a message — cream */}
      <section className="bg-brand-cream text-black py-12 md:py-16">
        <Container>
          <h1 className="font-extrabold tracking-tight leading-[0.95] text-[clamp(3rem,10vw,9rem)]">
            Drop me
            <br />a message
          </h1>
          <p className="text-body-fluid mt-8 max-w-6xl">
            If you&apos;d like to chat through any of my projects, design the
            next big thing or just fancy a chat then fill out the form below!
          </p>

          <form onSubmit={onSubmit} className="mt-12 md:mt-16 space-y-8">
            <div>
              <label htmlFor="name" className={labelClasses}>
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className={fieldClasses}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className={fieldClasses}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={8}
                className={`${fieldClasses} resize-none`}
              />
            </div>

            {error && <p className="text-red-700">{error}</p>}

            {isSuccess ? (
              <p className="text-body-fluid font-extrabold">
                Message sent successfully!
              </p>
            ) : (
              <button
                type="submit"
                disabled={isLoading}
                className="group cta-pill inline-flex items-center gap-2.5 rounded-full border-2 border-current px-5 py-2 text-eyebrow font-extrabold uppercase tracking-[0.12em] disabled:opacity-50"
              >
                {isLoading ? (
                  <LuLoader className="w-4 h-4 animate-spin" aria-hidden />
                ) : (
                  <ArrowIcon className="w-5 h-auto shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                )}
                <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
              </button>
            )}
          </form>
        </Container>
      </section>

      {/* Socials — black */}
      <section className="bg-brand-dark text-brand-cream py-14 md:py-20">
        <Container>
          <p className="text-body-fluid">Or visit any of my socials.</p>

          <div className="mt-6 flex flex-col gap-2">
            <a href="mailto:proccygfx@gmail.com" className={socialLinkClasses}>
              proccygfx@gmail.com
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-2">
            <a
              href="https://www.instagram.com/proccygfx"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClasses}
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/ethan-proctor-gd"
              target="_blank"
              rel="noopener noreferrer"
              className={socialLinkClasses}
            >
              LinkedIn
            </a>
          </div>

          <div className="mt-10 flex flex-col gap-2">
            <a
              href="/Ethan_Proctor_CV_2026.pdf"
              download
              className={socialLinkClasses}
            >
              Download my CV here
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}
