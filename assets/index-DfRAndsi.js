import{r as m,j as a}from"./index-BUwDdHEC.js";import{a as S,b as ia}from"./index.esm-B_cCxrCP.js";import{$ as e,S as n}from"./Service-D1tXHKk9.js";import"./dataTables-Bv0GBhZ0.js";import{C as da,a as ua}from"./CCardBody-DdJUQ_8c.js";import{C as z,a as U}from"./CRow-CVjXwXJa.js";import{c as ma}from"./cil-plus-D8mtC-W5.js";import{C as V,a as q,b as P,c as Z,d as $}from"./CModalTitle-CeLxhaoU.js";import{C as f}from"./CFormLabel-DCcPN9pc.js";import{C as b}from"./CFormInput-D_5uT0ac.js";import{C as Ca}from"./CFormSelect-P7K8cPYq.js";import"./DefaultLayout-DgQnorHS.js";import"./cil-user-Dlmw-Gem.js";import"./CFormControlWrapper-B5xLoip0.js";import"./CFormControlValidation-B45OMUH1.js";var Aa={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function Sa(t){if(typeof t=="number")return{value:t,unit:"px"};var l,u=(t.match(/^[0-9.]*/)||"").toString();u.includes(".")?l=parseFloat(u):l=parseInt(u,10);var r=(t.match(/[^0-9]*$/)||"").toString();return Aa[r]?{value:l,unit:r}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(l,"px.")),{value:l,unit:"px"})}function H(t){var l=Sa(t);return"".concat(l.value).concat(l.unit)}var fa=function(t,l,u){var r="react-spinners-".concat(t,"-").concat(u);if(typeof window>"u"||!window.document)return r;var i=document.createElement("style");document.head.appendChild(i);var C=i.sheet,p=`
    @keyframes `.concat(r,` {
      `).concat(l,`
    }
  `);return C&&C.insertRule(p,0),r},g=function(){return g=Object.assign||function(t){for(var l,u=1,r=arguments.length;u<r;u++){l=arguments[u];for(var i in l)Object.prototype.hasOwnProperty.call(l,i)&&(t[i]=l[i])}return t},g.apply(this,arguments)},ba=function(t,l){var u={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&l.indexOf(r)<0&&(u[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)l.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(u[r[i]]=t[r[i]]);return u},pa=fa("ClipLoader","0% {transform: rotate(0deg) scale(1)} 50% {transform: rotate(180deg) scale(0.8)} 100% {transform: rotate(360deg) scale(1)}","clip");function _a(t){var l=t.loading,u=l===void 0?!0:l,r=t.color,i=r===void 0?"#000000":r,C=t.speedMultiplier,p=C===void 0?1:C,_=t.cssOverride,E=_===void 0?{}:_,x=t.size,R=x===void 0?35:x,j=ba(t,["loading","color","speedMultiplier","cssOverride","size"]),L=g({background:"transparent !important",width:H(R),height:H(R),borderRadius:"100%",border:"2px solid",borderTopColor:i,borderBottomColor:"transparent",borderLeftColor:i,borderRightColor:i,display:"inline-block",animation:"".concat(pa," ").concat(.75/p,"s 0s infinite linear"),animationFillMode:"both"},E);return u?m.createElement("span",g({style:L},j)):null}const xa=({loading:t})=>t&&a.jsx("div",{style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",backgroundColor:"rgba(255, 255, 255, 0.8)",zIndex:9999,display:"flex",justifyContent:"center",alignItems:"center"},children:a.jsx(_a,{color:"#36d7b7",size:150})});var ha="/sucursales/nueva_sucursal",va="/sucursales/cargar_sucursal",Ra="/sucursales/cargar_sucursal_camara",ja="/sucursales/actualizar_sucursal",Ua="/sucursales/nueva_sucursal_camara",ga="/sucursales/actualizar_sucursal_camara";function Va(){const[t,l]=m.useState(!1),[u,r]=m.useState(!1),[i,C]=m.useState(!1),[p,_]=m.useState(0),[E,x]=m.useState(0),[R,j]=m.useState(""),[L,O]=m.useState(""),[W,I]=m.useState(""),[J,y]=m.useState(""),[K,w]=m.useState(""),[h,N]=m.useState(""),[Q,T]=m.useState(""),[X,B]=m.useState(""),[Y,G]=m.useState(""),[aa,k]=m.useState(""),ea=async()=>{let c=e("#Sucursal").val(),A=e("#Direccion").val(),d=e("#Telefono").val(),o=e("#Correo").val(),s=e("#Encargado").val();if(c.trim()==""){n.Mensaje("Ingrese un nombre para la sucursal","","error");return}if(d.trim()==""){n.Mensaje("Ingrese un telefono para la sucursal","","error");return}if(s.trim()==""){n.Mensaje("Seleccione un encargado para la sucursal","","error");return}let v={SUCURSAL_NOMBRE:c,SUCURSAL_DIRECCION:A,SUCURSAL_TELEFONO:d,SUCURSAL_ENCARGADO:o,SUCURSAL_ENCARGADO:s,CREADO_POR:""};C(!0),(await n.AjaxSendReceive(ha,v)).data.success&&(e("#Sucursal").val(""),e("#Direccion").val(""),e("#Telefono").val(""),e("#Correo").val(""),e("#Encargado").val(""),n.Mensaje("Datos Guardados","","success"),D()),C(!1)},D=async()=>{const c=await n.AjaxSendReceive(va,[]);ta(c.data.data)};function ta(c){e("#TABLA_SUCUSALES_SECC").empty(),e("#TABLA_SUCUSALES_SECC").append(`
        <table id='TABLA_SUCUSALES' class='table table-striped'>
        </table>
        `);let d=e("#TABLA_SUCUSALES").DataTable({destroy:!0,data:c,dom:"frtip",paging:!1,info:!1,order:[[0,"asc"]],columns:[{data:"CODIGO",title:"CODIGO",className:"text-start"},{data:"SUCURSAL_NOMBRE",title:"SUCURSAL",className:"text-start"},{data:"SUCURSAL_ENCARGADO",title:"ENCARGADO",className:"text-start"},{data:null,title:"",className:"btn_Detalles text-left",defaultContent:'<button type="button" class="btn_Eliminar btn btn-info text-light btn-sm"><i class="bi bi-ui-checks"></i></button>',orderable:"",width:20},{data:null,title:"",className:"btn_camaras text-left",defaultContent:'<button type="button" class="btn_camaras btn btn-success text-light btn-sm"><i class="bi bi-camera-video-fill"></i></button>',orderable:"",width:20}],createdRow:function(o,s,v){e("td",o).eq(0).addClass("fw-bold fs-6 "),e("td",o).eq(1).addClass("fw-bold fs-6 "),e("td",o).eq(2).addClass("fw-bold fs-6 "),e("td",o).eq(3).addClass("fw-bold fs-6 "),e("td",o).eq(0).addClass("bg-warning bg-opacity-10")}});e("#TABLA_SUCUSALES").on("click","td.btn_Detalles",function(o){var s=d.row(this).data();l(!0),_(1),j(s.SUCURSAL_NOMBRE),O(s.SUCURSAL_DIRECCION),I(s.SUCURSAL_TELEFONO),y(s.SUCURSAL_NOMBRE),w(s.SUCURSAL_ENCARGADO),N(s.ID)}),e("#TABLA_SUCUSALES").on("click","td.btn_camaras",function(o){var s=d.row(e(this).closest("tr")).data();N(s.ID),setTimeout(()=>{M(s.ID)},100)})}function sa(){j(""),O(""),I(""),y(""),w(""),N("")}const ra=async()=>{let c=e("#Sucursal").val(),A=e("#Direccion").val(),d=e("#Telefono").val(),o=e("#Correo").val(),s=e("#Encargado").val();if(c.trim()==""){n.Mensaje("Ingrese un nombre para la sucursal","","error");return}if(d.trim()==""){n.Mensaje("Ingrese un telefono para la sucursal","","error");return}if(s.trim()==""){n.Mensaje("Seleccione un encargado para la sucursal","","error");return}let v={SUCURSAL_NOMBRE:c,SUCURSAL_DIRECCION:A,SUCURSAL_TELEFONO:d,SUCURSAL_ENCARGADO:o,SUCURSAL_ENCARGADO:s,ID:h,CREADO_POR:""};C(!0),(await n.AjaxSendReceive(ja,v)).data.success&&(n.Mensaje("Datos Actualizados","","success"),D()),C(!1)},M=async c=>{let A={SUCURSAL_ID:c};C(!0);const d=await n.AjaxSendReceive(Ra,A);console.log("datos: ",d),F(d.data.data),C(!1)};function F(c){console.log("data: ",c),e("#TABLA_SUCUSALES_CAMARAS_SECC").empty(),e("#TABLA_SUCUSALES_CAMARAS_SECC").append(`
        <table id='TABLA_SUCUSALES_CAMARAS' class='table table-striped'>
        </table>
        `);let d=e("#TABLA_SUCUSALES_CAMARAS").DataTable({destroy:!0,data:c,dom:"frtip",paging:!1,info:!1,order:[[0,"asc"]],columns:[{data:"CODIGO",title:"CODIGO",className:"text-start"},{data:"CAMARA_NOMBRE",title:"NOMBRE",className:"text-start"},{data:"CAMARA_UBICACION",title:"UBICACION",className:"text-start"},{data:null,title:"",className:"btn_Detalles text-left",defaultContent:'<button type="button" class="btn_Eliminar btn btn-info text-light btn-sm"><i class="bi bi-ui-checks"></i></button>',orderable:"",width:20}],createdRow:function(o,s,v){e("td",o).eq(0).addClass("fw-bold fs-6 "),e("td",o).eq(1).addClass("fw-bold fs-6 "),e("td",o).eq(2).addClass("fw-bold fs-6 "),e("td",o).eq(3).addClass("fw-bold fs-6 "),e("td",o).eq(0).addClass("bg-warning bg-opacity-10")}});e("#TABLA_SUCUSALES_CAMARAS").on("click","td.btn_Detalles",function(o){var s=d.row(this).data();console.log("data: ",s),r(!0),x(1),T(s.ID),B(s.CAMARA_NOMBRE),G(s.CAMARA_DESCRIPCION),k(s.CAMARA_UBICACION)})}const la=async()=>{let c=e("#Cam_nombre").val(),A=e("#Cam_descripcion").val(),d=e("#Cam_ubicacion").val();if(c.trim()==""){n.Mensaje("Ingrese un nombre para la camara","","error");return}if(A.trim()==""){n.Mensaje("Ingrese una descripcion","","error");return}if(d.trim()==""){n.Mensaje("Ingrese la ubicacion","","error");return}let o={SUCURSAL_ID:h,CAMARA_NOMBRE:c,CAMARA_DESCRIPCION:A,CAMARA_UBICACION:d};C(!0);const s=await n.AjaxSendReceive(Ua,o);s.data.success?(n.Mensaje("Datos Guardados","","success"),M(h)):n.Mensaje("Error al guardar",s.message,"success"),C(!1)},na=async()=>{let c=e("#Cam_nombre").val(),A=e("#Cam_descripcion").val(),d=e("#Cam_ubicacion").val();if(c.trim()==""){n.Mensaje("Ingrese un nombre para la camara","","error");return}if(A.trim()==""){n.Mensaje("Ingrese una descripcion","","error");return}if(d.trim()==""){n.Mensaje("Ingrese la ubicacion","","error");return}let o={SUCURSAL_ID:h,CAMARA_ID:Q,CAMARA_NOMBRE:c,CAMARA_DESCRIPCION:A,CAMARA_UBICACION:d};console.log("param: ",o),C(!0);const s=await n.AjaxSendReceive(ga,o);console.log("datos: ",s),s.data.success?(n.Mensaje("Datos Guardados","","success"),M(h)):n.Mensaje("Error al guardar",s.message,"success"),C(!1)};function oa(){T(""),B(""),G(""),k("")}return m.useEffect(()=>{D(),F([])},[]),a.jsxs(a.Fragment,{children:[a.jsx(xa,{loading:i})," ",a.jsxs(da,{className:"mb-4",children:[a.jsxs(ua,{children:[a.jsxs(z,{children:[a.jsx(U,{sm:5,children:a.jsx("h4",{id:"traffic",className:"card-title mb-0",children:"Sucursales"})}),a.jsx(U,{sm:7,className:"d-none d-md-block",children:a.jsxs(S,{onClick:()=>{l(!t),_(0),sa()},color:"success",className:"float-end fw-bold text-light",children:["Nueva Sucursal ",a.jsx(ia,{icon:ma})]})})]}),a.jsx("hr",{}),a.jsxs(z,{children:[a.jsx(U,{sm:6,className:"pt-5",children:a.jsx("div",{className:"table-responsive",children:a.jsx("div",{id:"TABLA_SUCUSALES_SECC",children:a.jsx("table",{id:"TABLA_SUCUSALES",className:"table table-striped"})})})}),a.jsxs(U,{sm:6,className:"pt-5",children:[a.jsxs(S,{onClick:()=>{r(!0),x(0),oa()},color:"warning",className:"fw-bold text-light btn-sm",children:["Agregar Camara ",a.jsx("i",{className:"bi bi-camera-video fs-6"})]}),a.jsx("div",{className:"table-responsive",children:a.jsx("div",{id:"TABLA_SUCUSALES_CAMARAS_SECC",children:a.jsx("table",{id:"TABLA_SUCUSALES_CAMARAS",className:"table table-striped"})})})]})]})]}),a.jsxs(V,{size:"lg",backdrop:"static",visible:t,onClose:()=>l(!1),children:[a.jsx(q,{children:a.jsx(P,{})}),a.jsx(Z,{children:a.jsxs("div",{className:"col-12",children:[a.jsxs("div",{className:"mb-3",children:[a.jsx(f,{htmlFor:"Sucursal",children:"Sucursal Nombre"}),a.jsx(b,{defaultValue:R,type:"text",id:"Sucursal",placeholder:""})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx(f,{htmlFor:"Direccion",children:"Direccion"}),a.jsx(b,{defaultValue:L,type:"text",id:"Direccion",placeholder:""})]}),a.jsxs("div",{className:"row",children:[a.jsxs("div",{className:"col-6 mb-3",children:[a.jsx(f,{htmlFor:"Telefono",children:"Telefono"}),a.jsx(b,{defaultValue:W,type:"text",id:"Telefono",placeholder:""})]}),a.jsxs("div",{className:"col-6 mb-3",children:[a.jsx(f,{htmlFor:"Correo",children:"Correo"}),a.jsx(b,{defaultValue:J,type:"text",id:"Correo",placeholder:""})]})]}),a.jsxs("div",{className:"col-6 mb-3",children:[a.jsx(f,{htmlFor:"Encargado",children:"Encargado"}),a.jsxs(Ca,{id:"Encargado",defaultValue:K,children:[a.jsx("option",{value:"",children:"Seleccione un encargado"}),a.jsx("option",{value:"1",children:"Encargado 1"}),a.jsx("option",{value:"2",children:"Encargado 2"}),a.jsx("option",{value:"3",children:"Encargado 3"})]})]})]})}),a.jsxs($,{children:[a.jsx(S,{color:"secondary",onClick:()=>l(!1),children:"Cerrar"}),p==0?a.jsx(S,{onClick:ea,color:"primary",className:"fw-bold text-light",children:"Guardar Datos"}):a.jsx(S,{onClick:ra,color:"warning",className:"fw-bold text-light",children:"Actualizar cambios"})]})]}),a.jsxs(V,{size:"lg",backdrop:"static",visible:u,onClose:()=>r(!1),children:[a.jsx(q,{children:a.jsx(P,{})}),a.jsx(Z,{children:a.jsxs("div",{className:"col-12",children:[a.jsxs("div",{className:"mb-3",children:[a.jsx(f,{htmlFor:"Nombre",children:"Nombre"}),a.jsx(b,{defaultValue:X,type:"text",id:"Cam_nombre",placeholder:""})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx(f,{htmlFor:"Descripcion",children:"Descripcion"}),a.jsx(b,{defaultValue:Y,type:"text",id:"Cam_descripcion",placeholder:""})]}),a.jsxs("div",{className:"mb-3",children:[a.jsx(f,{htmlFor:"Ubicacion",children:"Ubicacion"}),a.jsx(b,{defaultValue:aa,type:"text",id:"Cam_ubicacion",placeholder:""})]})]})}),a.jsxs($,{children:[a.jsx(S,{color:"secondary",onClick:()=>r(!1),children:"Cerrar"}),E==0?a.jsx(S,{onClick:la,color:"primary",className:"fw-bold text-light",children:"Guardar Datos"}):a.jsx(S,{onClick:na,color:"warning",className:"fw-bold text-light",children:"Actualizar cambios"})]})]})]})]})}export{Va as default};
