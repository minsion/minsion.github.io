import{c as x,_ as d}from"./codePreview.b8512f6b.js";import{S as o}from"./sweetalert2.all.06de7800.js";import{d as y,u as v,o as l,b as C,e as t,f as a,g as n,j as m,X as p,w as f,D as b}from"./index.ddf2ada6.js";import{I as k}from"./icon-bell.2ecf9464.js";import{I as h}from"./icon-code.a018a24c.js";const A=t("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[t("li",null,[t("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),t("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[t("span",null,"Sweet Alerts")])],-1),B={class:"pt-5 space-y-8 sweet-alerts"},S={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},j={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},T=t("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),$=t("a",{href:"https://www.npmjs.com/package/sweetalert2",target:"_blank",class:"block hover:underline"},"https://www.npmjs.com/package/sweetalert2",-1),I={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},Y={class:"panel"},M={class:"flex items-center justify-between mb-5"},L=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Basic message",-1),D={class:"flex items-center"},q={class:"mb-5"},P={class:"flex items-center justify-center"},W=t("pre",null,`<!-- basic message -->
<button type="button" class="btn btn-primary" @click="showAlert()">Basic message</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            title: 'Saved succesfully',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
<\/script>
`,-1),O={class:"panel"},N={class:"flex items-center justify-between mb-5"},H=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Success message",-1),R={class:"flex items-center"},F={class:"mb-5"},U={class:"flex items-center justify-center"},V=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-secondary" @click="showAlert()">Success message!</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            icon: 'success',
            title: 'Good job!',
            text: 'You clicked the!',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
<\/script>
`,-1),Q={class:"panel"},G={class:"flex items-center justify-between mb-5"},J=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Dynamic queue",-1),X={class:"flex items-center"},E={class:"mb-5"},z={class:"flex items-center justify-center"},K=t("pre",null,`<!-- dynamic queue -->
<button type="button" class="btn btn-success" @click="showAlert()">Dynamic queue</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        const ipAPI = 'https://api.ipify.org?format=json';
        Swal.fire({
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received ' + 'via AJAX request',
            showLoaderOnConfirm: true,
            customClass: 'sweet-alerts',
            preConfirm: () => {
                return fetch(ipAPI)
                    .then((response) => {
                        return response.json();
                    })
                    .then((data) => {
                        Swal.fire({
                            title: data.ip,
                            customClass: 'sweet-alerts',
                        });
                    })
                    .catch(() => {
                        Swal.fire({
                            icon: 'error',
                            title: 'Unable to get your public IP',
                            customClass: 'sweet-alerts',
                        });
                    });
            },
        });
    }
