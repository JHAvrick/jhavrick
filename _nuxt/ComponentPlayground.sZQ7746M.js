import{L as m,H as p,d as c,ak as i,r as u,M as e,k as l}from"./entry.q51H6hq7.js";import{u as d}from"./asyncData.b9fyEA6K.js";import f from"./Ellipsis.oEYgAUJK.js";import y from"./ComponentPlaygroundData.2MI8vymr.js";import"./TabsHeader.ARfV28BE.js";import"./ComponentPlaygroundProps.VEWrlxJP.js";import"./ProseH4.eoYYUrhU.js";import"./ProseCodeInline.ldheL6E8.js";import"./Badge.xFPUWv1h.js";import"./MDCSlot.2m7djww0.js";import"./slot.3CDohp6n.js";import"./ProseP.8NjeZ6Vo.js";import"./index._NAKNBdC.js";import"./ComponentPlaygroundSlots.vue.Js_jwk4I.js";import"./ComponentPlaygroundTokens.vue.7bwYUKzL.js";async function g(o){const t=m(o);{const{data:n}=await d(`nuxt-component-meta${t?`-${t}`:""}`,()=>$fetch(`/api/component-meta${t?`/${t}`:""}`));return p(()=>n.value)}}const h=c({props:{component:{type:String,required:!0},props:{type:Object,required:!1,default:()=>({})}},async setup(o){const t=p(()=>i(o.component)),n=u({...o.props}),r=await g(o.component);return{as:t,formProps:n,componentData:r}},render(o){const t=Object.entries(this.$slots).reduce((n,[r,a])=>{if(r.startsWith("component-")){const s=r.replace("component-","");n[s]=a}return n},{});return e("div",{class:"component-playground"},[e("div",{class:"component-playground-wrapper"},[e(f,{class:"component-playground-ellipsis",blur:"5vw",height:"100%",width:"100%"}),e(o.as,{...o.formProps,class:"component-playground-component"},{...t})]),e(y,{modelValue:o.formProps,componentData:o.componentData,"onUpdate:modelValue":n=>o.formProps=n})])}}),A=l(h,[["__scopeId","data-v-9ca9b996"]]);export{A as default};