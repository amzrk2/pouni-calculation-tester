(this["webpackJsonppouni-calculation-tester"]=this["webpackJsonppouni-calculation-tester"]||[]).push([[0],{228:function(e,t,n){},239:function(e,t,n){},306:function(e,t,n){},344:function(e,t,n){},513:function(e,t,n){},514:function(e,t,n){},515:function(e,t,n){},517:function(e,t,n){"use strict";n.r(t);n(220);var s=n(20),c=n.n(s),r=n(2),a=n(0),i=n(24),o=n.n(i),u=n(53),l=n(32),j=(n(227),n(228),n(218)),d=n(26),h=n(108),b=n(210),O=n(30),x="UPDATE_QUESTION_TYPES",p="UPDATE_QUESTION_SETTINGSS",f=function(e){return{type:p,value:e}},m="CLEAN_SETTINGS_CACHE",v=n(9),g=n(10),y="pouni-calculation-tester-settings",S="pouni-calculation-tester-history",N=function(){function e(){Object(v.a)(this,e)}return Object(g.a)(e,[{key:"save",value:function(e,t){var n;try{return n=JSON.stringify(t),"settings"===e&&localStorage.setItem(y,n),"history"===e&&localStorage.setItem(S,n),!0}catch(s){return console.error(s),!1}}},{key:"load",value:function(e){var t;try{"settings"===e&&(t=JSON.parse(localStorage.getItem(y))),"history"===e&&(t=JSON.parse(localStorage.getItem(S)))}catch(n){return console.error(n),null}return t}}]),e}(),k=new N,I=Object(O.fromJS)({hhc:"easy",range:10,minus:!1,bracket:!1,dot:!1,dotRange:1}),E=Object(O.fromJS)({hhc:"hard",range:100,minus:!0,bracket:!0,dot:!0,dotRange:2}),C=Object(O.fromJS)({questionTypes:{fillBlank:2,judge:4,select:3},questionSettings:I}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:var n=e.mergeDeep(Object(O.fromJS)({questionTypes:t.value})),s=n.toJS().questionTypes,c=s.fillBlank,r=s.judge,a=s.select;return 0===c&&0===r&&0===a?e:(k.save("settings",n.toJS()),n);case p:var i;return i="easy"===t.value.hhc?e.mergeDeep(Object(O.fromJS)({questionSettings:I})):"hard"===t.value.hhc?e.mergeDeep(Object(O.fromJS)({questionSettings:E})):e.mergeDeep(Object(O.fromJS)({questionSettings:t.value})),k.save("settings",i.toJS()),i;case m:return k.save("settings",null),C;default:var o=k.load("settings");return o?e.mergeDeep(Object(O.fromJS)(o)):e}},w="UPDATE_ALL_QUESTIONS",_=function(e){return{type:w,value:e}},J="UPDATE_FILL_BLANK_QUESTIONS",Q="UPDATE_JUDGE_QUESTIONS",q="UPDATE_SELECT_QUESTIONS",D="SAVE_ALL_QUESTIONS",R="REMOVE_HISTORY",A=function(e){return{type:R,value:e}},B="LOAD_HISTORY",L="CLEAN_HISTORY_CACHE",M=n(83),U=new N,z=Object(O.fromJS)({fillBlankQuestions:[],judgeQuestions:[],selectQuestions:[],history:[]}),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return t.value?e.set("fillBlankQuestions",Object(O.fromJS)(t.value.fillBlankQuestions)).set("judgeQuestions",Object(O.fromJS)(t.value.judgeQuestions)).set("selectQuestions",Object(O.fromJS)(t.value.selectQuestions)):e.set("fillBlankQuestions",Object(O.fromJS)([])).set("judgeQuestions",Object(O.fromJS)([])).set("selectQuestions",Object(O.fromJS)([]));case J:var n=t.value,s=n.index,c=n.answer,r=e.get("fillBlankQuestions"),a=r.set(s,r.get(s).set("userAns",c));return e.set("fillBlankQuestions",a);case Q:var i=t.value,o=i.index,u=i.answer,l=e.get("judgeQuestions"),j=l.set(o,l.get(o).set("userAns",u));return e.set("judgeQuestions",j);case q:var d=t.value,h=d.index,b=d.answer,x=e.get("selectQuestions"),p=x.set(h,x.get(h).set("userAns",b));return e.set("selectQuestions",p);case D:var f=e.get("history"),m=0;f.toJS().length>0?f.forEach((function(e){e.get("historyID")>m&&(m=e.get("historyID"))})):m=-1;var v={historyID:m+1,historyQuestions:{fillBlankQuestions:e.get("fillBlankQuestions").toJS(),judgeQuestions:e.get("judgeQuestions").toJS(),selectQuestions:e.get("selectQuestions").toJS()},date:M().toJSON(),correctRate:""},g=0,y=0;Object.keys(v.historyQuestions).forEach((function(e){v.historyQuestions[e].forEach((function(e){g++,e.status=e.ans===e.userAns,e.status&&y++}))})),v.correctRate=(y/g*100).toFixed(0)+"%";var S=f.push(Object(O.fromJS)(v));return U.save("history",S.toJS()),e.set("history",S);case R:var N=e.get("history").toJS(),k=-1;if(N.forEach((function(e,n){t.value===e.historyID&&(k=n)})),k>=0){N.splice(k,1);var I=Object(O.fromJS)(N);return U.save("history",I.toJS()),e.set("history",I)}return e;case B:var E=Object(O.fromJS)(t.value);return U.save("history",E.toJS()),e.set("history",E);case L:return U.save("history",null),z;default:var C=e,T=U.load("history");return T?C.set("history",Object(O.fromJS)(T)):C}},K=Object(b.combineReducers)({start:T,test:F}),P=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__(),H=Object(h.b)(K,P),G=(n(119),n(75)),Y=n.n(G),V=(n(64),n(33)),X=n.n(V),W=n.p+"static/media/HomeChecked.65863f2e.svg",Z=(n(239),n(240),n(211)),$=n.n(Z),ee=n(526),te=n(527);var ne=function(e){return Object(r.jsxs)("div",{className:"footer",children:[e.divider&&Object(r.jsx)($.a,{}),Object(r.jsxs)("div",{className:"footer-content",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)(ee.a,{}),Object(r.jsx)("span",{children:"\xa0Copyright 2020 DSRKafuU | Apache-2.0 License"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)(te.a,{}),Object(r.jsx)("span",{children:"\xa0NJUPT B18030620"})]})]})]})};var se=function(){return Object(r.jsxs)("div",{className:"home",children:[Object(r.jsxs)("div",{className:"home-title",children:[Object(r.jsx)("img",{src:W,className:"home-title-logo",alt:"Title Logo"}),Object(r.jsx)("h1",{className:"home-title-name",children:"\u56db\u5219\u8fd0\u7b97\u81ea\u6d4b\u7cfb\u7edf"}),Object(r.jsx)("div",{className:"home-title-btns",children:Object(r.jsxs)(Y.a,{size:"large",children:[Object(r.jsx)(u.b,{to:"/app/start",component:X.a,type:"primary",size:"large",children:"\u5f00\u59cb"}),Object(r.jsx)(u.b,{to:"/app/about",component:X.a,size:"large",children:"\u5173\u4e8e"})]})})]}),Object(r.jsx)(ne,{divider:!1})]})},ce=(n(300),n(91)),re=n.n(ce),ae=n(541),ie=n(542),oe=n(543),ue=n(544),le=(n(303),n(215)),je=n.n(le),de=(n(305),n(116)),he=n.n(de),be=(n(306),n(307),n(214)),Oe=n.n(be),xe=(n(309),n(213)),pe=n.n(xe),fe=n(3);var me=function(e){var t=Object(d.b)(),n=e.typeText,s=e.typeKey,c=Object(d.c)((function(e){return e.getIn(["start","questionTypes",s])})),a=function(e){if(!isNaN(e))return t(function(e){return{type:x,value:e}}(Object(fe.a)({},s,e)))};return Object(r.jsxs)("div",{className:"question-types-item",children:[Object(r.jsx)("span",{children:n}),Object(r.jsx)(pe.a,{min:0,max:10,value:c,onChange:a}),Object(r.jsx)(Oe.a,{min:0,max:10,value:c,onChange:a})]})},ve=(n(171),n(76)),ge=n.n(ve),ye=(n(323),n(115)),Se=n.n(ye),Ne=(n(126),n(47)),ke=n.n(Ne);var Ie=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.getIn(["start","questionSettings"]).toJS()})),n="custom"===t.hhc,s=function(t,n){return e(f(Object(fe.a)({},n,t)))};return Object(r.jsxs)("div",{className:"question-settings",children:[Object(r.jsx)("h3",{children:"\u96be\u5ea6\u4e0e\u7ec6\u8282\u8bbe\u7f6e"}),Object(r.jsxs)("div",{className:"question-settings-item",children:[Object(r.jsx)("span",{children:"\u96be\u5ea6"}),Object(r.jsxs)(ke.a.Group,{value:"hdc-".concat(t.hhc),onChange:function(t){return e(f({hhc:t.target.value.split("-")[1]}))},buttonStyle:"solid",children:[Object(r.jsx)(ke.a.Button,{value:"hdc-easy",children:"\u7b80\u5355"}),Object(r.jsx)(ke.a.Button,{value:"hdc-hard",children:"\u56f0\u96be"}),Object(r.jsx)(ke.a.Button,{value:"hdc-custom",children:"\u81ea\u5b9a\u4e49"})]})]}),Object(r.jsxs)("div",{className:"question-settings-item",children:[Object(r.jsx)("span",{children:"\u6570\u503c\u8303\u56f4\u300c\u7edd\u5bf9\u503c\u300d"}),Object(r.jsxs)(ke.a.Group,{value:"range-".concat(t.range),onChange:function(t){return e(f({range:+t.target.value.split("-")[1]}))},disabled:!n,buttonStyle:"solid",children:[Object(r.jsx)(ke.a.Button,{value:"range-10",children:"10"}),Object(r.jsx)(ke.a.Button,{value:"range-100",children:"100"}),Object(r.jsx)(ke.a.Button,{value:"range-1000",children:"1000"})]}),Object(r.jsx)("span",{children:"\u4ee5\u5185"})]}),Object(r.jsxs)("div",{className:"question-settings-item",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"\u8d1f\u6570"}),Object(r.jsx)(Se.a,{checked:t.minus,disabled:!n,onChange:function(e){return s(e,"minus")},checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"\u62ec\u53f7"}),Object(r.jsx)(Se.a,{checked:t.bracket,disabled:!n,onChange:function(e){return s(e,"bracket")},checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})]})]}),Object(r.jsxs)("div",{className:"question-settings-item",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"\u5c0f\u6570"}),Object(r.jsx)(Se.a,{checked:t.dot,disabled:!n,onChange:function(e){return s(e,"dot")},checkedChildren:"\u5f00\u542f",unCheckedChildren:"\u5173\u95ed"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{children:"\u5c0f\u6570\u4f4d\u6570"}),Object(r.jsxs)(ge.a,{disabled:!n,value:"dot-".concat(t.dotRange),onChange:function(t){return e(f({dotRange:+t.split("-")[1]}))},children:[Object(r.jsx)(ge.a.Option,{value:"dot-1",children:"1"}),Object(r.jsx)(ge.a.Option,{value:"dot-2",children:"2"}),Object(r.jsx)(ge.a.Option,{value:"dot-3",children:"3"})]})]})]})]})},Ee=(n(100),n(69)),Ce=n.n(Ee),Te=(n(101),n(56)),we=n.n(Te),_e=n(528),Je=n(529);var Qe=function(){var e=Object(d.b)();return Object(r.jsxs)("div",{className:"question-ctrl",children:[Object(r.jsx)("h3",{className:"question-ctrl-func",children:"\u5168\u5c40\u529f\u80fd"}),Object(r.jsxs)(Y.a,{children:[Object(r.jsx)(Ce.a,{placement:"bottom",title:"\u786e\u5b9a\u8981\u6e05\u9664\u6570\u636e\u5417",onConfirm:function(){e({type:m}),e({type:L}),we.a.success("\u5df2\u6e05\u9664\u6570\u636e")},children:Object(r.jsx)(X.a,{icon:Object(r.jsx)(_e.a,{}),children:"\u6e05\u9664\u6570\u636e"})}),Object(r.jsx)(X.a,{icon:Object(r.jsx)(Je.a,{}),href:"https://github.com/amzrk2/pouni-calculation-tester",target:"_blank",children:"GitHub"})]}),Object(r.jsx)("h3",{className:"question-ctrl-notice",children:"\u63d0\u793a"}),Object(r.jsx)("h4",{children:"\u5c0f\u6570\u5f00\u542f"}),Object(r.jsx)("span",{children:"\u7b54\u6848\u8bf7\u5316\u4e3a\u4e0e\u8bbe\u7f6e\u7684\u4f4d\u6570\u76f8\u540c\u7684\u7cbe\u5ea6"}),Object(r.jsx)("h4",{children:"\u8d1f\u6570/\u5c0f\u6570/\u6570\u503c\u8303\u56f4"}),Object(r.jsx)("span",{children:"\u8fd9\u4e9b\u8bbe\u7f6e\u9879\u5bf9\u751f\u6210\u7684\u7b54\u6848\u540c\u6837\u6709\u6548"})]})};var qe=function(){return Object(r.jsx)("div",{className:"start",children:Object(r.jsxs)(je.a,{gutter:[0,32],children:[Object(r.jsx)(he.a,{xs:24,md:8,children:Object(r.jsxs)("div",{className:"question-types",children:[Object(r.jsx)("h3",{children:"\u7c7b\u578b\u4e0e\u6570\u91cf\u8c03\u6574"}),Object(r.jsx)(me,{typeText:"\u586b\u7a7a\u9898",typeKey:"fillBlank"}),Object(r.jsx)(me,{typeText:"\u5224\u65ad\u9898",typeKey:"judge"}),Object(r.jsx)(me,{typeText:"\u9009\u62e9\u9898",typeKey:"select"})]})}),Object(r.jsx)(he.a,{xs:24,md:8,children:Object(r.jsx)(Ie,{})}),Object(r.jsx)(he.a,{xs:24,md:8,children:Object(r.jsx)(Qe,{})})]})})},De=(n(179),n(144)),Re=n.n(De),Ae=n(31),Be=n.n(Ae),Le=n(49),Me=n(7),Ue=(n(344),n(1)),ze=n(525),Fe={hhc:"easy",range:10,minus:!1,bracket:!1,dot:!1,dotRange:1},Ke=function(){function e(){Object(v.a)(this,e),this._updateSettings(Fe)}return Object(g.a)(e,[{key:"_updateSettings",value:function(e){this.hhc=e.hhc,this.range=e.range,this.minus=e.minus,this.bracket=e.bracket,this.dot=e.dot,this.dotRange=e.dotRange}},{key:"_getRandomNumber",value:function(e,t){var n=t-e,s=Math.random();return e+Math.round(s*n)}},{key:"_genExpression",value:function(){for(var e=this,t=[],n=this._getRandomNumber(2,5),s=0;s<n;s++)t.push(this._getRandomNumber(0,this.range));this.dot&&(t=t.map((function(t){for(var n="",s=0;s<e.dotRange;s++)n=n.concat(e._getRandomNumber(0,9));return"".concat(t,".").concat(n)}))),this.minus&&(t=t.map((function(e){return Math.random()-.5>0?e:"(-".concat(e,")")})));for(var c=[],r=0;r<n-1;r++)c.push([" + "," - "," * "," / "][this._getRandomNumber(0,3)]);for(var a=[],i=0;i<2*n-1;i++)i%2===0?a.push(t.shift()):a.push(c.shift());return a.join("")}},{key:"_insertBracket",value:function(e){for(var t,n,s=Math.random()-.5,c=Math.random()-.5,r=e.split(" "),a=0;a<r.length;a++)if(["+","-","*","/"].includes(r[a])){t=a;break}if(s>0)for(var i=t;i<r.length;i++)if(["+","-","*","/"].includes(r[i])){t=i;break}for(var o=r.length-1;o>=0;o--)if(["+","-","*","/"].includes(r[o])){n=o;break}if(c>0)for(var u=n;u>=0;u--)if(["+","-","*","/"].includes(r[u])){n=u;break}return n-t!==4&&n-1>t+1?(r.splice(t+1,0,"("),r.splice(n-1,0,")"),r.join(" ")):e}},{key:"getExpressions",value:function(e,t){var n=this;return new Promise((function(s,c){try{if(t){var r=Object(Ue.a)(Object(Ue.a)({},Fe),t);n._updateSettings(r)}for(var a=[],i=0;i<e;i++){var o=n._genExpression();n.bracket&&(o=n._insertBracket(o));var u=Object(ze.a)(o),l=void 0;switch(!0){case!n.minus&&!n.dot:l=function(e){return Number.isFinite(e)&&!Number.isNaN(e)&&e%1===0&&e>=0&&Math.abs(Math.round(e))<t.range};break;case!n.minus&&n.dot:l=function(e){return Number.isFinite(e)&&!Number.isNaN(e)&&e>=0&&Math.abs(Math.round(e))<t.range};break;case n.minus&&!n.dot:l=function(e){return Number.isFinite(e)&&!Number.isNaN(e)&&e%1===0&&Math.abs(Math.round(e))<t.range};break;default:l=function(e){return Number.isFinite(e)&&!Number.isNaN(e)&&Math.abs(Math.round(e))<t.range}}for(;!l(u);)o=n._genExpression(),n.bracket&&(o=n._insertBracket(o)),u=Object(ze.a)(o);u=n.dot?u.toFixed(n.dotRange):u.toString(),a.push({exp:o,ans:u})}s(a)}catch(j){c(j)}}))}}]),e}();function Pe(e,t){var n=t-e,s=Math.random();return e+Math.round(s*n)}var He=function(e,t,n,s,c){for(var r=[],a=0;a<t;a++)r.push(e.shift());r=function(e){return e.map((function(e,t){return{index:t,exp:e.exp,ans:e.ans,userAns:"",status:null}}))}(r);for(var i=[],o=t;o<t+n;o++)i.push(e.shift());i=function(e,t){return e.map((function(e,n){var s={index:n,userAns:null,status:null};return 1===Pe(0,1)?(s.exp="".concat(e.exp," = ").concat(e.ans),s.ans=!0):(s.exp="".concat(e.exp," = ").concat((Number(e.ans)+Pe(1,50)).toFixed(t)),s.ans=!1),s}))}(i,c.dot?c.dotRange:0);for(var u=[],l=t+n;l<t+n+s;l++)u.push(e.shift());return{fillBlankQuestions:r,judgeQuestions:i,selectQuestions:u=function(e,t){return e.map((function(e,n){var s={index:n,exp:e.exp,userAns:null,status:null},c=Pe(0,2),r=[(Number(e.ans)+Pe(1,50)).toFixed(t),(Number(e.ans)+Pe(1,50)).toFixed(t),(Number(e.ans)+Pe(1,50)).toFixed(t)];return r[c]=e.ans,s.selections=r,s.ans=c,s}))}(u,c.dot?c.dotRange:0)}},Ge=(n(130),n(42)),Ye=n.n(Ge),Ve=(n(352),n(217)),Xe=n.n(Ve),We=n(530),Ze=n(531);var $e=function(e){var t=Object(d.b)(),n=e.questions,s=e.questionType,c="",a=null;return"fillBlank"===s?(c="\u586b\u7a7a",a=function(e){return Object(r.jsx)(Xe.a,{value:e.userAns,onChange:function(n){var s=n.target.value;t(function(e){return{type:J,value:e}}({index:e.index,answer:s}))}})}):"judge"===s?(c="\u5224\u65ad",a=function(e){return Object(r.jsx)(ke.a.Group,{className:"radio-group-judge",optionType:"button",options:[{label:Object(r.jsx)(We.a,{}),value:!0},{label:Object(r.jsx)(Ze.a,{}),value:!1}],value:e.userAns,onChange:function(n){var s=n.target.value;t(function(e){return{type:Q,value:e}}({index:e.index,answer:s}))}})}):(c="\u9009\u62e9",a=function(e){return Object(r.jsx)(ke.a.Group,{options:[{label:e.selections[0],value:0},{label:e.selections[1],value:1},{label:e.selections[2],value:2}],value:e.userAns,onChange:function(n){var s=n.target.value;t(function(e){return{type:q,value:e}}({index:e.index,answer:s}))}})}),Object(r.jsx)("div",{className:"test-section",children:Object(r.jsxs)(Ye.a,{dataSource:n,rowKey:function(e){return e.index},pagination:!1,size:"middle",tableLayout:"fixed",children:[Object(r.jsx)(Ye.a.Column,{title:"\u9898\u76ee",dataIndex:"exp",align:"right",width:"60%"},"exp"),Object(r.jsx)(Ye.a.Column,{title:c,render:a},"userAns")]})})},et=n(532),tt=n(533);var nt=function(e){var t,n=Object(d.b)(),s=Object(l.g)(),c=e.setLoading,a=Object(d.c)((function(e){return e.getIn(["test","history"]).toJS()}));return t=a[a.length-1]?a[a.length-1].historyID+1:0,Object(r.jsx)("div",{className:"test-ctrl",children:Object(r.jsxs)("div",{className:"crtl-wrapper",children:[Object(r.jsx)(Ce.a,{placement:"bottom",title:"\u786e\u5b9a\u8981\u91cd\u65b0\u751f\u6210\u9898\u76ee\u5417",onConfirm:function(){c(!0),n(_(null)),we.a.success("\u5df2\u91cd\u65b0\u751f\u6210")},children:Object(r.jsx)(X.a,{size:"large",icon:Object(r.jsx)(et.a,{}),danger:!0})}),Object(r.jsx)(Ce.a,{placement:"bottom",title:"\u786e\u5b9a\u8981\u63d0\u4ea4\u7b54\u6848\u5417",onConfirm:function(){n({type:D}),we.a.success("\u63d0\u4ea4\u6210\u529f"),s.push("/app/history/".concat(t))},children:Object(r.jsx)(X.a,{type:"primary",size:"large",icon:Object(r.jsx)(tt.a,{})})})]})})},st=new Ke;var ct=function(){var e=Object(d.b)(),t=Object(d.c)((function(e){return e.getIn(["start","questionTypes"]).toJS()})),n=t.fillBlank,s=t.judge,c=t.select,i=Object(d.c)((function(e){return e.getIn(["start","questionSettings"]).toJS()})),o=Object(d.c)((function(e){return e.get("test").toJS()})),u=o.fillBlankQuestions,l=o.judgeQuestions,j=o.selectQuestions,h=!(u.length>0||l.length>0||j.length>0),b=Object(a.useState)(!0),O=Object(Me.a)(b,2),x=O[0],p=O[1];return Object(a.useEffect)((function(){h?Object(Le.a)(Be.a.mark((function t(){var r,a;return Be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,st.getExpressions(n+s+c,i);case 2:r=t.sent,a=He(r,n,s,c,i),setTimeout((function(){e(_(a)),p(!1)}),500);case 5:case"end":return t.stop()}}),t)})))():p(!1)}),[e,n,s,i,h,c]),Object(r.jsxs)("div",{className:"test",children:[Object(r.jsx)(Re.a,{spinning:x,children:Object(r.jsxs)("div",{className:"test-wrapper",children:[u.length>0&&Object(r.jsx)($e,{questions:u,questionType:"fillBlank"}),l.length>0&&Object(r.jsx)($e,{questions:l,questionType:"judge"}),j.length>0&&Object(r.jsx)($e,{questions:j,questionType:"select"})]})}),Object(r.jsx)(nt,{setLoading:p})]})},rt=n(534),at=n(535),it=n(536),ot=n(537),ut=(n(513),new(function(){function e(){Object(v.a)(this,e)}return Object(g.a)(e,[{key:"save",value:function(e){var t;try{t=JSON.stringify(e);var n=new Blob([t]),s=document.createElement("a");s.href=URL.createObjectURL(n),s.download="".concat(M().toJSON().replace(/:/g,"_"),".json"),s.style.display="none",document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(c){console.error(c)}}},{key:"load",value:function(){var e=Object(Le.a)(Be.a.mark((function e(){return Be.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,t){var n=document.createElement("input");n.type="file",n.accept="application/json",n.style.display="none",n.addEventListener("change",(function(){if(n.files.length>0){var s=n.files[0];if(s.type.includes("json")){var c=new FileReader;c.onload=function(n){var s=n.target.result;try{var c=JSON.parse(s);e(c)}catch(n){t(n)}},c.readAsText(s)}else t(new Error("wrong file MIME type"))}else t(new Error("no file selected"))})),n.click()})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}()));var lt=function(){var e=Object(d.b)(),t=Object(l.i)(),n=Object(d.c)((function(e){return e.getIn(["test","history"]).toJS()}));return Object(r.jsxs)("div",{className:"history-index",children:[Object(r.jsx)("div",{className:"history-wrapper",children:Object(r.jsxs)(Ye.a,{dataSource:n,rowKey:function(e){return e.historyID},pagination:!1,size:"small",tableLayout:"fixed",children:[Object(r.jsx)(Ye.a.Column,{title:"ID",dataIndex:"historyID",align:"center",width:"15%"},"historyID"),Object(r.jsx)(Ye.a.Column,{title:"\u65e5\u671f/\u65f6\u95f4",align:"center",render:function(e){return M(e.date).format("YYYY-MM-DD HH:mm")}},"date"),Object(r.jsx)(Ye.a.Column,{title:"\u6b63\u786e\u7387",dataIndex:"correctRate",align:"center",width:"20%"},"correctRate"),Object(r.jsx)(Ye.a.Column,{title:"\u63a7\u5236",align:"center",render:function(n){return Object(r.jsxs)(Y.a,{children:[Object(r.jsx)(u.b,{to:"".concat(t.path,"/").concat(n.historyID),component:X.a,type:"primary",icon:Object(r.jsx)(rt.a,{}),children:"\u8be6\u60c5"}),Object(r.jsx)(Ce.a,{placement:"bottom",title:"\u786e\u5b9a\u8981\u5220\u9664\u672c\u6761\u8bb0\u5f55\u5417",onConfirm:function(){e(A(n.historyID)),we.a.success("\u5df2\u5220\u9664\u672c\u6761\u8bb0\u5f55")},children:Object(r.jsx)(X.a,{danger:!0,icon:Object(r.jsx)(at.a,{}),children:"\u5220\u9664"})})]})}},"control")]})}),Object(r.jsx)("div",{className:"history-ctrl",children:Object(r.jsxs)("div",{className:"crtl-wrapper",children:[Object(r.jsx)(X.a,{size:"large",icon:Object(r.jsx)(it.a,{}),onClick:Object(Le.a)(Be.a.mark((function t(){var n;return Be.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ut.load();case 2:n=t.sent,e({type:B,value:n});case 4:case"end":return t.stop()}}),t)})))}),Object(r.jsx)(X.a,{type:"primary",size:"large",icon:Object(r.jsx)(ot.a,{}),onClick:function(){return ut.save(n)}})]})})]})},jt=(n(514),n(538));var dt=function(e){var t=Object(d.b)(),n=e.historyID,s=Object(l.g)();return Object(r.jsx)("div",{className:"history-ctrl",children:Object(r.jsxs)("div",{className:"crtl-wrapper",children:[Object(r.jsx)(Ce.a,{placement:"bottom",title:"\u786e\u5b9a\u8981\u5220\u9664\u672c\u6761\u8bb0\u5f55\u5417",onConfirm:function(){t(A(n)),s.push("/app/history"),we.a.success("\u5df2\u5220\u9664\u672c\u6761\u8bb0\u5f55")},children:Object(r.jsx)(X.a,{size:"large",icon:Object(r.jsx)(at.a,{}),danger:!0})}),Object(r.jsx)(X.a,{type:"primary",size:"large",icon:Object(r.jsx)(jt.a,{})})]})})},ht=n(539),bt=n(540),Ot=function(e){return null===e||void 0===e?"":!1===e?Object(r.jsx)(Ze.a,{}):Object(r.jsx)(We.a,{})};var xt=function(e){var t=e.questions,n=e.questionType,s="",c=null,a=null;return"fillBlank"===n?(s="\u586b\u7a7a\u9898\u76ee",c="ans",a="userAns"):"judge"===n?(s="\u5224\u65ad\u9898\u76ee",c=function(e){return Ot(e.ans)},a=function(e){return Ot(e.userAns)}):(s="\u9009\u62e9\u9898\u76ee",c=function(e){return e.selections[e.ans]},a=function(e){return e.selections[e.userAns]}),Object(r.jsxs)(Ye.a,{dataSource:t,rowKey:function(e){return e.index},pagination:!1,size:"small",tableLayout:"fixed",children:[Object(r.jsx)(Ye.a.Column,{title:s,dataIndex:"exp",align:"center",width:"50%"},"exp"),Object(r.jsx)(Ye.a.Column,{title:"\u6b63\u786e\u7b54\u6848",align:"center",dataIndex:"string"===typeof c?c:null,render:"function"===typeof c?c:null},"ans"),Object(r.jsx)(Ye.a.Column,{title:"\u4f60\u7684\u7b54\u6848",align:"center",dataIndex:"string"===typeof a?a:null,render:"function"===typeof a?a:null},"userAns"),Object(r.jsx)(Ye.a.Column,{title:"\u72b6\u6001",align:"center",render:function(e){return e.status?Object(r.jsx)(ht.a,{twoToneColor:"#52c41a"}):Object(r.jsx)(bt.a,{twoToneColor:"#ff7875"})},width:"10%"},"status")]})};var pt=function(){var e,t=Object(l.h)().historyID;Object(d.c)((function(e){return e.getIn(["test","history"]).toJS()})).forEach((function(n){n.historyID===+t&&(e=n)}));var n=[],s=[],c=[];return e&&(n=e.historyQuestions.fillBlankQuestions,s=e.historyQuestions.judgeQuestions,c=e.historyQuestions.selectQuestions),Object(r.jsxs)("div",{className:"history",children:[Object(r.jsxs)("div",{className:"history-wrapper",children:[n.length>0&&Object(r.jsx)(xt,{questions:n,questionType:"fillBlank"}),s.length>0&&Object(r.jsx)(xt,{questions:s,questionType:"judge"}),c.length>0&&Object(r.jsx)(xt,{questions:c,questionType:"select"})]}),Object(r.jsx)(dt,{historyID:+t})]})};n(515);var ft=function(){return Object(r.jsxs)("div",{className:"about",children:[Object(r.jsx)("h2",{children:"\u56db\u5219\u8fd0\u7b97\u81ea\u6d4b\u7cfb\u7edf"}),Object(r.jsx)("p",{children:"\u9879\u76ee\u7531 Create React App \u521b\u5efa\u3002"}),Object(r.jsx)("h3",{children:"\u9879\u76ee\u65e5\u7a0b"}),Object(r.jsx)("p",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"2020-10-26: \u57fa\u7840\u67b6\u6784/\u4e3b\u9875\u8bbe\u8ba1/\u5b58\u50a8\u67b6\u6784/\u9898\u76ee\u751f\u6210\u8bbe\u7f6e"}),Object(r.jsx)("li",{children:"2020-10-27: \u9898\u76ee\u751f\u6210\u8bbe\u7f6e/\u8def\u7531\u8bbe\u7f6e/\u6d4b\u8bd5\u5185\u5bb9\u9875\u9762/\u8868\u8fbe\u5f0f\u751f\u6210\u5668"}),Object(r.jsx)("li",{children:"2020-10-28: \u7b54\u6848\u68c0\u67e5\u5668/\u5386\u53f2\u9875\u9762\u6837\u5f0f/\u5b58\u50a8\u67b6\u6784\u4fee\u6539"}),Object(r.jsx)("li",{children:"2020-10-29: \u5386\u53f2\u9875\u9762\u529f\u80fd/\u7528\u6237\u4f53\u9a8c\u4f18\u5316/\u9519\u8bef\u4fee\u590d/\u56fe\u6807\u4f18\u5316"})]})}),Object(r.jsx)("h3",{children:"\u5f00\u6e90\u4f9d\u8d56"}),Object(r.jsx)("p",{children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"\u57fa\u7840\u6846\u67b6: React/React Router"}),Object(r.jsx)("li",{children:"\u6570\u636e\u5b58\u50a8: Redux/Immutable.js"}),Object(r.jsx)("li",{children:"\u6837\u5f0f: normalize.css/Ant Design/Sass"}),Object(r.jsx)("li",{children:"\u5176\u4ed6: Math.js/dayjs/craco/cross-env"})]})})]})},mt=Object(l.j)((function(e){var t=e.history,n=Object(l.i)(),s=[{key:"start",icon:Object(r.jsx)(ae.a,{}),text:"\u5f00\u59cb"},{key:"test",icon:Object(r.jsx)(ie.a,{}),text:"\u6d4b\u8bd5"},{key:"history",icon:Object(r.jsx)(oe.a,{}),text:"\u5386\u53f2\u8bb0\u5f55"},{key:"about",icon:Object(r.jsx)(ue.a,{}),text:"\u5173\u4e8e"}];return Object(r.jsxs)("div",{className:"app",children:[Object(r.jsx)(re.a,{className:"app-nav",mode:"horizontal",selectedKeys:[t.location.pathname],children:s.map((function(e){return Object(r.jsx)(re.a.Item,{children:Object(r.jsxs)(u.b,{to:"".concat(n.path,"/").concat(e.key),children:[e.icon,Object(r.jsx)("span",{children:e.text})]})},"".concat(n.path,"/").concat(e.key))}))}),Object(r.jsx)("div",{className:"app-content",children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{path:"".concat(n.path,"/start"),component:qe}),Object(r.jsx)(l.b,{path:"".concat(n.path,"/test"),component:ct}),Object(r.jsx)(l.b,{path:"".concat(n.path,"/history/:historyID"),component:pt}),Object(r.jsx)(l.b,{path:"".concat(n.path,"/history"),component:lt}),Object(r.jsx)(l.b,{path:"".concat(n.path,"/about"),component:ft}),Object(r.jsx)(l.a,{to:"/"})]})}),Object(r.jsx)(ne,{divider:!0})]})}));o.a.render(Object(r.jsx)(d.a,{store:H,children:Object(r.jsx)(c.a,{autoInsertSpaceInButton:!1,locale:j.a,children:Object(r.jsx)(u.a,{children:Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{path:"/app",component:mt}),Object(r.jsx)(l.b,{exact:!0,path:"/",component:se}),Object(r.jsx)(l.a,{to:"/"})]})})})}),document.getElementById("root"))}},[[517,1,2]]]);
//# sourceMappingURL=main.633a0c38.chunk.js.map