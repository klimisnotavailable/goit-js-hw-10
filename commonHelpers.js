import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as t}from"./assets/vendor-d07556bb.js";const m=document.querySelector("input[type=number]"),o=document.querySelector("form.form");document.querySelector('input[type="radio"]');o.addEventListener("submit",s=>{s.preventDefault();const e=m.value;new Promise((r,i)=>{setTimeout(()=>{o.elements.state.value=="fulfilled"?r(console.log(`✅ Fulfilled promise in ${e}ms`)):i(console.log(`❌ Rejected promise in ${e}ms`))},e)}).then(()=>{t.show({title:"Sucsess",message:`✅ Fulfilled promise in ${e}ms`})}).catch(()=>{t.error({title:"Error",message:`❌ Rejected promise in ${e}ms`})})});
//# sourceMappingURL=commonHelpers.js.map
