import css from "bootstrap/dist/css/bootstrap.min.css";

class ProvItem extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDom = this.attachShadow({mode:"open"});
    }

    connectedCallback() {
        // this.attachShadow({mode: "open"});
        this.render();
    }

    // set provs(provs) {
    //     this._provs = provs;
    //     this.render();
    // }

    render() {
        this.shadowDom.innerHTML = `
        <style>
            ${css}
        </style>
        <div class="card-deck mb-3 text-center">
            <div class="card text-white bg-info mb-3">
            <div class="card-header">Kasus Positif</div>
            <div class="card-body">
                <h5 class="card-title">14000</h5>
            </div>
            </div>
            <div class="card text-white bg-success mb-3">
            <div class="card-header">Sembuh</div>
            <div class="card-body">
                <h5 class="card-title">1000</h5>
            </div>
            </div>
            <div class="card text-white bg-danger mb-3">
            <div class="card-header">Meninggal</div>
            <div class="card-body">
                <h5 class="card-title">1000</h5>
            </div>
            </div>
        </div>`;
    }
}

customElements.define("prov-item", ProvItem);