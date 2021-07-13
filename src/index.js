const file = require ("./ArtistSales.json")

document.addEventListener("DOMContentLoaded", ()=>{
  // const artist = file.artist;
  // const numSales = file.numSales; 
  for(let i = 0; i < file.length; i++){
    console.log(file[i].Artist)
    console.log(file[i].recordSales + "million")
    console.log(file[i].Top_1)
    console.log(file[i][i].Top_1)
    console.log(file[i].Top_2)
    console.log(file[i].Top_3)
  }
  
})