(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t){},119:function(e,t){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),l=a.n(r),o=(a(57),a(39)),i=a(51),s=a(2),u=a(5),m=a(1),d=a(47),f=a(40),v=a.n(f),b=a(41),p=a(44),E=a.n(p);var g=function(e){var t=e.title,a=e.image,n=e.price,r=e.sold;return c.a.createElement("div",{className:"card-container"},c.a.createElement("img",{className:"card-image-underlay",alt:t||"",style:{width:"82%",left:"7%"},src:a.src}),c.a.createElement("img",{alt:t||"",className:"card-graphic-overlay",src:E.a}),c.a.createElement("div",{className:"card-text-overlay"},c.a.createElement("div",{className:"card-title"},t),r?c.a.createElement("div",{className:"card-price card-sold-out"},"Sold\nout"):c.a.createElement("div",{className:"card-price"},"$".concat(n.split(".")[0]))))};var h=function(e){var t=e.products,a=e.categories,r=Object(m.g)().id,l=Object(n.useState)(t),o=Object(s.a)(l,2),i=o[0],d=o[1],f=Object(n.useState)([]),v=Object(s.a)(f,2),b=v[0],p=v[1];return Object(n.useEffect)(function(){void 0!==r&&void 0!==a[r]?d(a[r]):d(t);var e=t.map(function(){return e=-.8,t=.8,Math.random()*(t-e)+e;var e,t});p(e)},[r,t,a]),c.a.createElement("div",{className:"products-grid"},i.map(function(e,t){return c.a.createElement(u.b,{key:t,to:"/product/".concat(e.handle)},c.a.createElement("div",{className:"product-card",style:{transform:"rotate(".concat(b[t],"deg)")}},c.a.createElement(g,{key:t,title:e.title,image:e.images[0],price:e.variants[0].price,sold:!e.variants[0].available})))}))};var y=function(e){var t=e.shopClient,a=e.checkoutID,r=e.checkoutURL,l=e.updateShopClient,o=e.onClose,i=e.open,u=e.onOpen,m=Object(n.useState)([]),d=Object(s.a)(m,2),f=d[0],v=d[1],b=Object(n.useState)(void 0),p=Object(s.a)(b,2),E=p[0],g=p[1],h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});return Object(n.useEffect)(function(){a&&t&&t.checkout.fetch(a).then(function(e){v(e.lineItems),g(e.lineItemsSubtotalPrice.amount)})},[]),console.log(t),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cart-button",onClick:i?o:u},i?"close":"bag"),i&&c.a.createElement("div",{className:"cartCancelArea",onClick:o}),c.a.createElement("div",{className:"cart ".concat(i?"cart-open":"cart-closed")},c.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between"}},c.a.createElement("div",null,"bag")),c.a.createElement("div",{className:"cart-products-container"},f.map(function(e,n){return c.a.createElement("div",{key:n,className:"cart-product"},c.a.createElement("div",{className:"cart-product-info"},c.a.createElement("img",{alt:e.title,src:e.variant.image.src,className:"cart-product-image"}),c.a.createElement("div",null,c.a.createElement("div",{className:"cart-product-title"},e.title,e.variant&&"Default Title"!==e.variant.title?" (".concat(e.variant.title,")"):""),c.a.createElement("div",{className:"cart-product-remove",style:{cursor:"pointer",fontWeight:"bold"},onClick:function(){!function(e){var n=[e];t&&t.checkout.removeLineItems(a,n).then(function(){l()})}(e.id)}},"remove"))),c.a.createElement("div",{className:"cart-product-quantity"},e.quantity),c.a.createElement("div",null,h.format(e.variant.price)))})),f.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"subtotal"},"subtotal",c.a.createElement("div",null,h.format(E))),c.a.createElement("a",{href:r,target:"_blank",rel:"noreferrer",className:"checkoutButton"},"CHECKOUT"),c.a.createElement("div",{className:"checkout-note"},"shipping & taxes calculated at checkout")):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"subtotal"},"empty"))))};function O(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return j(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(o)throw r}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var k=function(e){var t=Object(m.g)().id,a=e.products,r=e.shopClient,l=e.checkoutID,o=e.updateShopClient,i=e.openCart,u=Object(n.useState)(0),d=Object(s.a)(u,2),f=d[0],v=d[1],b=Object(n.useState)(null),p=Object(s.a)(b,2),E=p[0],h=p[1],y=Object(n.useState)(0),j=Object(s.a)(y,2),k=j[0],N=j[1],S=Object(n.useState)(!1),w=Object(s.a)(S,2),C=w[0],I=w[1],q=Object(n.useState)(!1),x=Object(s.a)(q,2),A=x[0],D=x[1],U=Object(n.useState)(!0),F=Object(s.a)(U,2),L=F[0],T=F[1],_=Object(n.useState)(!1),G=Object(s.a)(_,2),M=G[0],P=G[1];Object(n.useEffect)(function(){var e,n=O(a);try{for(n.s();!(e=n.n()).done;){var c=e.value;c.handle===t&&h(c)}}catch(r){n.e(r)}finally{n.f()}},[t,a]),Object(n.useEffect)(function(){null!=E&&E.variants.length>k&&(!1===E.variants[k].available?T(!1):T(!0))},[E,k]),Object(n.useEffect)(function(){null!=E&&void 0!==E.images&&(E.images.forEach(function(e){(new Image).src=e.src}),I(f-1>=0),D(f+1<E.images.length))},[E,f]);var K=function(e){var t=[{variantId:e,quantity:1}];r&&r.checkout.addLineItems(l,t).then(function(){o()})};return null==E?c.a.createElement("div",null,"loading..."):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"detailLeftCol"},c.a.createElement("div",{className:"detail-card"},c.a.createElement(g,{title:E.title,image:E.images[f],price:E.variants[k].price,sold:!E.variants[k].available}),c.a.createElement("div",{className:"carousel-dots"},E.images.length>1&&E.images.map(function(e,t){return c.a.createElement("div",{key:t,className:"carousel-dot-touch-target",onClick:function(){v(t)}},c.a.createElement("div",{key:"index",className:"".concat(t===f?"selected-carousel-dot":"carousel-dot")}))}))),C&&c.a.createElement("div",{className:"prev-button",onClick:function(){v(f-1),I(f-1>=0),D(f+1<E.images.length)}}),A&&c.a.createElement("div",{className:"next-button",onClick:function(){v(f+1),I(f-1>=0),D(f+1<E.images.length)}})),c.a.createElement("div",{className:"detail-right-col"},c.a.createElement("div",{className:"menu-divider"}),c.a.createElement("div",{className:"detail-section",style:{fontWeight:600}},E.title),c.a.createElement("div",{className:"detail-section"},E.description),E.variants.length<=1&&c.a.createElement("div",{className:"detail-section"},"$",E.variants[k].price),E.variants.length>1&&c.a.createElement("div",{className:"detail-variants"},c.a.createElement("select",{value:k,onChange:function(e){N(e.target.value)}},E.variants.map(function(e,t){return e.available?c.a.createElement("option",{value:t,key:t},e.title," - $",e.price):c.a.createElement("option",{disabled:!0,value:t,key:t},e.title," (sold out)")}))),M?c.a.createElement("div",{className:"add-to-bag-button-disabled detail-section"},"adding"):c.a.createElement("div",{className:L?"add-to-bag-button detail-section":"add-to-bag-button-disabled detail-section",onClick:function(){var e;e=E.variants[k].id,P(!0),K(e),setTimeout(function(){P(!1),i()},1e3)}}," ",L?"Add to bag":"Sold Out")))};var N=function(e){var t=e.about,a=e.instagram,n=e.email;return c.a.createElement("div",{className:"about-container"},c.a.createElement("div",{className:"about-content"},c.a.createElement("div",{className:"about-title"},"about"),c.a.createElement("div",{className:"about-text"},t),c.a.createElement("div",{className:"email"},n),c.a.createElement("a",{className:"ig-link",target:"_blank",rel:"noreferrer",href:"https://instagram.com/".concat(a)},"@",a)))};var S=function(e){var t=e.faqs;return c.a.createElement("div",{className:"faq"},c.a.createElement("div",{className:"faq-content"},c.a.createElement("div",{className:"faq-title"},"faq"),t.map(function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",{className:"faq-question"},e.question),c.a.createElement("div",{className:"faq-answer"},e.answer))})))},w=a(45),C=a.n(w);var I,q=function(e){var t=e.onClose,a=e.onOpen,n=e.open,r=e.categories;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"menu-button",onClick:n?t:a},c.a.createElement("img",{src:C.a,alt:"Menu"}),c.a.createElement("div",{className:"menu-button-text"},"Menu")),c.a.createElement("div",{className:"menu ".concat(n?"menu-open":"menu-closed")},c.a.createElement("div",{className:"menu-content"},Object.keys(r||{}).map(function(e,t){return c.a.createElement("div",{className:"menu-link",key:t},c.a.createElement(u.b,{to:"/collection/".concat(e)},e))}),c.a.createElement("div",{className:"menu-divider"}),c.a.createElement(u.b,{to:"/about",className:"menu-link"},"about"),c.a.createElement(u.b,{to:"/faq",className:"menu-link"},"faq"),c.a.createElement("a",{href:"https://wayawaya.co/",target:"_blank",rel:"noreferrer",className:"menu-link"},"stockists"))),n&&c.a.createElement("div",{className:"menuCancelArea",onClick:t}))},x=a(46),A=a.n(x);a(60);function D(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return U(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return U(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(o)throw r}}}}function U(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function F(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],l=t[1],f=Object(n.useState)({}),p=Object(s.a)(f,2),E=p[0],g=p[1],O=Object(n.useState)(Date.now()),j=Object(s.a)(O,2),w=j[0],C=j[1],x=Object(n.useState)(void 0),U=Object(s.a)(x,2),F=U[0],L=U[1],T=Object(n.useState)(localStorage.getItem("checkoutID")),_=Object(s.a)(T,2),G=_[0],M=_[1],P=Object(n.useState)(localStorage.getItem("checkoutURL")),K=Object(s.a)(P,2),V=K[0],$=K[1],B=Object(n.useState)(void 0),R=Object(s.a)(B,2),z=R[0],H=R[1],J=Object(n.useState)(!1),Q=Object(s.a)(J,2),W=Q[0],X=Q[1],Y=Object(n.useState)(!1),Z=Object(s.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(""),ne=Object(s.a)(ae,2),ce=ne[0],re=ne[1],le=Object(n.useState)([]),oe=Object(s.a)(le,2),ie=oe[0],se=oe[1],ue=Object(n.useState)(""),me=Object(s.a)(ue,2),de=me[0],fe=me[1],ve=Object(n.useState)("@keith _lafuente"),be=Object(s.a)(ve,2),pe=be[0],Ee=be[1],ge=Object(n.useState)("keithlafuente@gmail.com"),he=Object(s.a)(ge,2),ye=he[0],Oe=he[1],je=Object(n.useState)("\ud83d\udc1a"),ke=Object(s.a)(je,2),Ne=ke[0],Se=ke[1];Object(n.useEffect)(function(){F&&F.product.fetchAll().then(function(e){var t,a={},n=D(e=e.reverse());try{for(n.s();!(t=n.n()).done;){var c=t.value;void 0!==a[c.productType]?a[c.productType]=[].concat(Object(i.a)(a[c.productType]),[c]):a[c.productType]=[c]}}catch(r){n.e(r)}finally{n.f()}g(a),l(e)})},[F]),Object(n.useEffect)(function(){var e=v.a.buildClient({domain:"keith-lafuente.myshopify.com",storefrontAccessToken:"a165f8cd9bfb68ec8b9cf39f2545dc5b"});L(e),C(Date.now()),G&&V?e.checkout.fetch(G).then(function(e){if(null===e)Ie();else{var t=0;e.lineItems.map(function(e){return t+=e.quantity,e}),H(t)}}):Ie();var t=a(61);t.configure({endpointUrl:"https://api.airtable.com",apiKey:"keyCVfnd8GGLw029l"});var n=t.base("appUHQ9x9G0OAVdwX");n("Design").select({view:"Grid view"}).firstPage(function(e,t){if(e)console.error(e);else{var a=[];t.forEach(function(e){var t=e.get("Key"),n=e.get("Value (Color)"),c=e.get("Value (Image)");t&&n&&a.push("".concat(t+"-color",": ").concat(n,";")),t&&c&&c.length>0&&a.push("".concat(t+"-image",": url(").concat(c[0].url,");"))});var n=a.join("\n");re(n)}}),n("Faq").select({view:"Grid view"}).firstPage(function(e,t){if(e)console.error(e);else{var a=[];t.forEach(function(e){var t=e.get("Question"),n=e.get("Answer");t&&n&&a.push({question:t,answer:n})}),se(a)}}),n("About").select({view:"Grid view"}).firstPage(function(e,t){e?console.error(e):t.forEach(function(e){var t=e.get("Key"),a=e.get("Value");"about"===t?fe(a):"instagram"===t?Ee(a):"email"===t?Oe(a):"favicon"===t&&Se(a)})})},[]);var we=function(){C(Date.now())},Ce=Object(d.a)(I||(I=Object(o.a)(["\n    body {\n      ","\n    }\n  "])),function(e){return e.globalCss}),Ie=function(){F.checkout.create().then(function(e){M(e.id),$(e.webUrl),H(0),we(),localStorage.setItem("checkoutID",e.id),localStorage.setItem("checkoutURL",e.webUrl)})};return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,null,c.a.createElement("title",null,"Keith Lafuente"),c.a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>".concat(Ne,"</text></svg>"),sizes:"16x16"})),c.a.createElement(Ce,{globalCss:ce}),c.a.createElement(u.a,{basename:"/"},c.a.createElement("div",null,c.a.createElement("div",{className:"background"}),c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"pageContent"},c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/product/:id",element:c.a.createElement(k,{key:w,shopClient:F,checkoutID:G,updateShopClient:we,products:r,openCart:function(){return te(!0)}})}),c.a.createElement(m.a,{path:"/collection/:id",element:c.a.createElement(h,{key:w,shopClient:F,checkoutID:G,updateShopClient:we,products:r,categories:E})}),c.a.createElement(m.a,{path:"about",element:c.a.createElement(N,{about:de,instagram:pe,email:ye})}),c.a.createElement(m.a,{path:"faq",element:c.a.createElement(S,{faqs:ie})}),c.a.createElement(m.a,{path:"/",element:c.a.createElement(h,{key:w,shopClient:F,checkoutID:G,updateShopClient:we,products:r})}))),c.a.createElement("footer",null,c.a.createElement("div",null,"keith lafuente 2021"),c.a.createElement("div",null,c.a.createElement(u.b,{to:"/about",className:"footer-link"},"about")),c.a.createElement("div",null,c.a.createElement(u.b,{to:"/faq",className:"footer-link"},"faq")),c.a.createElement("div",null,c.a.createElement("a",{href:"https://wayawaya.co/",target:"_blank",rel:"noreferrer",className:"footer-link"},"stockists")))),c.a.createElement(q,{open:W,onOpen:function(){X(!0)},onClose:function(){X(!1)},shopClient:F,categories:E}),c.a.createElement(u.b,{to:"/",className:"logo"},c.a.createElement("img",{src:A.a,alt:"Logo"})),c.a.createElement(y,{key:w,shopClient:F,checkoutID:G,checkoutURL:V,updateShopClient:we,cartSize:z,onClose:function(){return te(!1)},onOpen:function(){te(!0)},open:ee}))))}var L=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,135)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(F,null)),document.getElementById("root")),L()},44:function(e,t,a){e.exports=a.p+"static/media/shop_card_default.1f1fd608.png"},45:function(e,t,a){e.exports=a.p+"static/media/shell.554fc386.png"},46:function(e,t,a){e.exports=a.p+"static/media/keith_logo.0aaafbb1.svg"},52:function(e,t,a){e.exports=a(134)},57:function(e,t,a){},60:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.7a216f93.chunk.js.map