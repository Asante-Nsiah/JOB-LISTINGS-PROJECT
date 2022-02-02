const skillSet = document.querySelectorAll(".skillSet");
const filterBox = document.querySelector('.filter-box')
const filter = []
const clearData = document.querySelector(".Clear")

const showFilters = skills => {
    skills.forEach(el => {
        filterBox.append(el)
    })
}

skillSet.forEach(el => {
    el.addEventListener('click', ev => {
        filter.push(ev.target.innerHTML)
        console.log(filter)
        filterBox.innerHTML = ""
        filterBox.append(filter)
    })
})

clearData.addEventListener('click', (e) => {
    filterBox.innerHTML = "";
})