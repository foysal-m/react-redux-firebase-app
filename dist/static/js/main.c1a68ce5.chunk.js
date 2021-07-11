(this["webpackJsonpreact-redux-firebase-app"]=this["webpackJsonpreact-redux-firebase-app"]||[]).push([[0],{225:function(e,t,c){},413:function(e,t,c){"use strict";c.r(t);var r=c(10),n=c(3),a=c(93),s=c.n(a),i=c(16),l=(c(225),c(15)),o=c(12),j=c(34),d=c(54),b="CREATE_PROJECT",u="CREATE_PROJECT_FAILURE",h="LOGIN_SUCCESS",O="LOGIN_ERROR",p="SIGNOUT_SUCCESS",m="SIGNUP_SUCCESS",x="SIGNUP_ERROR",f=c(2);var g=Object(i.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((c=t,function(e,t,r){(0,r.getFirebase)().auth().signInWithEmailAndPassword(c.email,c.password).then((function(){e({type:h})})).catch((function(t){e({type:O,err:t})}))}));var c}}}))((function(e){var t=e.signIn,c=e.authError,a=e.auth,s=Object(n.useState)({email:"",password:""}),i=Object(d.a)(s,2),l=i[0],b=i[1],u=function(e){b(Object(r.a)(Object(r.a)({},l),{},Object(j.a)({},e.target.id,e.target.value)))};return a.uid?Object(f.jsx)(o.a,{to:"/"}):Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("form",{className:"white",onSubmit:function(e){e.preventDefault(),t(l)},children:[Object(f.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign In"}),Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{type:"email",id:"email",onChange:u})]}),Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{type:"password",id:"password",onChange:u})]}),Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Login"}),Object(f.jsx)("div",{className:"red-text center",children:c?Object(f.jsx)("p",{children:c}):null})]})]})})}));var N=Object(i.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,c,r){var n=r.getFirebase,a=r.getFirestore,s=n(),i=a();s.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:m})})).catch((function(e){t({type:x,err:e})}))}}(t))}}}))((function(e){var t=e.auth,c=e.signUp,a=e.authError,s=Object(n.useState)({firstName:"",lastName:"",email:"",password:""}),i=Object(d.a)(s,2),l=i[0],b=i[1],u=function(e){b(Object(r.a)(Object(r.a)({},l),{},Object(j.a)({},e.target.id,e.target.value)))};return t.uid?Object(f.jsx)(o.a,{to:"/"}):Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("form",{className:"white",onSubmit:function(e){e.preventDefault(),c(l)},children:[Object(f.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign Up"}),Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(f.jsx)("input",{type:"text",id:"firstName",onChange:u})]}),Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(f.jsx)("input",{type:"text",id:"lastName",onChange:u})]}),Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("label",{htmlFor:"email",children:"Email"}),Object(f.jsx)("input",{type:"email",id:"email",onChange:u})]}),Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("label",{htmlFor:"password",children:"Password"}),Object(f.jsx)("input",{type:"password",id:"password",onChange:u})]}),Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Sign up"}),Object(f.jsx)("div",{className:"red-text center",children:a?Object(f.jsx)("p",{children:a}):null})]})]})})})),v=c(53),y=c.n(v);var E=function(e){var t=e.notifications;return console.log(t&&t.map((function(e){return e.user}))),Object(f.jsx)("div",{className:"section",children:Object(f.jsx)("div",{className:"card z-depth-0",children:Object(f.jsxs)("div",{className:"card-content",children:[Object(f.jsx)("span",{className:"card-title",children:"Notifications"}),Object(f.jsx)("ul",{className:"notifications",children:t&&t.map((function(e){return Object(f.jsxs)("li",{children:[Object(f.jsxs)("span",{className:"pink-text",children:[e.user," "]}),Object(f.jsx)("span",{className:"pink-text",children:e.content}),Object(f.jsx)("div",{className:"grey-text note-date",children:y()(e.time.toDate()).fromNow()})]},e.id)}))})]})})})};var w=function(e){var t=e.project;return console.log("project",t.createAt),Object(f.jsx)("div",{className:"card z-depth-0 project-summary",children:Object(f.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(f.jsx)("span",{className:"card-title",children:t.title}),Object(f.jsxs)("p",{children:["Posted by ",t.authorFirstName," ",t.authorLastName]}),Object(f.jsx)("p",{className:"grey-text",children:y()(t.createAt.toDate()).calendar()})]})})};var F=function(e){var t=e.projects;return Object(f.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(f.jsx)(l.b,{to:"/project/"+e.id,children:Object(f.jsx)(w,{project:e})},e.id)}))})},S=c(25),C=c(30);var I=Object(C.c)(Object(i.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),null),Object(S.firestoreConnect)([{collection:"projects",orderBy:["createAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))((function(e){var t=e.projects,c=e.auth,r=e.notifications;return c.uid?Object(f.jsx)("div",{className:"dashboar container",children:Object(f.jsxs)("div",{className:"row",children:[Object(f.jsx)("div",{className:"col s12 m6",children:Object(f.jsx)(F,{projects:t})}),Object(f.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(f.jsx)(E,{notifications:r})})]})}):Object(f.jsx)(o.a,{to:"/signin"})}));var P=Object(i.b)((function(e){return{user:e.firebase.profile}}),(function(e){return{signOut:function(){return e((function(e,t,c){(0,c.getFirebase)().auth().signOut().then((function(){e({type:p})}))}))}}}))((function(e){var t=e.user,c=e.signOut;return console.log(t),Object(f.jsxs)("ul",{className:"right",children:[Object(f.jsx)("li",{children:Object(f.jsx)(l.c,{to:"/create",children:"New Project"})}),Object(f.jsx)("li",{children:Object(f.jsx)("a",{onClick:c,children:"Log Out"})}),Object(f.jsx)("li",{children:Object(f.jsx)(l.c,{to:"/",className:"btn btn-floating pink lighten-1",children:t.initials})})]})}));var R=function(){return Object(f.jsxs)("ul",{className:"right",children:[Object(f.jsx)("li",{children:Object(f.jsx)(l.c,{to:"/signup",children:"Signup"})}),Object(f.jsx)("li",{children:Object(f.jsx)(l.c,{to:"/signin",children:"Login"})})]})};var k=Object(i.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth.uid?Object(f.jsx)(P,{}):Object(f.jsx)(R,{});return Object(f.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(l.b,{to:"/",className:"brand-logo",children:"MarioPlan"}),t]})})}));var A=Object(i.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,c,n){n.getFirebase;var a=n.getFirestore,s=c().firebase.profile,i=c().firebase.auth.uid;a().collection("projects").add(Object(r.a)(Object(r.a)({},e),{},{authorFirstName:s.firstName,authorLastName:s.lastName,authorId:i,createAt:new Date})).then((function(){t({type:b,project:e})})).catch((function(e){t({type:u,err:e})}))}}(t))}}}))((function(e){var t=e.createProject,c=e.auth,a=e.history,s=Object(n.useState)({title:"",content:""}),i=Object(d.a)(s,2),l=i[0],b=i[1],u=function(e){b(Object(r.a)(Object(r.a)({},l),{},Object(j.a)({},e.target.id,e.target.value)))};return c.uid?Object(f.jsx)("div",{className:"container",children:Object(f.jsxs)("form",{className:"white",onSubmit:function(e){e.preventDefault(),t(l),a.push("/")},children:[Object(f.jsx)("h5",{className:"grey-text text-darken-3",children:"Create new project"}),Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("label",{htmlFor:"title",children:"Title"}),Object(f.jsx)("input",{type:"text",id:"title",onChange:u})]}),Object(f.jsxs)("div",{className:"input-field",children:[Object(f.jsx)("label",{htmlFor:"content",children:"Content"}),Object(f.jsx)("textarea",{type:"text",className:"materialize-textarea",id:"content",onChange:u})]}),Object(f.jsx)("div",{className:"input-field",children:Object(f.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Create"})})]})}):Object(f.jsx)(o.a,{to:"/signin"})}));var L=Object(C.c)(Object(i.b)((function(e,t){var c=t.match.params.id,r=e.firestore.data.projects;return{project:r?r[c]:null,auth:e.firebase.auth}}),null),Object(S.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?Object(f.jsx)("div",{className:"container section project-details",children:Object(f.jsxs)("div",{className:"card z-depth-0",children:[Object(f.jsxs)("div",{className:"card-content",children:[Object(f.jsx)("span",{className:"card-title",children:t.title}),Object(f.jsx)("p",{children:t.content})]}),Object(f.jsxs)("div",{className:"card-action-grey lighten-4 grey-text",children:[Object(f.jsxs)("div",{children:["Posted by ",t.authorFirstName," ",t.authoLastName]}),Object(f.jsxs)("div",{children:[" ",y()(t.createAt.toDate()).calendar()]})]})]})}):Object(f.jsx)("div",{className:"container center",children:"Loading project"}):Object(f.jsx)(o.a,{to:"/signin"})}));var U=function(){return Object(f.jsx)(l.a,{children:Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)(k,{}),Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{path:"/",exact:!0,component:I}),Object(f.jsx)(o.b,{path:"/project/:id",component:L}),Object(f.jsx)(o.b,{path:"/signin",component:g}),Object(f.jsx)(o.b,{path:"/signup",component:N}),Object(f.jsx)(o.b,{path:"/create",component:A})]})]})})},z={authError:null},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return console.log("login error"),Object(r.a)(Object(r.a)({},e),{},{authError:"Login failed"});case h:return console.log("login success"),Object(r.a)(Object(r.a)({},e),{},{authError:null});case p:return console.log("signout success"),e;case m:return console.log("signup success"),Object(r.a)(Object(r.a)({},e),{},{authError:null});case x:return Object(r.a)(Object(r.a)({},e),{},{authError:t.err.message});default:return e}},D={projects:[{id:"1",title:"help me find peach",content:"blab blal blall"},{id:"2",title:"egg hunt find peach",content:"blab blal blall"},{id:"3",title:"never find peach",content:"blab blal blall"}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return console.log("created project",t.project),e;case u:return console.log("createproject erro",t.err),e;default:return e}},J=c(43),B=Object(C.b)({auth:_,project:T,firestore:J.firestoreReducer,firebase:S.firebaseReducer}),G=c(216),W=c(55);c(407),c(408);W.a.initializeApp({apiKey:"AIzaSyBbLzIs_TR1JfccHomWI3xWdQVEJYOKm7I",authDomain:"marioplan-4c7f1.firebaseapp.com",projectId:"marioplan-4c7f1",storageBucket:"marioplan-4c7f1.appspot.com",messagingSenderId:"918416433058",appId:"1:918416433058:web:6c0116692df86adb64dcfb",measurementId:"G-6X98BT79SJ"}),W.a.firestore().settings({timestampsInSnapshots:!0});var K=W.a,H=Object(C.d)(B,Object(C.c)(Object(C.a)(G.a.withExtraArgument({getFirebase:S.getFirebase,getFirestore:J.getFirestore})),Object(J.reduxFirestore)(W.a,K))),M={firebase:c(217).a,config:{userProfile:"users",useFirestoreForProfile:!0},fbConfig:K,dispatch:H.dispatch,createFirestoreInstance:J.createFirestoreInstance};function Q(e){var t=e.children,c=Object(i.c)((function(e){return e.firebase.auth}));return Object(S.isLoaded)(c)?t:Object(f.jsx)("div",{children:"splash screen..."})}s.a.render(Object(f.jsx)(i.a,{store:H,children:Object(f.jsx)(S.ReactReduxFirebaseProvider,Object(r.a)(Object(r.a)({},M),{},{children:Object(f.jsx)(Q,{children:Object(f.jsx)(U,{})})}))}),document.getElementById("root"))}},[[413,1,2]]]);
//# sourceMappingURL=main.c1a68ce5.chunk.js.map