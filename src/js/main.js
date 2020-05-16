import "./search-bar.js";
import swal from 'sweetalert';

const main = () => {
    const getdatacovid = async () => {
        try {
            const response = await fetch("https://indonesia-covid-19.mathdro.id/api");
            const responseJson = await response.json();
            renderAllDataCovid(responseJson);
        } catch(error) {
            showResponseMessage(error);
        }
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

    const getdataprovinsi = async () => {
        try {
            const response = await fetch("https://indonesia-covid-19.mathdro.id/api/provinsi");
            const responseJson = await response.json();
            renderDataProvinsi(responseJson.data);
        } catch(error) {
            showResponseMessage(error);
        }
    };

    const renderDataProvinsi = (data) => { 
        const inputProv = searchElement.value.toLowerCase();
        const divprovinsi = document.querySelector("prov-item");
        // const dataprovinsi = data.map(item => item.provinsi);

        function searchProv(province) {
            var strProv = province.provinsi.toLowerCase();
            return strProv === inputProv;
        }

        
        // console.log(kasusPosi);
        if(data.find(searchProv)) {
            const {kasusPosi,kasusSemb,kasusMeni} = data.find(searchProv);
            divprovinsi.innerHTML = `<div class="card-deck mb-3 text-center">
            <div class="card text-white bg-info mb-3">
            <div class="card-header">Kasus Positif</div>
            <div class="card-body">
                <h5 class="card-title">${kasusPosi}</h5>
            </div>
            </div>
            <div class="card text-white bg-success mb-3">
            <div class="card-header">Sembuh</div>
            <div class="card-body">
                <h5 class="card-title">${kasusSemb}</h5>
            </div>
            </div>
            <div class="card text-white bg-danger mb-3">
            <div class="card-header">Meninggal</div>
            <div class="card-body">
                <h5 class="card-title">${kasusMeni}</h5>
            </div>
            </div>
        </div>`;
        }else {
            divprovinsi.innerHTML = "";
            swal({
                icon: "error",
                title: "Provinsi Tidak Ditemukan!",
                text: "Cek kembali penulisan. Masukkan nama Provinsi dengan benar.",
                closeOnClickOutside: false,
              });
        }
    };

    const searchElement = document.querySelector("search-bar");

    document.addEventListener("DOMContentLoaded", () => {
        getdatacovid();
    });

    searchElement.clickEvent = getdataprovinsi;
};

export default main();