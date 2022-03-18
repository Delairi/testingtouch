import{j as d,s,R as u,a}from"./vendor.97a5dbce.js";const f=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}};f();const c=d.exports.jsx;function h(){let i=null,n=null,o=null,r=null;return c(g,{children:c(m,{id:"drag",draggable:!0,onTouchStart:e=>{i=e.changedTouches[0].clientX,n=e.changedTouches[0].clientY},onTouchEnd:e=>{o=e.changedTouches[0].clientX-i,r=e.changedTouches[0].clientY-n,document.getElementById("drag").style.transform=`translate(${o}px,${r}px)`},children:"Testing Touch"})})}const g=s.div`
display:flex;
justify-content:center;
align-items:center;
height:100vh;
background:#91c8d057;
`,m=s.h1`

`;u.render(c(a.StrictMode,{children:c(h,{})}),document.getElementById("root"));
