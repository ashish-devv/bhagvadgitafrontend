(this["webpackJsonpbhagvad-gita-frontend"]=this["webpackJsonpbhagvad-gita-frontend"]||[]).push([[0],{70:function(A,e,t){},81:function(A,e,t){},95:function(A,e,t){"use strict";t.r(e);var s=t(0),a=t.n(s),c=t(25),n=t.n(c),i=(t(81),t(70),t(9)),r=t(10),d=t(13),l=t(12),h=t.p+"static/media/bhagavad-gita.e3a2b573.png",j=t(27),o=t(49),b=t(97),x=t(98),m=t(1),g=function(A){Object(d.a)(t,A);var e=Object(l.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(o.a,{collapseOnSelect:!0,expand:"lg",children:Object(m.jsxs)(b.a,{children:[Object(m.jsx)(o.a.Brand,{href:"#home",children:"Bhagavad Gita"}),Object(m.jsx)(o.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(o.a.Collapse,{id:"responsive-navbar-nav",children:Object(m.jsxs)(x.a,{className:"ms-auto",children:[Object(m.jsx)(j.b,{className:"nav-link active",to:"/",children:"Home"}),Object(m.jsx)(j.b,{className:"nav-link active",to:"/moreshlok",children:"More Shlok"}),Object(m.jsx)(j.b,{className:"nav-link active",to:"/about",children:"About"})]})})]})})})}}]),t}(s.Component),O=t(26),u=t.p+"static/media/524 [Converted].55c35221.svg",p=function(A){Object(d.a)(t,A);var e=Object(l.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(m.jsxs)("div",{className:"card mt-4 p-2 mb-4 border-danger","data-aos":"fade-left","data-aos-duration":2e3,children:[Object(m.jsx)("div",{className:"card-header text-center",children:this.props.t?"\u0936\u094d\u0932\u094b\u0915":"\u0906\u091c \u0915\u093e \u0936\u094d\u0932\u094b\u0915"}),Object(m.jsx)("div",{className:"card-body mt-4 pt-4",children:Object(m.jsx)("div",{className:"card-text",children:this.props.loading?Object(m.jsx)("p",{className:"text-center",children:Object(m.jsx)("i",{className:"fas fa-spinner fa-2x fa-spin"})}):Object(m.jsxs)("figure",{className:"text-center",children:[Object(m.jsx)("blockquote",{className:"blockquote",children:Object(m.jsx)("p",{className:"slok",children:Object(m.jsx)("b",{children:this.props.data.slok})})}),Object(m.jsxs)("blockquote",{className:"blockquote",children:[Object(m.jsx)("p",{className:"slokmeaning",children:this.props.data.tej.ht}),Object(m.jsx)("p",{className:"slokmeaning",children:this.props.data.gambir.et})]}),Object(m.jsxs)("figcaption",{className:"blockquote-footer mt-4 pt-4",children:["Bhagavad Gita \xa0",Object(m.jsxs)("cite",{title:"Source Title",children:["Chapter \xa0 ",this.props.data.chapter," ."," ",this.props.data.verse,Object(m.jsx)("hr",{}),Object(m.jsx)("button",{className:"btn btn-outline-success",children:Object(m.jsx)("i",{className:"fab fa-whatsapp-square fa-2x"})}),"\xa0",Object(m.jsx)("button",{className:"btn btn-outline-primary",children:Object(m.jsx)("i",{className:"fab fa-facebook-square fa-2x"})})]})]})]})})})]})}}]),t}(s.Component),v=function(A){Object(d.a)(t,A);var e=Object(l.a)(t);function t(A){var s;return Object(i.a)(this,t),(s=e.call(this,A)).state={loading:!0,data:[]},s.getShlok=s.getShlok.bind(Object(O.a)(s)),s}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getShlok()}},{key:"getShlok",value:function(){var A=this;this.setState({loading:!0}),fetch("https://bhagvadgita.herokuapp.com/gita").then((function(e){return e.ok||A.setState({loading:!1}),e.json()})).then((function(e){console.log(e),A.setState({data:e,loading:!1})})).catch((function(e){console.log(e),A.getShlok()}))}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-sm-6",children:Object(m.jsx)("img",{src:u,className:"img-fluid cardshadow",alt:"",height:"70%","data-aos":"fade-right","data-aos-duration":2e3})}),Object(m.jsxs)("div",{className:"col-sm-6",children:[Object(m.jsxs)("h1",{className:"display-1 text-center mt-4",children:[Object(m.jsx)("img",{src:h,alt:"",width:60,height:60}),"\u0936\u094d\u0930\u0940\u092e\u0926\u094d\u200d\u092d\u0917\u0935\u0926\u094d\u200d\u0917\u0940\u0924\u093e"]}),Object(m.jsx)(p,{data:this.state.data,loading:this.state.loading}),Object(m.jsx)("p",{className:"text-center mt-4 pt-4",style:{fontSize:"xx-large"},children:Object(m.jsxs)("button",{className:"btn btn-danger m-4 text-center",onClick:this.getShlok,children:[Object(m.jsx)("i",{className:"fas fa-sync fa-spin"})," Another Shlok"]})})]})]})})}}]),t}(s.Component),f=t(67),w=t.n(f),B=(t(92),t(8)),N=t.p+"static/media/Ashish.51d75a3f.jpeg",k=t.p+"static/media/node-js-1174925.7c2c17ab.png",H=t.p+"static/media/ExpressJS.6a3e055a.png",M=function(A){Object(d.a)(t,A);var e=Object(l.a)(t);function t(){return Object(i.a)(this,t),e.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-4",children:[Object(m.jsx)("h1",{className:"text-center",children:"Developed By \ud83d\udc47"}),Object(m.jsxs)("div",{className:"card border-dark",children:[Object(m.jsx)("img",{src:N,className:"card-img-top",alt:"..."}),Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)("h3",{className:"card-title",children:"Ashish "}),Object(m.jsxs)("p",{className:"card-text mt-3",children:[Object(m.jsxs)("a",{href:"https://www.linkedin.com/in/ashishkrshu",className:"btn btn-outline-primary",children:["LinkedIn ",Object(m.jsx)("i",{class:"fab fa-linkedin-in"})]}),"\xa0",Object(m.jsxs)("a",{href:"https://www.facebook.com/ashishkrfab/",className:"btn btn-outline-primary",children:["facebook ",Object(m.jsx)("i",{class:"fab fa-facebook-f"})]}),"\xa0",Object(m.jsxs)("a",{href:"https://github.com/ashish-devv/",className:"btn btn-outline-dark",children:["Github ",Object(m.jsx)("i",{class:"fab fa-github"})]})]})]})]})]}),Object(m.jsxs)("div",{className:"col-md-4",children:[Object(m.jsx)("h1",{className:"text-center",children:"Tech Used \ud83d\udc47"}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:k,className:"card-img-top",alt:"...",width:"10%",height:"10%"}),Object(m.jsx)("div",{className:"card-body text-center",children:"Node.js"})]}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:H,className:"card-img-top",alt:"...",width:"10%",height:"10%"}),Object(m.jsx)("div",{className:"card-body text-center",children:"Express"})]}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:"data:image/png;base64,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",className:"card-img-top",alt:"...",width:"10%",height:"10%"}),Object(m.jsx)("div",{className:"card-body text-center",children:"Mongo DB"})]}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:"data:image/png;base64,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",className:"card-img-top",alt:"...",width:"10%",height:"10%"}),Object(m.jsx)("div",{className:"card-body text-center",children:"Mongoose"})]}),Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("img",{src:"data:image/png;base64,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",className:"card-img-top",alt:"...",width:"10%",height:"10%"}),Object(m.jsx)("div",{className:"card-body text-center",children:"Heroku"})]})]})]})})}}]),t}(s.Component),D=t(7),Z=t(68),T=t(35),Y=t(43),G=t(69);var P=function(A){var e=Object(s.useState)(!1),t=Object(D.a)(e,2),a=t[0],c=t[1],n=function(){return c(!1)};return Object(m.jsxs)("div",{children:[Object(m.jsxs)(Y.a,{show:a,onHide:n,centered:!0,children:[Object(m.jsx)(Y.a.Header,{children:Object(m.jsxs)(Y.a.Title,{className:"text-center",children:["All Shlok From Chapter ",A.data.chapter_number]})}),Object(m.jsx)(Y.a.Body,{children:Object(m.jsx)(G.a,{children:function(A,e){console.log(A,e);for(var t=[],s=1;s<=A;s++)t.push(Object(m.jsx)(j.b,{to:"/shlok/".concat(e,"/").concat(s),children:Object(m.jsxs)(G.a.Item,{variant:"warning",className:"text-center",children:["Shlok-",s]},s)}));return t}(A.data.verses_count,A.data.chapter_number)})}),Object(m.jsxs)(Y.a.Footer,{children:[Object(m.jsx)(Z.a,{variant:"secondary",onClick:n,children:"Close"}),Object(m.jsx)(Z.a,{variant:"primary",onClick:n,children:"Save Changes"})]})]}),Object(m.jsx)("div",{className:"card border-warning",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsxs)("h5",{className:"card-title",children:[A.data.chapter_number,". ",A.data.name]}),Object(m.jsxs)("p",{className:"card-text",children:[A.data.meaning.en," / ",A.data.meaning.hi]}),Object(m.jsxs)("p",{className:"card-text",children:[Object(m.jsxs)(T.a,{children:[Object(m.jsxs)(T.a.Item,{eventKey:"0",children:[Object(m.jsx)(T.a.Header,{children:"Hindi Summary"}),Object(m.jsx)(T.a.Body,{children:Object(m.jsx)("b",{children:A.data.summary.hi})})]}),Object(m.jsxs)(T.a.Item,{eventKey:"1",children:[Object(m.jsx)(T.a.Header,{children:"English Summary"}),Object(m.jsx)(T.a.Body,{children:Object(m.jsx)("b",{children:A.data.summary.en})})]})]}),Object(m.jsx)("br",{})]}),Object(m.jsx)("p",{className:"card-text text-center",children:Object(m.jsx)("button",{className:"btn btn-outline-danger ",onClick:function(){return c(!0)},children:"Read Sholks"})})]})}),Object(m.jsx)("br",{})]})},E=function(A){Object(d.a)(t,A);var e=Object(l.a)(t);function t(A){var s;return Object(i.a)(this,t),(s=e.call(this,A)).state={loading:!0,data:[]},s.getallchapters=s.getallchapters.bind(Object(O.a)(s)),s}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getallchapters()}},{key:"getallchapters",value:function(){var A=this;fetch("https://bhagvadgita.herokuapp.com/gita/chapters").then((function(A){return A.json()})).then((function(e){console.log(e),A.setState({loading:!1,data:e})}),(function(e){A.setState({loading:!1})})).catch((function(e){console.log(e),A.getallchapters()}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-3"}),Object(m.jsxs)("div",{className:"col-md-9",children:[Object(m.jsx)("h3",{className:"display-4",children:"Chapters / \u0905\u0927\u094d\u092f\u093e\u092f "}),Object(m.jsx)("hr",{}),this.state.loading?Object(m.jsx)("div",{className:"text-center",children:Object(m.jsx)("div",{className:"spinner-border text-warning",role:"status",children:Object(m.jsx)("span",{className:"sr-only",children:"Loading..."})})}):Object(m.jsx)("div",{children:this.state.data.map((function(A,e){return Object(m.jsx)(P,{data:A},A.chapter_number)}))})]})]})}}]),t}(s.Component),y=t.p+"static/media/5571946.b68c9c12.svg",z=function(A){Object(d.a)(t,A);var e=Object(l.a)(t);function t(A){var s;return Object(i.a)(this,t),(s=e.call(this,A)).state={shlokchapters:A.match.params.chapter,shlokverse:A.match.params.verse,shlok:[],loading:!0},s.getshlok=s.getshlok.bind(Object(O.a)(s)),s.nextshlok=s.nextshlok.bind(Object(O.a)(s)),s.previousshlok=s.previousshlok.bind(Object(O.a)(s)),s}return Object(r.a)(t,[{key:"componentDidMount",value:function(){this.getshlok()}},{key:"nextshlok",value:function(){this.setState({loading:!0});var A=this.state.shlokchapters;console.log(A,this.state.shlokverse),this.state.shlokverse<[47,72,43,42,29,47,30,28,34,42,55,20,35,27,20,24,28,78][A-1]?this.setState({shlokverse:parseInt(this.state.shlokverse)+1}):this.setState({shlokchapters:parseInt(A)+1,shlokverse:1}),this.getshlok()}},{key:"previousshlok",value:function(){this.setState({loading:!0});var A=this.state.shlokchapters,e=[47,72,43,42,29,47,30,28,34,42,55,20,35,27,20,24,28,78];console.log(A,this.state.shlokverse),this.state.shlokverse>e[A-1]?(this.setState({shlokverse:parseInt(this.state.shlokverse)-1}),this.getshlok()):(this.setState({shlokchapters:parseInt(A)-1,shlokverse:e[A-2]}),this.getshlok())}},{key:"getshlok",value:function(){var A=this;this.setState({loading:!0}),fetch("https://bhagvadgita.herokuapp.com/gita/".concat(this.state.shlokchapters,"/").concat(this.state.shlokverse)).then((function(e){return e.ok||A.setState({loading:!1}),e.json()})).then((function(e){console.log(e),A.setState({shlok:e,loading:!1})})).catch((function(e){console.error(e),A.getshlok()}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-3"}),Object(m.jsxs)("div",{className:"col-md-6",children:[Object(m.jsxs)("h3",{className:"h3 text-center",children:["\u0905\u0927\u094d\u092f\u093e\u092f\u0903",this.state.shlokchapters," \u0936\u094d\u0932\u094b\u0915:",this.state.shlokverse]}),Object(m.jsxs)("h3",{className:"h3 text-center",children:["Chapter:",this.state.shlokchapters," Verse:",this.state.shlokverse]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-6",children:Object(m.jsx)("button",{className:"btn btn-danger",onClick:this.previousshlok,children:Object(m.jsx)("i",{className:"far fa-hand-point-left"})})}),Object(m.jsx)("div",{className:"col-6 text-end",children:Object(m.jsx)("button",{className:"btn btn-danger",onClick:this.nextshlok,children:Object(m.jsx)("i",{className:"far fa-hand-point-right"})})})]}),Object(m.jsx)(p,{data:this.state.shlok,loading:this.state.loading,t:!0})]}),Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)("img",{src:y,alt:"bhagvad-gita"})})]})}}]),t}(s.Component);var C=function(){return Object(s.useEffect)((function(){w.a.init(),w.a.refresh()}),[]),Object(m.jsx)(j.a,{children:Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(g,{}),Object(m.jsxs)(B.c,{children:[Object(m.jsx)(B.a,{exact:!0,path:"/",component:v}),Object(m.jsx)(B.a,{exact:!0,path:"/about",component:M}),Object(m.jsx)(B.a,{exact:!0,path:"/moreshlok",component:E}),Object(m.jsx)(B.a,{exact:!0,path:"/shlok/:chapter/:verse",component:z})]})]})})};t(94);n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(C,{})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.6e35e778.chunk.js.map