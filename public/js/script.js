const form = document.querySelector("form")

form.addEventListener("submit", async (e) => {
    e.preventDefault()
    let errors = false
    const name = form.name.value
    const email = form.email.value
    const commentary = form.commentary.value
    const errorsDiv = document.querySelector(".errors")
    if(name.trim() === "") {
        document.querySelector("#name").classList.add("error")
        errors = true
    }
    else {
        document.querySelector("#name").classList.remove("error")
    }
    if(email.trim() === "") {
        document.querySelector("#email").classList.add("error")
        errors = true
    }
    else {
        document.querySelector("#email").classList.remove("error")
    }
    if(commentary.trim() === "") {
        document.querySelector("#commentary").classList.add("error")
        errors = true        
    }
    else {
        document.querySelector("#commentary").classList.remove("error")
    }
    if(errors) {
        errorsDiv.classList.remove("is-hidden")      
    }
    else {
        const res = await fetch('/comment/save', {
            method: 'POST',
            body: JSON.stringify({ name, email, commentary }),
            headers: { 'Content-Type': 'application/json' }
        })
        const data = await res.json()
        if(!data.error) {
            form.reset()
            errorsDiv.classList.remove("error")
            errorsDiv.classList.add("bg-success")
            errorsDiv.classList.remove("is-hidden")
            errorsDiv.innerHTML = "Your commentary has been sent"
        }
        else {
            errorsDiv.innerHTML = "Error trying to send comment"
            errorsDiv.classList.remove("is-hidden")
        }        
    }
})