// app/page.tsx

import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Willkommen bei marioo.ch 🚗</h1>
      <p>Entdecke unsere Fahrzeugwelt!</p>
      <Link href="/autos/123">
        <button style={{ marginTop: 20, padding: '10px 20px' }}>🚗 Fahrzeug ansehen</button>
      </Link>
    </main>
  );
}
