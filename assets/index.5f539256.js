import{o as i,c,p as M,a as C,b as d,d as p,t as z,e as A,r as j,F as x,f as T,u as r,g as w,h as g,i as b,j as h,k as y,l as L,m as D,n as I,q as S,s as k,v as $,w as E,x as N,y as P,z as W}from"./vendor.80eb0790.js";const G=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}};G();var m=(e,o)=>{const t=e.__vccOpts||e;for(const[a,n]of o)t[a]=n;return t};const H={},K=e=>(M("data-v-8310cd56"),e=e(),C(),e),U=K(()=>d("div",{class:"container"},[d("a",{href:"/",title:"Curium"}," Curium "),d("small",null,"Matrix / Element quick start guide")],-1)),R=[U];function V(e,o){return i(),c("header",null,R)}var q=m(H,[["render",V],["__scopeId","data-v-8310cd56"]]);const J=["value"],Q=["value"],X={key:0},Y=p({props:{options:null,selectedTree:{default:e=>[e.options[0].choice]},index:{default:0}},emits:["update:selected-tree"],setup(e,{emit:o}){const t=e,{options:a,selectedTree:n,index:s}=z(t),l=_=>{o("update:selected-tree",{index:s.value,choice:_})},u=A(()=>{const _=a.value.find(v=>v.choice===n.value[s.value]);return _||(l(a.value[0].choice),a.value[0])});return(_,v)=>{const B=j("PickerSelect",!0);return i(),c(x,null,[d("select",{value:r(u).choice,onInput:v[0]||(v[0]=f=>l(f.target.value))},[(i(!0),c(x,null,T(r(a),f=>(i(),c("option",{value:f.choice},w(f.choice),9,Q))),256))],40,J),r(u).postText?(i(),c("span",X,"\xA0"+w(r(u).postText)+"\xA0",1)):g("",!0),r(u).subOptions?(i(),b(B,{key:1,options:r(u).subOptions,"selected-tree":r(n),index:r(s)+1,"onUpdate:selectedTree":v[1]||(v[1]=f=>o("update:selected-tree",f))},null,8,["options","selected-tree","index"])):g("",!0)],64)}}});var Z=m(Y,[["__scopeId","data-v-24882c01"]]);const ee=y(" Ich will Element auf meinem "),te=y(" installieren. "),se=p({props:{selectedTree:null,optionTree:null},emits:["update:selected-tree"],setup(e,{emit:o}){const t=e,{selectedTree:a,optionTree:n}=z(t),s=l=>{a.value[l.index]=l.choice,o("update:selected-tree",a.value)};return(l,u)=>(i(),c("p",null,[ee,h(Z,{options:r(n),"selected-tree":r(a),"onUpdate:selectedTree":s},null,8,["options","selected-tree"]),te]))}});var ne=m(se,[["__scopeId","data-v-4893d24d"]]),re="/assets/step01.d74a95e3.webp",oe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:re}),ae="/assets/step02.00b5af8a.webp",ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ae}),le="/assets/step03.36e8708a.webp",ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le}),de="/assets/step04.b5c75a93.webp",ue=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:de}),_e="/assets/step05.1d22f29a.webp",pe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_e}),he="/assets/step06.c6f19ab9.webp",me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:he}),ge="/assets/step07.e3382b8c.webp",be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ge}),ve="/assets/step08.dd63e0a0.webp",fe=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ve}),xe="/assets/step09.920c5178.webp",Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xe}),we="/assets/step10.43574724.webp",ye=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:we}),ke="/assets/step11.167438a3.webp",$e=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ke});const Ee={"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},Me=d("path",{fill:"currentColor",d:"M34.52 239.03 228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"},null,-1),Ce=[Me];function ze(e,o){return i(),c("svg",Ee,Ce)}var Te={render:ze};const Fe={"aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"},Oe=d("path",{fill:"currentColor",d:"M285.476 272.971 91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"},null,-1),Be=[Oe];function Ae(e,o){return i(),c("svg",Fe,Be)}var je={render:Ae};const Le={class:"step"},De={class:"step-inner"},Ie={class:"nav nav-left"},Ne={class:"content"},Pe={class:"nav nav-right"},We=["innerHTML"],Ge={class:"progressbar"},He={class:"progress"},Ke=p({props:{currentIndex:null,length:null,description:{default:null}},emits:["update:current-index"],setup(e,{emit:o}){const t=e;L(u=>({"0b19c5bc":r(l)+"%"}));const a=()=>o("update:current-index",Math.max(0,t.currentIndex-1)),n=()=>o("update:current-index",Math.min(t.length-1,t.currentIndex+1)),s=u=>{switch(u.code){case"ArrowLeft":a();break;case"ArrowRight":case"Space":n();break}};D(()=>{window.addEventListener("keyup",s)}),I(()=>{window.removeEventListener("keyup",s)});const l=S(()=>(t.currentIndex+1)/t.length*100);return(u,_)=>(i(),c(x,null,[d("div",Le,[d("div",De,[d("div",Ie,[e.currentIndex>0?(i(),c("button",{key:0,onClick:a},[h(r(Te))])):g("",!0)]),d("div",Ne,[k(u.$slots,"default",{},void 0,!0)]),d("div",Pe,[e.currentIndex<e.length-1?(i(),c("button",{key:0,onClick:n},[h(r(je))])):g("",!0)])]),e.description?(i(),c("p",{key:0,innerHTML:e.description,class:"description"},null,8,We)):g("",!0)]),d("div",Ge,[d("div",He,w(r(l))+" %",1)])],64))}});var F=m(Ke,[["__scopeId","data-v-05156833"]]);const Ue={},Re=e=>(M("data-v-1de3ceca"),e=e(),C(),e),Ve={class:"laptop-wrapper"},qe={class:"body"},Je={class:"screen"},Qe=Re(()=>d("div",{class:"base"},null,-1));function Xe(e,o){return i(),c("div",Ve,[d("div",qe,[d("div",Je,[k(e.$slots,"default",{},void 0,!0)])]),Qe])}var Ye=m(Ue,[["render",Xe],["__scopeId","data-v-1de3ceca"]]);const Ze=y("    "),et=y(`
  `),tt=p({props:{code:null},setup(e){const t=$(e.code.split(`
`).map(a=>a.trim()).filter(Boolean));return(a,n)=>(i(),c("pre",null,[Ze,(i(!0),c(x,null,T(t.value,s=>(i(),c("span",null,w(s),1))),256)),et]))}});var st=m(tt,[["__scopeId","data-v-b3c76d42"]]);const nt=p({setup(e){const o=`
  sudo apt install -y wget apt-transport-https
  sudo wget -O /usr/share/keyrings/element-io-archive-keyring.gpg https://packages.element.io/debian/element-io-archive-keyring.gpg
  echo "deb [signed-by=/usr/share/keyrings/element-io-archive-keyring.gpg] https://packages.element.io/debian/ default main" | sudo tee /etc/apt/sources.list.d/element-io.list
  sudo apt update
  sudo apt install element-desktop
`;return(t,a)=>(i(),b(st,{code:o}))}});const rt=["href"],ot=p({props:{url:null},setup(e){return(o,t)=>(i(),c("a",{href:e.url,class:"btn",target:"_blank"},[k(o.$slots,"default")],8,rt))}}),at=["alt","src"],it=p({props:{operatingSystem:null},setup(e){const o=e,t=Object.values({"../../assets/screenshots/desktop/step01.webp":oe,"../../assets/screenshots/desktop/step02.webp":ie,"../../assets/screenshots/desktop/step03.webp":ce,"../../assets/screenshots/desktop/step04.webp":ue,"../../assets/screenshots/desktop/step05.webp":pe,"../../assets/screenshots/desktop/step06.webp":me,"../../assets/screenshots/desktop/step07.webp":be,"../../assets/screenshots/desktop/step08.webp":fe,"../../assets/screenshots/desktop/step09.webp":Se,"../../assets/screenshots/desktop/step10.webp":ye,"../../assets/screenshots/desktop/step11.webp":$e}),a=S(()=>{const l=[{imgSrc:t[0].default,alt:"Element Willkommens Bildschirm",desc:"Element ist ein Client f\xFCr Matrix, so wie Thunderbird ein Client f\xFCr E-Mail ist. Es gibt noch viele weitere Clients f\xFCr Matrix. Dr\xFCcke auf <code>Konto erstellen</code>."},{imgSrc:t[1].default,alt:"Element Konto anlegen Bildschirm",desc:`Wie bei E-Mail gibt es verschiedene Anbieter f\xFCr dein Matrix Konto, die sog. Homeserver betreiben. <code>matrix.org</code> ist der Gr\xF6\xDFte.
            Damit nicht alle beim gleichen Anbieter sind, w\xE4hlen wir mit <code>Bearbeiten</code> einen anderen aus.`},{imgSrc:t[2].default,alt:"Element Homeserver ausw\xE4hlen Bildschirm",desc:"W\xE4hle <code>Anderer Homeserver</code> aus und gebe einen deiner Wahl an, bspw. <code>chat.livingutopia.org</code>."},{imgSrc:t[3].default,alt:"Element Homeserver ausw\xE4hlen Bildschirm",desc:`Gib deinen gew\xFCnschten Benutzernamen und Passwort ein. Optional kannst du eine E-Mail angeben, mit der dich
            andere finden k\xF6nnen und du dein Passwort zur\xFCcksetzen kannst. Mit <code>Registrieren</code> geht's weiter.`},{imgSrc:t[5].default,alt:"Element Start Bildschirm ohne Chatnachrichten",desc:`Herzlichen Gl\xFCckwunsch, du hast nun ein Matrix Konto! Wenn du Element bei der Entwicklung unterst\xFCtzen
            m\xF6chtest, kannst du anonyme Nutzungsdaten teilen.`},{imgSrc:t[6].default,alt:"Element Start Bildschirm ohne Chatnachrichten",desc:`Mit einem Klick auf <code>Direktnachricht senden</code> kannst du deine erste Nachricht schreiben.
            Du erreichst Leute \xFCber ihre Matrix ID, also z.B. <code>@benutzername:livingutopia.org</code>`},{imgSrc:t[7].default,alt:"Element Beispiel Nachricht Bildschirm",desc:"Nachdem du deine erste Nachricht gesendet hast, wirst du aufgefordert deine Schl\xFCssel zu sichern."},{imgSrc:t[8].default,alt:"Element Schl\xFCsselsicherung einrichten Bildschirm",desc:`Las dir einen Sicherheitsschl\xFCssel generieren. Du brauchst ihn, um deine Nachrichten wieder entschl\xFCsseln zu k\xF6nnen,
            falls du dich aus irgendeinem Grund auf allen Ger\xE4ten ausgeloggt hast.`},{imgSrc:t[9].default,alt:"Element Schl\xFCsselsicherung einrichten Bildschirm",desc:`Speicher den Sicherheitsschl\xFCssel oder schreib ihn in dein Notizbuch. Am besten aufgehoben
            ist er in einem <a href="https://keepassxc.org/" target="_blank">Passwort Manager</a>.`},{imgSrc:t[10].default,alt:"Element Schl\xFCsselsicherung einrichten Bildschirm",desc:"Super! Nun bist du Startklar!"}];switch(o.operatingSystem){case"Ubuntu":case"Linux Mint":l.unshift({component:nt,desc:`\xD6ffne ein Terminal und installiere Element mit den angezeigten Kommandos. Die Kommandos stammen von der offiziellen
            <a href="https://element.io/get-started#linux">Element Webseite</a>.`});break;case"Windows":case"macOS":l.unshift({component:N(ot,{url:"https://element.io/get-started#download"},"Download Element"),desc:`Lade Element Desktop von der offiziellen <a href="https://element.io/get-started#download">Element Webseite</a>
            herunter und installiere das Programm.`});break}return l}),n=$(0),s=S(()=>a.value[n.value]);return(l,u)=>(i(),b(F,{"current-index":n.value,"onUpdate:current-index":u[0]||(u[0]=_=>n.value=_),length:r(a).length,description:r(s).desc},{default:E(()=>[h(Ye,null,{default:E(()=>[r(s).component?(i(),b(P(r(s).component),{key:0})):(i(),c("img",{key:1,alt:r(s).alt,src:r(s).imgSrc},null,8,at))]),_:1})]),_:1},8,["current-index","length","description"]))}});var lt="/assets/step00-fdroid.ab21a83b.webp",ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:lt}),dt="/assets/step01.449487a5.webp",ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:dt}),_t="/assets/step02.b74fc97d.webp",pt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:_t}),ht="/assets/step03.a30340c9.webp",mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ht}),gt="/assets/step04.fc24447e.webp",bt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:gt}),vt="/assets/step05.9a877ed4.webp",ft=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:vt}),xt="/assets/step06.ee1eee45.webp",St=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xt}),wt="/assets/step07.0dfb99d2.webp",yt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:wt}),kt="/assets/step08.108c1c9d.webp",$t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:kt}),Et="/assets/step09.944103c4.webp",Mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Et}),Ct="/assets/step10.0d52ef12.webp",zt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ct}),Tt="/assets/step11.4ad11bdd.webp",Ft=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Tt});const Ot={},O=e=>(M("data-v-785748ec"),e=e(),C(),e),Bt={class:"mobile-wrapper"},At=O(()=>d("div",{class:"mobile-outline-top"},null,-1)),jt={class:"mobile-outline-body"},Lt={class:"mobile-body-inner"},Dt=O(()=>d("div",{class:"mobile-outline-bottom"},null,-1));function It(e,o){return i(),c("div",Bt,[At,d("div",jt,[d("div",Lt,[k(e.$slots,"default",{},void 0,!0)])]),Dt])}var Nt=m(Ot,[["render",It],["__scopeId","data-v-785748ec"]]),Pt="/assets/google_play_badge.f3db90e9.png";const Wt=["title","href"],Gt=["alt","src"],Ht=["alt","src"],Kt=p({props:{store:null},setup(e){const o=e,t=Object.values({"../../assets/screenshots/android/step00-fdroid.webp":ct,"../../assets/screenshots/android/step01.webp":ut,"../../assets/screenshots/android/step02.webp":pt,"../../assets/screenshots/android/step03.webp":mt,"../../assets/screenshots/android/step04.webp":bt,"../../assets/screenshots/android/step05.webp":ft,"../../assets/screenshots/android/step06.webp":St,"../../assets/screenshots/android/step07.webp":yt,"../../assets/screenshots/android/step08.webp":$t,"../../assets/screenshots/android/step09.webp":Mt,"../../assets/screenshots/android/step10.webp":zt,"../../assets/screenshots/android/step11.webp":Ft}),a=S(()=>{const l=[{imgSrc:Pt,link:"https://play.google.com/store/apps/details?id=im.vector.app",alt:"Download Element im Google Play Store",desc:'Suche nach "Element" im Google Play Store.'},{imgSrc:t[1].default,alt:"Element Willkommens Bildschirm",desc:"Element ist ein Client f\xFCr Matrix, so wie Thunderbird ein Client f\xFCr E-Mail ist. Es gibt noch viele weitere Clients f\xFCr Matrix."},{imgSrc:t[2].default,alt:"Element Server Auswahl Bildschirm",desc:`Wie bei E-Mail gibt es verschiedene Anbieter f\xFCr dein Matrix Konto, die sog. Homeserver betreiben. <code>matrix.org</code> ist der Gr\xF6\xDFte.
            Damit nicht alle beim gleichen Anbieter sind, w\xE4hlen wir mit <code>Andere</code> einen anderen aus.`},{imgSrc:t[3].default,alt:"Element Andere Server Bildschirm",desc:"Gib deinen gew\xFCnschten Server bei Adresse ein, bspw. <code>chat.livingutopia.org</code>."},{imgSrc:t[4].default,alt:"Element Registrieren Bildschirm",desc:"Wir registrieren einen neuen Account. Merk dir das Passwort, du brauchst es, um dich mit anderen Ger\xE4ten, wie z.B. deinem Laptop einzuloggen."},{imgSrc:t[6].default,alt:"Element E-Mail Bildschirm",desc:"Du kannst optional eine E-Mail Adresse angeben, mit der dich andere finden k\xF6nnen und du dein Passwort zur\xFCcksetzen kannst."},{imgSrc:t[7].default,alt:"Element Nutzungsdaten Bildschirm",desc:"Wenn du Element bei der Entwicklung unterst\xFCtzen m\xF6chtest, kannst du anonyme Nutzungsdaten teilen."},{imgSrc:t[8].default,alt:"Element leerer Start Bildschirm",desc:"Herzlichen Gl\xFCckwunsch! Du hast dein Matrix Konto erfolgreich erstellt. Jetzt noch die erste Nachricht schreiben :)"}];return o.store==="F-Droid"&&(l[0]={imgSrc:t[0].default,alt:"Die Element App im F-Droid Store",desc:'Suche nach "Element" im F-Droid Store. F-Droid ist ein alternativer App-Store mit ausschlie\xDFlich Open Source Apps.'}),l}),n=$(0),s=S(()=>a.value[n.value]);return(l,u)=>(i(),b(F,{"current-index":n.value,"onUpdate:current-index":u[0]||(u[0]=_=>n.value=_),length:r(a).length,description:r(s).desc},{default:E(()=>[h(Nt,{style:{"max-width":"20rem"}},{default:E(()=>[r(s).link?(i(),c("a",{key:0,title:r(s).alt,href:r(s).link,target:"_blank"},[d("img",{alt:r(s).alt,src:r(s).imgSrc},null,8,Gt)],8,Wt)):(i(),c("img",{key:1,alt:r(s).alt,src:r(s).imgSrc},null,8,Ht))]),_:1})]),_:1},8,["current-index","length","description"]))}}),Ut=p({props:{selectedTree:null},setup(e){const o=e,{selectedTree:t}=z(o);return(a,n)=>(i(),c(x,null,[r(t)[0]==="Computer"?(i(),b(it,{key:0,"operating-system":r(t)[1]},null,8,["operating-system"])):g("",!0),r(t)[0]==="Smartphone"?(i(),b(Kt,{key:1,store:r(t)[2]},null,8,["store"])):g("",!0)],64))}});const Rt={class:"container"},Vt=p({setup(e){const o=[{choice:"Smartphone",postText:"mit",subOptions:[{choice:"Android",postText:"mittels",subOptions:[{choice:"Play Store"},{choice:"F-Droid"}]}]},{choice:"Computer",postText:"mit dem Betriebssystem",subOptions:[{choice:"Ubuntu"},{choice:"Linux Mint"},{choice:"macOS"},{choice:"Windows"}]}],t=(n,s=[])=>n[0].subOptions?(s.push(n[0].choice),t(n[0].subOptions,s)):[...s,n[0].choice],a=$(t(o));return(n,s)=>(i(),c(x,null,[h(q),d("main",null,[d("div",Rt,[h(ne,{"selected-tree":a.value,"onUpdate:selected-tree":s[0]||(s[0]=l=>a.value=l),"option-tree":o},null,8,["selected-tree"]),h(Ut,{"selected-tree":a.value},null,8,["selected-tree"])])])],64))}});var qt=m(Vt,[["__scopeId","data-v-0876a3bc"]]);W(qt).mount("#app");
