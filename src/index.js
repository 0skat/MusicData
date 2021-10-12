// const file = require ("./ArtistSales.json")
const { select, html } = require("d3");
const songs = require ("./SongData.json");
let chartVariable;
let count = 0; 

document.addEventListener("DOMContentLoaded", ()=>{
  options(); 
  printPDF();
  // createAlbumInfo(); 
  // search(); 
  // addElement(); 
})

// function createAlbumInfo(){
//   let parent = document.querySelector(".albums"); 
//   let unordered = document.createElement("ul"); 
//   parent.appendChild(unordered); 

//   for(let i = 0; i < songs.length; i++){
    
//     let listElement = document.createElement("li"); 
//     listElement.dataset.index = i; 
//     unordered.appendChild(listElement); 

//     let image = document.createElement("img"); 
//     listElement.appendChild(image); 

//     let imageSrc = songs[i].src; 
//     image.setAttribute('class', 'album-art')
//     image.setAttribute("src", imageSrc); 

//     listElement.addEventListener("click", (e)=> {
//       e.preventDefault(); 
//       let ulToDelete = document.querySelector(".infoDelete")
      
//       if(ulToDelete){
//         ulToDelete.remove();
//       } 
//       displayInfo(e); 
//     })
//   }
    
// }

// function displayInfo(e) {
//   displayInfo.called = true; 

//   let index = e.currentTarget.dataset.index; 
//   let placeData = document.querySelector(".popup");
//   let newList = document.createElement("ul")
//   newList.setAttribute("class", "infoDelete")
//   placeData.appendChild(newList)
//   let data = songs[index];
  

//   let keys = Object.keys(data)


//   for(let i = 0; i < keys.length; i++){
//     let temp = keys[i];
//     let newOption = new Option(`${temp}: ${data[temp]}`, data[temp])
//     // placeData.innerHTML = `${temp}: ${data[temp]}`
//     newList.appendChild(newOption);
//   }
  
// }




  
// //methods to populate chart data 
// function createAccRows(arr) {
//   const accRows = []; 
//   for(let i = 0; i < arr.length; i++){
//     accRows.push([arr[i].name + ", "+ arr[i].artists, arr[i].acousticness])
//   }
//   return accRows; 
// };

// //dance-data 
// function createDanceRows(arr) {
//   const danceRows = []; 
//   for(let i = 0; i < arr.length; i++){
//     danceRows.push([arr[i].name + ", "+ arr[i].artists, arr[i].danceability])
//   }
//   return danceRows; 
// };

// //Popular-data 
// function createPopularRows(arr) {
//   const popularityRows = []; 
//   for(let i = 0; i < arr.length; i++){
//     popularityRows.push([arr[i].name + ", "+ arr[i].artists, arr[i].popularity])
//   }
//   return popularityRows; 
// };

// //Energy-data 
// function createEnergyRows(arr) {
//   const energyRows = []; 
//   for(let i = 0; i < arr.length; i++){
//     energyRows.push([arr[i].name + ", "+ arr[i].artists, arr[i].energy])
//   }
//   return energyRows; 
// };

// //Energy-data 
// function createTempoRows(arr) {
//   const tempoRows = []; 
//   for(let i = 0; i < arr.length; i++){
//     tempoRows.push([arr[i].name + ", "+ arr[i].artists, arr[i].tempo])
//   }
//   return tempoRows; 
// };


// //Accoustic Chart
// anychart.onDocumentReady(function() {
//   anychart.theme(anychart.themes.darkBlue)
//   // set the data
//   var data = {
//       header: ["Song Title", "Accouticness (dB)"],
//       rows: 
//         createAccRows(songs)
//   };

//   // create the chart
//   var chart = anychart.column();

//   // add the data
//   chart.data(data);

//   // set the chart title
//   chart.title("Accoustic Levels, by Song");

//   // draw
//   chart.container("Accoustic");
//   chart.draw();
// });

// //Danceability chart 
// anychart.onDocumentReady(function() {
//   anychart.theme(anychart.themes.darkBlue)

//   var data = {
//       header: ["Song Title", "Danceability"],
//       rows: 
//         createDanceRows(songs)
//   };

//   var chart = anychart.column();

//   chart.data(data);

//   chart.title("Danceability, by Song");

//   chart.container("Dance");
//   chart.draw();
// });

// //Popularity chart 
// anychart.onDocumentReady(function() {
//   anychart.theme(anychart.themes.darkBlue)

//   var data = {
//       header: ["Song Title", "Popularity"],
//       rows: 
//         createPopularRows(songs)
//   };

//   var chart = anychart.column();

//   chart.data(data);

//   chart.title("Popularity, by Song");

//   chart.container("Popular");
//   chart.draw();
// });

