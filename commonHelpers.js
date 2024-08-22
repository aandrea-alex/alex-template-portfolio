import{A as Y,S as q,N as P,K as k,i as ne,a as ce}from"./assets/vendor-CZdjGj8m.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();function ie(e,t){e.forEach(s=>{if(s.isIntersecting){const o=s.target;o.dataset.src&&(o.src=o.dataset.src),o.classList.remove("lazy-bg"),t.unobserve(o)}})}const ae=document.querySelectorAll(".lazy-bg"),le=new IntersectionObserver(ie);ae.forEach(e=>le.observe(e));const h=(e,t=1e3)=>{const s=document.getElementById(e);if(!s)return;const o=window.scrollY,r=s.getBoundingClientRect().top+o,n=performance.now(),i=a=>{const m=a-n,y=Math.min(m/t,1);window.scrollTo(0,o+(r-o)*_(y)),m<t&&requestAnimationFrame(i)},_=a=>a<.5?2*a*a:-1+(4-2*a)*a;requestAnimationFrame(i)},I=document.querySelector(".js-header-menu-btn"),p=document.querySelector(".js-header-menu"),R=document.querySelector(".js-header-order-link");I&&p&&(I.addEventListener("click",()=>{p.classList.toggle("isopen")}),p.addEventListener("click",G));R&&R.addEventListener("click",G);function G(e){e.preventDefault();const t=e.target.closest("a");if(!t)return;const s=t.getAttribute("href").substring(1);h(s),p&&p.classList.contains("isopen")&&p.classList.remove("isopen")}const C=document.querySelector(".js-header-mobile-menu-btn"),J=document.querySelector(".js-mobile-menu"),A=document.querySelector(".js-mobile-menu-close-btn"),T=document.querySelector(".js-mobile-menu-nav"),D=document.querySelector(".js-mobile-menu-order");C&&C.addEventListener("click",ue);A&&A.addEventListener("click",Q);T&&T.addEventListener("click",X);D&&D.addEventListener("click",X);function ue(){J.classList.add("is-open")}function Q(){J.classList.remove("is-open")}function X(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);h(s),Q()}new Y(".accordion-container",{duration:500,openOnInit:[0]});const u=new q(".about-skills-container",{modules:[P,k],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".about-arrow-btn-next"},keyboard:{enabled:!0,onlyInViewport:!0},speed:700,effect:"slide",breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});u.on("init",ee);u.on("slideChange",ee);function ee(){if(!u||!u.slides)return;u.slides.forEach(t=>{t.classList.remove("active")});const e=u.slides[u.activeIndex];e&&e.classList.add("active")}new Y(".faq-acc-container");const $=document.querySelector(".js-project-order");$&&$.addEventListener("click",de);function de(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);h(s)}function pe(e=[]){return e.reduce((t,{url1x:s,url2x:o})=>t+`
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
      `,"")}const me=async(e,t)=>{const s=pe(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},fe="/alex-template-portfolio/assets/project13@1x-D5Ae1P1v.webp",ve="/alex-template-portfolio/assets/project13@2x-D8klBtoi.webp",xe="/alex-template-portfolio/assets/project11@1x-ticSGbVE.webp",be="/alex-template-portfolio/assets/project11@2x-BNlS8ZLJ.webp",ge="/alex-template-portfolio/assets/project12@1x-DX7EZF19.webp",we="/alex-template-portfolio/assets/project12@2x-D5j4c6uV.webp",je="/alex-template-portfolio/assets/project01@1x-Ye2u9QvY.webp",he="/alex-template-portfolio/assets/project01@2x-CGnU-NZM.webp",Le="/alex-template-portfolio/assets/project02@1x-dj219-w_.webp",ye="/alex-template-portfolio/assets/project02@2x-R_GplPUq.webp",Se="/alex-template-portfolio/assets/project03@1x-CuhbSDYE.webp",Ee="/alex-template-portfolio/assets/project03@2x-DFdgcKJ5.webp",qe="/alex-template-portfolio/assets/project04@1x-Doff4Zlc.webp",Pe="/alex-template-portfolio/assets/project04@2x-D8suiMQa.webp",ke="/alex-template-portfolio/assets/project05@1x-NId4RxqZ.webp",Me="/alex-template-portfolio/assets/project05@2x-wvuiV8Po.webp",Be="/alex-template-portfolio/assets/project06@1x-C_lFZmue.webp",_e="/alex-template-portfolio/assets/project06@2x-DCqSTG3_.webp",Ie="/alex-template-portfolio/assets/project07@1x-B3QnrJNm.webp",Re="/alex-template-portfolio/assets/project07@2x-C0-TBLLl.webp",Ce="/alex-template-portfolio/assets/project08@1x-4Vi569Pq.webp",Ae="/alex-template-portfolio/assets/project08@2x-DDEYTNWW.webp",Te="/alex-template-portfolio/assets/project09@1x-BaB1ldRA.webp",De="/alex-template-portfolio/assets/project09@2x-uHr6DaSI.webp",$e="/alex-template-portfolio/assets/project10@1x-D4mJW1Ez.webp",Ve="/alex-template-portfolio/assets/project10@2x-D6jge__s.webp",te=[{url1x:fe,url2x:ve},{url1x:xe,url2x:be},{url1x:ge,url2x:we},{url1x:je,url2x:he},{url1x:Le,url2x:ye},{url1x:Se,url2x:Ee},{url1x:qe,url2x:Pe},{url1x:ke,url2x:Me},{url1x:Be,url2x:_e},{url1x:Ie,url2x:Re},{url1x:Ce,url2x:Ae},{url1x:Te,url2x:De},{url1x:$e,url2x:Ve}];let g;const se=document.querySelector(".projects-list");se&&Ne();async function Ne(){try{await me(te,se),g=new q(".projects-swiper-container",{modules:[P,k],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},speed:1e3,effect:"slide",on:{init:V,slideChange:V},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45})}catch(e){console.log(e.message)}}function V(){if(!g)return;const e=document.querySelector(".projects-btn-prev"),t=document.querySelector(".projects-btn-next");g.isBeginning?e.disabled=!0:e.disabled=!1,g.isEnd?t.disabled=!0:t.disabled=!1}function Oe(e=[]){const t=(i=0)=>[...e.slice(i),...e.slice(0,i)].reduce((a,{url1x:m,url2x:y})=>a+`<li>        
          <picture covers-marquee-picture>
            <source
              srcset="
                ${m} 1x,
                ${y} 2x               
              "
              type="image/webp"
            />
            <img
              class="covers-marquee-img"
              src="${m}"
              alt="Project image"
              loading="lazy"
            />
          </picture>
        </li>
        `,""),s=t(0),o=t(2),r=t(4),n=t(6);return`
    <div class="covers-marquee-inner">
      <ul class="covers-marquee-line">${s}</ul>
      <ul class="covers-marquee-line">${o}</ul>
      <ul class="covers-marquee-line">${r}</ul>
      <ul class="covers-marquee-line">${n}</ul>
    </div>
  `}const ze=async(e,t)=>{const s=Oe(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},He=document.querySelector(".covers-marquee");ze(te,He);const Fe=new IntersectionObserver(e=>{e.forEach(t=>{t.isIntersecting?t.target.classList.add("animate-covers"):t.target.classList.remove("animate-covers")})},{threshold:.5}),N=document.querySelector(".covers-section");N&&Fe.observe(N);function Ue(e=[]){return!e||e.length===0?"":e.reduce((t,{_id:s,author:o="Anonymous",avatar_url:r="default-avatar.png",review:n="No review provided"})=>t+`
       <li class="reviews-list-item swiper-slide" id="review-${s}">
        <img
          class="reviews-list-avatar"
          src="${r}"
          alt="${o} avatar"
          
        />
        <div class="reviews-list-item-info">
          <h3 class="reviews-list-fullname">${O(o)}</h3>
          <p class="reviews-list-text">
            ${O(n)}
          </p>
        </div>
      </li>
      `,"")}function O(e){return e.replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}const Ke=async(e,t)=>{try{let s="";e.length===0?s='<span class="notfound">Not found!</span>':s=Ue(e),t.innerHTML="",t.insertAdjacentHTML("beforeend",s)}catch(s){console.error("Error creating reviews:",s)}},Ze="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_x-octagon%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076%200.262%200.026%200.383%200.076c0.121%200.050%200.232%200.124%200.325%200.217s0.167%200.203%200.217%200.325c0.050%200.121%200.076%200.252%200.076%200.383s-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e";function S(e){ne.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Ze}`,iconColor:"#fafafb"})}const re=ce.create({baseURL:"https://portfolio-js.b.goit.study/api/"}),We=document.querySelector(".reviews-list");let z=[];async function Ye(){var e;try{const t=await re.get("reviews");t&&t.status===200?((e=t.data)==null?void 0:e.length)?z=t.data:S("Reviews not found"):S("Invalid response")}catch{S("Fetch Error!")}finally{Ke(z,We)}}let w;Ye().then(()=>{Je&&(w=new q(".reviews-swiper-container",{modules:[P,k],slidesPerView:1,loop:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},keyboard:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},speed:700,effect:"slide",on:{init:H,slideChange:H},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45}))}).catch(e=>{console.error(e.message)});function H(){if(!w)return;const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");w.isBeginning?e.disabled=!0:e.disabled=!1,w.isEnd?t.disabled=!0:t.disabled=!1}function Ge(){const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");e&&e.classList.add("hide"),t&&t.classList.add("hide")}function Je(){const e=document.querySelector(".reviews-container"),t=document.querySelector(".reviews-swiper-container"),s=document.querySelector(".reviews-btn-prev"),o=document.querySelector(".reviews-btn-next"),r=e.querySelector(".reviews-list-item");return!e||!t||!s||!o||!r?(Ge(),!1):!0}let F=50;const L="data-original";function Qe(){document.querySelectorAll(".js-custom-input").forEach(t=>{t.addEventListener("change",et),t.addEventListener("focus",tt),t.addEventListener("blur",st)})}function U(e){let t="";return e&&(e.hasAttribute(L)?(t=e.dataset.original,t||(t=e.value.trim())):t=e.value.trim()),t}function K(e){e&&e.hasAttribute(L)&&(e.dataset.original="")}function Xe(e,t){return e.length>t?e.slice(0,t)+"...":e}function et(e){const t=e.target,s=t.value.trim();t.hasAttribute(L)&&(t.dataset.original=s)}function tt(e){const t=e.target;t.hasAttribute(L)&&(t.value=t.dataset.original)}function st(e){const t=e.target,s=t.value;s.length>F&&(t.value=Xe(s,F))}const rt="/alex-template-portfolio/assets/symbols-KKct6nH2.svg";function ot({title:e,message:t}){return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${rt}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${e}            
            </p>
            <p class="modal-message">${t}</p>
          </div>
        </div>   
      `}const nt=async(e,t)=>{const s=ot(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},ct=e=>/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(e),it="Escape",at=e=>{e.innerHTML=""};let f=document.querySelector(".modal-backdrop");f&&f.addEventListener("click",ut);let E;function lt(){f.classList.add("is-open"),window.addEventListener("keydown",oe),E=document.querySelector(".modal-close-btn"),E&&E.addEventListener("click",M)}function oe(e){e.code===it&&M()}function ut(e){e.currentTarget===e.target&&M()}function M(e){window.removeEventListener("keydown",oe),f.classList.remove("is-open"),at(f)}document.addEventListener("DOMContentLoaded",Qe);const v=document.querySelector(".footer-form"),c=v.querySelector(".footer-email"),l=v.querySelector(".footer-comment"),dt=document.querySelector(".footer-button"),d=document.querySelector(".footer-email-error"),x=document.querySelector(".footer-comment-error"),Z=document.querySelector(".js-footer-scroll-up");Z&&Z.addEventListener("click",()=>{h("id-hero",3e3)});const j=document.querySelector(".footer-email-success");v&&v.addEventListener("submit",mt);const pt=[c,l];pt.forEach(e=>{e&&(e.addEventListener("input",ft),e.addEventListener("input",B),e.addEventListener("keydown",W),e.addEventListener("focus",W))});async function mt(e){e.preventDefault();const t=U(c);if(!t){b(d,c);return}const s=U(l);if(!s){b(x,l);return}if(!ct(t)){b(d,c);return}const o={email:t,comment:s};try{const r=await re.post("requests",o);r&&r.status>=200&&r.status<300&&(await nt(r.data,document.querySelector(".modal-backdrop")),lt(),K(c),K(l),j&&j.classList.add("visible"),c&&c.classList.add("success"),v.reset())}catch{b(d,c)}finally{B()}}function B(){dt.disabled=!c.value.trim()||!l.value.trim()}function ft(){d&&d.classList.remove("visible"),x&&x.classList.remove("visible"),c&&c.classList.remove("error"),l&&l.classList.remove("error")}function W(){d&&d.classList.remove("visible"),x&&x.classList.remove("visible"),j&&j.classList.remove("visible"),c&&c.classList.remove("error"),l&&l.classList.remove("error"),c&&c.classList.remove("success")}function b(e,t,s){e&&e.classList.add("visible"),t&&t.classList.add("error")}B();
//# sourceMappingURL=commonHelpers.js.map