<\/script>
`,-1),Z={class:"panel"},tt={class:"flex items-center justify-between mb-5"},et=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"A title with a text under",-1),st={class:"flex items-center"},nt={class:"mb-5"},ot={class:"flex items-center justify-center"},it=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-danger" @click="showAlert()">Title & text</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            icon: 'question',
            title: 'The Internet?',
            text: 'That thing is still around?',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
<\/script>
`,-1),lt={class:"panel"},at={class:"flex items-center justify-between mb-5"},rt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Chaining modals (queue)",-1),ct={class:"flex items-center"},ut={class:"mb-5"},dt={class:"flex items-center justify-center"},mt=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-warning" @click="showAlert()">Chaining modals (queue)</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        const steps = ['1', '2', '3'];
        const swalQueueStep = Swal.mixin({
            confirmButtonText: 'Next \u2192',
            showCancelButton: true,
            progressSteps: steps,
            input: 'text',
            inputAttributes: {
                required: true,
            },
            validationMessage: 'This field is required',
            padding: '2em',
            customClass: 'sweet-alerts',
        });

        const values = [];
        let currentStep;

        for (currentStep = 0; currentStep < steps.length;) {
            const result = await swalQueueStep.fire({
                title: \`Question \${steps[currentStep]}\`,
                text: currentStep == 0 ? 'Chaining swal modals is easy.' : '',
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
                html: 'Your answers: <pre>' + JSON.stringify(values) + '</pre>',
                confirmButtonText: 'Lovely!',
                customClass: 'sweet-alerts',
            });
        }
    }
<\/script>
`,-1),pt={class:"panel"},ft={class:"flex items-center justify-between mb-5"},bt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Custom animation",-1),ht={class:"flex items-center"},gt={class:"mb-5"},wt={class:"flex items-center justify-center"},_t=t("div",{class:"fixed inset-0 bg-[black]/60 z-[999] transition-all duration-300 px-4 hidden"},[t("div",{class:"panel absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11/12 sm:w-[480px] text-center"},[t("h3",{class:"text-[#3b3f5c] dark:text-white-light text-2xl font-bold mb-5"},"Custom animation with Animate.css"),t("button",{type:"button",class:"btn btn-info"},"Ok")])],-1),xt=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-info" @click="showAlert()">Custom animation</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            title: 'Custom animation with Animate.css',
            animation: false,
            showClass: {
                popup: 'animate__animated animate__flip'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            },
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
<\/script>
`,-1),yt={class:"panel"},vt={class:"flex items-center justify-between mb-5"},Ct=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Message with auto close timer",-1),kt={class:"flex items-center"},At={class:"mb-5"},Bt={class:"flex items-center justify-center"},St=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-primary" @click="showAlert()">Message timer</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        let timerInterval;

        Swal.fire({
            title: 'Auto close alert!',
            html: 'I will close in <b></b> milliseconds.',
            timer: 2000,
            timerProgressBar: true,
            customClass: 'sweet-alerts',
            didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector('b');
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
<\/script>
`,-1),jt={class:"panel"},Tt={class:"flex items-center justify-between mb-5"},$t=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Message with custom image",-1),It={class:"flex items-center"},Yt={class:"mb-5"},Mt={class:"flex items-center justify-center"},Lt=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-secondary" @click="showAlert()">Message with custom image</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: ('/assets/images/thumbs-up.jpg'),
            imageWidth: 224,
            imageHeight: 200,
            imageAlt: 'Custom image',
            animation: false,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
<\/script>
`,-1),Dt={class:"panel"},qt={class:"flex items-center justify-between mb-5"},Pt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Custom HTML description and buttons",-1),Wt={class:"flex items-center"},Ot={class:"mb-5"},Nt={class:"flex items-center justify-center"},Ht=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-danger" @click="showAlert()">Custom Description & buttons</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            icon: 'info',
            title: '<i>HTML</i> <u>example</u>',
            html: 'You can use <b>bold text</b>, ' + '<a href="//github.com">links</a> ' + 'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<i class="flaticon-checked-1"></i> Great!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            cancelButtonText: '<i class="flaticon-cancel-circle"></i> Cancel',
            cancelButtonAriaLabel: 'Thumbs down',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
<\/script>
`,-1),Rt={class:"panel"},Ft={class:"flex items-center justify-between mb-5"},Ut=t("h5",{class:"font-semibold text-lg dark:text-white-light"},'Warning message, with "Confirm" button',-1),Vt={class:"flex items-center"},Qt={class:"mb-5"},Gt={class:"flex items-center justify-center"},Jt=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-success" @click="showAlert()">Confirm</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
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
<\/script>
`,-1),Xt={class:"panel"},Et={class:"flex items-center justify-between mb-5"},zt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},'Execute something else for "Cancel".',-1),Kt={class:"flex items-center"},Zt={class:"mb-5"},te={class:"flex items-center justify-center"},ee=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-warning" @click="showAlert()">Addition else for "Cancel".</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                popup: 'sweet-alerts',
                confirmButton: 'btn btn-secondary',
                cancelButton: 'btn btn-dark ltr:mr-3 rtl:ml-3',
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
<\/script>
`,-1),se={class:"panel"},ne={class:"flex items-center justify-between mb-5"},oe=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"A message with custom width, padding and background",-1),ie={class:"flex items-center"},le={class:"mb-5"},ae={class:"flex items-center justify-center"},re=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-info" @click="showAlert()">Custom Message</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '7em',
            customClass: 'background-modal sweet-alerts',
            background: '#fff url(' + ('/assets/images/sweet-bg.jpg') + ') no-repeat 100% 100%',
        });
    }