// //Energy chart 
// anychart.onDocumentReady(function() {

//   anychart.theme(anychart.themes.darkBlue)
  
//   var data = {
//       header: ["Song Title", "Energy"],
//       rows: 
//       createEnergyRows(songs)
//   };

//   var chart = anychart.column();

//   chart.data(data);

//   chart.title("Energy, by Song");

//   chart.container("Energy");
//   chart.draw();
// });

// //Tempo chart 
// anychart.onDocumentReady(function() {

//   anychart.theme(anychart.themes.darkBlue)

//   var data = {
//       header: ["Song Title", "Tempo"],
//       rows: 
//       createTempoRows(songs)
//   };

//   var chart = anychart.column();


//   chart.data(data);

//   chart.title("Tempo, by Song");

//   chart.container("Tempo");
//   chart.draw();
// });


// function getName(){

//   let userInput = document.querySelector(".artistName").value
//   for(let i = 0; i < songs.length; i++){
//     if(songs[i].artists === `${userInput}`)
//     displaySearch(songs[i]);  
//   }
//   return "Sorry That Artist Info is not available"; 
// }; 



// function search(){
//   let button = document.querySelector(".submit")
//   button.addEventListener("click", (e)=>{
//     e.preventDefault();
//     getName(); 
//   })
// }



// function displaySearch(e) {
//  console.log(e);
//  let keys = Object.keys(e)
//  console.log(keys);

//   let placeSearch = document.querySelector(".searchResult");
//   let newList = document.createElement("ul")
//   newList.setAttribute("class", "infoDelete")
//   placeSearch.appendChild(newList)
//   // let data = songs[index];
//   // console.log(data); 
  


//   for(let i = 0; i < keys.length; i++){
//     let temp = keys[i];
//     let newOption = new Option(`${temp}: ${e[temp]}`, e[temp])

//     newList.appendChild(newOption);
//   }
  
// }
// let artistArray = [];
// function addElement(){
//   let name = document.querySelector(".addArtist").value
//   artistArray.push(name); 
// }

// let valence; year; acousticness; danceability; energy; explicit; instrumentalness; liveness; loudness; popularity;
// speechiness; tempo; 

let variables = Object.keys(songs[0])
const filteredVariables =  variables.filter(key => key !==  'src' && key !== 'release_date' && key !=='duration_ms' && key !=='id' && key !=='mode' && key !=='artists' && key !=='name')


function options(){
  let select = document.querySelector('.options')
  for(let i = 0; i < filteredVariables.length; i++){
    let option = new Option(filteredVariables[i], filteredVariables[i])
    select.add(option, undefined)
  }
  select.addEventListener('input', (e)=>{
    e.preventDefault()
    // let chartVariable = select.options[select.selectedIndex].value;
    chartVariable = select.options[select.selectedIndex].value;
    customChart(chartVariable)
  })
}
  
//Energy-data 
function createCustomRows(arr, variable) {
  const tempRows = []; 
  for(let i = 0; i < arr.length; i++){
    tempRows.push([arr[i].name + ", "+ arr[i].artists, arr[i][`${variable}`]])
  }
  return tempRows
};





const customChart = (variable) => {
  
  let liChart = document.createElement('li');
  liChart.setAttribute('class', 'custom'); 
  liChart.setAttribute('key',`${count += 1}`)

  let button = document.createElement('button')
  button.setAttribute('class', 'button');
  button.setAttribute('data-html2pdf-ignore', 'true');
  button.setAttribute('key',`${count}`)
  button.innerHTML= 'Clear Graph'; 

  button.addEventListener('click', (e)=>{
    e.preventDefault();
    e.path[1].remove()
  })

  liChart.appendChild(button)
  let ulList = document.querySelector('ul.graphs'); 
  let container = ulList.appendChild(liChart)

 
   
  anychart.theme(anychart.themes.darkBlue)
  // set the data
  let data = {
      header: ["Song Title", `${variable}`],
      rows: 
        createCustomRows(songs, variable)
        // tempRows
  };

  // create the chart
  var chart = anychart.column();

  // add the data
  chart.data(data);

  // set the chart title
  chart.title(`${variable} Levels, by Song`);

  // draw
  // chart.container(`custom`);
  chart.container(
    container
  );
  chart.draw()

}


// deleteChart = () => {

// }

const printPDF = () =>{
  const printButton = document.querySelector('.print')

  printButton.addEventListener('click', (e) =>{
    e.preventDefault()
    let graphs = document.querySelector('.graphs')
    let opt = {
      margin:       0.01,
      filename:     'musicGraphs.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2,} ,
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'l' }
    };
    html2pdf().set(opt).from(graphs).save()

  })
  
}