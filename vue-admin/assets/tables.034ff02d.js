import{c as A,_ as g}from"./codePreview.b8512f6b.js";import{d as I,u as E,a as L,r as $,o as s,b as l,e as t,g as n,f as a,j as r,F as y,z as x,X as b,w as d,D as _,k as J,p as D,U as z,B as o,y as k,G as p,ak as C,ad as T,q as M,M as V}from"./index.ddf2ada6.js";import{I as v}from"./icon-code.a018a24c.js";import{I as w}from"./icon-trash-lines.70f797dc.js";import{_ as j}from"./icon-pencil.vue_vue_type_script_setup_true_lang.cb68dcd0.js";import{I as B}from"./icon-circle-check.5c7b7408.js";const F={class:"grid grid-cols-1 xl:grid-cols-2 gap-6"},H={class:"panel"},O={class:"flex items-center justify-between mb-5"},K=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Simple Table",-1),R={class:"flex items-center"},X={class:"mb-5"},q={class:"table-responsive"},G=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Date"),t("th",null,"Sale"),t("th",{class:"text-center"},"Status"),t("th",{class:"text-center"},"Action")])],-1),U={class:"whitespace-nowrap"},Y={class:"text-center"},Q={type:"button"},W=t("pre",null,`<!-- basic table -->
<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Sale</th>
        <th class="text-center">Status</th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="data in tableData" :key="data.id">
        <tr>
          <td class="whitespace-nowrap">{{ data.name }}</td>
          <td>{{ data.date }}</td>
          <td>{{ data.sale }}</td>
          <td
            class="text-center whitespace-nowrap"
            :class="{
              'text-success': data.status === 'Complete',
              'text-secondary': data.status === 'Pending',
              'text-info': data.status === 'In Progress',
              'text-danger': data.status === 'Canceled',
            }"
          >
            {{ data.status }}
          </td>
          <td class="text-center">
            <button type="button" v-tippy:delete>
              <svg> ... </svg>
            </button>
            <tippy target="delete">Delete</tippy>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
const tableData = ref([
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
  .....
]);
<\/script>
`,-1),Z={class:"panel"},tt={class:"flex items-center justify-between mb-5"},et=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Hover Table",-1),st={class:"flex items-center"},at={class:"mb-5"},ot={class:"table-responsive"},lt={class:"table-hover"},dt=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Date"),t("th",null,"Sale"),t("th",{class:"text-center"},"Status"),t("th",{class:"text-center"},"Action")])],-1),nt={class:"whitespace-nowrap"},rt={class:"text-center"},it={type:"button"},ct=t("pre",null,`<!-- hover table -->
<div class="table-responsive">
  <table class="table-hover">
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Sale</th>
        <th class="text-center">Status</th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="data in tableData" :key="data.id">
        <tr>
          <td class="whitespace-nowrap">{{ data.name }}</td>
          <td>{{ data.date }}</td>
          <td>{{ data.sale }}</td>
          <td
            class="text-center whitespace-nowrap"
            :class="{
              'text-success': data.status === 'Complete',
              'text-secondary': data.status === 'Pending',
              'text-info': data.status === 'In Progress',
              'text-danger': data.status === 'Canceled',
            }"
          >
            {{ data.status }}
          </td>
          <td class="text-center">
            <button type="button" v-tippy:delete>
              <svg> ... </svg>
            </button>
            <tippy target="delete">Delete</tippy>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
const tableData = ref([
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
  .....
]);
<\/script>
`,-1),ht={class:"panel"},pt={class:"flex items-center justify-between mb-5"},ut=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Striped Table",-1),mt={class:"flex items-center"},gt={class:"mb-5"},bt={class:"table-responsive"},_t={class:"table-striped"},vt=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Date"),t("th",null,"Sale"),t("th")])],-1),ft={class:"whitespace-nowrap"},yt={class:"text-center"},xt={type:"button"},kt=t("pre",null,`<!-- striped table -->
<div class="table-responsive">
  <table class="table-striped">
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Sale</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="data in tableData" :key="data.id">
        <tr>
          <td class="whitespace-nowrap">{{ data.name }}</td>
          <td>{{ data.date }}</td>
          <td>{{ data.sale }}</td>
          <td class="text-center">
            <button type="button" v-tippy:delete>
              <svg> ... </svg>
            </button>
            <tippy target="delete">Delete</tippy>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
const tableData = ref([
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
  .....
]);
<\/script>
`,-1),wt={class:"panel"},Dt={class:"flex items-center justify-between mb-5"},Ct=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Table Light",-1),jt={class:"flex items-center"},Pt={class:"mb-5"},St={class:"table-responsive"},Nt={class:"table-hover"},At=t("thead",null,[t("tr",{class:"!bg-transparent dark:!bg-transparent"},[t("th",null,"#"),t("th",null,"Name"),t("th",null,"Email"),t("th",null,"Created At"),t("th",{class:"text-center"})])],-1),It={class:"whitespace-nowrap"},Et={class:"text-center"},Lt={type:"button"},$t=t("pre",null,`<!-- table light -->
<div class="table-responsive">
  <table class="table-hover">
    <thead>
      <tr class="!bg-transparent dark:!bg-transparent">
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Created At</th>
        <th class="text-center"></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="data in tableData" :key="data.id">
        <tr>
          <td>{{ data.id }}</td>
          <td class="whitespace-nowrap">{{ data.name }}</td>
          <td>{{ data.email }}</td>
          <td>{{ data.date }}</td>
          <td class="text-center">
            <button type="button" v-tippy:delete>
              <svg> ... </svg>
            </button>
            <tippy target="delete">Delete</tippy>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
