import{d,az as _,v as f,H as a,b as x,c as z,a1 as S,L as o,k as I}from"./entry.o0bsuoWh.js";const y=d({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(l){var r;_(s=>({faa288c6:o(m)}));const e=f();(r=e==null?void 0:e.nuxtIcon)!=null&&r.aliases;const n=l,p=a(()=>{var s;return(((s=e==null?void 0:e.nuxtIcon)==null?void 0:s.aliases)||{})[n.name]||n.name}),m=a(()=>`url('https://api.iconify.design/${p.value.replace(":","/")}.svg')`),c=a(()=>{var t,i,u;if(!n.size&&typeof((t=e.nuxtIcon)==null?void 0:t.size)=="boolean"&&!((i=e.nuxtIcon)!=null&&i.size))return;const s=n.size||((u=e.nuxtIcon)==null?void 0:u.size)||"1em";return String(Number(s))===s?`${s}px`:s});return(s,t)=>(x(),z("span",{style:S({width:o(c),height:o(c)})},null,4))}}),v=I(y,[["__scopeId","data-v-5217de21"]]);export{v as default};
