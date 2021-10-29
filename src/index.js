
const songs = require ("./SongData.json");
let chartVariable;
let count = 0; 

document.addEventListener("DOMContentLoaded", ()=>{
  options(); 
  printPDF();
  createAlbumInfo(); 
  hoverAcou(); 
  dance();
  energy();
  instrumentalness();
  liveness();
  loudness();
  speechiness();
  tempo();
  valence();
})




function createAlbumInfo(){
  let parent = document.querySelector(".albums"); 
  let unordered = document.createElement("ul"); 
  parent.append(unordered); 

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
      let header = document.getElementById('album-header')
      if(header){
        header.remove()
      }
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
  displayInfo.called = true; 

  let index = e.currentTarget.dataset.index; 
  let placeData = document.querySelector(".popup");
  let newList = document.createElement("ul")
  newList.setAttribute("class", "infoDelete")
  placeData.appendChild(newList)
  let data = songs[index];
  

  let keys = Object.keys(data)


  for(let i = 0; i < keys.length; i++){
    let temp = keys[i];
    let newOption = new Option(`${temp}: ${data[temp]}`, data[temp])
    // placeData.innerHTML = `${temp}: ${data[temp]}`
    newList.appendChild(newOption);
  }

  
  
}


function hoverAcou(){
    let attr = document.getElementById('acousticness');
    let overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlaybox')
    
    attr.addEventListener('click', e =>{
      e.preventDefault(); 
     
      
      let replace = document.getElementById('info')
      overlay.innerText = 'Acousticness: \n This value describes how acoustic a song is. A score of 1.0 means the song is most likely to be an acoustic one.'

      replace.append(overlay)
      deleteAc()
    })
}

function deleteAc(){

  let overlayer = document.querySelector('.overlaybox')
  overlayer.addEventListener('click', e =>{
    e.preventDefault(); 
    overlayer.remove()
  })

}
function dance(){
    let attr = document.getElementById('danceability');
    let overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlaybox')
    
    attr.addEventListener('click', e =>{
      e.preventDefault(); 
     
      
      let replace = document.getElementById('info')
      overlay.innerText = 'Danceability: \n Danceability describes how suitable a track is for dancing based on a combination of musical elements including tempo, rhythm stability, beat strength, and overall regularity. A value of 0.0 is least danceable and 1.0 is most danceable.'

      replace.append(overlay)
      deleteAc()
    })
}
function energy(){
    let attr = document.getElementById('energy');
    let overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlaybox')
    
    attr.addEventListener('click', e =>{
      e.preventDefault(); 
     
      
      let replace = document.getElementById('info')
      overlay.innerText = 'Energy: \n (energy) represents a perceptual measure of intensity and activity. Typically, energetic tracks feel fast, loud, and noisy.'

      replace.append(overlay)
      deleteAc()
    })
}
function instrumentalness(){
    let attr = document.getElementById('instrumentalness');
    let overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlaybox')
    
    attr.addEventListener('click', e =>{
      e.preventDefault(); 
     
      
      let replace = document.getElementById('info')
      overlay.innerText = 'Instrumentalness: \n This value represents the amount of vocals in the song. The closer it is to 1.0, the more instrumental the song is.'

      replace.append(overlay)
      deleteAc()
    })
}
function liveness(){
    let attr = document.getElementById('liveness');
    let overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlaybox')
    
    attr.addEventListener('click', e =>{
      e.preventDefault(); 
     
      
      let replace = document.getElementById('info')
      overlay.innerText = 'Liveness: \nThis value describes the probability that the song was recorded with a live audience. According to the official documentation \n “a value above 0.8 provides strong likelihood that the track is live”.'

      replace.append(overlay)
      deleteAc()
    })
}
function loudness(){
    let attr = document.getElementById('loudness');
    let overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlaybox')
    
    attr.addEventListener('click', e =>{
      e.preventDefault(); 
     
      
      let replace = document.getElementById('info')
      overlay.innerText = 'Loudness: \nThe overall loudness of a track in decibels (dB). Loudness values are averaged across the entire track. Values typical range between -60 and 0 db.'

      replace.append(overlay)
      deleteAc()
    })
}
function speechiness(){
    let attr = document.getElementById('speechiness');
    let overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlaybox')
    
    attr.addEventListener('click', e =>{
      e.preventDefault(); 
     
      
      let replace = document.getElementById('info')
      overlay.innerText = 'Speechiness: \n Speechiness detects the presence of spoken words in a track. The more exclusively speech-like the recording (e.g. talk show, audio book, poetry), the closer to 1.0 the attribute value.'

      replace.append(overlay)
      deleteAc()
    })
}
function tempo(){
    let attr = document.getElementById('tempo');
    let overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlaybox')
    
    attr.addEventListener('click', e =>{
      e.preventDefault(); 
     
      
      let replace = document.getElementById('info')
      overlay.innerText = 'Tempo: \n The overall estimated tempo of a track in beats per minute (BPM). In musical terminology, tempo is the speed or pace of a given piece and derives directly from the average beat duration.'

      replace.append(overlay)
      deleteAc()
    })
}
function valence(){
    let attr = document.getElementById('valence');
    let overlay = document.createElement('div');
    overlay.setAttribute('class', 'overlaybox')
    
    attr.addEventListener('click', e =>{
      e.preventDefault(); 
     
      
      let replace = document.getElementById('info')
      overlay.innerText = 'Valence: \n A measure from 0.0 to 1.0 describing the musical positiveness conveyed by a track. Tracks with high valence sound more positive (e.g. happy, cheerful, euphoric), while tracks with low valence sound more negative (e.g. sad, depressed, angry).'

      replace.append(overlay)
      deleteAc()
    })
}



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
  
function createCustomRows(arr, variable) {
  const tempRows = []; 
  for(let i = 0; i < arr.length; i++){
    tempRows.push([arr[i].name, arr[i][`${variable}`]])
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
  chart.title(`${variable.charAt(0).toUpperCase() + variable.slice(1)} by Song`);

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

