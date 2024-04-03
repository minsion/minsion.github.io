import{u as g,r as f,s as w,j as t,b as e,L as y}from"./index-db6af04d.js";import{C as c}from"./Highlight-7cc82095.js";import{S as s}from"./sweetalert2.all-8585573f.js";import{I as x}from"./IconBell-f4cf060d.js";import{I as o}from"./IconCode-9488e58f.js";const A=()=>{const p=g();f.useEffect(()=>{p(w("Sweet Alerts"))});const[n,b]=f.useState([]),l=a=>{n.includes(a)?b(i=>i.filter(m=>m!==a)):b([...n,a])},r=async a=>{if(a===1)s.fire({title:"Saved succesfully",padding:"2em",customClass:"sweet-alerts"});else if(a===2)s.fire({icon:"success",title:"Good job!",text:"You clicked the!",padding:"2em",customClass:"sweet-alerts"});else if(a===3){const i="https://api.ipify.org?format=json";s.fire({title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,customClass:"sweet-alerts",preConfirm:async()=>{try{const u=await(await fetch(i)).json();s.fire({title:u.ip,customClass:"sweet-alerts"})}catch{s.fire({icon:"error",title:"Unable to get your public IP",customClass:"sweet-alerts"})}}})}else if(a===4)s.fire({icon:"question",title:"The Internet?",text:"That thing is still around?",padding:"2em",customClass:"sweet-alerts"});else if(a===5){const i=["1","2","3"],m=s.mixin({confirmButtonText:"Next →",showCancelButton:!0,progressSteps:i,input:"text",inputAttributes:{required:"true"},validationMessage:"This field is required",padding:"2em",customClass:"sweet-alerts"}),u=[];let d;for(d=0;d<i.length;){const h=await m.fire({title:`Question ${i[d]}`,text:d===0?"Chaining swal modals is easy.":"",inputValue:u[d],showCancelButton:d>0,currentProgressStep:d,customClass:"sweet-alerts"});if(h.value)u[d]=h.value,d++;else if(h.dismiss===s.DismissReason.cancel)d--;else break}d===i.length&&s.fire({title:"All done!",padding:"2em",html:"Your answers: <pre>"+JSON.stringify(u)+"</pre>",confirmButtonText:"Lovely!",customClass:"sweet-alerts"})}else if(a===6)s.fire({title:"Custom animation with Animate.css",showClass:{popup:"animate__animated animate__flip"},hideClass:{popup:"animate__animated animate__fadeOutUp"},padding:"2em",customClass:"sweet-alerts"});else if(a===7){let i;s.fire({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,didOpen:()=>{var u;const m=(u=s.getHtmlContainer())==null?void 0:u.querySelector("b");i=setInterval(()=>{m.textContent=s.getTimerLeft()},100)},willClose:()=>{clearInterval(i)}}).then(m=>{m.dismiss===s.DismissReason.timer&&console.log("I was closed by the timer")})}else if(a===8)s.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"/assets/images/custom-swal.svg",imageWidth:224,imageHeight:"auto",imageAlt:"Custom image",padding:"2em",customClass:"sweet-alerts"});else if(a===9)s.fire({icon:"info",title:"<i>HTML</i> <u>example</u>",html:'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i className="flaticon-checked-1"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i className="flaticon-cancel-circle"></i> Cancel',cancelButtonAriaLabel:"Thumbs down",padding:"2em",customClass:"sweet-alerts"});else if(a===10)s.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(i=>{i.value&&s.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:"sweet-alerts"})});else if(a===11){const i=s.mixin({customClass:{confirmButton:"btn btn-secondary",cancelButton:"btn btn-dark ltr:mr-3 rtl:ml-3",popup:"sweet-alerts"},buttonsStyling:!1});i.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0,padding:"2em"}).then(m=>{m.value?i.fire("Deleted!","Your file has been deleted.","success"):m.dismiss===s.DismissReason.cancel&&i.fire("Cancelled","Your imaginary file is safe :)","error")})}else a===12?s.fire({title:"Custom width, padding, background.",width:600,padding:"7em",customClass:"background-modal sweet-alerts",background:"#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%"}):a===13?s.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="javascript:;">Why do I have this issue?</a>',padding:"2em",customClass:"sweet-alerts"}):a===14?s.fire({title:"هل تريد الاستمرار؟",confirmButtonText:"نعم",cancelButtonText:"لا",showCancelButton:!0,showCloseButton:!0,padding:"2em",customClass:"sweet-alerts"}):a===15&&s.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3}).fire({icon:"success",title:"Signed in successfully",padding:"10px 20px"})};return t("div",{children:[t("ul",{className:"flex space-x-2 rtl:space-x-reverse",children:[e("li",{children:e(y,{to:"/components/sweetalert",className:"text-primary hover:underline",children:"Components"})}),e("li",{className:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2",children:e("span",{children:"Sweet Alerts"})})]}),t("div",{className:"sweet-alerts space-y-8 pt-5",children:[t("div",{className:"panel flex items-center overflow-x-auto whitespace-nowrap p-3 text-primary",children:[e("div",{className:"rounded-full bg-primary p-1.5 text-white ring-2 ring-primary/30 ltr:mr-3 rtl:ml-3",children:e(x,{})}),e("span",{className:"ltr:mr-3 rtl:ml-3",children:"Documentation: "}),e("a",{href:"https://www.npmjs.com/package/sweetalert2",target:"_blank",className:"block hover:underline",rel:"noreferrer",children:"https://www.npmjs.com/package/sweetalert2"})]}),t("div",{className:"grid grid-cols-1 gap-6 lg:grid-cols-2",children:[t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Basic message"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code1"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>r(1),children:"Basic message"})})}),n.includes("code1")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 1) {
        Swal.fire({
            title: 'Saved succesfully',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
<div className="flex items-center justify-center">
    <button type="button" className="btn btn-primary" onClick={() => showAlert(1)}>
        Basic message
    </button>
</div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Success message"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code2"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-secondary",onClick:()=>r(2),children:"Success message!"})})}),n.includes("code2")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 2) {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You clicked the!',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
<div className="flex items-center justify-center">
    <button type="button" className="btn btn-primary" onClick={() => showAlert(1)}>
        Basic message
    </button>
</div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Dynamic queue"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code3"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-success",onClick:()=>r(3),children:"Dynamic queue"})})}),n.includes("code3")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
     if (type === 3) {
        const ipAPI = 'https://api.ipify.org?format=json';
        Swal.fire({
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received via AJAX request',
            showLoaderOnConfirm: true,
            customClass: 'sweet-alerts',
            preConfirm: async () => {
                try {
                    const response = await fetch(ipAPI);
                    const data = await response.json();
                    Swal.fire({
                        title: data.ip,
                        customClass: 'sweet-alerts',
                    });
                } catch {
                    Swal.fire({
                        icon: 'error',
                        title: 'Unable to get your public IP',
                        customClass: 'sweet-alerts',
                    });
                }
            },
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={() => showAlert(3)}>
            Dynamic queue
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"A title with a text under"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code4"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-danger",onClick:()=>r(4),children:"Title & text"})})}),n.includes("code4")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 4) {
        Swal.fire({
            icon: 'question',
            title: 'The Internet?',
            text: 'That thing is still around?',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-danger" onClick={() => showAlert(4)}>
            Title & text
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Chaining modals (queue)"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code5"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-warning",onClick:()=>r(5),children:"Chaining modals (queue)"})})}),n.includes("code5")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

if (type === 5) {
    const steps = ['1', '2', '3'];
    const swalQueueStep = Swal.mixin({
        confirmButtonText: 'Next →',
        showCancelButton: true,
        progressSteps: steps,
        input: 'text',
        inputAttributes: {
            required: 'true',
        },
        validationMessage: 'This field is required',
        padding: '2em',
        customClass: 'sweet-alerts',
    });
    const values: any = [];
    let currentStep;
    for (currentStep = 0; currentStep < steps.length; ) {
        const result = await swalQueueStep.fire({
            title: \`Question \${steps[currentStep]}\`,
            text: currentStep === 0 ? 'Chaining swal modals is easy.' : '',
            inputValue: values[currentStep],
            showCancelButton: currentStep > 0,
            currentProgressStep: currentStep,
            customClass: 'sweet-alerts',
        });
        if (result.value) {
            values[currentStep] = result.value;
            currentStep++;
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            currentStep--;
        } else {
            break;
        }
    }
    if (currentStep === steps.length) {
        Swal.fire({
            title: 'All done!',
            padding: '2em',
            html: 'Your answers: <pre className='language-typescript'>' + JSON.stringify(values) + '</pre>',
            confirmButtonText: 'Lovely!',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-warning" onClick={() => showAlert(5)}>
            Chaining modals (queue)
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Custom animation"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code6"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),t("div",{className:"mb-5",children:[e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-info",onClick:()=>r(6),children:"Custom animation"})}),e("div",{className:"fixed inset-0 z-[999] hidden bg-[black]/60 px-4 transition-all duration-300",children:t("div",{className:"panel absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center sm:w-[480px]",children:[e("h3",{className:"mb-5 text-2xl font-bold text-[#3b3f5c] dark:text-white-light",children:"Custom animation with Animate.css"}),e("button",{type:"button",className:"btn btn-info",children:"Ok"})]})})]}),n.includes("code6")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 6) {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            showClass: {
                popup: 'animate__animated animate__flip',
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp',
            },
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={() => showAlert(6)}>
            Custom animation
        </button>
    </div>
    <div className="fixed inset-0 z-[999] hidden bg-[black]/60 px-4 transition-all duration-300">
        <div className="panel absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2 text-center sm:w-[480px]">
            <h3 className="mb-5 text-2xl font-bold text-[#3b3f5c] dark:text-white-light">Custom animation with Animate.css</h3>
            <button type="button" className="btn btn-info">
                Ok
            </button>
        </div>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Message with auto close timer"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code7"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>r(7),children:"Message timer"})})}),n.includes("code7")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 7) {
        let timerInterval: string | number | NodeJS.Timer | undefined;
        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                //   Swal.showLoading();
                const b: any = Swal.getHtmlContainer()?.querySelector('b');
                timerInterval = setInterval(() => {
                    b.textContent = Swal.getTimerLeft();
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            },
        }).then((result) => {
            if (result.dismiss === Swal.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-primary" onClick={() => showAlert(7)}>
            Message timer
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Message with custom image"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code8"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-secondary",onClick:()=>r(8),children:"Message with custom image"})})}),n.includes("code8")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 8) {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: '/assets/images/custom-swal.svg',
            imageWidth: 224,
            imageHeight: 'auto',
            imageAlt: 'Custom image',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-secondary" onClick={() => showAlert(8)}>
            Message with custom image
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Custom HTML description and buttons"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code9"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-danger",onClick:()=>r(9),children:"Custom Description & buttons"})})}),n.includes("code9")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
     if (type === 9) {
        Swal.fire({
            icon: 'info',
            title: '<i>HTML</i> <u>example</u>',
            html: 'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i className="flaticon-checked-1"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i className="flaticon-cancel-circle"></i> Cancel',
            cancelButtonAriaLabel: 'Thumbs down',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-danger" onClick={() => showAlert(9)}>
            Custom Description & buttons
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:'Warning message, with "Confirm" button'}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code10"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-success",onClick:()=>r(10),children:"Confirm"})})}),n.includes("code10")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 10) {
        Swal.fire({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            showCancelButton: true,
            confirmButtonText: 'Delete',
            padding: '2em',
            customClass: 'sweet-alerts',
        }).then((result) => {
            if (result.value) {
                Swal.fire({ title: 'Deleted!', text: 'Your file has been deleted.', icon: 'success', customClass: 'sweet-alerts' });
            }
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-success" onClick={() => showAlert(10)}>
            Confirm
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:'Execute something else for "Cancel".'}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code11"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-warning",onClick:()=>r(11),children:'Addition else for "Cancel".'})})}),n.includes("code11")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
     if (type === 11) {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-secondary',
                cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
                popup: 'sweet-alerts',
            },
            buttonsStyling: false,
        });
        swalWithBootstrapButtons
            .fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete it!',
                cancelButtonText: 'No, cancel!',
                reverseButtons: true,
                padding: '2em',
            })
            .then((result) => {
                if (result.value) {
                    swalWithBootstrapButtons.fire('Deleted!', 'Your file has been deleted.', 'success');
                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    swalWithBootstrapButtons.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
                }
            });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-warning" onClick={() => showAlert(11)}>
            Addition else for "Cancel".
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"A message with custom width, padding and background"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code12"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-info",onClick:()=>r(12),children:"Custom Message"})})}),n.includes("code12")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 12) {
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '7em',
            customClass: 'background-modal sweet-alerts',
            background: '#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-info" onClick={() => showAlert(12)}>
            Custom Message
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"With Footer"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code13"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",children:e("button",{type:"button",className:"btn btn-dark",onClick:()=>r(13),children:"With Footer"})})}),n.includes("code13")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 13) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="javascript:;">Why do I have this issue?</a>',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center">
        <button type="button" className="btn btn-dark" onClick={() => showAlert(13)}>
            With Footer
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"RTL support"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code14"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",id:"rtl-container",children:e("button",{type:"button",className:"btn btn-primary",onClick:()=>r(14),children:"RTL"})})}),n.includes("code14")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 14) {
        Swal.fire({
            title: 'هل تريد الاستمرار؟',
            confirmButtonText: 'نعم',
            cancelButtonText: 'لا',
            showCancelButton: true,
            showCloseButton: true,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center" id="rtl-container">
        <button type="button" className="btn btn-primary" onClick={() => showAlert(14)}>
            RTL
        </button>
    </div>
</div>`})})]}),t("div",{className:"panel",children:[t("div",{className:"mb-5 flex items-center justify-between",children:[e("h5",{className:"text-lg font-semibold dark:text-white-light",children:"Mixin"}),e("button",{type:"button",className:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",onClick:()=>l("code15"),children:t("span",{className:"flex items-center",children:[e(o,{className:"me-2"}),"Code"]})})]}),e("div",{className:"mb-5",children:e("div",{className:"flex items-center justify-center",id:"rtl-container",children:e("button",{type:"button",className:"btn btn-secondary",onClick:()=>r(15),children:"Mixin"})})}),n.includes("code15")&&e(c,{children:e("pre",{className:"language-typescript",children:`import Swal from 'sweetalert2';

const showAlert = async (type: number) => {
    if (type === 15) {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
        });
        toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
            padding: '10px 20px',
        });
    }
}

<div className="mb-5">
    <div className="flex items-center justify-center" id="rtl-container">
        <button type="button" className="btn btn-secondary" onClick={() => showAlert(15)}>
            Mixin
        </button>
    </div>
</div>
    `})})]})]})]})]})};export{A as default};
