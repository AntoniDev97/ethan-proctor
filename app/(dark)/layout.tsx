import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function DarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-brand-dark text-brand-cream min-h-screen flex flex-col">
      <Header />
      <main className="grow">{children}</main>
      <Footer />
    </div>
  );
}