const tableData = ref([
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
  .....
]);
<\/script>
`,-1),Jt={class:"panel"},zt={class:"flex items-center justify-between mb-5"},Tt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Captions",-1),Mt={class:"flex items-center"},Vt={class:"mb-5"},Bt={class:"table-responsive"},Ft=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"Name"),t("th",null,"Email"),t("th",null,"Status"),t("th",{class:"text-center"},"Register")])],-1),Ht={class:"whitespace-nowrap"},Ot={class:"text-center"},Kt=t("pre",null,`<!-- caption -->
<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Status</th>
        <th class="text-center">Register</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="data in tableData" :key="data.id">
        <tr>
          <td>{{ data.id }}</td>
          <td class="whitespace-nowrap">{{ data.name }}</td>
          <td>{{ data.email }}</td>
          <td>
            <span
              class="badge whitespace-nowrap"
              :class="{
                'badge-outline-primary': data.status === 'Complete',
                'badge-outline-secondary': data.status === 'Pending',
                'badge-outline-info': data.status === 'In Progress',
                'badge-outline-danger': data.status === 'Canceled',
              }"
              >{{ data.status }}</span
            >
          </td>
          <td class="text-center">{{ data.register }}</td>
        </tr>
      </template>
    </tbody>
  </table>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
const tableData = ref([
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
  .....
]);
<\/script>
`,-1),Rt={class:"panel"},Xt={class:"flex items-center justify-between mb-5"},qt=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Progress Table",-1),Gt={class:"flex items-center"},Ut={class:"mb-5"},Yt={class:"table-responsive"},Qt=t("thead",null,[t("tr",null,[t("th",null,"#"),t("th",null,"Name"),t("th",null,"Progress"),t("th",null,"Sales"),t("th",{class:"text-center"},"Action")])],-1),Wt={class:"whitespace-nowrap"},Zt={class:"h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full"},te={class:"p-3 border-b border-[#ebedf2] dark:border-[#191e3a] text-center"},ee={class:"flex items-center"},se={type:"button"},ae={type:"button"},oe=t("pre",null,`<!-- progress table -->
<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Progress</th>
        <th>Sales</th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="data in tableData" :key="data.id">
        <tr>
          <td>{{ data.id }}</td>
          <td class="whitespace-nowrap">{{ data.name }}</td>
          <td>
            <div class="h-1.5 bg-[#ebedf2] dark:bg-dark/40 rounded-full flex w-full">
              <div
                class="h-1.5 rounded-full rounded-bl-full text-center text-white text-xs"
                :class="{
                  'bg-success': data.status === 'Complete',
                  'bg-secondary': data.status === 'Pending',
                  'bg-info': data.status === 'In Progress',
                  'bg-danger': data.status === 'Canceled',
                }"
                :style="\`width: \${data.progress}\`"
              ></div>
            </div>
          </td>
          <td
            class="whitespace-nowrap"
            :class="{
              'text-success': data.status === 'Complete',
              'text-secondary': data.status === 'Pending',
              'text-info': data.status === 'In Progress',
              'text-danger': data.status === 'Canceled',
            }"
          >
            {{ data.progress }}
          </td>
          <td class="p-3 border-b border-[#ebedf2] dark:border-[#191e3a] text-center text-white-dark">
            <div class="flex items-center">
              <div>
                <button type="button" v-tippy:edit>
                  <svg> ... </svg>
                </button>
                <tippy target="edit">Edit</tippy>
              </div>
              <div>
                <button type="button" v-tippy:delete>
                  <svg> ... </svg>
                </button>
                <tippy target="delete">Delete</tippy>
              </div>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
