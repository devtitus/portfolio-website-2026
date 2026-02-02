import { Navbar, Footer } from "@/components/layouts/index";

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="min-h-svh text-[var(--default-text-color)] w-full max-w-full min-w-full">
        {children}
      </main>
      <Footer />
    </>
  );
}
