class SearchBar extends HTMLElement {
    
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#txtprovinsi").value;
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>

        .search-prov {
            margin: 20px 10px;
           
        }
        
        .search-prov input {
          width: 75%;
          box-sizing: border-box;
          border: 3px solid #ccc;
          border-radius: 15px;
          font-size: 20px;
          background-color: white;
          /* background-image: url('searchicon.png'); */
          background-position: 10px 10px; 
          background-repeat: no-repeat;
          padding: 12px 20px;
          transition: width 0.4s ease-in-out;
        }
        
        .search-prov input:focus {
            /* box-shadow: 0 10px 14px 0 rgba(0,0,0,0.24),0 15px 25px 0 rgba(0,0,0,0.19); */
            box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
            outline:none !important;
        }
        
        .search-prov button {
          width: 20%;
          padding: 13px 0px;
          box-sizing: border-box;
          border: 3px solid #ccc;
          border-radius: 15px;
          font-size: 20px;
          margin-bottom: 5px; 
          background-color: #0351b5;
          color: #fff;
          outline:none !important;
        }

        .search-prov button:hover{
            background-color: #0a2c77;
        }

        @media screen and (max-width: 600px) {
            .search-prov input {
                width: 100%;
                font-size: 10px;
                padding: 12px 5px;
                margin: 5px;
            }
        
            .search-prov button {
                width: 100%;
                font-size: 15px;
                padding: 10px;
                margin: 5px;
            }
        
        }
        </style>
        <div class="search-prov">
        <input type="search" placeholder="Silahkan Masukkan Nama Provinsi Yang Dicari" name="txtprovinsi" id="txtprovinsi" autocomplete="off">
        <button type="submit" id="btnsearch">Search</button>
    </div>`;

    this.shadowDOM.querySelector("#btnsearch").addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);
