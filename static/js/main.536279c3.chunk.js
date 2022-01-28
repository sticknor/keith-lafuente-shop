(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t){},118:function(e,t){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),l=a.n(r),i=(a(56),a(40)),o=a(6),s=a(2),u=a(4),m=a(1),d=a(46),f=a(41),v=a.n(f),b=a(42),p=a(50);var E=function(e){var t=e.title,a=e.image,n=e.price,r=e.sold;return c.a.createElement("div",{className:"card-container"},c.a.createElement("img",{className:"card-image-underlay",alt:t||"",style:{width:"82%",left:"7%"},src:a.src}),c.a.createElement("div",{alt:t||"",className:"card-graphic-overlay"}),c.a.createElement("div",{className:"card-text-overlay"},c.a.createElement("div",{className:"card-title"},t),r?c.a.createElement("div",{className:"card-price card-sold-out"},"Sold\nout"):c.a.createElement("div",{className:"card-price"},"$".concat(n.split(".")[0]))))};var g=function(e){var t=e.products,a=e.categories,r=Object(m.g)(),l=r.id,i=r.query,o=Object(n.useState)(t),d=Object(s.a)(o,2),f=d[0],v=d[1],b=Object(n.useState)([]),g=Object(s.a)(b,2),h=g[0],y=g[1];return Object(n.useEffect)(function(){if(void 0!==l&&void 0!==a[l])v(a[l]);else if(void 0!==i){var e=new p.a(t,{keys:[{name:"description",weight:.4},{name:"handle",weight:.4},{name:"productType",weight:1},{name:"title",weight:1}],includeScore:!0}).search(i).filter(function(e){return e.score<.5}).map(function(e){return e.item});v(e)}else v(t);var n=t.map(function(){return e=-.8,t=.8,Math.random()*(t-e)+e;var e,t});y(n)},[l,i,t,a]),c.a.createElement("div",{className:"products-grid"},!(""===i||void 0===i)&&0===f.length&&c.a.createElement("div",null,"no results"),f.map(function(e,t){return c.a.createElement(u.b,{key:t,to:"/product/".concat(e.handle)},c.a.createElement("div",{className:"product-card",style:{transform:"rotate(".concat(h[t],"deg)")}},c.a.createElement(E,{key:t,title:e.title,image:e.images[0],price:e.variants[0].price,sold:!e.variants[0].available})))}))};var h=function(e){var t=e.shopClient,a=e.checkoutID,r=e.checkoutURL,l=e.updateShopClient,i=e.onClose,o=e.open,u=e.onOpen,m=Object(n.useState)([]),d=Object(s.a)(m,2),f=d[0],v=d[1],b=Object(n.useState)(void 0),p=Object(s.a)(b,2),E=p[0],g=p[1],h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});Object(n.useEffect)(function(){a&&t&&t.checkout.fetch(a).then(function(e){v(e.lineItems),g(e.lineItemsSubtotalPrice.amount)})},[]);var y=f.map(function(e){return e.quantity}).reduce(function(e,t){return e+t},0),O=c.a.createElement("div",{className:"bag-icon"},c.a.createElement("div",{className:"cart-size"},y));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cart-button",onClick:o?i:u},c.a.createElement(c.a.Fragment,null,o&&"close",!o&&O)),o&&c.a.createElement("div",{className:"cartCancelArea",onClick:i}),c.a.createElement("div",{className:"cart ".concat(o?"cart-open":"cart-closed")},c.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between"}},O),c.a.createElement("div",{className:"cart-products-container"},f.map(function(e,n){return c.a.createElement("div",{key:n,className:"cart-product"},c.a.createElement("div",{className:"cart-product-info"},c.a.createElement("img",{alt:e.title,src:e.variant.image.src,className:"cart-product-image"}),c.a.createElement("div",null,c.a.createElement("div",{className:"cart-product-title"},e.title,e.variant&&"Default Title"!==e.variant.title?" (".concat(e.variant.title,")"):""),c.a.createElement("div",{className:"cart-product-remove",style:{cursor:"pointer",fontWeight:"bold"},onClick:function(){!function(e){var n=[e];t&&t.checkout.removeLineItems(a,n).then(function(){l()})}(e.id)}},"remove"))),c.a.createElement("div",{className:"cart-product-quantity"},e.quantity),c.a.createElement("div",null,h.format(e.variant.price)))})),f.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"subtotal"},"subtotal",c.a.createElement("div",null,h.format(E))),c.a.createElement("a",{href:r,target:"_blank",rel:"noreferrer",className:"checkoutButton"},"CHECKOUT"),c.a.createElement("div",{className:"checkout-note"},"shipping & taxes calculated at checkout")):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"subtotal"},"empty"))))},y=a(45);function O(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return k(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return k(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw r}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var j=function(e){var t=Object(m.g)().id,a=e.products,r=e.shopClient,l=e.checkoutID,i=e.updateShopClient,o=e.openCart,u=Object(n.useState)(0),d=Object(s.a)(u,2),f=d[0],v=d[1],b=Object(n.useState)(null),p=Object(s.a)(b,2),g=p[0],h=p[1],k=Object(n.useState)(0),j=Object(s.a)(k,2),N=j[0],S=j[1],w=Object(n.useState)(!0),C=Object(s.a)(w,2),I=C[0],q=C[1],A=Object(n.useState)(!1),x=Object(s.a)(A,2),D=x[0],T=x[1];Object(n.useEffect)(function(){var e,n=O(a);try{for(n.s();!(e=n.n()).done;){var c=e.value;c.handle===t&&h(c)}}catch(r){n.e(r)}finally{n.f()}},[t,a]),Object(n.useEffect)(function(){null!=g&&g.variants.length>N&&(!1===g.variants[N].available?q(!1):q(!0))},[g,N]),Object(n.useEffect)(function(){null!=g&&void 0!==g.images&&g.images.forEach(function(e){(new Image).src=e.src})},[g,f]);var F=function(e){T(!0),U(e),setTimeout(function(){T(!1),o()},1e3)},U=function(e){var t=[{variantId:e,quantity:1}];r&&r.checkout.addLineItems(l,t).then(function(){i()})},L=function(e){S(e.target.value)},$=function(){1!==g.images.length&&v((f+1)%g.images.length)},G=Object(y.useSwipeable)({onSwipedLeft:$,onSwipedRight:function(){1!==g.images.length&&v((f+g.images.length-1)%g.images.length)},config:{delta:2,preventDefaultTouchmoveEvent:!0,trackTouch:!0,trackMouse:!1}});return null==g?c.a.createElement("div",null,"loading..."):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"detailLeftCol"},c.a.createElement("div",Object.assign({className:"detail-card"},G,{onClick:$}),c.a.createElement(E,{title:g.title,image:g.images[f],price:g.variants[N].price,sold:!g.variants[N].available}),c.a.createElement("div",{className:"carousel-dots"},g.images.length>1&&g.images.map(function(e,t){return c.a.createElement("div",{key:t,className:"carousel-dot-touch-target",onClick:function(){v(t)}},c.a.createElement("div",{key:"index",className:"".concat(t===f?"selected-carousel-dot":"carousel-dot")}))}))),c.a.createElement("div",{className:"detail-right-col-mobile"},c.a.createElement("div",{className:"menu-divider"}),c.a.createElement("div",{className:"detail-section",style:{fontWeight:600}},g.title),c.a.createElement("div",{className:"detail-section"},g.description),g.variants.length<=1&&c.a.createElement("div",{className:"detail-section"},"$",g.variants[N].price),g.variants.length>1&&c.a.createElement("div",{className:"detail-variants"},c.a.createElement("select",{value:N,onChange:L},g.variants.map(function(e,t){return e.available?c.a.createElement("option",{value:t,key:t},e.title," - $",e.price):c.a.createElement("option",{disabled:!0,value:t,key:t},e.title," (sold out)")}))),D?c.a.createElement("div",{className:"add-to-bag-button-disabled detail-section"},"adding"):c.a.createElement("div",{className:I?"add-to-bag-button detail-section":"add-to-bag-button-disabled detail-section",onClick:function(){F(g.variants[N].id)}}," ",I?"Add to bag":"Sold Out"))),c.a.createElement("div",{className:"detail-right-col"},c.a.createElement("div",{className:"menu-divider"}),c.a.createElement("div",{className:"detail-section",style:{fontWeight:600}},g.title),c.a.createElement("div",{className:"detail-section"},g.description),g.variants.length<=1&&c.a.createElement("div",{className:"detail-section"},"$",g.variants[N].price),g.variants.length>1&&c.a.createElement("div",{className:"detail-variants"},c.a.createElement("select",{value:N,onChange:L},g.variants.map(function(e,t){return e.available?c.a.createElement("option",{value:t,key:t},e.title," - $",e.price):c.a.createElement("option",{disabled:!0,value:t,key:t},e.title," (sold out)")}))),D?c.a.createElement("div",{className:"add-to-bag-button-disabled detail-section"},"adding"):c.a.createElement("div",{className:I?"add-to-bag-button detail-section":"add-to-bag-button-disabled detail-section",onClick:function(){F(g.variants[N].id)}}," ",I?"Add to bag":"Sold Out")))};var N=function(e){var t=e.about,a=e.instagram,n=e.email;return c.a.createElement("div",{className:"about-container"},c.a.createElement("div",{className:"about-content"},c.a.createElement("div",{className:"about-title"},"about"),c.a.createElement("div",{className:"about-text"},t),c.a.createElement("div",{className:"email"},n),c.a.createElement("a",{className:"ig-link",target:"_blank",rel:"noreferrer",href:"https://instagram.com/".concat(a)},"@",a)))};var S=function(e){var t=e.faqs;return c.a.createElement("div",{className:"faq"},c.a.createElement("div",{className:"faq-content"},c.a.createElement("div",{className:"faq-title"},"faq"),t.map(function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",{className:"faq-question"},e.question),c.a.createElement("div",{className:"faq-answer"},e.answer))})))};var w=function(e){var t=e.onClose,a=e.onOpen,n=e.open,r=e.categories;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"menu-button",onClick:n?t:a},c.a.createElement("div",{className:"menu-button-text"},"Menu")),c.a.createElement("div",{className:"menu ".concat(n?"menu-open":"menu-closed")},c.a.createElement("div",{className:"menu-content"},Object.keys(r||{}).map(function(e,t){return c.a.createElement("div",{className:"menu-link",key:t},c.a.createElement(u.b,{to:"/collection/".concat(e)},e))}),c.a.createElement("div",{className:"menu-divider"}),c.a.createElement(u.b,{to:"/about",className:"menu-link"},"about"),c.a.createElement(u.b,{to:"/faq",className:"menu-link"},"faq"),c.a.createElement("a",{href:"https://wayawaya.co/",target:"_blank",rel:"noreferrer",className:"menu-link"},"stockists"))),n&&c.a.createElement("div",{className:"menuCancelArea",onClick:t}))};function C(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"footer-shape"}),c.a.createElement("div",{className:"footer-name"},"keith lafuente 2021"),c.a.createElement(u.b,{to:"/about",className:"footer-link footer-link-1"},c.a.createElement("div",null,"about")),c.a.createElement("a",{href:"https://wayawaya.co/",target:"_blank",rel:"noreferrer",className:"footer-link footer-link-2"},c.a.createElement("div",null,"stocklists")),c.a.createElement(u.b,{to:"/faq",className:"footer-link footer-link-3"},c.a.createElement("div",null,"faq")))}function I(){var e=Object(m.f)(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),u=o[0],d=o[1],f=function(){r?""===u?(l(!1),e("/")):e("search/".concat(u)):l(!0)};return c.a.createElement("div",{className:"search-bar header-links"},r&&c.a.createElement("form",{onSubmit:f},c.a.createElement("input",{type:"text",placeholder:"search",onChange:function(e){d(e.target.value)}}),c.a.createElement("button",{type:"reset",onClick:function(){d("")}},"\xd7")),c.a.createElement("div",{onClick:f}))}var q=function(e){var t=Object(m.e)();return Object(n.useEffect)(function(){window.scrollTo(0,0),document.querySelector(".page").scrollTo(0,0)},[t]),c.a.createElement(c.a.Fragment,null,e.children," ")};q.propTypes={children:c.a.Children};var A,x=q;a(59);function D(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return T(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return T(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw r}}}}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function F(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],l=t[1],f=Object(n.useState)({}),p=Object(s.a)(f,2),E=p[0],y=p[1],O=Object(n.useState)(Date.now()),k=Object(s.a)(O,2),q=k[0],T=k[1],F=Object(n.useState)(void 0),U=Object(s.a)(F,2),L=U[0],$=U[1],G=Object(n.useState)(void 0),M=Object(s.a)(G,2),P=M[0],K=M[1],R=Object(n.useState)(!1),V=Object(s.a)(R,2),_=V[0],z=V[1],B=Object(n.useState)(!1),W=Object(s.a)(B,2),H=W[0],J=W[1],Q=Object(n.useState)(localStorage.getItem("checkoutID")),X=Object(s.a)(Q,2),Y=X[0],Z=X[1],ee=Object(n.useState)(localStorage.getItem("checkoutURL")),te=Object(s.a)(ee,2),ae=te[0],ne=te[1],ce=Object(n.useState)(""),re=Object(s.a)(ce,2),le=re[0],ie=re[1],oe=Object(n.useState)([]),se=Object(s.a)(oe,2),ue=se[0],me=se[1],de=Object(n.useState)(""),fe=Object(s.a)(de,2),ve=fe[0],be=fe[1],pe=Object(n.useState)("@keith _lafuente"),Ee=Object(s.a)(pe,2),ge=Ee[0],he=Ee[1],ye=Object(n.useState)("keithlafuente@gmail.com"),Oe=Object(s.a)(ye,2),ke=Oe[0],je=Oe[1],Ne=Object(n.useState)("\ud83d\udc1a"),Se=Object(s.a)(Ne,2),we=Se[0],Ce=Se[1];Object(n.useEffect)(function(){L&&L.product.fetchAll().then(function(e){var t,a={},n=D(e=e.reverse());try{for(n.s();!(t=n.n()).done;){var c=t.value;void 0!==a[c.productType]?a[c.productType]=[].concat(Object(o.a)(a[c.productType]),[c]):a[c.productType]=[c]}}catch(r){n.e(r)}finally{n.f()}y(a),l(e)})},[L]),Object(n.useEffect)(function(){var e=v.a.buildClient({domain:"keith-lafuente.myshopify.com",storefrontAccessToken:"a165f8cd9bfb68ec8b9cf39f2545dc5b"});$(e),T(Date.now()),Y&&ae?e.checkout.fetch(Y).then(function(t){if(null===t)qe(e);else{var a=0;t.lineItems.map(function(e){return a+=e.quantity,e}),K(a)}}):qe(e);var t=a(60);t.configure({endpointUrl:"https://api.airtable.com",apiKey:"keyCVfnd8GGLw029l"});var n=t.base("appUHQ9x9G0OAVdwX");n("Design").select({view:"Grid view"}).firstPage(function(e,t){if(e)console.error(e);else{var a=[];t.forEach(function(e){var t=e.get("Key"),n=e.get("Value (Color)"),c=e.get("Value (Image)");t&&n&&a.push("".concat(t+"-color",": ").concat(n,";")),t&&c&&c.length>0&&a.push("".concat(t+"-image",": url(").concat(c[0].url,");"))}),console.log(a);var n=a.join("\n");ie(n)}}),n("Faq").select({view:"Grid view"}).firstPage(function(e,t){if(e)console.error(e);else{var a=[];t.forEach(function(e){var t=e.get("Question"),n=e.get("Answer");t&&n&&a.push({question:t,answer:n})}),me(a)}}),n("About").select({view:"Grid view"}).firstPage(function(e,t){e?console.error(e):t.forEach(function(e){var t=e.get("Key"),a=e.get("Value");"about"===t?be(a):"instagram"===t?he(a):"email"===t?je(a):"favicon"===t&&Ce(a)})})},[]);var Ie=function(){T(Date.now())},qe=function(e){e.checkout.create().then(function(e){Z(e.id),ne(e.webUrl),K(0),Ie(),localStorage.setItem("checkoutID",e.id),localStorage.setItem("checkoutURL",e.webUrl)})},Ae=Object(d.a)(A||(A=Object(i.a)(["\n    body {\n      ","\n    }\n  "])),function(e){return e.globalCss});return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,null,c.a.createElement("title",null,"Keith Lafuente"),c.a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22https://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>".concat(we,"</text></svg>"),sizes:"16x16"})),c.a.createElement(Ae,{globalCss:le}),c.a.createElement(u.a,{basename:"/"},c.a.createElement(x,null,c.a.createElement("div",{className:"background"}),c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"pageContent"},c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/product/:id",element:c.a.createElement(j,{key:q,shopClient:L,checkoutID:Y,updateShopClient:Ie,products:r,openCart:function(){return J(!0)}})}),c.a.createElement(m.a,{path:"/collection/:id",element:c.a.createElement(g,{key:q,shopClient:L,checkoutID:Y,updateShopClient:Ie,products:r,categories:E})}),c.a.createElement(m.a,{path:"/search/:query",element:c.a.createElement(g,{key:q,shopClient:L,checkoutID:Y,updateShopClient:Ie,products:r,categories:E})}),c.a.createElement(m.a,{path:"about",element:c.a.createElement(N,{about:ve,instagram:ge,email:ke})}),c.a.createElement(m.a,{path:"faq",element:c.a.createElement(S,{faqs:ue})}),c.a.createElement(m.a,{path:"/",element:c.a.createElement(g,{key:q,shopClient:L,checkoutID:Y,updateShopClient:Ie,products:r})}))),c.a.createElement(C,null)),c.a.createElement(w,{open:_,onOpen:function(){z(!0)},onClose:function(){z(!1)},shopClient:L,categories:E}),c.a.createElement(u.b,{to:"/",className:"logo"},c.a.createElement("div",null)),c.a.createElement(I,null),c.a.createElement(h,{key:q,shopClient:L,checkoutID:Y,checkoutURL:ae,updateShopClient:Ie,cartSize:P,onClose:function(){return J(!1)},onOpen:function(){J(!0)},open:H}))))}var U=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,134)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root")),U()},51:function(e,t,a){e.exports=a(133)},56:function(e,t,a){},59:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.536279c3.chunk.js.map