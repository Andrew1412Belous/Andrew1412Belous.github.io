//Version 2 

document.body.style.background = '#004'

const getRandomCoordinates = () => [
    Math.random() * window.innerWidth,
    Math.random() * window.innerHeight
]

const getStyle = () => {
    const coordinates = getRandomCoordinates()
    return `
        position: absolute;
        top: ${coordinates[0]}px;
        left: ${coordinates[1]}px;
        font-size: 6px;
        color: #FFF;
        transition: all 1s;
    `
}

const callback = event => Object
    .assign(event.target, {
        style: getStyle()
    })

const placeStar = () => Object
    .assign(document.body.appendChild(document.createElement('p')), {
           innerText: '*',
           style: getStyle(),
           addListener () {
             this.addEventListener('move-star', callback)
           }
    })

function appendStar () {
    placeStar().addListener()
}


(function () {
    let counter = 0
    return function recursion () {
        setTimeout(() => appendStar(), Math.random() * 2000 * counter)
        counter++ < 1000 && recursion()
    }
})()()

const fireEvent = () => {
    const event = new Event('move-star')
    const collection = document
        .getElementsByTagName('p')

    collection[Math.round(Math.random() * (collection.length - 1))]
        .dispatchEvent(event)
}

(function () {
    let counter = 0
    return function recurse () {
        setTimeout(() => fireEvent(), Math.random() * 20000 * counter)
        counter++ < 20 && recurse()
    }
})()()