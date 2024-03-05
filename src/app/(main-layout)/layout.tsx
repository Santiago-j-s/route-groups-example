export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h1>Main Layout</h1>
      {children}
    </section>
  );
}
