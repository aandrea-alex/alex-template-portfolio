import{A as G,S as q,N as M,i as Y,a as ce}from"./assets/vendor-CN-mpBkS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function ie(e,t){e.forEach(s=>{if(s.isIntersecting){const o=s.target;o.dataset.src&&(o.src=o.dataset.src),o.classList.remove("lazy-bg"),t.unobserve(o)}})}const ae=document.querySelectorAll(".lazy-bg"),le=new IntersectionObserver(ie);ae.forEach(e=>le.observe(e));const v=(e,t=1e3)=>{const s=document.getElementById(e);if(!s)return;const o=window.scrollY,r=s.getBoundingClientRect().top+o,n=performance.now(),l=i=>{const g=i-n,ne=Math.min(g/t,1);window.scrollTo(0,o+(r-o)*S(ne)),g<t&&requestAnimationFrame(l)},S=i=>i<.5?2*i*i:-1+(4-2*i)*i;requestAnimationFrame(l)},B=document.querySelector(".js-header-menu-btn"),j=document.querySelector(".js-header-menu"),I=document.querySelector(".js-header-order-link");B&&B.addEventListener("click",Z);j&&j.addEventListener("click",ue);I&&I.addEventListener("click",de);function Z(){j&&j.classList.toggle("isopen")}function ue(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);v(s),Z()}function de(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);v(s)}const C=document.querySelector(".js-header-mobile-menu-btn"),K=document.querySelector(".js-mobile-menu"),R=document.querySelector(".js-mobile-menu-close-btn"),_=document.querySelector(".js-mobile-menu-nav"),A=document.querySelector(".js-mobile-menu-order");C&&C.addEventListener("click",pe);R&&R.addEventListener("click",Q);_&&_.addEventListener("click",J);A&&A.addEventListener("click",J);function pe(){K.classList.add("is-open")}function Q(){K.classList.remove("is-open")}function J(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);v(s),Q()}new G(".accordion-container",{duration:500,openOnInit:[0]});const u=new q(".about-skills-container",{modules:[M],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".about-arrow-btn-next"},speed:700,effect:"coverflow",breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});u.on("init",X);u.on("slideChange",X);function X(){if(!u||!u.slides)return;u.slides.forEach(t=>{t.classList.remove("active")});const e=u.slides[u.activeIndex];e&&e.classList.add("active")}new G(".faq-acc-container");const T=document.querySelector(".js-project-order");T&&T.addEventListener("click",me);function me(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);v(s)}function fe(e=[]){return e.reduce((t,{url1x:s,url2x:o})=>t+`
       <li class="projects-item swiper-slide">
        <div class="project-info-container">
          <ul class="project-lang-list">
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#react</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#node js</span>
            </li>
            <li class="projects-lang-item">
              <span class="projects-lang-item-text">#git</span>
            </li>
          </ul>
          <div class="project-description-wrapper">
            <p class="project-description">
              Programming Across Borders: Ideas, Technologies, Innovations
            </p>
           <a href="https://github.com/aandrea-alex/alex-template-portfolio" class="project-link js-project-link" target="_blank">See project</a>
          </div>
        </div>
        <div class="projects-img-wrapper">
          <picture>
            <source
              srcset="
                ${s} 1x,
                ${o} 2x
              "
              type="image/webp"
            />
            <img
              class="projects-img lazy"
              src="${s}"
              alt="Project 01 main page"
              loading="lazy"
            />
          </picture>
        </div>
      </li>
      `,"")}const ve=async(e,t)=>{const s=fe(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},ge="/alex-template-portfolio/assets/project01@1x-Ye2u9QvY.webp",be="/alex-template-portfolio/assets/project01@2x-CGnU-NZM.webp",we="/alex-template-portfolio/assets/project02@1x-dj219-w_.webp",he="/alex-template-portfolio/assets/project02@2x-R_GplPUq.webp",xe="/alex-template-portfolio/assets/project03@1x-CuhbSDYE.webp",je="/alex-template-portfolio/assets/project03@2x-DFdgcKJ5.webp",Le="/alex-template-portfolio/assets/project04@1x-Doff4Zlc.webp",ye="/alex-template-portfolio/assets/project04@2x-D8suiMQa.webp",Se="/alex-template-portfolio/assets/project05@1x-NId4RxqZ.webp",Ee="/alex-template-portfolio/assets/project05@2x-wvuiV8Po.webp",qe="/alex-template-portfolio/assets/project06@1x-C_lFZmue.webp",Me="/alex-template-portfolio/assets/project06@2x-DCqSTG3_.webp",ke="/alex-template-portfolio/assets/project07@1x-B3QnrJNm.webp",Pe="/alex-template-portfolio/assets/project07@2x-C0-TBLLl.webp",Be="/alex-template-portfolio/assets/project08@1x-4Vi569Pq.webp",Ie="/alex-template-portfolio/assets/project08@2x-DDEYTNWW.webp",Ce="/alex-template-portfolio/assets/project09@1x-BaB1ldRA.webp",Re="/alex-template-portfolio/assets/project09@2x-uHr6DaSI.webp",ee=[{url1x:ge,url2x:be},{url1x:we,url2x:he},{url1x:xe,url2x:je},{url1x:Le,url2x:ye},{url1x:Se,url2x:Ee},{url1x:qe,url2x:Me},{url1x:ke,url2x:Pe},{url1x:Be,url2x:Ie},{url1x:Ce,url2x:Re}];let w;const te=document.querySelector(".projects-list");te&&_e();async function _e(){try{await ve(ee,te),w=new q(".projects-swiper-container",{modules:[M],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},speed:1e3,effect:"coverflow",on:{init:O,slideChange:O},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45})}catch(e){console.log(e.message)}}function O(){if(!w)return;const e=document.querySelector(".projects-btn-prev"),t=document.querySelector(".projects-btn-next");w.isBeginning?e.disabled=!0:e.disabled=!1,w.isEnd?t.disabled=!0:t.disabled=!1}function Ae(e=[]){const t=(n=0)=>[...e.slice(n),...e.slice(0,n)].reduce((S,{url1x:i,url2x:g})=>S+`<li>        
          <picture covers-marquee-picture>
            <source
              srcset="
                ${i} 1x,
                ${g} 2x               
              "
              type="image/webp"
            />
            <img
              class="covers-marquee-img"
              src="${i}"
              alt="Project image"
              loading="lazy"
            />
          </picture>
        </li>
        `,""),s=t(0),o=t(2),r=t(4);return`
    <div class="covers-marquee-inner">
      <ul class="covers-marquee-line">${s}</ul>
      <ul class="covers-marquee-line">${o}</ul>
      <ul class="covers-marquee-line">${r}</ul>
    </div>
  `}const Te=async(e,t)=>{const s=Ae(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Oe=document.querySelector(".covers-marquee");Te(ee,Oe);function $e(e=[]){return!e||e.length===0?"":e.reduce((t,{_id:s,author:o="Anonymous",avatar_url:r="default-avatar.png",review:n="No review provided"})=>t+`
       <li class="reviews-list-item swiper-slide" id="review-${s}">
        <img
          class="reviews-list-avatar"
          src="${r}"
          alt="${o} avatar"
          
        />
        <div class="reviews-list-item-info">
          <h3 class="reviews-list-fullname">${$(o)}</h3>
          <p class="reviews-list-text">
            ${$(n)}
          </p>
        </div>
      </li>
      `,"")}function $(e){return e.replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}const Ne=async(e,t)=>{try{let s="";e.length===0?s='<span class="notfound">Not found!</span>':s=$e(e),t.innerHTML="",t.insertAdjacentHTML("beforeend",s)}catch(s){console.error("Error creating reviews:",s)}},De="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_x-octagon%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076%200.262%200.026%200.383%200.076c0.121%200.050%200.232%200.124%200.325%200.217s0.167%200.203%200.217%200.325c0.050%200.121%200.076%200.252%200.076%200.383s-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e",ze="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_check2-circle%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M5%2016c-0-1.931%200.508-3.828%201.473-5.501s2.354-3.061%204.026-4.027c1.672-0.966%203.569-1.474%205.5-1.474s3.828%200.508%205.5%201.474c0.23%200.13%200.501%200.165%200.756%200.096s0.472-0.236%200.604-0.465c0.132-0.229%200.168-0.5%200.101-0.756s-0.233-0.474-0.461-0.607c-2.478-1.431-5.359-2.004-8.197-1.63s-5.472%201.673-7.495%203.696-3.323%204.658-3.697%207.495c-0.374%202.837%200.199%205.718%201.63%208.197s3.639%204.415%206.283%205.511c2.644%201.095%205.575%201.288%208.339%200.547s5.207-2.372%206.949-4.642c1.742-2.27%202.687-5.052%202.687-7.913%200-0.265-0.105-0.52-0.293-0.707s-0.442-0.293-0.707-0.293c-0.265%200-0.52%200.105-0.707%200.293s-0.293%200.442-0.293%200.707c0%202.917-1.159%205.715-3.222%207.778s-4.861%203.222-7.778%203.222c-2.917%200-5.715-1.159-7.778-3.222s-3.222-4.861-3.222-7.778z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M30.708%206.708c0.093-0.093%200.167-0.203%200.217-0.325s0.076-0.252%200.076-0.383-0.026-0.262-0.076-0.383c-0.050-0.122-0.124-0.232-0.217-0.325s-0.203-0.167-0.325-0.217c-0.121-0.050-0.252-0.076-0.383-0.076s-0.262%200.026-0.383%200.076-0.232%200.124-0.325%200.217l-13.292%2013.294-5.292-5.294c-0.093-0.093-0.203-0.167-0.325-0.217s-0.252-0.076-0.383-0.076c-0.132%200-0.262%200.026-0.383%200.076s-0.232%200.124-0.325%200.217c-0.093%200.093-0.167%200.203-0.217%200.325s-0.076%200.252-0.076%200.383c0%200.132%200.026%200.262%200.076%200.383s0.124%200.232%200.217%200.325l6%206c0.093%200.093%200.203%200.167%200.325%200.217s0.252%200.076%200.383%200.076c0.132%200%200.262-0.026%200.383-0.076s0.232-0.124%200.325-0.217l14-14z'%3e%3c/path%3e%3c/svg%3e";function h(e){Y.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${De}`,iconColor:"#fafafb"})}function se(e){Y.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${ze}`,iconColor:"#fafafb"})}const re=ce.create({baseURL:"https://portfolio-js.b.goit.study/api/"}),Ve=document.querySelector(".reviews-list");let N=[];async function He(){var e;try{const t=await re.get("reviews");t&&t.status===200?((e=t.data)==null?void 0:e.length)?(se("Fetch success!"),N=t.data):h("Reviews not found"):h("Invalid response")}catch{h("Fetch Error!")}finally{Ne(N,Ve)}}let x;He().then(()=>{Fe&&(x=new q(".reviews-swiper-container",{modules:[M],slidesPerView:1,loop:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},speed:700,effect:"coverflow",on:{init:D,slideChange:D},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45}))}).catch(e=>{console.error(e.message)});function D(){if(!x)return;const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");x.isBeginning?e.disabled=!0:e.disabled=!1,x.isEnd?t.disabled=!0:t.disabled=!1}function Ue(){const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");e&&e.classList.add("hide"),t&&t.classList.add("hide")}function Fe(){const e=document.querySelector(".reviews-container"),t=document.querySelector(".reviews-swiper-container"),s=document.querySelector(".reviews-btn-prev"),o=document.querySelector(".reviews-btn-next"),r=e.querySelector(".reviews-list-item");return!e||!t||!s||!o||!r?(Ue(),!1):!0}let z=50;const y="data-original";function We(){document.querySelectorAll(".js-custom-input").forEach(t=>{t.addEventListener("change",Ye),t.addEventListener("focus",Ze),t.addEventListener("blur",Ke)})}function V(e){let t="";return e&&(e.hasAttribute(y)?(t=e.dataset.original,t||(t=e.value.trim())):t=e.value.trim()),t}function H(e){e&&e.hasAttribute(y)&&(e.dataset.original="")}function Ge(e,t){return e.length>t?e.slice(0,t)+"...":e}function Ye(e){const t=e.target,s=t.value.trim();t.hasAttribute(y)&&(t.dataset.original=s)}function Ze(e){const t=e.target;t.hasAttribute(y)&&(t.value=t.dataset.original)}function Ke(e){const t=e.target,s=t.value;s.length>z&&(t.value=Ge(s,z))}const Qe="/alex-template-portfolio/assets/symbols-PgoFg63M.svg";function Je({title:e,message:t}){return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${Qe}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${e}            
            </p>
            <p class="modal-message">${t}</p>
          </div>
        </div>   
      `}const Xe=async(e,t)=>{const s=Je(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},et=e=>/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(e),U="Invalid email, try again",tt="Please, enter email",st="Please, enter comment",rt="Escape",ot=e=>{e.innerHTML=""};let p=document.querySelector(".modal-backdrop");p&&p.addEventListener("click",ct);let E;function nt(){p.classList.add("is-open"),window.addEventListener("keydown",oe),E=document.querySelector(".modal-close-btn"),E&&E.addEventListener("click",k)}function oe(e){e.code===rt&&k()}function ct(e){e.currentTarget===e.target&&k()}function k(e){window.removeEventListener("keydown",oe),p.classList.remove("is-open"),ot(p)}document.addEventListener("DOMContentLoaded",We);const m=document.querySelector(".footer-form"),c=m.querySelector(".footer-email"),a=m.querySelector(".footer-comment"),it=document.querySelector(".footer-button"),d=document.querySelector(".footer-email-error"),f=document.querySelector(".footer-comment-error"),F=document.querySelector(".js-footer-scroll-up");F&&F.addEventListener("click",()=>{v("id-hero",3e3)});const L=document.querySelector(".footer-email-success");m&&m.addEventListener("submit",lt);const at=[c,a];at.forEach(e=>{e&&(e.addEventListener("input",ut),e.addEventListener("input",P),e.addEventListener("keydown",W),e.addEventListener("focus",W))});async function lt(e){e.preventDefault();const t=V(c);if(!t){b(d,c,tt);return}const s=V(a);if(!s){b(f,a,st);return}if(!et(t)){b(d,c,U);return}const o={email:t,comment:s};try{const r=await re.post("requests",o);r&&r.status>=200&&r.status<300&&(await Xe(r.data,document.querySelector(".modal-backdrop")),se("Success!"),nt(),H(c),H(a),L&&L.classList.add("visible"),c&&c.classList.add("success"),m.reset())}catch{b(d,c,U)}finally{P()}}function P(){it.disabled=!c.value.trim()||!a.value.trim()}function ut(){d&&d.classList.remove("visible"),f&&f.classList.remove("visible"),c&&c.classList.remove("error"),a&&a.classList.remove("error")}function W(){d&&d.classList.remove("visible"),f&&f.classList.remove("visible"),L&&L.classList.remove("visible"),c&&c.classList.remove("error"),a&&a.classList.remove("error"),c&&c.classList.remove("success")}function b(e,t,s){e&&e.classList.add("visible"),t&&t.classList.add("error"),h(s)}P();
//# sourceMappingURL=commonHelpers.js.map
