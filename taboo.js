let cards = [
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
  let penalties = 0;
  let score = 0;
  let interval;
  
  function startGame() {
    newTaboo();
  
    timer = 0;
    score = 0;
    document.getElementById("timer").innerHTML = "Time: " + timer;
    document.getElementById("score").innerHTML = "Score: " + score;
    interval = setInterval(() => {
      timer += 1;
      document.getElementById("timer").innerHTML = "Time: " + timer;
  
      if (timer % 10 === 0) {
        penalties += 1;
        document.getElementById("penalties").innerHTML = "Penalties: " + penalties;
      }
      
      if (timer >= 30) {
        stopGame();
      }
    }, 1000);
  
    document.getElementById("startBtn").disabled = true;
    document.getElementById("skipBtn").disabled = false;
    document.getElementById("correctBtn").disabled = false;
    document.getElementById("stopBtn").disabled = false;
  }
  
  function newTaboo() {
    let cardIndex = Math.floor(Math.random() * cards.length);
    let card = cards[cardIndex];
    document.getElementById("tabooCard").innerHTML = "Your word is: " + card;
  }
  
  function correctGuess() {
    score += 1;
    document.getElementById("score").innerHTML = "Score: " + score;
    newTaboo();
  }
  
  function stopGame() {
    clearInterval(interval);
    document.getElementById("tabooCard").innerHTML = "Done!";
    
    document.getElementById("startBtn").disabled = false;
    document.getElementById("skipBtn").disabled = true;
    document.getElementById("correctBtn").disabled = true;
    document.getElementById("stopBtn").disabled = true;
  }
  