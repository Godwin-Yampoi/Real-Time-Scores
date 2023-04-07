document.addEventListener('DOMContentLoaded', function() {
  // Get the scoreboard element
  var scoreboardText = document.getElementById('scoreboard-text');}

  // Fetch the live scores and update the scoreboard
  fetch('https://api.sportradar.us/soccer/trial/v4/en/players/sr:player:159665/summaries.xml?api_key=Godwin  ',) {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'api-football-v1.p.rapidapi.com',
      'x-rapidapi-key': 'Godwin'
    },
    qs: {
      live: 'all'
    }
  })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      scoreboardText.innerHTML = '';
      for (var i = 0; i < data.response.length; i++) {
        var fixture = data.response[i].fixture;
        var scoreText = fixture.homeTeam.name + ' ' + fixture.score.fulltime.home + ' - ' + fixture.score.fulltime.away + ' ' + fixture.awayTeam.name;
        var scoreNode = document.createTextNode(scoreText);
        scoreboardText.appendChild(scoreNode);
        scoreboardText.appendChild(document.createElement('br'));
      }
    })
    .catch(function(error) {
      scoreboardText.innerHTML = 'Error: ' + error.message;
    });

  // Get the leagues element and the league scores button
  var leaguesSelect = document.getElementById('leagues');
  var leagueScoresButton = document.getElementById('league-scores');

  // Fetch the available leagues and add them to the leagues select element
  fetch('https://api.sportradar.us/soccer/trial/v4/en/players/sr:player:159665/summaries.xml?api_key=Godwin  '), {
    method: 'Livescores'}
