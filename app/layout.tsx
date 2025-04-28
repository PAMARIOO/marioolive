// app/layout.tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
