import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function LightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-brand-dark min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
