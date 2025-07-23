// backend/server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('YOUR_MONGODB_URI_HERE', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const RezervacijaSchema = new mongoose.Schema({
  ime: String,
  email: String,
  telefon: String,
  datum: String,
  lokacija: String,
  napomene: String,
});

const Rezervacija = mongoose.model('Rezervacija', RezervacijaSchema);

app.post('/api/rezervacija', async (req, res) => {
  try {
    const novaRezervacija = new Rezervacija(req.body);
    await novaRezervacija.save();
    res.status(200).json({ message: 'Rezervacija uspešno sačuvana' });
  } catch (error) {
    res.status(500).json({ message: 'Greška pri čuvanju rezervacije', error });
  }
});

app.get('/', (req, res) => {
  res.send('Rent A Konobar API je aktivan');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server pokrenut na portu ${PORT}`);
});