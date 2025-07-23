import React, { useState } from 'react';

type Konobar = {
  id: string;
  ime: string;
  iskustvo: number;
  ocena: number;
  opis: string;
};

const konobari: Konobar[] = [
  { id: '1', ime: 'Marko Marković', iskustvo: 5, ocena: 4.7, opis: 'Iskusan konobar sa radom u vrhunskim restoranima.' },
  { id: '2', ime: 'Jelena Jovanović', iskustvo: 3, ocena: 4.9, opis: 'Profesionalna i ljubazna, specijalizovana za evente.' },
];

export default function App() {
  const [izabrani, setIzabrani] = useState<Konobar | null>(null);
  const [ime, setIme] = useState('');
  const [datum, setDatum] = useState('');

  function rezervisi() {
    if (!ime || !datum) {
      alert('Molimo unesite ime i datum.');
      return;
    }
    alert(`Uspešno ste rezervisali ${izabrani?.ime} za ${datum}.`);
  }

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 20, fontFamily: 'Arial' }}>
      <h1>Rent A Konobar</h1>

      {!izabrani ? (
        <>
          <h2>Dostupni konobari</h2>
          <ul>
            {konobari.map(k => (
              <li key={k.id} onClick={() => setIzabrani(k)} style={{ marginBottom: 10, cursor: 'pointer' }}>
                <strong>{k.ime}</strong> – Iskustvo: {k.iskustvo} god. – Ocena: {k.ocena.toFixed(1)}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <button onClick={() => setIzabrani(null)}>&larr; Nazad</button>
          <h2>{izabrani.ime}</h2>
          <p>{izabrani.opis}</p>
          <p><strong>Iskustvo:</strong> {izabrani.iskustvo} godina</p>
          <p><strong>Ocena:</strong> {izabrani.ocena.toFixed(1)}</p>

          <h3>Rezervacija</h3>
          <input type="text" placeholder="Vaše ime" value={ime} onChange={e => setIme(e.target.value)} style={{ width: '100%', marginBottom: 10, padding: 8 }} />
          <input type="date" value={datum} onChange={e => setDatum(e.target.value)} style={{ width: '100%', marginBottom: 10, padding: 8 }} />
          <button onClick={rezervisi} style={{ padding: '10px 20px' }}>Rezerviši</button>
        </>
      )}
    </div>
  );
}
