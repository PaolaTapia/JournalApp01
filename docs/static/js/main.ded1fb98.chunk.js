(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{148:function(e,t,a){},149:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(2),s=a(27),r=a.n(s),i=a(12),o=a(18),l=a(17),u=a(7),j=a(25);a(66),a(69);j.a.initializeApp({apiKey:"AIzaSyAui4BunSA5KW3-F6xC8FA-STiOA6p-QLg",authDomain:"react-app-demos.firebaseapp.com",databaseURL:"https://react-app-demos.firebaseio.com",projectId:"react-app-demos",storageBucket:"react-app-demos.appspot.com",messagingSenderId:"658327330118",appId:"1:658327330118:web:c35bd775560210730a5947"});j.a.firestore();var d=new j.a.auth.GoogleAuthProvider,b=function(){return Object(n.jsxs)("div",{className:"notes__appbar",children:[Object(n.jsx)("span",{children:"28 de agostos de 2020"}),Object(n.jsxs)("div",{children:[Object(n.jsx)("button",{className:"btn",children:"Picture"}),Object(n.jsx)("button",{className:"btn",children:"Save"})]})]})},p=function(){return Object(n.jsxs)("div",{className:"notes_main-content",children:[Object(n.jsx)(b,{}),Object(n.jsxs)("div",{className:"notes_content",children:[Object(n.jsx)("input",{type:"text",placeholder:"Some awesome title",className:"notes__title-input",autoComplete:"off"}),Object(n.jsx)("textarea",{placeholder:"What happened today",className:"notes_textarea"}),Object(n.jsx)("div",{className:"notes_image",children:Object(n.jsx)("img",{src:"https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067__340.png",alt:"paisaje"})})]})]})},m=a(37),h=a.n(m),O=a(54),x=a(38),g=a.n(x),f={login:"[auth] Login",logout:"[auth] Logout",uiSetError:"[UI] set Error",uiRemoveError:"[UI] Remove Error",uiStartLoading:"[UI] Start loading",uiFinishLoading:"[UI] Finish loading"},v=function(e){return{type:f.uiSetError,payload:e}},_=function(){return{type:f.uiFinishLoading}},N=function(e,t){return function(a){a({type:f.uiStartLoading}),j.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;a(y(t.uid,t.displayName)),a(_())})).catch((function(e){console.log(e),a(_()),g.a.fire("Error",e.message,"error")}))}},y=function(e,t){return{type:f.login,payload:{uid:e,displayName:t}}},w=function(){return{type:f.logout}},E=function(){return Object(n.jsxs)("div",{className:"journal__entry",children:[Object(n.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(https://image.freepik.com/vector-gratis/fondo-paisaje-arboles-aves_1048-1242.jpg)"}}),Object(n.jsxs)("div",{className:"journal__entry-body",children:[Object(n.jsx)("p",{className:"journal__entry-title",children:"Un nuevo d\xeda"}),Object(n.jsx)("p",{className:"journal__entry-content",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),Object(n.jsxs)("div",{className:"journal__entry-date-box",children:[Object(n.jsx)("span",{children:"Monday"}),Object(n.jsx)("h4",{children:"28"})]})]})},S=function(){return Object(n.jsx)("div",{className:"journal__entries",children:[1,2,3,4,5].map((function(e){return Object(n.jsx)(E,{},e)}))})},C=function(){var e=Object(i.b)();return Object(n.jsxs)("aside",{className:"journal__sidebar",children:[Object(n.jsxs)("div",{className:"journal_sidebar-navbar",children:[Object(n.jsxs)("h3",{className:"mt-5",children:[Object(n.jsx)("i",{className:"far fa-moon"}),Object(n.jsx)("span",{children:" Paola"})]}),Object(n.jsx)("button",{className:"btn",onClick:function(){e((function(e){j.a.auth().signOut(),e(w())}))},children:"Logout"})]}),Object(n.jsxs)("div",{className:"journal__new-entry",children:[Object(n.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(n.jsx)("p",{children:"New Entry"})]}),Object(n.jsx)(S,{})]})},L=function(){return Object(n.jsxs)("div",{className:"journal__main-content",children:[Object(n.jsx)(C,{}),Object(n.jsx)("main",{children:Object(n.jsx)(p,{})})]})},A=a(29),k=a(8),I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),a=Object(o.a)(t,2),n=a[0],s=a[1],r=function(){s(e)},i=function(e){var t=e.target;s(Object(k.a)(Object(k.a)({},n),{},Object(A.a)({},t.name,t.value)))};return[n,i,r]},P=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).loading,a=I({email:"mail@gmail.com",password:"123456"}),c=Object(o.a)(a,2),s=c[0],r=c[1],u=s.email,b=s.password;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{className:"auth_title",children:" Login "}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(N(u,b))},children:[Object(n.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:r}),Object(n.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",autoComplete:"off",value:b,onChange:r}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(n.jsx)("hr",{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Login with social networks"}),Object(n.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){j.a.auth().signInWithPopup(d).then((function(t){var a=t.user;e(y(a.uid,a.displayName))}))}))},children:[Object(n.jsx)("div",{className:"google-icon-wrapper",children:Object(n.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(n.jsx)("p",{className:"btn-text",children:Object(n.jsx)("b",{children:"Sign in with google"})})]}),Object(n.jsx)(l.b,{className:"link mt-5",to:"/auth/register",children:"Create new account"})]})]})]})},F=a(55),R=a.n(F),U=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.ui})).msgError;console.log(t);var a=I({name:"Paola",email:"mail@gmail.com",password:"123456",password2:"123456"}),c=Object(o.a)(a,2),s=c[0],r=c[1],u=s.name,d=s.email,b=s.password,p=s.password2,m=function(){return 0===u.trim().length?(e(v("Name is required")),!1):R.a.isEmail(d)?b!==p||b.length<5?(e(v("Password should be at least 6 character and match each other")),!1):(e({type:f.uiRemoveError}),!0):(e(v("Email is not valid")),!1)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:" Register "}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),m()&&e(function(e,t,a){return function(n){j.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:a});case 3:console.log(c),n(y(c.uid,c.displayName));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),g.a.fire("Error",e.message,"error")}))}}(d,b,u))},children:[t&&Object(n.jsx)("div",{className:"auth__alert-error",children:t}),Object(n.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:u,onChange:r}),Object(n.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:d,onChange:r}),Object(n.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",autoComplete:"off",value:b,onChange:r}),Object(n.jsx)("input",{type:"password",placeholder:"Confirm",name:"password2",className:"auth__input",autoComplete:"off",value:p,onChange:r}),Object(n.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:" Register"}),Object(n.jsx)("hr",{}),Object(n.jsx)("div",{children:Object(n.jsx)(l.b,{className:"link mt-5",to:"/auth/login",children:" Already registered?"})})]})]})},D=function(){return Object(n.jsx)("div",{className:"auth__main",children:Object(n.jsx)("div",{className:"auth__box-container",children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(u.b,{exact:!0,path:"/auth/login",component:P}),Object(n.jsx)(u.b,{exact:!0,path:"/auth/register",component:U}),Object(n.jsx)(u.a,{to:"/auth/register"})]})})})},W=a(30),z=function(e){var t=e.isAuthenticated,a=e.component,c=Object(W.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(u.b,Object(k.a)(Object(k.a)({},c),{},{component:function(e){return t?Object(n.jsx)(a,Object(k.a)({},e)):Object(n.jsx)(u.a,{to:"/auth/login"})}}))},B=function(e){var t=e.isAuthenticated,a=e.component,c=Object(W.a)(e,["isAuthenticated","component"]);return Object(n.jsx)(u.b,Object(k.a)(Object(k.a)({},c),{},{component:function(e){return t?Object(n.jsx)(u.a,{to:"/"}):Object(n.jsx)(a,Object(k.a)({},e))}}))},G=function(){var e=Object(i.b)(),t=Object(c.useState)(!0),a=Object(o.a)(t,2),s=a[0],r=a[1],d=Object(c.useState)(!1),b=Object(o.a)(d,2),p=b[0],m=b[1];return Object(c.useEffect)((function(){j.a.auth().onAuthStateChanged((function(t){(null===t||void 0===t?void 0:t.uid)?(e(y(t.uid,t.displayName)),m(!0)):m(!1),r(!1)}))}),[e,r,m]),s?Object(n.jsx)("h1",{children:"Espere..."}):Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{children:Object(n.jsxs)(u.d,{children:[Object(n.jsx)(B,{path:"/auth",component:D,isAuthenticated:p}),Object(n.jsx)(z,{exact:!0,path:"/",component:L,isAuthenticated:p}),Object(n.jsx)(u.a,{to:"/auth/login"})]})})})},T=a(19),J=a(56),K={loading:!1,msgError:null},M="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.d,X=Object(T.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.Login:return{uid:t.payload.uid,name:t.payload.displayName};case f.Logout:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.uiSetError:return Object(k.a)(Object(k.a)({},e),{},{msgError:t.payload});case f.uiRemoveError:return Object(k.a)(Object(k.a)({},e),{},{msgError:null});case f.uiStartLoading:return Object(k.a)(Object(k.a)({},e),{},{loading:!0});case f.uiFinishLoading:return Object(k.a)(Object(k.a)({},e),{},{loading:!1});default:return e}}}),q=Object(T.e)(X,M(Object(T.a)(J.a))),Q=function(){return Object(n.jsx)(i.a,{store:q,children:Object(n.jsx)(G,{})})};a(148);r.a.render(Object(n.jsx)(Q,{}),document.getElementById("root"))}},[[149,1,2]]]);
//# sourceMappingURL=main.ded1fb98.chunk.js.map