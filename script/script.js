// Header
const threeBar = document.getElementById("three-bar")
const close = document.getElementById("close")
const mobiledropDown = document.getElementById("mobile-drop-down")

threeBar.addEventListener("click", () => {
    threeBar.style.display = "none"
    close.style.display = "block"
    mobiledropDown.style.display = "block"
})
close.addEventListener("click", () => {
    threeBar.style.display = "block"
    close.style.display = "none"
    mobiledropDown.style.display = "none"
})

// FAQ
let max = document.querySelectorAll(".max")
let min = document.querySelectorAll(".min")
let answer = document.querySelectorAll(".answer")

max.forEach((element, index, max) => {
    max[index].addEventListener("click", () => {
        max[index].style.display = "none"
        min[index].style.display = "block"
        answer[index].style.display = "block"
    })
})

min.forEach((element, index, min) => {
    min[index].addEventListener("click", () => {
        max[index].style.display = "block"
        min[index].style.display = "none"
        answer[index].style.display = "none"
    })
})

const filterButton = document.querySelectorAll(".post-filter")
const fliterItem = document.querySelectorAll(".post-box")

filterButton.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = e.target.dataset.filter;

        fliterItem.forEach(item => {
            if (filter == 'all') {
                item.style.display = 'block';
            } else {
                const boxfilter = item.dataset.item;
                if (filter == boxfilter) {
                    item.style.display = 'block'
                } else {
                    item.style.display = 'none'
                }
            }
        })
    })
})

// darkmode
const moonIcon = document.querySelectorAll(".moon")
const sunIcon = document.querySelectorAll(".sun")
let Isdark = false

moonIcon.forEach((element, index) => {
    element.addEventListener('click', () => {
        document.body.classList.remove("light-theme")
        document.body.classList.add("dark-theme")
        Isdark = true
        element.style.display = 'none'
        sunIcon[index].style.display = 'block'
        localStorage.setItem('theme', Isdark)
    })
})


sunIcon.forEach((element, index) => {
    element.addEventListener('click', () => {
        document.body.classList.remove("dark-theme")
        document.body.classList.add("light-theme")
        Isdark = false
        moonIcon[index].style.display = 'block'
        element.style.display = 'none'
        localStorage.setItem('theme', Isdark)
    })
})


window.onload = () => {
    Isdark = JSON.parse(localStorage.getItem('theme'))

    moonIcon.forEach((element, index) => {
        if (Isdark === false) {
            document.body.classList.remove("dark-theme")
            document.body.classList.add("light-theme")
            element.style.display = 'block'
            sunIcon[index].style.display = 'none'
        }
    })

    sunIcon.forEach((element, index) => {
        if (Isdark) {
            document.body.classList.add("dark-theme")
            document.body.classList.remove("light-theme")
            moonIcon[index].style.display = 'none'
            element.style.display = 'block'
        }
    })

}

// scroll appeare after 100px
const toTop = document.querySelector(".top")
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})






// darkmode
// const moonIcon = document.querySelectorAll(".moon")[0]
// const sunIcon = document.querySelectorAll(".sun")[0]
// let Isdark = false

// moonIcon.addEventListener('click', () => {

//     document.body.classList.add("dark-theme")
//     document.body.classList.remove("light-theme")
//     Isdark = false
//     moonIcon.style.display = 'none'
//     sunIcon.style.display = 'block'
//     localStorage.setItem('theme', Isdark)
// })

// sunIcon.addEventListener('click', () => {

//     document.body.classList.remove("dark-theme")
//     document.body.classList.add("light-theme")
//     Isdark = true
//     moonIcon.style.display = 'block'
//     sunIcon.style.display = 'none'
//     localStorage.setItem('theme', Isdark)
// })

// window.onload = () => {
//     Isdark= JSON.parse(localStorage.getItem('theme'))

//     if (Isdark) {
//         document.body.classList.remove("dark-theme")
//         document.body.classList.add("light-theme")
//         moonIcon.style.display = 'block'
//         sunIcon.style.display = 'none'
//     } else {
//         document.body.classList.add("dark-theme")
//         document.body.classList.remove("light-theme")
//         moonIcon.style.display = 'none'
//         sunIcon.style.display = 'block'
//     }
// }