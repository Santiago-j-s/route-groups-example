export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section>
      <h1>Dashboard Layout</h1>
      {children}
    </section>
  );
}
