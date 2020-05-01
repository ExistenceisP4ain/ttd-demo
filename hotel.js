let pricelist = [
    { from: '2020-01-01', to: '2020-02-01', price: 34.5 },
    { from: '2020-02-02', to: '2020-03-01', price: 37.0 },
    { from: '2020-03-02', to: '2020-05-15', price: 39.0 },
    { from: '2020-05-16', to: '2020-06-15', price: 37.0 },
]

function logPricelist(pricelist) {
    pricelist.sort((a, b) => a.price - b.price)

    let cout = ""
    let previous = {}

    pricelist.forEach(function (a) {
        if (a.price == previous.price) cout += ' , '
        else cout += '\n'
        cout += ${a.price} : ${a.from} : ${a.to}
        previous = a
    })

    console.log(cout)
}

logPricelist(pricelist)
