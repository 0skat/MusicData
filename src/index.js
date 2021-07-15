// const file = require ("./ArtistSales.json")
const songs = require ("./SongData.json")


function createAlbumInfo(){
  let parent = document.querySelector(".albums"); 
  let unordered = document.createElement("ul"); 
  parent.appendChild(unordered); 

  for(let i = 0; i < songs.length; i++){
    
    let listElement = document.createElement("li"); 
    listElement.dataset.index = i; 
    unordered.appendChild(listElement); 

    let image = document.createElement("img"); 
    listElement.appendChild(image); 

    let imageSrc = songs[i].src; 
    image.setAttribute('class', 'album-art')
    image.setAttribute("src", imageSrc); 

    listElement.addEventListener("click", (e)=> {
      e.preventDefault(); 
      let ulToDelete = document.querySelector(".infoDelete")
      
      if(ulToDelete){
        ulToDelete.remove();
      } 
      displayInfo(e); 
    })
  }
    
}

function displayInfo(e) {
  // console.log(e.currentTarget)
  // console.log(e.currentTarget.dataset)
  displayInfo.called = true; 

  let index = e.currentTarget.dataset.index; 
  let placeData = document.querySelector(".popup");
  let newList = document.createElement("ul")
  newList.setAttribute("class", "infoDelete")
  placeData.appendChild(newList)
  let data = songs[index];
  // console.log(data); 
  

  let keys = Object.keys(data)
  console.log(keys);

  for(let i = 0; i < keys.length; i++){
    let temp = keys[i];
    let newOption = new Option(`${temp}: ${data[temp]}`, data[temp])
    // placeData.innerHTML = `${temp}: ${data[temp]}`
    newList.appendChild(newOption);
  }
  
}




document.addEventListener("DOMContentLoaded", ()=>{
  createAlbumInfo(); 
  
  
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
// function displayInfo(x){
//   type = document.getElementById(`${x}`)
//   if(type.style.display === "none"){
//     type.style.display = "block"
//   }
//   songs[x].forEach(element => {
//     type.innerHTML = song.acousticness; 
//   });
// }

