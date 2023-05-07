(()=>{"use strict";var e={751:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,".desc {\r\n  max-width: 300px;\r\n  text-align: center;\r\n  line-height: 2;\r\n}",""]);const s=i},650:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,":root {\r\n    --focus-color: aqua;\r\n}\r\n\r\nform {\r\n    margin-top: 1rem;\r\n}\r\n\r\n.inputs {\r\n    background: rgba(255, 255, 255, 0.1);\r\n    padding: 1rem;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.8);\r\n}\r\n\r\n.form-title {\r\n    font-size: 1.3rem;\r\n    color: white;\r\n}\r\n\r\nlabel {\r\n    position: absolute;\r\n    top: 0;\r\n    text-align: left;\r\n    max-width: 400px;\r\n    width: 100%;\r\n    font-size: 0.8rem;\r\n    color: white;\r\n}\r\n\r\n.input {\r\n    padding: 1rem;\r\n    position: relative;\r\n    display: flex;\r\n    width: 80%;\r\n    justify-content: center;\r\n}\r\n\r\n.field {\r\n    height: 1.5rem;\r\n    max-width: 400px;\r\n    width: 100%;\r\n    border: 1px solid #4a4a4b;\r\n    border-radius: 3px;\r\n    padding-left: 0.5rem;\r\n}\r\n\r\n.field:focus {\r\n    outline: 2px solid var(--focus-color);\r\n    border: 2px solid var(--focus-color);\r\n    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.4);\r\n    background: #f8f8f8;\r\n}\r\n\r\n.error-message {\r\n    position: absolute;\r\n    bottom: 0;\r\n    font-size: 0.7rem;\r\n    background:rgb(255, 255, 255);\r\n    padding: 0 0.4rem;\r\n    color: rgb(228, 16, 16);\r\n}\r\n\r\n.error {\r\n    border: 2px solid red;\r\n    background: rgb(255, 154, 154);\r\n}\r\n\r\n.error:focus {\r\n    border: 2px solid red;\r\n    border-radius: 3px;\r\n    outline: 2px solid red;\r\n}\r\n\r\n.validated {\r\n    border: 2px solid green;\r\n    background: rgb(183, 255, 183);\r\n}\r\n\r\n.validated:focus {\r\n    border: 2px solid green;\r\n    border-radius: 3px;\r\n    outline: 2px solid green;\r\n}\r\n\r\n.message {\r\n    height: 200px;\r\n}\r\n\r\n.submit {\r\n    background-color: red;\r\n    justify-self: center;\r\n    padding: 0.5rem 2rem;\r\n    font-size: 1rem;\r\n    color: aqua;\r\n    border-radius: 7px;\r\n    font-weight: bold;\r\n    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.4)\r\n}\r\n\r\n",""]);const s=i},83:(e,n,t)=>{t.d(n,{Z:()=>s});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,".item-container {\r\n  height: 250px;\r\n  width: 250px;\r\n  margin: 0 20px;\r\n  border: 2px solid white;\r\n  background:rgba(255, 255, 255, 0.2);\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.item-container:hover {\r\n  box-shadow: 0 0 40px black;\r\n  outline: 4px solid aqua;\r\n}\r\n\r\n.item {\r\n  height: 160px;\r\n  margin: 20px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.item-desc {\r\n  color: black;\r\n  width: 100%;\r\n  text-align: center;\r\n  background-color: white;\r\n}\r\n",""]);const s=i},426:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(81),a=t.n(r),o=t(645),i=t.n(o),s=t(667),d=t.n(s),c=new URL(t(582),t.b),l=new URL(t(237),t.b),p=new URL(t(66),t.b),u=new URL(t(314),t.b),m=new URL(t(154),t.b),f=new URL(t(711),t.b),h=new URL(t(781),t.b),g=new URL(t(807),t.b),b=i()(a()),v=d()(c),x=d()(l),y=d()(p),C=d()(u),L=d()(m),E=d()(f),w=d()(h),S=d()(g);b.push([e.id,":root {\r\n  --primary-blue: aqua;\r\n  --primary-red: rgb(228, 42, 42);\r\n  --overlay-color: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n/* outfit-regular - latin */\r\n@font-face {\r\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\r\n  font-family: 'Outfit';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url("+v+") format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */\r\n       url("+x+") format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n/* outfit-700 - latin */\r\n@font-face {\r\n  font-display: swap; /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\r\n  font-family: 'Outfit';\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  src: url("+y+") format('woff2'), /* Chrome 36+, Opera 23+, Firefox 39+ */\r\n       url("+C+") format('woff'); /* Chrome 5+, Firefox 3.6+, IE 9+, Safari 5.1+ */\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-family: 'Outfit', serif;\r\n}\r\n\r\nbody {\r\n  background: url("+L+");\r\n  background-position: center;\r\n  background-size: cover;\r\n  background-repeat: repeat;\r\n}\r\n\r\nfooter {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 20px;\r\n  background: rgba(0, 0, 0, 0.8);\r\n  color: white;\r\n}\r\n\r\nli {\r\n  text-align: center;\r\n  list-style-type: none;\r\n  margin-top: 10px;\r\n}\r\n\r\na {\r\n  color: white;\r\n}\r\n\r\nh1 {\r\n  text-shadow: 2px 2px 5px black;\r\n}\r\n\r\n.github {\r\n  height: 30px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.logo {\r\n  aspect-ratio: 1;\r\n  height: 30px;\r\n  border-radius: 100%;\r\n  box-shadow: 2px 2px 5px black;\r\n}\r\n\r\n.logo:hover {\r\n  height: 40px;\r\n}\r\n\r\n.content {\r\n  width: 100%;\r\n  height: 100vh; \r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.header {\r\n  height: 150px;\r\n  background-color: var(--overlay-color);\r\n  padding: 20px;\r\n  text-align: center;\r\n}\r\n\r\n.jp-name-logo {\r\n  display: flex;\r\n  height: 30px;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: 10px;\r\n}\r\n\r\n.sushi {\r\n  color: var(--primary-blue);\r\n}\r\n\r\n.mushi {\r\n  color: var(--primary-red);\r\n}\r\n\r\n.tab-div {\r\n  padding: 0 25%;\r\n  margin-top: 20px;\r\n}\r\n\r\n.tabs {\r\n  display: flex;\r\n  justify-content: space-around;\r\n  align-items: center;\r\n  color: black;\r\n}\r\n\r\n.tabs > li {\r\n  padding: 5px 2px;\r\n  transition: transform 0.3s; \r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n.tabs > li:hover {\r\n  color: aqua;\r\n  cursor: pointer;\r\n}\r\n\r\n.tabs > li:nth-child(2) {\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\n\r\n.selected {\r\n  color: aqua;\r\n}\r\n\r\n.about {\r\n  display: grid;\r\n  place-items: start;\r\n  padding: 20px;\r\n  background: url("+E+");\r\n  background-size: cover;\r\n  /* background-position-x: 120px; */\r\n  height: 100%;\r\n}\r\n\r\n.menu {\r\n  display: grid;\r\n  height: 100%;\r\n  padding: 40px;\r\n  background: url("+w+");\r\n  background-size: cover;\r\n  background-position: center;\r\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n  place-items: center;\r\n  gap: 40px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.contact {\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  background: url("+S+");\r\n  background-size: cover;\r\n  background-position: 100px;;\r\n  height: 100%;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.hero-img {\r\n  height: 180px;\r\n}",""]);const k=b},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=o[c]||0,p="".concat(c," ").concat(l);o[c]=l+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var f=a(m,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);n[s].references--}for(var d=r(e,a),c=0;c<o.length;c++){var l=t(o[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}o=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},314:(e,n,t)=>{e.exports=t.p+"c5b9036de5e54bff1793.woff"},66:(e,n,t)=>{e.exports=t.p+"016948b6e141358baa7b.woff2"},237:(e,n,t)=>{e.exports=t.p+"9d906fd6aa1c15deeff9.woff"},582:(e,n,t)=>{e.exports=t.p+"8f48df74b0b71f7810ab.woff2"},807:(e,n,t)=>{e.exports=t.p+"59f90462e49296a675c3.jpg"},781:(e,n,t)=>{e.exports=t.p+"620a9d7dd7f9d13d2990.jpg"},711:(e,n,t)=>{e.exports=t.p+"2b19e54269c790a5595f.jpg"},154:(e,n,t)=>{e.exports=t.p+"76c2cd5cf53d41096287.jpg"}},n={};function t(r){var a=n[r];if(void 0!==a)return a.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),a=t.n(r),o=t(569),i=t.n(o),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=a(),f.insertStyleElement=l(),n()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"5377152a3cb54a54fd9e.png",g=t.p+"925aa8e685ab0217bb34.png";var b=t(751),v={};v.styleTagTransform=u(),v.setAttributes=d(),v.insert=i().bind(null,"head"),v.domAPI=a(),v.insertStyleElement=l(),n()(b.Z,v),b.Z&&b.Z.locals&&b.Z.locals;var x=t(83),y={};y.styleTagTransform=u(),y.setAttributes=d(),y.insert=i().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=l(),n()(x.Z,y),x.Z&&x.Z.locals&&x.Z.locals;const C=t.p+"32c3093d0da96e2333bc.jpg",L=t.p+"5e912883229790187665.jpg",E=t.p+"2157415fcc71ed43852c.jpg",w=t.p+"03690662bed924843ad7.jpg",S=t.p+"d0bc80823542fc65416d.jpg",k=t.p+"1455f771b0d94d1981c7.jpg";var q=t(650),j={};function Z(){const e=/[^A-Z-]/i,n=document.querySelector(".name"),t=document.querySelector(".name-error");return t.textContent&&(t.textContent=""),e.test(n.value)&&n.value.length>0?(t.textContent="please use alphabet characters only",n.classList.remove("validated"),n.classList.add("error")):n.classList.contains("error")&&(n.classList.remove("error"),n.classList.add("validated"),t.textContent=""),n.value.length>24?(n.value=n.value.slice(0,-1),t.textContent="*Name limit is 24 characters"):(n.classList.contains("error")&&!e.test(n.value)||0===n.value.length)&&(n.classList.remove("error"),t.textContent="",n.classList.contains("validated")||n.classList.add("validated")),n.classList.contains("error")||n.classList.add("validated"),n.classList.contains("validated")&&0===n.value.length&&n.classList.remove("validated"),!!n.classList.contains("validated")}function I(){const e=document.querySelector(".email"),n=document.querySelector(".confirm"),t=document.querySelector(".email-error"),r=document.querySelector(".confirm-error");return e.value.length>0&&(e.value===n.value?(n.classList.remove("error"),n.classList.add("validated"),r.textContent=""):(n.classList.remove("validated"),n.classList.add("error"),r.textContent="*Emails do not match"),/\w+@\w+[.]\w{3}/.test(e.value)?(e.classList.remove("error"),t.textContent="",e.classList.add("validated")):(t.textContent="*Please enter a valid email",e.classList.remove("validated"),e.classList.add("error"))),!(!e.classList.contains("validated")||!n.classList.contains("validated"))}function T(){const e=document.querySelector(".phone"),n=document.querySelector(".phone-error");return e.value.length>0?e.validity.valid?(e.classList.remove("error"),e.classList.add("validated"),n.textContent=""):(e.classList.remove("validated"),e.classList.add("error"),n.textContent="*Please enter a valid phone number"):e.classList.remove("validated"),!!e.classList.contains("validated")}function U(){const e=document.querySelectorAll(".container"),n=document.querySelectorAll(".tab");for(let n of e)n.style.display="none";for(let e of n)e.classList.remove("selected")}function A(){U();const e=document.querySelector(".about"),n=document.getElementById("about-tab");e.style.display="grid",n.classList.add("selected")}function M(){U();const e=document.querySelector(".menu"),n=document.getElementById("menu-tab");e.style.display="grid",n.classList.add("selected")}function R(){U();const e=document.querySelector(".contact"),n=document.getElementById("contact-tab");e.style.display="grid",n.classList.add("selected")}j.styleTagTransform=u(),j.setAttributes=d(),j.insert=i().bind(null,"head"),j.domAPI=a(),j.insertStyleElement=l(),n()(q.Z,j),q.Z&&q.Z.locals&&q.Z.locals,document.body.appendChild(function(){const e=document.createElement("div");return e.classList.add("content"),e.appendChild(function(){const e=document.createElement("header");e.classList.add("header");const n=document.createElement("h1");n.textContent="SUSHI",n.classList.add("sushi");const t=document.createElement("span");t.textContent="MUSHI",t.classList.add("mushi");const r=document.createElement("div");r.classList.add("jp-name-logo");const a=document.createElement("h1");a.textContent="寿司",a.classList.add("sushi");const o=document.createElement("span");o.textContent="虫",o.classList.add("mushi");const i=new Image;i.src=h,i.classList.add("logo");const s=document.createElement("div");s.classList.add("tab-div");const d=document.createElement("ul");d.classList.add("tabs");const c=document.createElement("li");c.textContent="About",c.id="about-tab",c.classList.add("tab"),c.addEventListener("click",A);const l=document.createElement("li");l.textContent="Menu",l.id="menu-tab",l.classList.add("tab"),l.addEventListener("click",M);const p=document.createElement("li");return p.textContent="Contact",p.id="contact-tab",p.classList.add("tab"),p.addEventListener("click",R),e.appendChild(n),n.appendChild(t),e.appendChild(r),r.appendChild(a),a.appendChild(o),r.appendChild(i),e.appendChild(s),s.appendChild(d),d.appendChild(c),d.appendChild(l),d.appendChild(p),e}()),e.appendChild(function(){const e=document.createElement("main");return e.classList.add("main"),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("about"),e.classList.add("container");const n=document.createElement("p");n.classList.add("desc"),n.textContent="Hiroki's passion for sushi-making started in his family's sushi restaurant, where he watched his father and grandfather create traditional dishes with precision and care. After training with renowned chefs and becoming head chef at a prestigious restaurant, Hiroki fulfilled his lifelong dream of opening his own sushi restaurant in 2015.";const t=document.createElement("p");return t.classList.add("desc"),t.textContent="Sushimushi quickly became known for its exceptional quality and innovative dishes, while its bug theme ('mushi' means bug in japanese) and decor have won over diners with its unique charm.",e.appendChild(n),e.appendChild(t),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("menu"),e.classList.add("container");const n=["Nigiri Sushi","Maki Sushi","Ramen","Udon","Tempura","Drinks"],t=[C,L,E,w,S,k];for(let r=0;r<n.length;r++){let a=document.createElement("div");a.classList.add("item-container"),a.id=`item-container${r+1}`,a.style.background=`url(${t[r]})`,a.style.backgroundPosition="center",a.style.backgroundSize="cover";let o=document.createElement("p");o.classList.add("item-desc"),o.id=`item-desc-${r+1}`,o.textContent=n[r],a.appendChild(o),e.appendChild(a)}return e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("contact"),e.classList.add("container");const n=document.createElement("form");n.method="get",n.classList.add("form");const t=document.createElement("div");t.classList.add("inputs");const r=document.createElement("h2");r.classList.add("form-title"),r.textContent="Contact Us!";const a=document.createElement("div");a.classList.add("input");const o=document.createElement("label");o.for="name",o.textContent="Name";const i=document.createElement("input");i.classList.add("field","name"),i.type="text",i.name="name",i.id="name",i.required=!0;const s=document.createElement("p");s.classList.add("error-message","name-error");const d=document.createElement("div");d.classList.add("input");const c=document.createElement("label");c.for="email",c.textContent="Email";const l=document.createElement("input");l.classList.add("field","email"),l.type="email",l.name="email",l.id="email",l.required=!0;const p=document.createElement("p");p.classList.add("error-message","email-error");const u=document.createElement("div");u.classList.add("input");const m=document.createElement("label");m.for="confirm",m.textContent="Confirm Email";const f=document.createElement("input");f.classList.add("field","confirm"),f.type="email",f.name="confirm",f.id="confirm",f.required=!0;const h=document.createElement("p");h.classList.add("error-message","confirm-error");const g=document.createElement("div");g.classList.add("input");const b=document.createElement("label");b.for="phone",b.textContent="Phone Number";const v=document.createElement("input");v.classList.add("field","phone"),v.type="tel",v.name="phone",v.id="phone",v.pattern="^(\\+\\d{1,2}\\s?)?\\(?\\d{3}\\)?[\\s.-]?\\d{3}[\\s.-]?\\d{4}$",v.required=!0;const x=document.createElement("p");x.classList.add("error-message","phone-error");const y=document.createElement("div");y.classList.add("input");const C=document.createElement("label");C.for="subject",C.textContent="Subject";const L=document.createElement("input");L.classList.add("field","subject"),L.type="text",L.name="subject",L.id="subject",L.required=!0;const E=document.createElement("p");E.classList.add("error-message","subject-error");const w=document.createElement("div");w.classList.add("input");const S=document.createElement("label");S.for="message",S.textContent="Message";const k=document.createElement("textarea");k.classList.add("field","message"),k.name="message",k.id="message",k.required=!0;const q=document.createElement("p");q.classList.add("error-message","message-error");const j=document.createElement("button");return j.classList.add("submit"),j.textContent="SUBMIT",j.onclick=e=>{e.preventDefault(),Z()&&I()&&T()&&alert("Message Sent!")},e.appendChild(n),n.appendChild(t),t.appendChild(r),t.appendChild(a),a.appendChild(o),a.appendChild(i),a.appendChild(s),t.appendChild(d),d.appendChild(c),d.appendChild(l),d.appendChild(p),t.appendChild(u),u.appendChild(m),u.appendChild(f),u.appendChild(h),t.appendChild(g),g.appendChild(b),g.appendChild(v),g.appendChild(x),t.appendChild(y),y.appendChild(C),y.appendChild(L),y.appendChild(E),t.appendChild(w),w.appendChild(S),w.appendChild(k),w.appendChild(q),t.appendChild(j),e}()),e}()),document.body.appendChild(function(){const e=document.createElement("footer"),n=document.createElement("p");n.textContent="©Jeff Ramos 2023";const t=document.createElement("a");t.href="https://github.com/jeff-ramos-dev";const r=new Image;return r.src=g,r.classList.add("github"),e.appendChild(n),e.appendChild(t),t.appendChild(r),e}()),U(),document.querySelector(".logo").addEventListener("click",U),function(){const e=document.querySelector(".name"),n=document.querySelector(".email"),t=document.querySelector(".confirm"),r=document.querySelector(".phone");e.addEventListener("input",(()=>Z())),n.addEventListener("input",(()=>I())),t.addEventListener("input",(()=>I())),r.addEventListener("input",(()=>T()))}()})()})();