import{A as W,S as q,N as M,i as Y,a as ce}from"./assets/vendor-CN-mpBkS.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const v=(e,t=1e3)=>{const s=document.getElementById(e);if(!s)return;const n=window.scrollY,o=s.getBoundingClientRect().top+n,r=performance.now(),l=i=>{const g=i-r,ne=Math.min(g/t,1);window.scrollTo(0,n+(o-n)*S(ne)),g<t&&requestAnimationFrame(l)},S=i=>i<.5?2*i*i:-1+(4-2*i)*i;requestAnimationFrame(l)},B=document.querySelector(".js-header-menu-btn"),j=document.querySelector(".js-header-menu"),C=document.querySelector(".js-header-order-link");B&&B.addEventListener("click",Z);j&&j.addEventListener("click",ie);C&&C.addEventListener("click",ae);function Z(){j&&j.classList.toggle("isopen")}function ie(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);v(s),Z()}function ae(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);v(s)}const I=document.querySelector(".js-header-mobile-menu-btn"),K=document.querySelector(".js-mobile-menu"),R=document.querySelector(".js-mobile-menu-close-btn"),_=document.querySelector(".js-mobile-menu-nav"),A=document.querySelector(".js-mobile-menu-order");I&&I.addEventListener("click",le);R&&R.addEventListener("click",Q);_&&_.addEventListener("click",J);A&&A.addEventListener("click",J);function le(){K.classList.add("is-open")}function Q(){K.classList.remove("is-open")}function J(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);v(s),Q()}new W(".accordion-container",{duration:500,openOnInit:[0]});const u=new q(".about-skills-container",{modules:[M],slidesPerView:2,spaceBetween:2,loop:!0,navigation:{nextEl:".about-arrow-btn-next"},speed:700,effect:"coverflow",breakpoints:{768:{slidesPerView:3,spaceBetween:2},1440:{slidesPerView:6,spaceBetween:2}}});u.on("init",X);u.on("slideChange",X);function X(){if(!u||!u.slides)return;u.slides.forEach(t=>{t.classList.remove("active")});const e=u.slides[u.activeIndex];e&&e.classList.add("active")}new W(".faq-acc-container");const T=document.querySelector(".js-project-order");T&&T.addEventListener("click",ue);function ue(e){e.preventDefault();const t=e.target;if(!t.matches("a"))return;const s=t.getAttribute("href").substring(1);v(s)}function de(e=[]){return e.reduce((t,{url1x:s,url2x:n})=>t+`
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
                ${n} 2x
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
      `,"")}const pe=async(e,t)=>{const s=de(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},me="/alex-template-portfolio/assets/project01@1x-Ye2u9QvY.webp",fe="/alex-template-portfolio/assets/project01@2x-CGnU-NZM.webp",ve="/alex-template-portfolio/assets/project02@1x-dj219-w_.webp",ge="/alex-template-portfolio/assets/project02@2x-R_GplPUq.webp",we="/alex-template-portfolio/assets/project03@1x-CuhbSDYE.webp",be="/alex-template-portfolio/assets/project03@2x-DFdgcKJ5.webp",xe="/alex-template-portfolio/assets/project04@1x-Doff4Zlc.webp",he="/alex-template-portfolio/assets/project04@2x-D8suiMQa.webp",je="/alex-template-portfolio/assets/project05@1x-NId4RxqZ.webp",Le="/alex-template-portfolio/assets/project05@2x-wvuiV8Po.webp",ye="/alex-template-portfolio/assets/project06@1x-C_lFZmue.webp",Se="/alex-template-portfolio/assets/project06@2x-DCqSTG3_.webp",Ee="/alex-template-portfolio/assets/project07@1x-B3QnrJNm.webp",qe="/alex-template-portfolio/assets/project07@2x-C0-TBLLl.webp",Me="/alex-template-portfolio/assets/project08@1x-4Vi569Pq.webp",ke="/alex-template-portfolio/assets/project08@2x-DDEYTNWW.webp",Pe="/alex-template-portfolio/assets/project09@1x-BaB1ldRA.webp",Be="/alex-template-portfolio/assets/project09@2x-uHr6DaSI.webp",ee=[{url1x:me,url2x:fe},{url1x:ve,url2x:ge},{url1x:we,url2x:be},{url1x:xe,url2x:he},{url1x:je,url2x:Le},{url1x:ye,url2x:Se},{url1x:Ee,url2x:qe},{url1x:Me,url2x:ke},{url1x:Pe,url2x:Be}];let b;const te=document.querySelector(".projects-list");te&&Ce();async function Ce(){try{await pe(ee,te),b=new q(".projects-swiper-container",{modules:[M],slidesPerView:1,spaceBetween:0,loop:!1,navigation:{nextEl:".projects-btn-next",prevEl:".projects-btn-prev"},speed:1e3,effect:"coverflow",on:{init:O,slideChange:O},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45})}catch(e){console.log(e.message)}}function O(){if(!b)return;const e=document.querySelector(".projects-btn-prev"),t=document.querySelector(".projects-btn-next");b.isBeginning?e.disabled=!0:e.disabled=!1,b.isEnd?t.disabled=!0:t.disabled=!1}function Ie(e=[]){const t=(r=0)=>[...e.slice(r),...e.slice(0,r)].reduce((S,{url1x:i,url2x:g})=>S+`<li>        
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
            />
          </picture>
        </li>
        `,""),s=t(0),n=t(2),o=t(4);return`
    <div class="covers-marquee-inner">
      <ul class="covers-marquee-line">${s}</ul>
      <ul class="covers-marquee-line">${n}</ul>
      <ul class="covers-marquee-line">${o}</ul>
    </div>
  `}const Re=async(e,t)=>{const s=Ie(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},_e=document.querySelector(".covers-marquee");Re(ee,_e);function Ae(e=[]){return!e||e.length===0?"":e.reduce((t,{_id:s,author:n="Anonymous",avatar_url:o="default-avatar.png",review:r="No review provided"})=>t+`
       <li class="reviews-list-item swiper-slide" id="review-${s}">
        <img
          class="reviews-list-avatar"
          src="${o}"
          alt="${n} avatar"
        />
        <div class="reviews-list-item-info">
          <h3 class="reviews-list-fullname">${$(n)}</h3>
          <p class="reviews-list-text">
            ${$(r)}
          </p>
        </div>
      </li>
      `,"")}function $(e){return e.replace(/[&<>"']/g,function(t){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[t]})}const Te=async(e,t)=>{try{let s="";e.length===0?s='<span class="notfound">Not found!</span>':s=Ae(e),t.innerHTML="",t.insertAdjacentHTML("beforeend",s)}catch(s){console.error("Error creating reviews:",s)}},Oe="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_x-octagon%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M9.080%200.292c0.187-0.187%200.441-0.292%200.706-0.292h12.428c0.265%200%200.519%200.105%200.706%200.292l8.788%208.788c0.187%200.187%200.292%200.441%200.292%200.706v12.428c0%200.265-0.105%200.519-0.292%200.706l-8.788%208.788c-0.187%200.187-0.441%200.292-0.706%200.292h-12.428c-0.265%200-0.519-0.105-0.706-0.292l-8.788-8.788c-0.187-0.187-0.292-0.441-0.292-0.706v-12.428c0-0.265%200.105-0.519%200.292-0.706l8.788-8.788zM10.2%202l-8.2%208.2v11.6l8.2%208.2h11.6l8.2-8.2v-11.6l-8.2-8.2h-11.6z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M9.292%209.292c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076c0.132%200%200.262%200.026%200.383%200.076s0.232%200.124%200.325%200.217l5.292%205.294%205.292-5.294c0.093-0.093%200.203-0.167%200.325-0.217s0.252-0.076%200.383-0.076%200.262%200.026%200.383%200.076c0.121%200.050%200.232%200.124%200.325%200.217s0.167%200.203%200.217%200.325c0.050%200.121%200.076%200.252%200.076%200.383s-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325l-5.294%205.292%205.294%205.292c0.093%200.093%200.167%200.203%200.217%200.325s0.076%200.252%200.076%200.383-0.026%200.262-0.076%200.383c-0.050%200.121-0.124%200.232-0.217%200.325s-0.203%200.167-0.325%200.217c-0.121%200.050-0.252%200.076-0.383%200.076s-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217l-5.292-5.294-5.292%205.294c-0.093%200.093-0.203%200.167-0.325%200.217s-0.252%200.076-0.383%200.076-0.262-0.026-0.383-0.076c-0.121-0.050-0.232-0.124-0.325-0.217s-0.167-0.203-0.217-0.325c-0.050-0.121-0.076-0.252-0.076-0.383s0.026-0.262%200.076-0.383c0.050-0.121%200.124-0.232%200.217-0.325l5.294-5.292-5.294-5.292c-0.093-0.093-0.167-0.203-0.217-0.325s-0.076-0.252-0.076-0.383c0-0.132%200.026-0.262%200.076-0.383s0.124-0.232%200.217-0.325z'%3e%3c/path%3e%3c/svg%3e",$e="data:image/svg+xml,%3c!--%20Generated%20by%20IcoMoon.io%20--%3e%3csvg%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20width='32'%20height='32'%20viewBox='0%200%2032%2032'%3e%3ctitle%3ebi_check2-circle%3c/title%3e%3cpath%20fill='%23fafafb'%20d='M5%2016c-0-1.931%200.508-3.828%201.473-5.501s2.354-3.061%204.026-4.027c1.672-0.966%203.569-1.474%205.5-1.474s3.828%200.508%205.5%201.474c0.23%200.13%200.501%200.165%200.756%200.096s0.472-0.236%200.604-0.465c0.132-0.229%200.168-0.5%200.101-0.756s-0.233-0.474-0.461-0.607c-2.478-1.431-5.359-2.004-8.197-1.63s-5.472%201.673-7.495%203.696-3.323%204.658-3.697%207.495c-0.374%202.837%200.199%205.718%201.63%208.197s3.639%204.415%206.283%205.511c2.644%201.095%205.575%201.288%208.339%200.547s5.207-2.372%206.949-4.642c1.742-2.27%202.687-5.052%202.687-7.913%200-0.265-0.105-0.52-0.293-0.707s-0.442-0.293-0.707-0.293c-0.265%200-0.52%200.105-0.707%200.293s-0.293%200.442-0.293%200.707c0%202.917-1.159%205.715-3.222%207.778s-4.861%203.222-7.778%203.222c-2.917%200-5.715-1.159-7.778-3.222s-3.222-4.861-3.222-7.778z'%3e%3c/path%3e%3cpath%20fill='%23fafafb'%20d='M30.708%206.708c0.093-0.093%200.167-0.203%200.217-0.325s0.076-0.252%200.076-0.383-0.026-0.262-0.076-0.383c-0.050-0.122-0.124-0.232-0.217-0.325s-0.203-0.167-0.325-0.217c-0.121-0.050-0.252-0.076-0.383-0.076s-0.262%200.026-0.383%200.076-0.232%200.124-0.325%200.217l-13.292%2013.294-5.292-5.294c-0.093-0.093-0.203-0.167-0.325-0.217s-0.252-0.076-0.383-0.076c-0.132%200-0.262%200.026-0.383%200.076s-0.232%200.124-0.325%200.217c-0.093%200.093-0.167%200.203-0.217%200.325s-0.076%200.252-0.076%200.383c0%200.132%200.026%200.262%200.076%200.383s0.124%200.232%200.217%200.325l6%206c0.093%200.093%200.203%200.167%200.325%200.217s0.252%200.076%200.383%200.076c0.132%200%200.262-0.026%200.383-0.076s0.232-0.124%200.325-0.217l14-14z'%3e%3c/path%3e%3c/svg%3e";function x(e){Y.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#fc5a5a",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${Oe}`,iconColor:"#fafafb"})}function se(e){Y.show({message:e,messageColor:"#fafafb",messageSize:"16px",backgroundColor:"#82C43C",position:"topRight",closeOnEscape:!0,close:!0,icon:"Icomoon",iconUrl:`${$e}`,iconColor:"#fafafb"})}const oe=ce.create({baseURL:"https://portfolio-js.b.goit.study/api/"}),Ne=document.querySelector(".reviews-list");let N=[];async function De(){var e;try{const t=await oe.get("reviews");t&&t.status===200?((e=t.data)==null?void 0:e.length)?(se("Fetch success!"),N=t.data):x("Reviews not found"):x("Invalid response")}catch{x("Fetch Error!")}finally{Te(N,Ne)}}let h;De().then(()=>{He&&(h=new q(".reviews-swiper-container",{modules:[M],slidesPerView:1,loop:!1,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"},breakpoints:{768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},speed:700,effect:"coverflow",on:{init:D,slideChange:D},touchEventsTarget:"wrapper",simulateTouch:!0,touchRatio:1,touchAngle:45}))}).catch(e=>{console.error(e.message)});function D(){if(!h)return;const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");h.isBeginning?e.disabled=!0:e.disabled=!1,h.isEnd?t.disabled=!0:t.disabled=!1}function Ve(){const e=document.querySelector(".reviews-btn-prev"),t=document.querySelector(".reviews-btn-next");e&&e.classList.add("hide"),t&&t.classList.add("hide")}function He(){const e=document.querySelector(".reviews-container"),t=document.querySelector(".reviews-swiper-container"),s=document.querySelector(".reviews-btn-prev"),n=document.querySelector(".reviews-btn-next"),o=e.querySelector(".reviews-list-item");return!e||!t||!s||!n||!o?(Ve(),!1):!0}let V=50;const y="data-original";function ze(){document.querySelectorAll(".js-custom-input").forEach(t=>{t.addEventListener("change",Fe),t.addEventListener("focus",Ge),t.addEventListener("blur",We)})}function H(e){let t="";return e&&(e.hasAttribute(y)?(t=e.dataset.original,t||(t=e.value.trim())):t=e.value.trim()),t}function z(e){e&&e.hasAttribute(y)&&(e.dataset.original="")}function Ue(e,t){return e.length>t?e.slice(0,t)+"...":e}function Fe(e){const t=e.target,s=t.value.trim();t.hasAttribute(y)&&(t.dataset.original=s)}function Ge(e){const t=e.target;t.hasAttribute(y)&&(t.value=t.dataset.original)}function We(e){const t=e.target,s=t.value;s.length>V&&(t.value=Ue(s,V))}const Ye="/alex-template-portfolio/assets/symbols-PgoFg63M.svg";function Ze({title:e,message:t}){return`
        <div class="modal-window">
          <div class="modal-container">
            <button class="modal-close-btn" type="button">
              <svg
                class="modal-close-icon"            
                aria-label="Close icon"
              >
                <use href="${Ye}#icon-x"></use>
              </svg>
            </button>
            <p class="modal-title">
              ${e}            
            </p>
            <p class="modal-message">${t}</p>
          </div>
        </div>   
      `}const Ke=async(e,t)=>{const s=Ze(e);t.innerHTML="",t.insertAdjacentHTML("beforeend",s)},Qe=e=>/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,7}$/.test(e),U="Invalid email, try again",Je="Please, enter email",Xe="Please, enter comment",et="Escape",tt=e=>{e.innerHTML=""};let p=document.querySelector(".modal-backdrop");p&&p.addEventListener("click",ot);let E;function st(){p.classList.add("is-open"),window.addEventListener("keydown",re),E=document.querySelector(".modal-close-btn"),E&&E.addEventListener("click",k)}function re(e){e.code===et&&k()}function ot(e){e.currentTarget===e.target&&k()}function k(e){window.removeEventListener("keydown",re),p.classList.remove("is-open"),tt(p)}document.addEventListener("DOMContentLoaded",ze);const m=document.querySelector(".footer-form"),c=m.querySelector(".footer-email"),a=m.querySelector(".footer-comment"),rt=document.querySelector(".footer-button"),d=document.querySelector(".footer-email-error"),f=document.querySelector(".footer-comment-error"),F=document.querySelector(".js-footer-scroll-up");F&&F.addEventListener("click",()=>{v("id-hero",3e3)});const L=document.querySelector(".footer-email-success");m&&m.addEventListener("submit",ct);const nt=[c,a];nt.forEach(e=>{e&&(e.addEventListener("input",it),e.addEventListener("input",P),e.addEventListener("keydown",G),e.addEventListener("focus",G))});async function ct(e){e.preventDefault();const t=H(c);if(!t){w(d,c,Je);return}const s=H(a);if(!s){w(f,a,Xe);return}if(!Qe(t)){w(d,c,U);return}const n={email:t,comment:s};try{const o=await oe.post("requests",n);o&&o.status>=200&&o.status<300&&(await Ke(o.data,document.querySelector(".modal-backdrop")),se("Success!"),st(),z(c),z(a),L&&L.classList.add("visible"),c&&c.classList.add("success"),m.reset())}catch{w(d,c,U)}finally{P()}}function P(){rt.disabled=!c.value.trim()||!a.value.trim()}function it(){d&&d.classList.remove("visible"),f&&f.classList.remove("visible"),c&&c.classList.remove("error"),a&&a.classList.remove("error")}function G(){d&&d.classList.remove("visible"),f&&f.classList.remove("visible"),L&&L.classList.remove("visible"),c&&c.classList.remove("error"),a&&a.classList.remove("error"),c&&c.classList.remove("success")}function w(e,t,s){e&&e.classList.add("visible"),t&&t.classList.add("error"),x(s)}P();
//# sourceMappingURL=commonHelpers.js.map
