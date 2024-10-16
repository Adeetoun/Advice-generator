function getAdvice() {
    fetch('https://api.adviceslip.com/advice', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    }
    })
    .then((res) => {
        console.log(res);
        return res.json()
})
    .then((data) => {
        console.log(data);
        if (data && data.slip) {
            const {advice, id} = data.slip;
            displayAdvice(advice, id);
        }
        
    })
}

function displayAdvice(adviceText, adviceId) {
    const advice = document.querySelector('#advice');
    const id = document.querySelector('#advice-id');

    if(advice && id) {
        advice.innerHTML = `"${adviceText}"`;
        id.innerHTML = '#' + adviceId;
    }
    

}

document.querySelector('.generator').addEventListener('click', getAdvice);
getAdvice();