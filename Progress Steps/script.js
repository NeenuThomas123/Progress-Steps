const progress = document.getElementById('progress')

const prevBtn = document.getElementById('prev')

const nextBtn = document.getElementById('next')

const circles = document.querySelectorAll('.circle')

let currenActive = 1

nextBtn.addEventListener('click', () => {
    currenActive++

    if (currenActive > circles.length) {
        currenActive = circles.length
    }
    update()
})

prevBtn.addEventListener('click', () => {
    currenActive--

    if (currenActive < 1) {
        currenActive = 1
    }
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currenActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })


    //here we count how many circles are currently active
    const actives = document.querySelectorAll('.active')

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    //if we are on the first step disable previous button
    if (currenActive === 1) {
        prevBtn.disabled = true
    }

    //if we are on the last step disable next button
    else if (currenActive === circles.length) {
        nextBtn.disabled = true
    }

    else {
        prevBtn.disabled = false
        nextBtn.disabled = false
    }
}

