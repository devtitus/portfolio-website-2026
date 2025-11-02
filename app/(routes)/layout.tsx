import { Navbar, Footer } from "@/components/layouts/index"

export default function RoutesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  );
}