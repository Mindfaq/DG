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
    "midsommar",
    "kanelbulle",
    "lucia",
    "fotboll",
    "kungafamiljen",
    "väder",
    "snö",
    "regn",
    "sol",
    "stjärna",
    "buss",
    "tåg",
    "kaffe",
    "te",
    "glass",
    "stränder",
    "skola",
    "lärare",
    "student",
    "musik",
    "film",
    "tvättstuga",
    "djur",
    "katt",
    "hund",
    "museum",
    "restaurang",
    "kök",
    "trädgård",
    "cykel",
    "sjukhus",
    "bibliotek",
    "sport",
    "mat",
    "frukt",
    "grönsaker",
    "blommor",
    "byggnad",
    "stad",
    "land",
    "semester",
    "arbete",
    "lekplats",
    "park",
    "affär",
    "köpcentrum",
    "fest",
    "jul",
    "påsk",
    "vinter",
    "sommar",
    "höst",
    "vår",
    "resa",
    "böcker",
    "festival",
    "konst",
    "historia",
    "teater",
    "trollkarl",
    "vetenskap",
    "universum",
    "fiske",
    "vandring",
    "natur",
    "berg",
    "sjö",
    "öken",
    "djungel",
    "trummor",
    "gitarr",
    "piano",
    "trumpet",
    "violin",
    "opera",
    "ballet",
    "tårtor",
    "surströmming",
    "sushi",
    "pizza",
    "pasta",
    "hamburgare",
    "sjokolade",
    "vattenfall",
    "regnbåge",
    "solnedgång",
    "soluppgång",
    "fullmåne",
    "stjärnfall",
    "äventyr",
    "dröm",
    "magi",
    "spöke",
    "monster",
    "vampyr",
    "zombie",
    "robot",
    "pirat",
    "riddare",
    "drottning",
    "kung",
    "prinsessa",
    "prins",
    "häxa",
    "troll",
    "älvor",
    "saga",
    "skatt",
    "regn",
    "snögubbe",
    "isberg",
    "grotta",
    "vulkan",
    "pyramid",
    "fyr"
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
  