const tableData = ref([
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
  .....
]);
<\/script>
`,-1),le={class:"panel"},de={class:"flex items-center justify-between mb-5"},ne=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Contextual",-1),re={class:"flex items-center"},ie=J('<div class="mb-5"><div class="table-responsive"><table><thead><tr><th>#</th><th>First Name</th><th>Last Name</th><th>Email</th></tr></thead><tbody><tr class="bg-dark-dark-light border-dark-dark-light"><td>1</td><td>John</td><td>Doe</td><td>johndoe@yahoo.com</td></tr><tr class="bg-primary/20 border-primary/20"><td>2</td><td>Andy</td><td>King</td><td>andyking@gmail.com</td></tr><tr class="bg-secondary/20 border-secondary/20"><td>3</td><td>Lisa</td><td>Doe</td><td>lisadoe@yahoo.com</td></tr><tr class="bg-success/20 border-success/20"><td>4</td><td>Vincent</td><td>Carpenter</td><td>vinnyc@yahoo.com</td></tr><tr class="bg-dark-dark-light border-dark-dark-light"><td>5</td><td>Amy</td><td>Diaz</td><td>amydiaz@yahoo.com</td></tr><tr class="bg-danger/20 border-danger/20"><td>6</td><td>Nia</td><td>Hillyer</td><td>niahill@gmail.com</td></tr><tr class="bg-info/20 border-info/20"><td>7</td><td>Marry</td><td>McDonald</td><td>marryMcD@yahoo.com</td></tr><tr class="bg-warning/20 border-warning/20"><td>8</td><td>Shaun</td><td>Park</td><td>park@yahoo.com</td></tr></tbody></table></div></div>',1),ce=t("pre",null,`<!-- contextual -->
<div class="table-responsive">
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
      <tr class="bg-dark-dark-light border-dark-dark-light">
        <td>1</td>
        <td>John</td>
        <td>Doe</td>
        <td>johndoe@yahoo.com</td>
      </tr>
      <tr class="bg-primary/20 border-primary/20">
        <td>2</td>
        <td>Andy</td>
        <td>King</td>
        <td>andyking@gmail.com</td>
      </tr>
      <tr class="bg-secondary/20 border-secondary/20">
        <td>3</td>
        <td>Lisa</td>
        <td>Doe</td>
        <td>lisadoe@yahoo.com</td>
      </tr>
      <tr class="bg-success/20 border-success/20">
        <td>4</td>
        <td>Vincent</td>
        <td>Carpenter</td>
        <td>vinnyc@yahoo.com</td>
      </tr>
      <tr class="bg-dark-dark-light border-dark-dark-light">
        <td>5</td>
        <td>Amy</td>
        <td>Diaz</td>
        <td>amydiaz@yahoo.com</td>
      </tr>
      <tr class="bg-danger/20 border-danger/20">
        <td>6</td>
        <td>Nia</td>
        <td>Hillyer</td>
        <td>niahill@gmail.com</td>
      </tr>
      <tr class="bg-info/20 border-info/20">
        <td>7</td>
        <td>Marry</td>
        <td>McDonald</td>
        <td>marryMcD@yahoo.com</td>
      </tr>
      <tr class="bg-warning/20 border-warning/20">
        <td>8</td>
        <td>Shaun</td>
        <td>Park</td>
        <td>park@yahoo.com</td>
      </tr>
    </tbody>
  </table>
