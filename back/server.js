const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Servir le dossier "front" avec les fichiers HTML, CSS, JS
app.use(express.static(path.join(__dirname, "../front")));

// Rediriger vers la page inscription par défaut
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../front", "inscription.html"));
});

// Si tu veux une route pour connexion.html
app.get("/connexion", (req, res) => {
  res.sendFile(path.join(__dirname, "../front", "connexion.html"));
});

// Lancer le serveur
app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
