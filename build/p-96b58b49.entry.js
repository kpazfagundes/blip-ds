import{r as t,c as i,h as s,g as o}from"./p-ba441ad3.js";const e=class{constructor(s){t(this,s),this.bdsChange=i(this,"bdsChange",7),this.bdsCancel=i(this,"bdsCancel",7),this.bdsFocus=i(this,"bdsFocus",7),this.bdsBlur=i(this,"bdsBlur",7),this.isOpen=!1,this.text="",this.danger=!1,this.disabled=!1,this.label="",this.icon="",this.placeholder="",this.refNativeInput=t=>{this.nativeInput=t},this.onFocus=()=>{this.bdsFocus.emit()},this.onBlur=()=>{this.bdsBlur.emit()},this.toggle=()=>{this.disabled||(this.isOpen=!this.isOpen)},this.getText=()=>{var t,i;const s=this.childOptions.find((t=>t.value==this.value));return(null==s?void 0:s.titleText)?s.titleText:null!==(i=null===(t=null==s?void 0:s.textContent)||void 0===t?void 0:t.trim())&&void 0!==i?i:""},this.handler=t=>{const{detail:{value:i}}=t;this.value=i,this.toggle()},this.setFocusWrapper=()=>{this.nativeInput&&this.nativeInput.setFocus()},this.removeFocusWrapper=t=>{this.nativeInput&&"bds-input"!==t.relatedTarget.localName&&this.nativeInput.removeFocus()},this.keyPressWrapper=t=>{var i,s,o,e,n,r,h,l;const a="bds-select"===t.target.localName,d="bds-input"===t.target.localName;switch(t.key){case"Enter":this.isOpen||!a&&!d||this.toggle();break;case"ArrowDown":if(this.childOptionSelected)return void(null===(s=null===(i=this.childOptionSelected.nextElementSibling)||void 0===i?void 0:i.firstElementChild)||void 0===s||s.focus());null===(e=null===(o=this.el.firstElementChild)||void 0===o?void 0:o.firstElementChild)||void 0===e||e.focus();break;case"ArrowUp":if(this.childOptionSelected)return void(null===(r=null===(n=this.childOptionSelected.previousElementSibling)||void 0===n?void 0:n.firstElementChild)||void 0===r||r.focus());null===(l=null===(h=this.el.previousElementSibling)||void 0===h?void 0:h.firstElementChild)||void 0===l||l.focus()}}}valueChanged(){this.bdsChange.emit({value:this.value});for(const t of this.childOptions)t.selected=this.value===t.value;this.text=this.getText()}handleWindow(t){this.el.contains(t.target)||(this.isOpen=!1)}componentWillLoad(){this.options&&this.parseOptions()}parseOptions(){this.options&&(this.internalOptions="string"==typeof this.options?JSON.parse(this.options):this.options)}componentDidLoad(){for(const t of this.childOptions)t.selected=this.value===t.value,t.addEventListener("optionSelected",this.handler);this.text=this.getText()}get childOptions(){return Array.from(this.options?this.el.shadowRoot.querySelectorAll("bds-select-option"):this.el.querySelectorAll("bds-select-option"))}get childOptionSelected(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")).find((t=>t.selected)):Array.from(this.el.querySelectorAll("bds-select-option")).find((t=>t.selected))}render(){return s("div",{class:"select",tabindex:"0",onFocus:this.setFocusWrapper,onBlur:this.removeFocusWrapper,onKeyDown:this.keyPressWrapper},s("bds-input",{icon:this.icon,label:this.label,ref:this.refNativeInput,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.toggle,value:this.text,danger:this.danger,disabled:this.disabled,placeholder:this.placeholder,readonly:!0},s("div",{slot:"input-right",class:"select__icon"},s("bds-icon",{size:"small",name:this.isOpen?"arrow-up":"arrow-down",color:"inherit"}))),s("div",{class:{select__options:!0,"select__options--open":this.isOpen}},this.internalOptions?this.internalOptions.map(((t,i)=>s("bds-select-option",{value:t.value,key:i},t.label))):s("slot",null)))}get el(){return o(this)}static get watchers(){return{value:["valueChanged"],options:["parseOptions"]}}};e.style=":host{display:block}.select{position:relative;outline:none}.select__icon{color:#8ca0b3;display:-ms-flexbox;display:flex}.select__options{background:#f8fbfb;width:100%;max-height:250px;position:absolute;top:99%;left:0;border-radius:8px;-webkit-box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);overflow-y:auto;z-index:2;margin-top:4px;-webkit-transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s;transition:transform 0.25s, opacity 0.75s, visibility 0.75s, -webkit-transform 0.25s;-webkit-transform-origin:top left;transform-origin:top left;-webkit-transform:scaleY(0);transform:scaleY(0);visibility:hidden;opacity:0;-webkit-box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4);box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4)}.select__options::-webkit-scrollbar{width:16px;background-color:transparent}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options--open{visibility:visible;-webkit-transform:scale(1);transform:scale(1);opacity:1}";export{e as bds_select}