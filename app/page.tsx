type Props = {
  params: {
    id: string;
  }
}

export default function FahrzeugDetail({ params }: Props) {
  const { id } = params;import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 40 }}>
      <h1>Willkommen bei marioo.ch 🚗</h1>
      <p>Besuche ein Fahrzeugbeispiel:</p>
      <Link href="/autos/123">
        <button style={{ marginTop: 20, padding: '10px 20px' }}>Fahrzeug ansehen</button>
      </Link>
    </main>
  );
}