import{_ as P,f as T,u as C,H as x,Y as B,r as I,o as a,c as n,h as e,x as M,y as o,d,F as $,E as H,g as V,w as F,e as N,t as _,z as S,b as v,j as A,V as w,i as L,S as G,D as R,G as D,M as z,N as j,Z as E,k as O,A as b}from"./app.73c5f9e8.js";import{f as Y}from"./resolveTime.7e2957b0.js";const Z={class:"article-header-content"},q={key:0,class:"article-tags"},J={class:"article-title"},K={key:1,class:"article-subtitle"},Q={class:"article-icons"},U={key:0,class:"article-icon"},W={key:1,class:"article-icon"},X={key:2,class:"article-icon"},ee={key:1,class:"article-image-credit"},te=["href"],se={key:1},ae=T({__name:"ArticleHeader",props:{currentTag:{type:String,default:""}},setup(k){const m=C(),t=x(),i=A(),g=B(),c=s=>{var h;return((h=g.value.map[s])==null?void 0:h.path)||"/"},u=()=>{const s={};return t.value.layout==="Post"&&t.value.useHeaderImage&&t.value.headerImage&&(s.backgroundImage=`url(${w(t.value.headerImage)})`),s},l=m.value.personalInfo;return(s,h)=>{const f=I("RouterLink"),p=I("VIcon");return a(),n("div",{class:S(["article-header",{"use-image":e(t).useHeaderImage}]),style:M(u())},[e(t).useHeaderImage&&e(t).headerMask?(a(),n("div",{key:0,class:"article-header-mask",style:M({background:e(t).headerMask})},null,4)):o("",!0),d("div",Z,[e(t).tags?(a(),n("div",q,[(a(!0),n($,null,H(e(t).tags,(r,y)=>(a(),V(f,{key:y,class:S(["article-tag",{active:k.currentTag==r}]),to:c(r)},{default:F(()=>[N(_(r),1)]),_:2},1032,["class","to"]))),128))])):o("",!0),d("h1",J,_(e(t).title),1),e(t).subtitle?(a(),n("p",K,_(e(t).subtitle),1)):o("",!0),d("div",Q,[e(t).author||e(l).name?(a(),n("div",U,[v(p,{name:"fa-regular-user"}),d("span",null,_(e(t).author||e(l).name),1)])):o("",!0),e(t).date?(a(),n("div",W,[v(p,{name:"fa-regular-calendar"}),d("span",null,_(e(Y)(e(t).date)),1)])):o("",!0),e(i).readingTime?(a(),n("div",X,[v(p,{name:"ri-timer-line"}),d("span",null,_(e(i).readingTime.minutes)+" min",1)])):o("",!0)])]),e(t).useHeaderImage&&e(t).headerImageCredit?(a(),n("div",ee,[N(_(e(m).headerImageCredit)+" ",1),e(t).headerImageCreditLink?(a(),n("a",{key:0,href:e(t).headerImageCreditLink,target:"_blank",rel:"noopener noreferrer"},_(e(t).headerImageCredit),9,te)):(a(),n("span",se,_(e(t).headerImageCredit),1))])):o("",!0)],6)}}});var Ce=P(ae,[["__file","ArticleHeader.vue"]]);const ne={class:"page-meta"},re={key:0,class:"meta-item contributors"},oe={class:"meta-item-label"},ie={class:"meta-item-info"},ce=["title"],le=N(", "),ue=T({__name:"PageMeta",setup(k){const m=()=>{const g=C(),c=A(),u=x();return L(()=>{var s,h,f,p;return((h=(s=u.value.contributors)!=null?s:g.value.contributors)!=null?h:!0)&&(p=(f=c.value.git)==null?void 0:f.contributors)!=null?p:null})},t=C(),i=m();return(g,c)=>(a(),n("footer",ne,[e(i)&&e(i).length?(a(),n("div",re,[d("span",oe,_(e(t).contributorsText)+": ",1),d("span",ie,[(a(!0),n($,null,H(e(i),(u,l)=>(a(),n($,{key:l},[d("span",{class:"contributor",title:`email: ${u.email}`},_(u.name),9,ce),l!==e(i).length-1?(a(),n($,{key:0},[le],64)):o("",!0)],64))),128))])])):o("",!0)]))}});var _e=P(ue,[["__file","PageMeta.vue"]]);const de={key:0,class:"page-nav"},me={class:"inner"},he={key:0,class:"prev"},ge={key:1,class:"next"},pe=T({__name:"PageNav",setup(k){const m=s=>s===!1?null:z(s)?j(s):E(s)?s:!1,t=(s,h,f)=>{const p=s.findIndex(r=>r.link===h);if(p!==-1){const r=s[p+f];return r!=null&&r.link?r:null}for(const r of s)if(r.children){const y=t(r.children,h,f);if(y)return y}return null},i=x(),g=G(),c=R(),u=L(()=>{const s=m(i.value.prev);return s!==!1?s:t(g.value,c.path,-1)}),l=L(()=>{const s=m(i.value.next);return s!==!1?s:t(g.value,c.path,1)});return(s,h)=>e(u)||e(l)?(a(),n("nav",de,[d("p",me,[e(u)?(a(),n("span",he,[v(D,{item:e(u)},null,8,["item"])])):o("",!0),e(l)?(a(),n("span",ge,[v(D,{item:e(l)},null,8,["item"])])):o("",!0)])])):o("",!0)}});var ve=P(pe,[["__file","PageNav.vue"]]);const fe={class:"page"},ke={class:"theme-gungnir-content"},ye=T({__name:"Page",setup(k){const m=C(),t=x(),{isDarkMode:i}=O(),g=L(()=>i.value?m.value.giscusDarkTheme:m.value.giscusLightTheme);return(c,u)=>{const l=I("Content"),s=I("GungnirGiscus");return a(),n("main",fe,[b(c.$slots,"top"),d("div",ke,[b(c.$slots,"content-top"),v(l),b(c.$slots,"content-bottom")]),v(_e),v(ve),b(c.$slots,"bottom"),e(t).giscus!==!1?(a(),V(s,{key:0,theme:e(g)},null,8,["theme"])):o("",!0)])}}});var Ie=P(ye,[["__file","Page.vue"]]);export{Ce as A,Ie as P};