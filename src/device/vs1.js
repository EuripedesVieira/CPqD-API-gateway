const {parseData,convertBinario,randomPoluente,randomOxigenio}= require("./vs1-function");

function device1(){

   let timestamp = Date.now();
   let poluente = randomPoluente();
   let oxigenio = randomOxigenio();
   let poluente_binario=convertBinario(poluente);
   let oxigenio_binario=convertBinario(oxigenio);
   let data = parseData(poluente_binario, oxigenio_binario);

   return {
      device:"PINHR_001",
      timestamp,
      data,
   };
}

function device2(){

   let timestamp = Date.now();
   let poluente = randomPoluente();
   let oxigenio = randomOxigenio();
   let poluente_binario=convertBinario(poluente);
   let oxigenio_binario=convertBinario(oxigenio);
   let data = parseData(poluente_binario, oxigenio_binario);

   return {
      device:"PINHR_002",
      timestamp,
      data,
   };
}

function device3(){

   let timestamp = Date.now();
   let poluente = randomPoluente();
   let oxigenio = randomOxigenio();
   let poluente_binario=convertBinario(poluente);
   let oxigenio_binario=convertBinario(oxigenio);
   let data = parseData(poluente_binario, oxigenio_binario);

   return {
      device:"PINHR_003",
      timestamp,
      data,
   };
}

module.exports={device1,device2,device3} 