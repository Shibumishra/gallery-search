(this.webpackJsonptravle=this.webpackJsonptravle||[]).push([[0],{57:function(e,t,c){},58:function(e,t,c){},88:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(18),r=c.n(a),s=(c(57),c(58),c(50)),o=c(4),i=c(25),u=c(26),h=c(30),l=c(29),j=c(2),p=function(e){return Object(j.jsx)("li",{className:"img-wrap",children:Object(j.jsx)("img",{src:e.url,alt:""})})},b=function(e){var t,c=e.data;return t=c.length?c.map((function(e){var t=e.id,c="https://farm".concat(e.farm,".staticflickr.com/").concat(e.server,"/").concat(e.id,"_").concat(e.secret,".jpg");return Object(j.jsx)(p,{className:"size",url:"".concat(c)},t)})):Object(j.jsx)("h1",{children:"page Not Found.."}),Object(j.jsx)("ul",{children:t})},d=c(44),f=c.n(d),m=c(104),O=function(){return Object(j.jsx)("h1",{className:"loading",children:Object(j.jsx)(m.a,{color:"secondary"})})},x=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(e){var n;return Object(i.a)(this,c),(n=t.call(this,e)).performSearch=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Ice Castle";f.a.get("https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=".concat(n.state.apiKey,"&text=").concat(e,"&per_page=24&page=1&format=json&nojsoncallback=true")).then((function(t){n.setState({loading:!0}),setTimeout((function(){n.setState({query:e,imgs:t.data.photos.photo,loading:!1})}),150)})).catch((function(e){console.log("Error fetching and parsing data",e)}))},n.state={apiKey:"e38f1bc56d9486ca37e84667b7a98ba8",loading:!0,imgs:[],query:n.props.query},n}return Object(u.a)(c,[{key:"componentWillReceiveProps",value:function(e){e.query?this.performSearch(e.query):this.performSearch(e.match.params.query)}},{key:"componentWillMount",value:function(){this.performSearch()}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"photo-container",children:this.state.loading?Object(j.jsx)(O,{}):Object(j.jsx)(b,{data:this.state.imgs})})}}]),c}(n.Component),g=c(49),v=c.n(g),y=c(105),k=function(e){Object(h.a)(c,e);var t=Object(l.a)(c);function c(){var e;Object(i.a)(this,c);for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).handleSubmit=function(t){t.preventDefault();var c=e.query.value;t.currentTarget.reset(),e.props.props.history.push({pathname:"/search/".concat(c)})},e}return Object(u.a)(c,[{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{className:"search-form",onSubmit:this.handleSubmit,children:[Object(j.jsx)("input",{type:"search",name:"search",placeholder:"Search....",ref:function(t){return e.query=t},required:!0}),Object(j.jsx)(y.a,{type:"submit",className:"search-button",variant:"contained",color:"secondary",children:Object(j.jsx)(v.a,{})})]})})}}]),c}(n.Component),S=function(e){return Object(j.jsx)("header",{children:e.location.pathname.startsWith("/search")?Object(j.jsx)(k,{props:e,apiKey:"e38f1bc56d9486ca37e84667b7a98ba8"}):Object(j.jsx)("br",{})})},q=function(){return Object(j.jsx)(s.a,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)(o.b,{component:S}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/",render:function(){return Object(j.jsx)(o.a,{to:"/search"})}}),Object(j.jsx)(o.b,{exact:!0,path:"/search",component:x}),Object(j.jsx)(o.b,{path:"/search/:query",component:x})]})]})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,106)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))};r.a.render(Object(j.jsx)(q,{}),document.getElementById("root")),N()}},[[88,1,2]]]);
//# sourceMappingURL=main.e760a0df.chunk.js.map