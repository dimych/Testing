(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{11:function(e,t,r){e.exports={title:"CheckedBrands_title__9uKHj",titleBrand:"CheckedBrands_titleBrand__2HcEw",isNew:"CheckedBrands_isNew__1-Slr"}},27:function(e,t,r){e.exports={preloaderPage:"Preloader_preloaderPage__2nruz",preloader:"Preloader_preloader__3QT1f",load4:"Preloader_load4__2QH3t"}},38:function(e,t,r){e.exports={app:"App_app__4SXRe"}},41:function(e,t,r){e.exports={wrapperSpan:"PriceSelection_wrapperSpan__wNOvA"}},46:function(e,t,r){e.exports={title:"PriceChecked_title__p-tu7"}},47:function(e,t,r){e.exports={categories:"Categories_categories__3ZYJE"}},48:function(e,t,r){e.exports={selectedPage:"Paginator_selectedPage__3DHmp"}},55:function(e,t,r){},6:function(e,t,r){e.exports={blockCards:"CardProduct_blockCards__2l9Xx",blockCard:"CardProduct_blockCard__kHVRk",bl:"CardProduct_bl__2pHt6",link:"CardProduct_link__FvkLE",new:"CardProduct_new__1LKxo",newT:"CardProduct_newT__2cdEx",title:"CardProduct_title__14tnR",infoPriceBlock:"CardProduct_infoPriceBlock__1FgMV",price:"CardProduct_price__3Kt15",image:"CardProduct_image__rXDrW",footerCard:"CardProduct_footerCard__N7mFl",but:"CardProduct_but__20V2d"}},80:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),c=r(12),i=r.n(c),s=(r(55),r(38)),u=r.n(s),d=r(14),o=r(3),l=r(5),j=r(40),b=r.n(j).a.create({withCredentials:!0,baseURL:"https://getlens-master.stage.dev.family/api/pages"}),p={getBrands:function(e,t,r){return b.get("/kamery",{params:{page:e,"price[min]":t,"price[max]":r}})},getProducts:function(e,t,r){return this.getBrands(e,t,r)}},f=function(e){return{type:"cards/app/SET-STATUS",status:e}},O={status:"idle",requestError:null},_={data:{categories:[],definition_type:"",filters:[],links:{first:"",last:"",next:"",prev:null},meta:{current_page:1,from:1,last_page:9,path:"https://getlens-master.stage.dev.family/api/pages/kamery",per_page:24,to:24,total:0},products:[],result:""}},x=r(27),m=r.n(x),h=r(1),g=function(){return Object(h.jsx)("div",{className:m.a.preloaderPage,children:Object(h.jsx)("div",{className:m.a.preloader,children:"Loading..."})})},v=r(11),C=r.n(v),P=function(){var e=Object(o.c)((function(e){return e.brandsReducer.data.filters})),t=Object(o.c)((function(e){return e.appReducer.status})),r=Object(o.c)((function(e){return e.brandsReducer.data.meta.current_page})),a=Object(o.b)(),c=Object(n.useState)(!1),i=Object(d.a)(c,2),s=i[0],u=i[1],l=e.filter((function(e){return"brands"===e.slug})).map((function(e){return e.items.map((function(e,t){return(s||t<5)&&Object(h.jsxs)("div",{className:C.a.titleBrand,children:[Object(h.jsx)("input",{type:"checkbox"}),Object(h.jsx)("span",{className:C.a.titleBrand,children:e.title})]},e.value)}))})),j=e.filter((function(e){return"\u041d\u043e\u0432\u0438\u043d\u043a\u0430"===e.title})).map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:e.type})," ",e.title]})})),b=e.filter((function(e){return"\u0410\u043a\u0446\u0438\u044f"===e.title})).map((function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:e.type})," ",e.title]})}));return Object(n.useEffect)((function(){var e;r&&a((e=r,function(t){return t(f("loading")),p.getBrands(e).then((function(e){"success"===e.data.result&&t({type:"brands/SHOW_BRANDS",payload:{data:e.data}})})).finally((function(){t(f("succeeded"))}))}))}),[a,r]),"loading"===t?Object(h.jsx)(g,{}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{className:C.a.title,children:"\u0411\u0440\u0435\u043d\u0434"}),l,Object(h.jsx)("div",{children:Object(h.jsxs)("span",{children:[Object(h.jsx)("input",{type:"checkbox",onChange:function(){return u(!s)}})," \u0414\u0440\u0443\u0433\u0438\u0435"]})}),Object(h.jsxs)("div",{className:C.a.isNew,children:[j,b]})]})},N=r(41),k=r.n(N),S=function(e){var t=e.min,r=e.max;return Object(h.jsxs)("div",{className:k.a.wrapperSpan,children:[Object(h.jsx)("span",{children:t}),Object(h.jsx)("span",{children:r})]})},R=r(95),y=r(97),E=r(22),w=Object(R.a)({root:{width:220,thumbColorPrimary:"red"}}),T=Object(E.a)({"@global":{".MuiSlider-thumbColorPrimary":{background:"#FFFFFF",border:"4px solid #1B1B1B"},".MuiSlider-track":{color:"#FF681C"}}})((function(){return null})),B=function(e){var t=e.value,r=e.onChange,n=e.min,a=e.max,c=e.onDrop,i=w();return Object(h.jsxs)("div",{className:i.root,children:[Object(h.jsx)(T,{}),Object(h.jsx)(y.a,{onMouseUp:c,value:t,min:n,max:a,step:100,onChange:r,"aria-labelledby":"range-slider"})]})},F={products:[]},A=function(e,t,r){return function(n){return p.getProducts(e,t,r).then((function(e){"success"===e.data.result&&(n({type:"cardReducer/SET_CARD",card:e.data.products}),console.log(e.data))}))}},D=r(46),H=r.n(D),M=function(){var e=Object(o.c)((function(e){return e.brandsReducer.data.filters})),t=e.filter((function(e){return"\u0426\u0435\u043d\u0430"===e.title})).map((function(e){return Object(h.jsxs)("h3",{children:[e.title,", \u20bd"]},e.title)})),r=+e.filter((function(e){return"\u0426\u0435\u043d\u0430"===e.title})).map((function(e){return e.min})),c=+e.filter((function(e){return"\u0426\u0435\u043d\u0430"===e.title})).map((function(e){return e.max})),i=Object(o.c)((function(e){return e.brandsReducer.data.meta.current_page})),s=Object(o.b)(),u=a.a.useState([0,0]),l=Object(d.a)(u,2),j=l[0],b=l[1],p=j[0],f=j[1];Object(n.useEffect)((function(){s(A(i,p,f))}),[s,i]);return Object(n.useEffect)((function(){b([r,c])}),[r,c,b]),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{className:H.a.title,children:t}),Object(h.jsx)(S,{min:p,max:f}),Object(h.jsx)(B,{max:c,min:r,value:j,onChange:function(e,t){b(t)},onDrop:function(){s(A(i,p,f))}})]})},U=function(){var e=Object(o.c)((function(e){return e.brandsReducer.data.meta.total}));return Object(h.jsxs)("div",{children:["\u0422\u043e\u0432\u0430\u0440\u043e\u0432 : ",e]})},L=r(47),z=r.n(L),V=function(){var e=Object(o.c)((function(e){return e.brandsReducer.data.categories})).filter((function(e){return"\u041a\u0430\u043c\u0435\u0440\u044b"===e.title})).map((function(e){return Object(h.jsx)("h2",{children:e.title},e.id)}));return Object(h.jsx)("div",{className:z.a.categories,children:e})},X=function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)(U,{}),Object(h.jsx)(V,{}),Object(h.jsx)(M,{}),Object(h.jsx)(P,{})]})},J=r(6),K=r.n(J),Q=r(48),W=r.n(Q),q=function(e){for(var t=e.currentPage,r=e.pageSize,a=e.portionSize,c=void 0===a?10:a,i=e.totalCount,s=e.setCurrentPage,u=Math.ceil(i/r),o=[],l=1;l<=u;l++)o.push(l);var j=Math.ceil(u/c),b=Object(n.useState)(1),p=Object(d.a)(b,2),f=p[0],O=p[1],_=(f-1)*c+1,x=f*c;return Object(h.jsxs)("div",{children:[f>1&&Object(h.jsx)("button",{onClick:function(){O(f-1)},children:"PREV"}),o.filter((function(e){return e>=_&&e<=x})).map((function(e,r){return Object(h.jsxs)("span",{className:t===e?W.a.selectedPage:"",onClick:function(){s(e)},children:[" ",e," "]},r)})),j>f&&Object(h.jsx)("button",{onClick:function(){O(f+1)},children:"NEXT"})]})},G=r.p+"static/media/user_Photo.62a5ed40.jpg",I=r.p+"static/media/default (Stroke).26c47d81.svg",Y=function(e){var t=e.products,r=e.isNew;return Object(h.jsx)("li",{className:K.a.blockCard,children:Object(h.jsxs)("div",{className:K.a.bl,children:[Object(h.jsx)("a",{className:K.a.link,href:""}),r&&Object(h.jsx)("div",{className:K.a.new,children:Object(h.jsx)("div",{className:K.a.newT,children:"\u041d\u043e\u0432\u0438\u043d\u043a\u0430"})}),Object(h.jsx)("img",{className:K.a.image,src:null!==t.image?t.image.desktop.x1:G,alt:"#"}),Object(h.jsxs)("div",{className:K.a.infoPriceBlock,children:[Object(h.jsx)("h4",{className:K.a.title,children:t.title}),Object(h.jsx)("div",{className:K.a.price,children:t.price+"\u20bd"}),Object(h.jsxs)("div",{className:K.a.footerCard,children:[Object(h.jsx)("button",{className:K.a.but,children:"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"}),Object(h.jsx)("img",{src:I,alt:""})]})]})]})})},Z=function(){var e=Object(o.c)((function(e){return e.cardReducer.products})),t=Object(o.c)((function(e){return e.brandsReducer.data.meta.current_page})),r=Object(o.c)((function(e){return e.brandsReducer.data.meta.per_page})),a=Object(o.c)((function(e){return e.brandsReducer.data.meta.total})),c=Object(o.b)(),i=Object(n.useCallback)((function(e){c({type:"brands/SET_CURRENT_PAGE",currentPage:e})}),[c]);return Object(h.jsxs)("div",{children:[Object(h.jsx)("ul",{className:K.a.blockCards,children:e.map((function(e){return Object(h.jsx)(Y,{products:e,isNew:e.is_new},e.id)}))}),Object(h.jsx)("br",{}),Object(h.jsx)(q,{currentPage:t,pageSize:r,portionSize:10,totalCount:a,onPageChanged:function(){},setCurrentPage:i})]})};var $=function(){return Object(h.jsxs)("div",{className:u.a.app,children:[Object(h.jsx)(X,{}),Object(h.jsx)(Z,{})]})},ee=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,99)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;r(e),n(e),a(e),c(e),i(e)}))},te=r(16),re=r(49),ne=Object(te.c)({brandsReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"brands/SHOW_BRANDS":return Object(l.a)(Object(l.a)({},e),{},{data:t.payload.data});case"brands/SET_CURRENT_PAGE":return Object(l.a)(Object(l.a)({},e),{},{data:Object(l.a)(Object(l.a)({},e.data),{},{meta:Object(l.a)(Object(l.a)({},e.data.meta),{},{current_page:t.currentPage})})});default:return e}},appReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"cards/app/SET-STATUS":return Object(l.a)(Object(l.a)({},e),{},{status:t.status});case"cards/app/SET-REQUEST-ERROR":return Object(l.a)(Object(l.a)({},e),{},{requestError:t.errorText});default:return Object(l.a)({},e)}},cardReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"cardReducer/SET_CARD":return Object(l.a)(Object(l.a)({},e),{},{products:t.card});default:return e}}}),ae=Object(te.d)(ne,Object(te.a)(re.a));i.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(o.a,{store:ae,children:Object(h.jsx)($,{})})}),document.getElementById("root")),ee()}},[[80,1,2]]]);
//# sourceMappingURL=main.10081547.chunk.js.map