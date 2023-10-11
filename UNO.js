const rl = require ("readline-sync")

//juego UNO
var deck = [];
var colors = ["Yellow","Blue", "Green", "Red"];
var types = ["Comun", "Especial","Comodin"];

var card = { 
    color: null, // amarillo, azul , verde , rojo 
    number: null, // 0-9
    Type: null // comun, especiales y comodines
};

for (var cColor = 0; cColor < colors.length; cColor++ ){
    
    for (var cNumber = 0; cNumber < 10; cNumber++){
        deck.push({color: colors[cColor], number: cNumber, type: "comun"});
    }
    for (var cNumber1 = 1; cNumber < 10; cNumber1++){
       deck.push ({color: colors[cColor], number:cNumber, type:"comun"});
    }
    deck.push({color: colors[cColor], number: "+2", type: "comun"});
    deck.push({color: colors[cColor], number: "+2", type: "comun"});
    deck.push({color: colors[cColor], number: "B", type: "comun"});
    deck.push({color: colors[cColor], number: "B", type: "comun"});
    deck.push({color: colors[cColor], number: "R", type: "comun"});
    deck.push({color: colors[cColor], number: "R", type: "comun"});

} 

deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "+4", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});
deck.push({color: null, number: "CC", type: "comun"});

console.log(deck);

const players =  rl.question("Cuantos jugadores seran?", {})
const totalCards = players * 7;
// repartir 7 cartas  x jugador
// recorro el total de tarjetas
//(total de trajetas = trajrtas/7 x jugador)
// un arreglo x cada jugardor 
var cardsPlayers = {};

for(var cTCards = 0; cTCards < 7;  cTCards++){
  for(var cplayers = 0; cplayers < players; cplayers++) {
    if (!cardsPlayers["player_"+players]) {
        (cardsPlayers["player_"+players]) = [];
    }
    
      console.log("player: ", cplayers);
      cardsPlayers["player"+cplayers ] = [];
      cardsPlayers["player"+cplayers ].push(deck[cTCards]);
      console.log(cardsPlayers);

}

}


console.log(cardsPlayers);