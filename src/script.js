const clockElement = document.getElementById('clock');
const quoteElement = document.getElementById('quote');
const greetingElement = document.getElementById('greeting');
const iframeElement = document.getElementById('spotifyPlaylist');



function updateClock() {
  const now = new Date();
  const hours = now.getHours() % 12 || 12; // Convert to 12-hour format
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const time = `${hours}:${minutes}`;
  clockElement.textContent = time;
}

function setRandomBackgroundImage() {
  const backgroundImages = ['background/classic.jpg', 'background/cafe_jenesais.jpg', 'background/cozy_cabin.jpg', 'background/dark_academia.jpg', 'background/flocus_hollow.jpg', 'background/drivers_seat.jpg', 'background/fall_central_park.jpg', 'background/fuji.jpg', 'background/holiday_street.jpg', 'background/lofi_cafe.jpg', 'background/morning_library.jpg', 'background/pumpkin_patch.jpg', 'background/sakura_street.jpg', 'background/winter_cabin.jpg', 'background/wisdom_forest.jpg'];
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);
  const randomImage = backgroundImages[randomIndex];
  document.getElementById('BackgroundImage').style.backgroundImage = `url(${randomImage})`;
}

function setGreeting() {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayIndex = new Date().getDay();
  const day = days[dayIndex];

  let greetingText;

  switch (day) {
    case 'Sunday':
      greetingText = 'Loving the Sunday vibe?';
      break;
    case 'Monday':
      greetingText = "Monday's a fresh start, hooman! Embrace the possibilities!";
      break;
    case 'Tuesday':
      greetingText = "Tuesday's got nothing on your awesomeness, hooman!";
      break;
    case 'Wednesday':
      greetingText = "Wednesday's looking good on you, hooman!";
      break;
    case 'Thursday':
      greetingText = "Thursday's just a step away from the weekend. You got this, hooman!";
      break;
    case 'Friday':
      greetingText = "Friday's here, hooman! Time to shine and enjoy the weekend vibes!";
      break;
    case 'Saturday':
      greetingText = 'Loving the Saturday vibes? Keep the weekend joy going, hooman!';
      break;
    default:
      greetingText = 'Hello!';
  }

  greetingElement.textContent = greetingText;
}

function updateSpotifyPlaylist() {
  // Generate a random playlist ID or URL each time the page reloads
  const playlists = [
    '0VvruOaNjMu1B57ZefMf7B',
    '37i9dQZF1DXctgIf9k05Pu',
    '2kzTQa3FcDDlJhhITcIBpX',
    '022leh1qff2ArTYAAocO9i',
    '1IE734A2agfLVvkOcL02Al',
    '4wTxU32MgaTXDz1JlcH08C',
    '37i9dQZF1DWYoYGBbGKurt',
    '0owPbYZr8bqzFfpzLmP8UV',
    '0MjjGoktVwQ9npk9almPWn',
    '4Zjli1P13J5mmSCD5iKAXK',
    // Add more playlist IDs or URLs as needed
  ];

  const randomIndex = Math.floor(Math.random() * playlists.length);
  const randomPlaylist = playlists[randomIndex];

  // Update the src attribute of the iframe
  iframeElement.src = `https://open.spotify.com/embed/playlist/${randomPlaylist}?utm_source=generator&theme=0`;
}

// Initial call to set the clock immediately
updateClock();
setRandomBackgroundImage();
setGreeting();
updateSpotifyPlaylist();

// Update the clock every minute
setInterval(updateClock, 60000);
window.addEventListener('load', setRandomBackgroundImage);



const quotes = [
  '"After all this time? Always!" ',
  '"Believe in yourself; youve got this!"',
  '"After all this time? Always!" ',
  '"After all this time? Always!" ',
  '"Persevere. Success follows resilience and determination."',
  '"Love what you do for extraordinary outcomes."',
  '"Success is courage in the face of failure."',
  '"Work hard—where success precedes effort."',
  '"After all this time? Always!" ',
  '"Your attitude shapes your journeys altitude."',
  '"Dream big; possibilities exceed perceived limitations."',
  '"Learn from failure, discover countless paths to success."',
  '"Focus sharp, conquer goals like a warrior."',
  '"Strength emerges in adversitys challenging winds."',
  '"After all this time? Always!" ',
  '"Persist—get up stronger after every fall."',
  '"Courage fuels the journey through peaks and valleys."',
  '"Leadership: Know, go, and show the way."',
  '"After all this time? Always!" ',
  '"Face the sun; shadows retreat behind you."',
  '"When in doubt, go to the library." ',
  '"After all this time? Always!" ',
  '"Don’t let the muggles get you down,"',
];


const randomQuoteIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomQuoteIndex];
quoteElement.textContent = randomQuote;
