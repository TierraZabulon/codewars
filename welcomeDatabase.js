// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

// The Task
// Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
// Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database, or in the event of an invalid input.
// The Database

function greet(language) {
  let db = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };

  switch (language) {
    case "english":
      return db.english;
      break;
    case "czech":
      return db.czech;
      break;
    case "danish":
      return db.danish;
      break;
    case "dutch":
      return db.dutch;
      break;
    case "estonian":
      return db.estonian;
      break;
    case "finnish":
      return db.finnish;
      break;
    case "flemish":
      return db.flemish;
      break;
    case "french":
      return db.french;
      break;
    case "german":
      return db.german;
      break;
    case "irish":
      return db.irish;
      break;
    case "italian":
      return db.italian;
      break;
    case "latvian":
      return db.latvian;
      break;
    case "lithuanian":
      return db.lithuanian;
      break;
    case "polish":
      return db.polish;
      break;
    case "spanish":
      return db.spanish;
      break;
    case "swedish":
      return db.swedish;
      break;
    case "welsh":
      return db.welsh;
      break;
    default:
      return "Welcome";
      break;
  }
}
