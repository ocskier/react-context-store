(this["webpackJsonpreact-context-map"]=this["webpackJsonpreact-context-map"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),o=n(0),s=n.n(o),r=n(10),i=n(6),l=n.n(i),u=n(8),d=n(5),j=n(3),p=n(4),b=n.n(p),O=n(1),m=s.a.createContext(null);function h(e,t){var n=t.type,c=t.payload;switch(n){case"UPDATE_LOCATION":return Object(j.a)(Object(j.a)({},e),{},{location:Object(j.a)({},c)});case"UPDATE_COORDS":case"UPDATE_CITY":return Object(j.a)(Object(j.a)({},e),{},{location:Object(j.a)(Object(j.a)({},e.location),c)});case"UPDATE_NAME":return Object(j.a)(Object(j.a)({},e),c);default:throw new Error}}function x(e){var t=e.children,n=Object(o.useReducer)(h,{name:"",location:{city:""}}),c=Object(d.a)(n,2),a=c[0],s=c[1];return Object(o.useEffect)((function(){navigator.geolocation.getCurrentPosition(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,c,a,o,r,i,u;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.coords,c=n.latitude,a=n.longitude,e.next=3,fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=".concat(c,",").concat(a,"&key=AIzaSyD_tgpw_aI3elBJ3FQzH5kqi00Qep6jXxM"));case 3:return o=e.sent,e.next=6,o.json();case 6:r=e.sent,console.log(r.plus_code),i=[r.plus_code.compound_code.split(" ").slice(1,2)," ",r.plus_code.compound_code.split(" ").slice(2,3)],u=i.join("").substring(0,i.join("").length-1),s(b.a.updateLocation(u,{lat:c,lon:a}));case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(){console.log("Couldn't get position! Using Default.."),s(b.a.updateLocation("Raleigh, NC",{lat:35.787743,lon:-78.644257}))}))}),[]),Object(O.jsx)(m.Provider,{value:{state:a,dispatch:s},children:t})}n(24);var f=Object(r.c)({accessToken:"pk.eyJ1IjoianJqYWNrc28iLCJhIjoiY2s5ZzFvMmN2MGV0dzNtbzN4dGlqaGc1dCJ9.vUi9VvVM7kb2AoPYLVW89w"}),v=function(){var e,t,n=Object(o.useContext)(m).state.location,c=null===(e=n.coords)||void 0===e?void 0:e.lat,a=null===(t=n.coords)||void 0===t?void 0:t.lon;return Object(O.jsx)(O.Fragment,{children:c&&a&&Object(O.jsx)(f,{style:"mapbox://styles/mapbox/streets-v9",containerStyle:{height:"90vh",width:"100%",border:"1px solid black",marginTop:"1rem"},center:[a,c],zoom:[9],children:Object(O.jsx)(r.b,{type:"symbol",id:"marker",layout:{"icon-image":"marker-15"},children:Object(O.jsx)(r.a,{coordinates:[c,a]})})})})},g=function(){var e=Object(o.useContext)(m).state.name;return Object(O.jsx)("div",{style:{marginTop:"30px"},children:Object(O.jsxs)("h2",{className:"is-size-4",children:[Object(O.jsx)("strong",{children:"Name"}),": ",e]})})},y=function(){var e=Object(o.useContext)(m).state.location;return Object(O.jsx)("div",{children:Object(O.jsxs)("h2",{className:"is-size-4",children:[Object(O.jsx)("strong",{children:"Location"}),": ",e.city]})})},N=function(){var e=Object(o.useContext)(m),t=e.state,n=t.name,c=t.location,a=e.dispatch,s=function(e){var t=Object(o.useState)(e),n=Object(d.a)(t,2),c=n[0],a=n[1];return Object(o.useEffect)((function(){var t=setTimeout((function(){a(e)}),2e3);return function(){clearTimeout(t)}}),[e]),c}(c.city);return Object(o.useEffect)(Object(u.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=10;break}return console.log("Setting new location coords"),e.next=4,fetch("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(s,"&key=AIzaSyD_tgpw_aI3elBJ3FQzH5kqi00Qep6jXxM"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,console.log(n),a(b.a.updateCoords({lat:n.results[0].geometry.location.lat,lon:n.results[0].geometry.location.lng}));case 10:case"end":return e.stop()}}),e)}))),[s]),Object(O.jsxs)("div",{className:"user-form",children:[Object(O.jsxs)("div",{className:"input-item",children:[Object(O.jsx)("label",{className:"label",children:"Update Name: "}),Object(O.jsx)("input",{className:"input",onChange:function(e){return a(b.a.updateName(e.target.value))},value:n})]}),Object(O.jsxs)("div",{className:"input-item",children:[Object(O.jsx)("label",{className:"label",children:"Update Location: "}),Object(O.jsx)("input",{className:"input",onChange:function(e){return a(b.a.updateCity(e.target.value))},value:c.city})]})]})};n(25);function C(){return Object(O.jsx)(x,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsxs)("div",{className:"container left-container",children:[" ",Object(O.jsx)("h2",{className:"is-size-4",children:"We'll use the React Context API with useReducer to create a Global Store with dispatch actions to pass and receive data in any component."}),Object(O.jsxs)("div",{className:"container form-container",children:[Object(O.jsx)(N,{}),Object(O.jsxs)("h2",{className:"is-size-4",children:["User Info Here"," ",Object(O.jsx)("span",{role:"img","aria-label":"point-down-label",children:"\ud83d\udc47"})]}),Object(O.jsx)("p",{children:"These two children components and their nested components can receive data."}),Object(O.jsx)(g,{}),Object(O.jsx)(y,{})]})]}),Object(O.jsx)("div",{className:"container map",children:Object(O.jsx)(v,{})})]})})}var w=document.getElementById("root");a.a.render(Object(O.jsx)(C,{}),w)},4:function(e,t){var n="UPDATE_LOCATION",c="UPDATE_COORDS",a="UPDATE_CITY",o="UPDATE_NAME",s={updateLocation:function(e,t){return{type:n,payload:{city:e,coords:t}}},updateCoords:function(e){return{type:c,payload:{coords:e}}},updateCity:function(e){return{type:a,payload:{city:e}}},updateName:function(e){return{type:o,payload:{name:e}}}};e.exports=s}},[[26,1,2]]]);
//# sourceMappingURL=main.d2f39bd8.chunk.js.map