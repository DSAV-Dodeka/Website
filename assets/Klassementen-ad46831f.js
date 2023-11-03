import{r as c,j as s}from"./vendor-44375bc4.js";import{A as _,P as N}from"./index-528c645c.js";import{a as p,q as h}from"./queries-bfb239ef.js";import{E as v}from"./EventTypes-0d7b577d.js";const j=[{firstname:"Arnold",user_id:"0_arnold",lastname:"het Aardvarken",points:12},{firstname:"Arnold",user_id:"1_arnold",lastname:"het Aardvarken 2",points:12},{firstname:"Arnold",user_id:"2_arnold",lastname:"het Aardvarken 3",points:12}];function e(a,o=!0){if(a=a.toLowerCase(),o)return a.charAt(0).toUpperCase()+a.slice(1).split(" ")[0];if(a.split(" ").length==1)return a.charAt(0).toUpperCase()+a.slice(1).split(" ")[0];{let n=a.split(" ");return n[n.length-1]=n[n.length-1].charAt(0).toUpperCase()+n[n.length-1].slice(1),n.join(" ")}}function q(){const{authState:a,setAuthState:o}=c.useContext(_),[n,d]=c.useState(!1),[x,m]=c.useState(!1),f=p({authState:a,setAuthState:o},"training"),t=h(f,j,"Class Training Query Error"),u=p({authState:a,setAuthState:o},"points"),l=h(u,j,"Class Points Query Error");return s.jsxs("div",{className:"algemeen",children:[s.jsx("div",{children:s.jsx(N,{title:"Klassementen"})}),s.jsxs("div",{className:"kolom",children:[s.jsx("div",{className:"SoortKlassement",children:s.jsx("p",{children:"Trainingsklassement"})}),s.jsx("div",{className:"EerstePersoonLinks",children:s.jsxs("p",{children:["1. ",e(t[0].firstname)," ",e(t[0].lastname,!1)," - ",t[0].points]})}),s.jsx("div",{className:"TweedePersoonLinks",children:s.jsxs("p",{children:["2. ",e(t[1].firstname)," ",e(t[1].lastname,!1)," - ",t[1].points]})}),s.jsx("div",{className:"DerdePersoonLinks",children:s.jsxs("p",{children:["3. ",e(t[2].firstname)," ",e(t[2].lastname,!1)," - ",t[2].points]})}),s.jsx("div",{className:"VierEnLagerLinks"+(n?"":" klassementHidden"),children:t.slice(3).map((i,r)=>s.jsxs("p",{className:"persoonMargin",children:[r+4,". ",e(i.firstname)," ",e(i.lastname,!1)," - ",i.points]},"training"+r))}),s.jsx("button",{onClick:()=>d(!n),className:"klassementLaad",children:n?"Laat minder zien":"Laat alles zien"})]}),s.jsx("a",{className:"show_info_link",onClick:()=>m(!0),children:"Waar krijg je punten voor?"}),s.jsxs("div",{className:"kolom",children:[s.jsx("div",{className:"SoortKlassement",children:s.jsx("p",{children:"Puntenklassement"})}),s.jsx("div",{className:"EerstePersoonRechts",children:s.jsxs("p",{children:["1. ",e(l[0].firstname)," ",e(l[0].lastname,!1)," - ",l[0].points]})}),s.jsx("div",{className:"TweedePersoonRechts",children:s.jsxs("p",{children:["2. ",e(l[1].firstname)," ",e(l[1].lastname,!1)," - ",l[1].points]})}),s.jsx("div",{className:"DerdePersoonRechts",children:s.jsxs("p",{children:["3. ",e(l[2].firstname)," ",e(l[2].lastname,!1)," - ",l[2].points]})}),s.jsx("div",{className:"VierEnLagerRechts"+(n?"":" klassementHidden"),children:l.slice(3).map((i,r)=>s.jsxs("p",{className:"persoonMargin",children:[r+4,". ",e(i.firstname)," ",e(i.lastname,!1)," - ",i.points]},"punten"+r))}),s.jsx("button",{onClick:()=>d(!n),className:"klassementLaad",children:n?"Laat minder zien":"Laat alles zien"})]}),x&&s.jsxs("div",{children:[s.jsx("div",{className:"points_info_container"}),s.jsxs("div",{className:"points_info_pop_up",children:[s.jsx("p",{className:"points_info_title",children:"Waar krijg je punten voor?"}),s.jsxs("div",{className:"points_info",children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"points_info_cross",onClick:()=>m(!1),viewBox:"0 0 1024 1024",version:"1.1",children:s.jsx("path",{d:"M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z"})}),s.jsxs("div",{className:"points_info_column",children:[s.jsx("h1",{children:"Trainingsklassement"}),s.jsxs("div",{className:"points_info_row",children:[s.jsx("p",{className:"points_info_category",children:"Aanwezig op training"}),s.jsx("p",{className:"points_info_points",children:"1 punt"})]})]}),s.jsxs("div",{className:"points_info_column",children:[s.jsx("h1",{children:"Puntenklassement"}),v.event_types.map(i=>s.jsxs("div",{className:"points_info_row",children:[s.jsx("p",{className:"points_info_category",children:i.omschrijving}),s.jsx("p",{className:"points_info_points",children:i.default_points+(i.default_points==1?" punt":" punten")})]}))]})]})]})]})]})}export{q as default};
