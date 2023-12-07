module.exports = {
    notFoundPage: (req, res) => res.status(404).send(`
      <html>
        <head>
          <style>
            body { color: red; }
            h1 { color: blue; }
          </style>
        </head>
        <body>
          <img src="/img/branding/logo_light_horizontal.svg" alt="Logo">
          <h1>404: No se encuentra la página</h1>
          <p>Lo siento, este error está en utils</p>
        </body>
      </html>
    `),
  }
  