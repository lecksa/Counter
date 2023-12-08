let minus = document.querySelector('.minus')
let re = document.querySelector('.re')
let plus = document.querySelector('.plus')
let h1 = document.querySelector('h1')
let random = document.querySelector('.random')

plus.onclick = () => {
    if (h1.innerText < 10) {
        h1.innerText++
    } else {
        h1.innerText = 10
    }
}

minus.onclick = () => {
    if (h1.innerText != 0) {
        h1.innerText--
    } else {
        h1.innerText = 0
    }
}

re.onclick = () => {
    h1.innerText = 0
}

random.onclick = () => {
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    h1.innerText = nums[Math.round(Math.random() * (nums.length - 1))]
}