</div>
`,-1),he={class:"panel"},pe={class:"flex items-center justify-between mb-5"},ue=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Dropdown",-1),me={class:"flex items-center"},ge={class:"mb-5"},be={class:"table-responsive"},_e=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Date"),t("th",null,"Sale"),t("th",null,"Status"),t("th",{class:"text-center"},"Action")])],-1),ve={class:"whitespace-nowrap"},fe={class:"text-center"},ye={class:"dropdown"},xe={href:"javascript:;"},ke=["onClick"],we=t("li",null,[t("a",{href:"javascript:;"},"Download")],-1),De=t("li",null,[t("a",{href:"javascript:;"},"Share")],-1),Ce=t("li",null,[t("a",{href:"javascript:;"},"Edit")],-1),je=t("li",null,[t("a",{href:"javascript:;"},"Delete")],-1),Pe=[we,De,Ce,je],Se=t("pre",null,`<!-- dropdown -->
<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Date</th>
        <th>Sale</th>
        <th>Status</th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="data in tableData" :key="data.id">
        <tr>
          <td class="whitespace-nowrap">{{ data.name }}</td>
          <td>{{ data.date }}</td>
          <td>{{ data.sale }}</td>
          <td>
            <span
              class="badge whitespace-nowrap"
              :class="{
                'bg-primary': data.status === 'Complete',
                'bg-secondary': data.status === 'Pending',
                'bg-success': data.status === 'In Progress',
                'bg-danger': data.status === 'Canceled',
              }"
              >{{ data.status }}</span
            >
          </td>
          <td class="text-center">
            <div class="dropdown">
              <Popper :placement="store.rtlClass === 'rtl' ? 'bottom-start' : 'bottom-end'" offsetDistance="0" class="align-middle">
                <a href="javascript:;">
                  <svg> ... </svg>
                </a>
                <template #content="{ close }">
                  <ul @click="close()">
                    <li>
                      <a href="javascript:;">Download</a>
                    </li>
                    <li>
                      <a href="javascript:;">Share</a>
                    </li>
                    <li>
                      <a href="javascript:;">Edit</a>
                    </li>
                    <li>
                      <a href="javascript:;">Delete</a>
                    </li>
                  </ul>
                </template>
              </Popper>
            </div>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
