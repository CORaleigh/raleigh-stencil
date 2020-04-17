import{r as t,h as l}from"./p-ea61ee30.js";import"@esri/calcite-components";class s{constructor(t,l,s,e,i){this.label=t,this.value=l,this.max=s,this.gallons=e,this.ccfunits=i}}const e=class{constructor(l){t(this,l),this.shower1=new s("How many minutes does the average shower last in your household?",0,30,0,0),this.shower2=new s("How many showers are taken each week in your household?",0,50,0,0),this.bath1=new s("How many full-tub baths are taken each week in your household?",0,50,0,0),this.bath2=new s("How many half-tub baths are taken each week in your household?",0,50,0,0),this.toilet=new s("How many people are in your household?",0,25,0,0),this.teeth=new s("How many times per day does each person brush their teeth?",0,10,0,0),this.shaving=new s("How many times per week does someone shave in your household?",0,75,0,0),this.washing=new s("How many times are face or hands washed per day in your household?",0,100,0,0),this.dishwasher=new s("How many times per week is the dishwasher run in your household?",0,25,0,0),this.dishes=new s("How many minutes each day do you run water while hand-washing dishes?",0,60,0,0),this.clothes=new s("How many loads of laundry are washed per week?",0,25,0,0),this.outdoor=new s("How many minutes per week does your household use water outdoors?",0,500,0,0),this.dripping=new s("How many faucets are dripping in your household?",0,10,0,0),this.leaking=new s("How many toilets are leaking in your household?",0,5,0,0),this.indoor=new s("Based on the number of people in your household (as answered above)",0,50,0,0),this.sliders=[this.shower1,this.shower2,this.bath1,this.bath2,this.toilet,this.teeth,this.shaving,this.washing,this.dishwasher,this.dishes,this.clothes,this.outdoor,this.dripping,this.leaking,this.indoor]}shower1Input(t){this.shower1=Object.assign(Object.assign({},this.shower1),{value:t.target.value}),this.shower2=Object.assign(Object.assign({},this.shower2),{gallons:this.shower1.value*this.shower2.value*4.33*5}),this.shower2=Object.assign(Object.assign({},this.shower2),{ccfunits:this.shower2.gallons/748})}shower2Input(t){this.shower2=Object.assign(Object.assign({},this.shower2),{value:t.target.value}),this.shower2=Object.assign(Object.assign({},this.shower2),{gallons:this.shower1.value*this.shower2.value*4.33*5}),this.shower2=Object.assign(Object.assign({},this.shower2),{ccfunits:this.shower2.gallons/748})}bath1Input(t){this.bath1=Object.assign(Object.assign({},this.bath1),{value:t.target.value,gallons:4.33*t.target.value*36}),this.bath1=Object.assign(Object.assign({},this.bath1),{ccfunits:this.bath1.gallons/748})}bath2Input(t){this.bath2=Object.assign(Object.assign({},this.bath2),{value:t.target.value,gallons:4.33*t.target.value*18}),this.bath2=Object.assign(Object.assign({},this.bath2),{ccfunits:this.bath2.gallons/748})}toiletInput(t){this.toilet=Object.assign(Object.assign({},this.toilet),{value:t.target.value,gallons:30.4*t.target.value*12}),this.toilet=Object.assign(Object.assign({},this.toilet),{ccfunits:this.toilet.gallons/748}),this.teeth=Object.assign(Object.assign({},this.teeth),{gallons:t.target.value*this.teeth.value*30.4*3}),this.teeth=Object.assign(Object.assign({},this.teeth),{ccfunits:this.teeth.gallons/748})}teethInput(t){this.teeth=Object.assign(Object.assign({},this.teeth),{value:t.target.value,gallons:t.target.value*this.toilet.value*30.4*3}),this.teeth=Object.assign(Object.assign({},this.teeth),{ccfunits:this.teeth.gallons/748})}shavingInput(t){this.shaving=Object.assign(Object.assign({},this.shaving),{value:t.target.value,gallons:4.33*t.target.value}),this.shaving=Object.assign(Object.assign({},this.shaving),{ccfunits:this.shaving.gallons/748})}washingInput(t){this.washing=Object.assign(Object.assign({},this.washing),{value:t.target.value,gallons:30.4*t.target.value}),this.washing=Object.assign(Object.assign({},this.washing),{ccfunits:this.washing.gallons/748})}dishwasherInput(t){this.dishwasher=Object.assign(Object.assign({},this.dishwasher),{value:t.target.value,gallons:16*t.target.value*4.33}),this.dishwasher=Object.assign(Object.assign({},this.dishwasher),{ccfunits:this.dishwasher.gallons/748})}dishesInput(t){this.dishes=Object.assign(Object.assign({},this.dishes),{value:t.target.value,gallons:3*t.target.value*30.4}),this.dishes=Object.assign(Object.assign({},this.dishes),{ccfunits:this.dishes.gallons/748})}clothesInput(t){this.clothes=Object.assign(Object.assign({},this.clothes),{value:t.target.value,gallons:44*t.target.value*4.33}),this.clothes=Object.assign(Object.assign({},this.clothes),{ccfunits:this.clothes.gallons/748})}outdoorInput(t){this.outdoor=Object.assign(Object.assign({},this.outdoor),{value:t.target.value,gallons:6*t.target.value*4.33}),this.outdoor=Object.assign(Object.assign({},this.outdoor),{ccfunits:this.outdoor.gallons/748})}drippingInput(t){this.dripping=Object.assign(Object.assign({},this.dripping),{value:t.target.value,gallons:1*t.target.value*30.4}),this.dripping=Object.assign(Object.assign({},this.dripping),{ccfunits:this.dripping.gallons/748})}leakingInput(t){this.leaking=Object.assign(Object.assign({},this.leaking),{value:t.target.value,gallons:200*t.target.value*30.4}),this.leaking=Object.assign(Object.assign({},this.leaking),{ccfunits:this.leaking.gallons/748})}indoorInput(t){this.indoor=Object.assign(Object.assign({},this.indoor),{value:t.target.value,gallons:30.4*t.target.value*10}),this.indoor=Object.assign(Object.assign({},this.indoor),{ccfunits:this.indoor.gallons/748})}disconnectedCallback(){document.getElementById("councilDiv").innerHTML=""}render(){return l("div",{id:"waterUsage"},l("h3",null,"Estimate your monthly household water usage"),l("h5",null,"To estimate your monthly household water usage, slide the scrollbar next to each question to provide your answer. Calculations update automatically. "),l("h4",null,"Showers"),l("h5",null,"An average shower uses 5 gallons of water per minute. "),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.shower1.label),l("input",{type:"text",value:this.shower1.value,onInput:t=>this.shower1Input(t)}),l("input",{onInput:t=>this.shower1Input(t),type:"range",min:"0",max:this.shower1.max,value:this.shower1.value,step:"1","aria-valuemin":"0","aria-valuemax":this.shower1.max,"aria-valuenow":"0"}))),l("td",null,"--"),l("td",null,"--")),l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.shower2.label),l("input",{type:"text",value:this.shower2.value,onInput:t=>this.shower2Input(t)}),l("input",{onInput:t=>this.shower2Input(t),type:"range",min:"0",max:this.shower2.max,value:this.shower2.value,step:"1","aria-valuemin":"0","aria-valuemax":this.shower2.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.shower2.gallons)),l("td",null,this.shower2.ccfunits.toFixed(3))))),l("h4",null,"Baths"),l("h5",null,"A full-tub bath uses 36 gallons of water; a half-tub bath uses 18 gallons of water. "),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.bath1.label),l("input",{type:"text",value:this.bath1.value,onInput:t=>this.bath1Input(t)}),l("input",{onInput:t=>this.bath1Input(t),type:"range",min:"0",max:this.bath1.max,value:this.bath1.value,step:"1","aria-valuemin":"0","aria-valuemax":this.bath1.max,"aria-valuenow":"0"}))),l("td",null,Math.round(Math.round(this.bath1.gallons))),l("td",null,this.bath1.ccfunits.toFixed(3))),l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.bath2.label),l("input",{type:"text",value:this.bath2.value,onInput:t=>this.bath2Input(t)}),l("input",{onInput:t=>this.bath2Input(t),type:"range",min:"0",max:this.bath2.max,value:this.bath2.value,step:"1","aria-valuemin":"0","aria-valuemax":this.bath2.max,"aria-valuenow":"0"}))),l("td",null,Math.round(4.33*this.bath2.value*18)),l("td",null,this.bath2.ccfunits.toFixed(3))))),l("h4",null,"Toilet Flushes"),l("h5",null,"The average person flushes 4 times daily, using 3 gallons of water per flush. "),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.toilet.label),l("input",{type:"text",value:this.toilet.value,onInput:t=>this.toiletInput(t)}),l("input",{onInput:t=>this.toiletInput(t),type:"range",min:"0",max:this.toilet.max,value:this.toilet.value,step:"1","aria-valuemin":"0","aria-valuemax":this.toilet.max,"aria-valuenow":"0"}))),l("td",null,Math.round(30.4*this.toilet.value*12)),l("td",null,this.toilet.ccfunits.toFixed(3))))),l("h4",null,"Brushing Teeth"),l("h5",null,"The average person uses 3 gallons of water each time they brush their teeth. "),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.teeth.label),l("input",{type:"text",value:this.teeth.value,onInput:t=>this.teethInput(t)}),l("input",{onInput:t=>this.teethInput(t),type:"range",min:"0",max:this.teeth.max,value:this.teeth.value,step:"1","aria-valuemin":"0","aria-valuemax":this.teeth.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.teeth.gallons)),l("td",null,this.teeth.ccfunits.toFixed(3))))),l("h4",null,"Shaving"),l("h5",null,"The average shave uses 1 gallon of water. "),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.shaving.label),l("input",{type:"text",value:this.shaving.value,onInput:t=>this.shavingInput(t)}),l("input",{onInput:t=>this.shavingInput(t),type:"range",min:"0",max:this.shaving.max,value:this.shaving.value,step:"1","aria-valuemin":"0","aria-valuemax":this.shaving.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.shaving.gallons)),l("td",null,this.shaving.ccfunits.toFixed(3))))),l("h4",null,"Face/Hand Washing"),l("h5",null,"Each time you wash your face or hands, approximately 1 gallon of water is used."),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.washing.label),l("input",{type:"text",value:this.washing.value,onInput:t=>this.washingInput(t)}),l("input",{onInput:t=>this.washingInput(t),type:"range",min:"0",max:this.washing.max,value:this.washing.value,step:"1","aria-valuemin":"0","aria-valuemax":this.washing.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.washing.gallons)),l("td",null,this.washing.ccfunits.toFixed(3))))),l("h4",null,"Dishwasher"),l("h5",null,"The average dishwasher uses 16 gallons of water per wash."),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.dishwasher.label),l("input",{type:"text",value:this.dishwasher.value,onInput:t=>this.dishwasherInput(t)}),l("input",{onInput:t=>this.dishwasherInput(t),type:"range",min:"0",max:this.dishwasher.max,value:this.dishwasher.value,step:"1","aria-valuemin":"0","aria-valuemax":this.dishwasher.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.dishwasher.gallons)),l("td",null,this.dishwasher.ccfunits.toFixed(3))))),l("h4",null,"Hand-Washing Dishes"),l("h5",null,"Hand-washing dishes with water running uses 3 gallons of water per minute."),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.dishes.label),l("input",{type:"text",value:this.dishes.value,onInput:t=>this.dishesInput(t)}),l("input",{onInput:t=>this.dishesInput(t),type:"range",min:"0",max:this.dishes.max,value:this.dishes.value,step:"1","aria-valuemin":"0","aria-valuemax":this.dishes.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.dishes.gallons)),l("td",null,this.dishes.ccfunits.toFixed(3))))),l("h4",null,"Clothes Washer"),l("h5",null,"The average washing machine uses 44 gallons of water per load of laundry."),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.clothes.label),l("input",{type:"text",value:this.clothes.value,onInput:t=>this.clothesInput(t)}),l("input",{onInput:t=>this.clothesInput(t),type:"range",min:"0",max:this.clothes.max,value:this.clothes.value,step:"1","aria-valuemin":"0","aria-valuemax":this.clothes.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.clothes.gallons)),l("td",null,this.clothes.ccfunits.toFixed(3))))),l("h4",null,"Outdoor Use"),l("h5",null,"When using water outdoors, the average use is 6 gallons of water per minute."),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.outdoor.label),l("input",{type:"text",value:this.outdoor.value,onInput:t=>this.outdoorInput(t)}),l("input",{onInput:t=>this.outdoorInput(t),type:"range",min:"0",max:this.outdoor.max,value:this.outdoor.value,step:"1","aria-valuemin":"0","aria-valuemax":this.outdoor.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.outdoor.gallons)),l("td",null,this.outdoor.ccfunits.toFixed(3))))),l("h4",null,"Dripping faucet"),l("h5",null,"A faucet that drips 10 times per minute uses 1 gallon of water per day."),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.dripping.label),l("input",{type:"text",value:this.dripping.value,onInput:t=>this.drippingInput(t)}),l("input",{onInput:t=>this.drippingInput(t),type:"range",min:"0",max:this.dripping.max,value:this.dripping.value,step:"1","aria-valuemin":"0","aria-valuemax":this.dripping.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.dripping.gallons)),l("td",null,this.dripping.ccfunits.toFixed(3))))),l("h4",null,"Leaking toilet"),l("h5",null,"A leaking toilet can use 200 or more gallons of water per day."),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.leaking.label),l("input",{type:"text",value:this.leaking.value,onInput:t=>this.leakingInput(t)}),l("input",{onInput:t=>this.leakingInput(t),type:"range",min:"0",max:this.leaking.max,value:this.leaking.value,step:"1","aria-valuemin":"0","aria-valuemax":this.leaking.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.leaking.gallons)),l("td",null,this.leaking.ccfunits.toFixed(3))))),l("h4",null,"Other Indoor Use"),l("h5",null,"An average person uses 10 gallons of water per day for other various indoor uses. "),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"}),l("th",null,"Gallons"),l("th",null,"CCF Units"))),l("tbody",null,l("tr",null,l("td",{class:"slider"},l("form",null,l("label",null,this.indoor.label),l("input",{type:"text",value:this.indoor.value,onInput:t=>this.indoorInput(t)}),l("input",{onInput:t=>this.indoorInput(t),type:"range",min:"0",max:this.indoor.max,value:this.indoor.value,step:"1","aria-valuemin":"0","aria-valuemax":this.indoor.max,"aria-valuenow":"0"}))),l("td",null,Math.round(this.indoor.gallons)),l("td",null,this.indoor.ccfunits.toFixed(3))))),l("table",null,l("thead",null,l("tr",null,l("th",{class:"slider"},"Estimated Monthly Water Usage"),l("th",null,Math.round(this.shower2.gallons+this.bath1.gallons+this.bath2.gallons+this.toilet.gallons+this.teeth.gallons+this.shaving.gallons+this.washing.gallons+this.dishwasher.gallons+this.dishes.gallons+this.clothes.gallons+this.outdoor.gallons+this.dripping.gallons+this.leaking.gallons+this.indoor.gallons)),l("th",null,(this.shower2.ccfunits+this.bath1.ccfunits+this.bath2.ccfunits+this.toilet.ccfunits+this.teeth.ccfunits+this.shaving.ccfunits+this.washing.ccfunits+this.dishwasher.ccfunits+this.dishes.ccfunits+this.clothes.ccfunits+this.outdoor.ccfunits+this.dripping.ccfunits+this.leaking.ccfunits+this.indoor.ccfunits).toFixed(3))))),l("div",{class:"paragraph"},"Water bills are calculated using CCF units. ",l("br",null),"A CCF unit represents 100 cubic feet. One CCF equals 748 gallons."))}static get style(){return"\@import url(\"https://js.arcgis.com/4.13/esri/themes/light/main.css\");\@import url(\"https://s3-us-west-1.amazonaws.com/patterns.esri.com/files/calcite-web/1.2.5/css/calcite-web.min.css\");input[type=text]{float:left;width:80px}input[type=range]{float:right;width:calc(100% - 80px - 1em)}\@media (max-width:37.5em){input[type=text]{float:none;width:80px}input[type=range]{float:none;width:100%}}input:hover{border-color:#046a38!important}form{margin-bottom:3em}label{margin:0}td.slider,th.slider{width:75%;text-align:left}td,th{width:12.5%;text-align:center}table{width:100%}#waterUsage{margin:0 1em 0 1em}"}};export{e as water_usage};