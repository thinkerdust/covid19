function main() {
    const getdatacovidIndo = () => {
        fetch('https://indonesia-covid-19.mathdro.id/api').then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAlldata(responseJson.indo);
            }
            // document.body.innerText = JSON.stringify(responseJson);
        })
        .catch(error => {
            showResponseMessage(error);
        })
    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    const renderAlldata = (indo) => {
        const listIndopositifElement =  document.querySelector("#indopositif");
        listIndopositifElement.innerHTML += '<h1 class="card-title pricing-card-title">10</h1>';
        
    };

    document.addEventListener("DOMContentLoaded", () => {
        getdatacovidIndo();
    });


}

export default main();