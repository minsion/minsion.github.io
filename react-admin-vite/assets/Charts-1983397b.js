import{u as E,r as D,s as J,a as B,j as a,b as e,L as j}from"./index-db6af04d.js";import{C as i}from"./Highlight-7cc82095.js";import{_ as n}from"./react-apexcharts.min-d4ba6011.js";import{I as G}from"./IconBell-f4cf060d.js";import{I as d}from"./IconCode-9488e58f.js";const W=()=>{const R=E();D.useEffect(()=>{R(J("Charts"))});const[s,p]=D.useState([]),l=o=>{s.includes(o)?p(h=>h.filter(c=>c!==o)):p([...s,o])},t=B(o=>o.themeConfig.theme==="dark"||o.themeConfig.isDarkMode),r=B(o=>o.themeConfig.rtlClass)==="rtl",m={series:[{name:"Sales",data:[45,55,75,25,45,110]}],options:{chart:{height:300,type:"line",toolbar:!1},colors:["#4361EE"],tooltip:{marker:!1,y:{formatter(o){return"$"+o}}},stroke:{width:2,curve:"smooth"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","June"],axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!r,labels:{offsetX:r?-20:0}},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}}}},b={series:[{name:"Income",data:[16800,16800,15500,17800,15500,17e3,19e3,16e3,15e3,17e3,14e3,17e3]}],options:{chart:{type:"area",height:300,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#805dca"],dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},xaxis:{axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!r,labels:{offsetX:r?-40:0}},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],legend:{horizontalAlign:"left"},grid:{borderColor:t?"#191E3A":"#E0E6ED",xaxis:{lines:{show:!1}}},tooltip:{theme:t?"dark":"light"}}},f={series:[{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}],options:{chart:{height:300,type:"bar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#805dca","#e7515a"],dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!r,labels:{offsetX:r?-10:0}},tooltip:{theme:t?"dark":"light",y:{formatter:function(o){return o}}}}},g={series:[{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]}],options:{chart:{height:300,type:"bar",stacked:!0,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#2196f3","#3b3f5c"],responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:5}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"],axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!r,labels:{offsetX:r?-20:0}},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}},legend:{position:"right",offsetY:40},tooltip:{theme:t?"dark":"light"},fill:{opacity:.8}}},u={series:[{name:"Sales",data:[44,55,41,67,22,43,21,70]}],options:{chart:{height:300,type:"bar",zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{show:!0,width:1},colors:["#4361ee"],xaxis:{categories:["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!r,reversed:!!r},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}},plotOptions:{bar:{horizontal:!0}},fill:{opacity:.8}}},x={series:[{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}],options:{chart:{height:300,zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},colors:["#2196f3","#00ab55","#4361ee"],stroke:{width:[0,2,2],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[1,.25,1]},labels:["01/01/2022","02/01/2022","03/01/2022","04/01/2022","05/01/2022","06/01/2022","07/01/2022","08/01/2022","09/01/2022","10/01/2022","11/01/2022"],markers:{size:0},xaxis:{type:"datetime",axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{title:{text:"Points"},min:0,opposite:!!r,labels:{offsetX:r?-10:0}},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}},tooltip:{shared:!0,intersect:!1,theme:t?"dark":"light"},legend:{itemMargin:{horizontal:4,vertical:8}}}},y={series:[{name:"Series 1",data:[80,50,30,40,100,20]}],options:{chart:{height:300,type:"radar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee"],xaxis:{categories:["January","February","March","April","May","June"]},plotOptions:{radar:{polygons:{strokeColors:t?"#191e3a":"#e0e6ed",connectorColors:t?"#191e3a":"#e0e6ed"}}},tooltip:{theme:t?"dark":"light"}}},k={series:[44,55,13,43,22],options:{chart:{height:300,type:"pie",zoom:{enabled:!1},toolbar:{show:!1}},labels:["Team A","Team B","Team C","Team D","Team E"],colors:["#4361ee","#805dca","#00ab55","#e7515a","#e2a03f"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],stroke:{show:!1},legend:{position:"bottom"}}},C={series:[44,55,13],options:{chart:{height:300,type:"donut",zoom:{enabled:!1},toolbar:{show:!1}},stroke:{show:!1},labels:["Team A","Team B","Team C"],colors:["#4361ee","#805dca","#e2a03f"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],legend:{position:"bottom"}}},w={series:[14,23,21,17,15,10,12,17,21],options:{chart:{height:300,type:"polarArea",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#805dca","#00ab55","#e7515a","#e2a03f","#2196f3","#3b3f5c"],stroke:{show:!1},responsive:[{breakpoint:480,options:{chart:{width:200}}}],plotOptions:{polarArea:{rings:{strokeColor:t?"#191e3a":"#e0e6ed"},spokes:{connectorColors:t?"#191e3a":"#e0e6ed"}}},legend:{position:"bottom"},fill:{opacity:.85}}},N={series:[44,55,41],options:{chart:{height:300,type:"radialBar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#805dca","#e2a03f"],grid:{borderColor:t?"#191e3a":"#e0e6ed"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(o){return 249}}}}},labels:["Apples","Oranges","Bananas"],fill:{opacity:.85}}},v=(o,h,c)=>{let T=0;const M=[];for(;T<h;){var z=Math.floor(Math.random()*750)+1,O=Math.floor(Math.random()*(c.max-c.min+1))+c.min,S=Math.floor(Math.random()*(75-15+1))+15;M.push([z,O,S]),T++}return M},A={series:[{name:"Bubble1",data:v(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:v(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}],options:{chart:{height:300,type:"bubble",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#00ab55"],dataLabels:{enabled:!1},xaxis:{tickAmount:12,type:"category",axisBorder:{color:t?"#191e3a":"#e0e6ed"}},yaxis:{max:70,opposite:!!r,labels:{offsetX:r?-10:0}},grid:{borderColor:t?"#191e3a":"#e0e6ed",xaxis:{lines:{show:!1}}},tooltip:{theme:t?"dark":"light"},stroke:{colors:t?["#191e3a"]:["#e0e6ed"]},fill:{opacity:.85}}};return a("div",{children:[a("ul",{className:"flex space-x-2 rtl:space-x-reverse mb-6",children:[e("li",{children:e(j,{to:"#",className:"text-primary hover:underline",children:"Dashboard"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Charts"})})]}),a("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-2",children:[a("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary lg:col-span-2",children:[e("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:e(G,{})}),e("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e("a",{href:"https://www.npmjs.com/package/react-apexcharts",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/react-apexcharts"})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Simple Line"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code1"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:m.series,options:m.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"line",height:300})}),s.includes("code1")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={lineChart.series} options={lineChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="line" height={300} />

// lineChartOptions
const lineChart: any = {
    series: [
        {
            name: 'Sales',
            data: [45, 55, 75, 25, 45, 110],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'line',
            toolbar: false,
        },
        colors: ['#4361EE'],
        tooltip: {
            marker: false,
            y: {
                formatter(number: number) {
                    return '$' + number;
                },
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -20 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
    },
};
`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Simple Area"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code2"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:b.series,options:b.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"area",height:300})}),s.includes("code2")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={areaChart.series} options={areaChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="area" height={300} />

// areaChartOptions
const areaChart: any = {
    series: [
        {
            name: 'Income',
            data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
        },
    ],
    options: {
        chart: {
            type: 'area',
            height: 300,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#805dca'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: 2,
            curve: 'smooth',
        },
        xaxis: {
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -40 : 0,
            },
        },
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        legend: {
            horizontalAlign: 'left',
        },
        grid: {
            borderColor: isDark ? '#191E3A' : '#E0E6ED',
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
    },
};`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Simple Column"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code3"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:f.series,options:f.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"bar",height:300})}),s.includes("code3")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={columnChart.series} options={columnChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />

// columnChartOptions
const columnChart: any = {
    series: [
        {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
        },
        {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'bar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#805dca', '#e7515a'],
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -10 : 0,
            },
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
            y: {
                formatter: function (val: any) {
                    return val;
                },
            },
        },
    },
};`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Simple Column Stacked"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code4"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:g.series,options:g.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"bar",height:300,width:"100%"})}),s.includes("code4")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={simpleColumnStacked.series} options={simpleColumnStacked.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />

// simpleColumnStackedOptions
const simpleColumnStacked: any = {
    series: [
        {
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43],
        },
        {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'bar',
            stacked: true,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#2196f3', '#3b3f5c'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    legend: {
                        position: 'bottom',
                        offsetX: -10,
                        offsetY: 5,
                    },
                },
            },
        ],
        plotOptions: {
            bar: {
                horizontal: false,
            },
        },
        xaxis: {
            type: 'datetime',
            categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -20 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        legend: {
            position: 'right',
            offsetY: 40,
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
        fill: {
            opacity: 0.8,
        },
    },
};`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Simple Bar"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code5"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:u.series,options:u.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"bar",height:300})}),s.includes("code5")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={barChart.series} options={barChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />

// barChartOptions
const barChart: any = {
    series: [
        {
            name: 'Sales',
            data: [44, 55, 41, 67, 22, 43, 21, 70],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'bar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 1,
        },
        colors: ['#4361ee'],
        xaxis: {
            categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            opposite: isRtl ? true : false,
            reversed: isRtl ? true : false,
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        fill: {
            opacity: 0.8,
        },
    },
};`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Mixed"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code6"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:x.series,options:x.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"bar",height:300})}),s.includes("code6")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={mixedChart.series} options={mixedChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bar" height={300} />

// mixedChartOptions
const mixedChart: any = {
    series: [
        {
            name: 'TEAM A',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
        },
        {
            name: 'TEAM B',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
        },
        {
            name: 'TEAM C',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
        },
    ],
    options: {
        chart: {
            height: 300,
            // stacked: false,
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#2196f3', '#00ab55', '#4361ee'],
        stroke: {
            width: [0, 2, 2],
            curve: 'smooth',
        },
        plotOptions: {
            bar: {
                columnWidth: '50%',
            },
        },
        fill: {
            opacity: [1, 0.25, 1],
        },

        labels: ['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022'],
        markers: {
            size: 0,
        },
        xaxis: {
            type: 'datetime',
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            title: {
                text: 'Points',
            },
            min: 0,
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -10 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        tooltip: {
            shared: true,
            intersect: false,
            theme: isDark ? 'dark' : 'light',
        },
        legend: {
            itemMargin: {
                horizontal: 4,
                vertical: 8,
            },
        },
    },
};`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Basic Radar"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code7"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:y.series,options:y.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"radar",height:300})}),s.includes("code7")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={radarChart.series} options={radarChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="radar" height={300} />

// radarChartOptions
const radarChart: any = {
    series: [
        {
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'radar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee'],
        xaxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June'],
        },
        plotOptions: {
            radar: {
                polygons: {
                    strokeColors: isDark ? '#191e3a' : '#e0e6ed',
                    connectorColors: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
    },
};`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Basic Pie"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code8"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:k.series,options:k.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"pie",height:300})}),s.includes("code8")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={pieChart.series} options={pieChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="pie" height={300} />

// pieChartOptions
const pieChart: any = {
    series: [44, 55, 13, 43, 22],
    options: {
        chart: {
            height: 300,
            type: 'pie',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
        colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
        stroke: {
            show: false,
        },
        legend: {
            position: 'bottom',
        },
    },
};`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Basic Donut"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code9"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:C.series,options:C.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"donut",height:300})}),s.includes("code9")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={donutChart.series} options={donutChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="donut" height={300} />

// donutChartOptions
const donutChart: any = {
    series: [44, 55, 13],
    options: {
        chart: {
            height: 300,
            type: 'donut',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        stroke: {
            show: false,
        },
        labels: ['Team A', 'Team B', 'Team C'],
        colors: ['#4361ee', '#805dca', '#e2a03f'],
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
        legend: {
            position: 'bottom',
        },
    },
};`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Basic Polar Area"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code10"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:w.series,options:w.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"polarArea",height:300})}),s.includes("code10")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={polarAreaChart.series} options={polarAreaChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="polarArea" height={300} />

// polarAreaChartOptions
const polarAreaChart: any = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    options: {
        chart: {
            height: 300,
            type: 'polarArea',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee', '#805dca', '#00ab55', '#e7515a', '#e2a03f', '#2196f3', '#3b3f5c'],
        stroke: {
            show: false,
        },
        responsive: [
            {
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200,
                    },
                },
            },
        ],
        plotOptions: {
            polarArea: {
                rings: {
                    strokeColor: isDark ? '#191e3a' : '#e0e6ed',
                },
                spokes: {
                    connectorColors: isDark ? '#191e3a' : '#e0e6ed',
                },
            },
        },
        legend: {
            position: 'bottom',
        },
        fill: {
            opacity: 0.85,
        },
    },
};`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Radial Bar"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code11"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:N.series,options:N.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"radialBar",height:300})}),s.includes("code11")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={radialBarChart.series} options={radialBarChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="radialBar" height={300} />

// radialBarChartOptions
const radialBarChart: any = {
    series: [44, 55, 41],
    options: {
        chart: {
            height: 300,
            type: 'radialBar',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee', '#805dca', '#e2a03f'],
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: '22px',
                    },
                    value: {
                        fontSize: '16px',
                    },
                    total: {
                        show: true,
                        label: 'Total',
                        formatter: function (w: any) {
                            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                            return 249;
                        },
                    },
                },
            },
        },
        labels: ['Apples', 'Oranges', 'Bananas'],
        fill: {
            opacity: 0.85,
        },
    },
};`})})]}),a("div",{className:"panel",children:[a("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white",children:"Bubble Chart"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code12"),children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e(n,{series:A.series,options:A.options,className:"rounded-lg bg-white dark:bg-black overflow-hidden",type:"bubble",height:300})}),s.includes("code12")&&e(i,{children:e("pre",{className:"language-typescript",children:`import ReactApexChart from 'react-apexcharts';

<ReactApexChart series={bubbleChart.series} options={bubbleChart.options} className="rounded-lg bg-white dark:bg-black overflow-hidden" type="bubble" height={300} />

// bubbleChartOptions
const bubbleChart: any = {
    series: [
        {
            name: 'Bubble1',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
        {
            name: 'Bubble2',
            data: generateData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60,
            }),
        },
    ],
    options: {
        chart: {
            height: 300,
            type: 'bubble',
            zoom: {
                enabled: false,
            },
            toolbar: {
                show: false,
            },
        },
        colors: ['#4361ee', '#00ab55'],
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            tickAmount: 12,
            type: 'category',
            axisBorder: {
                color: isDark ? '#191e3a' : '#e0e6ed',
            },
        },
        yaxis: {
            max: 70,
            opposite: isRtl ? true : false,
            labels: {
                offsetX: isRtl ? -10 : 0,
            },
        },
        grid: {
            borderColor: isDark ? '#191e3a' : '#e0e6ed',
        },
        tooltip: {
            theme: isDark ? 'dark' : 'light',
        },
        stroke: {
            colors: isDark ? ['#191e3a'] : ['#e0e6ed'],
        },
        fill: {
            opacity: 0.85,
        },
    },
};`})})]})]})]})};export{W as default};