<\/script>
`,-1),ce={class:"panel"},ue={class:"flex items-center justify-between mb-5"},de=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"With Footer",-1),me={class:"flex items-center"},pe={class:"mb-5"},fe={class:"flex items-center justify-center"},be=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-dark" @click="showAlert()">With Footer</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="javascript:;">Why do I have this issue?</a>',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
<\/script>
`,-1),he={class:"panel"},ge={class:"flex items-center justify-between mb-5"},we=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"RTL support",-1),_e={class:"flex items-center"},xe={class:"mb-5"},ye={class:"flex items-center justify-center",id:"rtl-container"},ve=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-primary" @click="showAlert()">RTL</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        Swal.fire({
            title: '\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u061F',
            confirmButtonText: '\u0646\u0639\u0645',
            cancelButtonText: '\u0644\u0627',
            showCancelButton: true,
            showCloseButton: true,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
<\/script>
`,-1),Ce={class:"panel"},ke={class:"flex items-center justify-between mb-5"},Ae=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Mixin",-1),Be={class:"flex items-center"},Se={class:"mb-5"},je={class:"flex items-center justify-center"},Te=t("pre",null,`<!-- success message -->
<button type="button" class="btn btn-secondary" @click="showAlert()">Mixin</button>

<!-- script -->
<script>
    const showAlert = async (type: number) => {
        const toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            padding: '2em',
            customClass: 'sweet-alerts',
        });
        toast.fire({
            icon: 'success',
            title: 'Signed in successfully',
            padding: '2em',
            customClass: 'sweet-alerts',
        });
    }
