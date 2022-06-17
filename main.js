// add event listener to the advice-card--button and call the function getAdvice()

document.querySelector('.advice-card--button').addEventListener('click', getAdvice)

async function getAdvice(){
    try {
        const res = await fetch('https://api.adviceslip.com/advice')
        const data = await res.json()
        console.log(data.slip)

        document.querySelector('#advice-card--idNumber').textContent = data.slip['id']
        document.querySelector('.advice-card--adviceText').textContent = data.slip['advice']
    
    } catch (error) {
        console.log(error)
    }
}

//TODO: Figure out why it doesn't get a new advice slip when you click the button again.
