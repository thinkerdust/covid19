import "./prov-item.js";

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

        datapositif.innerHTML = '<h5 class="card-title">' + jumlahKasus +'</h5>';

        datadirawat.innerHTML = '<h5 class="card-title">' + perawatan +'</h5>';

        datasembuh.innerHTML = '<h5 class="card-title">' + sembuh +'</h5>';

        datameninggal.innerHTML = '<h5 class="card-title">' + meninggal +'</h5>';

    };

    const showResponseMessage = (message = "Check your internet connection") => {
        alert(message);
    };

    const getdataprovinsi = () => {
        fetch("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.error) {
                showResponseMessage(responseJson.message);
            } else {
                renderDataProvinsi(responseJson.data);
            }
        })
        .catch(error => {
            showResponseMessage(error);
        });
    };

    const renderDataProvinsi = (data) => { 
        const divprovinsi = document.querySelector("#provinsi");
        const txtprovinsi = document.querySelector("#txtprovinsi").value.toLowerCase();
        
        data.forEach(item => {
            const provinsi = item.provinsi.toLowerCase();

            if (txtprovinsi == provinsi) {
                // divprovinsi.innerHTML = ``;
                console.log("emememe");
            } else {
                // divprovinsi.setAttribute("hidden", "hidden");
                console.log("blabla");
            }
        });
        
    };

    document.addEventListener("DOMContentLoaded", () => {
        const btnsearch = document.querySelector("#btnsearch");
        const provItemElement = document.querySelector("prov-item");


        // btnsearch.addEventListener("click", function () {
        //     getdataprovinsi();
        // });
        getdatacovid();
    });
}

export default main();