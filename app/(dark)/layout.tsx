import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function DarkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-brand-dark text-[#e5e5e5] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
