(this.webpackJsonpemployeeapp=this.webpackJsonpemployeeapp||[]).push([[0],{43:function(t,e,n){},45:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n(2),a=n.n(r),s=n(13),i=n.n(s),o=n(19),l=n(17),j=n(14),u=n(15),d=n(3),h=n(20),b=n(18),O=n(16),m=n.n(O),p=function(){return m.a.get("https://randomuser.me/api/?results=8&nat=us")},x=function(t){var e=t.name,n=t.location,r=t.email,a=t.phone,s=t.id;t.picture;return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:e.first}),Object(c.jsx)("td",{children:e.last}),Object(c.jsx)("td",{children:n.city}),Object(c.jsx)("td",{children:r}),Object(c.jsx)("td",{children:a}),Object(c.jsx)("td",{children:s.value})]})};var f=function(t){return Object(c.jsx)("form",{children:Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(c.jsx)("input",{onChange:t.handleInputChange,value:t.value,name:"search",type:"text",className:"form-control",placeholder:"Enter Employee Last Name",id:"search"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:t.handleFormSubmit,className:"btn btn-primary",children:"Search"})]})})},y=(n(43),function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var c;return Object(j.a)(this,n),(c=e.call(this,t)).compareBy=function(t){return function(e,n){return e[t]<n[t]?-1:e[t]>n[t]?1:0}},c.sortBy=function(t){var e=Object(l.a)(c.state.data);e.sort(c.compareBy(t)),c.setState({data:e})},c.state={data:[]},c.compareBy.bind(Object(d.a)(c)),c.sortBy.bind(Object(d.a)(c)),c}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;p().then((function(e){console.log(e),t.setState({data:e.data.results}),console.log(t.state)}))}},{key:"render",value:function(){var t=this;console.log(this.state.data);var e=this.state.data.map((function(t){return Object(c.jsx)(x,Object(o.a)({},t))}));return Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{className:"tableHeader",children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{onClick:function(){return t.sortBy("first")},children:"First Name"}),Object(c.jsx)("th",{onClick:function(){return t.sortBy("name.last")},children:"Last Name"}),Object(c.jsx)("th",{onClick:function(){return t.sortBy("location")},children:"City"}),Object(c.jsx)("th",{onClick:function(){return t.sortBy("email")},children:"Email"}),Object(c.jsx)("th",{onClick:function(){return t.sortBy("phone")},children:"Phone"}),Object(c.jsx)("th",{onClick:function(){return t.sortBy("id")},children:"ID"})]})}),Object(c.jsx)("tbody",{children:e})]})}}]),n}(a.a.Component));function v(){return Object(c.jsx)("div",{className:"pageHeader",children:"Employee Information"})}var B=function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{}),Object(c.jsx)(f,{}),Object(c.jsx)(y,{})]})};n(44);i.a.render(Object(c.jsx)(B,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.76eecbb1.chunk.js.map