import"./assets/modulepreload-polyfill-ec808ebb.js";const e=document.querySelector("form"),s="feedback-form-state",r=e.elements.message,m=e.elements.email;let n={};const o=JSON.parse(localStorage.getItem(s))||{};r.value=o.message||"";m.value=o.email||"";e.addEventListener("input",c);e.addEventListener("submit",i);function c(t){const a=t.currentTarget.elements.email.value.trim(),l=t.currentTarget.elements.message.value.trim();n={email:a,message:l},!(a===""&&l==="")&&localStorage.setItem(s,JSON.stringify({email:a,message:l}))}function i(t){if(t.preventDefault(),m.value===""||r.value==="")return alert("All form fields must be filled in!");console.log(n),localStorage.removeItem(s),e.reset()}
//# sourceMappingURL=commonHelpers2.js.map
