// const file = require ("./ArtistSales.json")
const songs = require ("./SongData.json")



document.addEventListener("DOMContentLoaded", ()=>{
  console.log(songs[0].acousticness)
})
  
//methods to populate chart data 
function createAccRows(arr) {
  const accRows = []; 
  for(let i = 0; i < arr.length; i++){
    accRows.push([arr[i].name + ", "+ arr[i].artists, arr[i].acousticness])
  }
  return accRows; 
};

//dance-data 
function createDanceRows(arr) {
  const danceRows = []; 
  for(let i = 0; i < arr.length; i++){
    danceRows.push([arr[i].name + ", "+ arr[i].artists, arr[i].danceability])
  }
  return danceRows; 
};

//Popular-data 
function createPopularRows(arr) {
  const popularityRows = []; 
  for(let i = 0; i < arr.length; i++){
    popularityRows.push([arr[i].name + ", "+ arr[i].artists, arr[i].popularity])
  }
  return popularityRows; 
};

//Energy-data 
function createEnergyRows(arr) {
  const energyRows = []; 
  for(let i = 0; i < arr.length; i++){
    energyRows.push([arr[i].name + ", "+ arr[i].artists, arr[i].energy])
  }
  return energyRows; 
};

//Energy-data 
function createTempoRows(arr) {
  const tempoRows = []; 
  for(let i = 0; i < arr.length; i++){
    tempoRows.push([arr[i].name + ", "+ arr[i].artists, arr[i].tempo])
  }
  return tempoRows; 
};


//Accoustic Chart
anychart.onDocumentReady(function() {
  anychart.theme(anychart.themes.darkBlue)
  // set the data
  var data = {
      header: ["Song Title", "Accouticness (dB)"],
      rows: 
        createAccRows(songs)
  };

  // create the chart
  var chart = anychart.column();

  // add the data
  chart.data(data);

  // set the chart title
  chart.title("Accoustic Levels, by Song");

  // draw
  chart.container("Accoustic");
  chart.draw();
});

//Danceability chart 
anychart.onDocumentReady(function() {
  anychart.theme(anychart.themes.darkBlue)

  var data = {
      header: ["Song Title", "Danceability"],
      rows: 
        createDanceRows(songs)
  };

  var chart = anychart.column();

  chart.data(data);

  chart.title("Danceability, by Song");

  chart.container("Dance");
  chart.draw();
});

//Popularity chart 
anychart.onDocumentReady(function() {
  anychart.theme(anychart.themes.darkBlue)

  var data = {
      header: ["Song Title", "Popularity"],
      rows: 
        createPopularRows(songs)
  };

  var chart = anychart.column();

  chart.data(data);

  chart.title("Popularity, by Song");

  chart.container("Popular");
  chart.draw();
});

//Energy chart 
anychart.onDocumentReady(function() {

  anychart.theme(anychart.themes.darkBlue)
  
  var data = {
      header: ["Song Title", "Energy"],
      rows: 
      createEnergyRows(songs)
  };

  var chart = anychart.column();

  chart.data(data);

  chart.title("Energy, by Song");

  chart.container("Energy");
  chart.draw();
});

//Tempo chart 
anychart.onDocumentReady(function() {

  anychart.theme(anychart.themes.darkBlue)

  var data = {
      header: ["Song Title", "Tempo"],
      rows: 
      createTempoRows(songs)
  };

  var chart = anychart.column();


  chart.data(data);

  chart.title("Tempo, by Song");

  chart.container("Tempo");
  chart.draw();
});


// attempted to create carousel in js didnt work out
// let flkty = new Flickity('.graphs', {
//   contain: true,
//   cellAlign: 'left'
// }); 
