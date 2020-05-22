const arabicToRomanMap = {
    1 : "I",
    4 : "IV",
    5 : "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M"
};

function arabicToRoman(num) {
    let roman = arabicToRomanMap[num];
    if(roman) return roman; //ne morate izbaciti
    //Postupak je slijedeći
    //od num oduzeti najveći broj koji možemo oduzeti
    //i onda "stackati" na rimski rezultat 
    //odgovarajući rimski ekvivalent
    roman = "";
    let numToSubstract = getNumToSubstract(num);
    let rest = num % numToSubstract;
    roman += new Array((num - rest)/numToSubstract).fill(arabicToRomanMap[numToSubstract]).join("");
    
    //izbaciti ovaj IF
    rest !== 0 ? roman = roman + arabicToRoman(rest) : roman ; 
   
    return roman;
}

function getNumToSubstract(num) {
    return Object.keys(arabicToRomanMap)
        .map((n)=>parseInt(n)).filter((arabic)=>arabic <= num)
            .sort((n1, n2)=>(n2-n1))[0];  
}

module.exports = arabicToRoman;
