import{_ as n,o as s,c as a,a as t}from"./app.52b8e965.js";var e="/assets/image-20231030194032061.f7ab75c9.png";const p={},o=t('<p>\u672C\u7BC7\u4ECB\u7ECDNext\u7684\u6587\u4EF6\u5939\u7ED3\u6784\u4EE5\u53CANext.js\u7684\u8DEF\u7531\u7CFB\u7EDF</p><h2 id="next-js-\u6587\u4EF6\u5939\u57FA\u672C\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#next-js-\u6587\u4EF6\u5939\u57FA\u672C\u7ED3\u6784" aria-hidden="true">#</a> Next.js \u6587\u4EF6\u5939\u57FA\u672C\u7ED3\u6784</h2><img src="'+e+`" alt="image-20231030194032061" style="zoom:33%;"><p>\u5BF9\u5E94\u7684Tree\u547D\u4EE4\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">.</span>
\u251C\u2500\u2500 favicon.ico				
\u251C\u2500\u2500 globals.css	      <span class="token comment"># \u5168\u5C40\u6837\u5F0F</span>
\u251C\u2500\u2500 layout.tsx        <span class="token comment"># \u5168\u5C40layout</span>
\u251C\u2500\u2500 module-1          <span class="token comment"># \u6A21\u5757-1</span>
\u2502   \u251C\u2500\u2500 layout.tsx    <span class="token comment"># \u6A21\u5757-1\u7684layout</span>
\u2502   \u2514\u2500\u2500 page.tsx      <span class="token comment"># \u6A21\u5757-1\u7684\u9875\u9762\u5165\u53E3\u6587\u4EF6\uFF0C\u8BBF\u95EE\u65B9\u5F0F http://localhost:8080/module-1</span>
\u251C\u2500\u2500 module-2
\u2502   \u2514\u2500\u2500 page.tsx      <span class="token comment"># \u6A21\u5757-2\u7684\u9875\u9762\u5165\u53E3\u6587\u4EF6\uFF0C\u8BBF\u95EE\u65B9\u5F0F http://localhost:8080/module-2</span>
\u251C\u2500\u2500 page.module.css
\u2514\u2500\u2500 page.tsx          <span class="token comment"># \u9879\u76EE\u9996\u9875\uFF0C\u8BBF\u95EE\u65B9\u5F0F http://localhost:8080</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Next.js \u4E0E Umi.js \u7C7B\u4F3C\u4F7F\u7528\u7684\u662F\u6587\u4EF6\u5939\u4E3A\u8DEF\u7531\u7CFB\u7EDF\u3002\u6BCF\u4E2A\u6A21\u5757\u90FD\u4F1A\u6709\u4E00\u4E2A\u6A21\u5757\u7684\u5E03\u5C40\u6587\u4EF6<code>layout.tsx</code>,\u9875\u9762\u8DEF\u53E3\u6587\u4EF6\u7684\u534F\u5B9A\u662F\u6587\u4EF6\u5939\u4E0B\u7684<code>page.tsx</code></p><h2 id="\u9875\u9762\u95F4\u7684\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u95F4\u7684\u5BFC\u822A" aria-hidden="true">#</a> \u9875\u9762\u95F4\u7684\u5BFC\u822A</h2><p>\u5728React\u6280\u672F\u94FE\u4E2D\u6211\u4EEC\u5E38\u89C1\u7684\u8DEF\u7531\u5BFC\u822A\u5F62\u5F0F\u662F\uFF1A\u5C01\u88C5\u7684\u5BFC\u822A\u7EC4\u4EF6\u3001Hooks\u5BFC\u822AAPI\u3001\u6700\u57FA\u672C\u7684JS\u8DEF\u7531\u53D8\u66F4</p><h3 id="\u6807\u7B7E\u7EC4\u4EF6\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#\u6807\u7B7E\u7EC4\u4EF6\u5BFC\u822A" aria-hidden="true">#</a> \u6807\u7B7E\u7EC4\u4EF6\u5BFC\u822A</h3><p>Next.js\u4E2D\u6709\u9ED8\u8BA4\u7684\u6A21\u5757Link\uFF0C\u7C7B\u4F3C\u4E0EHTML\u6807\u7B7E\u4E2D\u7684a\u6807\u7B7E\uFF0C\u901A\u8FC7href\u6765\u8FDB\u884C\u8DEF\u7531\u8DF3\u8F6C</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token keyword">import</span> Link <span class="token keyword">from</span> <span class="token string">&quot;next/link&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token function">Model1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">Model1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span><span class="token class-name">Link</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>/module-2<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
            \u70B9\u51FB\u8DF3\u8F6Cmodule-2
        </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span><span class="token class-name">Link</span></span><span class="token punctuation">&gt;</span></span><span class="token plain-text">
    </span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="hooks\u5BFC\u822A" tabindex="-1"><a class="header-anchor" href="#hooks\u5BFC\u822A" aria-hidden="true">#</a> Hooks\u5BFC\u822A</h3><p>\u4F7F\u7528 <code>useRouter</code>\u7684\u80FD\u529B\u6765\u8FDB\u884C\u5BFC\u822A</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code><span class="token string">&#39;use client&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRouter <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;next/navigation&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> useCallback <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;react&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">useModulePath</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token string">&#39;/module-2&#39;</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> router <span class="token operator">=</span> <span class="token function">useRouter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">const</span> goToModule2 <span class="token operator">=</span> <span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        router<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>router<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token punctuation">{</span> goToModule2 <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> <span class="token function-variable function">Button</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> <span class="token punctuation">{</span> goToModule2 <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useModulePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>goToModule2<span class="token punctuation">}</span></span> <span class="token punctuation">&gt;</span></span><span class="token plain-text">Hooks \u5BFC\u822A--\u70B9\u51FB\u8DF3\u8F6Cmodule-2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14),c=[o];function l(i,u){return s(),a("div",null,c)}var r=n(p,[["render",l],["__file","2023-10-30-2-next-router.html.vue"]]);export{r as default};
