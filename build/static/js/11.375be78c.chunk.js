(this["webpackJsonpfirst-app"]=this["webpackJsonpfirst-app"]||[]).push([[11],{306:function(n,t,e){"use strict";e.d(t,"b",(function(){return u})),e.d(t,"d",(function(){return h})),e.d(t,"a",(function(){return l})),e.d(t,"c",(function(){return p})),e.d(t,"e",(function(){return f}));var a=e(71),r=e.n(a),c=e(110),i=e(127),s=e(307),o=e(74),u=function(){return function(){var n=Object(c.a)(r.a.mark((function n(t){var e;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.a.layDanhSachPhim();case 3:e=n.sent,t({type:o.a,arrFilm:e.data.content}),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("e",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(t){return n.apply(this,arguments)}}()},h=function(n){return function(){var t=Object(c.a)(r.a.mark((function t(e){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.themPhimUpLoadHinh(n);case 3:a=t.sent,alert("Th\xeam phim th\xe0nh c\xf4ng "),console.log("result",a),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(null===(c=t.t0.response)||void 0===c?void 0:c.data);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}()},l=function(n){return function(){var t=Object(c.a)(r.a.mark((function t(e){var a,c;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.capNhatPhimUpload(n);case 3:a=t.sent,alert("C\u1eadp nh\u1eadt phim th\xe0nh c\xf4ng "),console.log("result",a),e(u()),i.b.push("/admin/Films"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.log(null===(c=t.t0.response)||void 0===c?void 0:c.data);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(n){return t.apply(this,arguments)}}()},p=function(n){return function(){var t=Object(c.a)(r.a.mark((function t(e){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.layThongTinPhim(n);case 3:a=t.sent,e({type:o.d,thongTinPhim:a.data.content}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log("e",t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}()},f=function(n){return function(){var t=Object(c.a)(r.a.mark((function t(e){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,s.a.xoaPhim(n);case 3:t.sent,alert("X\xf3a phim th\xe0nh c\xf4ng"),e(u()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log({e:t.t0});case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(n){return t.apply(this,arguments)}}()}},307:function(n,t,e){"use strict";e.d(t,"a",(function(){return s}));var a=e(44),r=e(126),c=e(125),i=e(19),s=new(function(n){Object(r.a)(e,n);var t=Object(c.a)(e);function e(){var n;return Object(a.a)(this,e),(n=t.call(this)).layDanhSachBanner=function(){return n.get("/api/QuanLyPhim/LayDanhSachBanner")},n.layDanhSachPhim=function(){return n.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=".concat(i.b))},n.themPhimUpLoadHinh=function(t){return n.post("/api/QuanLyPhim/ThemPhimUploadHinh",t)},n.layThongTinPhim=function(t){return n.get("/api/QuanLyPhim/LayThongTinPhim?MaPhim=".concat(t))},n.capNhatPhimUpload=function(t){return n.post("/api/QuanLyPhim/CapNhatPhimUpload",t)},n.xoaPhim=function(t){return n.delete("/api/QuanLyPhim/XoaPhim?MaPhim=".concat(t))},n}return e}(e(128).a))},359:function(n,t,e){},387:function(n,t,e){"use strict";e.r(t),e.d(t,"default",(function(){return p}));var a=e(54),r=e(0),c=e(26),i=e(306),s=(e(359),e(127)),o=e(327),u=e.n(o),h=e(403),l=e(1);function p(n){var t=Object(r.useState)(!1),e=Object(a.a)(t,2),o=e[0],p=e[1],f=Object(c.d)((function(n){return n.QuanLyPhimReducer})).arrFilm;console.log("arrFilm",f);var m=Object(c.c)();Object(r.useEffect)((function(){var n=Object(i.b)();m(n)}),[]);var d=Object(r.useState)(),j=Object(a.a)(d,2),b=j[0],x=j[1];return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("div",{className:"bg-dark",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("div",{className:"row",styles:{paddingTop:"75px"},children:f.slice(0,24).map((function(n,t){return Object(l.jsx)("div",{className:"wrapper col-12 col-md-4 col-lg-3",children:Object(l.jsxs)("div",{className:"card",children:[Object(l.jsx)("img",{src:n.hinhAnh,onError:function(n){n.target.onerror=null,n.target.src="https://picsum.photos/id/1004/200/300"}}),Object(l.jsxs)("div",{className:"info w-full",children:[Object(l.jsxs)("h1",{className:"text-white text-xl",children:[n.tenPhim.length>20?Object(l.jsxs)("span",{children:[n.tenPhim.slice(0,16)," ..."]}):Object(l.jsxs)("span",{children:[n.tenPhim," "]})," "]}),Object(l.jsx)("div",{style:{height:"100px"},children:Object(l.jsx)("p",{stle:{height:"100px"},children:n.moTa.length>100?Object(l.jsxs)("span",{children:[n.moTa.slice(0,80),"... "]}):Object(l.jsxs)("span",{children:[n.moTa," "]})})}),Object(l.jsx)(h.a,{className:"text-center w-full hover:opacity-50",style:{fontSize:"60px",color:"white",cursor:"pointer"},onClick:function(){p(!o),x(n.trailer)}}),Object(l.jsx)("button",{className:"text-center w-full mt-16",onClick:function(){s.b.push("/detail/".concat(n.maPhim))},children:"\u0110\u1eb7t v\xe9"})]})]})},t)}))})})}),Object(l.jsx)(u.a,{toggler:o,sources:[Object(l.jsx)("iframe",{src:"".concat(b),width:"1920px",height:"1080px",frameBorder:"0",allow:"autoplay; fullscreen",allowFullScreen:!0})]})]})}}}]);
//# sourceMappingURL=11.375be78c.chunk.js.map