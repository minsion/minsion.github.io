import{_ as s,c as a,o as i,a9 as n}from"./chunks/framework.bq0jHAD3.js";const y=JSON.parse('{"title":"关于将前端项目部署到 Linux","description":"","frontmatter":{"layout":"doc"},"headers":[],"relativePath":"blog/nginx.md","filePath":"blog/nginx.md","lastUpdated":null}'),p={name:"blog/nginx.md"},l=n(`<h1 id="关于将前端项目部署到-linux" tabindex="-1">关于将前端项目部署到 Linux <a class="header-anchor" href="#关于将前端项目部署到-linux" aria-label="Permalink to &quot;关于将前端项目部署到 Linux&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>本文主要从零开始，记录如何将前端项目部署到 Linux 服务器，比较基础。希望能帮助到你们。</p><h2 id="技术栈" tabindex="-1">技术栈 <a class="header-anchor" href="#技术栈" aria-label="Permalink to &quot;技术栈&quot;">​</a></h2><p>操作系统：Linux ubuntu</p><p>服务器：Nginx 一款轻量级的 Web 服务器、反向代理服务器</p><p>前端项目：Vue3</p><p>操作软件：Tabby 一个高度可配置的现代化终端模拟器</p><h2 id="基础命令" tabindex="-1">基础命令 <a class="header-anchor" href="#基础命令" aria-label="Permalink to &quot;基础命令&quot;">​</a></h2><p>由于是第一次接触 linux 系统，所以我们先熟悉一下 linux 基础的命令。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 1.列出目录中的文件和子目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ls</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 2.切换当前工作目录</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [目录路径]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 3.显示当前工作目录的路径</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">pwd</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 4.创建新目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [命令名]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 5.删除文件或目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [文件名]    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 删除文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">rm</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -r</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [目录名]    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 递归删除目录及其内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 6.复制文件或目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [源文件] [目标目录]    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 复制文件到目标目录</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 7.移动文件或目录，也可以用于重命名文件或目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [源文件] [目标目录]    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 移动文件到目标目录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mv</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [旧文件名] [新文件名]    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 重命名文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 8.更新文件的时间戳或创建新文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">touch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [文件名]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 9.查看文件内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cat</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [文件名]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 10.分页查看文件内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">less</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [文件名]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 11.显示文件的开头或结尾</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [文件名]    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 显示文件开头的内容</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tail</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [文件名]    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 显示文件结尾的内容</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 12.在文件中搜索特定模式</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">grep</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;pattern&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [文件名]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 13.显示系统进程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ps</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> aux</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 14.终止进程</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">kill</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [进程ID]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 15.打包和解压文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -czvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> archive.tar.gz</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [目录]    </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 打包成 .tar.gz 文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xzvf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> archive.tar.gz</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">           ## 解压 .tar.gz 文件</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 16.修改文件或目录的权限</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">chmod</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [权限] [文件名]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 17.以超级用户权限执行命令</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [命令]</span></span></code></pre></div><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 首先，更新系统的软件包列表，确保获取最新的可用软件包信息。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 随后，使用包管理器安装 Nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 检查是否安装成功</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span></code></pre></div><p>之前已经安装过，第一次安装命令执行会不一样，所以最后需要执行一下 nginx -v，确保已经安装上 nginx</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f84a46210ad24bdca6080428ca5eb901~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=664&amp;h=343&amp;s=44196&amp;e=png&amp;b=212a35" alt="image.png"></p><p>安装成功之后，直接使用服务器 ip 的方式，在浏览器地址栏中输入，应该能够访问到 nginx 的初始页面（需要启动 <code>sudo systemctl start nginx</code>），如下图：</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e71684071a67418b9f4cd4856f21d5a6~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1090&amp;h=743&amp;s=186550&amp;e=png&amp;b=ffffff" alt="image.png"></p><p><code>nginx 相关命令</code></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 1. 启动 Nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 2. 停止 Nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 3. 重新加载配置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 4. 重启 Nginx</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 5. 查看 Nginx 状态</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 6. 测试 Nginx 配置是否正确</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 7. 查看 Nginx 版本信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 8. 查看 Nginx 编译配置信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> nginx</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -V</span></span></code></pre></div><h2 id="上传处理" tabindex="-1">上传处理 <a class="header-anchor" href="#上传处理" aria-label="Permalink to &quot;上传处理&quot;">​</a></h2><h3 id="上传" tabindex="-1">上传 <a class="header-anchor" href="#上传" aria-label="Permalink to &quot;上传&quot;">​</a></h3><p>将打包好的 vue 项目，即 dist 目录文件上传到服务器中，其中 Tabby 一次只能上传一个文件或者是一个压缩文件夹，为此需要提前将 dist 进行压缩。</p><p>然后，Tabby 打开你想要上传到的文件路径中，演示使用路径 <code>/home/ubuntu/files/</code>。长按拖拽至即可上传。</p><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7a19399281a648098ed6546d8db6a5cd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=844&amp;h=611&amp;s=44075&amp;e=png&amp;b=0d1219" alt="image.png"></p><h3 id="解压" tabindex="-1">解压 <a class="header-anchor" href="#解压" aria-label="Permalink to &quot;解压&quot;">​</a></h3><p>上传的时候，使用的 .zip 的压缩文件类型，需要在 linux 上进行一次解压操作。</p><p>解压需要使用 unzip 软件，安装如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ## 更新软件列表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> unzip</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    ## 安装 unzip</span></span></code></pre></div><p>安装完成后，即可使用 unzip 相关命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unzip</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [options] filename.zip</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## \`-d &lt;directory&gt;\`：指定解压缩的目标目录。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## \`-l\`：列出 ZIP 文件中的文件列表，但不解压缩。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## \`-o\`：覆盖已经存在的文件。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## \`-q\`：安静模式，不显示解压缩过程中的输出信息。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## \`-x &lt;pattern&gt;\`：排除符合模式 \`&lt;pattern&gt;\` 的文件。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 解压名为 \`example.zip\` 的 ZIP 文件到当前目录下</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.zip</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 将文件解压缩到指定目录，可以使用 \`-d\` 选项，如：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">unzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> example.zip</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/directory</span></span></code></pre></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/790e355ed7314d9887508e57fae67bcd~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=754&amp;h=224&amp;s=30186&amp;e=png&amp;b=212a35" alt="image.png"></p><p>这里我将上传的 dist.zip 解压，且解压至 <code>var/www/html/</code> 下，因为这个路径是， nginx 的初始路径（下图为解压后）。</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/49a9ca5907d04ff091a0722cd5d63f90~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=844&amp;h=410&amp;s=36601&amp;e=png&amp;b=131b24" alt="image.png"></p><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-label="Permalink to &quot;配置&quot;">​</a></h2><p>完成上面的步骤之后，因为 nginx 的默认启动路径是 <code>/var/www/html/index.nginx-debian.html</code>，所以需要将这个启动路径重新指向到 <code>/var/www/html/dist/index.html</code> 中，修改方式如下：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>## 使用 nano 编辑器，打开 /etc/nginx/sites-available/default 文件</span></span>
<span class="line"><span>sudo nano /etc/nginx/sites-available/default</span></span></code></pre></div><p>打开，应该看到这样的结构。需要做： 1. 设置根路径；2. 修改 try_files</p><div class="language-dash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">dash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>server {</span></span>
<span class="line"><span>    listen 80 default_server;</span></span>
<span class="line"><span>    listen [::]:80 default_server;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    root /var/www/html/dist;    ## 1. 设置根路径</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    location / {</span></span>
<span class="line"><span>        ## First attempt to serve request as file, then</span></span>
<span class="line"><span>        ## as directory, then fall back to displaying a 404.</span></span>
<span class="line"><span>        ## try_files $uri $uri/ =404;</span></span>
<span class="line"><span>        try_files $uri $uri/ /dist/index.html;    ## 2. 修改 try_files</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div><p>nano 编辑器快捷键：保存：ctrl + S，退出：ctrl + Z.</p><p>配置完成后，别忘了重启 Nginx 服务（<code>sudo systemctl restart nginx</code>）</p><p>到此，就已经完成了将前端项目部署到 Linux 的全部过程，有别的方案欢迎在评论区留下你的见解。</p><hr><h2 id="gzip" tabindex="-1">GZIP <a class="header-anchor" href="#gzip" aria-label="Permalink to &quot;GZIP&quot;">​</a></h2><p>如果还没看<code>上传处理</code>和<code>配置</code>部分的内容，推荐看了再来。</p><p>gzip 是一种数据压缩算法，可以将文本文件等内容进行压缩，减小文件大小，提高传输效率。正好 nginx 有相关配置。</p><p>需要打开 nginx.conf 文件，命令 <code>sudo nano /etc/nginx/nginx/conf</code></p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96737c15a9fe473388f0e8785623fb95~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1920&amp;h=955&amp;s=84218&amp;e=png&amp;b=212a35" alt="image.png"></p><p>找到 Gzip Settings，默认情况下，这里的内容是被注释起来的，解除注释，且对比少了的配置，添加进去即可。保存之后，需要重启一下 nginx.</p><p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03aa4aa3251c4416834274b305c283ae~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1325&amp;h=381&amp;s=29548&amp;e=png&amp;b=212a35" alt="image.png"></p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 配置参数</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 开启 gzip 压缩</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gzip</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 根据客户端的 \`Accept-Encoding\` 头值发送不同的响应，以便更好地利用缓存或 CDN 等</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gzip_vary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 在反向代理情况下是否启用 gzip 压缩</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gzip_proxied</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 压缩级别，级别范围是 1 到 9，数字越大压缩越多，但消耗 CPU 越多</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gzip_comp_level</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 压缩的缓冲区大小</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gzip_buffers</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 16</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 8k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 启用 gzip 压缩的 HTTP 版本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gzip_http_version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 指定要压缩的 MIME 类型</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gzip_types</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/plain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/css</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application/json</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application/javascript</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/xml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application/xml</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> application/xml+rss</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> text/javascript</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## 对所有类型的文件进行 gzip 压缩</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gzip_types</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><p>验证是否成功开启 gzip 的方式，可以打开浏览器控制台，查看网络面板的资源加载情况。</p><p>Content-Encoding: gzip (即开启 GZIP)</p><p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed41c9eedd9f4b1ba22bc15f501b5436~tplv-k3u1fbpfcp-jj-mark:0:0:0:0:q75.image#?w=1338&amp;h=582&amp;s=75574&amp;e=png&amp;b=292929" alt="image.png"></p>`,53),t=[l];function h(e,k,d,r,c,g){return i(),a("div",null,t)}const o=s(p,[["render",h]]);export{y as __pageData,o as default};
