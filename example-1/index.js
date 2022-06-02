const express = require("express");
const router = require("./router");

const PORT = 3000;

const app = express();

// Karena ini contoh, jadi untuk menyederhanakan kode ini tidak ada middleware selain router

app.use(router);

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
