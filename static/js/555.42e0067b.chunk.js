"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[555],{681:function(e,n,r){r.r(n),r.d(n,{default:function(){return u}});var t=r(861),s=r(885),i=r(757),c=r.n(i),o=(r(727),r(501)),a=r(871),l=r(791),d=r(184);function h(e){var n=e.to;return(0,d.jsx)(o.rU,{to:n,children:"Go back"})}function u(){var e,n,r=null!==(e=null===(n=(0,a.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",i=(0,a.UO)().movieId,u=(0,l.useState)({}),v=(0,s.Z)(u,2),x=v[0],j=v[1];(0,l.useEffect)((function(){var e=function(){var e=(0,t.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(i,"?api_key=15d494776c3d35f24fb32811ec733217")).then((function(e){return e.json()})).catch((function(e){return console.log("error")}));case 2:n=e.sent,j(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]);var f=x.title,p=x.release_date,m=x.vote_average,g=x.overview,_=x.genres,w=x.poster_path,b=Math.round(10*m);return(0,d.jsxs)("main",{children:[(0,d.jsx)(h,{to:r}),x&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"MovieDetailsBox",children:[(0,d.jsx)("div",{className:"ImageMovieBox",children:(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w400".concat(w),alt:f})}),(0,d.jsxs)("div",{className:"TextMovieBox",children:[(0,d.jsxs)("h1",{children:[f," ","(".concat(null===p||void 0===p?void 0:p.substring(0,4),")")]}),(0,d.jsxs)("p",{children:["User score: ","".concat(b,"%")]}),(0,d.jsx)("h2",{children:"Overview"}),(0,d.jsx)("p",{children:g}),(0,d.jsx)("h2",{children:"Genres"}),(0,d.jsx)("p",{children:null===_||void 0===_?void 0:_.map((function(e){return"".concat(e.name," ")}))})]})]}),(0,d.jsx)("hr",{}),(0,d.jsx)("p",{children:"Additional informaton"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,d.jsx)("li",{children:(0,d.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,d.jsx)("hr",{}),(0,d.jsx)(l.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(a.j3,{})})]})]})}}}]);
//# sourceMappingURL=555.42e0067b.chunk.js.map