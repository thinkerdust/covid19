function main() {
    const getdatacovid = () => {
        fetch("https://indonesia-covid-19.mathdro.id/api")
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderAllDataCovid(responseJson);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const renderAllDataCovid = (responseJson) => {
        const {meninggal, sembuh, perawatan, jumlahKasus} = responseJson;
        const datapositif = document.querySelector("#indopositif");
        const datadirawat = document.querySelector("#indodirawat");
        const datasembuh = document.querySelector("#indosembuh");
        const datameninggal = document.querySelector("#indomeninggal");

        datapositif.innerHTML = '<h1 class="card-title pricing-card-title">' + jumlahKasus +'</h1>';

        datadirawat.innerHTML = '<h1 class="card-title pricing-card-title">' + perawatan +'</h1>';

        datasembuh.innerHTML = '<h1 class="card-title pricing-card-title">' + sembuh +'</h1>';

        datameninggal.innerHTML = '<h1 class="card-title pricing-card-title">' + meninggal +'</h1>';

    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    document.addEventListener("DOMContentLoaded", () => {
        getdatacovid();
    });
}

export default main();