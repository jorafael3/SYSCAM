import{k as h,r as n,j as s}from"./index-BU051ymS.js";import{c as u,b as c,a as j}from"./index.esm-jw6Fs3LN.js";import{S as f}from"./Service-CIXMKhnS.js";import{C as i,a as o}from"./CRow-4EEBH_s2.js";import{C as g}from"./CCardGroup-9uS52shA.js";import{C as y,a as N}from"./CCardBody-BXIW9yVT.js";import{C as S}from"./CForm-SxNjAzqs.js";import{C as l}from"./CInputGroup-BCmc7MwQ.js";import{C as m}from"./CInputGroupText-B731mXIV.js";import{c as v}from"./cil-user-Ddrdy7PS.js";import{C as d}from"./CFormInput-Bveg4BCN.js";import{c as w}from"./cil-lock-locked-DmxpJbVL.js";import"./CFormControlWrapper-v7TqyQnU.js";import"./CFormControlValidation-DmULv4Jl.js";import"./CFormLabel-Cf4RTnxf.js";const L=e=>({type:"LOGIN_SUCCESS",user:e}),z=()=>{const e=h(),[a,p]=n.useState(""),[t,x]=n.useState(""),C=async()=>{const r=await f.login(a,t);console.log("datos: ",r),r[0]==1&&e(L(r[1]))};return s.jsx("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:s.jsx(u,{children:s.jsx(i,{className:"justify-content-center",children:s.jsx(o,{md:6,children:s.jsx(g,{children:s.jsx(y,{className:"p-4",children:s.jsx(N,{children:s.jsxs(S,{children:[s.jsx("h1",{children:"Login"}),s.jsx("p",{className:"text-body-secondary",children:"Ingresa a tu cuenta"}),s.jsxs(l,{className:"mb-3",children:[s.jsx(m,{children:s.jsx(c,{icon:v})}),s.jsx(d,{placeholder:"Usuario",autoComplete:"username",value:a,onChange:r=>p(r.target.value)})]}),s.jsxs(l,{className:"mb-4",children:[s.jsx(m,{children:s.jsx(c,{icon:w})}),s.jsx(d,{type:"password",placeholder:"Contraseña",autoComplete:"current-password",value:t,onChange:r=>x(r.target.value)})]}),s.jsxs(i,{children:[s.jsx(o,{xs:6,children:s.jsx(j,{color:"primary",className:"px-4",onClick:C,children:"Login"})}),s.jsx(o,{xs:6,className:"text-right"})]})]})})})})})})})})};export{z as default};
