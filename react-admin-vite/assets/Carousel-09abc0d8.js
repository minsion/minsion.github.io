import{u as j,r as E,s as P,a as $,j as a,b as e,L as T,d as c}from"./index-8cd85ed0.js";import{g as N,n as O,S as g,N as y,P as x,a as u}from"./pagination.min-d2bad344.js";import{C as f}from"./Highlight-f2825850.js";import{I as B}from"./IconBell-58d1c7ab.js";import{I as v}from"./IconCode-4ce6e9fe.js";function I({swiper:t,extendParams:b,on:l,emit:i}){let m;t.autoplay={running:!1,paused:!1},b({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});function n(){if(!t.size){t.autoplay.running=!1,t.autoplay.paused=!1;return}const o=t.slides.eq(t.activeIndex);let p=t.params.autoplay.delay;o.attr("data-swiper-autoplay")&&(p=o.attr("data-swiper-autoplay")||t.params.autoplay.delay),clearTimeout(m),m=O(()=>{let d;t.params.autoplay.reverseDirection?t.params.loop?(t.loopFix(),d=t.slidePrev(t.params.speed,!0,!0),i("autoplay")):t.isBeginning?t.params.autoplay.stopOnLastSlide?r():(d=t.slideTo(t.slides.length-1,t.params.speed,!0,!0),i("autoplay")):(d=t.slidePrev(t.params.speed,!0,!0),i("autoplay")):t.params.loop?(t.loopFix(),d=t.slideNext(t.params.speed,!0,!0),i("autoplay")):t.isEnd?t.params.autoplay.stopOnLastSlide?r():(d=t.slideTo(0,t.params.speed,!0,!0),i("autoplay")):(d=t.slideNext(t.params.speed,!0,!0),i("autoplay")),(t.params.cssMode&&t.autoplay.running||d===!1)&&n()},p)}function s(){return typeof m<"u"||t.autoplay.running?!1:(t.autoplay.running=!0,i("autoplayStart"),n(),!0)}function r(){return!t.autoplay.running||typeof m>"u"?!1:(m&&(clearTimeout(m),m=void 0),t.autoplay.running=!1,i("autoplayStop"),!0)}function h(o){t.autoplay.running&&(t.autoplay.paused||(m&&clearTimeout(m),t.autoplay.paused=!0,o===0||!t.params.autoplay.waitForTransition?(t.autoplay.paused=!1,n()):["transitionend","webkitTransitionEnd"].forEach(p=>{t.$wrapperEl[0].addEventListener(p,w)})))}function S(){const o=N();o.visibilityState==="hidden"&&t.autoplay.running&&h(),o.visibilityState==="visible"&&t.autoplay.paused&&(n(),t.autoplay.paused=!1)}function w(o){!t||t.destroyed||!t.$wrapperEl||o.target===t.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(p=>{t.$wrapperEl[0].removeEventListener(p,w)}),t.autoplay.paused=!1,t.autoplay.running?n():r())}function k(){t.params.autoplay.disableOnInteraction?r():(i("autoplayPause"),h()),["transitionend","webkitTransitionEnd"].forEach(o=>{t.$wrapperEl[0].removeEventListener(o,w)})}function C(){t.params.autoplay.disableOnInteraction||(t.autoplay.paused=!1,i("autoplayResume"),n())}function z(){t.params.autoplay.pauseOnMouseEnter&&(t.$el.on("mouseenter",k),t.$el.on("mouseleave",C))}function L(){t.$el.off("mouseenter",k),t.$el.off("mouseleave",C)}l("init",()=>{t.params.autoplay.enabled&&(s(),N().addEventListener("visibilitychange",S),z())}),l("beforeTransitionStart",(o,p,d)=>{t.autoplay.running&&(d||!t.params.autoplay.disableOnInteraction?t.autoplay.pause(p):r())}),l("sliderFirstMove",()=>{t.autoplay.running&&(t.params.autoplay.disableOnInteraction?r():h())}),l("touchEnd",()=>{t.params.cssMode&&t.autoplay.paused&&!t.params.autoplay.disableOnInteraction&&n()}),l("destroy",()=>{L(),t.autoplay.running&&r(),N().removeEventListener("visibilitychange",S)}),Object.assign(t.autoplay,{pause:h,run:n,start:s,stop:r})}const R=()=>{const t=j();E.useEffect(()=>{t(P("Carousel"))});const b=["carousel1.jpeg","carousel2.jpeg","carousel3.jpeg"],l=$(s=>s.themeConfig),[i,m]=E.useState([]),n=s=>{i.includes(s)?m(r=>r.filter(h=>h!==s)):m([...i,s])};return a("div",{children:[a("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(T,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Carousel"})})]}),a("div",{className:"pt-5 space-y-8",children:[a("div",{className:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap",children:[e("div",{className:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3",children:e(B,{})}),e("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e("a",{href:"https://swiperjs.com/react",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://swiperjs.com/react"})]}),a("div",{className:"grid lg:grid-cols-2 grid-cols-1 gap-6",children:[a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Basic"}),e("button",{onClick:()=>n("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(v,{className:"me-2"}),"Code"]})})]}),a(g,{modules:[y,x],navigation:{nextEl:".swiper-button-next-ex1",prevEl:".swiper-button-prev-ex1"},pagination:{clickable:!0},className:"swiper max-w-3xl mx-auto mb-5",id:"slider1",dir:l.rtlClass,children:[e("div",{className:"swiper-wrapper",children:b.map((s,r)=>e(u,{children:e("img",{src:`/assets/images/${s}`,className:"w-full max-h-80 object-cover",alt:"itemImage"})},r))}),e("button",{className:"swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e(c,{className:"w-5 h-5 rtl:-rotate-90 rotate-90"})}),e("button",{className:"swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e(c,{className:"w-5 h-5 rtl:rotate-90 -rotate-90"})})]},l.rtlClass==="rtl"?"true":"false"),i.includes("code1")&&e(f,{children:e("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<Swiper
    modules={[Navigation, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex1', prevEl: '.swiper-button-prev-ex1' }}
    pagination={{ clickable: true }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider1"
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex1 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex1 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Autopaly"}),e("button",{onClick:()=>n("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(v,{className:"me-2"}),"Code"]})})]}),a(g,{modules:[y,I,x],navigation:{nextEl:".swiper-button-next-ex2",prevEl:".swiper-button-prev-ex2"},pagination:{clickable:!0},autoplay:{delay:2e3},className:"swiper max-w-3xl mx-auto mb-5",id:"slider2",dir:l.rtlClass,children:[e("div",{className:"swiper-wrapper",children:b.map((s,r)=>a(u,{children:[e("img",{src:`/assets/images/${s}`,className:"w-full max-h-80 object-cover",alt:"itemImage"}),a("div",{className:"absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12",children:[e("div",{className:"sm:text-3xl text-base font-bold",children:"This is blog Image"}),e("div",{className:"sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."}),e("button",{type:"button",className:"mt-4 btn btn-primary",children:"Learn more"})]})]},r))}),e("button",{className:"swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e(c,{className:"w-5 h-5 rtl:-rotate-90 rotate-90"})}),e("button",{className:"swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e(c,{className:"w-5 h-5 rtl:rotate-90 -rotate-90"})})]},l.rtlClass==="rtl"?"true":"false"),i.includes("code2")&&e(f,{children:e("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<Swiper
    modules={[Navigation, Autoplay, Pagination]}
    navigation={{ nextEl: '.swiper-button-next-ex2', prevEl: '.swiper-button-prev-ex2' }}
    pagination={{ clickable: true }}
    autoplay={{ delay: 2000 }}
    className="swiper max-w-3xl mx-auto mb-5"
    id="slider2"
    dir={themeConfig.rtlClass}
    key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
>
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full max-h-80 object-cover" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/4 ltr:left-12 rtl:right-12">
                        <div className="sm:text-3xl text-base font-bold">This is blog Image</div>
                        <div className="sm:mt-5 mt-1 w-4/5 text-base sm:block hidden font-medium">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.
                        </div>
                        <button type="button" className="mt-4 btn btn-primary">
                            Learn more
                        </button>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
    <button className="swiper-button-prev-ex2 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex2 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</Swiper>`})})]}),a("div",{className:"panel relative",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Vertical"}),e("button",{onClick:()=>n("code3"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(v,{className:"me-2"}),"Code"]})})]}),e(g,{modules:[x,I],pagination:{clickable:!0},autoplay:{delay:2e3},direction:"vertical",className:"max-w-3xl mx-auto mb-5",id:"slider3",dir:l.rtlClass,children:e("div",{className:"swiper-wrapper",children:b.map((s,r)=>a(u,{children:[e("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImage"}),e("div",{className:"absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center",children:e("div",{className:"sm:text-xl text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})})]},r))})},l.rtlClass==="rtl"?"true":"false"),i.includes("code3")&&e(f,{children:e("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} autoplay={{ delay: 2000 }} direction="vertical" className="max-w-3xl mx-auto mb-5" id="slider3">
    <div className="swiper-wrapper">
        {items.map((item, i) => {
            return (
                <SwiperSlide key={i}>
                    <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImage" />
                    <div className="absolute z-[999] text-white top-1/2 left-1/2 w-full -translate-x-1/2 text-center">
                        <div className="sm:text-xl text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                    </div>
                </SwiperSlide>
            );
        })}
    </div>
</Swiper>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Loop"}),e("button",{onClick:()=>n("code4"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(v,{className:"me-2"}),"Code"]})})]}),a("div",{className:"swiper max-w-3xl mx-auto mb-5",id:"slider4",children:[e("div",{className:"swiper-wrapper",children:a(g,{modules:[y,x],slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0,type:"fraction"},navigation:{nextEl:".swiper-button-next-ex4",prevEl:".swiper-button-prev-ex4"},dir:l.rtlClass,children:[a(u,{children:[e("img",{src:"/assets/images/carousel1.jpeg",className:"w-full",alt:"slide1"}),a("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e("div",{className:"text-3xl font-bold",children:"Slide 1"}),e("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]}),a(u,{children:[e("img",{src:"/assets/images/carousel2.jpeg",className:"w-full",alt:"slide2"}),a("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e("div",{className:"text-3xl font-bold",children:"Slide 2"}),e("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]}),a(u,{children:[e("img",{src:"/assets/images/carousel3.jpeg",className:"w-full",alt:"slide3"}),a("div",{className:"absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11",children:[e("div",{className:"text-3xl font-bold",children:"Slide 3"}),e("div",{className:"mb-4 sm:text-base font-medium",children:"Lorem Ipsum is simply dummy text of the printing."})]})]})]},l.rtlClass==="rtl"?"true":"false")}),e("button",{className:"swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e(c,{className:"w-5 h-5 rtl:-rotate-90 rotate-90"})}),e("button",{className:"swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2",children:e(c,{className:"w-5 h-5 rtl:rotate-90 -rotate-90"})})]}),i.includes("code4")&&e(f,{children:e("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper';

<div className="swiper max-w-3xl mx-auto mb-5" id="slider4">
    <div className="swiper-wrapper">
        <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
                type: 'fraction',
            }}
            navigation={{
                nextEl: '.swiper-button-next-ex4',
                prevEl: '.swiper-button-prev-ex4',
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
        >
            <SwiperSlide>
                <img src="/assets/images/carousel1.jpeg" className="w-full" alt="slide1" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 1</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/carousel2.jpeg" className="w-full" alt="slide2" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 2</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/assets/images/carousel3.jpeg" className="w-full" alt="slide3" />
                <div className="absolute z-[999] text-white bottom-8 left-1/2 w-full -translate-x-1/2 text-center sm:px-0 px-11">
                    <div className="text-3xl font-bold">Slide 3</div>
                    <div className="mb-4 sm:text-base font-medium">Lorem Ipsum is simply dummy text of the printing.</div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
    <button className="swiper-button-prev-ex4 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex4 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-1/2 -translate-y-1/2">
        <svg>...</svg>
    </button>
</div>`})})]}),a("div",{className:"panel lg:col-span-2",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Multiple Slides"}),e("button",{onClick:()=>n("code5"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(v,{className:"me-2"}),"Code"]})})]}),a("div",{className:"swiper",id:"slider5",children:[e("div",{className:"swiper-wrapper",children:a(g,{modules:[y,x],navigation:{nextEl:".swiper-button-next-ex5",prevEl:".swiper-button-prev-ex5"},pagination:{clickable:!0},breakpoints:{1024:{slidesPerView:3,spaceBetween:30},768:{slidesPerView:2,spaceBetween:40},320:{slidesPerView:1,spaceBetween:20}},dir:l.rtlClass,children:[b.map((s,r)=>e(u,{children:e("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImg"})},r)),b.map((s,r)=>e(u,{children:e("img",{src:`/assets/images/${s}`,className:"w-full",alt:"itemImg"})},r))]},l.rtlClass==="rtl"?"true":"false")}),e("button",{className:"swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2",children:e(c,{className:"w-5 h-5 rtl:-rotate-90 rotate-90"})}),e("button",{className:"swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2",children:e(c,{className:"w-5 h-5 rtl:rotate-90 -rotate-90"})})]}),i.includes("code5")&&e(f,{children:e("pre",{className:"language-typescript",children:`import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

<div className="swiper" id="slider5">
    <div className="swiper-wrapper">
        <Swiper
            modules={[Navigation, Pagination]}
            navigation={{
                nextEl: '.swiper-button-next-ex5',
                prevEl: '.swiper-button-prev-ex5',
            }}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                },
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
            }}
            dir={themeConfig.rtlClass}
            key={themeConfig.rtlClass === 'rtl' ? 'true' : 'false'}
        >
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                    </SwiperSlide>
                );
            })}
            {items.map((item, i) => {
                return (
                    <SwiperSlide key={i}>
                        <img src={\`/assets/images/\${item}\`} className="w-full" alt="itemImg" />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    </div>
    <button className="swiper-button-prev-ex5 grid place-content-center ltr:left-2 rtl:right-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
        <svg>...</svg>
    </button>
    <button className="swiper-button-next-ex5 grid place-content-center ltr:right-2 rtl:left-2 p-1 transition text-primary hover:text-white border border-primary  hover:border-primary hover:bg-primary rounded-full absolute z-[999] top-[44%] -translate-y-1/2">
        <svg>...</svg>
    </button>
</div>`})})]})]})]})]})};export{R as default};
