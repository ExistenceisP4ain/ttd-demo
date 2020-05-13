let pricelist = [ //model
    { from: '2020-01-01', to: '2020-02-01', price: 34.5 },
    { from: '2020-02-02', to: '2020-03-01', price: 37.0 },
    { from: '2020-03-02', to: '2020-05-15', price: 39.0 },
    { from: '2020-05-16', to: '2020-06-15', price: 37.0 },
]

//treba ispisati slijedeće:
/*
34.5 : 2020-01-01 do 2020-02-01
37.0 : 2020-02-02 do 2020-03-01 , 2020-05-15 do 2020-06-15
39.0 : "2020-03-02 do 2020-05-15
*/

function logPricelist(pricelist) {
    

    let model = prepareData(pricelist); //controller
    printData(model); //view
    
    console.log(ispis)
}

function prepareData(pricelist) {
    let model = {};
    pricelist.forEach((priceData)=>{
        model[priceData.price] = (model[priceData.price] || [])
            .push([priceData.from, priceData.to])
    });
    return model;

}


//view
function printData(model) {
    /*let desiredModel = {
        price: [[date_from, date_to], [date_from, date_to]
    }*/
    Object.getOwnPropertyKeys(model).sort().forEach((price)=>{
        let datesOut = model[price]
            .map((from_to)=>from_to.join(" do ")).join(" , ");
        console.log(price, " : ", datesOut);
    });


}

logPricelist(pricelist)
