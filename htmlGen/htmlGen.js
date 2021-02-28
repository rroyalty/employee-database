const htmlGen = {
    top: `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.2/css/all.css" integrity="sha384-vSIIfh2YWi9wW0r9iZe7RJPrKwp6bG+s9QZMoITbCckVJqGCCRhc+ccxNcdpHuYu" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
      <title>Employee Cards</title>
    </head>
    
    <body>
      <section class="hero is-success is-small has-text-centered">
          <div class="hero-body">
              <p class="title">
              Employee Database
              </p>
              <p class="subtitle">
              Take a look at your team!
              </p>
          </div>
      </section>
      
      <section> 
          <div class="container is-fluid" style="margin:10px">
              <div class="columns is-mobile is-multiline is-centered">`,
    bottom: `
        </div>
    </div>
    </section>

    </body>
    </html>`,
    employee: (role, id, name, email, icon, uniqueAttTitle, uniqueAttVal) => {
        return `    <div class="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop is-one-third-widescreen is-one-quarter-fullhd">
        <div class="card">
            <header class="card-header">
                <p class="card-header-title">${role}</p>
                <div class="card-header-icon" aria-label="icon" style="cursor:default">
                    <span class="icon">
                        <i class="fas fa-${icon}" aria-hidden="true"></i>
                    </span>
                </div>
            </header>
            <div class="card-content">
                <div class="columns is-mobile is-multiline is-centered">
                    <div class="column is-one-quarter">
                        <p>ID #:</p>
                        <p>Name:</p>
                        <p>E-mail:</p>
                        <p>${uniqueAttTitle}:</p>
                    </div>
                    <div class="column is-three-quarters">
                        <p>${id}</p>
                        <p>${name}</p>
                        <a href="mailto: ${email}" target="_blank">${email}</a>
                        ${uniqueAttVal}
                    </div>
                </div>
            </div>
        </div>
    </div>`
    }}

    module.exports = htmlGen;
