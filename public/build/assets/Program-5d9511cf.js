import{j as e}from"./app-15a1e490.js";import{S as i,N as x,P as n,A as c,a as m}from"./a11y-ae662cb7.js";import{B as r}from"./ButtonPill-3a17ec79.js";import{C as d}from"./CornerWaveVector2-eda7b009.js";const o="/build/assets/tree-3-1a526dec.svg",p="/build/assets/tree-4-5cfc841a.svg";function f({data:s}){return e.jsxs("section",{id:"program",className:"my-16 xs:my-20 md:my-16 lg:my-20 xl:my-24 3xl:my-32 md:pb-10 lg:pb-20 relative overflow-hidden",children:[e.jsx("img",{src:o,className:"absolute bottom-0 w-screen h-[95%] -z-10 hidden md:block"}),e.jsx("img",{src:p,className:"absolute bottom-0 w-screen h-[100%] -z-10 md:hidden"}),e.jsx(h,{data:s}),e.jsx(w,{data:s})]})}function h({data:s}){return e.jsxs("div",{className:"container mx-auto hidden md:block",children:[e.jsxs("h2",{className:"text-center mb-6 xs:mb-8 xl:mb-12 3xl:mb-16",children:["Pilih Program Goals untuk ",e.jsx("br",{}),e.jsx("span",{className:"text-primary",children:"Solusi Skripsimu."})]}),e.jsxs("div",{className:"hidden md:flex justify-between items-center",children:[e.jsx(a,{item:s[0],className:"w-[23.5vw] 3xl:w-[22vw] h-[34vw] 3xl:h-[32vw]"}),e.jsx(a,{item:s[1],className:"w-[23.5vw] 3xl:w-[22vw] h-[34vw] 3xl:h-[32vw] scale-105",priority:!0}),e.jsx(a,{item:s[2],className:"w-[23.5vw] 3xl:w-[22vw] h-[34vw] 3xl:h-[32vw]"})]}),e.jsx("div",{className:"text-end mt-8 md:mt-4 lg:mt-8 3xl:mt-12",children:e.jsxs(r,{isLink:!0,href:"/produk",className:"px-4",target:"_self",children:["Lihat Produk Lainnya  ",e.jsx("i",{className:"bi bi-arrow-right-circle xl:text-16"})]})})]})}function w({data:s}){return e.jsxs("div",{className:"container mx-auto md:hidden overflow-visible",children:[e.jsxs("h2",{className:"text-center mb-12 xs:mb-16 3xl:mb-24",children:["Pilih Program Goals ",e.jsx("br",{}),e.jsx("span",{className:"text-primary",children:"untuk Solusi Skripsimu."})]}),e.jsx(i,{modules:[x,n,c],className:"swiper-program",slidesPerView:"auto",centeredSlides:!0,grabCursor:!0,loop:!0,initialSlide:1,breakpoints:{0:{spaceBetween:32},400:{spaceBetween:36},480:{spaceBetween:40},512:{spaceBetween:48},640:{spaceBetween:52}},children:s.map((t,l)=>e.jsx(m,{style:{width:"fit-content"},className:"items-center duration-300 transition-all",children:e.jsx(a,{item:t,className:"w-[70vw] h-[100vw] mx-auto"})},l))}),e.jsx("div",{className:"text-center mt-12 xs:mt-16 3xl:mt-24",children:e.jsxs(r,{isLink:!0,href:"/produk",className:"px-4",target:"_self",children:["Lihat Produk Lainnya  ",e.jsx("i",{className:"bi bi-arrow-right-circle xl:text-16"})]})})]})}function a({item:s,priority:t,className:l}){return e.jsxs("div",{className:`relative flex flex-col text-center bg-white overflow-hidden rounded-xl shadow-centered px-6 3xl:px-8 py-8 xs:py-12 md:py-8 xl:py-12 3xl:py-16 gap-[6vw] md:gap-[2.4vw] 3xl:gap-[2vw]  ${l}`,children:[e.jsx("p",{className:`absolute top-[4%] -right-[12%] rotate-[35deg] bg-secondary text-white w-1/2 py-1 ${t?"":"hidden"}`,children:"Terlaris"}),e.jsx(d,{cornerClassName:"w-8/12"}),e.jsx("h3",{className:"font-semibold text-[5vw] md:text-[1.5vw]",children:s.title}),e.jsxs("div",{className:"text-secondary",children:[e.jsx("p",{className:"font-poppins font-bold text-[3vw] md:text-[0.8vw]",children:"Harga Mulai Dari"}),e.jsxs("h2",{className:"text-secondary py-1 text-[6vw] md:text-[2vw]",children:["IDR ",s.price]}),e.jsx("span",{className:"font-semibold text-[3vw] md:text-[0.8vw] bg-red-100 px-1 lg:py-0.5",children:"Diskon Tersedia"})]}),e.jsxs("div",{className:"flex flex-col text-start gap-2 md:gap-1 lg:gap-2 3xl:gap-4 text-[3.5vw] md:text-[1.2vw]",children:[e.jsx("p",{children:"Layanan :"}),e.jsxs("div",{className:"flex items-center gap-2 3xl:gap-4",children:[e.jsx("i",{className:"fa-regular fa-calendar"}),e.jsxs("p",{children:[s.features.times,"x Pertemuan"]})]}),e.jsxs("div",{className:"flex items-center gap-2 3xl:gap-4",children:[e.jsx("i",{className:"fa-solid fa-clock text-12 md:text-8 lg:text-10 xl:text-12 3xl:text-18"}),e.jsxs("p",{children:[s.features.duration," Menit"]})]}),e.jsxs("div",{className:"flex items-center gap-2 3xl:gap-4",children:[e.jsx("i",{className:"fa-solid fa-location-dot"}),e.jsx("p",{children:s.features.category})]})]}),e.jsx("div",{className:"relative text-start h-full",children:e.jsx(r,{href:s.link,className:"absolute w-full bottom-0 text-[3.5vw] md:text-[1.2vw]",children:"Daftar Sekarang"})})]})}export{f as default};
