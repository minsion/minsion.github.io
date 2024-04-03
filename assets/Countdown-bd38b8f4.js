import{u as D,r as d,s as j,j as t,b as e,L as T}from"./index-21dbdbc4.js";import{C as u}from"./Highlight-44bb2925.js";import{I as p}from"./IconCode-7061e36d.js";const V=()=>{const b=D();d.useEffect(()=>{b(j("Countdown"))});const[i,m]=d.useState([]),h=r=>{i.includes(r)?m(l=>l.filter(s=>s!==r)):m([...i,r])},[o,f]=d.useState({days:null,hours:null,minutes:null,seconds:null}),[w,g]=d.useState(null),v=()=>{const r=new Date;r.setDate(r.getDate()+3);const l=r.getTime();let s={};g(setInterval(()=>{const n=new Date().getTime(),a=l-n;s.days=Math.floor(a/(1e3*60*60*24)),s.hours=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),s.minutes=Math.floor(a%(1e3*60*60)/(1e3*60)),s.seconds=Math.floor(a%(1e3*60)/1e3),f(x=>({...x,...s})),a<0&&clearInterval(w)}))};d.useEffect(()=>{v(),k()},[]);const[c,y]=d.useState({days:null,hours:null,minutes:null,seconds:null}),[N,_]=d.useState(null),k=()=>{const r=new Date;r.setFullYear(r.getFullYear()+1);const l=r.getTime();let s={};_(setInterval(()=>{const n=new Date().getTime(),a=l-n;s.days=Math.floor(a/(1e3*60*60*24)),s.hours=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),s.minutes=Math.floor(a%(1e3*60*60)/(1e3*60)),s.seconds=Math.floor(a%(1e3*60)/1e3),y(x=>({...x,...s})),a<0&&clearInterval(N)}))};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(T,{to:"#",className:"text-primary hover:underline",children:"Components"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Countdown"})})]}),t("div",{className:"pt-5 grid xl:grid-cols-2 grid-cols-1 gap-6",children:[t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Simple Countdown"}),e("button",{onClick:()=>h("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(p,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5 grid grid-cols-4 justify-items-center gap-3",children:[t("div",{children:[e("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:o.days})}),e("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Days"})]}),t("div",{children:[e("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:o.hours})}),e("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Hours"})]}),t("div",{children:[e("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:o.minutes})}),e("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Mins"})]}),t("div",{children:[e("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:o.seconds})}),e("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Sec"})]})]}),i.includes("code1")&&e(u,{children:e("pre",{className:"language-typescript",children:`import { useState, useEffect } from 'react';

    const [demo1, setDemo1] = useState<any>({ days: null, hours: null, minutes: null, seconds: null });
    const [timer1, setTimer1] = useState<any>(null);

    const setTimerDemo1 = () => {
        const date = new Date();
        date.setDate(date.getDate() + 3);
        const countDownDate = date.getTime();

        let updatedValue: any = {};
        setTimer1(
            setInterval(() => {
                const now = new Date().getTime();

                const distance = countDownDate - now;

                updatedValue.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                updatedValue.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                updatedValue.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                updatedValue.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDemo1((demo1: any) => ({
                    ...demo1,
                    ...updatedValue,
                }));

                if (distance < 0) {
                    clearInterval(timer1);
                }
            })
        );
    };

    useEffect(() => {
        setTimerDemo1();
    }, []);

<div className="mb-5 grid grid-cols-4 justify-items-center gap-3">
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.days}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.hours}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.minutes}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo1.seconds}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
    </div>
</div>
`})})]}),t("div",{className:"panel",children:[t("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Circle Countdown"}),e("button",{onClick:()=>h("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:t("span",{className:"flex items-center",children:[e(p,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5 grid grid-cols-4 justify-items-center gap-3",children:[t("div",{children:[e("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:c.days})}),e("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Days"})]}),t("div",{children:[e("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:c.hours})}),e("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Hours"})]}),t("div",{children:[e("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:c.minutes})}),e("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Mins"})]}),t("div",{children:[e("div",{className:"w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col",children:e("h1",{className:"text-primary sm:text-3xl text-xl text-center",children:c.seconds})}),e("h4",{className:"text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold",children:"Sec"})]})]}),i.includes("code2")&&e(u,{children:e("pre",{className:"language-typescript",children:`import { useState, useEffect } from 'react';

    const [demo2, setDemo2] = useState<any>({ days: null, hours: null, minutes: null, seconds: null });
    const [timer2, setTimer2] = useState<any>(null);

    const setTimerDemo2 = () => {
        const date = new Date();
        date.setFullYear(date.getFullYear() + 1);
        const countDownDate = date.getTime();

        let updatedValue: any = {};

        setTimer2(
            setInterval(() => {
                const now = new Date().getTime();
                const distance = countDownDate - now;
                updatedValue.days = Math.floor(distance / (1000 * 60 * 60 * 24));
                updatedValue.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                updatedValue.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                updatedValue.seconds = Math.floor((distance % (1000 * 60)) / 1000);
                setDemo2((demo2: any) => ({
                    ...demo2,
                    ...updatedValue,
                }));

                if (distance < 0) {
                    clearInterval(timer2);
                }
            })
        );
    };

    useEffect(() => {
        setTimerDemo2();
    }, []);

<div className="mb-5 grid grid-cols-4 justify-items-center gap-3">
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.days}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Days</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.hours}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Hours</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.minutes}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Mins</h4>
    </div>
    <div>
        <div className="w-16 h-16 sm:w-[100px] sm:h-[100px] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded-full border border-white-light dark:border-[#1b2e4b] flex justify-center flex-col">
            <h1 className="text-primary sm:text-3xl text-xl text-center">{demo2.seconds}</h1>
        </div>
        <h4 className="text-[#3b3f5c] text-[15px] mt-4 text-center dark:text-white-dark font-semibold">Sec</h4>
    </div>
</div>

`})})]})]})]})};export{V as default};
