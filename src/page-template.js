// function to populate the managerCard with the info from team array
managerCard = team => {
  // create a local empty variable that will store the info for each card
  var cards = '';
  team.forEach(position => {
    // validates the roll from wich we are creating the card and takes the info
    if (position.role === "Manager") {
      cards = cards + `
      <div class="card shadow m-3 cards">
        <div class="card-header bg-primary text-white font-weight-bold">
          <h4>${position.name}</h4>
          <h5><i class="fas fa-mug-hot"></i> ${position.role}</h5>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group list-group-flush border my-3">
            <li class="list-group-item">ID: ${position.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${position.email}" class="card-link">${position.email}</a></li>
            <li class="list-group-item">Office: ${position.office}</li>
          </ul>
        </div>
      </div>
      `;
    } 
  });
  return cards;
};

engineerCard = team => {
  var cards = '';
  team.forEach(position => {
    if (position.role === "Engineer") {
      cards = cards + `
      <div class="card shadow m-3 cards">
        <div class="card-header bg-primary text-white font-weight-bold">
          <h4>${position.name}</h4>
          <h5><i class="fas fa-glasses"></i> ${position.role}</h5>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group list-group-flush border my-3">
            <li class="list-group-item">ID: ${position.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${position.email}" class="card-link">${position.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${position.gitHub}" class="card-link" target="_blank">${position.gitHub}</a></li>
          </ul>
        </div>
      </div>
      `;
    }
  });
  return cards;
};

internCard = team => {
  var cards = '';
  team.forEach(position => {
    if (position.role === "Intern") {
      cards = cards + `
      <div class="card shadow m-3 cards">
        <div class="card-header bg-primary text-white font-weight-bold">
          <h4>${position.name}</h4>
          <h5><i class="fas fa-user-graduate"></i> ${position.role}</h5>
        </div>
        <div class="card-body bg-light">
          <ul class="list-group list-group-flush border my-3">
            <li class="list-group-item">ID: ${position.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${position.email}" class="card-link" >${position.email}</a></li>
            <li class="list-group-item">School: ${position.school}</li>
          </ul>
        </div>
      </div>
      `;
    }
  });
  return cards;
};

generatePage = team => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team Generator</title>
  <script src="https://kit.fontawesome.com/515cd316f8.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <header style = "height: 10vh;" class = "d-flex align-items-center bg-danger justify-content-center mb-5">
      <h1 class ="text-light"> My Team </h1>
    </header>
    <main>
    <div class="justify-content-center align-items-center row card-container">
      ${managerCard(team)}
      ${engineerCard(team)}
      ${internCard(team)}
    </div>
    <main>
  </body>
  <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </html>
  `;
};

module.exports = generatePage;


