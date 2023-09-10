import{P as o,j as e,u as i,a as b,s as c,b as j,B as g,T as N}from"./index-ce5e09c0.js";import{T as w,b as x,a as m,F as k,C as y,u as F,c as T}from"./Filter-51c462b0.js";const C="/rent-cars-react/assets/whitecar-3ba59620.png",d=({children:s,className:t})=>e.jsx("h1",{className:t?`mb-4 mt-10 text-left font-montserrat text-4xl font-bold dark:text-white max-sm:text-center max-sm:text-3xl ${t}`:"mb-4 mt-10 text-left font-montserrat text-4xl font-bold dark:text-white max-sm:text-center max-sm:text-3xl",children:s});d.propTypes={children:o.node.isRequired,className:o.string};const z=()=>e.jsxs("section",{className:"no-scrollbar relative flex min-h-screen  flex-col items-center justify-start overflow-hidden",children:[e.jsx(d,{className:`responsive-font relative z-[50] mt-0
        flex
        items-start
        justify-center
        bg-gradient-to-r
        from-blue-300
        via-slate-300
        to-stone-500 bg-clip-text text-center text-transparent drop-shadow-[0_1px_3px_rgba(250,250,250,1)]`,children:"No followed cars"}),e.jsx(w,{src:C,alt:"Car",width:"1200",className:"absolute bottom-[35rem] right-0 z-[60] mx-4"})]}),p=({open:s})=>{const t=i(x),l=i(m),a=b(t,l);return e.jsxs("div",{className:"flex flex-col gap-5",children:[e.jsx("div",{className:"ml-5 mt-10",children:e.jsx(k,{cars:t,open:s})}),!a.length&&e.jsx(z,{}),e.jsx("div",{className:s?"fav-list relative mt-[40px] p-8":"cards-list relative mt-[70px]",children:a.map(n=>e.jsx(y,{car:n},n.id))})]})};p.propTypes={open:o.bool};const h=({open:s})=>{const t=F(),l=i(x),a=i(m),n=T(l,"rentalCompany"),u=r=>{!a||a.rentalCompany!==null?t(c({rentalCompany:r})):a.make===r?t(c({...a,rentalCompany:""})):t(c({...a,rentalCompany:r}))};return e.jsx("ul",{className:"mt-10 flex flex-col gap-5",children:n.map((r,f)=>e.jsxs("li",{className:"relative",children:[e.jsx("input",{id:r,type:"radio",name:"make",value:r,checked:(a==null?void 0:a.rentalCompany)===r,className:"radio",onChange:()=>u(r)}),e.jsxs("label",{htmlFor:r,className:"responsive-text inline-block pl-[0.15rem] text-white hover:cursor-pointer",children:[" ",s?r:r.split(" ").map(v=>v[0]).join("")]})]},f))})};h.propTypes={open:o.bool};const $=()=>{const{isOpen:s,toggle:t}=j(!0),l=i(x);return e.jsxs("div",{className:"relative z-[80] ml-2 flex flex-1 items-center justify-center self-start pl-2 dark:bg-slate-800 md:min-h-screen",children:[e.jsxs("div",{className:`${s?"sidebar-open":"sidebar-close"} sidebar relative z-[70]`,children:[e.jsx(g,{iconURL:"#icon-arrow",type:"button",className:"sidebar-btn",svgClass:`w-3 fill-nav-link hover:fill-white ${!s&&"rotate-180 transition duration-200 ease-in-out;"} transition duration-200 ease-in-out`,onClick:t}),e.jsx("div",{className:"flex items-center gap-x-4",children:e.jsx(N,{className:`mt-[30px] origin-left text-xl font-medium text-white transition duration-200 ease-in-out ${!s&&"hidden"} ${s&&"scale-[1]"}`,children:"Company"})}),e.jsx(h,{open:s})]}),e.jsx("div",{className:l!=null&&l.length?"no-scrollbar h-screen flex-auto overflow-y-auto px-2 py-7":"no-scrollbar h-screen flex-auto overflow-hidden px-2 py-7",children:e.jsx(p,{open:s})})]})},q=()=>e.jsx("div",{className:"fav-bg flex min-h-screen dark:bg-slate-800",children:e.jsx("div",{className:"relative z-10 mx-auto my-0 flex items-center justify-center overflow-hidden bg-white/80",children:e.jsx($,{})})});export{q as default};