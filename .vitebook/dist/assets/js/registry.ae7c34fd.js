import{S as c,b as o,s as p,W as _,q as t,X as d,l as b,n,j as u}from"./framework.40d14ebd.js";function h(l){let s,r=`<h1 id="registry" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#registry" aria-hidden="true">#</a> Registry</h1>
<p class="__vbk__">The Sonr registry module is used to store the records of user accounts and applications. Each record contains a DIDDocument and additional WebAuthn credential information.</p>
<h2 id="overview" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#overview" aria-hidden="true">#</a> Overview</h2>
<p class="__vbk__">The record type utilized in the <strong class="__vbk__">Registry module</strong> is the <code class="__vbk__">WhoIs</code> type. This type provides both an interface to utilize WebAuthn credentials and a means to access the record's DIDDocument.</p>
<h2 id="usage" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#usage" aria-hidden="true">#</a> Usage</h2>
<blockquote class="__vbk__">
<p class="__vbk__">Blockchain Methods supplied by Registry Module. Full implementation is still a work in progress.</p>
</blockquote>
<h3 id="registername-register-s-a-new-snr-domain-name-for-an-account" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#registername-register-s-a-new-snr-domain-name-for-an-account" aria-hidden="true">#</a> <code class="__vbk__">RegisterName()</code> - Register's a new '.snr' domain name for an account</h3>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) NameToRegister     : The name to register</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Creator            : The Account Address signing this message</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;Credential&#39;) Credential     : Webauthn credential to use for registration</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;map&#39;) Metadata              : Metadata to attach to the &#39;WhoIs&#39; record</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br></div></div><h3 id="registerapplication-register-s-a-new-application-for-the-sonr-network" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#registerapplication-register-s-a-new-application-for-the-sonr-network" aria-hidden="true">#</a> <code class="__vbk__">RegisterApplication()</code> - Register's a new Application for the Sonr Network</h3>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Creator                : The Account Address signing this message</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;Credential&#39;) Credential         : Webauthn credential to use for registration</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) ApplicationName        : The Name of the Application being registered</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) ApplicationDescription : Short about description of the App</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) ApplicationURL         : Website/Homepage of the App</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) ApplicationCategory    : Category of the Application Type</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br><span class="line-number __vbk__">6</span><br></div></div><h3 id="accessname-accesses-a-particular-name-essentially-a-login-function" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#accessname-accesses-a-particular-name-essentially-a-login-function" aria-hidden="true">#</a> <code class="__vbk__">AccessName()</code> - Accesses a particular name essentially a &quot;Login&quot; function</h3>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Creator            : The Account Address signing this message</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;Credential&#39;) Credential     : Webauthn credential to use for registration</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Name               : The name to authenticate and retreive data</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br></div></div><h3 id="accessapplication-accesses-a-particular-application-essentially-a-register-function" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#accessapplication-accesses-a-particular-application-essentially-a-register-function" aria-hidden="true">#</a> <code class="__vbk__">AccessApplication()</code> - Accesses a particular application essentially a &quot;Register&quot; function</h3>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) AppName                : The Name of the Application being accessed</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Creator                : The Account Address signing this message</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;Credential&#39;) Credential         : Webauthn Credential of the authenticated user</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br></div></div><h2 id="record-type-whois" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#record-type-whois" aria-hidden="true">#</a> Record Type: <code class="__vbk__">WhoIs</code></h2>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Name           : Name is the registered name of the User or Application</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) DID            : DID is the DID of the account</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;bytes&#39;) Document       : Document is the DID Document of the registered name and account encoded as JSON</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Creator        : Creator is the Account Address of the creator of the DID Document</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;Credential&#39;) Credentials    : Credentials are the biometric info of the registered name and account encoded with public key</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;Type&#39;) Type           : Type is the type of the registered name</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) MetaData       : Additional Metadata for associated WhoIs</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) Timestamp      : Timestamp is the time of the last update of the DID Document</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;string&#39;) IsActive       : IsActive is the status of the DID Document</span></span>
<span class="line"><span style="color: #D8DEE9FF">- (&#39;Enum&#39;) Type             : Type is the type of the registered name</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br><span class="line-number __vbk__">6</span><br><span class="line-number __vbk__">7</span><br><span class="line-number __vbk__">8</span><br><span class="line-number __vbk__">9</span><br><span class="line-number __vbk__">10</span><br></div></div><h2 id="status-codes" tabindex="-1" class="__vbk__"><a class="header-anchor __vbk__" href="#status-codes" aria-hidden="true">#</a> Status Codes</h2>
<div class="language-tex ext-tex line-numbers-mode __vbk__"><pre class="shiki __vbk__" style="background-color: #2e3440ff"><code><span class="line"><span style="color: #D8DEE9FF">200 - SUCCESS</span></span>
<span class="line"><span style="color: #D8DEE9FF">300 - MULTIPLE CHOICE</span></span>
<span class="line"><span style="color: #D8DEE9FF">304 - NOT MODIFIED</span></span>
<span class="line"><span style="color: #D8DEE9FF">400 - BAD REQUEST</span></span>
<span class="line"><span style="color: #D8DEE9FF">401 - NOT AUTHORIZED</span></span>
<span class="line"></span></code></pre><div class="line-numbers __vbk__"><span class="line-number __vbk__">1</span><br><span class="line-number __vbk__">2</span><br><span class="line-number __vbk__">3</span><br><span class="line-number __vbk__">4</span><br><span class="line-number __vbk__">5</span><br></div></div>`,a;return{c(){s=new _(!1),a=t(),this.h()},l(e){s=d(e,!1),a=t(),this.h()},h(){s.a=a},m(e,i){s.m(r,e,i),b(e,a,i)},p:n,i:n,o:n,d(e){e&&u(a),e&&s.d()}}}const m={excerpt:"",headers:[{level:2,title:"Overview",slug:"overview",children:[]},{level:2,title:"Usage",slug:"usage",children:[{level:3,title:"RegisterName() - Register's a new '.snr' domain name for an account",slug:"registername-register-s-a-new-snr-domain-name-for-an-account",children:[]},{level:3,title:"RegisterApplication() - Register's a new Application for the Sonr Network",slug:"registerapplication-register-s-a-new-application-for-the-sonr-network",children:[]},{level:3,title:'AccessName() - Accesses a particular name essentially a "Login" function',slug:"accessname-accesses-a-particular-name-essentially-a-login-function",children:[]},{level:3,title:'AccessApplication() - Accesses a particular application essentially a "Register" function',slug:"accessapplication-accesses-a-particular-application-essentially-a-register-function",children:[]}]},{level:2,title:"Record Type: WhoIs",slug:"record-type-whois",children:[]},{level:2,title:"Status Codes",slug:"status-codes",children:[]}],title:"Overview",frontmatter:{title:"Overview"},lastUpdated:1657559699625};class g extends c{constructor(s){super(),o(this,s,null,h,p,{})}}export{m as __pageMeta,g as default};
