import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function LightLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-brand-cream text-black min-h-screen flex flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
