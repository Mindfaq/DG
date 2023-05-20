let cards = [
    "Harry Potter",
    "Titanic",
    "Mardröm",
    "Fortnite",
    "Gungande stol",
    "Hårtork",
    "Regnbåge",
    "Drake (inte rapparen....",
    "Gammal",
    "Kittla",
    "Bitcoin",
    "Finance bro",
    "Trum pinnar",
    "Kattunge",
    "Strand",
    "Mörkt",
    "Flygande matta",
    "Drottning",
    "Zlatan Ibrahimovic",
    "Tennis",
    "Pingis",
    "Gråta",
    "Bowlingklot",
    "Tandborste",
    "Tors hammare/Mjölnir",
    "Jul träd",
    "Ryggskott",
    "Magnet",
    "Solbränd",
    "Mikrovågsugn",
    "Bränd mat",
    "Dyka",
    "Be till gud",
    "Mygga",
    "Festa",
    "Väckarklocka",
    "Hungrig",
    "Charader",
    "Enhjuling",    
    "bok",
    "bil",
    "dator",
  ];
  
  let timer = 0;
  let sips = 0;
  let interval;
  
  function startGame() {
    newCharade(); // get a new card
  
    // start timer
    timer = 0;
    document.getElementById("timer").innerHTML = "Time: " + timer;
    interval = setInterval(() => {
      timer += 1;
      document.getElementById("timer").innerHTML = "Time: " + timer;
  
      if (timer % 10 === 0) {
        sips += 1;
        document.getElementById("sips").innerHTML = "Sips: " + sips;
      }
      
      if (timer >= 30) {
        stopGame();
      }
    }, 1000);
  
    // disable start button, enable skip and stop buttons
    document.getElementById("startBtn").disabled = true;
    document.getElementById("skipBtn").disabled = false;
    document.getElementById("stopBtn").disabled = false;
  }
  
  function newCharade() {
    let cardIndex = Math.floor(Math.random() * cards.length);
    document.getElementById("charadeCard").innerHTML = "Your card is: " + cards[cardIndex];
  }
  
  function stopGame() {
    clearInterval(interval);
    document.getElementById("charadeCard").innerHTML = "Done!";
    
    // disable skip and stop buttons, enable start button
    document.getElementById("startBtn").disabled = false;
    document.getElementById("skipBtn").disabled = true;
    document.getElementById("stopBtn").disabled = true;
  }
  