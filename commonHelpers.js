import{A as G,S as M,N as k,i as Y,a as ae}from"./assets/vendor-CN-mpBkS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const g=(e,t=1e3)=>{const s=document.getElementById(e);if(!s)return;const r=window.scrollY,o=s.getBoundingClientRect().top+r,n=performance.now(),l=i=>{const w=i-n,ie=Math.min(w/t,1);window.scrollTo(0,r+(o-r)*E(ie)),w<t&&requestAnimationFrame(l)},E=i=>i<.5?2*i*i:-1+(4-2*i)*i;requestAnimationFrame(l)},C=document.querySelector(".js-header-menu-btn"),L=document.querySelector(".js-header-menu"),I=document.querySelector(".js-header-order-link");C&&C.addEventListener("click",Z);L&&L.addEventListener("click",le);I&&I.addEventListener("click",ue);function Z(){L&&L.classList.toggle("isopen")}function le(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);g(s),Z()}function ue(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);g(s)}const R=document.querySelector(".js-header-mobile-menu-btn"),K=document.querySelector(".js-mobile-menu"),_=document.querySelector(".js-mobile-menu-close-btn"),A=document.querySelector(".js-mobile-menu-nav"),T=document.querySelector(".js-mobile-menu-order");R&&R.addEventListener("click",de);_&&_.addEventListener("click",Q);A&&A.addEventListener("click",J);T&&T.addEventListener("click",J);function de(){K.classList.add("is-open")}function Q(){K.classList.remove("is-open")}function J(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);g(s),Q()}new G(".accordion-container",{duration:500,openOnInit:[0]});const u=new M(".about-skills-container",{modules:[k],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".about-arrow-btn-next"},speed:700,effect:"coverflow",breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});u.on("init",X);u.on("slideChange",X);function X(){if(!u||!u.slides)return;u.slides.forEach(t=>{t.classList.remove("active")});const e=u.slides[u.activeIndex];e&&e.classList.add("active")}new G(".faq-acc-container");const O=document.querySelector(".js-project-order");O&&O.addEventListener("click",pe);function pe(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);g(s)}function me(e=[]){return e.reduce((t,{url1x:s,url2x:r})=>t+`
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
                ${r} 2x
              "
              type="image/webp"
            />
            <img
              class="projects-img"
              src="${s}"
              alt="Project 01 main page"
            />
          </picture>
        </div>
      </li>
      `,"")}const fe=async(e,t)=>{const s=me(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},ve="/alex-template-portfolio/assets/project01@1x-Ye2u9QvY.webp",ge="/alex-template-portfolio/assets/project01@2x-CGnU-NZM.webp",we="/alex-template-portfolio/assets/project02@1x-dj219-w_.webp",be="/alex-template-portfolio/assets/project02@2x-R_GplPUq.webp",he="/alex-template-portfolio/assets/project03@1x-CuhbSDYE.webp",xe="/alex-template-portfolio/assets/project03@2x-DFdgcKJ5.webp",je="/alex-template-portfolio/assets/project04@1x-Doff4Zlc.webp",Le="/alex-template-portfolio/assets/project04@2x-D8suiMQa.webp",ye="/alex-template-portfolio/assets/project05@1x-NId4RxqZ.webp",Se="/alex-template-portfolio/assets/project05@2x-wvuiV8Po.webp",Ee="/alex-template-portfolio/assets/project06@1x-C_lFZmue.webp",qe="/alex-template-portfolio/assets/project06@2x-DCqSTG3_.webp",Me="/alex-template-portfolio/assets/project07@1x-B3QnrJNm.webp",ke="/alex-template-portfolio/assets/project07@2x-C0-TBLLl.webp",Pe="/alex-template-portfolio/assets/project08@1x-4Vi569Pq.webp",Be="/alex-template-portfolio/assets/project08@2x-DDEYTNWW.webp",Ce="/alex-template-portfolio/assets/project09@1x-BaB1ldRA.webp",Ie="/alex-template-portfolio/assets/project09@2x-uHr6DaSI.webp",ee=[{url1x:ve,url2x:ge},{url1x:we,url2x:be},{url1x:he,url2x:xe},{url1x:je,url2x:Le},{url1x:ye,url2x:Se},{url1x:Ee,url2x:qe},{url1x:Me,url2x:ke},{url1x:Pe,url2x:Be},{url1x:Ce,url2x:Ie}];let h;const te=document.querySelector(".projects-list");te&&Re();async function Re(){try{await fe(ee,te),h=new M(".projects-swiper-container",{modules:[k],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},speed:1e3,effect:"coverflow",on:{init:$,slideChange:$},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45})}catch(e){console.log(e.message)}}function $(){if(!h)return;const e=document.querySelector(".projects-btn-prev"),t=document.querySelector(".projects-btn-next");h.isBeginning?e.disabled=!0:e.disabled=!1,h.isEnd?t.disabled=!0:t.disabled=!1}function _e(e=[]){const t=(n=0)=>[...e.slice(n),...e.slice(0,n)].reduce((E,{url1x:i,url2x:w})=>E+`<li>        
          <picture covers-marquee-picture>
            <source
              srcset="
                ${i} 1x,
                ${w} 2x               
              "
              type="image/webp"
            />
            <img
              class="covers-marquee-img"
              src="${i}"
              alt="Project image"
            />
          </picture>
        </li>
        `,""),s=t(0),r=t(2),o=t(4);return`
    <div class="covers-marquee-inner">
      <ul class="covers-marquee-line">${s}</ul>
      <ul class="covers-marquee-line">${r}</ul>
      <ul class="covers-marquee-line">${o}</ul>
    </div>
  `}const Ae=async(e,t)=>{const s=_e(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Te=document.querySelector(".covers-marquee");Ae(ee,Te);function Oe(e=[]){return!e||e.length===0?"":e.reduce((t,{_id:s,author:r="Anonymous",avatar_url:o="default-avatar.png",review:n="No review provided"})=>t+`
       <li class="reviews-list-item swiper-slide" id="review-${s}">
        <img
          class="reviews-list-avatar"
          src="${o}"
          alt="${r} avatar"
        />
        <div class="reviews-list-item-info">
          <h3 class="reviews-list-fullname">${N(r)}</h3>
          <p class="reviews-list-text">
            ${N(n)}
          </p>
        </div>
      </li>
      `,"")}function N(e){return e.replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}const $e=async(e,t)=>{try{let s="";e.length===0?s='<span class="notfound">Not found!</span>':s=Oe(e),t.innerHTML="",t.insertAdjacentHTML("beforeend",s)}catch(s){console.error("Error creating reviews:",s)}},Ne="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_x-octagon%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076%200.262%200.026%200.383%200.076c0.121%200.050%200.232%200.124%200.325%200.217s0.167%200.203%200.217%200.325c0.050%200.121%200.076%200.252%200.076%200.383s-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e",De="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_check2-circle%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M5%2016c-0-1.931%200.508-3.828%201.473-5.501s2.354-3.061%204.026-4.027c1.672-0.966%203.569-1.474%205.5-1.474s3.828%200.508%205.5%201.474c0.23%200.13%200.501%200.165%200.756%200.096s0.472-0.236%200.604-0.465c0.132-0.229%200.168-0.5%200.101-0.756s-0.233-0.474-0.461-0.607c-2.478-1.431-5.359-2.004-8.197-1.63s-5.472%201.673-7.495%203.696-3.323%204.658-3.697%207.495c-0.374%202.837%200.199%205.718%201.63%208.197s3.639%204.415%206.283%205.511c2.644%201.095%205.575%201.288%208.339%200.547s5.207-2.372%206.949-4.642c1.742-2.27%202.687-5.052%202.687-7.913%200-0.265-0.105-0.52-0.293-0.707s-0.442-0.293-0.707-0.293c-0.265%200-0.52%200.105-0.707%200.293s-0.293%200.442-0.293%200.707c0%202.917-1.159%205.715-3.222%207.778s-4.861%203.222-7.778%203.222c-2.917%200-5.715-1.159-7.778-3.222s-3.222-4.861-3.222-7.778z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M30.708%206.708c0.093-0.093%200.167-0.203%200.217-0.325s0.076-0.252%200.076-0.383-0.026-0.262-0.076-0.383c-0.050-0.122-0.124-0.232-0.217-0.325s-0.203-0.167-0.325-0.217c-0.121-0.050-0.252-0.076-0.383-0.076s-0.262%200.026-0.383%200.076-0.232%200.124-0.325%200.217l-13.292%2013.294-5.292-5.294c-0.093-0.093-0.203-0.167-0.325-0.217s-0.252-0.076-0.383-0.076c-0.132%200-0.262%200.026-0.383%200.076s-0.232%200.124-0.325%200.217c-0.093%200.093-0.167%200.203-0.217%200.325s-0.076%200.252-0.076%200.383c0%200.132%200.026%200.262%200.076%200.383s0.124%200.232%200.217%200.325l6%206c0.093%200.093%200.203%200.167%200.325%200.217s0.252%200.076%200.383%200.076c0.132%200%200.262-0.026%200.383-0.076s0.232-0.124%200.325-0.217l14-14z'%3e%3c/path%3e%3c/svg%3e";function x(e){Y.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ne}`,iconColor:"#fafafb"})}function se(e){Y.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${De}`,iconColor:"#fafafb"})}const oe=ae.create({baseURL:"https://portfolio-js.b.goit.study/api/"}),Ve=document.querySelector(".reviews-list");let D=[];async function ze(){var e;try{const t=await oe.get("reviews");t&&t.status===200?((e=t.data)==null?void 0:e.length)?(se("Fetch success!"),D=t.data):x("Reviews not found"):x("Invalid response")}catch{x("Fetch Error!")}finally{$e(D,Ve)}}let j;ze().then(()=>{Fe&&(j=new M(".reviews-swiper-container",{modules:[k],slidesPerView:1,loop:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},speed:700,effect:"coverflow",on:{init:V,slideChange:V},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45}))}).catch(e=>{console.error(e.message)});function V(){if(!j)return;const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");j.isBeginning?e.disabled=!0:e.disabled=!1,j.isEnd?t.disabled=!0:t.disabled=!1}function He(){const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");e&&e.classList.add("hide"),t&&t.classList.add("hide")}function Fe(){const e=document.querySelector(".reviews-container"),t=document.querySelector(".reviews-swiper-container"),s=document.querySelector(".reviews-btn-prev"),r=document.querySelector(".reviews-btn-next"),o=e.querySelector(".reviews-list-item");return!e||!t||!s||!r||!o?(He(),!1):!0}let p=ne();const S="data-original";function Ue(){document.querySelectorAll(".js-custom-input").forEach(t=>{t.addEventListener("change",We),t.addEventListener("focus",Ge),t.addEventListener("blur",Ye)}),window.addEventListener("resize",()=>{p=ne()})}function z(e){let t="";return e&&(e.hasAttribute(S)?(t=e.dataset.original,t||(t=e.value.trim())):t=e.value.trim()),t}function H(e){e&&e.hasAttribute(S)&&(e.dataset.original="")}function re(e,t){return e.length>t?e.slice(0,t)+"...":e}function We(e){const t=e.target,s=t.value.trim();t.hasAttribute(S)&&(t.dataset.original=s),s.length>p&&(t.value=re(s,p))}function Ge(e){const t=e.target;t.hasAttribute(S)&&(t.value=t.dataset.original)}function Ye(e){const t=e.target,s=t.value;s.length>p&&(t.value=re(s,p))}function ne(){const e=window.innerWidth;return e<768?45:e<1440?28:49}const Ze="/alex-template-portfolio/assets/symbols-PgoFg63M.svg";function Ke({title:e,message:t}){return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${Ze}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${e}            
            </p>
            <p class="modal-message">${t}</p>
          </div>
        </div>   
      `}const Qe=async(e,t)=>{const s=Ke(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Je=e=>(console.log(e),/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(e)),F="Invalid email, try again",Xe="Please, enter email",et="Please, enter comment",tt="Escape",st=e=>{e.innerHTML=""};let m=document.querySelector(".modal-backdrop");m&&m.addEventListener("click",rt);let q;function ot(){m.classList.add("is-open"),window.addEventListener("keydown",ce),q=document.querySelector(".modal-close-btn"),q&&q.addEventListener("click",P)}function ce(e){e.code===tt&&P()}function rt(e){e.currentTarget===e.target&&P()}function P(e){window.removeEventListener("keydown",ce),m.classList.remove("is-open"),st(m)}document.addEventListener("DOMContentLoaded",Ue);const f=document.querySelector(".footer-form"),c=f.querySelector(".footer-email"),a=f.querySelector(".footer-comment"),nt=document.querySelector(".footer-button"),d=document.querySelector(".footer-email-error"),v=document.querySelector(".footer-comment-error"),U=document.querySelector(".js-footer-scroll-up");U&&U.addEventListener("click",()=>{g("id-hero",3e3)});const y=document.querySelector(".footer-email-success");f&&f.addEventListener("submit",it);const ct=[c,a];ct.forEach(e=>{e&&(e.addEventListener("input",at),e.addEventListener("input",B),e.addEventListener("keydown",W),e.addEventListener("focus",W))});async function it(e){e.preventDefault();const t=z(c);if(!t){b(d,c,Xe);return}const s=z(a);if(!s){b(v,a,et);return}if(!Je(t)){b(d,c,F);return}const r={email:t,comment:s};console.log(r);try{const o=await oe.post("requests",r);o&&o.status>=200&&o.status<300&&(await Qe(o.data,document.querySelector(".modal-backdrop")),se("Success!"),ot(),H(c),H(a),y&&y.classList.add("visible"),c&&c.classList.add("success"),f.reset())}catch{b(d,c,F)}finally{B()}}function B(){nt.disabled=!c.value.trim()||!a.value.trim()}function at(){d&&d.classList.remove("visible"),v&&v.classList.remove("visible"),c&&c.classList.remove("error"),a&&a.classList.remove("error")}function W(){d&&d.classList.remove("visible"),v&&v.classList.remove("visible"),y&&y.classList.remove("visible"),c&&c.classList.remove("error"),a&&a.classList.remove("error"),c&&c.classList.remove("success")}function b(e,t,s){e&&e.classList.add("visible"),t&&t.classList.add("error"),x(s)}B();
//# sourceMappingURL=commonHelpers.js.map
