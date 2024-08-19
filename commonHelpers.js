import{A as N,S as L,N as y,i as O,a as oe}from"./assets/vendor-CN-mpBkS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))c(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const f of n.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();const D=e=>{const t=document.getElementById(e);t&&t.scrollIntoView({behavior:"smooth"})},M=document.querySelector(".js-header-menu-btn"),w=document.querySelector(".js-header-menu"),q=document.querySelector(".js-header-order-link");M&&M.addEventListener("click",V);w&&w.addEventListener("click",z);q&&q.addEventListener("click",z);function V(){w&&w.classList.toggle("isopen")}function z(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);D(s),V()}const P=document.querySelector(".js-header-mobile-menu-btn"),H=document.querySelector(".js-mobile-menu"),k=document.querySelector(".js-mobile-menu-close-btn"),B=document.querySelector(".js-mobile-menu-nav"),R=document.querySelector(".js-mobile-menu-order");P&&P.addEventListener("click",re);k&&k.addEventListener("click",U);B&&B.addEventListener("click",F);R&&R.addEventListener("click",F);function re(){H.classList.add("is-open")}function U(){H.classList.remove("is-open")}function F(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);D(s),U()}new N(".accordion-container");new L(".about-skills-container",{modules:[y],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".about-arrow-btn-next"},breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});new N(".faq-acc-container");function ne(e=[]){return e.reduce((t,{url1x:s,url2x:c})=>t+`
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
                ${c} 2x
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
      `,"")}const ce=async(e,t)=>{const s=ne(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},ie="/alex-template-portfolio/assets/project01@1x-Ye2u9QvY.webp",ae="/alex-template-portfolio/assets/project01@2x-CGnU-NZM.webp",le="/alex-template-portfolio/assets/project02@1x-dj219-w_.webp",ue="/alex-template-portfolio/assets/project02@2x-R_GplPUq.webp",de="/alex-template-portfolio/assets/project03@1x-CuhbSDYE.webp",pe="/alex-template-portfolio/assets/project03@2x-DFdgcKJ5.webp",me="/alex-template-portfolio/assets/project04@1x-Doff4Zlc.webp",fe="/alex-template-portfolio/assets/project04@2x-D8suiMQa.webp",ve="/alex-template-portfolio/assets/project05@1x-NId4RxqZ.webp",ge="/alex-template-portfolio/assets/project05@2x-wvuiV8Po.webp",we="/alex-template-portfolio/assets/project06@1x-C_lFZmue.webp",be="/alex-template-portfolio/assets/project06@2x-DCqSTG3_.webp",xe="/alex-template-portfolio/assets/project07@1x-B3QnrJNm.webp",he="/alex-template-portfolio/assets/project07@2x-C0-TBLLl.webp",je="/alex-template-portfolio/assets/project08@1x-4Vi569Pq.webp",Le="/alex-template-portfolio/assets/project08@2x-DDEYTNWW.webp",ye="/alex-template-portfolio/assets/project09@1x-BaB1ldRA.webp",Se="/alex-template-portfolio/assets/project09@2x-uHr6DaSI.webp",W=[{url1x:ie,url2x:ae},{url1x:le,url2x:ue},{url1x:de,url2x:pe},{url1x:me,url2x:fe},{url1x:ve,url2x:ge},{url1x:we,url2x:be},{url1x:xe,url2x:he},{url1x:je,url2x:Le},{url1x:ye,url2x:Se}];let v;const G=document.querySelector(".projects-list");G&&Ee();async function Ee(){try{await ce(W,G),v=new L(".projects-swiper-container",{modules:[y],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},on:{init:C,slideChange:C},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45})}catch(e){console.log(e.message)}}function C(){if(!v)return;const e=document.querySelector(".projects-btn-prev"),t=document.querySelector(".projects-btn-next");v.isBeginning?e.disabled=!0:e.disabled=!1,v.isEnd?t.disabled=!0:t.disabled=!1}function Me(e=[]){const t=(n=0)=>[...e.slice(n),...e.slice(0,n)].reduce((te,{url1x:E,url2x:se})=>te+`        
          <picture>
            <source
              srcset="
                ${E} 1x,
                ${se} 2x               
              "
              type="image/webp"
            />
            <img
              class="cover-marquee-img"
              src="${E}"
              alt="Project image"
            />
          </picture>
      
        `,""),s=t(0),c=t(3),o=t(6);return`
    <div class="cover-marquee-inner">
      <div class="cover-marquee-line">${s}</div>
      <div class="cover-marquee-line">${c}</div>
      <div class="cover-marquee-line">${o}</div>
    </div>
  `}const qe=async(e,t)=>{const s=Me(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Pe=document.querySelector(".covers-marquee");qe(W,Pe);function ke(e=[]){return!e||e.length===0?"":e.reduce((t,{_id:s,author:c="Anonymous",avatar_url:o="default-avatar.png",review:n="No review provided"})=>t+`
       <li class="reviews-list-item swiper-slide" id="review-${s}">
        <img
          class="reviews-list-avatar"
          src="${o}"
          alt="${c} avatar"
        />
        <div class="reviews-list-item-info">
          <h3 class="reviews-list-fullname">${_(c)}</h3>
          <p class="reviews-list-text">
            ${_(n)}
          </p>
        </div>
      </li>
      `,"")}function _(e){return e.replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}const Be=async(e,t)=>{try{let s="";e.length===0?s='<span class="notfound">Not found!</span>':s=ke(e),t.innerHTML="",t.insertAdjacentHTML("beforeend",s)}catch(s){console.error("Error creating reviews:",s)}},Re="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_x-octagon%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076%200.262%200.026%200.383%200.076c0.121%200.050%200.232%200.124%200.325%200.217s0.167%200.203%200.217%200.325c0.050%200.121%200.076%200.252%200.076%200.383s-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e",Ce="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_check2-circle%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M5%2016c-0-1.931%200.508-3.828%201.473-5.501s2.354-3.061%204.026-4.027c1.672-0.966%203.569-1.474%205.5-1.474s3.828%200.508%205.5%201.474c0.23%200.13%200.501%200.165%200.756%200.096s0.472-0.236%200.604-0.465c0.132-0.229%200.168-0.5%200.101-0.756s-0.233-0.474-0.461-0.607c-2.478-1.431-5.359-2.004-8.197-1.63s-5.472%201.673-7.495%203.696-3.323%204.658-3.697%207.495c-0.374%202.837%200.199%205.718%201.63%208.197s3.639%204.415%206.283%205.511c2.644%201.095%205.575%201.288%208.339%200.547s5.207-2.372%206.949-4.642c1.742-2.27%202.687-5.052%202.687-7.913%200-0.265-0.105-0.52-0.293-0.707s-0.442-0.293-0.707-0.293c-0.265%200-0.52%200.105-0.707%200.293s-0.293%200.442-0.293%200.707c0%202.917-1.159%205.715-3.222%207.778s-4.861%203.222-7.778%203.222c-2.917%200-5.715-1.159-7.778-3.222s-3.222-4.861-3.222-7.778z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M30.708%206.708c0.093-0.093%200.167-0.203%200.217-0.325s0.076-0.252%200.076-0.383-0.026-0.262-0.076-0.383c-0.050-0.122-0.124-0.232-0.217-0.325s-0.203-0.167-0.325-0.217c-0.121-0.050-0.252-0.076-0.383-0.076s-0.262%200.026-0.383%200.076-0.232%200.124-0.325%200.217l-13.292%2013.294-5.292-5.294c-0.093-0.093-0.203-0.167-0.325-0.217s-0.252-0.076-0.383-0.076c-0.132%200-0.262%200.026-0.383%200.076s-0.232%200.124-0.325%200.217c-0.093%200.093-0.167%200.203-0.217%200.325s-0.076%200.252-0.076%200.383c0%200.132%200.026%200.262%200.076%200.383s0.124%200.232%200.217%200.325l6%206c0.093%200.093%200.203%200.167%200.325%200.217s0.252%200.076%200.383%200.076c0.132%200%200.262-0.026%200.383-0.076s0.232-0.124%200.325-0.217l14-14z'%3e%3c/path%3e%3c/svg%3e";function l(e){O.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Re}`,iconColor:"#fafafb"})}function Z(e){O.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ce}`,iconColor:"#fafafb"})}const Y=oe.create({baseURL:"https://portfolio-js.b.goit.study/api/"}),_e=document.querySelector(".reviews-list");let I=[];async function Ie(){var e;try{const t=await Y.get("reviews");t&&t.status===200?(console.log("STATUS",t.status),((e=t.data)==null?void 0:e.length)?(Z("Fetch success!"),I=t.data):l("Reviews not found")):l("Invalid response")}catch{l("Fetch Error!")}finally{Be(I,_e)}}let g;Ie().then(()=>{Ae&&(g=new L(".reviews-swiper-container",{modules:[y],slidesPerView:1,loop:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},on:{init:T,slideChange:T},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45}))}).catch(e=>{console.error(e.message)});function T(){if(!g)return;const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");g.isBeginning?e.disabled=!0:e.disabled=!1,g.isEnd?t.disabled=!0:t.disabled=!1}function Te(){const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");e&&e.classList.add("hide"),t&&t.classList.add("hide")}function Ae(){const e=document.querySelector(".reviews-container"),t=document.querySelector(".reviews-swiper-container"),s=document.querySelector(".reviews-btn-prev"),c=document.querySelector(".reviews-btn-next"),o=e.querySelector(".reviews-list-item");return!e||!t||!s||!c||!o?(Te(),!1):!0}let d=Q();const x="data-original";function $e(){document.querySelectorAll(".js-custom-input").forEach(t=>{t.addEventListener("change",Ne),t.addEventListener("focus",Oe),t.addEventListener("blur",De)}),window.addEventListener("resize",()=>{d=Q()})}function A(e){let t="";return e&&(e.hasAttribute(x)?(t=e.dataset.original,t||(t=e.value.trim())):t=e.value.trim()),t}function $(e){e&&e.hasAttribute(x)&&(e.dataset.original="")}function K(e,t){return e.length>t?e.slice(0,t)+"...":e}function Ne(e){const t=e.target,s=t.value.trim();t.hasAttribute(x)&&(t.dataset.original=s),s.length>d&&(t.value=K(s,d))}function Oe(e){const t=e.target;t.hasAttribute(x)&&(t.value=t.dataset.original)}function De(e){const t=e.target,s=t.value;s.length>d&&(t.value=K(s,d))}function Q(){const e=window.innerWidth;return e<768?45:e<1440?28:49}const Ve="/alex-template-portfolio/assets/symbols-PgoFg63M.svg";function ze({title:e,message:t}){return console.log(t),`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${Ve}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${e}            
            </p>
            <p class="modal-message">${t}</p>
          </div>
        </div>   
      `}const He=async(e,t)=>{const s=ze(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Ue=e=>(console.log(e),/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(e)),Fe="Invalid email, try again",We="Please, enter email",Ge="Please, enter comment",Ze="Escape",Ye=e=>{e.innerHTML=""};let p=document.querySelector(".modal-backdrop");p&&p.addEventListener("click",Qe);let j;function Ke(){p.classList.add("is-open"),window.addEventListener("keydown",J),j=document.querySelector(".modal-close-btn"),j&&j.addEventListener("click",S)}function J(e){e.code===Ze&&S()}function Qe(e){e.currentTarget===e.target&&S()}function S(e){window.removeEventListener("keydown",J),p.classList.remove("is-open"),Ye(p)}document.addEventListener("DOMContentLoaded",$e);const m=document.querySelector(".footer-form"),r=m.querySelector(".footer-email"),i=m.querySelector(".footer-comment"),Je=document.querySelector(".footer-button"),a=document.querySelector(".footer-email-error"),u=document.querySelector(".footer-comment-error"),b=document.querySelector(".footer-email-success");m&&m.addEventListener("submit",Xe);r&&r.addEventListener("input",X);i&&i.addEventListener("input",X);r&&r.addEventListener("input",h);i&&i.addEventListener("input",h);r.addEventListener("keydown",ee);r.addEventListener("focus",ee);async function Xe(e){e.preventDefault();const t=A(r);if(!t){a&&a.classList.add("visible"),r&&r.classList.add("error"),l(We);return}const s=A(i);if(!s){u&&u.classList.add("visible"),i&&i.classList.add("error"),l(Ge);return}if(!Ue(t)){l(Fe),a&&a.classList.add("visible"),r&&r.classList.add("error");return}const c={email:t,comment:s};console.log(c);try{const o=await Y.post("requests",c);o&&o.status>=200&&o.status<300&&(await He(o.data,document.querySelector(".modal-backdrop")),Z("Success!"),Ke(),$(r),$(i),b&&b.classList.add("visible"),r&&r.classList.add("success"),m.reset())}catch{a&&a.classList.add("visible"),r&&r.classList.add("error")}finally{h()}}function h(){Je.disabled=!r.value.trim()||!i.value.trim()}function X(){a&&a.classList.remove("visible"),u&&u.classList.remove("visible"),r&&r.classList.remove("error"),i&&i.classList.remove("error")}function ee(){a&&a.classList.remove("visible"),u&&u.classList.remove("visible"),b&&b.classList.remove("visible"),r&&r.classList.remove("error"),i&&i.classList.remove("error"),r&&r.classList.remove("success")}h();
//# sourceMappingURL=commonHelpers.js.map
