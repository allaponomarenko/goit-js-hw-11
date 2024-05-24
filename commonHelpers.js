import{a as p,S as u,i as l}from"./assets/vendor-b11e2a50.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const d="44031619-a947df2c149ce3ba62f1c08d8",f="https://pixabay.com/api/",m=async a=>(await p.get(`${f}`,{params:{key:d,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits,i=document.querySelector(".gallery");let c;const y=a=>{const t=a.map(s=>`
        <div class="image-card">
          <a href="${s.largeImageURL}" class="gallery-item">
            <img src="${s.webformatURL}" alt="${s.tags}" loading="lazy" />
          </a>
          <div class="info">
            <p class="info_p">
              <span class="label">Likes:</span>
              <span class="value">${s.likes}</span>
            </p>
            <p class="info_p">
              <span class="label">Views:</span>
              <span class="value">${s.views}</span>
            </p>
            <p class="info_p">
              <span class="label">Comments:</span>
              <span class="value">${s.comments}</span>
            </p>
            <p class="info_p">
              <span class="label">Downloads:</span>
              <span class="value">${s.downloads}</span>
            </p>
          </div>
        </div>`).join("");i.insertAdjacentHTML("beforeend",t),c=new u(".gallery-item"),c.refresh()},g=()=>{i.innerHTML=""};document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".search-form");document.querySelector(".gallery"),a.addEventListener("submit",async t=>{t.preventDefault();const s=t.target.elements.query.value.trim();if(!s){l.error({title:"Error",message:"Please enter a search query"});return}g();try{const o=await m(s);if(o.length===0){l.error({title:"Error",message:"No images found. Please try another search term."});return}y(o)}catch{l.error({title:"Error",message:"Something went wrong. Please try again later."})}})});
//# sourceMappingURL=commonHelpers.js.map
