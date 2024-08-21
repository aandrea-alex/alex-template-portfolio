import{A as Q,S,N as Y,i as Z,a as ne}from"./assets/vendor-D3n-cRLv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function ce(e,t){e.forEach(s=>{if(s.isIntersecting){const r=s.target;r.dataset.src&&(r.src=r.dataset.src),r.classList.remove("lazy-bg"),t.unobserve(r)}})}const ae=document.querySelectorAll(".lazy-bg"),ie=new IntersectionObserver(ce);ae.forEach(e=>ie.observe(e));const b=(e,t=1e3)=>{const s=document.getElementById(e);if(!s)return;const r=window.scrollY,o=s.getBoundingClientRect().top+r,n=performance.now(),a=i=>{const d=i-n,y=Math.min(d/t,1);window.scrollTo(0,r+(o-r)*q(y)),d<t&&requestAnimationFrame(a)},q=i=>i<.5?2*i*i:-1+(4-2*i)*i;requestAnimationFrame(a)},M=document.querySelector(".js-header-menu-btn"),h=document.querySelector(".js-header-menu"),P=document.querySelector(".js-header-order-link");M&&M.addEventListener("click",G);h&&h.addEventListener("click",le);P&&P.addEventListener("click",ue);function G(){h&&h.classList.toggle("isopen")}function le(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);b(s),G()}function ue(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);b(s)}const I=document.querySelector(".js-header-mobile-menu-btn"),J=document.querySelector(".js-mobile-menu"),B=document.querySelector(".js-mobile-menu-close-btn"),C=document.querySelector(".js-mobile-menu-nav"),R=document.querySelector(".js-mobile-menu-order");I&&I.addEventListener("click",pe);B&&B.addEventListener("click",X);C&&C.addEventListener("click",ee);R&&R.addEventListener("click",ee);function pe(){J.classList.add("is-open")}function X(){J.classList.remove("is-open")}function ee(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);b(s),X()}new Q(".accordion-container",{duration:500,openOnInit:[0]});const u=new S(".about-skills-container",{modules:[Y],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".about-arrow-btn-next"},speed:700,effect:"coverflow",breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});u.on("init",te);u.on("slideChange",te);function te(){if(!u||!u.slides)return;u.slides.forEach(t=>{t.classList.remove("active")});const e=u.slides[u.activeIndex];e&&e.classList.add("active")}new Q(".faq-acc-container");const A=document.querySelector(".js-project-order");A&&A.addEventListener("click",de);function de(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);b(s)}const me="/alex-template-portfolio/assets/book-mob-BdhA58_h.jpg",fe="/alex-template-portfolio/assets/book-mob-2x-j9KOIk62.jpg",O="/alex-template-portfolio/assets/book-tab--kIxrC0Y.jpg",ve="/alex-template-portfolio/assets/book-tab-2x-D_63PazX.jpg",be="/alex-template-portfolio/assets/pet-mob-C1HkQvOk.jpg",xe="/alex-template-portfolio/assets/pet-mob-2x-B5xWtdrT.jpg",T="/alex-template-portfolio/assets/pet-tab-CrhDqkQQ.jpg",ge="/alex-template-portfolio/assets/pet-tab-2x-D-11kDrl.jpg",we="/alex-template-portfolio/assets/vocab-mob-CcDreXMM.jpg",he="/alex-template-portfolio/assets/vocab-mob-2x-BOoZoPUC.jpg",$="/alex-template-portfolio/assets/vocab-tab-Dsv7O7Av.jpg",je="/alex-template-portfolio/assets/vocab-tab-2x-CLu38__-.jpg",Le=[{mob_1x:me,mob_2x:fe,tab_1x:O,tab_2x:ve,main:O,description:"ReadJourney"},{mob_1x:be,mob_2x:xe,tab_1x:T,tab_2x:ge,main:T,description:"PetLove"},{mob_1x:we,mob_2x:he,tab_1x:$,tab_2x:je,main:$,description:"VocabBuilder"}];new S(".projects-swiper-container",{direction:"horizontal",navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},slidesPerView:1,spaceBetween:34,keyboard:{enabled:!0,onlyInViewport:!1}});const ye=document.querySelector(".projects-list");function _e(e,t,s,r,o,n){const a=`
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
              Programming Across<br />Borders: Ideas,<br />Technologies, Innovations
            </p>
           <a href="https://github.com/aandrea-alex/alex-template-portfolio" class="project-link js-project-link" target="_blank">See project</a>
          </div>
        </div>
        <div class="projects-img-wrapper">
            <picture>
              <source
                srcset="
                ${s} 1x,
                ${r} 2x"
                media="(min-width: 768px)"
              />
              <source
                srcset="
                ${e} 1x,
                ${t} 2x"
                media="(max-width: 767px)"
              />
              <img
                class="projects-img"
                src="${o}"
                alt="${n}"
                width="614"
                height="385"
              />
            </picture>
        </div>
      </li>
    `;ye.insertAdjacentHTML("beforeend",a)}Le.map(({mob_1x:e,mob_2x:t,tab_1x:s,tab_2x:r,main:o,description:n})=>{_e(e,t,s,r,o,n)});function Se(e=[]){const t=(a=0)=>[...e.slice(a),...e.slice(0,a)].reduce((i,{url1x:d,url2x:y})=>i+`<li>        
          <picture covers-marquee-picture>
            <source
              srcset="
                ${d} 1x,
                ${y} 2x               
              "
              type="image/webp"
            />
            <img
              class="covers-marquee-img"
              src="${d}"
              alt="Project image"
              loading="lazy"
            />
          </picture>
        </li>
        `,""),s=t(0),r=t(2),o=t(4),n=t(6);return`
    <div class="covers-marquee-inner">
      <ul class="covers-marquee-line">${s}</ul>
      <ul class="covers-marquee-line">${r}</ul>
      <ul class="covers-marquee-line">${o}</ul>
      <ul class="covers-marquee-line">${n}</ul>
    </div>
  `}const ke=async(e,t)=>{const s=Se(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Ee="/alex-template-portfolio/assets/project01@1x-Ye2u9QvY.webp",qe="/alex-template-portfolio/assets/project01@2x-CGnU-NZM.webp",Me="/alex-template-portfolio/assets/project02@1x-dj219-w_.webp",Pe="/alex-template-portfolio/assets/project02@2x-R_GplPUq.webp",Ie="/alex-template-portfolio/assets/project03@1x-CuhbSDYE.webp",Be="/alex-template-portfolio/assets/project03@2x-DFdgcKJ5.webp",Ce="/alex-template-portfolio/assets/project04@1x-Doff4Zlc.webp",Re="/alex-template-portfolio/assets/project04@2x-D8suiMQa.webp",Ae="/alex-template-portfolio/assets/project05@1x-NId4RxqZ.webp",Oe="/alex-template-portfolio/assets/project05@2x-wvuiV8Po.webp",Te="/alex-template-portfolio/assets/project06@1x-C_lFZmue.webp",$e="/alex-template-portfolio/assets/project06@2x-DCqSTG3_.webp",De="/alex-template-portfolio/assets/project07@1x-B3QnrJNm.webp",Ne="/alex-template-portfolio/assets/project07@2x-C0-TBLLl.webp",ze="/alex-template-portfolio/assets/project08@1x-4Vi569Pq.webp",Ve="/alex-template-portfolio/assets/project08@2x-DDEYTNWW.webp",He="/alex-template-portfolio/assets/project09@1x-BaB1ldRA.webp",Ue="/alex-template-portfolio/assets/project09@2x-uHr6DaSI.webp",Fe=[{url1x:Ee,url2x:qe},{url1x:Me,url2x:Pe},{url1x:Ie,url2x:Be},{url1x:Ce,url2x:Re},{url1x:Ae,url2x:Oe},{url1x:Te,url2x:$e},{url1x:De,url2x:Ne},{url1x:ze,url2x:Ve},{url1x:He,url2x:Ue}],We=document.querySelector(".covers-marquee");ke(Fe,We);function Ke(e=[]){return!e||e.length===0?"":e.reduce((t,{_id:s,author:r="Anonymous",avatar_url:o="default-avatar.png",review:n="No review provided"})=>t+`
       <li class="reviews-list-item swiper-slide" id="review-${s}">
        <img
          class="reviews-list-avatar"
          src="${o}"
          alt="${r} avatar"
          
        />
        <div class="reviews-list-item-info">
          <h3 class="reviews-list-fullname">${D(r)}</h3>
          <p class="reviews-list-text">
            ${D(n)}
          </p>
        </div>
      </li>
      `,"")}function D(e){return e.replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}const Qe=async(e,t)=>{try{let s="";e.length===0?s='<span class="notfound">Not found!</span>':s=Ke(e),t.innerHTML="",t.insertAdjacentHTML("beforeend",s)}catch(s){console.error("Error creating reviews:",s)}},Ye="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_x-octagon%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076%200.262%200.026%200.383%200.076c0.121%200.050%200.232%200.124%200.325%200.217s0.167%200.203%200.217%200.325c0.050%200.121%200.076%200.252%200.076%200.383s-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e",Ze="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_check2-circle%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M5%2016c-0-1.931%200.508-3.828%201.473-5.501s2.354-3.061%204.026-4.027c1.672-0.966%203.569-1.474%205.5-1.474s3.828%200.508%205.5%201.474c0.23%200.13%200.501%200.165%200.756%200.096s0.472-0.236%200.604-0.465c0.132-0.229%200.168-0.5%200.101-0.756s-0.233-0.474-0.461-0.607c-2.478-1.431-5.359-2.004-8.197-1.63s-5.472%201.673-7.495%203.696-3.323%204.658-3.697%207.495c-0.374%202.837%200.199%205.718%201.63%208.197s3.639%204.415%206.283%205.511c2.644%201.095%205.575%201.288%208.339%200.547s5.207-2.372%206.949-4.642c1.742-2.27%202.687-5.052%202.687-7.913%200-0.265-0.105-0.52-0.293-0.707s-0.442-0.293-0.707-0.293c-0.265%200-0.52%200.105-0.707%200.293s-0.293%200.442-0.293%200.707c0%202.917-1.159%205.715-3.222%207.778s-4.861%203.222-7.778%203.222c-2.917%200-5.715-1.159-7.778-3.222s-3.222-4.861-3.222-7.778z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M30.708%206.708c0.093-0.093%200.167-0.203%200.217-0.325s0.076-0.252%200.076-0.383-0.026-0.262-0.076-0.383c-0.050-0.122-0.124-0.232-0.217-0.325s-0.203-0.167-0.325-0.217c-0.121-0.050-0.252-0.076-0.383-0.076s-0.262%200.026-0.383%200.076-0.232%200.124-0.325%200.217l-13.292%2013.294-5.292-5.294c-0.093-0.093-0.203-0.167-0.325-0.217s-0.252-0.076-0.383-0.076c-0.132%200-0.262%200.026-0.383%200.076s-0.232%200.124-0.325%200.217c-0.093%200.093-0.167%200.203-0.217%200.325s-0.076%200.252-0.076%200.383c0%200.132%200.026%200.262%200.076%200.383s0.124%200.232%200.217%200.325l6%206c0.093%200.093%200.203%200.167%200.325%200.217s0.252%200.076%200.383%200.076c0.132%200%200.262-0.026%200.383-0.076s0.232-0.124%200.325-0.217l14-14z'%3e%3c/path%3e%3c/svg%3e";function g(e){Z.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ye}`,iconColor:"#fafafb"})}function se(e){Z.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ze}`,iconColor:"#fafafb"})}const oe=ne.create({baseURL:"https://portfolio-js.b.goit.study/api/"}),Ge=document.querySelector(".reviews-list");let N=[];async function Je(){var e;try{const t=await oe.get("reviews");t&&t.status===200?((e=t.data)==null?void 0:e.length)?(se("Fetch success!"),N=t.data):g("Reviews not found"):g("Invalid response")}catch{g("Fetch Error!")}finally{Qe(N,Ge)}}let w;Je().then(()=>{et&&(w=new S(".reviews-swiper-container",{modules:[Y],slidesPerView:1,loop:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},speed:700,effect:"coverflow",on:{init:z,slideChange:z},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45}))}).catch(e=>{console.error(e.message)});function z(){if(!w)return;const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");w.isBeginning?e.disabled=!0:e.disabled=!1,w.isEnd?t.disabled=!0:t.disabled=!1}function Xe(){const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");e&&e.classList.add("hide"),t&&t.classList.add("hide")}function et(){const e=document.querySelector(".reviews-container"),t=document.querySelector(".reviews-swiper-container"),s=document.querySelector(".reviews-btn-prev"),r=document.querySelector(".reviews-btn-next"),o=e.querySelector(".reviews-list-item");return!e||!t||!s||!r||!o?(Xe(),!1):!0}let V=50;const L="data-original";function tt(){document.querySelectorAll(".js-custom-input").forEach(t=>{t.addEventListener("change",ot),t.addEventListener("focus",rt),t.addEventListener("blur",nt)})}function H(e){let t="";return e&&(e.hasAttribute(L)?(t=e.dataset.original,t||(t=e.value.trim())):t=e.value.trim()),t}function U(e){e&&e.hasAttribute(L)&&(e.dataset.original="")}function st(e,t){return e.length>t?e.slice(0,t)+"...":e}function ot(e){const t=e.target,s=t.value.trim();t.hasAttribute(L)&&(t.dataset.original=s)}function rt(e){const t=e.target;t.hasAttribute(L)&&(t.value=t.dataset.original)}function nt(e){const t=e.target,s=t.value;s.length>V&&(t.value=st(s,V))}const ct="/alex-template-portfolio/assets/symbols-KKct6nH2.svg";function at({title:e,message:t}){return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${ct}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${e}            
            </p>
            <p class="modal-message">${t}</p>
          </div>
        </div>   
      `}const it=async(e,t)=>{const s=at(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},lt=e=>/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(e),F="Invalid email, try again",ut="Please, enter email",pt="Please, enter comment",dt="Escape",mt=e=>{e.innerHTML=""};let m=document.querySelector(".modal-backdrop");m&&m.addEventListener("click",vt);let _;function ft(){m.classList.add("is-open"),window.addEventListener("keydown",re),_=document.querySelector(".modal-close-btn"),_&&_.addEventListener("click",k)}function re(e){e.code===dt&&k()}function vt(e){e.currentTarget===e.target&&k()}function k(e){window.removeEventListener("keydown",re),m.classList.remove("is-open"),mt(m)}document.addEventListener("DOMContentLoaded",tt);const f=document.querySelector(".footer-form"),c=f.querySelector(".footer-email"),l=f.querySelector(".footer-comment"),bt=document.querySelector(".footer-button"),p=document.querySelector(".footer-email-error"),v=document.querySelector(".footer-comment-error"),W=document.querySelector(".js-footer-scroll-up");W&&W.addEventListener("click",()=>{b("id-hero",3e3)});const j=document.querySelector(".footer-email-success");f&&f.addEventListener("submit",gt);const xt=[c,l];xt.forEach(e=>{e&&(e.addEventListener("input",wt),e.addEventListener("input",E),e.addEventListener("keydown",K),e.addEventListener("focus",K))});async function gt(e){e.preventDefault();const t=H(c);if(!t){x(p,c,ut);return}const s=H(l);if(!s){x(v,l,pt);return}if(!lt(t)){x(p,c,F);return}const r={email:t,comment:s};try{const o=await oe.post("requests",r);o&&o.status>=200&&o.status<300&&(await it(o.data,document.querySelector(".modal-backdrop")),se("Success!"),ft(),U(c),U(l),j&&j.classList.add("visible"),c&&c.classList.add("success"),f.reset())}catch{x(p,c,F)}finally{E()}}function E(){bt.disabled=!c.value.trim()||!l.value.trim()}function wt(){p&&p.classList.remove("visible"),v&&v.classList.remove("visible"),c&&c.classList.remove("error"),l&&l.classList.remove("error")}function K(){p&&p.classList.remove("visible"),v&&v.classList.remove("visible"),j&&j.classList.remove("visible"),c&&c.classList.remove("error"),l&&l.classList.remove("error"),c&&c.classList.remove("success")}function x(e,t,s){e&&e.classList.add("visible"),t&&t.classList.add("error"),g(s)}E();
//# sourceMappingURL=commonHelpers.js.map
