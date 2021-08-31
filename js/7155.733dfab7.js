(self.webpackChunk_varlet_ui=self.webpackChunk_varlet_ui||[]).push([[7155],{7155:(s,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>c});var l=a(7875),e={class:"varlet-site-doc"},d=(0,l.uE)('<h1>Switch 开关</h1><div class="card"><h3>介绍</h3><p>开关选择器。</p></div><div class="card"><h3>引入</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { createApp } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">import</span> { Switch } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;@varlet/ui&#39;</span>\n\ncreateApp().use(Switch)\n</code></pre></div><div class="card"><h3>基本使用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n</code></pre><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-keyword">import</span> { ref } <span class="hljs-keyword">from</span> <span class="hljs-string">&#39;vue&#39;</span>\n<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> {\n  <span class="hljs-function"><span class="hljs-title">setup</span>(<span class="hljs-params"></span>)</span> {\n    <span class="hljs-keyword">const</span> value = ref(<span class="hljs-literal">true</span>)\n\n    <span class="hljs-keyword">return</span> {\n      value\n    }\n  }\n}\n</code></pre></div><div class="card"><h3>不可用</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">disabled</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">readonly</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>自定义颜色</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:ripple</span>=<span class="hljs-string">&quot;false&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">color</span>=<span class="hljs-string">&quot;#ff9f00&quot;</span> <span class="hljs-attr">close-color</span>=<span class="hljs-string">&quot;#f5cb90&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>不同大小</h3><p>通过<code>size</code>属性改变Switch大小。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;15&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;25&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>加载状态</h3><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">loading</span> /&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">:model-value</span>=<span class="hljs-string">&quot;true&quot;</span> <span class="hljs-attr">size</span>=<span class="hljs-string">&quot;25&quot;</span> <span class="hljs-attr">loading</span> <span class="hljs-attr">loading-color</span>=<span class="hljs-string">&quot;#ff9f00&quot;</span> /&gt;</span>\n</code></pre></div><div class="card"><h3>值的校验</h3><p>通过传入一个校验器数组可以对值进行校验，校验器返回<code>true</code>则为校验通过。 以外的值将转换为文本作为用户提示。</p><pre class="hljs"><code><link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/10.3.2/styles/color-brewer.min.css"><span class="hljs-tag">&lt;<span class="hljs-name">var-switch</span> <span class="hljs-attr">v-model</span>=<span class="hljs-string">&quot;value&quot;</span> <span class="hljs-attr">:rules</span>=<span class="hljs-string">&quot;[(v) =&gt; v === true || &#39;错误！&#39;]&quot;</span>/&gt;</span>\n</code></pre></div><h2>API</h2><div class="card"><h3>属性</h3><table><thead><tr><th>参数</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td><code>v-model</code></td><td>开关选中状态</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>active-value</code></td><td>开关打开时的值</td><td><em>any</em></td><td><code>true</code></td></tr><tr><td><code>inactive-value</code></td><td>开关关闭时的值</td><td><em>any</em></td><td><code>false</code></td></tr><tr><td><code>disabled</code></td><td>是否禁用</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>readonly</code></td><td>是否只读</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>loading</code></td><td>是否为加载状态</td><td><em>boolean</em></td><td><code>false</code></td></tr><tr><td><code>ripple</code></td><td>是否启用水波纹</td><td><em>boolean</em></td><td><code>true</code></td></tr><tr><td><code>color</code></td><td>打开状态下的颜色</td><td><em>string</em></td><td><code>#2979ff</code></td></tr><tr><td><code>loading-color</code></td><td>加载图标的颜色</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>close-color</code></td><td>关闭状态下的颜色</td><td><em>string</em></td><td><code>#fff</code></td></tr><tr><td><code>size</code></td><td>switch的大小</td><td><em>string | number</em></td><td><code>20</code></td></tr><tr><td><code>rules</code></td><td>校验规则</td><td><em>array</em></td><td>-</td></tr></tbody></table></div><div class="card"><h3>事件</h3><table><thead><tr><th>事件名</th><th>说明</th><th>回调参数</th></tr></thead><tbody><tr><td><code>click</code></td><td>点击时触发</td><td><code>event: Event</code></td></tr><tr><td><code>change</code></td><td>开关状态切换时触发</td><td><code>value: any</code></td></tr></tbody></table></div><div class="card"><h3>样式变量</h3><p>以下为组件使用的 css 变量,可以使用<a href="#/zh-CN/style-provider">StyleProvider 组件</a>进行样式定制</p><table><thead><tr><th>变量名</th><th>默认值</th></tr></thead><tbody><tr><td><code>--switch-track-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--switch-track-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--switch-track-error-background</code></td><td><code>var(--color-danger)</code></td></tr><tr><td><code>--switch-ripple-color</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--switch-handle-background</code></td><td><code>#fff</code></td></tr><tr><td><code>--switch-handle-color</code></td><td><code>#fff</code></td></tr><tr><td><code>--switch-handle-active-background</code></td><td><code>var(--color-primary)</code></td></tr><tr><td><code>--switch-handle-error-background</code></td><td><code>var(--color-danger)</code></td></tr></tbody></table></div>',13);var c={render:function(s,t){return(0,l.wg)(),(0,l.j4)("div",e,[d])}}}}]);