import "./search-bar.js";
import swal from 'sweetalert';
import Chart from "chart.js";

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

    const getDataCovidHarian = async () => {
        try {
            const response = await fetch("https://indonesia-covid-19.mathdro.id/api/harian");
            const responseJson = await response.json();
            renderChartDataCovid(responseJson.data);
        } catch(error) {
            showResponseMessage(error);
        }
    };
    
    const unixToTime = (unixTime) => {
        let wkt = new Date(unixTime);
        let time = ((wkt.getMonth() > 8) ? (wkt.getMonth() + 1) : ('0' + (wkt.getMonth() + 1))) + '/' + ((wkt.getDate() > 9) ? wkt.getDate() : ('0' + wkt.getDate())) + '/' + wkt.getFullYear();
        return time;
      }
    
    const renderChartDataCovid = (data) => {
        let datas = [];
        let labels = [];
    
        data.forEach(item => {
            labels.push(unixToTime(item.tanggal));
            datas.push(item.jumlahKasusBaruperHari);
        });
        renderChartCovid(datas, labels);
    };
    
    const renderChartCovid = (datas,labels) => {
        var ctx = document.getElementById('chartCovid').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Jumlah Kasus Positif',
                    data: datas,
                    backgroundColor: [
                        'rgba(255, 0, 0, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        type: 'time',
                        time: {
                            unit: 'day',
                            stepSize: 4
                        }
                    }]
                }
            }
        });
    };

    document.addEventListener("DOMContentLoaded", () => {
        getdatacovid();
        getDataCovidHarian();
    });

    searchElement.clickEvent = getdataprovinsi;
};

export default main();