<\/script>
`,-1),qe=y({__name:"sweetalert",setup($e){v({title:"Sweetalert"});const{codeArr:r,toggleCode:c}=x(),u=async i=>{if(i===1)o.fire({title:"Saved succesfully",padding:"2em",customClass:"sweet-alerts"});else if(i===2)o.fire({icon:"success",title:"Good job!",text:"You clicked the!",padding:"2em",customClass:"sweet-alerts"});else if(i===3){const e="https://api.ipify.org?format=json";o.fire({title:"Your public IP",confirmButtonText:"Show my public IP",text:"Your public IP will be received via AJAX request",showLoaderOnConfirm:!0,customClass:"sweet-alerts",preConfirm:()=>fetch(e).then(s=>s.json()).then(s=>{o.fire({title:s.ip,customClass:"sweet-alerts"})}).catch(()=>{o.fire({icon:"error",title:"Unable to get your public IP",customClass:"sweet-alerts"})})})}else if(i===4)o.fire({icon:"question",title:"The Internet?",text:"That thing is still around?",padding:"2em",customClass:"sweet-alerts"});else if(i===5){const e=["1","2","3"],s=o.mixin({confirmButtonText:"Next \u2192",showCancelButton:!0,progressSteps:e,input:"text",inputAttributes:{required:"true"},validationMessage:"This field is required",padding:"2em",customClass:"sweet-alerts"}),w=[];let g;for(g=0;g<e.length;){const _=await s.fire({title:`Question ${e[g]}`,text:g==0?"Chaining swal modals is easy.":"",inputValue:w[g]||"",showCancelButton:g>0,currentProgressStep:g,customClass:"sweet-alerts"});if(_.value)w[g]=_.value,g++;else if(_.dismiss===o.DismissReason.cancel)g--;else break}g===e.length&&o.fire({title:"All done!",padding:"2em",html:"Your answers: <pre>"+JSON.stringify(w)+"</pre>",confirmButtonText:"Lovely!",customClass:"sweet-alerts"})}else if(i===6)o.fire({title:"Custom animation with Animate.css",showClass:{popup:"animate__animated animate__flip"},hideClass:{popup:"animate__animated animate__fadeOutUp"},padding:"2em",customClass:"sweet-alerts"});else if(i===7){let e;o.fire({title:"Auto close alert!",html:"I will close in <b></b> milliseconds.",timer:2e3,timerProgressBar:!0,customClass:"sweet-alerts",didOpen:()=>{var w;o.showLoading();const s=(w=o.getHtmlContainer())==null?void 0:w.querySelector("b");e=setInterval(()=>{s.textContent=o.getTimerLeft()},100)},willClose:()=>{clearInterval(e)}}).then(s=>{s.dismiss===o.DismissReason.timer&&console.log("I was closed by the timer")})}else if(i===8)o.fire({title:"Sweet!",text:"Modal with a custom image.",imageUrl:"/assets/images/custom-swal.svg",imageWidth:224,imageHeight:"auto",imageAlt:"Custom image",padding:"2em",customClass:"sweet-alerts"});else if(i===9)o.fire({icon:"info",title:"<i>HTML</i> <u>example</u>",html:'You can use <b>bold text</b>, <a href="//github.com">links</a> and other HTML tags',showCloseButton:!0,showCancelButton:!0,focusConfirm:!1,confirmButtonText:'<i class="flaticon-checked-1"></i> Great!',confirmButtonAriaLabel:"Thumbs up, great!",cancelButtonText:'<i class="flaticon-cancel-circle"></i> Cancel',cancelButtonAriaLabel:"Thumbs down",padding:"2em",customClass:"sweet-alerts"});else if(i===10)o.fire({icon:"warning",title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonText:"Delete",padding:"2em",customClass:"sweet-alerts"}).then(e=>{e.value&&o.fire({title:"Deleted!",text:"Your file has been deleted.",icon:"success",customClass:"sweet-alerts"})});else if(i===11){const e=o.mixin({customClass:{popup:"sweet-alerts",confirmButton:"btn btn-secondary",cancelButton:"btn btn-dark ltr:mr-3 rtl:ml-3"},buttonsStyling:!1});e.fire({title:"Are you sure?",text:"You won't be able to revert this!",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!",cancelButtonText:"No, cancel!",reverseButtons:!0,padding:"2em"}).then(s=>{s.value?e.fire("Deleted!","Your file has been deleted.","success"):s.dismiss===o.DismissReason.cancel&&e.fire("Cancelled","Your imaginary file is safe :)","error")})}else i===12?o.fire({title:"Custom width, padding, background.",width:600,padding:"7em",customClass:"background-modal sweet-alerts",background:"#fff url(/assets/images/sweet-bg.jpg) no-repeat 100% 100%"}):i===13?o.fire({icon:"error",title:"Oops...",text:"Something went wrong!",footer:'<a href="javascript:;">Why do I have this issue?</a>',padding:"2em",customClass:"sweet-alerts"}):i===14?o.fire({title:"\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u061F",confirmButtonText:"\u0646\u0639\u0645",cancelButtonText:"\u0644\u0627",showCancelButton:!0,showCloseButton:!0,padding:"2em",customClass:"sweet-alerts"}):i===15&&o.mixin({toast:!0,position:"top-end",showConfirmButton:!1}).fire({icon:"success",title:"Signed in successfully",padding:"10px 20px"})};return(i,e)=>(l(),C("div",null,[A,t("div",B,[t("div",S,[t("div",j,[a(k)]),T,$]),t("div",I,[t("div",Y,[t("div",M,[L,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[0]||(e[0]=s=>n(c)("code1"))},[t("span",D,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",q,[t("div",P,[t("button",{type:"button",class:"btn btn-primary",onClick:e[1]||(e[1]=s=>u(1))},"Basic message")])]),n(r).includes("code1")?(l(),p(d,{key:0},{default:f(()=>[W]),_:1})):b("",!0)]),t("div",O,[t("div",N,[H,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[2]||(e[2]=s=>n(c)("code2"))},[t("span",R,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",F,[t("div",U,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[3]||(e[3]=s=>u(2))},"Success message!")])]),n(r).includes("code2")?(l(),p(d,{key:0},{default:f(()=>[V]),_:1})):b("",!0)]),t("div",Q,[t("div",G,[J,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[4]||(e[4]=s=>n(c)("code3"))},[t("span",X,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",E,[t("div",z,[t("button",{type:"button",class:"btn btn-success",onClick:e[5]||(e[5]=s=>u(3))},"Dynamic queue")])]),n(r).includes("code3")?(l(),p(d,{key:0},{default:f(()=>[K]),_:1})):b("",!0)]),t("div",Z,[t("div",tt,[et,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[6]||(e[6]=s=>n(c)("code5"))},[t("span",st,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",nt,[t("div",ot,[t("button",{type:"button",class:"btn btn-danger",onClick:e[7]||(e[7]=s=>u(4))},"Title & text")])]),n(r).includes("code5")?(l(),p(d,{key:0},{default:f(()=>[it]),_:1})):b("",!0)]),t("div",lt,[t("div",at,[rt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[8]||(e[8]=s=>n(c)("code6"))},[t("span",ct,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",ut,[t("div",dt,[t("button",{type:"button",class:"btn btn-warning",onClick:e[9]||(e[9]=s=>u(5))},"Chaining modals (queue)")])]),n(r).includes("code6")?(l(),p(d,{key:0},{default:f(()=>[mt]),_:1})):b("",!0)]),t("div",pt,[t("div",ft,[bt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[10]||(e[10]=s=>n(c)("code7"))},[t("span",ht,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",gt,[t("div",wt,[t("button",{type:"button",class:"btn btn-info",onClick:e[11]||(e[11]=s=>u(6))},"Custom animation")]),_t]),n(r).includes("code7")?(l(),p(d,{key:0},{default:f(()=>[xt]),_:1})):b("",!0)]),t("div",yt,[t("div",vt,[Ct,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[12]||(e[12]=s=>n(c)("code8"))},[t("span",kt,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",At,[t("div",Bt,[t("button",{type:"button",class:"btn btn-primary",onClick:e[13]||(e[13]=s=>u(7))},"Message timer")])]),n(r).includes("code8")?(l(),p(d,{key:0},{default:f(()=>[St]),_:1})):b("",!0)]),t("div",jt,[t("div",Tt,[$t,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[14]||(e[14]=s=>n(c)("code9"))},[t("span",It,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",Yt,[t("div",Mt,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[15]||(e[15]=s=>u(8))},"Message with custom image")])]),n(r).includes("code9")?(l(),p(d,{key:0},{default:f(()=>[Lt]),_:1})):b("",!0)]),t("div",Dt,[t("div",qt,[Pt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[16]||(e[16]=s=>n(c)("code10"))},[t("span",Wt,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",Ot,[t("div",Nt,[t("button",{type:"button",class:"btn btn-danger",onClick:e[17]||(e[17]=s=>u(9))},"Custom Description & buttons")])]),n(r).includes("code10")?(l(),p(d,{key:0},{default:f(()=>[Ht]),_:1})):b("",!0)]),t("div",Rt,[t("div",Ft,[Ut,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[18]||(e[18]=s=>n(c)("code11"))},[t("span",Vt,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",Qt,[t("div",Gt,[t("button",{type:"button",class:"btn btn-success",onClick:e[19]||(e[19]=s=>u(10))},"Confirm")])]),n(r).includes("code11")?(l(),p(d,{key:0},{default:f(()=>[Jt]),_:1})):b("",!0)]),t("div",Xt,[t("div",Et,[zt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[20]||(e[20]=s=>n(c)("code12"))},[t("span",Kt,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",Zt,[t("div",te,[t("button",{type:"button",class:"btn btn-warning",onClick:e[21]||(e[21]=s=>u(11))},'Addition else for "Cancel".')])]),n(r).includes("code12")?(l(),p(d,{key:0},{default:f(()=>[ee]),_:1})):b("",!0)]),t("div",se,[t("div",ne,[oe,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[22]||(e[22]=s=>n(c)("code13"))},[t("span",ie,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",le,[t("div",ae,[t("button",{type:"button",class:"btn btn-info",onClick:e[23]||(e[23]=s=>u(12))},"Custom Message")])]),n(r).includes("code13")?(l(),p(d,{key:0},{default:f(()=>[re]),_:1})):b("",!0)]),t("div",ce,[t("div",ue,[de,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[24]||(e[24]=s=>n(c)("code14"))},[t("span",me,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",pe,[t("div",fe,[t("button",{type:"button",class:"btn btn-dark",onClick:e[25]||(e[25]=s=>u(13))},"With Footer")])]),n(r).includes("code14")?(l(),p(d,{key:0},{default:f(()=>[be]),_:1})):b("",!0)]),t("div",he,[t("div",ge,[we,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[26]||(e[26]=s=>n(c)("code15"))},[t("span",_e,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",xe,[t("div",ye,[t("button",{type:"button",class:"btn btn-primary",onClick:e[27]||(e[27]=s=>u(14))},"RTL")])]),n(r).includes("code15")?(l(),p(d,{key:0},{default:f(()=>[ve]),_:1})):b("",!0)]),t("div",Ce,[t("div",ke,[Ae,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:e[28]||(e[28]=s=>n(c)("code16"))},[t("span",Be,[a(h,{class:"me-2"}),m(" Code ")])])]),t("div",Se,[t("div",je,[t("button",{type:"button",class:"btn btn-secondary",onClick:e[29]||(e[29]=s=>u(15))},"Mixin")])]),n(r).includes("code16")?(l(),p(d,{key:0},{default:f(()=>[Te]),_:1})):b("",!0)])])])]))}});export{qe as default};
