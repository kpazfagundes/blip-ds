import{r as e,h as r}from"./p-ba441ad3.js";const a=class{constructor(r){e(this,r),this.variant="system",this.icon=null}render(){return r("div",{class:{alert__header:!0,[`alert__header--${this.variant}`]:!0}},this.icon&&r("bds-icon",{theme:"outline",size:"x-large",color:"#fff",name:this.icon}),r("bds-typo",{variant:"fs-16",bold:"bold"},r("slot",null)))}};a.style=".alert__header{width:100%;min-height:64px;padding:12px 16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-align:center;align-items:center}.alert__header bds-icon{min-width:32px}.alert__header bds-typo{margin-left:8px;color:#ffffff}.alert__header--system{background:#3f7de8}.alert__header--error{background:#ff4c4c}.alert__header--warning{background:#f6a721}.alert__header--delete{background:#ff4c4c}";export{a as bds_alert_header}