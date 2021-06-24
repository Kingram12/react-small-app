(this["webpackJsonpreact-small"]=this["webpackJsonpreact-small"]||[]).push([[0],{11:function(e,t,c){e.exports={header:"MainNavigation_header__2ea7g",logo:"MainNavigation_logo__eLv-D",active:"MainNavigation_active__3uryp",badge:"MainNavigation_badge__2uUnQ"}},18:function(e,t,c){e.exports={item:"MeetupItem_item__1RFTH",image:"MeetupItem_image__ucfPM",content:"MeetupItem_content__2oq3n",actions:"MeetupItem_actions__2mp9h"}},19:function(e,t,c){e.exports={card:"Card_card__1Z8NV"}},20:function(e,t,c){e.exports={list:"MeetupList_list__2lTQy"}},21:function(e,t,c){e.exports={form:"NewMeetupForm_form__3udD7",control:"NewMeetupForm_control__ZShny",actions:"NewMeetupForm_actions__a8RHl"}},23:function(e,t,c){e.exports={main:"Layout_main__2sP8n"}},29:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(17),r=c.n(i),s=c(7),a=(c(29),c(2)),o=c(24),j=c(10),d=c(18),l=c.n(d),u=c(19),b=c.n(u),h=c(0),O=b.a;var x=function(e){return Object(h.jsx)("div",{className:O.card,children:e.children})},v=Object(n.createContext)({favorites:[],totalFavorites:0,addFavorite:function(e){},removeFavorite:function(e){},itemIsFavorite:function(e){}});function m(e){var t=e.children,c=Object(n.useState)([]),i=Object(j.a)(c,2),r=i[0],s=i[1];var a={favorites:r,totalFavorites:r.length,addFavorite:function(e){s((function(t){return t.concat(e)}))},removeFavorite:function(e){s((function(t){return t.filter((function(t){return t.id!==e}))}))},itemIsFavorite:function(e){return r.some((function(t){return t.id===e}))}};return Object(h.jsx)(v.Provider,{value:a,children:t})}var p=v,f=l.a;var _=function(e){var t=e.image,c=e.title,i=e.address,r=e.description,s=e.id,a=Object(n.useContext)(p),o=a.itemIsFavorite(s);return Object(h.jsx)("li",{className:f.item,children:Object(h.jsxs)(x,{children:[Object(h.jsx)("div",{className:f.image,children:Object(h.jsx)("img",{src:t,alt:c})}),Object(h.jsxs)("div",{className:f.content,children:[Object(h.jsx)("h3",{children:c}),Object(h.jsx)("address",{children:i}),Object(h.jsx)("p",{children:r})]}),Object(h.jsx)("div",{className:f.actions,children:Object(h.jsx)("button",{onClick:function(){o?a.removeFavorite(s):a.addFavorite({id:s,title:c,description:r,image:t,address:i})},children:o?"Remove from Favorites":"Add to Favorites"})})]})})},g=c(20),N=c.n(g).a;var F=function(e){var t=e.meetups;return Object(h.jsx)("ul",{className:N.list,children:t.map((function(e){return Object(h.jsx)(_,{id:e.id,image:e.image,title:e.title,address:e.address,description:e.description},e.id)}))})};var M=function(){var e=Object(n.useState)(!0),t=Object(j.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)([]),s=Object(j.a)(r,2),a=s[0],d=s[1];return Object(n.useEffect)((function(){i(!0),fetch("https://react-app1-95024-default-rtdb.firebaseio.com/meetups.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var c in e){var n=Object(o.a)({id:c},e[c]);t.push(n)}i(!1),d(t)}))}),[]),c?Object(h.jsx)("section",{children:Object(h.jsx)("p",{children:"Loading..."})}):Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"All Meetups"}),Object(h.jsx)(F,{meetups:a})]})},y=c(21),w=c.n(y).a;var A=function(e){var t=e.onAddMeetup,c=Object(n.useRef)(),i=Object(n.useRef)(),r=Object(n.useRef)(),s=Object(n.useRef)();return Object(h.jsx)(x,{children:Object(h.jsxs)("form",{className:w.form,onSubmit:function(e){e.preventDefault();var n=c.current.value,a=i.current.value,o=r.current.value,j=s.current.value;t({title:n,image:a,address:o,description:j})},children:[Object(h.jsxs)("div",{className:w.control,children:[Object(h.jsx)("label",{htmlFor:"title",children:"Meetup Title"}),Object(h.jsx)("input",{type:"text",required:!0,id:"title",ref:c})]}),Object(h.jsxs)("div",{className:w.control,children:[Object(h.jsx)("label",{htmlFor:"image",children:"Meetup Image"}),Object(h.jsx)("input",{type:"url",required:!0,id:"image",ref:i})]}),Object(h.jsxs)("div",{className:w.control,children:[Object(h.jsx)("label",{htmlFor:"address",children:"Address"}),Object(h.jsx)("input",{type:"text",required:!0,id:"address",ref:r})]}),Object(h.jsxs)("div",{className:w.control,children:[Object(h.jsx)("label",{htmlFor:"description",children:"Description"}),Object(h.jsx)("textarea",{id:"description",required:!0,rows:"5",ref:s})]}),Object(h.jsx)("div",{className:w.actions,children:Object(h.jsx)("button",{children:"Add Meetup"})})]})})};var I=function(){var e=Object(a.f)();return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"Add New Meetup"}),Object(h.jsx)(A,{onAddMeetup:function(t){fetch("https://react-app1-95024-default-rtdb.firebaseio.com/meetups.json",{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}}).then((function(){})).then((function(){e.replace("/")}))}})]})};var R=function(){var e,t=Object(n.useContext)(p);return e=0===t.totalFavorites?Object(h.jsx)("p",{children:"You have no favorites yet. Start adding some."}):Object(h.jsx)(F,{meetups:t.favorites}),Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:"My Favorites"}),e]})},S=c(23),C=c.n(S),q=c(11),T=c.n(q);var D=function(){var e=Object(n.useContext)(p);return Object(h.jsxs)("header",{className:T.a.header,children:[Object(h.jsx)("div",{className:T.a.logo,children:"React Meetups"}),Object(h.jsx)("nav",{children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/",children:"All Meetups"})}),Object(h.jsx)("li",{children:Object(h.jsx)(s.b,{to:"/new-meetup",children:"Add New Meetup"})}),Object(h.jsx)("li",{children:Object(h.jsxs)(s.b,{to:"/favorites",children:["My Favorites",Object(h.jsx)("span",{className:T.a.badge,children:e.totalFavorites})]})})]})})]})},L=C.a;var P=function(e){var t=e.children;return Object(h.jsxs)("div",{children:[Object(h.jsx)(D,{}),Object(h.jsx)("main",{className:L.main,children:t})]})};var k=function(){return Object(h.jsx)(P,{children:Object(h.jsxs)(a.c,{children:[Object(h.jsx)(a.a,{path:"/",exact:!0,children:Object(h.jsx)(M,{})}),Object(h.jsx)(a.a,{path:"/new-meetup",children:Object(h.jsx)(I,{})}),Object(h.jsx)(a.a,{path:"/favorites",children:Object(h.jsx)(R,{})})]})})};r.a.render(Object(h.jsx)(m,{children:Object(h.jsx)(s.a,{children:Object(h.jsx)(k,{})})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.7148ae1b.chunk.js.map