const tableData = ref([
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
  .....
]);
<\/script>
`,-1),Ne={class:"panel"},Ae={class:"flex items-center justify-between mb-5"},Ie=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Table with Footer",-1),Ee={class:"flex items-center"},Le={class:"mb-5"},$e={class:"table-responsive"},Je=t("thead",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Position"),t("th",null,"Office"),t("th",{class:"!text-center"},"Action")])],-1),ze={class:"whitespace-nowrap"},Te={class:"text-center"},Me={class:"flex items-center justify-center gap-2"},Ve={href:"javascript:;"},Be={href:"javascript:;"},Fe=t("tfoot",null,[t("tr",null,[t("th",null,"Name"),t("th",null,"Position"),t("th",null,"Office"),t("th",{class:"!text-center"},"Action")])],-1),He=t("pre",null,`<!-- table with footer -->
<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th class="!text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="data in tableData" :key="data.id">
        <tr>
          <td class="whitespace-nowrap">{{ data.name }}</td>
          <td>{{ data.position }}</td>
          <td>{{ data.office }}</td>
          <td class="text-center">
            <ul class="flex items-center justify-center gap-2">
              <li>
                <a href="javascript:;" v-tippy:edit>
                  <svg> ... </svg>
                </a>
                <tippy target="edit">Edit</tippy>
              </li>
              <li>
                <a href="javascript:;" v-tippy:delete>
                  <svg> ... </svg>
                </a>
                <tippy target="delete">Delete</tippy>
              </li>
            </ul>
          </td>
        </tr>
      </template>
    </tbody>
    <tfoot>
      <tr>
        <th>Name</th>
        <th>Position</th>
        <th>Office</th>
        <th class="!text-center">Action</th>
      </tr>
    </tfoot>
  </table>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
const tableData = ref([
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
  .....
]);
<\/script>
`,-1),Oe={class:"panel"},Ke={class:"flex items-center justify-between mb-5"},Re=t("h5",{class:"font-semibold text-lg dark:text-white-light"},"Checkboxes",-1),Xe={class:"flex items-center"},qe={class:"mb-5"},Ge={class:"table-responsive"},Ue=t("thead",null,[t("tr",null,[t("th",null,[t("input",{type:"checkbox",class:"form-checkbox"})]),t("th",null,"Name"),t("th",null,"Date"),t("th",null,"Sale"),t("th",{class:"!text-center"},"Action")])],-1),Ye=t("td",null,[t("input",{type:"checkbox",class:"form-checkbox"})],-1),Qe={class:"whitespace-nowrap"},We={class:"text-center"},Ze={class:"flex items-center justify-center gap-2"},ts={href:"javascript:;"},es={href:"javascript:;"},ss={href:"javascript:;"},as=t("pre",null,`<!-- dropdown -->
<div class="table-responsive">
  <table>
    <thead>
      <tr>
        <th><input type="checkbox" class="form-checkbox" /></th>
        <th>Name</th>
        <th>Date</th>
        <th>Sale</th>
        <th class="!text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="data in tableData" :key="data.id">
        <tr>
          <td><input type="checkbox" class="form-checkbox" /></td>
          <td class="whitespace-nowrap">{{ data.name }}</td>
          <td>{{ data.date }}</td>
          <td>{{ data.sale }}</td>
          <td class="text-center">
            <ul class="flex items-center justify-center gap-2">
              <li>
                <a href="javascript:;" v-tippy:settings> <svg> ... </svg></a>
                <tippy target="settings">Edit</tippy>
              </li>
              <li>
                <a href="javascript:;" v-tippy:edit> <svg> ... </svg></a>
                <tippy target="edit">Edit</tippy>
              </li>
              <li>
                <a href="javascript:;" v-tippy:delete> <svg> ... </svg></a>
                <tippy target="delete">Edit</tippy>
              </li>
            </ul>
          </td>
        </tr>
      </template>
    </tbody>
  </table>
</div>

