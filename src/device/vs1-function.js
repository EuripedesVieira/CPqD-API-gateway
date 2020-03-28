function convertBinario(valor){
   return valor.toString(2);  
};

function parseData(poluente_binario, oxigenio_binario){
   let data = poluente_binario.concat(oxigenio_binario);
   return parseInt(data,2);
};

function convertDecimal(data){};


function randomPoluente() {
   let min=1, max=50;
   return Math.floor(Math.random() * (max - min + 1) ) + min;}


function randomOxigenio() {
   let min=1, max=500;
   return Math.floor(Math.random() * (max - min + 1) ) + min;}

module.exports={
   convertDecimal,parseData,convertBinario,
   randomPoluente,randomOxigenio
};
