const names = document.getElementById("votername")
const number = document.getElementById("voterno")
const password = document.getElementById("voterpassword")
const Role = document.getElementById("selectme")

const btn = document.querySelector(".btn")
const outer_divs = document.querySelector(".outer-div")

const top_data = document.querySelector(".main-container")
const bottom_data = document.querySelector(".backend")

btn.addEventListener("click",() => {
    const div = document.createElement("div")
    div.className = "Voter-info";
    const span1 = document.createElement("span")
    const span2 = document.createElement("span")
    const span3 = document.createElement("span")
    const span4 = document.createElement("span")
    span1.innerHTML = names.value;
    span2.innerHTML = number.value;
    span3.innerHTML = password.value;
    span4.innerHTML = Role.value;

    div.appendChild(span1)
    div.appendChild(span2)
    div.appendChild(span3)
    div.appendChild(span4)
    outer_divs.appendChild(div)

    // top_data.classList.add('active')
    // bottom_data.classList.remove('active')
})

