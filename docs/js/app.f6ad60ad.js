(function(t){function e(e){for(var i,c,u=e[0],o=e[1],s=e[2],f=0,d=[];f<u.length;f++)c=u[f],a[c]&&d.push(a[c][0]),a[c]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i]);l&&l(e);while(d.length)d.shift()();return r.push.apply(r,s||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,u=1;u<n.length;u++){var o=n[u];0!==a[o]&&(i=!1)}i&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var i={},a={app:0},r=[];function c(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=i,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)c.d(n,i,function(e){return t[e]}.bind(null,i));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=o;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"sku_container"},[t._l(t.specification,function(e,i){return n("div",{key:e.id,staticClass:"sku_group mb10"},[n("div",{staticClass:"spec_title"},[n("span",{staticClass:"label"},[t._v("规格名：")]),n("el-input",{staticClass:"input",attrs:{placeholder:"请输入规格名"},model:{value:e.value,callback:function(n){t.$set(e,"value","string"===typeof n?n.trim():n)},expression:"spec.value"}}),n("span",{staticClass:"remove",on:{click:function(e){return t.delSepc(i)}}},[t._v("×")])],1),n("div",{staticClass:"group_container"},[n("span",{staticClass:"label"},[t._v("规格值：")]),t._l(e.leaf,function(e,a){return n("el-popover",{key:a,attrs:{placement:"bottom",width:"120",trigger:"click"}},[n("el-input",{staticStyle:{width:"110px"},model:{value:e.value,callback:function(n){t.$set(e,"value","string"===typeof n?n.trim():n)},expression:"option.value"}}),n("div",{staticClass:"sku_item",attrs:{slot:"reference"},slot:"reference"},[n("span",{staticClass:"remove",on:{click:function(e){return e.stopPropagation(),t.delOption(i,a)}}},[t._v("×")]),n("div",{staticClass:"text"},[t._v(t._s(e.value))])])],1)}),n("el-input",{staticClass:"input",attrs:{"suffix-icon":"el-icon-plus",placeholder:"多个产品属性以空格隔开"},on:{blur:function(e){return t.addOption(i)}},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addOption(i)}},model:{value:t.addValues[i],callback:function(e){t.$set(t.addValues,i,e)},expression:"addValues[index]"}})],2)])}),n("div",{staticClass:"spec_title"},[n("el-button",{attrs:{type:"info",disabled:t.disabled},on:{click:t.addSpec}},[t._v("添加规格项目")])],1)],2),n("div",{staticClass:"sku_container"},[n("SkuSelect",{attrs:{skusData:t.specificationFilter}})],1),n("div",{staticClass:"sku_container"},[n("SkuTable",{attrs:{skusData:t.specificationFilter}}),n("vue-json-pretty",{attrs:{data:t.specificationFilter}})],1)])},r=[],c=n("75fc"),u=(n("28a5"),n("d538")),o=n.n(u),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.skusData,function(e,i){return n("div",{key:e.id+"_id",staticClass:"spec_title"},[n("span",{staticClass:"label"},[t._v(t._s(e.value)+"：")]),t._l(e.leaf,function(e){return n("el-button",{key:e.id,attrs:{type:t.activeSku[i].option.id===e.id?"primary":""},on:{click:function(n){return t.selectSku(i,e)}}},[t._v(t._s(e.value))])})],2)}),0)},l=[],f={data:function(){return{activeSku:[]}},props:{skusData:{type:Array,default:function(){return[]}}},watch:{skusData:{deep:!0,immediate:!0,handler:function(t){this.activeSku=t.map(function(t){return{spec:{value:t.value,id:t.id},option:{}}})}}},methods:{selectSku:function(t,e){if(this.activeSku[t].option&&this.activeSku[t].option.id===e.id)return this.activeSku[t].option={};this.activeSku[t].option=e}}},d=f,p=(n("7537"),n("2877")),v=Object(p["a"])(d,s,l,!1,null,"a2116b5c",null),h=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"flex"},[n("el-form",{staticClass:"guide_coefficient",attrs:{inline:!0,model:t.coefficient}},[n("el-form-item",{attrs:{label:"指导价倍数",prop:"guide_coefficient"}},[n("el-input-number",{attrs:{step:.1,min:1,precision:2},model:{value:t.coefficient.guide_coefficient,callback:function(e){t.$set(t.coefficient,"guide_coefficient",e)},expression:"coefficient.guide_coefficient"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.setGuideCoefficient}},[t._v("批量设置指导价倍数")])],1)],1),n("el-form",{attrs:{inline:!0,model:t.coefficient}},[n("el-form-item",{attrs:{label:"标价倍数",prop:"purchase_coefficient"}},[n("el-input-number",{attrs:{step:.1,min:1,precision:2},model:{value:t.coefficient.purchase_coefficient,callback:function(e){t.$set(t.coefficient,"purchase_coefficient",e)},expression:"coefficient.purchase_coefficient"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.setPurchaseCoefficient}},[t._v("批量设置标价倍数")])],1)],1)],1),n("egrid",t._g(t._b({attrs:{border:"","max-height":"800",data:t.data,columns:t.columns,"columns-props":t.columnsProps}},"egrid",t.$attrs,!1),t.$listeners))],1)},_=[],b=(n("6762"),n("2fdb"),n("ac6a"),n("cebc")),k=(n("7514"),n("a8db"));function g(t){for(var e=[],n=t.length-1;n>=0;n--)t[n+1]&&t[n+1].leaf?e[n]=t[n+1].leaf.length*e[n+1]||1:e[n]=1;return e}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,i=n||{},a=i.optionValue,r=void 0===a?"id":a,c=i.optionText,u=void 0===c?"value":c,o=[],s=0,l={},f=g(t);if(0===t.length)return o;t.forEach(function(t){var e=t.leaf;if(!e||0===e.length)return!0;s=(s||1)*e.length}),e.forEach(function(t){var e=t.skus,n=Object(k["a"])(t,["skus"]);l[e.map(function(t){return"".concat(t.k_id,"_").concat(t.v_id)}).join("|")]=n});for(var d=function(e){var n=[],i=[];t.forEach(function(a,c){var o=a.leaf,s={};if(!o||0===o.length)return!0;if(o.length>1){var l=parseInt(e/f[c],10)%o.length;s=t[c].leaf[l]}else s=t[c].leaf[0];a[r]&&s[r]&&(i.push("".concat(a[r],"_").concat(s[r])),n.push({k_id:a[r],k:a[u],v_id:s[r],v:s[u]}))});var a=l[i.join("|")]||{},c=Object.assign({},a);o.push(Object(b["a"])({},c,{skus:n}))},p=0;p<s;p++)d(p);return o}n("4f7f"),n("5df3"),n("1c4c"),n("6b54");function w(){var t=+new Date+"",e=parseInt(65536*(1+Math.random()))+"";return(+(e+t)).toString(32)}function O(t){return Array.from(new Set(t))}function S(t,e){return t=O(t),e=O(e),t.concat(e).filter(function(n){return!(t.includes(n)&&e.includes(n))})}var x={props:{skusData:{type:Array,default:function(){return[]}}},computed:{skusList:function(){return y(this.skusData).map(function(t){return{skus:t.skus,ids:t.skus.reduce(function(e,n,i){return"".concat(e).concat(n.k_id,"-").concat(n.v_id).concat(i===t.skus.length-1?"":"_")},"")}})},columns:function(){this.$createElement;var t=this.skusData.map(function(t){return{label:t.value,formater:function(e){var n=e.skus.find(function(e){return e.k===t.value});return n.v}}});return[].concat(Object(c["a"])(t),[{label:"规格",width:120,component:i["default"].extend({props:["row"],render:function(){var t=this,e=arguments[0];return e("ElInput",{attrs:{placeholder:"请输入规格",value:this.row.format},on:{input:function(e){return t.row.format=e.trim()}}})}})},{label:"厂家指导价",width:150,component:i["default"].extend({props:["row"],render:function(){var t=this,e=arguments[0];return e("ElInputNumber",{attrs:{placeholder:"请输入厂家指导价",value:this.row.guide_price,step:1,min:0,controls:!1,precision:0},on:{input:function(e){return t.row.guide_price=e}}})}})},{label:"进价",width:150,component:i["default"].extend({props:["row"],render:function(){var t=this,e=arguments[0];return e("ElInputNumber",{attrs:{placeholder:"请输入进价",value:this.row.purchase_price,step:1,min:0,controls:!1,precision:0},on:{input:function(e){return t.row.purchase_price=e}}})}})},{label:"标价",width:150,component:i["default"].extend({props:["row"],render:function(){var t=this,e=arguments[0];return e("ElInputNumber",{attrs:{placeholder:"请输入标价",value:this.row.sell_price,step:1,min:0,controls:!1,precision:0},on:{input:function(e){return t.row.sell_price=e}}})}})}])}},watch:{skusList:{deep:!0,immediate:!0,handler:function(t,e){var n=this;if(!t.length)return this.data=[];if(!e||!e.length)return this.initData(t);if(t.length===e.length)return this.data=t.map(function(t,e){return Object(b["a"])({},n.data[e],t)});if(t[0].skus.length!==e[0].skus.length)return this.initData(t);var i=this.diffIds(t,e);if(t.length>e.length){var a=[];t.forEach(function(t){var e=n.data.find(function(e){return e.ids===t.ids});e?a.push(e):a.push(Object(b["a"])({},t,{format:"",guide_price:void 0,purchase_price:void 0,sell_price:void 0}))}),this.data=a}else this.data=this.data.filter(function(t){return!i.includes(t.ids)})}}},data:function(){return{data:[],coefficient:{purchase_coefficient:0,guide_coefficient:0},columnsProps:{align:"center",minWidth:100}}},methods:{diffIds:function(t,e){return t=t.map(function(t){return t.ids}),e=e.map(function(t){return t.ids}),S(t,e)},initData:function(t){this.data=t.map(function(t){return Object(b["a"])({},t,{format:"",guide_price:void 0,purchase_price:void 0,sell_price:void 0})})},setGuideCoefficient:function(){var t=this.coefficient.guide_coefficient;this.data=this.data.map(function(e){return Object(b["a"])({},e,{purchase_price:(e.guide_price||0)*t})})},setPurchaseCoefficient:function(){var t=this.coefficient.purchase_coefficient;this.data=this.data.map(function(e){return Object(b["a"])({},e,{sell_price:(e.purchase_price||0)*t})})}}},C=x,j=(n("93cb"),Object(p["a"])(C,m,_,!1,null,"1b951476",null)),E=j.exports,$={components:{VueJsonPretty:o.a,SkuSelect:h,SkuTable:E},data:function(){return{addValues:[],specification:[{id:1,value:"颜色",leaf:[{id:11,value:"白色"},{id:12,value:"黑色"},{id:13,value:"金色"}]},{id:2,value:"内存",leaf:[{id:21,value:"128G"},{id:22,value:"256G"},{id:23,value:"512G"}]}]}},computed:{disabled:function(){return this.specification.length>3||this.specification.some(function(t){return!t.value})},specificationFilter:function(){return this.specification.filter(function(t){return t.value&&t.leaf.length})}},methods:{addSpec:function(){this.specification.push({id:w()+"_id",value:"",leaf:[]})},delSepc:function(t){this.specification.splice(t,1)},addOption:function(t){var e=this.addValues[t]||"";if(e=e.trim(),e){var n=this.specification[t].leaf,i=e.split(/\s+/).filter(function(t){return!n.some(function(e){return e.value===t})}).map(function(t){return{id:w()+"_id",value:t}});this.specification[t].leaf=O([].concat(Object(c["a"])(n),Object(c["a"])(i))),this.$set(this.addValues,t,"")}},delOption:function(t,e){this.specification[t].leaf.splice(e,1)}}},D=$,P=(n("baa2"),Object(p["a"])(D,a,r,!1,null,"42f5decf",null)),I=P.exports,V=n("f05a"),T=n.n(V),G=n("5c96"),M=n.n(G);n("0fae");i["default"].use(M.a,{size:"small"}),i["default"].use(T.a),i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(I)}}).$mount("#app")},5854:function(t,e,n){},7537:function(t,e,n){"use strict";var i=n("9409"),a=n.n(i);a.a},"93cb":function(t,e,n){"use strict";var i=n("cb5d"),a=n.n(i);a.a},9409:function(t,e,n){},baa2:function(t,e,n){"use strict";var i=n("5854"),a=n.n(i);a.a},cb5d:function(t,e,n){}});
//# sourceMappingURL=app.f6ad60ad.js.map