/*

Radimo pretraživač nad slijedećim tekstom:

https://drive.google.com/file/d/1yGKHPlwjuHCwOBfa9pkGyVhl1UcOYdRj/view?usp=sharing

Važ je zadatak napisati “suggest tool” slično kao što imamo na google-u, gdje nakon svake riječi nudimo odabir top 5 slijedećih riječi bez da korisnik mora tipkati.

Lekcija je o:
Razumijevanje zahtjeva 
Modeliranje zahtjeva i pretvaranje istih u kod
Pravila čistog koda
TDD


*/
function suggestionTool(Tekst){
    Tekst = Tekst.toLowerCase();
    let rijeci = Tekst.split(" ");
    
    if(rijeci.length > 3 || Tekst.length==0) return []

    let fs = require("fs");
    let fajl = fs.readFileSync('long.txt','utf-8').toLowerCase().split(" ");

    let allSuggestions = [];
    let suggestionPriority = {};
    let matchCounter = 0; 
    for(let i=0; i<fajl.length; i++){
        let fajlWord = fajl[i];
        if(fajlWord == rijeci[matchCounter]) matchCounter++;
        else matchCounter = 0;

        if(matchCounter == rijeci.length && i+1 < fajl.length){
            matchCounter = 0;
            let suggestion = rijeci.join(" ");
            let nextfajlRijec = fajl[i+1];
            suggestion += " " + nextfajlRijec;

            if(suggestion in suggestionPriority) suggestionPriority[suggestion]++;
            else {
                allSuggestions.push(suggestion);
                suggestionPriority[suggestion] = 1;
            }
        }
    }

    let sortedSuggestions = allSuggestions.sort(function(first, second) {
        return suggestionPriority[second] - suggestionPriority[first];
    })
    
    let Rezultat = []
    for(let i=0; i<sortedSuggestions.length; i++){
        if(i==5) break;
        Rezultat.push(sortedSuggestions[i]);
    }
    return Rezultat;
}

console.log(suggestionTool("I am"));

//sugestije trebaju raditi za do 3 riječi
//dakle suggestionTool("I am very") je legalno
//ali suggestionTool("I am very hungry") nije
//["I AM just", "I am often", "I am currently", "I am 90%"]

