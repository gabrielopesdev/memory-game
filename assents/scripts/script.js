const front = "card_front"
const back = "card_back"

let techs = [

    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquary',
    'mongo',
    'node',
    'react'
];

createCardsFromTechs(techs)

function createCardsFromTechs(techs) {

    let cards = []

    for (let tech of techs) {

        cards.push(createPairFromTech(tech))

    }
    
    return cards.flatMap(pair => pair)
}


function createPairFromTech(tech) {

    return [{
        
        id: createIdFromTech(tech),
        icon: tech,
        flipped: false,

    }, {

        id: createIdFromTech(tech),
        icon: tech,
        flipped: false,

    }]
}

function createIdFromTech(tech) {

    return tech + parseInt( Math.random() * 1000)

}
