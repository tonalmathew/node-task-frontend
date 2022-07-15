(function(e){function t(t){for(var a,s,o=t[0],l=t[1],i=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&p.push(n[s][0]),n[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);b&&b(t);while(p.length)p.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],a=!0,o=1;o<c.length;o++){var l=c[o];0!==n[l]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=c[0]))}return e}var a={},n={app:0},r=[];function s(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=a,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(c,a,function(t){return e[t]}.bind(null,a));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/node-task-frontend/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var b=l;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"4c69":function(e,t,c){"use strict";c("c4db")},"56d7":function(e,t,c){"use strict";c.r(t);var a=c("7a23");const n={class:"app"},r={class:"container mt-5"},s=Object(a["e"])("h1",{class:"text-center"},"The easiest way to buy and sell stocks",-1),o=Object(a["e"])("p",{class:"text-center"},"Stock analysis and screening tool for investors in India.",-1),l={class:"mt-5"};function i(e,t,c,i,b,d){const p=Object(a["l"])("Header"),u=Object(a["l"])("Search");return Object(a["h"])(),Object(a["d"])("div",n,[Object(a["g"])(p),Object(a["e"])("div",r,[s,o,Object(a["e"])("div",l,[Object(a["g"])(u)])])])}const b=e=>(Object(a["j"])("data-v-2f285558"),e=e(),Object(a["i"])(),e),d={class:"group"},p={class:"input w-50"},u=b(()=>Object(a["e"])("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",class:"bi bi-search",viewBox:"0 0 16 16"},[Object(a["e"])("path",{d:"M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"})],-1)),O={key:0,class:"list-group w-50"},j=["onClick"],h={key:1,class:"card w-50 mt-5"},m={class:"card-body p-4 rounded"},f={class:"card-title"},y={class:"table p-5"},v=Object(a["f"])("Market price: "),g={class:"text-red"},_=Object(a["f"])("Debt: "),w={class:"text-red"},x=Object(a["f"])("Yield: "),k={class:"text-red"},S=Object(a["f"])("EPS: "),M={class:"text-red"},P=Object(a["f"])("Market Cap: "),C={class:"text-red"},D=Object(a["f"])("Reserves: "),A={class:"text-red"},R=Object(a["f"])("ROCE: "),E={class:"text-red"},H=Object(a["f"])("ROE Cap: "),I={class:"text-red"};function T(e,t,c,n,r,s){return Object(a["h"])(),Object(a["d"])("div",d,[Object(a["e"])("div",p,[u,Object(a["o"])(Object(a["e"])("input",{type:"email",class:"form-control p-3 ps-5 shadow bg-body rounded",placeholder:"Search a company","onUpdate:modelValue":t[0]||(t[0]=e=>r.searchString=e)},null,512),[[a["n"],r.searchString]])]),""!=r.company_names&&0==r.showDetails?(Object(a["h"])(),Object(a["d"])("div",O,[(Object(a["h"])(!0),Object(a["d"])(a["a"],null,Object(a["k"])(r.company_names,e=>(Object(a["h"])(),Object(a["d"])("div",{key:e},[Object(a["e"])("button",{onClick:t=>s.displayDetails(e.company_name),type:"button",class:"list-group-item list-group-item-action p-3 shadow bg-body","aria-current":"true"},Object(a["m"])(e.company_name),9,j)]))),128))])):Object(a["c"])("",!0),r.showDetails?(Object(a["h"])(),Object(a["d"])("div",h,[Object(a["e"])("div",m,[Object(a["e"])("h5",f,Object(a["m"])(r.company_details[0].company_name),1),Object(a["e"])("table",y,[Object(a["e"])("tr",null,[Object(a["e"])("td",null,[v,Object(a["e"])("span",g,Object(a["m"])(r.company_details[0].current_market_price),1)]),Object(a["e"])("td",null,[_,Object(a["e"])("span",w,Object(a["m"])(r.company_details[0].debt_to_equity),1)]),Object(a["e"])("td",null,[x,Object(a["e"])("span",k,Object(a["m"])(r.company_details[0].divident_yeald),1)])]),Object(a["e"])("tr",null,[Object(a["e"])("td",null,[S,Object(a["e"])("span",M,Object(a["m"])(r.company_details[0].eps),1)]),Object(a["e"])("td",null,[P,Object(a["e"])("span",C,Object(a["m"])(r.company_details[0].market_cap),1)]),Object(a["e"])("td",null,[D,Object(a["e"])("span",A,Object(a["m"])(r.company_details[0].reserves),1)])]),Object(a["e"])("tr",null,[Object(a["e"])("td",null,[R,Object(a["e"])("span",E,Object(a["m"])(r.company_details[0].roce),1)]),Object(a["e"])("td",null,[H,Object(a["e"])("span",I,Object(a["m"])(r.company_details[0].roe),1)])])])])])):Object(a["c"])("",!0)])}var z=c("2ef0"),J=c("bc3a"),U=c.n(J),q=U.a.create({baseURL:"https://riafy-test-api.herokuapp.com/",headers:{"Content-type":"application/json"}});class B{getAll(e){return q.get("/api/v1/company/"+e)}}var L=new B,N={name:"Notes",data(){return{searchString:"",company_names:"",company_details:"",showDetails:!1}},watch:{searchString:Object(z["debounce"])((function(){this.search()}),1e3)},methods:{search(){L.getAll(this.searchString).then(e=>{this.company_names=e.data.result})},displayDetails(e){this.showDetails=!0,L.getAll(e).then(e=>{this.company_details=e.data.result,console.log(e.data.result)})}}},V=(c("4c69"),c("d959")),Y=c.n(V);const F=Y()(N,[["render",T],["__scopeId","data-v-2f285558"]]);var G=F;const K=e=>(Object(a["j"])("data-v-35cd2b85"),e=e(),Object(a["i"])(),e),Q={class:"navbar navbar-expand-lg"},W=K(()=>Object(a["e"])("div",{class:"container-fluid ms-4"},[Object(a["e"])("h1",null,"Stocks")],-1)),X=[W];function Z(e,t,c,n,r,s){return Object(a["h"])(),Object(a["d"])("nav",Q,X)}var $={name:"Header"};c("707c");const ee=Y()($,[["render",Z],["__scopeId","data-v-35cd2b85"]]);var te=ee,ce={name:"App",components:{Search:G,Header:te},data(){return{}},methods:{}};const ae=Y()(ce,[["render",i]]);var ne=ae;c("ab8b");Object(a["b"])(ne).mount("#app")},"707c":function(e,t,c){"use strict";c("c40b")},c40b:function(e,t,c){},c4db:function(e,t,c){}});
//# sourceMappingURL=app.c4183514.js.map