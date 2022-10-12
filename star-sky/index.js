// Version 1

document.body.style.background = '#004'

let counter = 0

const stars = []

function createStar () {
    return Object.assign(document.createElement('p'), { 
        style: `    
            color: #fff;
            position: absolute;
            top: ${Math.random() * window.innerHeight}px;
            left: ${Math.random() * window.innerWidth}px;
            font-size: 5px;
            transition: 0.5s all;
        `,
        innerText: '*'
    })
}

function createStars () {
    const star = createStar()

    star.addEventListener('move-star', function (event) {
        event.target.style.top = `${Math.random() * window.innerHeight}px`
        event.target.style.left = `${Math.random() * window.innerWidth}px`
    })

    stars.push(star)

    setTimeout(() => document.body.appendChild(star), Math.random() * 2000 * counter)
    
    counter++ < 5000 && createStars()
}

function dispatchRandomMove () {
    const stars = document.getElementsByTagName('p')
    stars[Math.round(Math.random() * (stars.length - 1))]
        .dispatchEvent(new Event('move-star'))
}

const moveStars  = (function () {
    let counter = 20

    return function recurse () {
        setTimeout(dispatchRandomMove, Math.random() * 10000 * counter)
        counter++ < 50 && recurse()
    }
})()

createStars()
moveStars()
