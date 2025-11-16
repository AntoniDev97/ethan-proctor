// components/layout/Footer.tsx

import Container from "./Container";

const Footer = () => {
  return (
    <footer className="footer-bg py-20">
      <Container>
        <div className="flex items-center gap-6 mb-8">
          <h2
            className="text-6xl md:text-8xl font-bold uppercase mb-0"
            style={{ fontFamily: '"din-2014", sans-serif' }}
          >
            Get in Touch
          </h2>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center gap-10">
          <div className="text-4xl font-bold">{`→`}</div>
          <nav className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold uppercase tracking-wider hover:underline"
            >
              Instagram
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold uppercase tracking-wider hover:underline"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ethan@example.com"
              className="text-lg font-semibold uppercase tracking-wider hover:underline"
            >
              Email
            </a>
          </nav>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
