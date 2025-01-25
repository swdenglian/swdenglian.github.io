import{_ as e,o as n,c as s,a}from"./app.52b8e965.js";var d="/assets/monorepo-1.06cd9865.jpg";const i={},c=a(`<h2 id="monorepo\u7684\u6F14\u5316" tabindex="-1"><a class="header-anchor" href="#monorepo\u7684\u6F14\u5316" aria-hidden="true">#</a> monorepo\u7684\u6F14\u5316</h2><p>\u5047\u8BBE\uFF1A\u73B0\u6709\u4E00\u4E2AWeb\u524D\u7AEF\u9879\u76EE\uFF0C\u9700\u8981\u540C\u65F6\u652F\u6301<code>\u5FAE\u4FE1\u516C\u4F17\u53F7</code>\u4EE5\u53CA<code>\u81EA\u5DF1\u516C\u53F8\u5B9A\u5236\u7684App</code>\uFF0C\u9700\u7531\u4F60\u7684\u5C0F\u7EC4\u5F00\u53D1\u5B8C\u6210\u3002</p><h3 id="\u6F14\u5316\u9636\u6BB5\u4E00" tabindex="-1"><a class="header-anchor" href="#\u6F14\u5316\u9636\u6BB5\u4E00" aria-hidden="true">#</a> \u6F14\u5316\u9636\u6BB5\u4E00</h3><p>\u90A3\u4E48\u9488\u5BF9\u4EE5\u4E0A\u9700\u6C42\uFF0C\u5F88\u6709\u53EF\u80FD\u5C06\u6240\u6709\u7684\u4EE3\u7801\u653E\u5728\u4E00\u8D77\u3002\u6587\u4EF6\u5939\u53EF\u80FD\u5982\u4E0B\uFF0C\u5E76\u653E\u7F6E\u5728\u4E00\u4E2A\u4ED3\u5E93\u91CC\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.<span class="token punctuation">(</span>git1<span class="token punctuation">)</span>
\u251C\u2500\u2500 shared
\u2502   \u251C\u2500\u2500 wechat-sdk    <span class="token comment"># \u5FAE\u4FE1SDK\u9002\u914D\u3002\u5982\uFF1A\u652F\u4ED8\u3001\u62CD\u7167\u7B49</span>
\u2502   \u2514\u2500\u2500 app-sdk       <span class="token comment"># App-SDK\u9002\u914D\u3002\u5982\uFF1AApp\u7684\u652F\u4ED8\u3001\u62CD\u7167\u7B49</span>
\u2514\u2500\u2500 app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6F14\u5316\u9636\u6BB5\u4E8C" tabindex="-1"><a class="header-anchor" href="#\u6F14\u5316\u9636\u6BB5\u4E8C" aria-hidden="true">#</a> \u6F14\u5316\u9636\u6BB5\u4E8C</h3><p>\u5047\u8BBE\uFF1A\u7531\u4E8E\u968F\u7740\u516C\u53F8\u7684\u53D1\u5C55\uFF0C\u6269\u5C55\u4E86\u65B0\u7684\u4E1A\u52A1\u6A21\u5757\u4E8C\uFF0C\u5E76\u4E14\u8FD8\u662F\u7531\u4F60\u7684\u9879\u76EE\u5C0F\u7EC4\u5F00\u53D1\u5B8C\u6210\u3002</p><p>\u90A3\u4E48\u9488\u5BF9\u4EE5\u4E0A\u9700\u6C42\uFF0C\u53EF\u80FD\u4F1A\u5C06\u9879\u76EE\u7ED3\u6784\u8BBE\u8BA1\u4E3A\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.<span class="token punctuation">(</span>git1<span class="token punctuation">)</span>
\u251C\u2500\u2500 shared
\u2502   \u251C\u2500\u2500 utils         <span class="token comment"># \u516C\u7528\u65B9\u6CD5\u3001\u6837\u5F0F\u7B49</span>
\u2502   \u251C\u2500\u2500 wechat-sdk    <span class="token comment"># \u5FAE\u4FE1SDK\u9002\u914D\u3002\u5982\uFF1A\u652F\u4ED8\u3001\u62CD\u7167\u7B49</span>
\u2502   \u2514\u2500\u2500 app-sdk       <span class="token comment"># App-SDK\u9002\u914D\u3002\u5982\uFF1AApp\u7684\u652F\u4ED8\u3001\u62CD\u7167\u7B49</span>
\u2514\u2500\u2500 app
    \u251C\u2500\u2500 module1    <span class="token comment"># \u539F\u4E1A\u52A1\uFF1A\u6A21\u5757\u4E00</span>
    \u2514\u2500\u2500 module2    <span class="token comment"># \u65B0\u4E1A\u52A1\uFF1A\u6A21\u5757\u4E8C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u597D\u50CF\u5E76\u6CA1\u6709\u4EC0\u4E48\u533A\u522B\uFF0C\u5BF9\u5427\uFF1F\u53EA\u662F\u8C03\u6574\u4E86\u9879\u76EE\u7684\u6587\u4EF6\u7ED3\u6784\uFF0C\u7EE7\u7EED\u5F80\u4E0B\u770B\u3002</p><h3 id="\u6F14\u5316\u9636\u6BB5\u4E09" tabindex="-1"><a class="header-anchor" href="#\u6F14\u5316\u9636\u6BB5\u4E09" aria-hidden="true">#</a> \u6F14\u5316\u9636\u6BB5\u4E09</h3><p>\u5047\u8BBE\uFF1A\u516C\u53F8\u7EE7\u7EED\u98DE\u901F\u53D1\u5C55\uFF0C\u6A21\u5757\u4E00\u3001\u6A21\u5757\u4E8C\u4E5F\u968F\u4E4B\u53D1\u751F\u4E86\u6025\u5267\u7684\u6269\u5F20\uFF0C\u4F60\u7684\u5C0F\u7EC4\u6210\u5458\u5DF2\u7ECF\u6CA1\u6709\u7CBE\u529B\u540C\u65F6\u5B8C\u62102\u4E2A\u6A21\u5757\uFF0C\u8FD9\u65F6\u9886\u5BFC\u4EEC\u8BF4\u4E24\u4E2A\u6A21\u5757\u72EC\u7ACB\u6210\u4E3A\u7F51\u9875\u5E94\u7528\uFF0C\u5E76\u7531\u4E0D\u540C\u5C0F\u7EC4\u5171\u540C\u7EF4\u62A4\u3002</p><p>\u90A3\u4E48\u9488\u5BF9\u4EE5\u4E0A\u9700\u6C42\uFF0C\u4F60\u5F00\u59CB\u72AF\u96BE\u4E86\uFF0C\u6709\u592A\u591A\u7684\u516C\u7528\u7684\u4E1C\u897F\uFF0C\u600E\u4E48\u53EF\u4EE5\u4FDD\u8BC1SDK\u4E2D\u7684\u4E1C\u897F\u540C\u65F6\u540C\u6B65\u5230\u4E24\u4E2A\u9879\u76EE\u7EC4\u5462\uFF1F\u90A3\u4E48\u7ECF\u8FC7\u4E00\u756A\u601D\u8003~</p><p>\u5C0F\u6837\u8FD9\u8FD8\u96BE\u5F97\u5230\u6211\uFF0C\u5C06\u539F\u6765\u7684\u9879\u76EE\u62C6\u5206\u62103\u4E2A\u5C0F\u9879\u76EE:</p><ul><li>git1-shared # \u516C\u5171\u8D44\u6E90\u9879\u76EE</li><li>git2-app1 # \u539F\u6A21\u5757\u4E00</li><li>git3-app2 # \u539F\u6A21\u5757\u4E8C</li></ul><p>\u4E24\u56E2\u961F\u5171\u540C\u7EF4\u62A4 <code>git1-shared</code>\uFF0C\u5206\u522B\u7EF4\u62A4 <code>app1</code>\u3001<code>app2</code>\uFF0C\u90A3\u4E48\u9879\u76EE\u4EE5\u53CAgit\u4ED3\u5E93\u7ED3\u6784\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.<span class="token punctuation">(</span>git1-shared<span class="token punctuation">)</span>        <span class="token comment"># \u516C\u5171\u8D44\u6E90\u9879\u76EE</span>
\u2514\u2500\u2500 shared
   \u251C\u2500\u2500 utils         <span class="token comment"># \u516C\u7528\u65B9\u6CD5\u3001\u6837\u5F0F\u7B49</span>
   \u251C\u2500\u2500 wechat-sdk    <span class="token comment"># \u5FAE\u4FE1SDK\u9002\u914D\u3002\u5982\uFF1A\u652F\u4ED8\u3001\u62CD\u7167\u7B49</span>
   \u2514\u2500\u2500 app-sdk       <span class="token comment"># App-SDK\u9002\u914D\u3002\u5982\uFF1AApp\u7684\u652F\u4ED8\u3001\u62CD\u7167\u7B49</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.<span class="token punctuation">(</span>git2-app1<span class="token punctuation">)</span>          <span class="token comment"># \u539F\u6A21\u5757\u4E00</span>
\u2514\u2500\u2500 app
   \u251C\u2500\u2500 src           <span class="token comment"># \u539Fmodule1\u6E90\u7801</span>
   \u2514\u2500\u2500 dependency    <span class="token comment"># \u9879\u76EE\u4F9D\u8D56\uFF1A\u539Fshared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.<span class="token punctuation">(</span>git3-app2<span class="token punctuation">)</span>          <span class="token comment"># \u539F\u6A21\u5757\u4E8C</span>
\u2514\u2500\u2500 app
   \u251C\u2500\u2500 src           <span class="token comment"># \u539Fmodule2\u6E90\u7801</span>
   \u2514\u2500\u2500 dependency    <span class="token comment"># \u9879\u76EE\u4F9D\u8D56\uFF1A\u539Fshared</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u6F14\u5316\u9636\u6BB5\u56DB" tabindex="-1"><a class="header-anchor" href="#\u6F14\u5316\u9636\u6BB5\u56DB" aria-hidden="true">#</a> \u6F14\u5316\u9636\u6BB5\u56DB</h3><p>\u5047\u8BBE\uFF1A\u7ECF\u8FC7\u65E5\u79EF\u6708\u7D2F\uFF0C\u4F60\u5F00\u59CB\u5BF9\u4EA7\u54C1\u7ECF\u7406\u70E6\u8E81\u8D77\u6765\u3002\u56E0\u4E3A\u4F60\u53D1\u73B0\uFF0C\u516C\u7528\u7684\u5185\u5BB9 <code>shared</code> \u7A0D\u5FAE\u8C03\u6574\u4F60\u5C31\u8981\u4E0D\u65AD\u7684\u4FEE\u6539\u3001\u6D4B\u8BD5\u3001\u6784\u5EFA\u3001\u53D1\u5E03\u3002\u6D41\u7A0B\u4E00\u6B65\u90FD\u4E0D\u80FD\u5C11\uFF0C\u4FE1\u606F\u8FD8\u8981\u57282\u4E2A\u56E2\u961F\u4E2D\u540C\u6B65\u3002\u7B80\u76F4\u60F3\u62A1\u8D77\u952E\u76D8\u7838\u5411\u4EA7\u54C1\u7ECF\u7406\u3002</p><p>\u4F46\u662F\u5FC3\u60F3\uFF0C\u4EA7\u54C1\u4E0D\u63D0\u9700\u6C42\u4F60\u6CA1\u996D\u5403\u554A\uFF0C\u9010\u6E10\u4F60\u653E\u4E0B\u624B\u4E0A\u7684\u952E\u76D8\uFF0C\u4ED4\u7EC6\u601D\u8003\u8D77\u6765\u3002\u8981\u662F\u4E00\u4E2A\u4ED3\u5E93\u80FD\u540C\u65F6\u653E\u591A\u4E2A\u9879\u76EE\u8BE5\u591A\u597D\uFF0C\u8FD9\u6837\u5373\u53EF\u4EE5\u6109\u5FEB\u7684\u8054\u8C03\uFF0C\u4E5F\u4E0D\u9700\u8981\u9891\u7E41\u5411\u5176\u4ED6\u56E2\u961F\u540C\u6B65\u4FE1\u606F\u3002\u90A3\u4E48\u4F60\u8BBE\u8BA1\u51FA\u4E86\u4EE5\u4E0B\u7ED3\u6784\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>.<span class="token punctuation">(</span>git1<span class="token punctuation">)</span>
\u251C\u2500\u2500 shared            <span class="token comment"># \u62E5\u6709\u72EC\u7ACB\u7ED3\u6784\u7684\u9879\u76EE</span>
\u2502   \u251C\u2500\u2500 utils         <span class="token comment"># \u516C\u7528\u65B9\u6CD5\u3001\u6837\u5F0F\u7B49</span>
\u2502   \u251C\u2500\u2500 wechat-sdk    <span class="token comment"># \u5FAE\u4FE1SDK\u9002\u914D\u3002\u5982\uFF1A\u652F\u4ED8\u3001\u62CD\u7167\u7B49</span>
\u2502   \u2514\u2500\u2500 app-sdk       <span class="token comment"># App-SDK\u9002\u914D\u3002\u5982\uFF1AApp\u7684\u652F\u4ED8\u3001\u62CD\u7167\u7B49</span>
\u2514\u2500\u2500 apps
     \u251C\u2500\u2500 app1         <span class="token comment"># \u62E5\u6709\u72EC\u7ACB\u7ED3\u6784\u7684\u9879\u76EE</span>
     \u2514\u2500\u2500 app2         <span class="token comment"># \u62E5\u6709\u72EC\u7ACB\u7ED3\u6784\u7684\u9879\u76EE</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u6837\u5C31\u540C\u65F6\u517C\u987E\u4E86\u591A\u9879\u76EE\u7BA1\u7406\u3001\u4F46\u662F\u516C\u7528\u7684\u8D44\u6E90\u53C8\u540C\u65F6\u653E\u5728\u4E00\u4E2A\u4ED3\u5E93\u4E2D\uFF0C\u53EF\u4EE5\u540C\u65F6\u4FEE\u6539\u3001\u6D4B\u8BD5\u3001\u6784\u5EFA\u3001\u53D1\u5E03\u3002\u5927\u5927\u51CF\u5C11\u4E86\u4E2D\u95F4\u7684\u6D41\u7A0B\u3002\u5176\u5B9E\u8FD9\u6700\u540E\u4E00\u79CD\u5C31\u662F<code>monorepo</code>\u7BA1\u7406\u5F62\u5F0F\u4E86\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><img src="`+d+'"><p>\u4E0A\u8FF0\u6F14\u5316\u8FC7\u7A0B\u4E2D\u7684<code>\u9636\u6BB5\u4E00</code>\u3001<code>\u9636\u6BB5\u4E8C</code>\u662F<code>MONOLITH</code>; <code>\u9636\u6BB5\u4E09</code>\u662F<code>MULI-REPO</code>;<code>\u9636\u6BB5\u56DB</code>\u662F<code>MONO-REPO</code></p><h3 id="\u5404\u9879\u76EE\u7ED3\u6784\u7BA1\u7406\u7684\u4F18\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u5404\u9879\u76EE\u7ED3\u6784\u7BA1\u7406\u7684\u4F18\u7F3A\u70B9" aria-hidden="true">#</a> \u5404\u9879\u76EE\u7ED3\u6784\u7BA1\u7406\u7684\u4F18\u7F3A\u70B9</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u4F18\u70B9</th><th>\u7F3A\u70B9</th></tr></thead><tbody><tr><td>NonoLigth</td><td>\u5B9E\u73B0\u7B80\u5355</td><td>\u590D\u6742\u9879\u76EE\u4EE3\u7801\u590D\u7528\u6027\u4F4E\uFF0C\u4E14\u4E0D\u5229\u4E8E\u56E2\u961F\u534F\u4F5C\u3002</td></tr><tr><td>MultiRepo</td><td>\u6A21\u5757\u5212\u5206\u6E05\u6670\uFF0C\u6BCF\u4E2A\u6A21\u5757\u90FD\u662F\u72EC\u7ACB\u7684 repo\uFF0C\u5229\u4E8E\u56E2\u961F\u534F\u4F5C</td><td>\u4EE3\u7801\u7BA1\u7406\u96BE\u5EA6\u589E\u52A0\u3002\u6BD4\u5982\uFF1A<br>1.\u67D0\u4E2A\u6A21\u5757\u51FA\u73B0bug \u76F8\u5E94\u6A21\u5757\u90FD\u9700\u8981\u7F16\u8BD1\u3001\u4E0A\u7EBF\u3001\u6D89\u53CA\u5230\u624B\u52A8\u63A7\u5236\u7248\u672C\u975E\u5E38\u7E41\u7410\u3002 <br>2.issue \u7BA1\u7406\u5341\u5206\u9EBB\u70E6\u3002</td></tr><tr><td>MonoRepo</td><td>\u4EE3\u7801\u7ED3\u6784\u6E05\u6670\uFF0C\u5229\u4E8E\u56E2\u961F\u534F\u4F5C\uFF0C\u540C\u65F6\u4E00\u4E2A\u5E93\u964D\u4F4E\u4E86\u9879\u76EE\u7BA1\u7406\u3001\u4EE3\u7801\u7BA1\u7406\u4EE5\u53CA\u4EE3\u7801\u8C03\u8BD5\u96BE\u5EA6\u3002</td><td>\u9879\u76EE\u53D8\u5F97\u5E9E\u5927\uFF0C\u6A21\u5757\u53D8\u591A\u540E\u540C\u6837\u4F1A\u9047\u5230\u5404\u79CD\u95EE\u9898\u3002\u6240\u4EE5\u9700\u8981\u6709\u66F4\u597D\u7684\u6784\u5EFA\u5DE5\u5177\u652F\u6301\u3002</td></tr></tbody></table><h3 id="\u9009\u62E9" tabindex="-1"><a class="header-anchor" href="#\u9009\u62E9" aria-hidden="true">#</a> \u9009\u62E9</h3><p>\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u7684\u9879\u76EE\u9700\u6C42\uFF0C\u5BF9\u9879\u76EE\u672A\u6765\u53D1\u5C55\u7684\u5408\u7406\u9884\u671F\u6765\u9009\u62E9\u9879\u76EE\u7ED3\u6784\u3002\u4E0D\u5FC5\u8981\u76F4\u63A5\u9009\u62E9monorepo\uFF0C\u4E5F\u53EF\u4EE5\u8003\u8651\u9009\u62E9\u6211\u4EEC\u6700\u539F\u59CB\u7684\u6162\u6162\u8FED\u4EE3\u5230monorepo\uFF0C\u53EF\u4EE5\u6839\u636E\u4E0D\u540C\u60C5\u51B5\u8FDB\u884C\u9009\u62E9\u4E0E\u6F14\u53D8\u3002</p>',31),p=[c];function t(o,l){return n(),s("div",null,p)}var m=e(i,[["render",t],["__file","2023-02-07-monorepo1-what-is-monorepo.html.vue"]]);export{m as default};
