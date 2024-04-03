import{c as q,_ as c}from"./codePreview.b8512f6b.js";import{d as H,u as K,a as Q,c as h,r as p,o as l,b as Z,e,f as o,g as s,j as m,h as u,X as f,w as b,D as g}from"./index.ddf2ada6.js";import{I as ee}from"./icon-bell.2ecf9464.js";import{I as k}from"./icon-code.a018a24c.js";const te=e("ul",{class:"flex space-x-2 rtl:space-x-reverse mb-6"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Dashboard")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Charts")])],-1),se={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},ae={class:"panel lg:col-span-2 p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},re={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},oe=e("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),ie=e("a",{href:"https://www.npmjs.com/package/vue3-apexcharts",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/vue3-apexcharts",-1),le={class:"panel"},ne={class:"flex items-center justify-between mb-5"},de=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Simple Line",-1),ce={class:"flex items-center"},he={class:"mb-5"},pe=e("pre",null,`<!-- simple line -->
<apexchart height="300" :options="lineChart" :series="lineChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const lineChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  const isRtl = store.rtlClass === 'rtl' ? true : false;
  return {
    chart: {
      height: 300,
      type: 'line',
      toolbar: false,
    },
    colors: ['#4361ee'],
    tooltip: {
      marker: false,
      y: {
        formatter(number) {
          return '$' + number;
        },
      },
      theme: isDark ? 'dark' : 'light',
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
  };
});

const lineChartSeries = ref([
  {
    name: 'Sales',
    data: [45, 55, 75, 25, 45, 110],
  },
]);
<\/script>
`,-1),me={class:"panel"},ue={class:"flex items-center justify-between mb-5"},fe=e("h5",{class:"font-semibold text-lg dark:text-white"},"Simple Area",-1),be={class:"flex items-center"},ge={class:"mb-5"},ke=e("pre",null,`<!-- simple area -->
<apexchart height="300" :options="areaChart" :series="areaChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const areaChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  const isRtl = store.rtlClass === 'rtl' ? true : false;
  return {
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
      borderColor: isDark ? '#191e3a' : '#e0e6ed',
    },
    tooltip: {
      theme: isDark ? 'dark' : 'light',
    },
  };
});

const areaChartSeries = ref([
  {
    name: 'Income',
    data: [16800, 16800, 15500, 17800, 15500, 17000, 19000, 16000, 15000, 17000, 14000, 17000],
  },
]);
<\/script>
`,-1),xe={class:"panel"},ve={class:"flex items-center justify-between mb-5"},ye=e("h5",{class:"font-semibold text-lg dark:text-white"},"Simple Column",-1),_e={class:"flex items-center"},Ce={class:"mb-5"},we=e("pre",null,`<!-- simple column -->
<apexchart height="300" :options="columnChart" :series="columnChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const columnChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  const isRtl = store.rtlClass === 'rtl' ? true : false;
  return {
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
        formatter: function (val) {
          return val;
        },
      },
    },
  };
});

const columnChartSeries = ref([
  {
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
  },
  {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
  },
]);
<\/script>
`,-1),Se={class:"panel"},De={class:"flex items-center justify-between mb-5"},Me=e("h5",{class:"font-semibold text-lg dark:text-white"},"Simple Column Stacked",-1),Ae={class:"flex items-center"},Te={class:"mb-5"},Be=e("pre",null,`<!-- simple column stacked -->
<apexchart height="300" :options="simpleColumnStacked" :series="simpleColumnStackedSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const simpleColumnStacked = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  const isRtl = store.rtlClass === 'rtl' ? true : false;
  return {
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
  };
});

const simpleColumnStackedSeries = ref([
  {
    name: 'PRODUCT A',
    data: [44, 55, 41, 67, 22, 43],
  },
  {
    name: 'PRODUCT B',
    data: [13, 23, 20, 8, 13, 27],
  },
]);
<\/script>
`,-1),ze={class:"panel"},Re={class:"flex items-center justify-between mb-5"},je=e("h5",{class:"font-semibold text-lg dark:text-white"},"Simple Bar",-1),Oe={class:"flex items-center"},Je={class:"mb-5"},Fe=e("pre",null,`<!-- simple bar -->
<apexchart height="300" :options="barChart" :series="barChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const barChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  const isRtl = store.rtlClass === 'rtl' ? true : false;
  return {
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
  };
});

const barChartSeries = ref([
  {
    name: 'Sales',
    data: [44, 55, 41, 67, 22, 43, 21, 70],
  },
]);
<\/script>
`,-1),Ge={class:"panel"},Xe={class:"flex items-center justify-between mb-5"},$e=e("h5",{class:"font-semibold text-lg dark:text-white"},"Mixed",-1),Le={class:"flex items-center"},Pe={class:"mb-5"},Ee=e("pre",null,`<!-- mixed -->
<apexchart height="300" :options="mixedChart" :series="mixedChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const mixedChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  const isRtl = store.rtlClass === 'rtl' ? true : false;
  return {
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
      y: {
        formatter: (y) => {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points';
          }
          return y;
        },
      },
    },
    legend: {
      itemMargin: {
        horizontal: 4,
        vertical: 8,
      },
    },
  };
});

const mixedChartSeries = ref([
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
]);
<\/script>
`,-1),Ne={class:"panel"},Ie={class:"flex items-center justify-between mb-5"},We=e("h5",{class:"font-semibold text-lg dark:text-white"},"Basic Radar",-1),Ue={class:"flex items-center"},Ve={class:"mb-5"},Ye=e("pre",null,`<!-- basic radar -->
<apexchart height="300" :options="radarChart" :series="radarChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const radarChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  return {
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
  };
});

const radarChartSeries = ref([
  {
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  },
]);
<\/script>
`,-1),qe={class:"panel"},He={class:"flex items-center justify-between mb-5"},Ke=e("h5",{class:"font-semibold text-lg dark:text-white"},"Basic Pie",-1),Qe={class:"flex items-center"},Ze={class:"mb-5"},et=e("pre",null,`<!-- basic pie -->
<apexchart height="300" :options="pieChart" :series="pieChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const pieChart = computed(() => {
  return {
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
  };
});

const pieChartSeries = ref([44, 55, 13, 43, 22]);
<\/script>
`,-1),tt={class:"panel"},st={class:"flex items-center justify-between mb-5"},at=e("h5",{class:"font-semibold text-lg dark:text-white"},"Basic Donut",-1),rt={class:"flex items-center"},ot={class:"mb-5"},it=e("pre",null,`<!-- basic donut -->
<apexchart height="300" :options="donutChart" :series="donutChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const donutChart = computed(() => {
  return {
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
  };
});

const donutChartSeries = ref([44, 55, 13]);
<\/script>
`,-1),lt={class:"panel"},nt={class:"flex items-center justify-between mb-5"},dt=e("h5",{class:"font-semibold text-lg dark:text-white"},"Basic Polar Area",-1),ct={class:"flex items-center"},ht={class:"mb-5"},pt=e("pre",null,`<!-- basic polar area -->
<apexchart height="300" :options="polarAreaChart" :series="polarAreaChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const polarAreaChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  return {
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
  };
});

const polarAreaChartSeries = ref([14, 23, 21, 17, 15, 10, 12, 17, 21]);
<\/script>
`,-1),mt={class:"panel"},ut={class:"flex items-center justify-between mb-5"},ft=e("h5",{class:"font-semibold text-lg dark:text-white"},"Radial Bar",-1),bt={class:"flex items-center"},gt={class:"mb-5"},kt=e("pre",null,`<!-- radial bar -->
<apexchart height="300" :options="radialBarChart" :series="radialBarChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const radialBarChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  return {
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
            formatter: function (w) {
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
  };
});

const radialBarChartSeries = ref([44, 55, 41]);
<\/script>
`,-1),xt={class:"panel"},vt={class:"flex items-center justify-between mb-5"},yt=e("h5",{class:"font-semibold text-lg dark:text-white"},"Bubble Chart",-1),_t={class:"flex items-center"},Ct={class:"mb-5"},wt=e("pre",null,`<!-- bubble chart -->
<apexchart height="300" :options="bubbleChart" :series="bubbleChartSeries" class="bg-white dark:bg-black rounded-lg overflow-hidden"></apexchart>

<!-- script -->
<script lang="ts" setup>
import { ref, computed } from 'vue';
import apexchart from 'vue3-apexcharts';
import { useAppStore } from '@/stores/index';
const store = useAppStore();

const generateData = (baseval, count, yrange) => {
  var i = 0;
  var series: any = [];
  while (i < count) {
    var x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
    var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
    var z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

    series.push([x, y, z]);
    baseval += 86400000;
    i++;
  }
  return series;
};

const bubbleChart = computed(() => {
  const isDark = store.theme === 'dark' || store.isDarkMode ? true : false;
  const isRtl = store.rtlClass === 'rtl' ? true : false;
  return {
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
  };
});

const bubbleChartSeries = ref([
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
]);
<\/script>
`,-1),Bt=H({__name:"charts",setup(St){K({title:"Charts"});const r=Q(),{codeArr:n,toggleCode:d}=q(),x=(a,t,i)=>{for(var v=0,y=[];v<t;){var U=Math.floor(Math.random()*750)+1,V=Math.floor(Math.random()*(i.max-i.min+1))+i.min,Y=Math.floor(Math.random()*(75-15+1))+15;y.push([U,V,Y]),v++}return y},_=h(()=>{const a=!!(r.theme==="dark"||r.isDarkMode),t=r.rtlClass==="rtl";return{chart:{height:300,type:"line",toolbar:!1},colors:["#4361ee"],tooltip:{marker:!1,y:{formatter(i){return"$"+i}},theme:a?"dark":"light"},stroke:{width:2,curve:"smooth"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","June"],axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!t,labels:{offsetX:t?-20:0}},grid:{borderColor:a?"#191e3a":"#e0e6ed"}}}),C=p([{name:"Sales",data:[45,55,75,25,45,110]}]),w=h(()=>{const a=!!(r.theme==="dark"||r.isDarkMode),t=r.rtlClass==="rtl";return{chart:{type:"area",height:300,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#805dca"],dataLabels:{enabled:!1},stroke:{width:2,curve:"smooth"},xaxis:{axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!t,labels:{offsetX:t?-40:0}},labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],legend:{horizontalAlign:"left"},grid:{borderColor:a?"#191e3a":"#e0e6ed"},tooltip:{theme:a?"dark":"light"}}}),S=p([{name:"Income",data:[16800,16800,15500,17800,15500,17e3,19e3,16e3,15e3,17e3,14e3,17e3]}]),D=h(()=>{const a=!!(r.theme==="dark"||r.isDarkMode),t=r.rtlClass==="rtl";return{chart:{height:300,type:"bar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#805dca","#e7515a"],dataLabels:{enabled:!1},stroke:{show:!0,width:2,colors:["transparent"]},plotOptions:{bar:{horizontal:!1,columnWidth:"55%",endingShape:"rounded"}},grid:{borderColor:a?"#191e3a":"#e0e6ed"},xaxis:{categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"],axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!t,labels:{offsetX:t?-10:0}},tooltip:{theme:a?"dark":"light",y:{formatter:function(i){return i}}}}}),M=p([{name:"Net Profit",data:[44,55,57,56,61,58,63,60,66]},{name:"Revenue",data:[76,85,101,98,87,105,91,114,94]}]),A=h(()=>{const a=!!(r.theme==="dark"||r.isDarkMode),t=r.rtlClass==="rtl";return{chart:{height:300,type:"bar",stacked:!0,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#2196f3","#3b3f5c"],responsive:[{breakpoint:480,options:{legend:{position:"bottom",offsetX:-10,offsetY:5}}}],plotOptions:{bar:{horizontal:!1}},xaxis:{type:"datetime",categories:["01/01/2011 GMT","01/02/2011 GMT","01/03/2011 GMT","01/04/2011 GMT","01/05/2011 GMT","01/06/2011 GMT"],axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!t,labels:{offsetX:t?-20:0}},grid:{borderColor:a?"#191e3a":"#e0e6ed"},legend:{position:"right",offsetY:40},tooltip:{theme:a?"dark":"light"},fill:{opacity:.8}}}),T=p([{name:"PRODUCT A",data:[44,55,41,67,22,43]},{name:"PRODUCT B",data:[13,23,20,8,13,27]}]),B=h(()=>{const a=!!(r.theme==="dark"||r.isDarkMode),t=r.rtlClass==="rtl";return{chart:{height:300,type:"bar",zoom:{enabled:!1},toolbar:{show:!1}},dataLabels:{enabled:!1},stroke:{show:!0,width:1},colors:["#4361ee"],xaxis:{categories:["Sun","Mon","Tue","Wed","Thur","Fri","Sat"],axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{opposite:!!t,reversed:!!t},grid:{borderColor:a?"#191e3a":"#e0e6ed"},plotOptions:{bar:{horizontal:!0}},fill:{opacity:.8}}}),z=p([{name:"Sales",data:[44,55,41,67,22,43,21,70]}]),R=h(()=>{const a=!!(r.theme==="dark"||r.isDarkMode),t=r.rtlClass==="rtl";return{chart:{height:300,zoom:{enabled:!1},toolbar:{show:!1}},colors:["#2196f3","#00ab55","#4361ee"],stroke:{width:[0,2,2],curve:"smooth"},plotOptions:{bar:{columnWidth:"50%"}},fill:{opacity:[1,.25,1]},labels:["01/01/2022","02/01/2022","03/01/2022","04/01/2022","05/01/2022","06/01/2022","07/01/2022","08/01/2022","09/01/2022","10/01/2022","11/01/2022"],markers:{size:0},xaxis:{type:"datetime",axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{title:{text:"Points"},min:0,opposite:!!t,labels:{offsetX:t?-10:0}},grid:{borderColor:a?"#191e3a":"#e0e6ed"},tooltip:{shared:!0,intersect:!1,theme:a?"dark":"light",y:{formatter:i=>typeof i<"u"?i.toFixed(0)+" points":i}},legend:{itemMargin:{horizontal:4,vertical:8}}}}),j=p([{name:"TEAM A",type:"column",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"TEAM B",type:"area",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"TEAM C",type:"line",data:[30,25,36,30,45,35,64,52,59,36,39]}]),O=h(()=>{const a=!!(r.theme==="dark"||r.isDarkMode);return{chart:{height:300,type:"radar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee"],xaxis:{categories:["January","February","March","April","May","June"]},plotOptions:{radar:{polygons:{strokeColors:a?"#191e3a":"#e0e6ed",connectorColors:a?"#191e3a":"#e0e6ed"}}},tooltip:{theme:a?"dark":"light"}}}),J=p([{name:"Series 1",data:[80,50,30,40,100,20]}]),F=h(()=>({chart:{height:300,type:"pie",zoom:{enabled:!1},toolbar:{show:!1}},labels:["Team A","Team B","Team C","Team D","Team E"],colors:["#4361ee","#805dca","#00ab55","#e7515a","#e2a03f"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],stroke:{show:!1},legend:{position:"bottom"}})),G=p([44,55,13,43,22]),X=h(()=>({chart:{height:300,type:"donut",zoom:{enabled:!1},toolbar:{show:!1}},stroke:{show:!1},labels:["Team A","Team B","Team C"],colors:["#4361ee","#805dca","#e2a03f"],responsive:[{breakpoint:480,options:{chart:{width:200}}}],legend:{position:"bottom"}})),$=p([44,55,13]),L=h(()=>{const a=!!(r.theme==="dark"||r.isDarkMode);return{chart:{height:300,type:"polarArea",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#805dca","#00ab55","#e7515a","#e2a03f","#2196f3","#3b3f5c"],stroke:{show:!1},responsive:[{breakpoint:480,options:{chart:{width:200}}}],plotOptions:{polarArea:{rings:{strokeColor:a?"#191e3a":"#e0e6ed"},spokes:{connectorColors:a?"#191e3a":"#e0e6ed"}}},legend:{position:"bottom"},fill:{opacity:.85}}}),P=p([14,23,21,17,15,10,12,17,21]),E=h(()=>{const a=!!(r.theme==="dark"||r.isDarkMode);return{chart:{height:300,type:"radialBar",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#805dca","#e2a03f"],grid:{borderColor:a?"#191e3a":"#e0e6ed"},plotOptions:{radialBar:{dataLabels:{name:{fontSize:"22px"},value:{fontSize:"16px"},total:{show:!0,label:"Total",formatter:function(t){return 249}}}}},labels:["Apples","Oranges","Bananas"],fill:{opacity:.85}}}),N=p([44,55,41]),I=h(()=>{const a=!!(r.theme==="dark"||r.isDarkMode),t=r.rtlClass==="rtl";return{chart:{height:300,type:"bubble",zoom:{enabled:!1},toolbar:{show:!1}},colors:["#4361ee","#00ab55"],dataLabels:{enabled:!1},xaxis:{tickAmount:12,type:"category",axisBorder:{color:a?"#191e3a":"#e0e6ed"}},yaxis:{max:70,opposite:!!t,labels:{offsetX:t?-10:0}},grid:{borderColor:a?"#191e3a":"#e0e6ed"},tooltip:{theme:a?"dark":"light"},stroke:{colors:a?["#191e3a"]:["#e0e6ed"]},fill:{opacity:.85}}}),W=p([{name:"Bubble1",data:x(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})},{name:"Bubble2",data:x(new Date("11 Feb 2017 GMT").getTime(),20,{min:10,max:60})}]);return(a,t)=>(l(),Z("div",null,[te,e("div",se,[e("div",ae,[e("div",re,[o(ee)]),oe,ie]),e("div",le,[e("div",ne,[de,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[0]||(t[0]=i=>s(d)("code1"))},[e("span",ce,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",he,[o(s(u),{height:"300",options:s(_),series:C.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code1")?(l(),f(c,{key:0},{default:b(()=>[pe]),_:1})):g("",!0)]),e("div",me,[e("div",ue,[fe,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[1]||(t[1]=i=>s(d)("code2"))},[e("span",be,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",ge,[o(s(u),{height:"300",options:s(w),series:S.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code2")?(l(),f(c,{key:0},{default:b(()=>[ke]),_:1})):g("",!0)]),e("div",xe,[e("div",ve,[ye,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[2]||(t[2]=i=>s(d)("code3"))},[e("span",_e,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",Ce,[o(s(u),{height:"300",options:s(D),series:M.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code3")?(l(),f(c,{key:0},{default:b(()=>[we]),_:1})):g("",!0)]),e("div",Se,[e("div",De,[Me,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[3]||(t[3]=i=>s(d)("code4"))},[e("span",Ae,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",Te,[o(s(u),{height:"300",options:s(A),series:T.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code4")?(l(),f(c,{key:0},{default:b(()=>[Be]),_:1})):g("",!0)]),e("div",ze,[e("div",Re,[je,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[4]||(t[4]=i=>s(d)("code5"))},[e("span",Oe,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",Je,[o(s(u),{height:"300",options:s(B),series:z.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code5")?(l(),f(c,{key:0},{default:b(()=>[Fe]),_:1})):g("",!0)]),e("div",Ge,[e("div",Xe,[$e,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[5]||(t[5]=i=>s(d)("code6"))},[e("span",Le,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",Pe,[o(s(u),{height:"300",options:s(R),series:j.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code6")?(l(),f(c,{key:0},{default:b(()=>[Ee]),_:1})):g("",!0)]),e("div",Ne,[e("div",Ie,[We,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[6]||(t[6]=i=>s(d)("code7"))},[e("span",Ue,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",Ve,[o(s(u),{height:"300",options:s(O),series:J.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code7")?(l(),f(c,{key:0},{default:b(()=>[Ye]),_:1})):g("",!0)]),e("div",qe,[e("div",He,[Ke,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[7]||(t[7]=i=>s(d)("code8"))},[e("span",Qe,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",Ze,[o(s(u),{height:"300",options:s(F),series:G.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code8")?(l(),f(c,{key:0},{default:b(()=>[et]),_:1})):g("",!0)]),e("div",tt,[e("div",st,[at,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[8]||(t[8]=i=>s(d)("code9"))},[e("span",rt,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",ot,[o(s(u),{height:"300",options:s(X),series:$.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code9")?(l(),f(c,{key:0},{default:b(()=>[it]),_:1})):g("",!0)]),e("div",lt,[e("div",nt,[dt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[9]||(t[9]=i=>s(d)("code10"))},[e("span",ct,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",ht,[o(s(u),{height:"300",options:s(L),series:P.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code10")?(l(),f(c,{key:0},{default:b(()=>[pt]),_:1})):g("",!0)]),e("div",mt,[e("div",ut,[ft,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[10]||(t[10]=i=>s(d)("code11"))},[e("span",bt,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",gt,[o(s(u),{height:"300",options:s(E),series:N.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code11")?(l(),f(c,{key:0},{default:b(()=>[kt]),_:1})):g("",!0)]),e("div",xt,[e("div",vt,[yt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:t[11]||(t[11]=i=>s(d)("code12"))},[e("span",_t,[o(k,{class:"me-2"}),m(" Code ")])])]),e("div",Ct,[o(s(u),{height:"300",options:s(I),series:W.value,class:"bg-white dark:bg-black rounded-lg overflow-hidden"},null,8,["options","series"])]),s(n).includes("code12")?(l(),f(c,{key:0},{default:b(()=>[wt]),_:1})):g("",!0)])])]))}});export{Bt as default};
