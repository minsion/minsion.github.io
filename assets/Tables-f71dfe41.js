import{u as N,r as h,s as f,a as v,j as a,b as e,t as m,D as x,l as k}from"./index-21dbdbc4.js";import{C as r}from"./Highlight-44bb2925.js";import{T as i}from"./tippy-0f2f0e39.js";import{I as d}from"./IconCode-7061e36d.js";import{I as o}from"./IconTrashLines-0705a0aa.js";import{I as p}from"./IconPencil-bef78127.js";import{I as D}from"./IconHorizontalDots-4fabe290.js";import{I as w}from"./IconCircleCheck-8106823f.js";const l=[{id:1,name:"John Doe",email:"johndoe@yahoo.com",date:"10/08/2020",sale:120,status:"Complete",register:"5 min ago",progress:"40%",position:"Developer",office:"London"},{id:2,name:"Shaun Park",email:"shaunpark@gmail.com",date:"11/08/2020",sale:400,status:"Pending",register:"11 min ago",progress:"23%",position:"Designer",office:"New York"},{id:3,name:"Alma Clarke",email:"alma@gmail.com",date:"12/02/2020",sale:310,status:"In Progress",register:"1 hour ago",progress:"80%",position:"Accountant",office:"Amazon"},{id:4,name:"Vincent Carpenter",email:"vincent@gmail.com",date:"13/08/2020",sale:100,status:"Canceled",register:"1 day ago",progress:"60%",position:"Data Scientist",office:"Canada"}],z=()=>{const g=N();h.useEffect(()=>{g(f("Tables"))});const b=v(t=>t.themeConfig.rtlClass)==="rtl",[s,c]=h.useState([]),n=t=>{s.includes(t)?c(u=>u.filter(y=>y!==t)):c([...s,t])};return a("div",{className:"grid xl:grid-cols-2 gap-6 grid-cols-1",children:[a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Simple Table"}),e("button",{type:"button",onClick:()=>n("code1"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"table-responsive mb-5",children:a("table",{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Date"}),e("th",{children:"Sale"}),e("th",{children:"Status"}),e("th",{className:"text-center",children:"Action"})]})}),e("tbody",{children:l.map(t=>a("tr",{children:[e("td",{children:e("div",{className:"whitespace-nowrap",children:t.name})}),e("td",{children:t.date}),e("td",{children:t.sale}),e("td",{children:e("div",{className:`whitespace-nowrap ${t.status==="completed"?"text-success":t.status==="Pending"?"text-secondary":t.status==="In Progress"?"text-info":t.status==="Canceled"?"text-danger":"text-success"}`,children:t.status})}),e("td",{className:"text-center",children:e(i,{content:"Delete",children:e("button",{type:"button",children:e(o,{className:"m-auto"})})})})]},t.id))})]})}),s.includes("code1")&&e(r,{children:e("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Sale</th>
                <th>Status</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.sale}</td>
                        <td>
                            <div
                                className={\`whitespace-nowrap \${
                                    data.status === 'completed'
                                        ? 'text-success'
                                        : data.status === 'Pending'
                                        ? 'text-secondary'
                                        : data.status === 'In Progress'
                                        ? 'text-info'
                                        : data.status === 'Canceled'
                                        ? 'text-danger'
                                        : 'text-success'
                                }\`}
                            >
                                {data.status}
                            </div>
                        </td>
                        <td className="text-center">
                            <Tippy content="Delete">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Hover Table"}),e("button",{type:"button",onClick:()=>n("code2"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"table-responsive mb-5",children:a("table",{className:"table-hover",children:[e("thead",{children:a("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Date"}),e("th",{children:"Sale"}),e("th",{children:"Status"}),e("th",{className:"text-center",children:"Action"})]})}),e("tbody",{children:l.map(t=>a("tr",{children:[e("td",{children:e("div",{className:"whitespace-nowrap",children:t.name})}),e("td",{children:t.date}),e("td",{children:t.sale}),e("td",{children:e("div",{className:`whitespace-nowrap ${t.status==="completed"?"text-success":t.status==="Pending"?"text-secondary":t.status==="In Progress"?"text-info":t.status==="Canceled"?"text-danger":"text-success"}`,children:t.status})}),e("td",{className:"text-center",children:e(i,{content:"Delete",children:e("button",{type:"button",children:e(o,{className:"m-auto"})})})})]},t.id))})]})}),s.includes("code2")&&e(r,{children:e("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table className="table-hover">
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Sale</th>
                <th>Status</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.sale}</td>
                        <td>
                            <div
                                className={\`whitespace-nowrap \${
                                    data.status === 'completed'
                                        ? 'text-success'
                                        : data.status === 'Pending'
                                        ? 'text-secondary'
                                        : data.status === 'In Progress'
                                        ? 'text-info'
                                        : data.status === 'Canceled'
                                        ? 'text-danger'
                                        : 'text-success'
                                }\`}
                            >
                                {data.status}
                            </div>
                        </td>
                        <td className="text-center">
                            <Tippy content="Delete">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Striped Table"}),e("button",{type:"button",onClick:()=>n("code3"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"table-responsive mb-5",children:a("table",{className:"table-striped",children:[e("thead",{children:a("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Date"}),e("th",{children:"Sale"}),e("th",{})]})}),e("tbody",{children:l.map(t=>a("tr",{children:[e("td",{children:e("div",{className:"whitespace-nowrap",children:t.name})}),e("td",{children:t.date}),e("td",{children:t.sale}),e("td",{className:"text-center",children:e(i,{content:"Delete",children:e("button",{type:"button",children:e(o,{className:"m-auto"})})})})]},t.id))})]})}),s.includes("code3")&&e(r,{children:e("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table className="table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Sale</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.sale}</td>
                        <td className="text-center">
                            <Tippy content="Delete">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Table Light"}),e("button",{type:"button",onClick:()=>n("code4"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"table-responsive mb-5",children:a("table",{className:"table-hover",children:[e("thead",{children:a("tr",{className:"!bg-transparent dark:!bg-transparent",children:[e("th",{children:"#"}),e("th",{children:"Name"}),e("th",{children:"Email"}),e("th",{children:"Created At"}),e("th",{className:"text-center"})]})}),e("tbody",{children:l.map(t=>a("tr",{children:[e("td",{children:t.id}),e("td",{children:e("div",{className:"whitespace-nowrap",children:t.name})}),e("td",{children:t.email}),e("td",{children:t.date}),e("td",{className:"text-center",children:e(i,{content:"Delete",children:e("button",{type:"button",children:e(m,{className:"m-auto"})})})})]},t.id))})]})}),s.includes("code4")&&e(r,{children:e("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table className="table-hover">
        <thead>
            <tr className="!bg-transparent dark:!bg-transparent">
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Created At</th>
                <th className="text-center"></th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.email}</td>
                        <td>{data.date}</td>
                        <td className="text-center">
                            <Tippy content="Delete">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Captions"}),e("button",{type:"button",onClick:()=>n("code5"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"table-responsive mb-5",children:a("table",{children:[e("thead",{children:a("tr",{children:[e("th",{children:"#"}),e("th",{children:"Name"}),e("th",{children:"Email"}),e("th",{children:"Status"}),e("th",{className:"text-center",children:"Register"})]})}),e("tbody",{children:l.map(t=>a("tr",{children:[e("td",{children:t.id}),e("td",{children:e("div",{className:"whitespace-nowrap",children:t.name})}),e("td",{children:t.email}),e("td",{children:e("span",{className:`badge whitespace-nowrap ${t.status==="completed"?"badge-outline-primary":t.status==="Pending"?"badge-outline-secondary":t.status==="In Progress"?"badge-outline-info":t.status==="Canceled"?"badge-outline-danger":"badge-outline-primary"}`,children:t.status})}),e("td",{className:"text-center",children:t.register})]},t.id))})]})}),s.includes("code5")&&e(r,{children:e("pre",{children:`const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
                <th className="text-center">Register</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.email}</td>
                        <td>
                            <span
                                className={\`badge whitespace-nowrap \${
                                    data.status === 'completed'
                                        ? 'badge-outline-primary'
                                        : data.status === 'Pending'
                                        ? 'badge-outline-secondary'
                                        : data.status === 'In Progress'
                                        ? 'badge-outline-info'
                                        : data.status === 'Canceled'
                                        ? 'badge-outline-danger'
                                        : 'badge-outline-primary'
                                }\`}
                            >
                                {data.status}
                            </span>
                        </td>
                        <td className="text-center">{data.register}</td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Progress Table"}),e("button",{type:"button",onClick:()=>n("code6"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"table-responsive mb-5",children:a("table",{children:[e("thead",{children:a("tr",{children:[e("th",{children:"#"}),e("th",{children:"Name"}),e("th",{children:"Progress"}),e("th",{children:"Sales"}),e("th",{className:"text-center",children:"Action"})]})}),e("tbody",{children:l.map(t=>a("tr",{children:[e("td",{children:t.id}),e("td",{children:e("div",{className:"whitespace-nowrap",children:t.name})}),e("td",{children:e("div",{className:"h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full",children:e("div",{className:`h-1.5 rounded-full rounded-bl-full text-center text-white text-xs ${t.status==="completed"?"bg-success":t.status==="Pending"?"bg-secondary":t.status==="In Progress"?"bg-info":t.status==="Canceled"?"bg-danger":"bg-success"}`,style:{width:`${t.progress}`}})})}),e("td",{children:e("div",{className:`whitespace-nowrap ${t.status==="completed"?"text-success":t.status==="Pending"?"text-secondary":t.status==="In Progress"?"text-info":t.status==="Canceled"?"text-danger":"text-success"}`,children:t.progress})}),a("td",{className:"p-3 border-b border-[#ebedf2] dark:border-[#191e3a] text-center",children:[e(i,{content:"Edit",children:e("button",{type:"button",children:e(p,{className:"ltr:mr-2 rtl:ml-2"})})}),e(i,{content:"Delete",children:e("button",{type:"button",children:e(o,{})})})]})]},t.id))})]})}),s.includes("code6")&&e(r,{children:e("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Progress</th>
                <th>Sales</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>{data.id}</td>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>
                            <div className="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
                                <div
                                    className={\`h-1.5 rounded-full rounded-bl-full text-center text-white text-xs \${
                                        data.status === 'completed'
                                            ? 'bg-success'
                                            : data.status === 'Pending'
                                            ? 'bg-secondary'
                                            : data.status === 'In Progress'
                                            ? 'bg-info'
                                            : data.status === 'Canceled'
                                            ? 'bg-danger'
                                            : 'bg-success'
                                    }\`}
                                    style={{ width: \`\${data.progress}\` }}
                                ></div>
                            </div>
                        </td>
                        <td>
                            <div
                                className={\`whitespace-nowrap \${
                                    data.status === 'completed'
                                        ? 'text-success'
                                        : data.status === 'Pending'
                                        ? 'text-secondary'
                                        : data.status === 'In Progress'
                                        ? 'text-info'
                                        : data.status === 'Canceled'
                                        ? 'text-danger'
                                        : 'text-success'
                                }\`}
                            >
                                {data.progress}
                            </div>
                        </td>
                        <td className="p-3 border-b border-[#ebedf2] dark:border-[#191e3a] text-center">
                            <Tippy content="Edit">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                            <Tippy content="Delete">
                                <button type="button">
                                    <svg>...</svg>
                                </button>
                            </Tippy>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Contextual"}),e("button",{type:"button",onClick:()=>n("code7"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"table-responsive mb-5",children:a("table",{children:[e("thead",{children:a("tr",{children:[e("th",{children:"#"}),e("th",{children:"First Name"}),e("th",{children:"Last Name"}),e("th",{children:"Email"})]})}),a("tbody",{children:[a("tr",{className:"bg-dark-dark-light border-dark-dark-light",children:[e("td",{children:"1"}),e("td",{children:"John"}),e("td",{children:"Doe"}),e("td",{children:"johndoe@yahoo.com"})]}),a("tr",{className:"bg-primary/20 border-primary/20",children:[e("td",{children:"2"}),e("td",{children:"Andy"}),e("td",{children:"King"}),e("td",{children:"andyking@gmail.com"})]}),a("tr",{className:"bg-secondary/20 border-secondary/20",children:[e("td",{children:"3"}),e("td",{children:"Lisa"}),e("td",{children:"Doe"}),e("td",{children:"lisadoe@yahoo.com"})]}),a("tr",{className:"bg-success/20 border-success/20",children:[e("td",{children:"4"}),e("td",{children:"Vincent"}),e("td",{children:"Carpenter"}),e("td",{children:"vinnyc@yahoo.com"})]}),a("tr",{className:"bg-dark-dark-light border-dark-dark-light",children:[e("td",{children:"5"}),e("td",{children:"Amy"}),e("td",{children:"Diaz"}),e("td",{children:"amydiaz@yahoo.com"})]}),a("tr",{className:"bg-danger/20 border-danger/20",children:[e("td",{children:"6"}),e("td",{children:"Nia"}),e("td",{children:"Hillyer"}),e("td",{children:"niahill@gmail.com"})]}),a("tr",{className:"bg-info/20 border-info/20",children:[e("td",{children:"7"}),e("td",{children:"Marry"}),e("td",{children:"McDonald"}),e("td",{children:"marryMcD@yahoo.com"})]}),a("tr",{className:"bg-warning/20 border-warning/20",children:[e("td",{children:"8"}),e("td",{children:"Shaun"}),e("td",{children:"Park"}),e("td",{children:"park@yahoo.com"})]})]})]})}),s.includes("code7")&&e(r,{children:e("pre",{children:`const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-dark-dark-light border-dark-dark-light">
                <td>1</td>
                <td>John</td>
                <td>Doe</td>
                <td>johndoe@yahoo.com</td>
            </tr>
            <tr className="bg-primary/20 border-primary/20">
                <td>2</td>
                <td>Andy</td>
                <td>King</td>
                <td>andyking@gmail.com</td>
            </tr>
            <tr className="bg-secondary/20 border-secondary/20">
                <td>3</td>
                <td>Lisa</td>
                <td>Doe</td>
                <td>lisadoe@yahoo.com</td>
            </tr>
            <tr className="bg-success/20 border-success/20">
                <td>4</td>
                <td>Vincent</td>
                <td>Carpenter</td>
                <td>vinnyc@yahoo.com</td>
            </tr>
            <tr className="bg-dark-dark-light border-dark-dark-light">
                <td>5</td>
                <td>Amy</td>
                <td>Diaz</td>
                <td>amydiaz@yahoo.com</td>
            </tr>
            <tr className="bg-danger/20 border-danger/20">
                <td>6</td>
                <td>Nia</td>
                <td>Hillyer</td>
                <td>niahill@gmail.com</td>
            </tr>
            <tr className="bg-info/20 border-info/20">
                <td>7</td>
                <td>Marry</td>
                <td>McDonald</td>
                <td>marryMcD@yahoo.com</td>
            </tr>
            <tr className="bg-warning/20 border-warning/20">
                <td>8</td>
                <td>Shaun</td>
                <td>Park</td>
                <td>park@yahoo.com</td>
            </tr>
        </tbody>
    </table>
</div>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Dropdown"}),e("button",{type:"button",onClick:()=>n("code8"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"table-responsive mb-5",children:a("table",{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Date"}),e("th",{children:"Sale"}),e("th",{children:"Status"}),e("th",{className:"text-center",children:"Action"})]})}),e("tbody",{children:l.map(t=>a("tr",{children:[e("td",{children:e("div",{className:"whitespace-nowrap",children:t.name})}),e("td",{children:t.date}),e("td",{children:t.sale}),e("td",{children:e("span",{className:`badge whitespace-nowrap ${t.status==="completed"?"bg-primary   ":t.status==="Pending"?"bg-secondary":t.status==="In Progress"?"bg-success":t.status==="Canceled"?"bg-danger":"bg-primary"}`,children:t.status})}),e("td",{className:"text-center",children:e("div",{className:"dropdown",children:e(x,{offset:[0,5],placement:`${b?"bottom-start":"bottom-end"}`,button:e(D,{className:"opacity-70 m-auto"}),children:a("ul",{children:[e("li",{children:e("button",{type:"button",children:"Download"})}),e("li",{children:e("button",{type:"button",children:"Share"})}),e("li",{children:e("button",{type:"button",children:"Edit"})}),e("li",{children:e("button",{type:"button",children:"Delete"})})]})})})})]},t.id))})]})}),s.includes("code8")&&e(r,{children:e("pre",{children:`import Dropdown from '../components/Dropdown';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Sale</th>
                <th>Status</th>
                <th className="text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.sale}</td>
                        <td>
                            <span
                                className={\`badge whitespace-nowrap \${
                                    data.status === 'completed'
                                        ? 'bg-primary   '
                                        : data.status === 'Pending'
                                        ? 'bg-secondary'
                                        : data.status === 'In Progress'
                                        ? 'bg-success'
                                        : data.status === 'Canceled'
                                        ? 'bg-danger'
                                        : 'bg-primary'
                                }\`}
                            >
                                {data.status}
                            </span>
                        </td>
                        <td className="text-center">
                            <div className="dropdown">
                                <Dropdown
                                    offset={[0, 5]}
                                    placement={\`\${isRtl ? 'bottom-start' : 'bottom-end'}\`}
                                    button={
                                        <svg></sv1g>
                                    }
                                >
                                    <ul>
                                        <li>
                                            <button type="button">Download</button>
                                        </li>
                                        <li>
                                            <button type="button">Share</button>
                                        </li>
                                        <li>
                                            <button type="button">Edit</button>
                                        </li>
                                        <li>
                                            <button type="button">Delete</button>
                                        </li>
                                    </ul>
                                </Dropdown>
                            </div>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Table with Footer"}),e("button",{type:"button",onClick:()=>n("code9"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"table-responsive mb-5",children:a("table",{children:[e("thead",{children:a("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Position"}),e("th",{children:"Office"}),e("th",{className:"!text-center",children:"Action"})]})}),e("tbody",{children:l.map(t=>a("tr",{children:[e("td",{children:e("div",{className:"whitespace-nowrap",children:t.name})}),e("td",{children:t.position}),e("td",{children:t.office}),e("td",{className:"text-center",children:a("ul",{className:"flex items-center justify-center gap-2",children:[e("li",{children:e(i,{content:"Edit",children:e("button",{type:"button",children:e(w,{className:"w-5 h-5 text-primary"})})})}),e("li",{children:e(i,{content:"Delete",children:e("button",{type:"button",children:e(m,{className:"text-danger"})})})})]})})]},t.id))}),e("tfoot",{children:a("tr",{children:[e("th",{children:"Name"}),e("th",{children:"Position"}),e("th",{children:"Office"}),e("th",{className:"!text-center",children:"Action"})]})})]})}),s.includes("code9")&&e(r,{children:e("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th className="!text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.position}</td>
                        <td>{data.office}</td>
                        <td className="text-center">
                            <ul className="flex items-center justify-center gap-2">
                                <li>
                                    <Tippy content="Edit">
                                        <button type="button">
                                            <svg>...</svg>
                                        </button>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content="Delete">
                                        <button type="button">
                                            <svg>...</svg>
                                        </button>
                                    </Tippy>
                                </li>
                            </ul>
                        </td>
                    </tr>
                );
            })}
        </tbody>
        <tfoot>
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th className="!text-center">Action</th>
            </tr>
        </tfoot>
    </table>
</div>`})})]}),a("div",{className:"panel",children:[a("div",{className:"flex items-center justify-between mb-5",children:[e("h5",{className:"font-semibold text-lg dark:text-white-light",children:"Checkboxes"}),e("button",{type:"button",onClick:()=>n("code10"),className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",children:a("span",{className:"flex items-center",children:[e(d,{className:"me-2"}),"Code"]})})]}),e("div",{className:"table-responsive mb-5",children:a("table",{children:[e("thead",{children:a("tr",{children:[e("th",{children:e("input",{type:"checkbox",className:"form-checkbox"})}),e("th",{children:"Name"}),e("th",{children:"Date"}),e("th",{children:"Sale"}),e("th",{className:"!text-center",children:"Action"})]})}),e("tbody",{children:l.map(t=>a("tr",{children:[e("td",{children:e("input",{type:"checkbox",className:"form-checkbox"})}),e("td",{children:e("div",{className:"whitespace-nowrap",children:t.name})}),e("td",{children:t.date}),e("td",{children:t.sale}),e("td",{className:"text-center",children:a("ul",{className:"flex items-center justify-center gap-2",children:[e("li",{children:e(i,{content:"Settings",children:e("button",{type:"button",children:e(k,{className:"w-5 h-5 text-primary"})})})}),e("li",{children:e(i,{content:"Edit",children:e("button",{type:"button",children:e(p,{className:"text-success"})})})}),e("li",{children:e(i,{content:"Delete",children:e("button",{type:"button",children:e(o,{className:"text-danger"})})})})]})})]},t.id))})]})}),s.includes("code10")&&e(r,{children:e("pre",{children:`import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const tableData = [
    {
        id: 1,
        name: 'John Doe',
        email: 'johndoe@yahoo.com',
        date: '10/08/2020',
        sale: 120,
        status: 'Complete',
        register: '5 min ago',
        progress: '40%',
        position: 'Developer',
        office: 'London',
    },
    {
        id: 2,
        name: 'Shaun Park',
        email: 'shaunpark@gmail.com',
        date: '11/08/2020',
        sale: 400,
        status: 'Pending',
        register: '11 min ago',
        progress: '23%',
        position: 'Designer',
        office: 'New York',
    },
    {
        id: 3,
        name: 'Alma Clarke',
        email: 'alma@gmail.com',
        date: '12/02/2020',
        sale: 310,
        status: 'In Progress',
        register: '1 hour ago',
        progress: '80%',
        position: 'Accountant',
        office: 'Amazon',
    },
    {
        id: 4,
        name: 'Vincent Carpenter',
        email: 'vincent@gmail.com',
        date: '13/08/2020',
        sale: 100,
        status: 'Canceled',
        register: '1 day ago',
        progress: '60%',
        position: 'Data Scientist',
        office: 'Canada',
    },
];

<div className="table-responsive mb-5">
    <table>
        <thead>
            <tr>
                <th>
                    <input type="checkbox" className="form-checkbox" />
                </th>
                <th>Name</th>
                <th>Date</th>
                <th>Sale</th>
                <th className="!text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {tableData.map((data) => {
                return (
                    <tr key={data.id}>
                        <td>
                            <input type="checkbox" className="form-checkbox" />
                        </td>
                        <td>
                            <div className="whitespace-nowrap">{data.name}</div>
                        </td>
                        <td>{data.date}</td>
                        <td>{data.sale}</td>
                        <td className="text-center">
                            <ul className="flex items-center justify-center gap-2">
                                <li>
                                    <Tippy content="Settings">
                                        <button type="button">
                                            <svg>...</svg>
                                        </button>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content="Edit">
                                        <button type="button">
                                            <svg>...</svg>
                                        </button>
                                    </Tippy>
                                </li>
                                <li>
                                    <Tippy content="Delete">
                                        <button type="button">
                                            <svg>...</svg>
                                        </button>
                                    </Tippy>
                                </li>
                            </ul>
                        </td>
                    </tr>
                );
            })}
        </tbody>
    </table>
</div>`})})]})]})};export{z as default};
