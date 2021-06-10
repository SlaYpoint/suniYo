import { v4 as uuidv4 } from "uuid";

const data = [
  {
    title_short: "Beaver Creek",
    album: {
      cover:
        "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
    },
    artist: {
      name: "Aso, Middle School, Aviino",
    },
    preview: "https://mp3.chillhop.com/serve.php/?mp3=10075",
    id: uuidv4(),
    active: true,
  },
  {
    title_short: "Daylight",
    album: {
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
    },
    artist: {
      name: "Aiguille",
    },
    preview: "https://mp3.chillhop.com/serve.php/?mp3=9272",
    id: uuidv4(),
    active: false,
  },
  {
    title_short: "Keep Going",
    album: {
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    },
    artist: {
      name: "Swørn",
    },
    preview: "https://mp3.chillhop.com/serve.php/?mp3=9222",
    id: uuidv4(),
    active: false,
  },
  {
    title_short: "Nightfall",
    album: {
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
    },
    artist: {
      name: "Aiguille",
    },
    preview: "https://mp3.chillhop.com/serve.php/?mp3=9148",
    id: uuidv4(),
    active: false,
  },
  {
    title_short: "Reflection",
    album: {
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
    },
    artist: {
      name: "Swørn",
    },
    preview: "https://mp3.chillhop.com/serve.php/?mp3=9228",
    id: uuidv4(),
    active: false,
  }
];

export default data;