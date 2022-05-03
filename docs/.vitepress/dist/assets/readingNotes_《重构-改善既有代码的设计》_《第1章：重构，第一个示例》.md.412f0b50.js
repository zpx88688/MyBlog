import{_ as n,c as s,o as a,a as t}from"./app.4891c26e.js";const y='{"title":"\u91CD\u6784\uFF0C\u7B2C\u4E00\u4E2A\u793A\u4F8B","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.1 \u8D77\u70B9","slug":"_1-1-\u8D77\u70B9"},{"level":2,"title":"1.2 \u5BF9\u4E0A\u9762\u7A0B\u5E8F\u7684\u8BC4\u4EF7","slug":"_1-2-\u5BF9\u4E0A\u9762\u7A0B\u5E8F\u7684\u8BC4\u4EF7"}],"relativePath":"readingNotes/\u300A\u91CD\u6784-\u6539\u5584\u65E2\u6709\u4EE3\u7801\u7684\u8BBE\u8BA1\u300B/\u300A\u7B2C1\u7AE0\uFF1A\u91CD\u6784\uFF0C\u7B2C\u4E00\u4E2A\u793A\u4F8B\u300B.md"}',p={},o=t(`<h1 id="\u91CD\u6784\uFF0C\u7B2C\u4E00\u4E2A\u793A\u4F8B" tabindex="-1">\u91CD\u6784\uFF0C\u7B2C\u4E00\u4E2A\u793A\u4F8B <a class="header-anchor" href="#\u91CD\u6784\uFF0C\u7B2C\u4E00\u4E2A\u793A\u4F8B" aria-hidden="true">#</a></h1><h2 id="_1-1-\u8D77\u70B9" tabindex="-1">1.1 \u8D77\u70B9 <a class="header-anchor" href="#_1-1-\u8D77\u70B9" aria-hidden="true">#</a></h2><h5 id="play-json-\u5267\u56E2\u5C06\u5267\u76EE\u7684\u6570\u636E\u5B58\u50A8\u5728\u4E00\u4E2A\u7B80\u5355\u7684-json-\u6587\u4EF6\u4E2D" tabindex="-1">play.json(\u5267\u56E2\u5C06\u5267\u76EE\u7684\u6570\u636E\u5B58\u50A8\u5728\u4E00\u4E2A\u7B80\u5355\u7684 JSON \u6587\u4EF6\u4E2D): <a class="header-anchor" href="#play-json-\u5267\u56E2\u5C06\u5267\u76EE\u7684\u6570\u636E\u5B58\u50A8\u5728\u4E00\u4E2A\u7B80\u5355\u7684-json-\u6587\u4EF6\u4E2D" aria-hidden="true">#</a></h5><div class="language-json"><pre><code><span class="token punctuation">{</span>
  <span class="token property">&quot;hamlet&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hamlet&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tragedy&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;as-like&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;As You Like It&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;comedy&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;othello&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Othello&quot;</span><span class="token punctuation">,</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;tragedy&quot;</span> <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><h5 id="invoices-json-\u5F00\u51FA\u7684\u8D26\u5355\u4E5F\u5B58\u50A8\u5728\u4E00\u4E2A-json-\u6587\u4EF6\u91CC" tabindex="-1">invoices.json(\u5F00\u51FA\u7684\u8D26\u5355\u4E5F\u5B58\u50A8\u5728\u4E00\u4E2A JSON \u6587\u4EF6\u91CC) <a class="header-anchor" href="#invoices-json-\u5F00\u51FA\u7684\u8D26\u5355\u4E5F\u5B58\u50A8\u5728\u4E00\u4E2A-json-\u6587\u4EF6\u91CC" aria-hidden="true">#</a></h5><div class="language-json"><pre><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;customer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BigCo&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;performances&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;playID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;hamlet&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;audience&quot;</span><span class="token operator">:</span> <span class="token number">55</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;playID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;as-like&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;audience&quot;</span><span class="token operator">:</span> <span class="token number">35</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;playID&quot;</span><span class="token operator">:</span> <span class="token string">&quot;othello&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;audience&quot;</span><span class="token operator">:</span> <span class="token number">40</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><h5 id="\u4E0B\u9762\u8FD9\u4E2A\u7B80\u5355\u7684\u51FD\u6570\u7528\u4E8E\u6253\u5370\u8D26\u5355\u8BE6\u60C5\u3002" tabindex="-1">\u4E0B\u9762\u8FD9\u4E2A\u7B80\u5355\u7684\u51FD\u6570\u7528\u4E8E\u6253\u5370\u8D26\u5355\u8BE6\u60C5\u3002 <a class="header-anchor" href="#\u4E0B\u9762\u8FD9\u4E2A\u7B80\u5355\u7684\u51FD\u6570\u7528\u4E8E\u6253\u5370\u8D26\u5355\u8BE6\u60C5\u3002" aria-hidden="true">#</a></h5><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">statement</span> <span class="token punctuation">(</span><span class="token parameter">invoice<span class="token punctuation">,</span> plays</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> totalAmount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> volumeCredits <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Statement for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>invoice<span class="token punctuation">.</span>customer<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> format <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Intl<span class="token punctuation">.</span>NumberFormat</span><span class="token punctuation">(</span><span class="token string">&quot;en-US&quot;</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span> <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token string">&quot;currency&quot;</span><span class="token punctuation">,</span> <span class="token literal-property property">currency</span><span class="token operator">:</span> <span class="token string">&quot;USD&quot;</span><span class="token punctuation">,</span>
                          <span class="token literal-property property">minimumFractionDigits</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span>format<span class="token punctuation">;</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> perf <span class="token keyword">of</span> invoice<span class="token punctuation">.</span>performances<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> play <span class="token operator">=</span> plays<span class="token punctuation">[</span>perf<span class="token punctuation">.</span>playID<span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> thisAmount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">switch</span> <span class="token punctuation">(</span>play<span class="token punctuation">.</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;tragedy&quot;</span><span class="token operator">:</span>
      thisAmount <span class="token operator">=</span> <span class="token number">40000</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>perf<span class="token punctuation">.</span>audience <span class="token operator">&gt;</span> <span class="token number">30</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        thisAmount <span class="token operator">+=</span> <span class="token number">1000</span> <span class="token operator">*</span> <span class="token punctuation">(</span>perf<span class="token punctuation">.</span>audience <span class="token operator">-</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">case</span> <span class="token string">&quot;comedy&quot;</span><span class="token operator">:</span>
      thisAmount <span class="token operator">=</span> <span class="token number">30000</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>perf<span class="token punctuation">.</span>audience <span class="token operator">&gt;</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        thisAmount <span class="token operator">+=</span> <span class="token number">10000</span> <span class="token operator">+</span> <span class="token number">500</span> <span class="token operator">*</span> <span class="token punctuation">(</span>perf<span class="token punctuation">.</span>audience <span class="token operator">-</span> <span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      thisAmount <span class="token operator">+=</span> <span class="token number">300</span> <span class="token operator">*</span> perf<span class="token punctuation">.</span>audience<span class="token punctuation">;</span>
      <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">unknown type: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>play<span class="token punctuation">.</span>type<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// add volume credits</span>
    volumeCredits <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>perf<span class="token punctuation">.</span>audience <span class="token operator">-</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// add extra credit for every ten comedy attendees</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">&quot;comedy&quot;</span> <span class="token operator">===</span> play<span class="token punctuation">.</span>type<span class="token punctuation">)</span> volumeCredits <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>perf<span class="token punctuation">.</span>audience <span class="token operator">/</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// print line for this order</span>
    result <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>play<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">format</span><span class="token punctuation">(</span>thisAmount<span class="token operator">/</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> (</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>perf<span class="token punctuation">.</span>audience<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> seats)\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    totalAmount <span class="token operator">+=</span> thisAmount<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  result <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Amount owed is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token function">format</span><span class="token punctuation">(</span>totalAmount<span class="token operator">/</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  result <span class="token operator">+=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">You earned </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>volumeCredits<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> credits\\n</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="_1-2-\u5BF9\u4E0A\u9762\u7A0B\u5E8F\u7684\u8BC4\u4EF7" tabindex="-1">1.2 \u5BF9\u4E0A\u9762\u7A0B\u5E8F\u7684\u8BC4\u4EF7 <a class="header-anchor" href="#_1-2-\u5BF9\u4E0A\u9762\u7A0B\u5E8F\u7684\u8BC4\u4EF7" aria-hidden="true">#</a></h2><p>\u4EE3\u7801\u7EC4\u7EC7\u4E0D\u6E05\u6670</p><p>\u68B3\u7406\u4EE3\u7801\u7ED3\u6784\uFF1A</p><ol><li>\u7A0B\u5E8F\u8981\u8F93\u51FAHTML\u683C\u5F0F\u7684\u6E05\u5355\u3002</li></ol>`,12),e=[o];function c(u,l,r,i,k,d){return a(),s("div",null,e)}var q=n(p,[["render",c]]);export{y as __pageData,q as default};
