import{r as n,c as e,h as s,H as i}from"./p-ba441ad3.js";const t=class{constructor(s){n(this,s),this.bdsBannerClose=e(this,"bdsBannerClose",7),this.visible=!0,this.fixed=!1,this.close=()=>{this.bdsBannerClose.emit(),this.visible=!1}}async toggle(){this.visible=!this.visible}render(){return s(i,{class:{banner:!0,"banner--hide":!this.visible}},s("div",{class:"banner__content"},s("slot",null)),!this.fixed&&s("div",{class:"banner__action",onClick:this.close},s("bds-icon",{name:"close"})))}};t.style=':host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#f8fbfb;background:#c226fb}:host(.banner){width:100%;min-height:40px;-webkit-box-sizing:border-box;box-sizing:border-box;font-family:"Nunito Sans", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;font-weight:600}@media (max-width: 780px){:host(.banner){padding:16px}}.banner__content{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}@media (max-width: 780px){.banner__content{display:inline;-webkit-box-sizing:border-box;box-sizing:border-box}}:host(.banner--hide){display:none}.banner__action{cursor:pointer}';export{t as bds_banner}