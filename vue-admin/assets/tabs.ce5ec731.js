import{d as j,u as P,o as u,b as L,e,f as t,g as i,j as n,w as a,X as b,D as p,y as l,S as w,v as y,M as T,L as _}from"./index.ddf2ada6.js";import{c as C,_ as f}from"./codePreview.b8512f6b.js";import{I as U}from"./icon-bell.2ecf9464.js";import{I as h}from"./icon-code.a018a24c.js";import{I as k}from"./icon-home.43610be3.js";import{I as q}from"./icon-phone.703abfc7.js";import{o as v,s as x,d as o,f as g,c as r}from"./tabs.2277b71e.js";import"./dom.b01be108.js";import"./micro-task.926e0e8e.js";import"./use-resolve-button-type.38ab832e.js";const D=e("ul",{class:"flex space-x-2 rtl:space-x-reverse"},[e("li",null,[e("a",{href:"javascript:;",class:"text-primary hover:underline"},"Components")]),e("li",{class:"before:content-['/'] ltr:before:mr-2 rtl:before:ml-2"},[e("span",null,"Tabs")])],-1),G={class:"pt-5 space-y-8"},M={class:"panel p-3 flex items-center text-primary overflow-x-auto whitespace-nowrap"},N={class:"ring-2 ring-primary/30 rounded-full bg-primary text-white p-1.5 ltr:mr-3 rtl:ml-3"},W=e("span",{class:"ltr:mr-3 rtl:ml-3"},"Documentation: ",-1),E=e("a",{href:"https://headlessui.com/vue/tabs",target:"_blank",class:"block hover:underline"},"https://headlessui.com/vue/tabs",-1),F={class:"grid grid-cols-1 lg:grid-cols-2 gap-6"},H={class:"panel"},$={class:"flex items-center justify-between mb-5"},S=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Simple Tabs",-1),I={class:"flex items-center"},V=e("a",{href:"javascript:;",class:"p-3.5 py-2 -mb-[1px] block pointer-events-none text-white-light dark:text-dark"},"Disabled",-1),B=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),J=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),R=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),A=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),z=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),X=e("pre",null,`<!-- simple tabs -->
<TabGroup as="div" class="mb-5">
  <TabList class="flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]">
    <Tab as="template" v-slot="{ selected }">
      <a
        href="javascript:;"
        class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none transition duration-300"
        :class="{ '!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black': selected }"
        >Home</a
      >
    </Tab>
    <Tab as="template" v-slot="{ selected }">
      <a
        href="javascript:;"
        class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none transition duration-300"
        :class="{ '!border-white-light !border-b-white text-primary dark:!border-[#191e3a] dark:!border-b-black': selected }"
        >Profile</a
      >
    </Tab>
    <Tab as="template" v-slot="{ selected }">
      <a
        href="javascript:;"
        class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none transition duration-300"
        :class="{ '!border-white-light !border-b-white text-primary dark:!border-[#191e3a] dark:!border-b-black': selected }"
        >Contact</a
      >
    </Tab>
    <Tab as="template" disabled>
      <a href="javascript:;" class="p-3.5 py-2 -mb-[1px] block pointer-events-none text-white-light dark:text-dark">Disabled</a>
    </Tab>
  </TabList>
  <TabPanels class="pt-5 flex-1 text-sm">
    <TabPanel>
      <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </TabPanel>
    <TabPanel>
      <div class="flex items-start">
        <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
          <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
        </div>
        <div class="flex-auto">
          <h5 class="text-xl font-medium mb-4">Media heading</h5>
          <p class="text-white-dark">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
            nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </TabPanel>
    <TabPanel>Disabled</TabPanel>
  </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),K={class:"panel"},O={class:"flex items-center justify-between mb-5"},Q=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Simple Pills",-1),Y={class:"flex items-center"},Z=e("a",{href:"javascript:;",class:"p-3.5 py-2 -mb-[1px] block rounded pointer-events-none text-white-light dark:text-dark"},"Disabled",-1),ee=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),te=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),ie=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),ae=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),se=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),oe=e("pre",null,`<!-- simple pills -->
