function main() {
    const getdatacovidIndo = () => {
        fetch('https://indonesia-covid-19.mathdro.id/api').then(response => {
            return response.json();
        })
        .then(responseJson => {
            console.log(JSON.stringify(responseJson));
            // if(responseJson.error) {
            //     showResponseMessage(responseJson.message);
            // } else {
            //     renderAlldata(responseJson.indo);
            // }
            // document.body.innerText = JSON.stringify(responseJson);
        })
        .catch(error => {
            // showResponseMessage(error);
            console.log(error);
        });
    };

    document.addEventListener("DOMContentLoaded", () => {
        getdatacovidIndo();
    });
}

export default main();