<!-- script -->
<script lang="ts" setup>
import { ref } from 'vue';
const tableData = ref([
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
  .....
]);
<\/script>
`,-1),us=I({__name:"tables",setup(os){E({title:"Tables"});const P=L(),{codeArr:u,toggleCode:m}=A(),f=$([{id:1,name:"John Doe",email:"johndoe@yahoo.com",date:"10/08/2020",sale:120,status:"Complete",register:"5 min ago",progress:"40%",position:"Developer",office:"London"},{id:2,name:"Shaun Park",email:"shaunpark@gmail.com",date:"11/08/2020",sale:400,status:"Pending",register:"11 min ago",progress:"23%",position:"Designer",office:"New York"},{id:3,name:"Alma Clarke",email:"alma@gmail.com",date:"12/02/2020",sale:310,status:"In Progress",register:"1 hour ago",progress:"80%",position:"Accountant",office:"Amazon"},{id:4,name:"Vincent Carpenter",email:"vincent@gmail.com",date:"13/08/2020",sale:100,status:"Canceled",register:"1 day ago",progress:"60%",position:"Data Scientist",office:"Canada"}]);return(ls,i)=>{const c=D("tippy"),S=D("Popper"),h=z("tippy");return s(),l("div",null,[t("div",F,[t("div",H,[t("div",O,[K,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[0]||(i[0]=e=>n(m)("code1"))},[t("span",R,[a(v,{class:"me-2"}),r(" Code ")])])]),t("div",X,[t("div",q,[t("table",null,[G,t("tbody",null,[(s(!0),l(y,null,x(f.value,e=>(s(),l("tr",{key:e.id},[t("td",U,o(e.name),1),t("td",null,o(e.date),1),t("td",null,o(e.sale),1),t("td",{class:k(["text-center whitespace-nowrap",{"text-success":e.status==="Complete","text-secondary":e.status==="Pending","text-info":e.status==="In Progress","text-danger":e.status==="Canceled"}])},o(e.status),3),t("td",Y,[p((s(),l("button",Q,[a(w,{class:"m-auto"})])),[[h,void 0,"delete"]]),a(c,{target:"delete"},{default:d(()=>[r("Delete")]),_:1})])]))),128))])])])]),n(u).includes("code1")?(s(),b(g,{key:0},{default:d(()=>[W]),_:1})):_("",!0)]),t("div",Z,[t("div",tt,[et,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[1]||(i[1]=e=>n(m)("code2"))},[t("span",st,[a(v,{class:"me-2"}),r(" Code")])])]),t("div",at,[t("div",ot,[t("table",lt,[dt,t("tbody",null,[(s(!0),l(y,null,x(f.value,e=>(s(),l("tr",{key:e.id},[t("td",nt,o(e.name),1),t("td",null,o(e.date),1),t("td",null,o(e.sale),1),t("td",{class:k(["text-center whitespace-nowrap",{"text-success":e.status==="Complete","text-secondary":e.status==="Pending","text-info":e.status==="In Progress","text-danger":e.status==="Canceled"}])},o(e.status),3),t("td",rt,[p((s(),l("button",it,[a(w,{class:"m-auto"})])),[[h,void 0,"delete"]]),a(c,{target:"delete"},{default:d(()=>[r("Delete")]),_:1})])]))),128))])])])]),n(u).includes("code2")?(s(),b(g,{key:0},{default:d(()=>[ct]),_:1})):_("",!0)]),t("div",ht,[t("div",pt,[ut,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[2]||(i[2]=e=>n(m)("code3"))},[t("span",mt,[a(v,{class:"me-2"}),r(" Code")])])]),t("div",gt,[t("div",bt,[t("table",_t,[vt,t("tbody",null,[(s(!0),l(y,null,x(f.value,e=>(s(),l("tr",{key:e.id},[t("td",ft,o(e.name),1),t("td",null,o(e.date),1),t("td",null,o(e.sale),1),t("td",yt,[p((s(),l("button",xt,[a(w,{class:"m-auto"})])),[[h,void 0,"delete"]]),a(c,{target:"delete"},{default:d(()=>[r("Delete")]),_:1})])]))),128))])])])]),n(u).includes("code3")?(s(),b(g,{key:0},{default:d(()=>[kt]),_:1})):_("",!0)]),t("div",wt,[t("div",Dt,[Ct,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[3]||(i[3]=e=>n(m)("code4"))},[t("span",jt,[a(v,{class:"me-2"}),r(" Code")])])]),t("div",Pt,[t("div",St,[t("table",Nt,[At,t("tbody",null,[(s(!0),l(y,null,x(f.value,e=>(s(),l("tr",{key:e.id},[t("td",null,o(e.id),1),t("td",It,o(e.name),1),t("td",null,o(e.email),1),t("td",null,o(e.date),1),t("td",Et,[p((s(),l("button",Lt,[a(C,{class:"m-auto"})])),[[h,void 0,"delete"]]),a(c,{target:"delete"},{default:d(()=>[r("Delete")]),_:1})])]))),128))])])])]),n(u).includes("code4")?(s(),b(g,{key:0},{default:d(()=>[$t]),_:1})):_("",!0)]),t("div",Jt,[t("div",zt,[Tt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[4]||(i[4]=e=>n(m)("code5"))},[t("span",Mt,[a(v,{class:"me-2"}),r(" Code")])])]),t("div",Vt,[t("div",Bt,[t("table",null,[Ft,t("tbody",null,[(s(!0),l(y,null,x(f.value,e=>(s(),l("tr",{key:e.id},[t("td",null,o(e.id),1),t("td",Ht,o(e.name),1),t("td",null,o(e.email),1),t("td",null,[t("span",{class:k(["badge whitespace-nowrap",{"badge-outline-primary":e.status==="Complete","badge-outline-secondary":e.status==="Pending","badge-outline-info":e.status==="In Progress","badge-outline-danger":e.status==="Canceled"}])},o(e.status),3)]),t("td",Ot,o(e.register),1)]))),128))])])])]),n(u).includes("code5")?(s(),b(g,{key:0},{default:d(()=>[Kt]),_:1})):_("",!0)]),t("div",Rt,[t("div",Xt,[qt,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[5]||(i[5]=e=>n(m)("code6"))},[t("span",Gt,[a(v,{class:"me-2"}),r(" Code")])])]),t("div",Ut,[t("div",Yt,[t("table",null,[Qt,t("tbody",null,[(s(!0),l(y,null,x(f.value,e=>(s(),l("tr",{key:e.id},[t("td",null,o(e.id),1),t("td",Wt,o(e.name),1),t("td",null,[t("div",Zt,[t("div",{class:k(["h-1.5 rounded-full rounded-bl-full text-center text-white text-xs",{"bg-success":e.status==="Complete","bg-secondary":e.status==="Pending","bg-info":e.status==="In Progress","bg-danger":e.status==="Canceled"}]),style:T(`width: ${e.progress}`)},null,6)])]),t("td",{class:k(["whitespace-nowrap",{"text-success":e.status==="Complete","text-secondary":e.status==="Pending","text-info":e.status==="In Progress","text-danger":e.status==="Canceled"}])},o(e.progress),3),t("td",te,[t("div",ee,[t("div",null,[p((s(),l("button",se,[a(j,{class:"ltr:mr-2 rtl:ml-2"})])),[[h,void 0,"edit"]]),a(c,{target:"edit"},{default:d(()=>[r("Edit")]),_:1})]),t("div",null,[p((s(),l("button",ae,[a(w)])),[[h,void 0,"delete"]]),a(c,{target:"delete"},{default:d(()=>[r("Delete")]),_:1})])])])]))),128))])])])]),n(u).includes("code6")?(s(),b(g,{key:0},{default:d(()=>[oe]),_:1})):_("",!0)]),t("div",le,[t("div",de,[ne,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[6]||(i[6]=e=>n(m)("code7"))},[t("span",re,[a(v,{class:"me-2"}),r(" Code")])])]),ie,n(u).includes("code7")?(s(),b(g,{key:0},{default:d(()=>[ce]),_:1})):_("",!0)]),t("div",he,[t("div",pe,[ue,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[7]||(i[7]=e=>n(m)("code8"))},[t("span",me,[a(v,{class:"me-2"}),r(" Code ")])])]),t("div",ge,[t("div",be,[t("table",null,[_e,t("tbody",null,[(s(!0),l(y,null,x(f.value,e=>(s(),l("tr",{key:e.id},[t("td",ve,o(e.name),1),t("td",null,o(e.date),1),t("td",null,o(e.sale),1),t("td",null,[t("span",{class:k(["badge whitespace-nowrap",{"bg-primary":e.status==="Complete","bg-secondary":e.status==="Pending","bg-success":e.status==="In Progress","bg-danger":e.status==="Canceled"}])},o(e.status),3)]),t("td",fe,[t("div",ye,[a(S,{placement:n(P).rtlClass==="rtl"?"bottom-start":"bottom-end",offsetDistance:"0",class:"align-middle"},{content:d(({close:N})=>[t("ul",{onClick:ds=>N()},Pe,8,ke)]),default:d(()=>[t("a",xe,[a(M,{class:"opacity-70 m-auto"})])]),_:1},8,["placement"])])])]))),128))])])])]),n(u).includes("code8")?(s(),b(g,{key:0},{default:d(()=>[Se]),_:1})):_("",!0)]),t("div",Ne,[t("div",Ae,[Ie,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[8]||(i[8]=e=>n(m)("code9"))},[t("span",Ee,[a(v,{class:"me-2"}),r(" Code")])])]),t("div",Le,[t("div",$e,[t("table",null,[Je,t("tbody",null,[(s(!0),l(y,null,x(f.value,e=>(s(),l("tr",{key:e.id},[t("td",ze,o(e.name),1),t("td",null,o(e.position),1),t("td",null,o(e.office),1),t("td",Te,[t("ul",Me,[t("li",null,[p((s(),l("a",Ve,[a(B,{class:"w-5 h-5 text-primary"})])),[[h,void 0,"edit"]]),a(c,{target:"edit"},{default:d(()=>[r("Edit")]),_:1})]),t("li",null,[p((s(),l("a",Be,[a(C,{class:"text-danger"})])),[[h,void 0,"delete"]]),a(c,{target:"delete"},{default:d(()=>[r("Delete")]),_:1})])])])]))),128))]),Fe])])]),n(u).includes("code9")?(s(),b(g,{key:0},{default:d(()=>[He]),_:1})):_("",!0)]),t("div",Oe,[t("div",Ke,[Re,t("a",{class:"font-semibold hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-600",href:"javascript:;",onClick:i[9]||(i[9]=e=>n(m)("code10"))},[t("span",Xe,[a(v,{class:"me-2"}),r(" Code")])])]),t("div",qe,[t("div",Ge,[t("table",null,[Ue,t("tbody",null,[(s(!0),l(y,null,x(f.value,e=>(s(),l("tr",{key:e.id},[Ye,t("td",Qe,o(e.name),1),t("td",null,o(e.date),1),t("td",null,o(e.sale),1),t("td",We,[t("ul",Ze,[t("li",null,[p((s(),l("a",ts,[a(V,{class:"w-5 h-5 text-primary"})])),[[h,void 0,"settings"]]),a(c,{target:"settings"},{default:d(()=>[r("Settings")]),_:1})]),t("li",null,[p((s(),l("a",es,[a(j,{class:"text-success"})])),[[h,void 0,"edit"]]),a(c,{target:"edit"},{default:d(()=>[r("Edit")]),_:1})]),t("li",null,[p((s(),l("a",ss,[a(w,{class:"text-danger"})])),[[h,void 0,"delete"]]),a(c,{target:"delete"},{default:d(()=>[r("Delete")]),_:1})])])])]))),128))])])])]),n(u).includes("code10")?(s(),b(g,{key:0},{default:d(()=>[as]),_:1})):_("",!0)])])])}}});export{us as default};
