(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[466],{233:(e,t,r)=>{Promise.resolve().then(r.bind(r,7415))},6463:(e,t,r)=>{"use strict";var a=r(1169);r.o(a,"useRouter")&&r.d(t,{useRouter:function(){return a.useRouter}})},7415:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>u});var a=r(7437),n=r(2265),s=r(6783),o=r(6463);let l=e=>{let{tipoMedicion:t,numMediciones:r,medicionesData:s,setMedicionesData:o,areaId:l,puestoIndex:i}=e;(0,n.useEffect)(()=>{let e=localStorage.getItem("mediciones-area-".concat(l,"-puesto-").concat(i));e&&o(JSON.parse(e))},[l,i,o]),(0,n.useEffect)(()=>{localStorage.setItem("mediciones-area-".concat(l,"-puesto-").concat(i),JSON.stringify(s))},[l,i,s]);let d=(e,t,r)=>{let a=[...s];a[e]={...a[e],[t]:r},o(a)};return(0,a.jsxs)("div",{className:"mb-8",children:[(0,a.jsxs)("h2",{className:"text-2xl font-bold mb-4 text-blue-600",children:["Medici\xf3n ",t]}),(0,a.jsxs)("table",{className:"w-full table-auto border-collapse",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"bg-red-600 text-white",children:[r>1&&(0,a.jsx)("th",{className:"border p-3",children:"Medici\xf3n No."}),(0,a.jsx)("th",{className:"border p-3",children:"Hora"}),(0,a.jsx)("th",{className:"border p-3",children:"P. DE TRABAJO E1"}),(0,a.jsx)("th",{className:"border p-3",children:"P. DE TRABAJO E2"}),(0,a.jsx)("th",{className:"border p-3",children:"PAREDES E1"}),(0,a.jsx)("th",{className:"border p-3",children:"PAREDES E2"})]})}),(0,a.jsx)("tbody",{children:s.map((e,t)=>(0,a.jsxs)("tr",{children:[r>1&&(0,a.jsxs)("td",{className:"border p-3 text-center font-bold text-blue-600",children:["Medici\xf3n No. ",t+1]}),(0,a.jsx)("td",{className:"border p-3",children:(0,a.jsx)("input",{type:"time",value:e.hora,onChange:e=>d(t,"hora",e.target.value),className:"w-full p-2 border rounded-md"})}),(0,a.jsx)("td",{className:"border p-3",children:(0,a.jsx)("input",{type:"number",min:"0",value:e.trabajoE1,onChange:e=>d(t,"trabajoE1",e.target.value),className:"w-full p-2 border rounded-md"})}),(0,a.jsx)("td",{className:"border p-3",children:(0,a.jsx)("input",{type:"number",min:"0",value:e.trabajoE2,onChange:e=>d(t,"trabajoE2",e.target.value),className:"w-full p-2 border rounded-md"})}),(0,a.jsx)("td",{className:"border p-3",children:(0,a.jsx)("input",{type:"number",min:"0",value:e.paredesE1,onChange:e=>d(t,"paredesE1",e.target.value),className:"w-full p-2 border rounded-md",placeholder:"N/A"})}),(0,a.jsx)("td",{className:"border p-3",children:(0,a.jsx)("input",{type:"number",min:"0",value:e.paredesE2,onChange:e=>d(t,"paredesE2",e.target.value),className:"w-full p-2 border rounded-md",placeholder:"N/A"})})]},t))})]})]})};var i=r(7476);let d=()=>{let{areas:e,setAreas:t}=(0,s.G)(),[r,l]=(0,n.useState)(null),d=(0,o.useRouter)(),c=(r,a,n)=>{let s=[...e];s[r].puestosData[a].puntos.splice(n,1),t(s)},u=(e,t,r)=>{d.push("/Mediciones?edit=true&areaIndex=".concat(e,"&puestoIndex=").concat(t,"&puntoIndex=").concat(r))},p=(e,t,a)=>{r&&r.areaIndex===e&&r.puestoIndex===t&&r.puntoIndex===a?l(null):l({areaIndex:e,puestoIndex:t,puntoIndex:a})};return(0,a.jsxs)("div",{className:"min-h-screen bg-gray-100 text-gray-900 p-8",children:[(0,a.jsx)("h1",{className:"text-4xl font-bold mb-8 text-blue-600 text-center",children:"Resumen de Mediciones"}),(0,a.jsx)("div",{className:"grid gap-6 md:grid-cols-2 lg:grid-cols-3",children:e.map((e,t)=>e.puestosData.map((n,s)=>{var o;return null===(o=n.puntos)||void 0===o?void 0:o.map((o,l)=>(0,a.jsxs)("div",{className:"bg-gradient-to-r from-indigo-100 to-blue-100 rounded-lg shadow-lg overflow-hidden border-l-4 border-blue-500",children:[(0,a.jsxs)("button",{onClick:()=>p(t,s,l),className:"w-full p-4 text-left flex justify-between items-center focus:outline-none",children:[(0,a.jsxs)("span",{className:"text-2xl font-bold text-gray-700",children:["Punto ",o.numeroPunto," - \xc1rea ",e.nombreArea]}),(0,a.jsxs)("div",{className:"flex space-x-2",children:[(0,a.jsx)("button",{className:"text-red-500 hover:text-red-700",onClick:()=>c(t,s,l),children:(0,a.jsx)(i.Ybf,{})}),(0,a.jsx)("button",{className:"text-green-500 hover:text-green-700",onClick:()=>u(t,s,l),children:(0,a.jsx)(i.vPQ,{})})]})]}),(null==r?void 0:r.areaIndex)===t&&r.puestoIndex===s&&r.puntoIndex===l&&(0,a.jsxs)("div",{className:"p-6 bg-white",children:[(0,a.jsxs)("div",{className:"mb-4",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Detalles del Punto:"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"\xc1rea:"})," ",e.nombreArea]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Departamento:"})," ",o.departamento]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Puesto:"})," ",n.nombrePuesto]}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"Tipo de Iluminaci\xf3n:"})," ",o.tipoIluminacion]})]}),(0,a.jsxs)("div",{className:"mb-4 overflow-x-auto",children:[(0,a.jsx)("h3",{className:"text-lg font-semibold text-gray-800 mb-2",children:"Mediciones:"}),o.mediciones&&o.mediciones.length>0?(0,a.jsxs)("table",{className:"min-w-full table-auto border-collapse",children:[(0,a.jsx)("thead",{children:(0,a.jsxs)("tr",{className:"bg-gray-200",children:[(0,a.jsx)("th",{className:"border p-2",children:"Hora"}),(0,a.jsx)("th",{className:"border p-2",children:"P. DE TRABAJO E1"}),(0,a.jsx)("th",{className:"border p-2",children:"P. DE TRABAJO E2"}),(0,a.jsx)("th",{className:"border p-2",children:"PAREDES E1"}),(0,a.jsx)("th",{className:"border p-2",children:"PAREDES E2"})]})}),(0,a.jsx)("tbody",{children:o.mediciones.map((e,t)=>(0,a.jsxs)("tr",{children:[(0,a.jsx)("td",{className:"border p-2",children:e.hora}),(0,a.jsx)("td",{className:"border p-2",children:e.trabajoE1}),(0,a.jsx)("td",{className:"border p-2",children:e.trabajoE2}),(0,a.jsx)("td",{className:"border p-2",children:e.paredesE1}),(0,a.jsx)("td",{className:"border p-2",children:e.paredesE2})]},t))})]}):(0,a.jsx)("p",{children:"No hay mediciones registradas para este punto."})]})]})]},"".concat(e.idArea,"-").concat(s,"-").concat(l)))}))})]})},c=[20,50,100,200,300,500,750,1e3,2e3];function u(){let{areas:e,setAreas:t}=(0,s.G)(),r=(0,o.useRouter)(),[i,u]=(0,n.useState)(""),[p,m]=(0,n.useState)([]),[b,h]=(0,n.useState)(""),[x,j]=(0,n.useState)(""),[g,f]=(0,n.useState)(""),[v,N]=(0,n.useState)(""),[y,E]=(0,n.useState)(""),[A,I]=(0,n.useState)(""),[O,S]=(0,n.useState)(1),[P,w]=(0,n.useState)(!1),[C,D]=(0,n.useState)(Array.from({length:"ARTIFICIAL"===A?1:4},()=>({hora:"",trabajoE1:"",trabajoE2:"",paredesE1:"N/A",paredesE2:"N/A"})));(0,n.useEffect)(()=>{{let e=JSON.parse(localStorage.getItem("areas")||"[]").flatMap(e=>e.puestosData).flatMap(e=>e.puntos).pop();S(e?e.numeroPunto+1:1)}},[]),(0,n.useEffect)(()=>{if(i){let t=e.find(e=>e.idArea.toString()===i);m(t?t.puestosData.map(e=>e.nombrePuesto):[]),h("")}},[i,e]),(0,n.useEffect)(()=>{D(Array.from({length:"ARTIFICIAL"===A?1:4},()=>({hora:"",trabajoE1:"",trabajoE2:"",paredesE1:"N/A",paredesE2:"N/A"})))},[A]);let R=t=>{let r=e.flatMap(e=>e.puestosData).flatMap(e=>e.puntos).sort((e,t)=>e.numeroPunto-t.numeroPunto),a=r.findIndex(e=>e.numeroPunto===O);if("next"===t&&a<r.length-1){let e=r[a+1];S(e.numeroPunto),j(e.identificacion),f(e.departamento),E(e.nivelIluminacion),I(e.tipoIluminacion),D(e.mediciones),N(e.planoTrabajo)}else if("previous"===t&&a>0){let e=r[a-1];S(e.numeroPunto),j(e.identificacion),f(e.departamento),E(e.nivelIluminacion),I(e.tipoIluminacion),D(e.mediciones),N(e.planoTrabajo)}};return(0,a.jsx)("div",{className:"min-h-screen bg-gray-100 text-gray-900 p-8",children:P?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d,{}),(0,a.jsx)("button",{type:"button",onClick:()=>w(!1),className:"bg-blue-600 text-white p-3 rounded-md mt-4",children:"Volver a Mediciones"})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h1",{className:"text-4xl font-bold mb-8 text-blue-600 text-center",children:["Mediciones - \xc1rea: ",i||"Sin Seleccionar"," - Departamento: ",g||"Sin Seleccionar"," - Punto: ",O]}),(0,a.jsxs)("div",{className:"flex flex-col space-y-4 mb-8",children:[(0,a.jsxs)("select",{value:i,onChange:e=>{u(e.target.value)},className:"p-3 border border-gray-300 rounded-md",children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Seleccione un \xc1rea"}),e.map(e=>(0,a.jsxs)("option",{value:e.idArea,children:["\xc1rea ",e.idArea," - ",e.identificacionData.areaIluminada||e.nombreArea]},e.idArea))]}),(0,a.jsxs)("select",{value:b,onChange:e=>{h(e.target.value)},className:"p-3 border border-gray-300 rounded-md",disabled:!i,children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Seleccione un Puesto"}),p.map((e,t)=>(0,a.jsx)("option",{value:e,children:e},t))]}),(0,a.jsx)("input",{type:"text",value:x,onChange:e=>j(e.target.value),placeholder:"Identificaci\xf3n",className:"p-3 border border-gray-300 rounded-md"}),(0,a.jsx)("input",{type:"text",value:g,onChange:e=>f(e.target.value),placeholder:"Departamento",className:"p-3 border border-gray-300 rounded-md"}),(0,a.jsxs)("select",{value:v,onChange:e=>{N(e.target.value)},className:"p-3 border border-gray-300 rounded-md",children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Seleccione Plano de Trabajo"}),(0,a.jsx)("option",{value:"HORIZONTAL",children:"Horizontal"}),(0,a.jsx)("option",{value:"VERTICAL",children:"Vertical"}),(0,a.jsx)("option",{value:"OBLICUO",children:"Oblicuo"})]}),(0,a.jsxs)("select",{value:y,onChange:e=>{let t=Number(e.target.value);E(isNaN(t)?"":t)},className:"p-3 border border-gray-300 rounded-md",children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Seleccione Nivel de Iluminaci\xf3n"}),c.map(e=>(0,a.jsxs)("option",{value:e,children:[e," lux"]},e))]}),(0,a.jsxs)("select",{value:A,onChange:e=>{I(e.target.value),D(Array.from({length:"ARTIFICIAL"===e.target.value?1:4},()=>({hora:"",trabajoE1:"",trabajoE2:"",paredesE1:"N/A",paredesE2:"N/A"})))},className:"p-3 border border-gray-300 rounded-md",children:[(0,a.jsx)("option",{value:"",disabled:!0,children:"Seleccione Tipo de Iluminaci\xf3n"}),(0,a.jsx)("option",{value:"NATURAL",children:"Natural"}),(0,a.jsx)("option",{value:"ARTIFICIAL",children:"Artificial"}),(0,a.jsx)("option",{value:"COMBINADA",children:"Combinada"})]})]}),A&&(0,a.jsx)(l,{tipoMedicion:A,numMediciones:"ARTIFICIAL"===A?1:4,areaId:Number(i),puestoIndex:p.indexOf(b),medicionesData:C,setMedicionesData:D}),(0,a.jsxs)("div",{className:"flex space-x-4 mb-8",children:[(0,a.jsx)("button",{type:"button",onClick:()=>R("previous"),className:"bg-gray-600 text-white p-3 rounded-md",children:"Punto Anterior"}),(0,a.jsx)("button",{type:"button",onClick:()=>R("next"),className:"bg-gray-600 text-white p-3 rounded-md",children:"Siguiente Punto"}),(0,a.jsx)("button",{type:"button",onClick:()=>{let r=O,a=e.map(e=>{if(e.idArea.toString()===i){let t=e.puestosData.map(e=>e.nombrePuesto===b?(e.puntos.push({numeroPunto:r,identificacion:x,departamento:g,planoTrabajo:v,nivelIluminacion:y,tipoIluminacion:A,mediciones:C}),r++,{...e,puntos:[...e.puntos]}):e);return{...e,puestosData:t}}return e});t(a),localStorage.setItem("areas",JSON.stringify(a)),alert("Datos guardados con \xe9xito")},className:"bg-blue-600 text-white p-3 rounded-md",children:"Guardar"}),(0,a.jsx)("button",{type:"button",onClick:()=>{S(e=>e+1),j(""),N(""),E(""),I(""),D(Array.from({length:4},()=>({hora:"",trabajoE1:"",trabajoE2:"",paredesE1:"N/A",paredesE2:"N/A"})))},className:"bg-green-600 text-white p-3 rounded-md",children:"Agregar Punto"}),(0,a.jsx)("button",{type:"button",onClick:()=>{S(e=>e+1),f(""),j(""),E(""),I(""),D(Array.from({length:4},()=>({hora:"",trabajoE1:"",trabajoE2:"",paredesE1:"N/A",paredesE2:"N/A"})))},className:"bg-purple-600 text-white p-3 rounded-md",children:"Siguiente Departamento"}),(0,a.jsx)("button",{type:"button",onClick:()=>w(!0),className:"bg-yellow-600 text-white p-3 rounded-md",children:"Ir a Resumen"})]}),(0,a.jsxs)("div",{className:"flex space-x-4 mb-8 mt-4",children:[(0,a.jsx)("button",{type:"button",onClick:()=>r.push("/Reconocimiento"),className:"bg-orange-600 text-white p-3 rounded-md",children:"Ir a Reconocimiento"}),(0,a.jsx)("button",{type:"button",onClick:()=>{localStorage.removeItem("areas"),t([]),S(1),alert("Datos eliminados con \xe9xito")},className:"bg-red-600 text-white p-3 rounded-md",children:"Borrar Datos"})]})]})})}},6783:(e,t,r)=>{"use strict";r.d(t,{G:()=>o,z:()=>l});var a=r(7437),n=r(2265);let s=(0,n.createContext)(void 0),o=()=>{let e=(0,n.useContext)(s);if(!e)throw Error("useAreas debe ser usado dentro de un AreasProvider");return e},l=e=>{let{children:t}=e,[r,o]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=localStorage.getItem("areas");e&&o(JSON.parse(e))},[]),(0,n.useEffect)(()=>{r.length>0&&localStorage.setItem("areas",JSON.stringify(r))},[r]),(0,a.jsx)(s.Provider,{value:{areas:r,setAreas:o},children:t})}},1810:(e,t,r)=>{"use strict";r.d(t,{w_:()=>c});var a=r(2265),n={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=a.createContext&&a.createContext(n),o=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var a,n;a=t,n=r[t],(a=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!=typeof a)return a;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(a))in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function c(e){return t=>a.createElement(u,l({attr:d({},e.attr)},t),function e(t){return t&&t.map((t,r)=>a.createElement(t.tag,d({key:r},t.attr),e(t.child)))}(e.child))}function u(e){var t=t=>{var r,{attr:n,size:s,title:i}=e,c=function(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r={};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){if(t.indexOf(a)>=0)continue;r[a]=e[a]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}(e,o),u=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),a.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:r,style:d(d({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),i&&a.createElement("title",null,i),e.children)};return void 0!==s?a.createElement(s.Consumer,null,e=>t(e)):t(n)}}},e=>{var t=t=>e(e.s=t);e.O(0,[956,130,215,744],()=>t(233)),_N_E=e.O()}]);