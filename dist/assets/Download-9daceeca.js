import{_ as u,o as e,c as s,a as o,b as y,g as m,t as n,f as B,F as g,l as k,d,e as r,w,m as b,r as x,T as z,n as S}from"./index-b046e140.js";const I={props:{text:{type:String,required:!0},href:String,bgColor:String,color:String,borderColor:String,icon:String}},N=["href"],L=["src"],F=o("a",{href:""},null,-1);function T(t,h,l,p,_,f){return e(),s(g,null,[o("a",{href:l.href,class:"w-fit py-2.5 px-8 rounded-full outline-none text-xs tracking-wider uppercase flex-center gap-2",style:B({backgroundColor:l.bgColor?"#"+l.bgColor:"#00000000",color:l.color?"#"+l.color:"#ffffff",border:l.borderColor?"1px solid #"+l.borderColor:"1px solid #"+l.bgColor})},[l.icon?(e(),s("img",{key:0,loading:"lazy",src:l.icon,alt:"",width:"16",class:"inline"},null,8,L)):y("",!0),m(" "+n(l.text),1)],12,N),F],64)}const v=u(I,[["render",T]]),H={props:{icon:{type:String,required:!0},url:String,label:String}},j={class:"w-10 h-10 p-2.5 rounded-full border-[1px] border-white cursor-pointer hover:opacity-50 opacity-80"},q=["href"],E=["src","alt"];function V(t,h,l,p,_,f){return e(),s("div",j,[o("a",{href:l.url},[o("img",{loading:"lazy",src:l.icon,alt:l.label,class:"w-full hover:opacity-100 opacity-80"},null,8,E)],8,q)])}const P=u(H,[["render",V]]),Q={data(){return{logo:k}},components:{DownloadButton:v}},A={class:"download-container-wider w-full h-16 py-9 pl-28 pr-4 flex items-center justify-between text-sm"},M={class:"flex-center gap-2"},R=["src"],U={class:"custom-development flex items-center gap-9"};function Y(t,h,l,p,_,f){const a=d("router-link"),c=d("DownloadButton");return e(),s("header",A,[o("div",M,[o("img",{loading:"lazy",src:_.logo,alt:"",class:"logo-black w-9"},null,8,R),r(a,{to:{name:"home"},class:"font-semibold text-base cursor-pointer"},{default:w(()=>[m(" Vue Notus ")]),_:1})]),o("div",U,[r(a,{to:"/",class:"font-semibold text-xs text-download-nav-blue tracking-wide uppercase cursor-pointer"},{default:w(()=>[m(" Custom Development ")]),_:1}),r(a,{to:{name:"live-preview"},class:"font-semibold text-xs text-download-nav-blue tracking-wide uppercase cursor-pointer"},{default:w(()=>[m(" Preview ")]),_:1}),r(a,{to:{name:"docs"},class:"font-semibold text-xs text-download-nav-blue tracking-wide uppercase cursor-pointer"},{default:w(()=>[m(" Docs ")]),_:1}),r(c,{text:"Download",bgColor:"00BBFF"})])])}const G=u(Q,[["render",Y]]),J={data(){return{logo:k}},computed:{...b({quickLinks:t=>t.quickLinks})}},K={class:"download-container-wider w-full py-10 text-white"},O={class:"w-full flex justify-between items-center"},W={class:"flex-center"},X=["src"],Z={class:"flex gap-4"},oo={class:"flex-center flex-col gap-2 text-xs cursor-pointer"},to=["src"],eo=["src"];function so(t,h,l,p,_,f){const a=d("router-link");return e(),s("section",K,[o("div",O,[o("div",W,[o("img",{loading:"lazy",src:_.logo,alt:"",width:"40",class:"logo-white"},null,8,X),r(a,{to:{name:"home"},class:"max-w-[5rem] ml-2 text-md tracking-wide"},{default:w(()=>[m(n(t.quickLinks.title),1)]),_:1})]),o("nav",Z,[(e(!0),s(g,null,x(t.quickLinks.links,c=>(e(),s("ul",{key:c.id},[o("li",oo,[o("img",{loading:"lazy",src:c.iconUrl,alt:"",width:"20"},null,8,to),o("span",null,[m(n(c.label)+" ",1),c.dropdownIcon?(e(),s("img",{key:0,loading:"lazy",src:c.dropdownIcon,alt:"",class:"w-3 inline"},null,8,eo)):y("",!0)])])]))),128))])])])}const no=u(J,[["render",so]]),lo={components:{DownloadButton:v},computed:{...b({hero:t=>t.downloadHero})}},ro={class:"download-container-wider pb-40 w-full text-white flex"},co={class:"w-1/2"},io=["src"],ao={class:"mt-8 flex-center gap-4"},_o={class:"w-1/2 flex-center flex-col pl-32"},uo={class:"text-3xl"},ho={class:"mt-5 uppercase text-sm font-base tracking-wide"},po={class:"flex-center mt-10"},fo=["src"],mo=["src"],go=["src"],wo=["src"],xo=["src"],bo={class:"ml-2 text-sm"},$o={class:"mt-5 flex-center gap-2"},vo=["src"],yo=o("div",{class:"my-5 w-full h-[0.6px] bg-white opacity-30"},null,-1);function ko(t,h,l,p,_,f){const a=d("DownloadButton");return e(),s("section",ro,[o("div",co,[o("img",{loading:"lazy",src:t.hero.image,alt:"",class:"w-11/12 rounded-3xl"},null,8,io),o("div",ao,[r(a,{text:t.hero.button2Text,bgColor:t.hero.button2BgColor,color:t.hero.button2Color,borderColor:t.hero.button2BorderColor},null,8,["text","bgColor","color","borderColor"]),r(a,{text:t.hero.button3Text,bgColor:t.hero.button3BgColor,color:t.hero.button3Color},null,8,["text","bgColor","color"])])]),o("div",_o,[o("h1",uo,n(t.hero.title),1),o("p",ho,n(t.hero.tagline),1),o("div",po,[o("img",{loading:"lazy",src:t.hero.icon1,alt:"",width:"20"},null,8,fo),o("img",{loading:"lazy",src:t.hero.icon1,alt:"",width:"20"},null,8,mo),o("img",{loading:"lazy",src:t.hero.icon1,alt:"",width:"20"},null,8,go),o("img",{loading:"lazy",src:t.hero.icon1,alt:"",width:"20"},null,8,wo),o("img",{loading:"lazy",src:t.hero.icon1,alt:"",width:"20"},null,8,xo),o("p",bo,n(t.hero.rating)+" ("+n(t.hero.reviews)+" Reviews) ",1)]),o("div",$o,[o("img",{loading:"lazy",src:t.hero.icon2,alt:"",width:"20"},null,8,vo),o("span",null,n(t.hero.licence),1)]),yo,r(a,{text:t.hero.button1Text,bgColor:t.hero.button1BgColor,color:t.hero.button1Color},null,8,["text","bgColor","color"])])])}const Co=u(lo,[["render",ko]]),Do={computed:{...b({productDescription:t=>t.productDescription})}},Bo={class:"w-full"};function zo(t,h,l,p,_,f){return e(),s("section",Bo)}const So=u(Do,[["render",zo]]),Io={computed:{...b({sharingIsCaring:t=>t.sharingIsCaring})},components:{DownloadButton:v}},No={class:"mt-20 mx-auto w-fit text-white text-3xl"},Lo={class:"mx-auto mt-10 w-fit flex-center gap-2"};function Fo(t,h,l,p,_,f){const a=d("DownloadButton");return e(),s("section",null,[o("h3",No,n(t.sharingIsCaring.text),1),o("div",Lo,[(e(!0),s(g,null,x(t.sharingIsCaring.buttons,c=>(e(),s("div",{key:c.id},[r(a,{text:c.label,icon:c.icon,color:c.color,bgColor:c.bgColor,href:c.link},null,8,["text","icon","color","bgColor","href"])]))),128))])])}const To=u(Io,[["render",Fo]]),Ho={computed:{...b({help:t=>t.help})},components:{DownloadButton:v}},jo={class:"download-container-tighter w-full px-5 py-10 rounded-2xl bg-white text-download-text-color -translate-y-20"},qo={class:"max-w-lg w-full mx-auto"},Eo={class:"text-3xl font-semibold text-center"},Vo={class:"text-center text-lg mt-10 mb-5"},Po={class:"flex justify-start flex-wrap gap-2"},Qo={class:"hover:opacity-100 opacity-70"},Ao={class:"flex mt-5 ml-5"},Mo={class:"w-14 h-14 border-2 border-[#666666] rounded-full border-opacity-60 flex-center p-1.5"},Ro=["src"],Uo={class:"ml-4 text-download-dim-black"},Yo={class:"flex gap-2 items-end"},Go={class:"text-[9px] text-download-nav-blue px-1.5 py-0.5 border-[0.5px] border-download-nav-blue rounded-md uppercase"},Jo={class:"text-[9px]"},Ko={class:"mt-1 text-sm"},Oo=o("div",{class:"mt-6 mb-2 h-[0.6px] w-full bg-download-text-color opacity-10"},null,-1),Wo={class:"ml-5"},Xo={class:"text-download-nav-blue"};function Zo(t,h,l,p,_,f){const a=d("DownloadButton"),c=d("router-link");return e(),s("section",jo,[o("div",qo,[o("h3",Eo,n(t.help.topline),1),o("p",Vo,n(t.help.details),1),o("div",Po,[(e(!0),s(g,null,x(t.help.buttons,i=>(e(),s("ul",{key:i.id},[o("li",Qo,[r(a,{text:i.text,icon:i.icon,href:i.link,color:"666666",borderColor:"666666"},null,8,["text","icon","href"])])]))),128))])]),o("div",Ao,[o("div",Mo,[o("img",{loading:"lazy",src:t.help.logo,alt:"",class:"logo-black"},null,8,Ro)]),o("div",Uo,[o("div",Yo,[o("span",null,n(t.help.testimonial.username),1),o("span",Go,n(t.help.testimonial.action),1),o("span",Jo,n(t.help.testimonial.time),1)]),o("p",Ko,n(t.help.testimonial.comment),1)])]),Oo,o("p",Wo,[m(n(t.help.login.instruction)+" ",1),o("span",Xo,[r(c,{to:t.help.login.buttonLink},{default:w(()=>[m(n(t.help.login.buttonText),1)]),_:1},8,["to"])])])])}const ot=u(Ho,[["render",Zo]]),tt={components:{DownloadButton:v,DownloadFooterIcon:P},computed:{...b({footer:t=>t.downloadFooter})}},et={class:"download-container-wider w-full pt-10 flex flex-col"},st={class:"download-container-tighter w-full"},nt={class:"flex justify-between items-end"},lt={class:"flex flex-col items-start justify-center gap-1"},rt={class:"text-xl"},ct={class:"text-sm"},it={class:""},at={class:"block text-3xl text-footer-text-color hover:text-white"},dt={class:"mt-4 flex gap-4"},_t=["placeholder"],ut={class:"my-20 flex justify-between items-start tracking-wide"},ht={class:"text-lg mb-4"},pt={class:"mt-2 text-footer-text-color text-sm hover:text-white"},ft=["href"],mt=o("div",{class:"w-full h-[0.6px] opacity-20 bg-footer-text-color"},null,-1),gt={class:"my-20 mx-auto"},wt={class:"flex-center flex-col gap-1"},xt=["src"],bt={class:"text-xs tracking-wider"},$t={class:"mt-4 flex-center gap-2"},vt={class:"mt-8 text-xs tracking-wider"};function yt(t,h,l,p,_,f){const a=d("DownloadButton"),c=d("DownloadFooterIcon");return e(),s("footer",et,[o("div",st,[o("div",nt,[(e(!0),s(g,null,x(t.footer.stats,i=>(e(),s("div",{key:i.id},[o("p",lt,[o("span",rt,n(i.numbers),1),o("span",ct,n(i.label),1)])]))),128)),o("div",it,[o("label",at,n(t.footer.newsletter.CTA),1),o("div",dt,[o("input",{type:"text",placeholder:t.footer.newsletter.placeholder,class:"px-4 rounded bg-[#4A3D6E]"},null,8,_t),r(a,{text:t.footer.newsletter.buttonText,bgColor:t.footer.newsletter.buttonBgColor,icon:t.footer.newsletter.buttonIcon},null,8,["text","bgColor","icon"])])])]),o("div",ut,[(e(!0),s(g,null,x(t.footer.footerLinks,i=>(e(),s("div",{key:i.id},[o("p",ht,n(i.label),1),(e(!0),s(g,null,x(i.links,$=>(e(),s("ul",{key:$.id,class:""},[o("li",pt,[o("a",{href:$.url},n($.label),9,ft)])]))),128))]))),128))])]),mt,o("div",gt,[o("div",wt,[o("img",{loading:"lazy",src:t.footer.logo,alt:"",class:"logo-white w-10"},null,8,xt),o("h3",bt,n(t.footer.title),1),o("div",$t,[(e(!0),s(g,null,x(t.footer.socialMedia,i=>(e(),s("div",{key:i.id},[r(c,{label:i.label,icon:i.icon,url:i.url},null,8,["label","icon","url"])]))),128))]),o("p",vt,n(t.footer.copyright),1)])])])}const kt=u(tt,[["render",yt]]);const Ct={data(){return{showNavbar:!1}},mounted(){window.addEventListener("scroll",this.handleScroll)},destroyed(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll(){const t=window.scrollY||document.documentElement.scrollTop;this.showNavbar=t>=100,console.log(this.showNavbar)}},components:{Navbar:G,QuickLinks:no,Hero:Co,ProductDescription:So,SharingIsCaring:To,Help:ot,Footer:kt}},Dt={class:"w-full sticky top-0 z-50 shadow-md bg-white"},Bt={class:"download-hero-gradient-color"},zt=o("div",{class:"download-container-wider w-full bg-white"},[o("div",{class:"w-full"})],-1),St={class:"bg-download-dim-black comment-background-img pb-20"},It={class:"bg-footer-bg-color text-white"};function Nt(t,h,l,p,_,f){const a=d("Navbar"),c=d("QuickLinks"),i=d("Hero"),$=d("Help"),C=d("SharingIsCaring"),D=d("Footer");return e(),s("div",Dt,[r(z,{name:"fade"},{default:w(()=>[_.showNavbar?(e(),s("div",{key:0,class:S({"fixed top-0 left-0 w-full z-50 bg-white shadow-lg":_.showNavbar})},[r(a)],2)):y("",!0)]),_:1}),o("main",null,[o("div",Bt,[r(c),r(i)]),zt,o("div",St,[r($),r(C)])]),o("div",It,[r(D)])])}const Ft=u(Ct,[["render",Nt]]);export{Ft as default};
