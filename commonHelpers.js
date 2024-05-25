import{a as u,S as p,b as f}from"./assets/vendor-ba55af93.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const m="44031619-a947df2c149ce3ba62f1c08d8",y="https://pixabay.com/api/",l=document.getElementById("loader");async function g(a){try{return l.style.display="block",(await u.get(y,{params:{key:m,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error(t),t}finally{l.style.display="none"}}const d=document.querySelector(".gallery");let c;const h=a=>{const t=a.map(s=>`
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
        </div>`).join("");d.insertAdjacentHTML("beforeend",t),c=new p(".gallery-item"),c.refresh()},b=()=>{d.innerHTML=""},w=document.getElementById("loader"),v={lines:13,length:38,width:17,radius:45,scale:1,corners:1,speed:1,rotate:0,animation:"spinner-line-fade-more",direction:1,color:"#000",fadeColor:"transparent",top:"50%",left:"50%",shadow:"0 0 1px transparent",zIndex:2e9,className:"spinner",position:"absolute"},i=new f(v),L=document.querySelector(".search-form");document.querySelector(".gallery");let $;L.addEventListener("submit",async a=>{a.preventDefault();const t=a.target.elements.query.value.trim();if(t){b(),i.spin(w);try{const s=await g(t);h(s),$=new p(".gallery a",{})}catch(s){console.error(s)}finally{i.stop()}}});
//# sourceMappingURL=commonHelpers.js.map