<TabGroup as="div" class="mb-5">
  <TabList class="flex flex-wrap mt-3">
    <Tab as="template" v-slot="{ selected }">
      <a
        href="javascript:;"
        class="p-3.5 py-2 -mb-[1px] ltr:mr-2 rtl:ml-2 block rounded hover:bg-primary hover:text-white !outline-none transition duration-300"
        :class="{ 'bg-primary text-white': selected === 'home' }"
        >Home</a
      >
    </Tab>
    <Tab as="template" v-slot="{ selected }">
      <a
        href="javascript:;"
        class="p-3.5 py-2 -mb-[1px] ltr:mr-2 rtl:ml-2 block rounded hover:bg-primary hover:text-white !outline-none transition duration-300"
        :class="{ 'bg-primary text-white': selected === 'profile' }"
        >Profile</a
      >
    </Tab>
    <Tab as="template" v-slot="{ selected }">
      <a
        href="javascript:;"
        class="p-3.5 py-2 -mb-[1px] ltr:mr-2 rtl:ml-2 block rounded hover:bg-primary hover:text-white !outline-none transition duration-300"
        :class="{ 'bg-primary text-white': selected === 'contact' }"
        >Contact</a
      >
    </Tab>
    <Tab as="template" disabled>
      <a href="javascript:;" class="p-3.5 py-2 -mb-[1px] block rounded pointer-events-none text-white-light dark:text-dark">Disabled</a>
    </Tab>
  </TabList>
  <TabPanels class="pt-5 flex-1 text-sm">
    <TabPanel>
      <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
      <p class="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </TabPanel>
    <TabPanel>
      <div class="flex items-start">
        <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
          <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
        </div>
        <div class="flex-auto">
          <h5 class="text-xl font-medium mb-4">Media heading</h5>
          <p class="text-white-dark">
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum
            nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </p>
        </div>
      </div>
    </TabPanel>
    <TabPanel>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </TabPanel>
    <TabPanel>Disabled</TabPanel>
  </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),re={class:"panel"},le={class:"flex items-center justify-between mb-5"},ne=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Icon Tabs",-1),de={class:"flex items-center"},ue={href:"javascript:;",class:"p-3.5 py-2 -mb-[1px] flex items-center pointer-events-none text-white-light dark:text-dark"},ce=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),me=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),be=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),pe=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),fe=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),he=e("pre",null,`<!-- icon tabs -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300"
                :class="{ '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black': selected }"
            >
                <svg> ... </svg>
                Home
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300"
                :class="{ '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black': selected }"
            >
                <svg> ... </svg>
                Profile
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300"
                :class="{ '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black': selected }"
            >
                <svg> ... </svg>
                Contact
            </a>
        </Tab>
        <Tab as="template" disabled>
            <a href="javascript:;" class="p-3.5 py-2 -mb-[1px] flex items-center pointer-events-none text-white-light dark:text-dark">
                <svg> ... </svg>
                Disabled
            </a>
        </Tab>
    </TabList>
    <TabPanels class="pt-5 flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel>Disabled</TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),ve={class:"panel"},xe={class:"flex items-center justify-between mb-5"},ge=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Icon Pills",-1),_e={class:"flex items-center"},we={href:"javascript:;",class:"p-3.5 py-2 -mb-[1px] flex items-center rounded pointer-events-none text-white-light dark:text-dark"},ke=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),qe=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Te=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),ye=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),je=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Pe=e("pre",null,`<!-- icon pills -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap mt-3 gap-2">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] flex items-center rounded hover:bg-warning hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-warning text-white': selected }"
            >
                <svg> ... </svg>
                Home
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] flex items-center rounded hover:bg-warning hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-warning text-white': selected }"
            >
                <svg> ... </svg>
                Profile
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] flex items-center rounded hover:bg-warning hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-warning text-white': selected }"
            >
                <svg> ... </svg>
                Contact
            </a>
        </Tab>
        <Tab as="template" disabled>
            <a href="javascript:;" class="p-3.5 py-2 -mb-[1px] flex items-center rounded pointer-events-none text-white-light dark:text-dark">
                <svg> ... </svg>
                Disabled
            </a>
        </Tab>
    </TabList>
    <TabPanels class="pt-5 flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel>Disabled</TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),Le={class:"panel"},Ce={class:"flex items-center justify-between mb-5"},Ue=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertical Bordered",-1),De={class:"flex items-center"},Ge={class:"mx-10 mb-5 sm:mb-0"},Me=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Ne=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),We=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Ee=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),Fe=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),He=e("blockquote",{class:"text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"},[e("div",{class:"flex items-start"},[e("p",{class:"not-italic text-[#515365] text-sm dark:text-white-dark m-0"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. ")])],-1),$e=e("pre",null,`<!-- vertical border -->
<TabGroup as="div" class="mb-5 flex flex-col sm:flex-row">
    <div class="mx-10 mb-5 sm:mb-0">
        <TabList class="w-24 m-auto text-center">
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-3.5 py-2 -mb-[1px] block border border-white-light dark:border-[#191e3a] hover:bg-success hover:text-white !outline-none transition duration-300"
                    :class="{ 'bg-success text-white': selected }"
                    >Home</a
                >
            </Tab>
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-3.5 py-2 -mb-[1px] block border border-white-light dark:border-[#191e3a] hover:bg-success hover:text-white !outline-none transition duration-300"
                    :class="{ 'bg-success text-white': selected }"
                    >Profile</a
                >
            </Tab>
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-3.5 py-2 -mb-[1px] block border border-white-light dark:border-[#191e3a] hover:bg-success hover:text-white !outline-none transition duration-300"
                    :class="{ 'bg-success text-white': selected }"
                    >Messages</a
                >
            </Tab>
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-3.5 py-2 -mb-[1px] block border border-white-light dark:border-[#191e3a] hover:bg-success hover:text-white !outline-none transition duration-300"
                    :class="{ 'bg-success text-white': selected }"
                    >Settings</a
                >
            </Tab>
        </TabList>
    </div>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel>
            <blockquote
                class="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"
            >
                <div class="flex items-start">
                    <p class="not-italic text-[#515365] text-sm dark:text-white-dark m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </blockquote>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),Se={class:"panel"},Ie={class:"flex items-center justify-between mb-5"},Ve=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Border Tabs",-1),Be={class:"flex items-center"},Je=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Re=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Ae=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),ze=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),Xe=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Ke=e("pre",null,`<!-- border tabs -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300"
                :class="{ '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black': selected }"
            >
                <svg> ... </svg>
                Home
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300"
                :class="{ '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black': selected }"
            >
                <svg> ... </svg>
                Profile
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300"
                :class="{ '!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black': selected }"
            >
                <svg> ... </svg>
                Contact
            </a>
        </Tab>
    </TabList>
    <TabPanels class="p-4 flex-1 text-sm border border-white-light border-t-0 dark:border-[#191e3a]">
        <TabPanel class="active">
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),Oe={class:"panel"},Qe={class:"flex items-center justify-between mb-5"},Ye=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Border Top",-1),Ze={class:"flex items-center"},et=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),tt=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),it=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),at=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),st=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),ot=e("blockquote",{class:"text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"},[e("div",{class:"flex items-start"},[e("p",{class:"not-italic text-[#515365] text-sm dark:text-white-dark m-0"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. ")])],-1),rt=e("pre",null,`<!-- border top -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap mt-3 mb-5">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-7 py-3 flex items-center bg-[#f6f7f8] dark:bg-transparent border-transparent border-t-2 dark:hover:bg-[#191e3a] hover:border-secondary hover:text-secondary !outline-none transition duration-300"
                :class="{ '!border-secondary text-secondary dark:bg-[#191e3a]': selected }"
            >
                <svg> ... </svg>
                Home
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-7 py-3 flex items-center bg-[#f6f7f8] dark:bg-transparent dark:hover:bg-[#191e3a] border-transparent border-t-2 hover:border-secondary hover:text-secondary !outline-none transition duration-300"
                :class="{ '!border-secondary text-secondary dark:bg-[#191e3a]': selected }"
            >
                <svg> ... </svg>
                Profile
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-7 py-3 flex items-center bg-[#f6f7f8] dark:bg-transparent dark:hover:bg-[#191e3a] border-transparent border-t-2 hover:border-secondary hover:text-secondary !outline-none transition duration-300"
                :class="{ '!border-secondary text-secondary dark:bg-[#191e3a]': selected }"
            >
                <svg> ... </svg>
                Contact
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-7 py-3 flex items-center bg-[#f6f7f8] dark:bg-transparent dark:hover:bg-[#191e3a] border-transparent border-t-2 hover:border-secondary hover:text-secondary !outline-none transition duration-300"
                :class="{ '!border-secondary text-secondary dark:bg-[#191e3a]': selected }"
            >
                <svg> ... </svg>
                Settings
            </a>
        </Tab>
    </TabList>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel>
            <blockquote
                class="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"
            >
                <div class="flex items-start">
                    <p class="not-italic text-[#515365] text-sm dark:text-white-dark m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </blockquote>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),lt={class:"panel"},nt={class:"flex items-center justify-between mb-5"},dt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Line",-1),ut={class:"flex items-center"},ct=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),mt=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),bt=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),pt=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),ft=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),ht=e("pre",null,`<!-- line -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap mt-3 mb-5 border-b border-white-light dark:border-[#191e3a]">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-5 py-3 -mb-[1px] flex items-center hover:border-b border-transparent hover:!border-secondary hover:text-secondary !outline-none transition duration-300"
                :class="{ 'border-b !border-secondary text-secondary': selected }"
            >
                <svg> ... </svg>
                Home
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-5 py-3 -mb-[1px] flex items-center hover:border-b border-transparent hover:!border-secondary hover:text-secondary !outline-none transition duration-300"
                :class="{ 'border-b !border-secondary text-secondary': selected }"
            >
                <svg> ... </svg>
                Profile
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-5 py-3 -mb-[1px] flex items-center hover:border-b border-transparent hover:!border-secondary hover:text-secondary !outline-none transition duration-300"
                :class="{ 'border-b !border-secondary text-secondary': selected }"
            >
                <svg> ... </svg>
                Contact
            </a>
        </Tab>
    </TabList>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),vt={class:"panel"},xt={class:"flex items-center justify-between mb-5"},gt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Animated Line",-1),_t={class:"flex items-center"},wt=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),kt=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),qt=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Tt=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover /"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),yt=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),jt=e("pre",null,`<!-- animated line -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap mt-3 mb-5 border-b border-white-light dark:border-[#191e3a]">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-5 py-3 -mb-[1px] flex items-center relative before:transition-all before:duration-700 before:absolute hover:text-secondary before:bottom-0 before:w-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:bg-secondary hover:before:w-full !outline-none transition duration-300"
                :class="{ 'before:!w-full text-secondary': selected }"
            >
                <svg> ... </svg>
                Home
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-5 py-3 -mb-[1px] flex items-center relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:bg-secondary hover:before:w-full !outline-none transition duration-300"
                :class="{ 'before:!w-full text-secondary': selected }"
            >
                <svg> ... </svg>
                Profile
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-5 py-3 -mb-[1px] flex items-center relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:bg-secondary hover:before:w-full !outline-none transition duration-300"
                :class="{ 'before:!w-full text-secondary': selected }"
            >
                <svg> ... </svg>
                Contact
            </a>
        </Tab>
    </TabList>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover /" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),Pt={class:"panel"},Lt={class:"flex items-center justify-between mb-5"},Ct=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertical Line Tab",-1),Ut={class:"flex items-center"},Dt={class:"mx-10 mb-5 sm:mb-0"},Gt=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Mt=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Nt=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Wt=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),Et=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Ft=e("blockquote",{class:"text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"},[e("div",{class:"flex items-start"},[e("p",{class:"not-italic text-[#515365] text-sm dark:text-white-dark m-0"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. ")])],-1),Ht=e("pre",null,`<!-- Vertical line tabs -->
<TabGroup as="div" class="mb-5 flex flex-col sm:flex-row">
    <div class="mx-10 mb-5 sm:mb-0">
        <TabList class="w-24 m-auto text-center font-semibold">
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-3.5 py-4 -mb-[1px] block ltr:border-r rtl:border-l border-white-light dark:border-[#191e3a] relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-[1px] before:bottom-0 before:top-0 ltr:before:-right-[1px] rtl:before:-left-[1px] before:m-auto before:h-0 before:bg-secondary hover:before:h-[80%] !outline-none transition duration-300"
                    :class="{ 'text-secondary before:!h-[80%]': selected }"
                    >Home</a
                >
            </Tab>
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-3.5 py-4 -mb-[1px] block ltr:border-r rtl:border-l border-white-light dark:border-[#191e3a] relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-[1px] before:bottom-0 before:top-0 ltr:before:-right-[1px] rtl:before:-left-[1px] before:m-auto before:h-0 before:bg-secondary hover:before:h-[80%] !outline-none transition duration-300"
                    :class="{ 'text-secondary before:!h-[80%]': selected }"
                    >Profile</a
                >
            </Tab>
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-3.5 py-4 -mb-[1px] block ltr:border-r rtl:border-l border-white-light dark:border-[#191e3a] relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-[1px] before:bottom-0 before:top-0 ltr:before:-right-[1px] rtl:before:-left-[1px] before:m-auto before:h-0 before:bg-secondary hover:before:h-[80%] !outline-none transition duration-300"
                    :class="{ 'text-secondary before:!h-[80%]': selected }"
                    >Messages</a
                >
            </Tab>
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-3.5 py-4 -mb-[1px] block ltr:border-r rtl:border-l border-white-light dark:border-[#191e3a] relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-[1px] before:bottom-0 before:top-0 ltr:before:-right-[1px] rtl:before:-left-[1px] before:m-auto before:h-0 before:bg-secondary hover:before:h-[80%] !outline-none transition duration-300"
                    :class="{ 'text-secondary before:!h-[80%]': selected }"
                    >Settings</a
                >
            </Tab>
        </TabList>
    </div>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel>
            <blockquote
                class="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"
            >
                <div class="flex items-start">
                    <p class="not-italic text-[#515365] text-sm dark:text-white-dark m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </blockquote>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),$t={class:"panel"},St={class:"flex items-center justify-between mb-5"},It=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Justify Tabs",-1),Vt={class:"flex items-center"},Bt=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Jt=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Rt=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),At=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),zt=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Xt=e("pre",null,`<!-- justify tabs -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap justify-between mt-3 border-b border-white-light dark:border-[#191e3a] text-center">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="flex-auto p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300"
                :class="{ '!border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black': selected }"
                >Home</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="flex-auto p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300"
                :class="{ '!border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black': selected }"
                >Profile</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="flex-auto p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300"
                :class="{ '!border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black': selected }"
                >Contact</a
            >
        </Tab>
    </TabList>
    <TabPanels class="pt-5 flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),Kt={class:"panel"},Ot={class:"flex items-center justify-between mb-5"},Qt=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Justify Pills",-1),Yt={class:"flex items-center"},Zt=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),ei=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),ti=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),ii=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),ai=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),si=e("pre",null,`<!-- justify pills -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap justify-between mt-3 space-x-2 rtl:space-x-reverse text-center">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="flex-auto p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-info text-white': selected }"
                >Home</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="flex-auto p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-info text-white': selected }"
                >Profile</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="flex-auto p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-info text-white': selected }"
                >Contact</a
            >
        </Tab>
    </TabList>
    <TabPanels class="pt-5 flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),oi={class:"panel"},ri={class:"flex items-center justify-between mb-5"},li=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Justify Center Tabs",-1),ni={class:"flex items-center"},di=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),ui=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),ci=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),mi=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),bi=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),pi=e("pre",null,`<!-- justify center tabs -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap justify-center mt-3 border-b border-white-light dark:border-[#191e3a]">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300"
                :class="{ 'text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black': selected }"
                >Home</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300"
                :class="{ 'text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black': selected }"
                >Profile</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300"
                :class="{ 'text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black': selected }"
                >Contact</a
            >
        </Tab>
    </TabList>
    <TabPanels class="pt-5 flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),fi={class:"panel"},hi={class:"flex items-center justify-between mb-5"},vi=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Justify Center Pills",-1),xi={class:"flex items-center"},gi=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),_i=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),wi=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),ki=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),qi=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Ti=e("pre",null,`<!-- justify center pills -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap justify-center mt-3 space-x-2 rtl:space-x-reverse">
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-info text-white': selected }"
                >Home</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-info text-white': selected }"
                >Profile</a
            ></Tab
        >
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-info text-white': selected }"
                >Contact</a
            ></Tab
        >
    </TabList>
    <TabPanels class="pt-5 flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),yi={class:"panel"},ji={class:"flex items-center justify-between mb-5"},Pi=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Justify Right Tabs",-1),Li={class:"flex items-center"},Ci=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Ui=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Di=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Gi=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),Mi=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Ni=e("pre",null,`<!-- justify right tabs -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap justify-end mt-3 border-b border-white-light dark:border-[#191e3a]">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300"
                :class="{ 'text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black': selected }"
                >Home</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300"
                :class="{ 'text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black': selected }"
                >Profile</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300"
                :class="{ 'text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black': selected }"
                >Contact</a
            >
        </Tab>
    </TabList>
    <TabPanels class="pt-5 flex-1 text-sm">
        <TabPanel class="active">
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),Wi={class:"panel"},Ei={class:"flex items-center justify-between mb-5"},Fi=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Justify Right Pills",-1),Hi={class:"flex items-center"},$i=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Si=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Ii=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Vi=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),Bi=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Ji=e("pre",null,`<!-- justify right pills -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap justify-end mt-3 space-x-2 rtl:space-x-reverse">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-info text-white': selected }"
                >Home</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-info text-white': selected }"
                >Profile</a
            >
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300"
                :class="{ 'bg-info text-white': selected }"
                >Contact</a
            >
        </Tab>
    </TabList>
    <TabPanels class="pt-5 flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),Ri={class:"panel"},Ai={class:"flex items-center justify-between mb-5"},zi=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Pills with Icon",-1),Xi={class:"flex items-center"},Ki=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Oi=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Qi=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Yi=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),Zi=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),ea=e("blockquote",{class:"text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"},[e("div",{class:"flex items-start"},[e("p",{class:"not-italic text-[#515365] text-sm dark:text-white-dark m-0"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. ")])],-1),ta=e("pre",null,`<!-- pills with icon -->
<TabGroup as="div" class="mb-5">
    <TabList class="grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:justify-center mt-3 mb-5 sm:space-x-3 rtl:space-x-reverse">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] !outline-none transition duration-300"
                :class="{ '!bg-success text-white': selected }"
            >
                <svg> ... </svg>
                Home
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] !outline-none transition duration-300"
                :class="{ '!bg-success text-white': selected }"
            >
                <svg> ... </svg>
                Profile
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] !outline-none transition duration-300"
                :class="{ '!bg-success text-white': selected }"
            >
                <svg> ... </svg>
                Contact
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] !outline-none transition duration-300"
                :class="{ '!bg-success text-white': selected }"
            >
                <svg> ... </svg>
                Settings
            </a>
        </Tab>
    </TabList>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel>
            <blockquote
                class="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"
            >
                <div class="flex items-start">
                    <p class="not-italic text-[#515365] text-sm dark:text-white-dark m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </blockquote>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),ia={class:"panel"},aa={class:"flex items-center justify-between mb-5"},sa=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Rounded Pills with Icon",-1),oa={class:"flex items-center"},ra=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),la=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),na=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),da=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),ua=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),ca=e("blockquote",{class:"text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"},[e("div",{class:"flex items-start"},[e("p",{class:"not-italic text-[#515365] text-sm dark:text-white-dark m-0"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. ")])],-1),ma=e("pre",null,`<!-- rounded pills with icon -->
<TabGroup as="div" class="mb-5">
    <TabList class="flex flex-wrap justify-center mt-3 mb-5 space-x-3 rtl:space-x-reverse">
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none"
                :class="{ '!bg-info text-white': selected }"
            >
                <svg> ... </svg>
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none"
                :class="{ '!bg-info text-white': selected }"
            >
                <svg> ... </svg>
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none"
                :class="{ '!bg-info text-white': selected }"
            >
                <svg> ... </svg>
            </a>
        </Tab>
        <Tab as="template" v-slot="{ selected }">
            <a
                href="javascript:;"
                class="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none"
                :class="{ '!bg-info text-white': selected }"
            >
                <svg> ... </svg>
            </a>
        </Tab>
    </TabList>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel>
            <blockquote
                class="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"
            >
                <div class="flex items-start">
                    <p class="not-italic text-[#515365] text-sm dark:text-white-dark m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </blockquote>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),ba={class:"panel"},pa={class:"flex items-center justify-between mb-5"},fa=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertical Rounded With Icon",-1),ha={class:"flex items-center"},va={class:"mx-10 mb-5 sm:mb-0"},xa=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),ga=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),_a=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),wa=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),ka=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),qa=e("pre",null,`<!-- vertical rounded with icon -->
<TabGroup as="div" class="mb-5 flex flex-col sm:flex-row">
    <div class="mx-10 mb-5 sm:mb-0">
        <TabList class="flex flex-col justify-center m-auto space-y-3 w-24">
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none"
                    :class="{ '!bg-success text-white': selected }"
                >
                    <svg> ... </svg>
                    Home
                </a>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none"
                    :class="{ '!bg-success text-white': selected }"
                >
                    <svg> ... </svg>
                    Profile
                </a>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none"
                    :class="{ '!bg-success text-white': selected }"
                >
                    <svg> ... </svg>
                    Contact
                </a>
            </Tab>
        </TabList>
    </div>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),Ta={class:"panel"},ya={class:"flex items-center justify-between mb-5"},ja=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertical Circle With Icon",-1),Pa={class:"flex items-center"},La={class:"mx-10 mb-5 sm:mb-0"},Ca=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Ua=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Da=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Ga=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),Ma=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Na=e("pre",null,`<!-- vertical circle dith icon -->
<TabGroup as="div" class="mb-5 flex flex-col sm:flex-row">
    <div class="mx-10 mb-5 sm:mb-0">
        <TabList class="flex flex-col justify-center items-center space-y-3">
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none"
                    :class="{ '!bg-info text-white': selected }"
                >
                    <svg> ... </svg>
                </a>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none"
                    :class="{ '!bg-info text-white': selected }"
                >
                    <svg> ... </svg>
                </a>
            </Tab>
            <Tab as="template" v-slot="{ selected }">
                <a
                    href="javascript:;"
                    class="w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none"
                    :class="{ '!bg-info text-white': selected }"
                >
                    <svg> ... </svg>
                </a>
            </Tab>
        </TabList>
    </div>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),Wa={class:"panel"},Ea={class:"flex items-center justify-between mb-5"},Fa=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Vertical Pills",-1),Ha={class:"flex items-center"},$a=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Sa=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Ia=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Va=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),Ba=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),Ja=e("blockquote",{class:"text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"},[e("div",{class:"flex items-start"},[e("p",{class:"not-italic text-[#515365] text-sm dark:text-white-dark m-0"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. ")])],-1),Ra=e("pre",null,`<!-- vertical pills -->
<TabGroup as="div" class="mb-5 flex flex-col sm:flex-row">
    <TabList class="ltr:pr-4 rtl:pl-4 space-y-2 sm:flex-[0_0_20%] mb-5 sm:mb-0">
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none"
                :class="{ '!bg-success text-white': selected }"
                >Home</a
            ></Tab
        >
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none"
                :class="{ '!bg-success text-white': selected }"
                >Profile</a
            ></Tab
        >
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none"
                :class="{ '!bg-success text-white': selected }"
                >Messages</a
            ></Tab
        >
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none"
                :class="{ '!bg-success text-white': selected }"
                >Settings</a
            ></Tab
        >
    </TabList>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel>
            <blockquote
                class="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"
            >
                <div class="flex items-start">
                    <p class="not-italic text-[#515365] text-sm dark:text-white-dark m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </blockquote>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),Aa={class:"panel"},za={class:"flex items-center justify-between mb-5"},Xa=e("h5",{class:"font-semibold text-lg dark:text-white-light"},"Justify Vertical Pills Right",-1),Ka={class:"flex items-center"},Oa=e("h4",{class:"font-semibold text-2xl mb-4"},"We move your world!",-1),Qa=e("p",{class:"mb-4"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Ya=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",-1),Za=e("div",{class:"flex items-start"},[e("div",{class:"w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none"},[e("img",{src:_,alt:"",class:"w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover"})]),e("div",{class:"flex-auto"},[e("h5",{class:"text-xl font-medium mb-4"},"Media heading"),e("p",{class:"text-white-dark"}," Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ")])],-1),es=e("p",null," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1),ts=e("blockquote",{class:"text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"},[e("div",{class:"flex items-start"},[e("p",{class:"not-italic text-[#515365] text-sm dark:text-white-dark m-0"}," Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo. ")])],-1),is=e("pre",null,`<!-- justify vertical pills right -->
<TabGroup as="div" class="mb-5 flex flex-col sm:flex-row">
    <TabList class="ltr:pr-4 rtl:pl-4 space-y-2 sm:flex-[0_0_20%] mb-5 sm:mb-0 sm:order-1">
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none"
                :class="{ '!bg-success text-white': selected }"
                >Home</a
            ></Tab
        >
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none"
                :class="{ '!bg-success text-white': selected }"
                >Profile</a
            ></Tab
        >
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none"
                :class="{ '!bg-success text-white': selected }"
                >Messages</a
            ></Tab
        >
        <Tab as="template" v-slot="{ selected }"
            ><a
                href="javascript:;"
                class="p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none"
                :class="{ '!bg-success text-white': selected }"
                >Settings</a
            ></Tab
        >
    </TabList>
    <TabPanels class="flex-1 text-sm">
        <TabPanel>
            <h4 class="font-semibold text-2xl mb-4">We move your world!</h4>
            <p class="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
        </TabPanel>
        <TabPanel>
            <div class="flex items-start">
                <div class="w-20 h-20 ltr:mr-4 rtl:ml-4 flex-none">
                    <img src="/assets/images/profile-34.jpeg" alt="" class="w-20 h-20 m-0 rounded-full ring-2 ring-[#ebedf2] dark:ring-white-dark object-cover" />
                </div>
                <div class="flex-auto">
                    <h5 class="text-xl font-medium mb-4">Media heading</h5>
                    <p class="text-white-dark">
                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra
                        turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                    </p>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </TabPanel>
        <TabPanel>
            <blockquote
                class="text-black p-5 ltr:pl-3.5 rtl:pr-3.5 bg-white shadow-md rounded-tr-md rounded-br-md border border-white-light border-l-2 !border-l-primary dark:bg-[#060818] dark:border-[#060818]"
            >
                <div class="flex items-start">
                    <p class="not-italic text-[#515365] text-sm dark:text-white-dark m-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.
                    </p>
                </div>
            </blockquote>
        </TabPanel>
    </TabPanels>
</TabGroup>

<!-- script -->
<script lang="ts" setup>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
<\/script>
`,-1),fs=j({__name:"tabs",setup(as){P({title:"Tabs"});const{codeArr:c,toggleCode:m}=C();return(ss,d)=>(u(),L("div",null,[D,e("div",G,[e("div",M,[e("div",N,[t(U)]),W,E]),e("div",F,[e("div",H,[e("div",$,[S,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[0]||(d[0]=s=>i(m)("code1"))},[e("span",I,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none transition duration-300",{"!border-white-light !border-b-white  text-primary dark:!border-[#191e3a] dark:!border-b-black":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none transition duration-300",{"!border-white-light !border-b-white text-primary dark:!border-[#191e3a] dark:!border-b-black":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:text-primary dark:hover:border-b-black !outline-none transition duration-300",{"!border-white-light !border-b-white text-primary dark:!border-[#191e3a] dark:!border-b-black":s}])},"Contact",2)]),_:1}),t(i(o),{as:"template",disabled:""},{default:a(()=>[V]),_:1})]),_:1}),t(i(g),{class:"pt-5 flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[B,J,R]),_:1}),t(i(r),null,{default:a(()=>[A]),_:1}),t(i(r),null,{default:a(()=>[z]),_:1}),t(i(r),null,{default:a(()=>[n("Disabled")]),_:1})]),_:1})]),_:1}),i(c).includes("code1")?(u(),b(f,{key:0},{default:a(()=>[X]),_:1})):p("",!0)]),e("div",K,[e("div",O,[Q,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[1]||(d[1]=s=>i(m)("code2"))},[e("span",Y,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap mt-3"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] ltr:mr-2 rtl:ml-2 block rounded hover:bg-primary hover:text-white !outline-none transition duration-300",{"bg-primary text-white":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] ltr:mr-2 rtl:ml-2 block rounded hover:bg-primary hover:text-white !outline-none transition duration-300",{"bg-primary text-white":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] ltr:mr-2 rtl:ml-2 block rounded hover:bg-primary hover:text-white !outline-none transition duration-300",{"bg-primary text-white":s}])},"Contact",2)]),_:1}),t(i(o),{as:"template",disabled:""},{default:a(()=>[Z]),_:1})]),_:1}),t(i(g),{class:"pt-5 flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[ee,te,ie]),_:1}),t(i(r),null,{default:a(()=>[ae]),_:1}),t(i(r),null,{default:a(()=>[se]),_:1}),t(i(r),null,{default:a(()=>[n("Disabled")]),_:1})]),_:1})]),_:1}),i(c).includes("code2")?(u(),b(f,{key:0},{default:a(()=>[oe]),_:1})):p("",!0)]),e("div",re,[e("div",le,[ne,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[2]||(d[2]=s=>i(m)("code3"))},[e("span",de,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300",{"!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black":s}])},[t(k,{class:"ltr:mr-2 rtl:ml-2"}),n(" Home ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300",{"!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black":s}])},[t(w,{class:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),n(" Profile ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300",{"!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black":s}])},[t(q,{class:"ltr:mr-2 rtl:ml-2"}),n(" Contact ")],2)]),_:1}),t(i(o),{as:"template",disabled:""},{default:a(()=>[e("a",ue,[t(y,{class:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),n(" Disabled ")])]),_:1})]),_:1}),t(i(g),{class:"pt-5 flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[ce,me,be]),_:1}),t(i(r),null,{default:a(()=>[pe]),_:1}),t(i(r),null,{default:a(()=>[fe]),_:1}),t(i(r),null,{default:a(()=>[n("Disabled")]),_:1})]),_:1})]),_:1}),i(c).includes("code3")?(u(),b(f,{key:0},{default:a(()=>[he]),_:1})):p("",!0)]),e("div",ve,[e("div",xe,[ge,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[3]||(d[3]=s=>i(m)("code4"))},[e("span",_e,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap mt-3 gap-2"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] flex items-center rounded hover:bg-warning hover:text-white !outline-none transition duration-300",{"bg-warning text-white":s}])},[t(k,{class:"ltr:mr-2 rtl:ml-2"}),n(" Home ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] flex items-center rounded hover:bg-warning hover:text-white !outline-none transition duration-300",{"bg-warning text-white":s}])},[t(w,{class:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),n(" Profile ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] flex items-center rounded hover:bg-warning hover:text-white !outline-none transition duration-300",{"bg-warning text-white":s}])},[t(q,{class:"ltr:mr-2 rtl:ml-2"}),n(" Contact ")],2)]),_:1}),t(i(o),{as:"template",disabled:""},{default:a(()=>[e("a",we,[t(y,{class:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),n(" Disabled ")])]),_:1})]),_:1}),t(i(g),{class:"pt-5 flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[ke,qe,Te]),_:1}),t(i(r),null,{default:a(()=>[ye]),_:1}),t(i(r),null,{default:a(()=>[je]),_:1}),t(i(r),null,{default:a(()=>[n("Disabled")]),_:1})]),_:1})]),_:1}),i(c).includes("code4")?(u(),b(f,{key:0},{default:a(()=>[Pe]),_:1})):p("",!0)]),e("div",Le,[e("div",Ce,[Ue,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[4]||(d[4]=s=>i(m)("code5"))},[e("span",De,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5 flex flex-col sm:flex-row"},{default:a(()=>[e("div",Ge,[t(i(x),{class:"w-24 m-auto text-center"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-white-light dark:border-[#191e3a] hover:bg-success hover:text-white !outline-none transition duration-300",{"bg-success text-white":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-white-light dark:border-[#191e3a] hover:bg-success hover:text-white !outline-none transition duration-300",{"bg-success text-white":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-white-light dark:border-[#191e3a] hover:bg-success hover:text-white !outline-none transition duration-300",{"bg-success text-white":s}])},"Messages",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-white-light dark:border-[#191e3a] hover:bg-success hover:text-white !outline-none transition duration-300",{"bg-success text-white":s}])},"Settings",2)]),_:1})]),_:1})]),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[Me,Ne,We]),_:1}),t(i(r),null,{default:a(()=>[Ee]),_:1}),t(i(r),null,{default:a(()=>[Fe]),_:1}),t(i(r),null,{default:a(()=>[He]),_:1})]),_:1})]),_:1}),i(c).includes("code5")?(u(),b(f,{key:0},{default:a(()=>[$e]),_:1})):p("",!0)]),e("div",Se,[e("div",Ie,[Ve,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[5]||(d[5]=s=>i(m)("code6"))},[e("span",Be,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap mt-3 border-b border-white-light dark:border-[#191e3a]"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300",{"!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black":s}])},[t(k,{class:"ltr:mr-2 rtl:ml-2"}),n(" Home ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300",{"!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black":s}])},[t(w,{class:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),n(" Profile ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] flex items-center border border-transparent hover:text-danger !outline-none transition duration-300",{"!border-white-light !border-b-white text-danger dark:!border-[#191e3a] dark:!border-b-black":s}])},[t(q,{class:"ltr:mr-2 rtl:ml-2"}),n(" Contact ")],2)]),_:1})]),_:1}),t(i(g),{class:"p-4 flex-1 text-sm border border-white-light border-t-0 dark:border-[#191e3a]"},{default:a(()=>[t(i(r),{class:"active"},{default:a(()=>[Je,Re,Ae]),_:1}),t(i(r),null,{default:a(()=>[ze]),_:1}),t(i(r),null,{default:a(()=>[Xe]),_:1})]),_:1})]),_:1}),i(c).includes("code6")?(u(),b(f,{key:0},{default:a(()=>[Ke]),_:1})):p("",!0)]),e("div",Oe,[e("div",Qe,[Ye,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[6]||(d[6]=s=>i(m)("code7"))},[e("span",Ze,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap mt-3 mb-5"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex items-center bg-[#f6f7f8] dark:bg-transparent border-transparent border-t-2 dark:hover:bg-[#191e3a] hover:border-secondary hover:text-secondary !outline-none transition duration-300",{"!border-secondary text-secondary dark:bg-[#191e3a]":s}])},[t(k,{class:"ltr:mr-2 rtl:ml-2"}),n(" Home ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex items-center bg-[#f6f7f8] dark:bg-transparent dark:hover:bg-[#191e3a] border-transparent border-t-2 hover:border-secondary hover:text-secondary !outline-none transition duration-300",{"!border-secondary text-secondary dark:bg-[#191e3a]":s}])},[t(w,{class:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),n(" Profile ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex items-center bg-[#f6f7f8] dark:bg-transparent dark:hover:bg-[#191e3a] border-transparent border-t-2 hover:border-secondary hover:text-secondary !outline-none transition duration-300",{"!border-secondary text-secondary dark:bg-[#191e3a]":s}])},[t(q,{class:"ltr:mr-2 rtl:ml-2"}),n(" Contact ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex items-center bg-[#f6f7f8] dark:bg-transparent dark:hover:bg-[#191e3a] border-transparent border-t-2 hover:border-secondary hover:text-secondary !outline-none transition duration-300",{"!border-secondary text-secondary dark:bg-[#191e3a]":s}])},[t(T,{class:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),n(" Settings ")],2)]),_:1})]),_:1}),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[et,tt,it]),_:1}),t(i(r),null,{default:a(()=>[at]),_:1}),t(i(r),null,{default:a(()=>[st]),_:1}),t(i(r),null,{default:a(()=>[ot]),_:1})]),_:1})]),_:1}),i(c).includes("code7")?(u(),b(f,{key:0},{default:a(()=>[rt]),_:1})):p("",!0)]),e("div",lt,[e("div",nt,[dt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[7]||(d[7]=s=>i(m)("code8"))},[e("span",ut,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap mt-3 mb-5 border-b border-white-light dark:border-[#191e3a]"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-5 py-3 -mb-[1px] flex items-center hover:border-b border-transparent hover:!border-secondary hover:text-secondary !outline-none transition duration-300",{"border-b !border-secondary text-secondary":s}])},[t(k,{class:"ltr:mr-2 rtl:ml-2"}),n(" Home ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-5 py-3 -mb-[1px] flex items-center hover:border-b border-transparent hover:!border-secondary hover:text-secondary !outline-none transition duration-300",{"border-b !border-secondary text-secondary":s}])},[t(w,{class:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),n(" Profile ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-5 py-3 -mb-[1px] flex items-center hover:border-b border-transparent hover:!border-secondary hover:text-secondary !outline-none transition duration-300",{"border-b !border-secondary text-secondary":s}])},[t(q,{class:"ltr:mr-2 rtl:ml-2"}),n(" Contact ")],2)]),_:1})]),_:1}),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[ct,mt,bt]),_:1}),t(i(r),null,{default:a(()=>[pt]),_:1}),t(i(r),null,{default:a(()=>[ft]),_:1})]),_:1})]),_:1}),i(c).includes("code8")?(u(),b(f,{key:0},{default:a(()=>[ht]),_:1})):p("",!0)]),e("div",vt,[e("div",xt,[gt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[8]||(d[8]=s=>i(m)("code9"))},[e("span",_t,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap mt-3 mb-5 border-b border-white-light dark:border-[#191e3a]"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-5 py-3 -mb-[1px] flex items-center relative before:transition-all before:duration-700 before:absolute hover:text-secondary before:bottom-0 before:w-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:bg-secondary hover:before:w-full !outline-none transition duration-300",{"before:!w-full text-secondary":s}])},[t(k,{class:"ltr:mr-2 rtl:ml-2"}),n(" Home ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-5 py-3 -mb-[1px] flex items-center relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:bg-secondary hover:before:w-full !outline-none transition duration-300",{"before:!w-full text-secondary":s}])},[t(w,{class:"w-5 h-5 ltr:mr-2 rtl:ml-2"}),n(" Profile ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-5 py-3 -mb-[1px] flex items-center relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-0 before:bottom-0 before:left-0 before:right-0 before:m-auto before:h-[1px] before:bg-secondary hover:before:w-full !outline-none transition duration-300",{"before:!w-full text-secondary":s}])},[t(q,{class:"ltr:mr-2 rtl:ml-2"}),n(" Contact ")],2)]),_:1})]),_:1}),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[wt,kt,qt]),_:1}),t(i(r),null,{default:a(()=>[Tt]),_:1}),t(i(r),null,{default:a(()=>[yt]),_:1})]),_:1})]),_:1}),i(c).includes("code9")?(u(),b(f,{key:0},{default:a(()=>[jt]),_:1})):p("",!0)]),e("div",Pt,[e("div",Lt,[Ct,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[9]||(d[9]=s=>i(m)("code10"))},[e("span",Ut,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5 flex flex-col sm:flex-row"},{default:a(()=>[e("div",Dt,[t(i(x),{class:"w-24 m-auto text-center font-semibold"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-4 -mb-[1px] block ltr:border-r rtl:border-l border-white-light dark:border-[#191e3a] relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-[1px] before:bottom-0 before:top-0 ltr:before:-right-[1px] rtl:before:-left-[1px] before:m-auto before:h-0 before:bg-secondary hover:before:h-[80%] !outline-none transition duration-300",{"text-secondary before:!h-[80%]":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-4 -mb-[1px] block ltr:border-r rtl:border-l border-white-light dark:border-[#191e3a] relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-[1px] before:bottom-0 before:top-0 ltr:before:-right-[1px] rtl:before:-left-[1px] before:m-auto before:h-0 before:bg-secondary hover:before:h-[80%] !outline-none transition duration-300",{"text-secondary before:!h-[80%]":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-4 -mb-[1px] block ltr:border-r rtl:border-l border-white-light dark:border-[#191e3a] relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-[1px] before:bottom-0 before:top-0 ltr:before:-right-[1px] rtl:before:-left-[1px] before:m-auto before:h-0 before:bg-secondary hover:before:h-[80%] !outline-none transition duration-300",{"text-secondary before:!h-[80%]":s}])},"Messages",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-4 -mb-[1px] block ltr:border-r rtl:border-l border-white-light dark:border-[#191e3a] relative before:transition-all before:duration-700 hover:text-secondary before:absolute before:w-[1px] before:bottom-0 before:top-0 ltr:before:-right-[1px] rtl:before:-left-[1px] before:m-auto before:h-0 before:bg-secondary hover:before:h-[80%] !outline-none transition duration-300",{"text-secondary before:!h-[80%]":s}])},"Settings",2)]),_:1})]),_:1})]),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[Gt,Mt,Nt]),_:1}),t(i(r),null,{default:a(()=>[Wt]),_:1}),t(i(r),null,{default:a(()=>[Et]),_:1}),t(i(r),null,{default:a(()=>[Ft]),_:1})]),_:1})]),_:1}),i(c).includes("code10")?(u(),b(f,{key:0},{default:a(()=>[Ht]),_:1})):p("",!0)]),e("div",$t,[e("div",St,[It,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[10]||(d[10]=s=>i(m)("code11"))},[e("span",Vt,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap justify-between mt-3 border-b border-white-light dark:border-[#191e3a] text-center"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["flex-auto p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300",{"!border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["flex-auto p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300",{"!border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["flex-auto p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300",{"!border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black":s}])},"Contact",2)]),_:1})]),_:1}),t(i(g),{class:"pt-5 flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[Bt,Jt,Rt]),_:1}),t(i(r),null,{default:a(()=>[At]),_:1}),t(i(r),null,{default:a(()=>[zt]),_:1})]),_:1})]),_:1}),i(c).includes("code11")?(u(),b(f,{key:0},{default:a(()=>[Xt]),_:1})):p("",!0)]),e("div",Kt,[e("div",Ot,[Qt,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[11]||(d[11]=s=>i(m)("code12"))},[e("span",Yt,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap justify-between mt-3 space-x-2 rtl:space-x-reverse text-center"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["flex-auto p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300",{"bg-info text-white":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["flex-auto p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300",{"bg-info text-white":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["flex-auto p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300",{"bg-info text-white":s}])},"Contact",2)]),_:1})]),_:1}),t(i(g),{class:"pt-5 flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[Zt,ei,ti]),_:1}),t(i(r),null,{default:a(()=>[ii]),_:1}),t(i(r),null,{default:a(()=>[ai]),_:1})]),_:1})]),_:1}),i(c).includes("code12")?(u(),b(f,{key:0},{default:a(()=>[si]),_:1})):p("",!0)]),e("div",oi,[e("div",ri,[li,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[12]||(d[12]=s=>i(m)("code13"))},[e("span",ni,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap justify-center mt-3 border-b border-white-light dark:border-[#191e3a]"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300",{"text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300",{"text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300",{"text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black":s}])},"Contact",2)]),_:1})]),_:1}),t(i(g),{class:"pt-5 flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[di,ui,ci]),_:1}),t(i(r),null,{default:a(()=>[mi]),_:1}),t(i(r),null,{default:a(()=>[bi]),_:1})]),_:1})]),_:1}),i(c).includes("code13")?(u(),b(f,{key:0},{default:a(()=>[pi]),_:1})):p("",!0)]),e("div",fi,[e("div",hi,[vi,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[13]||(d[13]=s=>i(m)("code14"))},[e("span",xi,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap justify-center mt-3 space-x-2 rtl:space-x-reverse"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300",{"bg-info text-white":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300",{"bg-info text-white":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300",{"bg-info text-white":s}])},"Contact",2)]),_:1})]),_:1}),t(i(g),{class:"pt-5 flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[gi,_i,wi]),_:1}),t(i(r),null,{default:a(()=>[ki]),_:1}),t(i(r),null,{default:a(()=>[qi]),_:1})]),_:1})]),_:1}),i(c).includes("code14")?(u(),b(f,{key:0},{default:a(()=>[Ti]),_:1})):p("",!0)]),e("div",yi,[e("div",ji,[Pi,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[14]||(d[14]=s=>i(m)("code15"))},[e("span",Li,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap justify-end mt-3 border-b border-white-light dark:border-[#191e3a]"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300",{"text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300",{"text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block border border-transparent hover:border-white-light hover:border-b-white dark:hover:border-[#191e3a] dark:hover:border-b-black !outline-none transition duration-300",{"text-primary !border-white-light !border-b-white dark:!border-[#191e3a] dark:!border-b-black":s}])},"Contact",2)]),_:1})]),_:1}),t(i(g),{class:"pt-5 flex-1 text-sm"},{default:a(()=>[t(i(r),{class:"active"},{default:a(()=>[Ci,Ui,Di]),_:1}),t(i(r),null,{default:a(()=>[Gi]),_:1}),t(i(r),null,{default:a(()=>[Mi]),_:1})]),_:1})]),_:1}),i(c).includes("code15")?(u(),b(f,{key:0},{default:a(()=>[Ni]),_:1})):p("",!0)]),e("div",Wi,[e("div",Ei,[Fi,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[15]||(d[15]=s=>i(m)("code16"))},[e("span",Hi,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap justify-end mt-3 space-x-2 rtl:space-x-reverse"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300",{"bg-info text-white":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300",{"bg-info text-white":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 -mb-[1px] block hover:bg-info rounded hover:text-white !outline-none transition duration-300",{"bg-info text-white":s}])},"Contact",2)]),_:1})]),_:1}),t(i(g),{class:"pt-5 flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[$i,Si,Ii]),_:1}),t(i(r),null,{default:a(()=>[Vi]),_:1}),t(i(r),null,{default:a(()=>[Bi]),_:1})]),_:1})]),_:1}),i(c).includes("code16")?(u(),b(f,{key:0},{default:a(()=>[Ji]),_:1})):p("",!0)]),e("div",Ri,[e("div",Ai,[zi,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[16]||(d[16]=s=>i(m)("code17"))},[e("span",Xi,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"grid grid-cols-4 gap-2 sm:flex sm:flex-wrap sm:justify-center mt-3 mb-5 sm:space-x-3 rtl:space-x-reverse"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] !outline-none transition duration-300",{"!bg-success text-white":s}])},[t(k,{class:"mb-1"}),n(" Home ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] !outline-none transition duration-300",{"!bg-success text-white":s}])},[t(w,{class:"w-5 h-5 mb-1"}),n(" Profile ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] !outline-none transition duration-300",{"!bg-success text-white":s}])},[t(q,{class:"mb-1"}),n(" Contact ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] !outline-none transition duration-300",{"!bg-success text-white":s}])},[t(T,{class:"w-5 h-5 mb-1"}),n(" Settings ")],2)]),_:1})]),_:1}),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[Ki,Oi,Qi]),_:1}),t(i(r),null,{default:a(()=>[Yi]),_:1}),t(i(r),null,{default:a(()=>[Zi]),_:1}),t(i(r),null,{default:a(()=>[ea]),_:1})]),_:1})]),_:1}),i(c).includes("code17")?(u(),b(f,{key:0},{default:a(()=>[ta]),_:1})):p("",!0)]),e("div",ia,[e("div",aa,[sa,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[17]||(d[17]=s=>i(m)("code18"))},[e("span",oa,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5"},{default:a(()=>[t(i(x),{class:"flex flex-wrap justify-center mt-3 mb-5 space-x-3 rtl:space-x-reverse"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none",{"!bg-info text-white":s}])},[t(k,{class:"w-6 h-6"})],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none",{"!bg-info text-white":s}])},[t(w,{class:"w-6 h-6"})],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none",{"!bg-info text-white":s}])},[t(q,{class:"w-6 h-6"})],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none",{"!bg-info text-white":s}])},[t(T)],2)]),_:1})]),_:1}),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[ra,la,na]),_:1}),t(i(r),null,{default:a(()=>[da]),_:1}),t(i(r),null,{default:a(()=>[ua]),_:1}),t(i(r),null,{default:a(()=>[ca]),_:1})]),_:1})]),_:1}),i(c).includes("code18")?(u(),b(f,{key:0},{default:a(()=>[ma]),_:1})):p("",!0)]),e("div",ba,[e("div",pa,[fa,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[18]||(d[18]=s=>i(m)("code19"))},[e("span",ha,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5 flex flex-col sm:flex-row"},{default:a(()=>[e("div",va,[t(i(x),{class:"flex flex-col justify-center m-auto space-y-3 w-24"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},[t(k,{class:"mb-1"}),n(" Home ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},[t(w,{class:"w-5 h-5 mb-1"}),n(" Profile ")],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-7 py-3 flex flex-col items-center justify-center rounded-lg bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-success hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},[t(q,{class:"mb-1"}),n(" Contact ")],2)]),_:1})]),_:1})]),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[xa,ga,_a]),_:1}),t(i(r),null,{default:a(()=>[wa]),_:1}),t(i(r),null,{default:a(()=>[ka]),_:1})]),_:1})]),_:1}),i(c).includes("code19")?(u(),b(f,{key:0},{default:a(()=>[qa]),_:1})):p("",!0)]),e("div",Ta,[e("div",ya,[ja,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[19]||(d[19]=s=>i(m)("code20"))},[e("span",Pa,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5 flex flex-col sm:flex-row"},{default:a(()=>[e("div",La,[t(i(x),{class:"flex flex-col justify-center items-center space-y-3"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none",{"!bg-info text-white":s}])},[t(k,{class:"w-6 h-6"})],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none",{"!bg-info text-white":s}])},[t(w,{class:"w-6 h-6"})],2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["w-16 h-16 flex flex-col items-center justify-center rounded-full bg-[#f1f2f3] dark:bg-[#191e3a] hover:!bg-info hover:text-white hover:shadow-[0_5px_15px_0_rgba(0,0,0,0.30)] transition-all duration-300 !outline-none",{"!bg-info text-white":s}])},[t(q,{class:"w-6 h-6"})],2)]),_:1})]),_:1})]),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[Ca,Ua,Da]),_:1}),t(i(r),null,{default:a(()=>[Ga]),_:1}),t(i(r),null,{default:a(()=>[Ma]),_:1})]),_:1})]),_:1}),i(c).includes("code20")?(u(),b(f,{key:0},{default:a(()=>[Na]),_:1})):p("",!0)]),e("div",Wa,[e("div",Ea,[Fa,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[20]||(d[20]=s=>i(m)("code21"))},[e("span",Ha,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5 flex flex-col sm:flex-row"},{default:a(()=>[t(i(x),{class:"ltr:pr-4 rtl:pl-4 space-y-2 sm:flex-[0_0_20%] mb-5 sm:mb-0"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},"Messages",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},"Settings",2)]),_:1})]),_:1}),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[$a,Sa,Ia]),_:1}),t(i(r),null,{default:a(()=>[Va]),_:1}),t(i(r),null,{default:a(()=>[Ba]),_:1}),t(i(r),null,{default:a(()=>[Ja]),_:1})]),_:1})]),_:1}),i(c).includes("code21")?(u(),b(f,{key:0},{default:a(()=>[Ra]),_:1})):p("",!0)]),e("div",Aa,[e("div",za,[Xa,e("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:d[21]||(d[21]=s=>i(m)("code22"))},[e("span",Ka,[t(h,{class:"me-2"}),n(" Code ")])])]),t(i(v),{as:"div",class:"mb-5 flex flex-col sm:flex-row sm:gap-4"},{default:a(()=>[t(i(x),{class:"space-y-2 sm:flex-[0_0_20%] mb-5 sm:mb-0 sm:order-1"},{default:a(()=>[t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},"Home",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},"Profile",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},"Messages",2)]),_:1}),t(i(o),{as:"template"},{default:a(({selected:s})=>[e("a",{href:"javascript:;",class:l(["p-3.5 py-2 block rounded-md hover:bg-success hover:text-white transition-all duration-300 !outline-none",{"!bg-success text-white":s}])},"Settings",2)]),_:1})]),_:1}),t(i(g),{class:"flex-1 text-sm"},{default:a(()=>[t(i(r),null,{default:a(()=>[Oa,Qa,Ya]),_:1}),t(i(r),null,{default:a(()=>[Za]),_:1}),t(i(r),null,{default:a(()=>[es]),_:1}),t(i(r),null,{default:a(()=>[ts]),_:1})]),_:1})]),_:1}),i(c).includes("code22")?(u(),b(f,{key:0},{default:a(()=>[is]),_:1})):p("",!0)])])])]))}});export{fs as default};
