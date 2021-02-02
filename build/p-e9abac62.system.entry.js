var __awaiter=this&&this.__awaiter||function(t,e,i,n){function r(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,s){function u(t){try{h(n.next(t))}catch(e){s(e)}}function a(t){try{h(n["throw"](t))}catch(e){s(e)}}function h(t){t.done?i(t.value):r(t.value).then(u,a)}h((n=n.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var i={label:0,sent:function(){if(s[0]&1)throw s[1];return s[1]},trys:[],ops:[]},n,r,s,u;return u={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(u[Symbol.iterator]=function(){return this}),u;function a(t){return function(e){return h([t,e])}}function h(u){if(n)throw new TypeError("Generator is already executing.");while(i)try{if(n=1,r&&(s=u[0]&2?r["return"]:u[0]?r["throw"]||((s=r["return"])&&s.call(r),0):r.next)&&!(s=s.call(r,u[1])).done)return s;if(r=0,s)u=[u[0]&2,s.value];switch(u[0]){case 0:case 1:s=u;break;case 4:i.label++;return{value:u[1],done:false};case 5:i.label++;r=u[1];u=[0];continue;case 7:u=i.ops.pop();i.trys.pop();continue;default:if(!(s=i.trys,s=s.length>0&&s[s.length-1])&&(u[0]===6||u[0]===2)){i=0;continue}if(u[0]===3&&(!s||u[1]>s[0]&&u[1]<s[3])){i.label=u[1];break}if(u[0]===6&&i.label<s[1]){i.label=s[1];s=u;break}if(s&&i.label<s[2]){i.label=s[2];i.ops.push(u);break}if(s[2])i.ops.pop();i.trys.pop();continue}u=e.call(t,i)}catch(a){u=[6,a];r=0}finally{n=s=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var t=0,e=0,i=arguments.length;e<i;e++)t+=arguments[e].length;for(var n=Array(t),r=0,e=0;e<i;e++)for(var s=arguments[e],u=0,a=s.length;u<a;u++,r++)n[r]=s[u];return n};System.register(["./p-957e4f08.system.js","./p-5e5d57d0.system.js"],(function(t){"use strict";var e,i,n,r,s,u;return{setters:[function(t){e=t.r;i=t.c;n=t.h;r=t.H},function(t){s=t.w;u=t.e}],execute:function(){var a=".sc-bds-input-chips-h{display:block}.input-chips__chip.sc-bds-input-chips{margin:2px 4px 2px 0px}.input-chips__chips.sc-bds-input-chips{-ms-flex:1;flex:1}";var h=t("bds_input_chips",function(){function t(t){e(this,t);this.bdsChange=i(this,"bdsChange",7);this.bdsChangeChips=i(this,"bdsChangeChips",7);this.bdsBlur=i(this,"bdsBlur",7);this.bdsSubmit=i(this,"bdsSubmit",7);this.chips=[];this.type="text";this.label="";this.icon="";this.delimiters=/,|;/;this.errorMessage="";this.danger=false;this.value="";this.duplicated=false;this.disableSubmit=false}t.prototype.valueChanged=function(){this.bdsChangeChips.emit({data:this.chips,value:this.getLastChip()})};t.prototype.isValid=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.validateChips()]}))}))};t.prototype.get=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){return[2,this.chips]}))}))};t.prototype.clear=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.chips=[];this.value="";return[2]}))}))};t.prototype.add=function(t){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.setChip(t);return[2]}))}))};t.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.nativeInput.setFocus();return[2]}))}))};t.prototype.removeFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.nativeInput.removeFocus();return[2]}))}))};t.prototype.validateChips=function(){var t=this;if(this.type==="email"){return!this.chips.some((function(e){return!t.validateChip(e)}))}else{return true}};t.prototype.handleOnBlur=function(){this.bdsBlur.emit(this.chips)};t.prototype.handleAddChip=function(t){if(this.disableSubmit){return}var e=t.detail.value;this.setChip(e);this.value=""};t.prototype.getLastChip=function(){return this.chips[this.chips.length-1]};t.prototype.handleBackRemove=function(t){var e=t.detail.value;if((e===null||e.length<=0)&&this.chips.length){this.removeLastChip();this.bdsChangeChips.emit({data:this.chips,value:e})}};t.prototype.verifyAndSubstituteDelimiters=function(t){if(t.length===1&&t[0].match(this.delimiters)){return""}var e=t.replace(/;/g,",").replace(/\,+|;+/g,",");if(e[0].match(this.delimiters)){e=e.substring(1)}return e};t.prototype.handleChange=function(t){return __awaiter(this,void 0,void 0,(function(){var e,i,n,r;var s=this;return __generator(this,(function(u){e=t.detail.value;this.value=e?e.trim():"";if(e.length===0)return[2];i=e.match(this.delimiters);if(!i)return[2];n=this.verifyAndSubstituteDelimiters(e);if(!n){this.clearInputValues();return[2]}r=n.split(this.delimiters);r.forEach((function(t){s.setChip(t)}));this.clearInputValues();return[2]}))}))};t.prototype.clearInputValues=function(t){if(t===void 0){t=""}this.nativeInput.value=t;this.value=t};t.prototype.setChip=function(t){if(!this.duplicated){var e=this.chips.some((function(e){return e.toLowerCase()===t.toLowerCase()}));if(e)return}if(!s(t)){return}this.chips=__spreadArrays(this.chips,[t])};t.prototype.validateChip=function(t){var e=t.trim();if(this.type==="email"&&u(e)){return false}return true};t.prototype.removeLastChip=function(){this.chips=this.chips.slice(0,this.chips.length-1)};t.prototype.removeChip=function(t){var e=t.detail.id;this.chips=this.chips.filter((function(t,i){return i.toString()!==e}))};t.prototype.renderChips=function(){var t=this;if(!this.chips.length){return[]}return this.chips.map((function(e,i){var r=i.toString();return n("bds-chip",{class:"input-chips__chip",id:r,key:r,variant:"primary",danger:!t.validateChip(e),deletable:true,onBdsDelete:function(e){return t.removeChip(e)}},e)}))};t.prototype.render=function(){var t=this;return n(r,null,n("bds-input",{ref:function(e){return t.nativeInput=e},icon:this.icon,label:this.label,onBdsKeyDownBackspace:function(e){return t.handleBackRemove(e)},onBdsSubmit:function(e){return t.handleAddChip(e)},onBdsOnBlur:function(){return t.handleOnBlur()},onBdsChange:function(e){return t.handleChange(e)},maxlength:this.maxlength,value:this.value,"error-message":this.errorMessage,danger:this.danger,chips:true},n("span",{slot:"inside-input-left"},this.renderChips()),n("div",{slot:"input-right"},n("slot",{name:"input-right"}))))};Object.defineProperty(t,"watchers",{get:function(){return{chips:["valueChanged"]}},enumerable:false,configurable:true});return t}());h.style=a}}}));