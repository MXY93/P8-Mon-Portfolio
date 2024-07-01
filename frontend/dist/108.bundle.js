"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[108],{6108:(e,t,n)=>{n.r(t),n.d(t,{default:()=>he});var l=n(6540),a=n(2389),r=n(5692),s=n(982),i=n(7875);const c=n.p+"src/assets/profile-pic.webp",o=n.p+"src/assets/profile-3D.webp",m=()=>l.createElement("div",{className:"profile-container"},l.createElement("div",{className:"profile-flip"},l.createElement("img",{src:c,alt:"Profile",loading:"lazy",className:"profile-pic front"}),l.createElement("img",{src:o,alt:"AI generated profile",loading:"lazy",className:"profile-pic back"})));var d=n(4791);function p(e){let{imgSrc:t,alt:n,text:a,onClick:r}=e;return l.createElement(d.P.button,{className:"box",whileHover:{scale:1.2},whileTap:{scale:.9},transition:{type:"spring",stiffness:400,damping:17},onClick:r},l.createElement("img",{src:t,loading:"lazy",alt:n}),l.createElement("p",null,a))}const u=n.p+"src/assets/SkillThree.webp",E=n.p+"src/assets/presentation-laptop.webp";function g(){const{t:e}=(0,a.Bd)(),t=e("job_title"),[n]=(0,r.d1)({words:[t],loop:!1,deleteSpeed:100});return l.createElement("div",{className:"presentation-container"},l.createElement("div",{className:"presentation-container---scene--titles--profile-n-links"},l.createElement("div",null,l.createElement("img",{src:E,loading:"lazy",alt:"Man typing on a computer",className:"laptopTyper"})),l.createElement("section",{className:"presentation-container--titles"},l.createElement("h1",null,"Maxime Videau Penez"),l.createElement("h2",null,l.createElement(r.bs,{cursorStyle:"<"})," ",n," ",l.createElement(r.bs,{cursorStyle:"/>"}))),l.createElement("section",{className:"presentation-container---profile-pic--n--links"},l.createElement("div",{className:"presentation-container--profile-pic"},l.createElement(m,null)),l.createElement("div",{className:"presentation-container--links"},l.createElement("a",{href:"https://github.com/MXY93",target:"_blank",rel:"noopener noreferrer"},l.createElement(s.g,{icon:i.Vz1,size:"2xl"})),l.createElement("a",{href:"https://www.linkedin.com/in/maximevideau/",target:"_blank",rel:"noopener noreferrer"},l.createElement(s.g,{icon:i.IAJ,size:"2xl"}))))),l.createElement("div",{className:"presentation-container---prg--btn"},l.createElement("p",null,l.createElement(a.x6,{i18nKey:"intro_text",components:{1:l.createElement("span",null),2:l.createElement("span",null)}},"Entré dans le monde de la ",l.createElement("span",null,"Tech")," depuis fin 2023, je ne cesse de m’épanouir dans l’apprentissage de ces nouvelles ",l.createElement("span",null,"compétences")," qui me permettent de construire des projets innovants. Passionné par le développement web, mon objectif à long terme serait de mener des projets de grandes envergures ayant un réel impact sociétal ou environnemental.")),l.createElement(p,{imgSrc:u,loading:"lazy",alt:"skill",text:e("button_skills"),onClick:()=>(e=>{const t=document.getElementById("skills"),n=document.getElementById("header").offsetHeight,l=t.getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:l,behavior:"smooth"})})()})))}var b,v,f,k=n(961),h=n(7581);function w(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}const y=h.Ay.div(b||(b=w(["\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.5);\n    z-index: 1001;\n"]))),N=h.Ay.div(v||(v=w(["\n    position: fixed;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    justify-content: space-evenly;\n    z-index: 1002;\n    top: 33%;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 85%;\n    height: 45%;\n    padding: 35px 15px;\n    background-color: white;\n    color: #2C3E50;\n    border-radius: 10px;\n    overflow: scroll;\n    h4 {\n        font-size: 2rem;\n    }\n    .overlay-subtitle {\n        font-size: 1.25rem;\n        font-weight: 600;\n    }\n    p {\n        font-size: 1.1rem;\n    }\n    .skills {\n        display: flex;\n        gap: 10px;\n        align-self: center;\n        .skill-tag {\n            padding: 3px;\n            font-size: 1.1rem;\n            @media (max-width: 400px){\n                font-size: 0.8rem;\n            }\n        }\n    }\n"]))),x=h.Ay.button(f||(f=w(["\n    position: absolute;\n    top: 0.25rem;\n    right: 0.25rem;\n    height: 1.75rem;\n    width: 1.75rem;\n    background-color: #2C3E50;\n    color: white;\n    border-radius: 20px;\n    cursor: pointer;\n    font-weight: bold;\n"])));function j(e){let{closeModal:t,title:n,description:a,descriptionOvl:r,skills:s}=e;return(0,l.useEffect)((()=>(document.body.classList.add("no-scroll"),()=>{document.body.classList.remove("no-scroll")})),[]),l.createElement(l.Fragment,null,l.createElement(y,{onClick:t}),l.createElement(N,null,l.createElement(x,{onClick:t},"X"),l.createElement("h4",null,n),l.createElement("p",{className:"overlay-subtitle"},a),l.createElement("p",{className:"overlay-prg"},r),l.createElement("div",{className:"skills"},s&&s.map(((e,t)=>l.createElement("span",{key:t,className:"skill-tag",style:{backgroundColor:e.backgroundColor,border:"3px solid ".concat(e.border),color:e.color}},e.name))))))}var _;const z=h.Ay.button(_||(C=["\n    width: fit-content;\n    background-color: #F2F5F8;\n    align-self: center;\n    padding: 10px 20px;\n    border-radius: 20px;\n    cursor: pointer;\n    transition: all 0.3s ease-in-out;\n    &:hover {\n        scale: 1.2;\n        background-color: #4782F0;\n        color: white;\n        font-weight: bold;\n    }\n    @media (max-width: 445px){\n        font-size: 2.7vw;\n    }\n    @media (max-width: 375px){\n        font-size: 3vw;\n    }\n"],O||(O=C.slice(0)),_=Object.freeze(Object.defineProperties(C,{raw:{value:Object.freeze(O)}}))));var C,O;function S(e){let{title:t,description:n,descriptionOvl:r,skills:s}=e;const[i,c]=(0,l.useState)(!1),{t:o}=(0,a.Bd)();return l.createElement(l.Fragment,null,l.createElement(z,{onClick:()=>c(!0)},o("modal_button")),i&&(0,k.createPortal)(l.createElement(j,{closeModal:()=>c(!1),title:t,description:n,descriptionOvl:r,skills:s}),document.body))}const F=function(e){let{image:t,title:n,description:a,descriptionOvl:r,skills:s=[]}=e;const[i,c]=(0,l.useState)(window.innerWidth<=600),[o,m]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{const e=()=>{c(window.innerWidth<=600)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),l.createElement(l.Fragment,null,l.createElement("div",{className:"project-card"},l.createElement("div",{className:"project-card-content"},l.createElement("img",{src:t,loading:"lazy",alt:"Project screenshot",className:"project-image"}),l.createElement("div",{className:"overlay"},i?l.createElement(S,{onClick:()=>m(!0),title:n,description:a,descriptionOvl:r,skills:s}):l.createElement(l.Fragment,null,l.createElement("h4",null,n),l.createElement("p",{className:"overlay-subtitle"},a),l.createElement("p",{className:"overlay-prg"},r),l.createElement("div",{className:"skills"},s.map(((e,t)=>l.createElement("span",{key:t,className:"skill-tag",style:{backgroundColor:e.backgroundColor,border:"3px solid ".concat(e.border),color:e.color}},e.name)))))))),o&&l.createElement(j,{closeModal:()=>m(!1),title:n,description:a,descriptionOvl:r,skills:s}))},B=n.p+"src/assets/projects/Booki-project.webp",M=n.p+"src/assets/projects/Bluel-project.webp",P=n.p+"src/assets/projects/Kasa-project.webp",T=n.p+"src/assets/projects/MVG-project.webp",A=n.p+"src/assets/tech/html.webp",D=n.p+"src/assets/tech/css.webp",K=n.p+"src/assets/tech/javascript.webp",X=n.p+"src/assets/tech/nodejs.webp",q=n.p+"src/assets/tech/reactjs.webp",I=n.p+"src/assets/tech/git.webp",L=n.p+"src/assets/tech/mongodb.webp",U=n.p+"src/assets/tech/expressjs.webp",Y=[{name:"HTML 5",icon:A,backgroundColor:"#FFE1D7",border:"rgb(252,73,12)",color:"rgb(252,73,12)"},{name:"CSS 3",icon:D,backgroundColor:"#D6EBFF",border:"rgb(0,127,255)",color:"rgb(0,127,255)"},{name:"JavaScript",icon:K,backgroundColor:"#FEF9D8",border:"rgb(247,223,30)",color:"#766904"},{name:"React JS",icon:q,backgroundColor:"#D7F6FE",border:"rgb(97,218,251)",color:"#047E9F"},{name:"Sass",icon:n.p+"src/assets/tech/Sass.webp",backgroundColor:"#F5E0EB",border:"rgb(204, 102, 153)",color:"rgb(204, 102, 153)"},{name:"MongoDB",icon:L,backgroundColor:"#E3F3E3",border:"rgb(71, 162, 72)",color:"rgb(71, 162, 72)"},{name:"express",icon:U,backgroundColor:"#EAEBEA",border:"rgb(157, 161, 165)",color:"#5D6057"},{name:"Node JS",icon:X,backgroundColor:"#E0F5E0",border:"rgb(51, 153, 51)",color:"rgb(51, 153, 51)"},{name:"git",icon:I,backgroundColor:"rgb(240, 80, 50)",border:"rgb(240, 80, 50)",color:""}],V=()=>{const{t:e}=(0,a.Bd)();return[{image:B,altText:"Booki Project",title:"Booki",description:e("projects.booki.description"),descriptionOvl:e("projects.booki.descriptionOvl"),skills:[Y[0],Y[1]],repoUrl:"https://github.com/MXY93/P2_MV_Booki"},{image:M,altText:"Bluel Project",title:"Sophie Bluel",description:e("projects.bluel.description"),descriptionOvl:e("projects.bluel.descriptionOvl"),skills:[Y[0],Y[1],Y[2]],repoUrl:"https://github.com/MXY93/P3_Sophie_Bluel"},{image:P,altText:"Kasa Project",title:"Kasa",description:e("projects.kasa.description"),descriptionOvl:e("projects.kasa.descriptionOvl"),skills:[Y[2],Y[3],Y[4]],repoUrl:"https://github.com/MXY93/P6-Kasa"},{image:T,altText:"Grimoire Project",title:"Mon vieux grimoire",description:e("projects.grimoire.description"),descriptionOvl:e("projects.grimoire.descriptionOvl"),skills:[Y[5],Y[6],Y[7]],repoUrl:"https://github.com/MXY93/P7-Mon-Vieux-Grimoire"}]},H=function(){const[e,t]=(0,l.useState)(window.innerWidth<=1200),n=V();(0,l.useEffect)((()=>{const e=()=>{t(window.innerWidth<=1200)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]);const a=n.slice(0,2),r=n.slice(2,4),s=[...a,...a],i=[...r,...r];return l.createElement("div",{className:"project-gallery"},e?l.createElement("div",{className:"slideX-container"},l.createElement("div",{className:"projects-slide slideX"},n.map(((e,t)=>l.createElement(F,{key:t,image:e.image,title:e.title,description:e.description,descriptionOvl:e.descriptionOvl,skills:e.skills})))),l.createElement("div",{className:"projects-slide slideX"},n.map(((e,t)=>l.createElement(F,{key:t+n.length,image:e.image,title:e.title,description:e.description,descriptionOvl:e.descriptionOvl,skills:e.skills}))))):l.createElement(l.Fragment,null,l.createElement("div",{className:"projects-slide slide1"},s.map(((e,t)=>l.createElement(F,{key:t,image:e.image,title:e.title,description:e.description,descriptionOvl:e.descriptionOvl,skills:e.skills})))),l.createElement("div",{className:"projects-slide slide2"},i.map(((e,t)=>l.createElement(F,{key:t+s.length,image:e.image,title:e.title,description:e.description,descriptionOvl:e.descriptionOvl,skills:e.skills}))))))};var W=n(8701);const G=n.p+"src/assets/OC.webp",J={reverse:!1,max:35,perspective:1e3,scale:1.1,speed:1e3,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"};function R(){const{t:e}=(0,a.Bd)();return l.createElement("div",{className:"formation--container"},l.createElement("h2",null,e("section_title__education")),l.createElement(W.M,{options:J,className:"formation--card"},l.createElement("div",{className:"formation--img-n-skills"},l.createElement("img",{src:G,loading:"lazy",alt:"Hello"}),l.createElement("div",{className:"formation--skills"},Y.map(((e,t)=>l.createElement("img",{key:t,src:e.icon,loading:"lazy",alt:e.name,title:e.name}))))),l.createElement("div",{className:"formation--content"},l.createElement("h3",null,l.createElement("span",{className:"colored-letter"},"O"),"penClassrooms - ",l.createElement("span",{className:"date"},l.createElement(a.x6,{i18nKey:"education.date"})),l.createElement("br",null),l.createElement("span",{className:"subtitle"},l.createElement(a.x6,{i18nKey:"education.type"}))),l.createElement("p",null,l.createElement(a.x6,{i18nKey:"education.content"})))))}var Q=n(7425),Z=n(2664),$=n(6188),ee=n(3413);const te=n.p+"src/assets/contact-icon.webp",ne=()=>{const[e,t]=(0,l.useState)(null),[n,r]=(0,l.useState)(!1),{t:i}=(0,a.Bd)(),c=Z.Ik({name:Z.Yj().required(i("contact_form.name_required")),email:Z.Yj().email(i("contact_form.email_invalid")).required(i("contact_form.mail_required")),message:Z.Yj().required(i("contact_form.message_required"))});return l.createElement("div",{className:"contact-container"},l.createElement(Q.l1,{initialValues:{name:"",email:"",message:""},validationSchema:c,onSubmit:async(t,n)=>{let{setSubmitting:l,resetForm:a}=n;if(!e)return alert("Please complete the reCAPTCHA"),void l(!1);try{const n=await fetch("http://localhost:4000/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...t,recaptcha:e})}),l=await n.json();if(!n.ok)throw new Error(l.error||"Something went wrong");a(),r(!0),setTimeout((()=>{r(!1)}),1e4)}catch(e){console.error("Error:",e)}finally{l(!1)}}},(e=>{let{isSubmitting:a}=e;return l.createElement(Q.lV,{className:"contact-form"},l.createElement("p",null,i("contact_form.title")),l.createElement("div",{className:"contact-form--label-n-field"},l.createElement("label",{htmlFor:"name"},i("contact_form.input_name")," : "),l.createElement(Q.D0,{type:"text",id:"name",name:"name"}),l.createElement(Q.Kw,{name:"name",component:"div",className:"error-message"})),l.createElement("div",{className:"contact-form--label-n-field"},l.createElement("label",{htmlFor:"email"},i("contact_form.input_mail")," : "),l.createElement(Q.D0,{type:"email",id:"email",name:"email"}),l.createElement(Q.Kw,{name:"email",component:"div",className:"error-message"})),l.createElement("div",{className:"contact-form--label-n-field"},l.createElement("label",{htmlFor:"message"},i("contact_form.input_message")," : "),l.createElement(Q.D0,{as:"textarea",id:"message",name:"message"}),l.createElement(Q.Kw,{name:"message",component:"div",className:"error-message"})),l.createElement("div",{className:"captcha-container"},l.createElement(ee.A,{sitekey:"6Lf36wIqAAAAAMx5NtXm5FHsWzqmE1191aoDBqjn",onChange:t})),l.createElement("button",{className:"contact-form--submit-button",type:"submit",disabled:a||n},n?l.createElement("p",{className:"validation-msg"},i("contact_form.validation_message")," !",l.createElement(s.g,{icon:$.QRE,style:{color:"#15d535"},className:"validation-icon"})):i("contact_form.button")))})),l.createElement("img",{src:te,loading:"lazy",alt:"Sending email animation"}))};var le=n(8418);function ae(e){let{skills:t}=e;return l.createElement("div",{className:"skill-tag--row"},t.map(((e,t)=>l.createElement("p",{key:t,style:{backgroundColor:e.backgroundColor,border:"3px solid ".concat(e.border),color:e.color}},e.name))))}const re={reverse:!1,max:35,perspective:1e3,scale:1.1,speed:1e3,transition:!0,axis:null,reset:!0,easing:"cubic-bezier(.03,.98,.52,.99)"};function se(e){let{image:t,altText:n,title:r,description:c,skills:o,repoUrl:m}=e;const{t:d}=(0,a.Bd)();return l.createElement(W.M,{options:re,className:"projects--tilt-card"},l.createElement("div",{className:"projects---tilt-card--img-n-icon"},l.createElement("img",{src:t,loading:"lazy",alt:n}),l.createElement(s.g,{icon:i.Vz1,size:"xl",className:"faGithub",onClick:()=>{window.open(m,"_blank")}}),l.createElement("div",{className:"hover-text"},d("tilt_card__ovrly"))),l.createElement("div",{className:"projects---tilt-card--content"},l.createElement("div",{className:"projects---tilt-card--title-n-prg"},l.createElement("h4",null,r),l.createElement("p",null,c)),l.createElement(ae,{skills:o})))}const ie=()=>{const e=V();return l.createElement("div",{className:"projects--tilt-cards--container"},e.map(((e,t)=>l.createElement(se,{key:t,image:e.image,altText:e.altText,title:e.title,description:e.description,descriptionOvl:e.descriptionOvl,skills:e.skills,repoUrl:e.repoUrl}))))};var ce=n(8700),oe=n(2445),me=n(3988),de=n(6860),pe=n(8027),ue=n(9807),Ee=n(7443),ge=n(9644);const be=()=>{const{progress:e}=(0,Ee.p)();return l.createElement(ge.E,{as:"div",center:!0,style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}},l.createElement("span",{className:"canvas-loader"}),l.createElement("p",{style:{fontSize:14,color:"#F1F1F1",fontWeight:800,marginTop:40}},e.toFixed(2),"%"))},ve=e=>{const[t]=(0,oe.zo)([e.imgUrl]);return l.createElement(me.n,{speed:1.75,rotationIntensity:1,floatIntensity:2,floatingRange:[-.1,.1]},l.createElement("ambientLight",{intensity:.25}),l.createElement("directionalLight",{position:[0,0,.05]}),l.createElement("mesh",{castShadow:!0,receiveShadow:!0,scale:2.75},l.createElement("icosahedronGeometry",{args:[1,1]}),l.createElement("meshStandardMaterial",{color:"#fff8eb",polygonOffset:!0,polygonOffsetFactor:-5,flatShading:!0}),l.createElement(de.C,{position:[0,0,1],rotation:[2*Math.PI,0,6.25],scale:1,map:t,flatShading:!0})))},fe=e=>{let{icon:t}=e;return l.createElement(ce.Hl,{frameloop:"always",dpr:[1,2],gl:{preserveDrawingBuffer:!0}},l.createElement(l.Suspense,{fallback:l.createElement(be,null)},l.createElement(pe.N,{enableZoom:!1}),l.createElement(ve,{imgUrl:t})),l.createElement(ue.M,{all:!0}))};function ke(){const{t:e}=(0,a.Bd)();return l.createElement("section",{className:"skillsballs--section"},l.createElement("div",{className:"skillsballs--section-h2-n-p"},l.createElement("h2",null,e("section_title__skills")),l.createElement("p",{className:"skills_hover_prg"},"(",e("section_title__skill_name"),")")),l.createElement("div",{className:"skillsballs--container"},Y.map((e=>l.createElement("div",{className:"skillsballs--ball",key:e.name,title:e.name},l.createElement(fe,{icon:e.icon}))))))}function he(){const{darkMode:e}=(0,l.useContext)(le.z);return l.createElement("div",{className:"homepage app ".concat(e&&"dark-theme")},l.createElement("div",{id:"presentation"},l.createElement(g,null)),l.createElement("div",{id:"projects",className:"homepage-projects"},l.createElement(H,null),l.createElement(ie,null)),l.createElement("hr",null),l.createElement("div",{id:"formations"},l.createElement(R,null)),l.createElement("hr",null),l.createElement("div",{id:"skills"},l.createElement(ke,null)),l.createElement("hr",null),l.createElement("div",{id:"contact"},l.createElement(ne,null)))}}}]);