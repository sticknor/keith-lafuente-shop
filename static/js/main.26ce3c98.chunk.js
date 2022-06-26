(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{117:function(e,t){},118:function(e,t){},133:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(39),l=a.n(r),i=(a(56),a(40)),o=a(6),s=a(1),u=a(4),m=a(2),d=a(46),f=a(41),v=a.n(f),E=a(42),p=a(50);var b=function(e){var t=e.title,a=e.image,n=e.price,r=e.sold;return c.a.createElement("div",{className:"card-container"},c.a.createElement("img",{className:"card-image-underlay",alt:t||"",style:{width:"82%",left:"7%"},src:a.src}),c.a.createElement("div",{alt:t||"",className:"card-graphic-overlay"}),c.a.createElement("div",{className:"card-text-overlay"},c.a.createElement("div",{className:"card-title"},t),r?c.a.createElement("div",{className:"card-price card-sold-out"},"Sold\nout"):c.a.createElement("div",{className:"card-price"},"$".concat(n.split(".")[0]))))};var g=function(e){var t=e.products,a=e.categories,r=Object(m.g)(),l=r.id,i=r.query,o=Object(n.useState)(t),d=Object(s.a)(o,2),f=d[0],v=d[1],E=Object(n.useState)([]),g=Object(s.a)(E,2),h=g[0],y=g[1];return Object(n.useEffect)(function(){if(void 0!==l&&void 0!==a[l])v(a[l]);else if(void 0!==i){var e=new p.a(t,{keys:[{name:"description",weight:.4},{name:"handle",weight:.4},{name:"productType",weight:1},{name:"title",weight:1}],includeScore:!0}).search(i).filter(function(e){return e.score<.5}).map(function(e){return e.item});v(e)}else v(t);var n=t.map(function(){return e=-.8,t=.8,Math.random()*(t-e)+e;var e,t});y(n)},[l,i,t,a]),c.a.createElement("div",{className:"products-grid"},!(""===i||void 0===i)&&0===f.length&&c.a.createElement("div",null,"no results"),f.map(function(e,t){return c.a.createElement(u.b,{key:t,to:"/product/".concat(e.handle)},c.a.createElement("div",{className:"product-card",style:{transform:"rotate(".concat(h[t],"deg)")}},c.a.createElement(b,{key:t,title:e.title,image:e.images[0],price:e.variants[0].price,sold:!e.variants[0].available})))}))};var h=function(e){var t=e.shopClient,a=e.checkoutID,r=e.checkoutURL,l=e.updateShopClient,i=e.onClose,o=e.open,u=e.onOpen,m=Object(n.useState)([]),d=Object(s.a)(m,2),f=d[0],v=d[1],E=Object(n.useState)(void 0),p=Object(s.a)(E,2),b=p[0],g=p[1],h=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});Object(n.useEffect)(function(){a&&t&&t.checkout.fetch(a).then(function(e){v(e.lineItems),g(e.lineItemsSubtotalPrice.amount)})},[]);var y=f.map(function(e){return e.quantity}).reduce(function(e,t){return e+t},0),k=c.a.createElement("div",{className:"bag-icon"},c.a.createElement("div",{className:"cart-size"},y));return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cart-button",onClick:o?i:u},c.a.createElement(c.a.Fragment,null,o&&"close",!o&&k)),o&&c.a.createElement("div",{className:"cartCancelArea",onClick:i}),c.a.createElement("div",{className:"cart ".concat(o?"cart-open":"cart-closed")},c.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between"}},k),c.a.createElement("div",{className:"cart-products-container"},f.map(function(e,n){return c.a.createElement("div",{key:n,className:"cart-product"},c.a.createElement("div",{className:"cart-product-info"},c.a.createElement("img",{alt:e.title,src:e.variant.image.src,className:"cart-product-image"}),c.a.createElement("div",null,c.a.createElement("div",{className:"cart-product-title"},e.title,e.variant&&"Default Title"!==e.variant.title?" (".concat(e.variant.title,")"):""),c.a.createElement("div",{className:"cart-product-remove",style:{cursor:"pointer",fontWeight:"bold"},onClick:function(){!function(e){var n=[e];t&&t.checkout.removeLineItems(a,n).then(function(){l()})}(e.id)}},"remove"))),c.a.createElement("div",{className:"cart-product-quantity"},e.quantity),c.a.createElement("div",null,h.format(e.variant.price)))})),f.length>0?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"subtotal"},"subtotal",c.a.createElement("div",null,h.format(b))),c.a.createElement("a",{href:r,target:"_blank",rel:"noreferrer",className:"checkoutButton"},"CHECKOUT"),c.a.createElement("div",{className:"checkout-note"},"shipping & taxes calculated at checkout")):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"subtotal"},"empty"))))},y=a(45);function k(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw r}}}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var O=function(e){var t=Object(m.g)().id,a=e.products,r=e.shopClient,l=e.checkoutID,i=e.updateShopClient,o=e.openCart,u=Object(n.useState)(0),d=Object(s.a)(u,2),f=d[0],v=d[1],E=Object(n.useState)(null),p=Object(s.a)(E,2),g=p[0],h=p[1],N=Object(n.useState)(0),O=Object(s.a)(N,2),j=O[0],S=O[1],w=Object(n.useState)(!0),C=Object(s.a)(w,2),I=C[0],q=C[1],T=Object(n.useState)(!1),F=Object(s.a)(T,2),A=F[0],x=F[1];Object(n.useEffect)(function(){var e,n=k(a);try{for(n.s();!(e=n.n()).done;){var c=e.value;c.handle===t&&h(c)}}catch(r){n.e(r)}finally{n.f()}},[t,a]),Object(n.useEffect)(function(){null!=g&&g.variants.length>j&&(!1===g.variants[j].available?q(!1):q(!0))},[g,j]),Object(n.useEffect)(function(){null!=g&&void 0!==g.images&&g.images.forEach(function(e){(new Image).src=e.src})},[g,f]);var D=function(e){x(!0),U(e),setTimeout(function(){x(!1),o()},1e3)},U=function(e){var t=[{variantId:e,quantity:1}];r&&r.checkout.addLineItems(l,t).then(function(){i()})},L=function(e){S(e.target.value)},P=function(){1!==g.images.length&&v((f+1)%g.images.length)},G=Object(y.useSwipeable)({onSwipedLeft:P,onSwipedRight:function(){1!==g.images.length&&v((f+g.images.length-1)%g.images.length)},config:{delta:2,preventDefaultTouchmoveEvent:!0,trackTouch:!0,trackMouse:!1}});return null==g?c.a.createElement("div",null,"loading..."):c.a.createElement("div",{className:"detailContainer"},c.a.createElement("div",{className:"detailLeftCol"},c.a.createElement("div",Object.assign({className:"detail-card"},G,{onClick:P}),c.a.createElement(b,{title:g.title,image:g.images[f],price:g.variants[j].price,sold:!g.variants[j].available}),c.a.createElement("div",{className:"carousel-dots"},g.images.length>1&&g.images.map(function(e,t){return c.a.createElement("div",{key:t,className:"carousel-dot-touch-target",onClick:function(){v(t)}},c.a.createElement("div",{key:"index",className:"".concat(t===f?"selected-carousel-dot":"carousel-dot")}))}))),c.a.createElement("div",{className:"detail-right-col-mobile"},c.a.createElement("div",{className:"menu-divider"}),c.a.createElement("div",{className:"detail-section",style:{fontWeight:600}},g.title),c.a.createElement("div",{className:"detail-section"},g.description),g.variants.length<=1&&c.a.createElement("div",{className:"detail-section"},"$",g.variants[j].price),g.variants.length>1&&c.a.createElement("div",{className:"detail-variants"},c.a.createElement("select",{value:j,onChange:L},g.variants.map(function(e,t){return e.available?c.a.createElement("option",{value:t,key:t},e.title," - $",e.price):c.a.createElement("option",{disabled:!0,value:t,key:t},e.title," (sold out)")}))),A?c.a.createElement("div",{className:"add-to-bag-button-disabled detail-section"},"adding"):c.a.createElement("div",{className:I?"add-to-bag-button detail-section":"add-to-bag-button-disabled detail-section",onClick:function(){D(g.variants[j].id)}}," ",I?"Add to bag":"Sold Out"))),c.a.createElement("div",{className:"detail-right-col"},c.a.createElement("div",{className:"menu-divider"}),c.a.createElement("div",{className:"detail-section",style:{fontWeight:600}},g.title),c.a.createElement("div",{className:"detail-section"},g.description),g.variants.length<=1&&c.a.createElement("div",{className:"detail-section"},"$",g.variants[j].price),g.variants.length>1&&c.a.createElement("div",{className:"detail-variants"},c.a.createElement("select",{value:j,onChange:L},g.variants.map(function(e,t){return e.available?c.a.createElement("option",{value:t,key:t},e.title," - $",e.price):c.a.createElement("option",{disabled:!0,value:t,key:t},e.title," (sold out)")}))),A?c.a.createElement("div",{className:"add-to-bag-button-disabled detail-section"},"adding"):c.a.createElement("div",{className:I?"add-to-bag-button detail-section":"add-to-bag-button-disabled detail-section",onClick:function(){D(g.variants[j].id)}}," ",I?"Add to bag":"Sold Out")))};var j=function(e){var t=e.about,a=e.instagram,n=e.email;return c.a.createElement("div",{className:"about-container"},c.a.createElement("div",{className:"about-content"},c.a.createElement("div",{className:"about-title"},"about"),c.a.createElement("div",{className:"about-text"},t),c.a.createElement("div",{className:"email"},n),c.a.createElement("a",{className:"ig-link",target:"_blank",rel:"noreferrer",href:"https://instagram.com/".concat(a)},"@",a)))};var S=function(e){var t=e.faqs;return c.a.createElement("div",{className:"faq"},c.a.createElement("div",{className:"faq-content"},c.a.createElement("div",{className:"faq-title"},"faq"),t.map(function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",{className:"faq-question"},e.question),c.a.createElement("div",{className:"faq-answer"},e.answer))})))};var w=function(e){var t=e.stockists;return c.a.createElement("div",{className:"template-container"},c.a.createElement("div",{className:"template-content"},c.a.createElement("div",{className:"template-title"},"stockists"),c.a.createElement("div",null,t.map(function(e,t){return c.a.createElement("a",{key:t,className:"stockist-link",href:e.link,target:"_blank",rel:"noreferrer noopener"},e.name)}))))};var C=function(e){var t=e.filipino;return c.a.createElement("div",{className:"template-container"},c.a.createElement("div",{className:"template-content"},c.a.createElement("div",{className:"template-title"},"filipino"),c.a.createElement("div",null,t.map(function(e,t){return c.a.createElement("p",{key:t},e)}))))};var I=function(){return c.a.createElement("div",{className:"template-container"},c.a.createElement("div",{className:"template-content"},c.a.createElement("div",{className:"template-title"},"PUT TITLE HERE"),c.a.createElement("div",null,"PUT CONTENT HERE")))};var q=function(e){var t=e.onClose,a=e.onOpen,n=e.open,r=e.categories;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"menu-button",onClick:n?t:a},c.a.createElement("div",{className:"menu-button-text"},"Menu")),c.a.createElement("div",{className:"menu ".concat(n?"menu-open":"menu-closed")},c.a.createElement("div",{className:"menu-content"},Object.keys(r||{}).map(function(e,t){return c.a.createElement("div",{className:"menu-link",key:t},c.a.createElement(u.b,{to:"/collection/".concat(e)},e))}),c.a.createElement("div",{className:"menu-divider"}),c.a.createElement(u.b,{to:"/about",className:"menu-link"},"about"),c.a.createElement(u.b,{to:"/faq",className:"menu-link"},"faq"),c.a.createElement(u.b,{to:"/stockists",className:"menu-link"},"stockists"),c.a.createElement(u.b,{to:"/filipino",className:"menu-link"},"filipino"))),n&&c.a.createElement("div",{className:"menuCancelArea",onClick:t}))};function T(){return c.a.createElement("footer",null,c.a.createElement("div",{className:"footer-shape"}),c.a.createElement("div",{className:"footer-name"},"keith lafuente 2021"),c.a.createElement(u.b,{to:"/about",className:"footer-link footer-link-1"},c.a.createElement("div",null,"about")),c.a.createElement(u.b,{to:"/stockists",className:"footer-link footer-link-2"},c.a.createElement("div",null,"stockists")),c.a.createElement(u.b,{to:"/faq",className:"footer-link footer-link-3"},c.a.createElement("div",null,"faq")))}function F(){var e=Object(m.f)(),t=Object(n.useState)(!1),a=Object(s.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)(""),o=Object(s.a)(i,2),u=o[0],d=o[1],f=function(){r?""===u?(l(!1),e("/")):e("search/".concat(u)):l(!0)};return c.a.createElement("div",{className:"search-bar header-links"},r&&c.a.createElement("form",{onSubmit:f},c.a.createElement("input",{type:"text",placeholder:"search",onChange:function(e){d(e.target.value)}}),c.a.createElement("button",{type:"reset",onClick:function(){d("")}},"\xd7")),c.a.createElement("div",{onClick:f}))}var A=function(e){var t=Object(m.e)();return Object(n.useEffect)(function(){window.scrollTo(0,0),document.querySelector(".page").scrollTo(0,0)},[t]),c.a.createElement(c.a.Fragment,null,e.children," ")};A.propTypes={children:c.a.Children};var x,D=A;a(59);function U(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return L(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return L(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,i=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){i=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(i)throw r}}}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function P(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],l=t[1],f=Object(n.useState)({}),p=Object(s.a)(f,2),b=p[0],y=p[1],k=Object(n.useState)(Date.now()),N=Object(s.a)(k,2),A=N[0],L=N[1],P=Object(n.useState)(void 0),G=Object(s.a)(P,2),R=G[0],$=G[1],M=Object(n.useState)(void 0),K=Object(s.a)(M,2),V=K[0],z=K[1],B=Object(n.useState)(!1),H=Object(s.a)(B,2),_=H[0],W=H[1],J=Object(n.useState)(!1),Q=Object(s.a)(J,2),X=Q[0],Y=Q[1],Z=Object(n.useState)(localStorage.getItem("checkoutID")),ee=Object(s.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(localStorage.getItem("checkoutURL")),ce=Object(s.a)(ne,2),re=ce[0],le=ce[1],ie=Object(n.useState)(""),oe=Object(s.a)(ie,2),se=oe[0],ue=oe[1],me=Object(n.useState)([]),de=Object(s.a)(me,2),fe=de[0],ve=de[1],Ee=Object(n.useState)([]),pe=Object(s.a)(Ee,2),be=pe[0],ge=pe[1],he=Object(n.useState)([]),ye=Object(s.a)(he,2),ke=ye[0],Ne=ye[1],Oe=Object(n.useState)(""),je=Object(s.a)(Oe,2),Se=je[0],we=je[1],Ce=Object(n.useState)("@keith _lafuente"),Ie=Object(s.a)(Ce,2),qe=Ie[0],Te=Ie[1],Fe=Object(n.useState)("keithlafuente@gmail.com"),Ae=Object(s.a)(Fe,2),xe=Ae[0],De=Ae[1],Ue=Object(n.useState)("\ud83d\udc1a"),Le=Object(s.a)(Ue,2),Pe=Le[0],Ge=Le[1];Object(n.useEffect)(function(){R&&R.product.fetchAll().then(function(e){var t,a={},n=U(e=e.reverse());try{for(n.s();!(t=n.n()).done;){var c=t.value;void 0!==a[c.productType]?a[c.productType]=[].concat(Object(o.a)(a[c.productType]),[c]):a[c.productType]=[c]}}catch(r){n.e(r)}finally{n.f()}y(a),l(e)})},[R]),Object(n.useEffect)(function(){var e=v.a.buildClient({domain:"keith-lafuente.myshopify.com",storefrontAccessToken:"a165f8cd9bfb68ec8b9cf39f2545dc5b"});$(e),L(Date.now()),te&&re?e.checkout.fetch(te).then(function(t){if(null===t)$e(e);else{var a=0;t.lineItems.map(function(e){return a+=e.quantity,e}),z(a)}}):$e(e);var t=a(60);t.configure({endpointUrl:"https://api.airtable.com",apiKey:"keyCVfnd8GGLw029l"});var n=t.base("appUHQ9x9G0OAVdwX");n("Design").select({view:"Grid view"}).firstPage(function(e,t){if(e)console.error(e);else{var a=[];t.forEach(function(e){var t=e.get("Key"),n=e.get("Value (Color)"),c=e.get("Value (Image)");t&&n&&a.push("".concat(t+"-color",": ").concat(n,";")),t&&c&&c.length>0&&a.push("".concat(t+"-image",": url(").concat(c[0].url,");"))}),console.log(a);var n=a.join("\n");ue(n)}}),n("Faq").select({view:"Grid view"}).firstPage(function(e,t){if(e)console.error(e);else{var a=[];t.forEach(function(e){var t=e.get("Question"),n=e.get("Answer");t&&n&&a.push({question:t,answer:n})}),ve(a)}}),n("About").select({view:"Grid view"}).firstPage(function(e,t){e?console.error(e):t.forEach(function(e){var t=e.get("Key"),a=e.get("Value");"about"===t?we(a):"instagram"===t?Te(a):"email"===t?De(a):"favicon"===t&&Ge(a)})}),n("Stockists").select({view:"Grid view"}).firstPage(function(e,t){if(e)console.error(e);else{var a=[];t.forEach(function(e){var t=e.get("Name"),n=e.get("Link");t&&n&&a.push({name:t,link:n})}),ge(a)}}),n("Filipino").select({view:"Grid view"}).firstPage(function(e,t){if(e)console.error(e);else{var a=[];t.forEach(function(e){var t=e.get("Paragraph");t&&a.push(t)}),Ne(a)}})},[]);var Re=function(){L(Date.now())},$e=function(e){e.checkout.create().then(function(e){ae(e.id),le(e.webUrl),z(0),Re(),localStorage.setItem("checkoutID",e.id),localStorage.setItem("checkoutURL",e.webUrl)})},Me=Object(d.a)(x||(x=Object(i.a)(["\n    body {\n      ","\n    }\n  "])),function(e){return e.globalCss});return c.a.createElement(c.a.Fragment,null,c.a.createElement(E.a,null,c.a.createElement("title",null,"Keith Lafuente"),c.a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>".concat(Pe,"</text></svg>"),sizes:"16x16"})),c.a.createElement(Me,{globalCss:se}),c.a.createElement(u.a,{basename:"/"},c.a.createElement(D,null,c.a.createElement("div",{className:"background"}),c.a.createElement("div",{className:"page"},c.a.createElement("div",{className:"pageContent"},c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/product/:id",element:c.a.createElement(O,{key:A,shopClient:R,checkoutID:te,updateShopClient:Re,products:r,openCart:function(){return Y(!0)}})}),c.a.createElement(m.a,{path:"/collection/:id",element:c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{key:A,shopClient:R,checkoutID:te,updateShopClient:Re,products:r,categories:b}),c.a.createElement(T,null))}),c.a.createElement(m.a,{path:"/search/:query",element:c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{key:A,shopClient:R,checkoutID:te,updateShopClient:Re,products:r,categories:b}),c.a.createElement(T,null))}),c.a.createElement(m.a,{path:"about",element:c.a.createElement(c.a.Fragment,null,c.a.createElement(j,{about:Se,instagram:qe,email:xe}),c.a.createElement(T,null))}),c.a.createElement(m.a,{path:"faq",element:c.a.createElement(c.a.Fragment,null,c.a.createElement(S,{faqs:fe}),c.a.createElement(T,null))}),c.a.createElement(m.a,{path:"stockists",element:c.a.createElement(c.a.Fragment,null,c.a.createElement(w,{stockists:be}),c.a.createElement(T,null))}),c.a.createElement(m.a,{path:"filipino",element:c.a.createElement(c.a.Fragment,null,c.a.createElement(C,{filipino:ke}),c.a.createElement(T,null))}),c.a.createElement(m.a,{path:"template",element:c.a.createElement(c.a.Fragment,null,c.a.createElement(I,null),c.a.createElement(T,null))}),c.a.createElement(m.a,{path:"/",element:c.a.createElement(c.a.Fragment,null,c.a.createElement(g,{key:A,shopClient:R,checkoutID:te,updateShopClient:Re,products:r}),c.a.createElement(T,null))})))),c.a.createElement(q,{open:_,onOpen:function(){W(!0)},onClose:function(){W(!1)},shopClient:R,categories:b}),c.a.createElement(u.b,{to:"/",className:"logo"},c.a.createElement("div",null)),c.a.createElement(F,null),c.a.createElement(h,{key:A,shopClient:R,checkoutID:te,checkoutURL:re,updateShopClient:Re,cartSize:V,onClose:function(){return Y(!1)},onOpen:function(){Y(!0)},open:X}))))}var G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,134)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(P,null)),document.getElementById("root")),G()},51:function(e,t,a){e.exports=a(133)},56:function(e,t,a){},59:function(e,t,a){}},[[51,1,2]]]);
//# sourceMappingURL=main.26ce3c98.chunk.js.map