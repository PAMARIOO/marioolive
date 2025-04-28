// app/page.tsx

import Link from 'next/link';
// app/page.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Willkommen bei marioo.ch 🚗</h1>
      <p>Finde dein Fahrzeug einfach und schnell!</p>
      <Link href="/autos/123">
        <button style={{ marginTop: 20, padding: '10px 20px', fontSize: 18 }}>
          🚘 Fahrzeug anschauen
        </button>
      </Link>
    </main>
  );
}
