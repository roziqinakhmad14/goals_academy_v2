import{r as t,j as i}from"./app-e042d7ab.js";import{M}from"./MainLayout-50eb00df.js";import O from"./Filter-cc5f1a13.js";import d from"./SearchBar-f6aeb4b5.js";import S from"./Bimbingan-30f4ffec.js";import C from"./Ebook-0ff84462.js";import"./a11y-60d656db.js";import"./moment-7b9c4119.js";import T from"./Consultation-1d45f4bb.js";import{p as j,a as w,b as B}from"./dibimbing-olah-data-2bd1d162.js";import"./goals-3-83aaca01.js";import"./tw-elements-react.es.min-e2943060.js";import"./ButtonHoverSlide-c68ff287.js";import"./CornerWaveVector-fda04f53.js";import"./CornerWaveVector2-b4a8d407.js";import"./free-mode-944aa2ad.js";import"./ButtonSwiper-f0dbfea3.js";import"./ButtonPill-c28c4571.js";const v="/build/assets/dibimbing-online-45-50096ead.png",P="/build/assets/dibimbing-offline-60-d618a046.png",E="/build/assets/dibimbing-offline-90-10413cbb.png",q="/build/assets/1-1704d2c5.png",A="/build/assets/1-7597a780.png",L="/build/assets/2-b6ad871b.png",K="/build/assets/3-c1c9ab70.png",G="/build/assets/4-c5493564.png";function sa({auth:c}){const l=[{id:1,title:"Dibimbing Online 30 Menit",slug:"dibimbing-online-30-menit",img:j,excerpt:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 30 menit, sesuai dengan permasalahan pada skripsimu.",description:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 30 menit, sesuai dengan permasalahan pada skripsimu.",features:{times:1,duration:30,category:"Online"},price:47e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/baE8kEv"},{id:2,title:"Dibimbing Online 45 Menit",slug:"dibimbing-online-45-menit",img:v,excerpt:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.",description:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.",features:{times:1,duration:45,category:"Online"},price:69e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/aW2pNBO"},{id:3,title:"Dibimbing Offline 60 Menit",slug:"dibimbing-offline-60-menit",img:P,excerpt:"Bimbingan personal 1-on-1 secara tatap muka selama 60 Menit, khusus area Kota Malang.",description:"Bimbingan personal 1-on-1 secara tatap muka selama 60 Menit, khusus area Kota Malang.",features:{times:1,duration:60,category:"Offline"},price:129e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/k74ZZ3v"},{id:4,title:"Dibimbing Offline 90 Menit",slug:"dibimbing-offline-90-menit",img:E,excerpt:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.",description:"Capai kesuksesan skripsimu melalui bimbingan personal 1-on-1 selama 45 menit, sesuai dengan permasalahan pada skripsimu.",features:{times:1,duration:90,category:"Offline"},price:189e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/E4g55Dn"},{id:5,title:"Dibimbing Tuntas",slug:"dibimbing-tuntas",img:w,excerpt:"Temukan solusi skripsi optimal melalui bimbingan personal 1-on-1 dalam 7 kali pertemuan dan berfokus pada permasalahan skripsimu sampai selesai.",description:"Temukan solusi skripsi optimal melalui bimbingan personal 1-on-1 dalam 7 kali pertemuan dan berfokus pada permasalahan skripsimu sampai selesai.",features:{times:7,duration:60,category:"Online"},price:649e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/7q7r96V"},{id:6,title:"Dibimbing Olah Data",slug:"dibimbing-olah-data",img:B,excerpt:"Kembangkan kemampuan mengolah data skripsi melalui bimbingan personal 1-on-1 yang intensif.",description:"Kembangkan kemampuan mengolah data skripsi melalui bimbingan personal 1-on-1 yang intensif.",features:{times:1,duration:60,category:"Online"},price:115e3,hasDiscount:!1,link:"https://lynk.id/goalsacademy/DqqGx5x"}],m=[{title:"How To Survive Your Thesis? Start with Theme",price:"-",image:q,link:"https://lynk.id/goalsacademy/XBmqq6J"}],r=[{title:"Tips Membuat Judul Skripsi Mudah ACC",price:34e3,image:L,date:"2023-10-24 19:00:00",link:"https://lynk.id/goalsacademy/oZyPAav"},{title:"Teknik Lolos Paraphrase Penulisan Proposal Skripsi",price:34e3,image:A,date:"2023-10-25 19:00:00",link:"https://lynk.id/goalsacademy/a2j9vM8"},{title:"Tips & Trick Presentasi Sidang Skripsi yang Disukai Dosen",price:34e3,image:K,date:"2023-10-26 19:00:00",link:"https://lynk.id/goalsacademy/lmzQOyX"},{title:"Bundling Webinar Series Goals Academy",price:94e3,image:G,date:"2023-10-24 19:00:00",link:"https://lynk.id/goalsacademy/nGV0BrP"}],[a,g]=t.useState(Array(3).fill(!1)),[b,k]=t.useState(l.slice()),[f,h]=t.useState(m.slice()),[H,o]=t.useState(r.slice()),p=a[0]==a[1]!=a[2],y=e=>{const n=Array(3).fill(!1);n[e]=!a[e],g(n)},u=e=>{const n=l.slice().filter(s=>s.title.toLowerCase().includes(e)),D=m.slice().filter(s=>s.title.toLowerCase().includes(e)),x=r.slice().filter(s=>s.title.toLowerCase().includes(e));k(n),h(D),o([]),setTimeout(()=>{o(x)},0)};return i.jsxs(M,{auth:c,title:"Produk",children:[i.jsx(d,{searchHandler:u,className:"md:hidden"}),i.jsx(O,{show:a,showHandler:y}),i.jsx(d,{searchHandler:u,className:"hidden md:block"}),i.jsx(S,{data:b,active:a[0],status:p}),i.jsx(C,{data:f,active:a[1],status:p}),i.jsx(T,{})]})}export{sa as default};