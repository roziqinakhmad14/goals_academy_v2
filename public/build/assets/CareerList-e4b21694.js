import{j as e}from"./app-15a1e490.js";import{S as t,N as n,P as x,A as c,a as o}from"./a11y-ae662cb7.js";import{f as h}from"./free-mode-d8696fdb.js";import{B as m}from"./ButtonSwiper-b41dfb3e.js";import"./ButtonHoverSlide-eaa14869.js";function v({data:s}){return e.jsx("section",{id:"career_list",className:"my-16 xs:my-20 md:my-16 lg:my-20 xl:my-24 3xl:my-32 overflow-hidden",children:e.jsxs("div",{className:"container mx-auto",children:[e.jsxs("div",{className:"flex justify-between mb-6 xs:mb-8",children:[e.jsx("div",{className:"w-6/12",children:e.jsxs("h2",{className:"text-24 md:text-16 lg:text-24 xl:text-32 3xl:text-48",children:["Lowongan ",e.jsx("span",{className:"text-primary",children:"Tersedia."})]})}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx(m,{name:"career-prev",direction:"left"}),e.jsx(m,{name:"career-next",direction:"right"})]})]}),e.jsx(t,{modules:[n,x,c,h],className:"swiper-custom",wrapperClass:"swiper-wrapper -ms-2",slidesPerView:"auto",grabCursor:!0,freeMode:!0,navigation:{nextEl:".career-next",prevEl:".career-prev"},children:s.map(({title:r,image:l,requirements:a,link:i},d)=>e.jsx(o,{style:{width:"fit-content"},className:"p-4 md:p-2 lg:p-3 xl:p-4",children:e.jsx(p,{title:r,image:l,requirements:a,link:i})},d))})]})})}function p({title:s,image:r,requirements:l,link:a}){return e.jsxs("div",{className:"w-64 xs:w-72 sm:w-80 md:w-40 lg:w-60 xl:w-72 3xl:w-96 shadow-lg md:shadow-bottom-right lg:shadow-lg rounded-3xl md:rounded-lg xl:rounded-3xl overflow-hidden",children:[e.jsx("div",{className:"w-full h-48 xs:h-56 md:h-32 lg:h-40 xl:h-52 3xl:h-72 overflow-hidden",children:e.jsx("img",{className:"w-full",src:r,alt:s})}),e.jsxs("div",{className:"p-4 xs:p-6 md:p-2 lg:p-4 xl:p-6 3xl:p-8",children:[e.jsx("h4",{className:"text-center",children:s}),e.jsxs("div",{className:"my-8 md:my-2 lg:my-4 xl:my-8 h-[40vw] xs:h-[50vw] sm:h-[40vw] md:h-28 lg:h-52 xl:h-56 3xl:h-72",children:[e.jsx("p",{className:"md:mb-2 lg:mb-4",children:"Kualifikasi :"}),e.jsx("ul",{className:"list-disc grid md:gap-0 lg:gap-1 ms-4",children:l.map((i,d)=>e.jsx("li",{children:i},d))})]}),e.jsx("a",{href:a,target:"_blank",className:"inline-block font-medium text-center py-2 md:py-1 xl:py-2 text-white bg-secondary hover:bg-primary w-full rounded-full",children:"Lamar Sekarang"})]})]})}export{v as default};
