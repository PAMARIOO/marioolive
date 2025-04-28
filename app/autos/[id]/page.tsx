import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function FahrzeugDetail({ params }: { params: { id: string } }) {
  const { id } = params;

  const autos = [
    {
      id: '123',
      marke: 'BMW',
      modell: '320i Touring',
      preis: 18500,
      währung: 'CHF',
      erstzulassung: '2019-03',
      kilometer: 75500,
      treibstoff: 'Benzin',
      getriebe: 'Automat',
      leistung_ps: 184,
      farbe: 'Blau',
      türen: 5,
      sitze: 5,
      beschreibung: 'Scheckheftgepflegt, 1. Hand, Winterreifen inkl.',
      bilder: [],
      plz: '8004',
      ort: 'Zürich',
      anbieter: {
        typ: 'Händler',
        name: 'Auto Mario GmbH',
        telefon: '+41 79 123 45 67',
        email: 'info@marioo.ch'
      }
    }
  ];

  const auto = autos.find((a) => a.id === id);

  if (!auto) {
    notFound();
    return null; // GANZ WICHTIG: Seite korrekt abschließen bei "nicht gefunden"
  }

  return (
    <main style={{ padding: 40 }}>
      <h1>{auto.marke} {auto.modell}</h1>
      <p><strong>Preis:</strong> {auto.preis} {auto.währung}</p>
      <p><strong>Erstzulassung:</strong> {auto.erstzulassung}</p>
      <p><strong>Kilometer:</strong> {auto.kilometer.toLocaleString()} km</p>
      <p><strong>Treibstoff:</strong> {auto.treibstoff}</p>
      <p><strong>Getriebe:</strong> {auto.getriebe}</p>
      <p><strong>Leistung:</strong> {auto.leistung_ps} PS</p>
      <p><strong>Farbe:</strong> {auto.farbe}</p>
      <p><strong>Türen/Sitze:</strong> {auto.türen} / {auto.sitze}</p>
      <p><strong>PLZ/Ort:</strong> {auto.plz} {auto.ort}</p>
      <p><strong>Beschreibung:</strong> {auto.beschreibung}</p>

      <h2>Anbieter</h2>
      <p><strong>Typ:</strong> {auto.anbieter.typ}</p>
      <p><strong>Name:</strong> {auto.anbieter.name}</p>
      <p><strong>Telefon:</strong> {auto.anbieter.telefon}</p>
      <p><strong>Email:</strong> {auto.anbieter.email}</p>

      <div style={{ marginTop: 20 }}>
        <button onClick={() => window.history.back()} style={{ padding: '10px 20px' }}>
          🔙 Zurück
        </button>
      </div>
    </main>
  );
}

