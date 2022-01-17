import{d as L,r as z,o as H,h as C,c as B,a as N,w as D,b as M,e as X,f as Y,g as A,i as V}from"./vendor.01c69bfe.js";const W=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(r){if(r.ep)return;r.ep=!0;const a=l(r);fetch(r.href,a)}};W();class O extends Error{constructor(){super("`vue-ztext` requires `transform-style: preserve-3d` browser support to work correctly. Please update your browser to use `vue-ztext`.")}}/*!
 * ztext.js v0.0.1
 * https://bennettfeely.com/ztext
 * Licensed MIT | (c) 2020 Bennett Feely
 * Modified by Namchee
 */function R(t,n){var l=n.depth,i=l.match(/[a-z]+/)[0],r=parseFloat(l.replace(i,"")),a=n.direction,c=n.event,w=n.eventRotation,_=w.match(/[a-z]+/)[0],g=parseFloat(w.replace(_,"")),T=n.eventDirection,b=n.fade,S=n.layers,x=n.perspective,y=n.transform,E=t.innerHTML;t.innerHTML="",t.style.display="inline-block",t.style.position="relative",t.style.webkitPerspective=x,t.style.perspective=x;var u=document.createElement("span");u.setAttribute("class","z-text"),u.style.display="inline-block",u.style.webkitTransformStyle="preserve-3d",u.style.transformStyle="preserve-3d";var d=document.createElement("span");d.setAttribute("class","z-layers"),d.style.display="inline-block",d.style.webkitTransformStyle="preserve-3d",d.style.transformStyle="preserve-3d",u.append(d);for(let o=0;o<S;o++){const s=o/S,e=document.createElement("span");if(e.setAttribute("class","z-layer"),e.innerHTML=E,e.style.display="inline-block",a==="backwards")var m=-s*r;if(a==="both")var m=-(s*r)+r/2;if(a==="forwards")var m=-(s*r)+r;var y="translateZ("+m+i+")";e.style.webkitTransform=y,e.style.transform=y,o>=1&&(e.style.position="absolute",e.style.top=0,e.style.left=0,e.setAttribute("aria-hidden","true"),e.style.pointerEvents="none",e.style.mozUserSelect="none",e.style.msUserSelect="none",e.style.webkitUserSelect="none",e.style.userSelect="none",(b===!0||b==="true")&&(e.style.opacity=(1-s)/2)),d.append(e)}t.append(u);function f(o,s){if(T=="reverse")var e=-1;else var e=1;var p=o*g*e,h=-s*g*e,v=_,k="rotateX("+h+v+") rotateY("+p+v+")";d.style.webkitTransform=k,d.style.transform=k}if(c==="pointer"&&(window.addEventListener("mousemove",o=>{var s=(o.clientX/window.innerWidth-.5)*2,e=(o.clientY/window.innerHeight-.5)*2;f(s,e)},!1),window.addEventListener("touchmove",o=>{var s=(o.touches[0].clientX/window.innerWidth-.5)*2,e=(o.touches[0].clientY/window.innerHeight-.5)*2;f(s,e)},!1)),c=="scroll"){let o=function(){var s=t.getBoundingClientRect(),e=s.left+s.width/2-window.innerWidth/2,p=s.top+s.height/2-window.innerHeight/2,h=e/window.innerWidth*-2,v=p/window.innerHeight*-2;f(h,v)};scroll(),window.addEventListener("scroll",o,!1)}if(c=="scrollY"){let o=function(){var s=t.getBoundingClientRect(),e=s.top+s.height/2-window.innerHeight/2,p=e/window.innerHeight*-2;f(0,p)};scrollY(),window.addEventListener("scroll",o,!1)}if(c=="scrollX"){let o=function(){var s=t.getBoundingClientRect(),e=s.left+s.width/2-window.innerWidth/2,p=e/window.innerWidth*-2;f(p,0)};scrollX(),window.addEventListener("scroll",o,!1)}}const $=L({props:{as:{type:String,default:"div",validator:t=>{const n=document.createElement(t);return n.innerHTML=".",!!n.innerHTML}},depth:{type:String,default:"1rem"},layers:{type:Number,default:10},perspective:{type:String,default:"500px"},fade:{type:Boolean,default:!1},direction:{type:String,default:"both",validator:t=>["both","backwards","forwards"].includes(t)},event:{type:String,default:"none",validator:t=>["none","pointer","scroll","scrollX","scrollY"].includes(t)},eventRotation:{type:String,default:"30deg"},eventDirection:{type:String,default:"default",validator:t=>["default","reverse"].includes(t)}},setup(t,{slots:n}){const l=n.default(),i=z(null);return H(()=>{if(CSS.supports("-moz-transform-style","preserve-3d")||CSS.supports("-ms-transform-style","preserve-3d")||CSS.supports("-webkit-transform-style","preserve-3d")||CSS.supports("transform-style","preserve-3d"))R(i.value,t);else throw new O}),()=>C(t.as,{ref:i},l)}});var P="/assets/logo.313e2909.png";var U=(t,n)=>{const l=t.__vccOpts||t;for(const[i,r]of n)l[i]=r;return l};const Z=L({components:{ZText:$}}),j={class:"container"},F=A("img",{src:P,width:"240",height:"240",title:"Vue logo",alt:"Vue logo"},null,-1),q=M('<h1 class="heading"><span class="blue"> Vue </span><span class="green"> ZText </span></h1><p> Declarative wrapper for <a href="https://bennettfeely.com/ztext/" class="green" target="_blank" rel="noreferrer"> ZText.js </a> \u2014 3D typography for the web. </p><p> Because <b>you</b> deserve declarative awesomeness. </p><a href="https://github.com/Namchee/vue-ztext" target="_blank" rel="noreferrer" class="green project__link"> Documentation </a>',4);function I(t,n,l,i,r,a){const c=X("z-text");return Y(),B("div",j,[N(c,{class:"demo",layers:50,depth:"50px"},{default:D(()=>[F]),_:1}),q])}var K=U(Z,[["render",I]]);const G=V(K);G.mount("#app");