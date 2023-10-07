import{R as N,r as l,j as b}from"./app-15a1e490.js";/*!
* Tailwind Elements React 1.0.0-alpha1
* 
* Tailwind Elements React is an open-source UI kit of advanced components for TailwindCSS.
* Copyright © 2023 MDBootstrap.com
* 
* Unless a custom, individually assigned license has been granted, this program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
* In addition, a custom license may be available upon request, subject to the terms and conditions of that license. Please contact tailwind@mdbootstrap.com for more information on obtaining a custom license.
* This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
* 
*/function V(a){var t,e,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a))for(t=0;t<a.length;t++)a[t]&&(e=V(a[t]))&&(r&&(r+=" "),r+=e);else for(t in a)a[t]&&(r&&(r+=" "),r+=t);return r}function L(){for(var a,t,e=0,r="";e<arguments.length;)(a=arguments[e++])&&(t=V(a))&&(r&&(r+=" "),r+=t);return r}const J={visible:"!visible",hidden:"hidden",baseTransition:"overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none shadow-lg",collapsing:"h-0 transition-[height] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",collapsingHorizontal:"w-0 h-auto transition-[width] overflow-hidden duration-[350ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none",collapseStyles:"rounded-lg shadow-lg mt-3",scrollStyles:"max-h-24 overflow-y-auto max-w-[500px]"},fe=({className:a,children:t,show:e=!1,id:r,tag:u="div",collapseRef:c,horizontal:o=!1,scroll:p=!1,onShow:h,onHide:w,theme:R,...W})=>{const[v,j]=l.useState(!1),[n,T]=l.useState(void 0),[g,P]=l.useState(!1),_={...J,...R},z=L(_.collapseStyles,_.visible,g&&_.baseTransition&&(o?`${_.collapsingHorizontal}`:`${_.collapsing}`),!g&&!v&&_.hidden,p&&_.scrollStyles,a),F=l.useRef(null),k=c??F,H=l.useCallback(()=>{v&&T(void 0)},[v]);return l.useEffect(()=>{var D,E;n===void 0&&v&&T(o?(D=k==null?void 0:k.current)==null?void 0:D.scrollWidth:(E=k==null?void 0:k.current)==null?void 0:E.scrollHeight)},[n,v,k,o]),l.useEffect(()=>{v!==e&&(e?h==null||h():w==null||w(),j(e)),v&&P(!0);const D=setTimeout(()=>{P(!1)},350);return()=>{clearTimeout(D)}},[e,v,h,w]),l.useEffect(()=>{var D,E;T(v?o?((D=k==null?void 0:k.current)==null?void 0:D.scrollWidth)||0:((E=k==null?void 0:k.current)==null?void 0:E.scrollHeight)||0:0)},[v,k,o]),l.useEffect(()=>(window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H)}),[H]),b.jsx(u,{style:{...o?{width:n}:{height:n}},id:r,className:z,...W,ref:k,children:t})},Z=({theme:a,style:t})=>{const[e,r]=l.useState(!1),u=L(a.rippleWave,e?a.rippleWaveActive:a.rippleWaveInactive);return l.useEffect(()=>{r(!0)},[]),b.jsx("div",{style:t,className:u})},ee={ripple:"relative inline-block align-bottom",rippleOverflow:"absolute left-0 top-0 overflow-hidden w-full h-full pointer-events-none",rippleWave:"block rounded-[50%] pointer-events-none absolute touch-none transition-[transform,_opacity] ease-[cubic-bezier(0,0,0.15,1),_cubic-bezier(0,0,0.15,1)] z-[999] scale-0",rippleWaveActive:"scale-100 opacity-0",rippleWaveInactive:"scale-0 opacity-50",unbound:"overflow-visible"},te=(...a)=>{const t=N.useRef();return N.useEffect(()=>{a.forEach(e=>{e&&(typeof e=="function"?e(t.current):e.current=t.current)})},[a]),t};N.forwardRef(({className:a,rippleTag:t="div",rippleCentered:e,rippleDuration:r=500,rippleUnbound:u,rippleRadius:c=0,rippleColor:o="dark",rippleColorDark:p="",children:h,onMouseDown:w,theme:R,...W},v)=>{const j=l.useRef(null),n=te(v,j),T={...ee,...R},g="rgba({{color}}, 0.2) 0, rgba({{color}}, 0.3) 40%, rgba({{color}}, 0.4) 50%, rgba({{color}}, 0.5) 60%, rgba({{color}}, 0) 70%",P=[0,0,0],_=[{name:"primary",gradientColor:"#3B71CA"},{name:"secondary",gradientColor:"#9FA6B2"},{name:"success",gradientColor:"#14A44D"},{name:"danger",gradientColor:"#DC4C64"},{name:"warning",gradientColor:"#E4A11B"},{name:"info",gradientColor:"#54B4D3"},{name:"light",gradientColor:"#fbfbfb"},{name:"dark",gradientColor:"#262626"}],[z,F]=l.useState([]),[k,H]=l.useState([]),D=L(T.ripple,a),E=L(u?T.unbound:T.rippleOverflow,k),O=()=>{let s=o||"rgb(0,0,0)";(localStorage.theme==="dark"||!("theme"in localStorage)&&window.matchMedia("(prefers-color-scheme: dark)").matches)&&(s=p||o||"rgb(0,0,0)");const f=_.find(C=>C.name===(s==null?void 0:s.toLowerCase())),y=f?M(f.gradientColor).join(","):M(s).join(",");return`radial-gradient(circle, ${g.split("{{color}}").join(`${y}`)})`},M=s=>{const f=d=>(d.length<7&&(d=`#${d[1]}${d[1]}${d[2]}${d[2]}${d[3]}${d[3]}`),[parseInt(d.substr(1,2),16),parseInt(d.substr(3,2),16),parseInt(d.substr(5,2),16)]),y=d=>{const x=document.body.appendChild(document.createElement("fictum")),S="rgb(1, 2, 3)";return x.style.color=S,x.style.color!==S||(x.style.color=d,x.style.color===S||x.style.color==="")?P:(d=getComputedStyle(x).color,document.body.removeChild(x),d)},C=d=>(d=d.match(/[.\d]+/g).map(x=>+Number(x)),d.length=3,d);return s.toLowerCase()==="transparent"?P:s[0]==="#"?f(s):(s.indexOf("rgb")===-1&&(s=y(s)),s.indexOf("rgb")===0?C(s):P)},Y=s=>{const{offsetX:f,offsetY:y,height:C,width:d}=s,x=y<=C/2,S=f<=d/2,A=(q,Q)=>Math.sqrt(q**2+Q**2),X=y===C/2&&f===d/2,I={first:x===!0&&S===!1,second:x===!0&&S===!0,third:x===!1&&S===!0,fourth:x===!1&&S===!1},$={topLeft:A(f,y),topRight:A(d-f,y),bottomLeft:A(f,C-y),bottomRight:A(d-f,C-y)};let m=0;return X||I.fourth?m=$.topLeft:I.third?m=$.topRight:I.second?m=$.bottomRight:I.first&&(m=$.bottomLeft),m*2},U=()=>!h||!N.isValidElement(h)||Array.isArray(h)?[]:h.props.className.split(" ").filter(s=>s.includes("rounded")),B=s=>{var f;const y=(f=n.current)==null?void 0:f.getBoundingClientRect(),C=s.clientX-y.left,d=s.clientY-y.top,x=y.height,S=y.width,A={offsetX:e?x/2:C,offsetY:e?S/2:d,height:x,width:S},X={delay:r&&r*.5,duration:r&&r-r*.5},I=Y(A),$=c||I/2,m={left:e?`${S/2-$}px`:`${C-$}px`,top:e?`${x/2-$}px`:`${d-$}px`,height:c?`${c*2}px`:`${I}px`,width:c?`${c*2}px`:`${I}px`,transitionDelay:`0s, ${X.delay}ms`,transitionDuration:`${r}ms, ${X.duration}ms`};return H(U()),{...m,backgroundImage:`${O()}`}},i=s=>{const f=B(s),y=z.concat(f);F(y),w&&w(s)};return l.useEffect(()=>{const s=setTimeout(()=>{z.length>0&&F(z.splice(1,z.length-1))},r);return()=>{clearTimeout(s)}},[r,z]),b.jsxs(t,{className:D,onMouseDown:s=>i(s),ref:n,...W,children:[h,b.jsx("div",{className:E,children:z.map((s,f)=>b.jsx(Z,{theme:T,style:s},f))})]})});const G=l.createContext({isOpenModal:!1,setTransitionDuration:null,scrollable:!1}),re={wrapper:"min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600",scrollable:"max-h-full"};N.forwardRef(({className:a,children:t,theme:e,tag:r="div",...u},c)=>{const o={...re,...e},{scrollable:p}=l.useContext(G),h=L(o.wrapper,p&&o.scrollable,a);return b.jsx(r,{className:h,...u,ref:c,children:t})});const ae={wrapper:"flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"};N.forwardRef(({className:a,children:t,theme:e,tag:r="div",...u},c)=>{const o={...ae,...e},p=L(o.wrapper,a);return b.jsx(r,{className:p,...u,ref:c,children:t})});const ne={scrollable:"overflow-y-auto",wrapper:"relative flex-auto p-4"};N.forwardRef(({className:a,children:t,theme:e,tag:r="div",...u},c)=>{const o={...ne,...e},{scrollable:p}=l.useContext(G),h=L(o.wrapper,p&&o.scrollable,a);return b.jsx(r,{className:h,...u,ref:c,children:t})});const ie={wrapper:"flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50"};N.forwardRef(({className:a,children:t,theme:e,tag:r="div",...u},c)=>{const o={...ie,...e},p=L(o.wrapper,a);return b.jsx(r,{className:p,...u,ref:c,children:t})});const le={wrapper:"relative",input:"peer block min-h-[auto] w-full rounded border-0 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none placeholder:opacity-0 disabled:bg-neutral-100 read-only:bg-neutral-100 dark:disabled:bg-neutral-700 dark:read-only:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary",activeInput:"placeholder:opacity-100",label:"pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate text-neutral-500 transition-all duration-200 ease-out peer-focus:scale-[0.8] peer-focus:text-primary motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary",activeLabel:"scale-[0.8]",notch:"group flex absolute left-0 top-0 w-full max-w-full h-full text-left pointer-events-none",notchLeading:"pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none left-0 top-0 h-full w-2 border-r-0 rounded-l-[0.25rem]",activeNotchLeading:"border-r-0",focusedNotchLeading:"border-r-0",notchLeadingDefault:"border-neutral-300 dark:border-neutral-600",focusedNotchLeadingDefault:"shadow-[-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca] border-primary dark:border-primary",notchLeadingWhite:"border-neutral-200",focusedNotchLeadingWhite:"shadow-[-1px_0_0_#ffffff,_0_1px_0_0_#ffffff,_0_-1px_0_0_#ffffff] border-white",notchMiddle:"pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow-0 shrink-0 basis-auto w-auto max-w-[calc(100%-1rem)] h-full border-r-0 border-l-0",activeNotchMiddle:"border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent",focusedNotchMiddle:"border-x-0 border-t border-solid border-t-transparent dark:border-t-transparent",notchMiddleDefault:"border-neutral-300 dark:border-neutral-600",focusedNotchMiddleDefault:"shadow-[0_1px_0_0_#3b71ca] border-primary dark:border-primary",notchMiddleWhite:"border-neutral-200",focusedNotchMiddleWhite:"shadow-[0_1px_0_0_#ffffff] border-white",notchTrailing:"pointer-events-none border border-solid box-border bg-transparent transition-all duration-200 ease-linear motion-reduce:transition-none grow h-full border-l-0 rounded-r-[0.25rem]",activeNotchTrailing:"border-l-0",focusedNotchTrailing:"border-l-0",notchTrailingDefault:"border-neutral-300 dark:border-neutral-600",focusedNotchTrailingDefault:"shadow-[1px_0_0_#3b71ca,_0_-1px_0_0_#3b71ca,_0_1px_0_0_#3b71ca] border-primary dark:border-primary",notchTrailingWhite:"border-neutral-200",focusedNotchTrailingWhite:"shadow-[1px_0_0_#ffffff,_0_-1px_0_0_#ffffff,_0_1px_0_0_#ffffff] border-white",counter:"text-right leading-[1.6]",inputSizeLg:"px-3 py-[0.32rem] leading-[2.15]",inputSizeBase:"px-3 py-[0.32rem] leading-[1.6]",inputSizeSm:"px-3 py-[0.33rem] text-xs leading-[1.5]",labelSizeLg:"pt-[0.36rem] leading-[2.15] peer-focus:-translate-y-[1.15rem]",activeLabelSizeLg:"-translate-y-[1.15rem]",labelSizeBase:"pt-[0.30rem] leading-[1.6] peer-focus:-translate-y-[0.9rem]",activeLabelSizeBase:"-translate-y-[0.9rem]",labelSizeSm:"pt-[0.36rem] text-xs leading-[1.5] peer-focus:-translate-y-[0.75rem]",activeLabelSizeSm:"-translate-y-[0.75rem]"};N.forwardRef(({className:a,size:t="base",value:e,defaultValue:r,id:u,wrapperTag:c="div",label:o,onChange:p,children:h,labelRef:w,type:R,onBlur:W,readonly:v=!1,theme:j,formWhite:n=!1,counter:T=!1,maxLength:g,...P},_)=>{var z,F;const[k,H]=l.useState(e||r),[D,E]=l.useState(0),[O,M]=l.useState(!1),[Y,U]=l.useState(!1),B=l.useRef(null);l.useImperativeHandle(_,()=>B.current);const i={...le,...j},s=l.useRef(null),f=w||s,y=L(i.input,O&&i.activeInput,t==="lg"?i.inputSizeLg:t==="base"?i.inputSizeBase:t==="sm"?i.inputSizeSm:i.inputSizeBase,a),C=L(i.label,O&&i.activeLabel,O&&(t==="lg"?i.activeLabelSizeLg:t==="base"?i.activeLabelSizeBase:t==="sm"?i.activeLabelSizeSm:i.activeLabelSizeBase),t==="lg"?i.labelSizeLg:t==="base"?i.labelSizeBase:t==="sm"?i.labelSizeSm:i.labelSizeBase),d=L(i.notchLeading,n?i.notchLeadingWhite:i.notchLeadingDefault,O&&i.activeNotchLeading,Y&&i.focusedNotchLeading,Y&&(n?i.focusedNotchLeadingWhite:i.focusedNotchLeadingDefault)),x=L(i.notchMiddle,n?i.notchMiddleWhite:i.notchMiddleDefault,O&&i.activeNotchMiddle,Y&&i.focusedNotchMiddle,Y&&(n?i.focusedNotchMiddleWhite:i.focusedNotchMiddleDefault)),S=L(i.notchTrailing,n?i.notchTrailingWhite:i.notchTrailingDefault,O&&i.activeNotchTrailing,Y&&i.focusedNotchTrailing,Y&&(n?i.focusedNotchTrailingWhite:i.focusedNotchTrailingDefault));l.useEffect(()=>{if(!B.current)return;const{value:m}=B.current;m!=""?M(!0):M(!1)},[(z=B.current)==null?void 0:z.value]),l.useEffect(()=>{e!==void 0&&(e!=""?M(!0):M(!1))},[e]),l.useEffect(()=>{r!==void 0&&(r!=""?M(!0):M(!1))},[r]);const A=l.useCallback(()=>{var m;(m=f.current)!=null&&m.clientWidth&&E(f.current.clientWidth*.8+8)},[f]);l.useEffect(()=>{A()},[(F=f.current)==null?void 0:F.clientWidth,A]);const X=m=>{T?I(m):H(m.target.value),p==null||p(m)},I=m=>{const q=m.target.value;g===void 0||g<=0||q.length<=g&&H(q)},$=l.useCallback(m=>{B.current&&(k!==void 0&&k!=""||e!==void 0&&e!=""||B.current.value!=""?M(!0):M(!1),W&&W(m))},[k,e,W]);return b.jsxs(c,{children:[b.jsxs(c,{className:i.wrapper,children:[b.jsx("input",{type:R,readOnly:v,className:y,onBlur:m=>{$(m),U(!1)},onChange:X,onFocus:()=>{U(!0)},value:e,defaultValue:r,id:u,ref:B,maxLength:g,...P}),o&&b.jsx("label",{className:C,htmlFor:u,ref:f,children:o}),b.jsxs("div",{className:i.notch,children:[b.jsx("div",{className:d}),b.jsx("div",{className:x,style:{width:D}}),b.jsx("div",{className:S})]}),h]}),T&&g!==void 0&&g>0&&b.jsx("div",{className:i.counter,children:b.jsxs("span",{children:[(k==null?void 0:k.toString().length)||0," / ",g]})})]})});const oe={defaultTabs:"mb-5 flex list-none flex-row flex-wrap border-b-0 pl-0",verticalTabs:"mr-4 flex list-none flex-col flex-wrap pl-0",pillsTabs:"mb-5 flex list-none flex-col flex-wrap pl-0 md:flex-row"},K=N.createContext({});N.forwardRef(({className:a,children:t,theme:e,fill:r=!1,justify:u=!1,vertical:c=!1,pills:o=!1,...p},h)=>{const w={...oe,...e},R=L(o?c?w.verticalTabs:w.pillsTabs:c?w.verticalTabs:w.defaultTabs,a);return b.jsx(K.Provider,{value:{fill:r,justify:u,vertical:c,pills:o},children:b.jsx("ul",{className:R,ref:h,...p,children:t})})});const se={fillTabsItem:"flex-auto text-center",justifyTabsItem:"flex-grow basis-0 text-center",verticalTabsItem:"flex-grow text-center",disabledTabsItem:"disabled pointer-events-none",tabsLink:"mt-2 block cursor-pointer border-x-0 border-b-2 border-t-0 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight hover:isolate hover:border-x-0 hover:bg-neutral-100 dark:hover:bg-transparent focus:isolate",pillsLink:"mt-2 block cursor-pointer rounded bg-neutral-100 px-7 pb-3.5 pt-4 text-xs font-medium uppercase leading-tight text-neutral-500 dark:bg-neutral-700 dark:text-white md:mr-4",inactiveTabsLink:"border-transparent text-neutral-500 focus:border-transparent dark:text-neutral-400",inactivePillsLink:"bg-neutral-100 dark:bg-neutral-700 dark:text-white md:mr-4",disabledTabsLink:"!text-neutral-400 dark:!text-neutral-600",disabledPillsLink:"!bg-neutral-200 !text-neutral-400 dark:!text-neutral-500 dark:!bg-neutral-600",activePrimaryPillsLink:"!bg-primary-100 !text-primary-700 dark:text-primary-700 ",activeSecondaryPillsLink:"!bg-secondary-200 !text-secondary-900 dark:text-secondary-900",activeSuccessPillsLink:"!bg-success-100 !text-success-700 dark:text-success-700",activeDangerPillsLink:"!bg-danger-100 !text-danger-700 dark:text-danger-700",activeWarningPillsLink:"!bg-warning-100 !text-warning-800 dark:text-warning-800",activeInfoPillsLink:"!bg-info-100 !text-info-800 dark:text-info-800",activeLightPillsLink:"!bg-neutral-50 !text-neutral-600 dark:text-neutral-600",activeDarkPillsLink:"!bg-neutral-800 !text-neutral-50 dark:!bg-neutral-900 dark:text-neutral-50",activePrimaryTabsLink:"text-primary border-primary dark:border-primary-400 dark:text-primary-400",activeSecondaryTabsLink:"text-secondary border-secondary dark:text-secondary",activeSuccessTabsLink:"border-success text-success dark:text-success",activeDangerTabsLink:"border-danger text-danger dark:text-danger",activeWarningTabsLink:"border-warning text-warning dark:text-warning",activeInfoTabsLink:"border-info text-info dark:text-info",activeLightTabsLink:"border-neutral-50 text-neutral-50 dark:text-neutral-50",activeDarkTabsLink:"border-neutral-800 text-neutral-800 dark:border-neutral-600 dark:text-neutral-600"};N.forwardRef(({className:a,wrapperClass:t,active:e=!1,disabled:r=!1,color:u="primary",children:c,theme:o,tag:p="a",...h},w)=>{const{fill:R,justify:W,vertical:v,pills:j}=l.useContext(K),n={...se,...o},T=L(R&&n.fillTabsItem,W&&n.justifyTabsItem,v&&n.verticalTabsItem,r&&n.disabledTabsItem,t),g={primary:{tabs:n.activePrimaryTabsLink,pills:n.activePrimaryPillsLink},secondary:{tabs:n.activeSecondaryTabsLink,pills:n.activeSecondaryPillsLink},success:{tabs:n.activeSuccessTabsLink,pills:n.activeSuccessPillsLink},danger:{tabs:n.activeDangerTabsLink,pills:n.activeDangerPillsLink},warning:{tabs:n.activeWarningTabsLink,pills:n.activeWarningPillsLink},info:{tabs:n.activeInfoTabsLink,pills:n.activeInfoPillsLink},light:{tabs:n.activeLightTabsLink,pills:n.activeLightPillsLink},dark:{tabs:n.activeDarkTabsLink,pills:n.activeDarkPillsLink}},P=L(j?n.pillsLink:n.tabsLink,r?j?n.disabledPillsLink:n.disabledTabsLink:"",j&&!r?e?g[u].pills:n.inactivePillsLink:e?g[u].tabs:n.inactiveTabsLink,a);return b.jsx("li",{className:T,role:"presentation",ref:w,...h,children:b.jsx(p,{className:P,ref:w,role:"tab",...h,children:c})})});const de={tabsContent:"my-2"};N.forwardRef(({className:a,tag:t="div",children:e,theme:r,...u},c)=>{const o={...de,...r},p=L(o.tabsContent,a);return b.jsx(t,{className:p,ref:c,...u,children:e})});const ce={tabsPane:"transition-opacity duration-150 ease-linear",isShown:"block",isHidden:"hidden",activeTabsPane:"opacity-100",inactiveTabsPane:"opacity-0"},ue=(...a)=>{const t=N.useRef();return N.useEffect(()=>{a.forEach(e=>{e&&(typeof e=="function"?e(t.current):e.current=t.current)})},[a]),t};N.forwardRef(({className:a,tag:t="div",show:e=!1,theme:r,onShow:u,onShown:c,onHide:o,onHidden:p,children:h,...w},R)=>{const[W,v]=l.useState(!1),j=l.useRef(null),n=ue(R,j),T=l.useRef(0),g={...ce,...r},P=L(g.tabsPane,e?g.isShown:g.isHidden,W?g.activeTabsPane:g.inactiveTabsPane,a);return l.useEffect(()=>{if(j.current){const{transitionDuration:_}=window.getComputedStyle(j.current),z=Number(_.replace("s",""))*1e3;T.current=z}},[]),l.useEffect(()=>{let _;return e?(u==null||u(),_=setTimeout(()=>{v(!0),c==null||c()},100)):(o==null||o(),v(!1),_=setTimeout(()=>{p==null||p()},T.current)),()=>{clearTimeout(_)}},[e]),b.jsx(t,{className:P,role:"tabpanel",ref:n,...w,children:h})});export{fe as M};
