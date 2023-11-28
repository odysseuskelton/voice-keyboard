(()=>{"use strict";var e={2559:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var n=a(885),r=a(2812),c=a(9385),o=a(1054),s=a(5004),i=a(8817),l=a(3984),d=a(511),b=a(5861),u=a(6264),f=a(3749),h=a(2629);function p(e){var t=e.label,r=e.changeText,i=s.useState(),p=(0,n.default)(i,2),g=p[0],v=p[1];function y(){return y=(0,b.default)((function*(e){r(e.label),l.impactAsync(d.ImpactFeedbackStyle.Heavy),function(e){m.apply(this,arguments)}(e)})),y.apply(this,arguments)}function m(){return m=(0,b.default)((function*(e){console.log("Loading Sound");var t=a(1670),n=a(7577),r=a(7537),c=a(7666),o=a(1539),s=a(1311),i=a(7789),l=a(7454),d=a(2657),b=a(8566),u=a(6569),h=a(3700),p=a(6217),x=a(6626),g=a(9155),y=a(5272),m=a(2308),j=a(3355),w=a(1183),T=a(4185),k=a(243),L=a(4894),C=a(1680),S=a(64),I=a(4201),O=a(5559);switch(e.label){case"A":chosenLetter=t,this.set;break;case"B":chosenLetter=n;break;case"C":chosenLetter=r;break;case"D":chosenLetter=c;break;case"E":chosenLetter=o;break;case"F":chosenLetter=s;break;case"G":chosenLetter=i;break;case"H":chosenLetter=l;break;case"I":chosenLetter=d;break;case"J":chosenLetter=b;break;case"K":chosenLetter=u;break;case"L":chosenLetter=h;break;case"M":chosenLetter=p;break;case"N":chosenLetter=x;break;case"O":chosenLetter=g;break;case"P":chosenLetter=y;break;case"Q":chosenLetter=m;break;case"R":chosenLetter=j;break;case"S":chosenLetter=w;break;case"T":chosenLetter=T;break;case"U":chosenLetter=k;break;case"V":chosenLetter=L;break;case"W":chosenLetter=C;break;case"X":chosenLetter=S;break;case"Y":chosenLetter=I;break;case"Z":chosenLetter=O}var R=(yield f.Sound.createAsync(chosenLetter)).sound;v(R),console.log("Playing Sound"),yield R.playAsync()})),m.apply(this,arguments)}return s.useEffect((function(){return g?function(){console.log("Unloading Sound"),g.unloadAsync()}:void 0}),[g]),(0,h.jsx)(c.default,{style:x.buttonContainer,children:(0,h.jsx)(u.default,{style:x.button,onPress:function(e){return function(e){return y.apply(this,arguments)}({label:t})},children:(0,h.jsx)(o.default,{style:x.buttonLabel,children:t})})})}var x=r.default.create({buttonContainer:{width:68,height:68,marginHorizontal:5,marginTop:10,alignItems:"center",justifyContent:"center",padding:3,backgroundColor:"blue",borderRadius:10},button:{borderRadius:10,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row"},buttonIcon:{paddingRight:8},buttonLabel:{color:"#fff",fontSize:47,fontWeight:"900"}});function g(e){var t=e.label,a=e.changeText,r=s.useState(),i=(0,n.default)(r,2),l=i[0];i[1];function d(){return(d=(0,b.default)((function*(e){a(e.label)}))).apply(this,arguments)}return s.useEffect((function(){return l?function(){console.log("Unloading Sound"),l.unloadAsync()}:void 0}),[l]),(0,h.jsx)(c.default,{style:v.buttonContainer,children:(0,h.jsx)(u.default,{style:v.button,onPress:function(e){return function(e){return d.apply(this,arguments)}({label:t})},children:(0,h.jsx)(o.default,{style:v.buttonLabel,children:t})})})}var v=r.default.create({buttonContainer:{width:146,height:65,marginHorizontal:5,marginTop:10,alignItems:"center",justifyContent:"center",padding:3,backgroundColor:"green",borderRadius:10},button:{borderRadius:10,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row"},buttonIcon:{paddingRight:8},buttonLabel:{color:"#fff",fontSize:45,fontWeight:"900"}});function y(e){var t=e.label,a=e.changeText,r=s.useState(),i=(0,n.default)(r,2),l=i[0];i[1];function d(){return(d=(0,b.default)((function*(e){a(e.label)}))).apply(this,arguments)}return s.useEffect((function(){return l?function(){console.log("Unloading Sound"),l.unloadAsync()}:void 0}),[l]),(0,h.jsx)(c.default,{style:m.buttonContainer,children:(0,h.jsx)(u.default,{style:m.button,onPress:function(e){return function(e){return d.apply(this,arguments)}({label:t})},children:(0,h.jsx)(o.default,{style:m.buttonLabel,children:t})})})}var m=r.default.create({buttonContainer:{width:146,height:65,marginHorizontal:5,marginTop:10,alignItems:"center",justifyContent:"center",padding:3,backgroundColor:"red",borderRadius:10},button:{borderRadius:10,width:"100%",height:"100%",alignItems:"center",justifyContent:"center",flexDirection:"row"},buttonIcon:{paddingRight:8},buttonLabel:{color:"#fff",fontSize:45,fontWeight:"900"}});function j(){var e,t=(0,s.useState)("_"),a=(0,n.default)(t,2),r=a[0],b=a[1],u={rate:.6},f=function(t){r.length>33?e=t+"_":(e=(e=r+t).replace("_",""),e+="_"),b(e)};return(0,h.jsxs)(c.default,{style:w.container,children:[(0,h.jsx)(c.default,{style:w.innerContainer}),(0,h.jsx)(o.default,{style:w.titleText,id:"textElement",children:r}),(0,h.jsxs)(c.default,{style:w.letterContainer,children:[(0,h.jsx)(g,{label:"test",changeText:function(){b(e="test success")}}),(0,h.jsx)(p,{label:"A",changeText:f}),(0,h.jsx)(p,{label:"B",changeText:f}),(0,h.jsx)(p,{label:"C",changeText:f}),(0,h.jsx)(p,{label:"D",changeText:f}),(0,h.jsx)(p,{label:"E",changeText:f}),(0,h.jsx)(p,{label:"F",changeText:f}),(0,h.jsx)(p,{label:"G",changeText:f}),(0,h.jsx)(p,{label:"H",changeText:f}),(0,h.jsx)(p,{label:"I",changeText:f}),(0,h.jsx)(p,{label:"J",changeText:f}),(0,h.jsx)(p,{label:"K",changeText:f}),(0,h.jsx)(p,{label:"L",changeText:f}),(0,h.jsx)(p,{label:"M",changeText:f}),(0,h.jsx)(p,{label:"N",changeText:f}),(0,h.jsx)(p,{label:"O",changeText:f}),(0,h.jsx)(p,{label:"P",changeText:f}),(0,h.jsx)(p,{label:"Q",changeText:f}),(0,h.jsx)(p,{label:"R",changeText:f}),(0,h.jsx)(p,{label:"S",changeText:f}),(0,h.jsx)(p,{label:"T",changeText:f}),(0,h.jsx)(p,{label:"U",changeText:f}),(0,h.jsx)(p,{label:"V",changeText:f}),(0,h.jsx)(p,{label:"W",changeText:f}),(0,h.jsx)(p,{label:"X",changeText:f}),(0,h.jsx)(p,{label:"Y",changeText:f}),(0,h.jsx)(p,{label:"Z",changeText:f}),(0,h.jsx)(g,{label:"Space",changeText:function(){l.impactAsync(d.ImpactFeedbackStyle.Heavy),r.length>33?e=" ":(e=(e=r+" ").replace("_",""),i.stop(),i.speak(e,u),e+="_"),b(e)}}),(0,h.jsx)(y,{label:"Delete",changeText:function(){l.impactAsync(d.ImpactFeedbackStyle.Heavy),r.length>0&&(i.stop(),i.speak("Delete",u),e=r.substring(0,r.length-2),b(e+="_"))}})]})]})}var w=r.default.create({container:{flex:1,backgroundColor:"black",alignItems:"start"},innerContainer:{backgroundColor:"black",alignItems:"start"},letterContainer:{width:430,flexDirection:"row",flexWrap:"wrap",paddingLeft:10,alignItems:"start",paddingTop:5},titleText:{height:390,width:420,fontSize:65,fontWeight:"bold",flexDirection:"row",flexWrap:"wrap",color:"white",alignItems:"center",paddingRight:10,paddingBottom:10,paddingTop:15}})},1670:(e,t,a)=>{e.exports=a.p+"static/media/a.42645b31bdf4d4df0528.wav"},7577:(e,t,a)=>{e.exports=a.p+"static/media/b.989499477700b8b1549b.wav"},7537:(e,t,a)=>{e.exports=a.p+"static/media/c.9129c0f23eeb533d6660.wav"},7666:(e,t,a)=>{e.exports=a.p+"static/media/d.b68ea562fe489f4677a2.wav"},1539:(e,t,a)=>{e.exports=a.p+"static/media/e.c3d0c24fe864f32bbf8f.wav"},1311:(e,t,a)=>{e.exports=a.p+"static/media/f.52dc4f0059f86dc0ea64.wav"},7789:(e,t,a)=>{e.exports=a.p+"static/media/g.5e8843b3f0ee65fb7dc5.wav"},7454:(e,t,a)=>{e.exports=a.p+"static/media/h.9efaefdbc936343ae560.wav"},2657:(e,t,a)=>{e.exports=a.p+"static/media/i.64c6529b98eb5aec3879.wav"},8566:(e,t,a)=>{e.exports=a.p+"static/media/j.1743442733f0e01db1aa.wav"},6569:(e,t,a)=>{e.exports=a.p+"static/media/k.b11f06c19205441d4461.wav"},3700:(e,t,a)=>{e.exports=a.p+"static/media/l.84ccfb74bc7417cca9e7.wav"},6217:(e,t,a)=>{e.exports=a.p+"static/media/m.a06836934c30d251c0b6.wav"},6626:(e,t,a)=>{e.exports=a.p+"static/media/n.f203ae349986152fd9d6.wav"},9155:(e,t,a)=>{e.exports=a.p+"static/media/o.9ed4bfcd8fa24c63f2bf.wav"},5272:(e,t,a)=>{e.exports=a.p+"static/media/p.9f4b700dcb947cdf7190.wav"},2308:(e,t,a)=>{e.exports=a.p+"static/media/q.5d0d17c2e180a1cd088d.wav"},3355:(e,t,a)=>{e.exports=a.p+"static/media/r.e8570a55b022d6d31c65.wav"},1183:(e,t,a)=>{e.exports=a.p+"static/media/s.433c2622396347f221c3.wav"},4185:(e,t,a)=>{e.exports=a.p+"static/media/t.c3ee3e19549a4c0d89a6.wav"},243:(e,t,a)=>{e.exports=a.p+"static/media/u.3e5b69ecf15f90a9a806.wav"},4894:(e,t,a)=>{e.exports=a.p+"static/media/v.5e7b30ea093e01a69cf0.wav"},1680:(e,t,a)=>{e.exports=a.p+"static/media/w.c6de459e16912dd80a78.wav"},64:(e,t,a)=>{e.exports=a.p+"static/media/x.3f2e7e5b581365ff05bf.wav"},4201:(e,t,a)=>{e.exports=a.p+"static/media/y.3cb4b1cf22503314cff4.wav"},5559:(e,t,a)=>{e.exports=a.p+"static/media/z.50a7daeb626d844ea74b.wav"}},t={};function a(n){var r=t[n];if(void 0!==r)return r.exports;var c=t[n]={exports:{}};return e[n].call(c.exports,c,c.exports,a),c.exports}a.m=e,(()=>{var e=[];a.O=(t,n,r,c)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){for(var[n,r,c]=e[d],s=!0,i=0;i<n.length;i++)(!1&c||o>=c)&&Object.keys(a.O).every((e=>a.O[e](n[i])))?n.splice(i--,1):(s=!1,c<o&&(o=c));if(s){e.splice(d--,1);var l=r();void 0!==l&&(t=l)}}return t}c=c||0;for(var d=e.length;d>0&&e[d-1][2]>c;d--)e[d]=e[d-1];e[d]=[n,r,c]}})(),a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.p="/voice-keyboard/",(()=>{var e={179:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,c,[o,s,i]=n,l=0;if(o.some((t=>0!==e[t]))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(i)var d=i(a)}for(t&&t(n);l<o.length;l++)c=o[l],a.o(e,c)&&e[c]&&e[c][0](),e[c]=0;return a.O(d)},n=self.webpackChunkweb=self.webpackChunkweb||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var n=a.O(void 0,[311],(()=>a(6271)));n=a.O(n)})();
//# sourceMappingURL=main.a22e82e3.js.map