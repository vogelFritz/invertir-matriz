(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const I=(l,r,n,s)=>{const e=document.createElement("input"),t=n>s?s*.5:n*.5;return e.style=`
        position: absolute;
        width: ${t}%;
        height: ${t}%;
        margin-top: ${l*n}%;
        margin-left: ${r*s}%;
    `,e.className="inputs-mat",e.type="number",e.value=0,e},E=(l,r,n)=>{const s=100/r,e=100/n;for(let t=0;t<r;t++)for(let o=0;o<n;o++)l.append(I(t,o,s,e))};const x=()=>{const l=document.createElement("button");return l.id="obt-inversa-bot",l},h=(l,r,n,s)=>{let e=structuredClone(l);for(let t=r;t<s;t++)e.splice(t,1,e[t+1]);for(let t=0;t<s-1;t++)for(let o=n;o<s;o++)e[t].splice(o,1,e[t][o+1]);return e},v=(l,r)=>{let n=structuredClone(l),s=0;if(r>1){for(let e=0;e<r;e++)e%2===0?s+=-n[e][0]*v(h(n,e,0,r),r-1):s+=n[e][0]*v(h(n,e,0,r),r-1);return s}else return n[0][0]},z=l=>{let r=[],n,s=[];const e=l[0].length;let t=structuredClone(l);for(let o=0;o<e;o++){for(let i=0;i<e;i++)o===i?s.push(1):s.push(0);r.push(s),s=[]}for(let o=0;o<e;o++)for(let i=0;i<e;i++){n=t[o][o];for(let c=0;c<e;c++)t[o][c]/=n,r[o][c]/=n;if(i!=o){n=t[i][o];for(let c=0;c<e;c++)t[i][c]-=t[o][c]*n,r[i][c]-=r[o][c]*n}}return r};const L=()=>{const l=document.createElement("tr");return l.className="columnas",l},O=l=>{const r=document.createElement("td");return r.innerText=l,r},N=l=>{const r=document.createElement("table"),n=l[0].length;let s;r.id="tabla-inversa";for(let e=0;e<n;e++){s=L();for(let t=0;t<n;t++)s.append(O(l[e][t].toFixed(2)));r.append(s)}return r},b=document.querySelector(".div-obtencion-inversa"),y=x(),p=document.createElement("div");let f,u=[],m=[],a,d,g;p.className="matriz";p.id="input-mat";a=prompt("Ingrese las dimensiones de la matriz nxn",3);a=parseFloat(a);E(p,a,a);b.append(p);b.append(y);y.addEventListener("click",()=>{g=document.querySelectorAll(".inputs-mat"),d=0,g.forEach(l=>{m.push(+l.value),d++,d>=a&&(u.push(m),d=0,m=[])}),console.log(m),console.log(u),v(u,a)!=0?(console.warn("La matriz es inversible"),f=z(u),console.log(f),b.append(N(f))):console.warn("La matriz NO es inversible"),u=[],m=[]});