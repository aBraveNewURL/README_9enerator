function markdownShell() {
return `<!DOCTYPE html>
<html lang="en-US">

<head>
  <meta charset="UTF-8">
  <title>${data.name[0]}</title>
 </head>

<h1 id="titleInput">${questions.name[0]}</h1>

  <body>
  <div>
    <ul>
        <li>${questions.name[1]}</li>
        <li>${questions.name[2]}</li>
        <li>${questions.name[3]}</li>
        <li>${questions.name[4]}</li>
        <li>${questions.name[5]}</li>
    </ul>
  </div
  </body>

</html>`
}

module.exports = markdownShell;