(function(e){function t(t){for(var n,s,u=t[0],c=t[1],i=t[2],l=0,f=[];l<u.length;l++)s=u[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var c=r[s];0!==o[c]&&(n=!1)}n&&(a.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={app:0},a=[];function s(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"7b1aa861"}[e]+".js"}function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r=o[e];if(0!==r)if(r)t.push(r[2]);else{var n=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=n);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=s(e);var i=new Error;a=function(t){c.onerror=c.onload=null,clearTimeout(l);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",i.name="ChunkLoadError",i.type=n,i.request=a,r[1](i)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/strapi-test/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1b6c":function(e,t,r){},"384f":function(e,t,r){},"523c":function(e,t,r){"use strict";r("f7a4")},"56d7":function(e,t,r){"use strict";r.r(t);r("e623"),r("e379"),r("5dc8"),r("37e1");var n=r("2b0e"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),r("router-link",{attrs:{to:"/leisure-centers"}},[e._v("Leisure centers")]),e._v(" | "),r("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),e._v(" | "),r("router-link",{attrs:{to:"/locations"}},[e._v("Locations")])],1),r("router-view")],1)},a=[],s=(r("5c0b"),r("2877")),u={},c=Object(s["a"])(u,o,a,!1,null,null,null),i=c.exports,l=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},f=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._m(0),r("h3",[e._v("Installed CLI Plugins")]),e._m(1),r("h3",[e._v("Essential Links")]),e._m(2),r("h3",[e._v("Ecosystem")]),e._m(3)])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" For a guide and recipes on how to configure / customize this project,"),r("br"),e._v(" check out the "),r("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(". ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[e._v("babel")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[e._v("router")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",target:"_blank",rel:"noopener"}},[e._v("eslint")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest",target:"_blank",rel:"noopener"}},[e._v("unit-jest")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),r("li",[r("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),r("li",[r("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),r("li",[r("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),r("li",[r("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],m={name:"HelloWorld",props:{msg:String}},d=m,_=(r("75af"),Object(s["a"])(d,v,h,!1,null,"4682a89c",null)),g=_.exports,b={name:"Home",components:{HelloWorld:g}},j=b,k=Object(s["a"])(j,p,f,!1,null,null,null),w=k.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"leisure-centers"},e._l(e.leisureCenters,(function(t){return r("article",{key:t.name},[r("h1",[e._v(e._s(t.Name))]),r("p",[e._v(e._s(t.Description))])])})),0)},x=[],C=r("1da1"),O=(r("96cf"),r("bc3a")),E=r.n(O),L={name:"LeisureCenter",data:function(){return{leisureCenters:[]}},created:function(){this.fetchLeisureCenters()},methods:{fetchLeisureCenters:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("http://localhost:1337/leisure-centers");case 2:r=t.sent,n=r.data,console.log(n),e.leisureCenters=n;case 6:case"end":return t.stop()}}),t)})))()}}},P=L,$=Object(s["a"])(P,y,x,!1,null,null,null),I=$.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"projects"},e._l(e.projects,(function(t,n){return r("article",{key:t.name},[n>0?r("hr"):e._e(),r("div",{staticClass:"thumbnail",style:{"background-image":"url("+e.getImageUrl(t,"thumbnail")+")"}}),r("div",{staticClass:"content"},[r("h1",[e._v(e._s(t.Name))]),r("p",[e._v(e._s(t.Description))]),r("p",[r("a",{attrs:{href:t.GithubLink,target:"_blank"}},[e._v("GitHub")])])])])})),0)},M=[],R={name:"Project",data:function(){return{projects:[]}},created:function(){this.fetchProjects()},methods:{fetchProjects:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("http://localhost:1337/projects");case 2:r=t.sent,n=r.data,console.log(n),e.projects=n;case 6:case"end":return t.stop()}}),t)})))()},getImageUrl:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"large",r=e.CoverImage[0];if(!r)return"";var n=r.formats?r.formats[t].url:r.url;return"http://localhost:1337".concat(n)}}},S=R,H=(r("523c"),Object(s["a"])(S,T,M,!1,null,null,null)),N=H.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"locations"},[r("div",{staticStyle:{width:"100%",height:"500px"},attrs:{id:"map"}}),r("ul",e._l(e.locations,(function(t){return r("li",{key:t.Name},[e._v(e._s(t.Name))])})),0)])},W=[],J=(r("d81d"),r("159b"),r("ac6d"),r("e192")),V=r.n(J);V.a.accessToken="pk.eyJ1Ijoic3lsdmFpbm1hcnR5IiwiYSI6ImNrZ2Y5d3c2cTExNjQyeW52YWJsd3pnem0ifQ.RyXgjV7V9dlUAoqecezdlA";var Y={name:"Location",data:function(){return{locations:[],map:null}},created:function(){this.fetchLocations()},methods:{fetchLocations:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,E.a.get("http://localhost:1337/locations");case 2:r=t.sent,n=r.data,e.locations=n,e.createMap();case 6:case"end":return t.stop()}}),t)})))()},createMap:function(){var e=this;this.map=new V.a.Map({container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[13.9100845,-66.5637859],zoom:3}),this.locations.forEach((function(t){(new V.a.Marker).setLngLat([t.longitude,t.latitude]).addTo(e.map)}))}}},z=Y,D=(r("f310"),Object(s["a"])(z,A,W,!1,null,null,null)),F=D.exports;n["a"].use(l["a"]);var U=[{path:"/",name:"Home",component:w},{path:"/leisure-centers",name:"LeisureCenter",component:I},{path:"/projects",name:"Project",component:N},{path:"/locations",name:"Location",component:F},{path:"/about",name:"About",component:function(){return r.e("about").then(r.bind(null,"f820"))}}],q=new l["a"]({mode:"history",base:"/strapi-test/",routes:U}),G=q;n["a"].config.productionTip=!1,new n["a"]({router:G,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";r("9c0c")},"75af":function(e,t,r){"use strict";r("384f")},"9c0c":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"},f310:function(e,t,r){"use strict";r("1b6c")},f7a4:function(e,t,r){}});
//# sourceMappingURL=app.9f23c84b.js.map