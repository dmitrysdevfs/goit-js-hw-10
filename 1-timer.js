import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as c,i as l}from"./assets/vendor-Dov3POoy.js";const a=document.querySelector("[data-start]"),o=document.querySelector("#datetime-picker");a.disabled=!0;let s=null;c(o,{enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const n=e[0];if(e[0]<=Date.now()){l.show({message:"Please choose a date in the future",messageSize:"16",messageColor:"white",backgroundColor:"red",position:"topRight",icon:"fa-regular fa-circle-xmark",progressBar:!1,timeout:2e3,close:!1});return}a.disabled=!1,s=n}});a.addEventListener("click",()=>{s&&(o.disabled=!0,a.disabled=!0,h.updateDeadLine(s))});const h={deadLine:null,intervalId:null,elements:document.querySelectorAll(".value"),start(){this.intervalId=setInterval(()=>{const e=this.deadLine-Date.now();if(e<=0){this.stop(),o.disabled=!1;return}const n=this.convertMs(e);this.elements.forEach(t=>{t.dataset.days!==void 0&&(t.textContent=this.addLeadingZero(n.days)),t.dataset.hours!==void 0&&(t.textContent=this.addLeadingZero(n.hours)),t.dataset.minutes!==void 0&&(t.textContent=this.addLeadingZero(n.minutes)),t.dataset.seconds!==void 0&&(t.textContent=this.addLeadingZero(n.seconds))})},1e3)},stop(){clearInterval(this.intervalId)},convertMs(e){const d=Math.floor(e/864e5),i=Math.floor(e%864e5/36e5),r=Math.floor(e%864e5%36e5/6e4),u=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:i,minutes:r,seconds:u}},addLeadingZero(e){return String(e).padStart(2,"0")},updateDeadLine(e){this.stop(),this.deadLine=e,this.start()}};
//# sourceMappingURL=1-timer.js.map
