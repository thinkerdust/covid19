import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Chart from "chart.js";
import "./css/style.css";
import main from "./js/main.js";
import washhand from './img/4.png';
import usemask from './img/5.png';
import scldistancing from './img/6.png';

document.querySelector('#WashHand').src = washhand;
document.querySelector('#UseMask').src = usemask;
document.querySelector('#SclDistancing').src = scldistancing;

document.addEventListener("DOMContentLoaded", main);

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

const showResponseMessage = (message = "Check your internet connection") => {
    alert(message);
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

getDataCovidHarian();