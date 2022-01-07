(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t){},119:function(e,t){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(38),l=a.n(r),o=(a(57),a(39)),i=a(51),s=a(2),u=a(5),m=a(1),d=a(47),f=a(40),v=a.n(f),b=a(41),p=a(44),g=a.n(p);var h=function(e){var t=e.title,a=e.image,n=e.price,r=e.sold;return c.a.createElement("div",{className:"card-container"},c.a.createElement("img",{className:"card-image-underlay",alt:t||"",style:{width:"82%",left:"7%"},src:a.src}),c.a.createElement("img",{alt:t||"",className:"card-graphic-overlay",src:g.a}),c.a.createElement("div",{className:"card-text-overlay"},c.a.createElement("div",{className:"card-title"},t),r?c.a.createElement("div",{className:"card-price card-sold-out"},"Sold\nout"):c.a.createElement("div",{className:"card-price"},"$".concat(n.split(".")[0]))))};var E=function(e){var t=e.products,a=e.categories,r=Object(m.g)().id,l=Object(n.useState)(t),o=Object(s.a)(l,2),i=o[0],d=o[1],f=Object(n.useState)([]),v=Object(s.a)(f,2),b=v[0],p=v[1];return Object(n.useEffect)(function(){void 0!==r&&void 0!==a[r]?d(a[r]):d(t);var e=t.map(function(){return e=-.8,t=.8,Math.random()*(t-e)+e;var e,t});p(e)},[r,t,a]),c.a.createElement("div",{className:"products-grid"},i.map(function(e,t){return c.a.createElement(u.b,{key:t,to:"/product/".concat(e.handle)},c.a.createElement("div",{className:"product-card",style:{transform:"rotate(".concat(b[t],"deg)")}},c.a.createElement(h,{key:t,title:e.title,image:e.images[0],price:e.variants[0].price,sold:!e.variants[0].available})))}))};var y=function(e){var t=e.shopClient,a=e.checkoutID,r=e.checkoutURL,l=e.updateShopClient,o=e.onClose,i=e.open,u=e.onOpen,m=Object(n.useState)([]),d=Object(s.a)(m,2),f=d[0],v=d[1];return Object(n.useEffect)(function(){a&&t&&t.checkout.fetch(a).then(function(e){console.log(e),v([])})},[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"cart-button",onClick:i?o:u},i?"close":"bag"),i&&c.a.createElement("div",{className:"cartCancelArea",onClick:o}),c.a.createElement("div",{className:"cart ".concat(i?"cart-open":"cart-closed")},c.a.createElement("div",{style:{display:"flex",width:"100%",flexDirection:"row",justifyContent:"space-between"}},c.a.createElement("div",null,"bag")),c.a.createElement("div",null,f.map(function(e,n){return c.a.createElement("div",{key:n},c.a.createElement("div",null,e.title),c.a.createElement("div",null,"$",e.variant.price),"Buy now button",c.a.createElement("div",{style:{cursor:"pointer",fontWeight:"bold"},onClick:function(){!function(e){var n=[e];t&&t.checkout.removeLineItems(a,n).then(function(){l()})}(e.id)}},"Remove from cart"),c.a.createElement("img",{alt:e.title,style:{width:300},src:e.variant.image.src}))})),c.a.createElement("a",{href:r,target:"_blank",rel:"noreferrer",className:"checkoutButton"},"CHECKOUT")))};function O(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return j(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return j(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(o)throw r}}}}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var k=function(e){var t=Object(m.g)().id,a=e.products,r=e.shopClient,l=e.checkoutID,o=e.updateShopClient,i=Object(n.useState)(0),u=Object(s.a)(i,2),d=u[0],f=u[1],v=Object(n.useState)(null),b=Object(s.a)(v,2),p=b[0],g=b[1],E=Object(n.useState)(0),y=Object(s.a)(E,2),j=y[0],k=y[1],S=Object(n.useState)(!1),N=Object(s.a)(S,2),w=N[0],C=N[1],I=Object(n.useState)(!1),x=Object(s.a)(I,2),A=x[0],q=x[1],D=Object(n.useState)(!0),L=Object(s.a)(D,2),U=L[0],T=L[1];return Object(n.useEffect)(function(){var e,n=O(a);try{for(n.s();!(e=n.n()).done;){var c=e.value;c.handle===t&&g(c)}}catch(r){n.e(r)}finally{n.f()}},[t,a]),Object(n.useEffect)(function(){null!=p&&p.variants.length>j&&(!1===p.variants[j].available?T(!1):T(!0))},[p,j]),Object(n.useEffect)(function(){null!=p&&void 0!==p.images&&(p.images.forEach(function(e){(new Image).src=e.src}),C(d-1>=0),q(d+1<p.images.length))},[p,d]),null==p?c.a.createElement("div",null,"loading..."):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"detailLeftCol"},c.a.createElement("div",{className:"detail-card"},c.a.createElement(h,{title:p.title,image:p.images[d],price:p.variants[j].price,sold:!p.variants[j].available}),c.a.createElement("div",{className:"carousel-dots"},p.images.length>1&&p.images.map(function(e,t){return c.a.createElement("div",{key:t,className:"carousel-dot-touch-target",onClick:function(){f(t)}},c.a.createElement("div",{key:"index",className:"".concat(t===d?"selected-carousel-dot":"carousel-dot")}))}))),w&&c.a.createElement("div",{className:"prev-button",onClick:function(){f(d-1),C(d-1>=0),q(d+1<p.images.length)}}),A&&c.a.createElement("div",{className:"next-button",onClick:function(){f(d+1),C(d-1>=0),q(d+1<p.images.length)}})),c.a.createElement("div",{className:"detail-right-col"},c.a.createElement("div",{className:"menu-divider"}),c.a.createElement("div",{className:"detail-section",style:{fontWeight:600}},p.title),c.a.createElement("div",{className:"detail-section"},p.description),p.variants.length<=1&&c.a.createElement("div",{className:"detail-section"},"$",p.variants[j].price),p.variants.length>1&&c.a.createElement("div",{className:"detail-variants"},c.a.createElement("select",{value:j,onChange:function(e){k(e.target.value)}},p.variants.map(function(e,t){return e.available?c.a.createElement("option",{value:t,key:t},e.title," - $",e.price):c.a.createElement("option",{disabled:!0,value:t,key:t},e.title," (sold out)")}))),c.a.createElement("div",{className:U?"add-to-bag-button detail-section":"add-to-bag-button-disabled detail-section",onClick:function(){!function(e){var t=[{variantId:e,quantity:1}];r&&r.checkout.addLineItems(l,t).then(function(){o()})}(p.variants[j].id)}}," ",U?"Add to bag":"Sold Out")))};var S=function(e){var t=e.about,a=e.instagram,n=e.email;return c.a.createElement("div",{className:"about-container"},c.a.createElement("div",{className:"about-text"},t),c.a.createElement("div",{className:"email"},n),c.a.createElement("a",{className:"ig-link",target:"_blank",rel:"noreferrer",href:"https://instagram.com/".concat(a)},"@",a))};var N=function(e){var t=e.faqs;return c.a.createElement("div",{className:"faq"},t.map(function(e,t){return c.a.createElement("div",{key:t},c.a.createElement("div",{className:"faq-question"},e.question),c.a.createElement("div",{className:"faq-answer"},e.answer))}))},w=a(45),C=a.n(w);var I,x=function(e){var t=e.onClose,a=e.onOpen,n=e.open,r=e.categories;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"menu-button",onClick:n?t:a},c.a.createElement("img",{src:C.a,alt:"Menu"}),c.a.createElement("div",{className:"menu-button-text"},"Menu")),c.a.createElement("div",{className:"menu ".concat(n?"menu-open":"menu-closed")},c.a.createElement("div",{className:"menu-content"},Object.keys(r||{}).map(function(e,t){return c.a.createElement("div",{className:"menu-link",key:t},c.a.createElement(u.b,{to:"/collection/".concat(e)},e))}),c.a.createElement("div",{className:"menu-divider"}),c.a.createElement(u.b,{to:"/about",className:"menu-link"},"contact"))),n&&c.a.createElement("div",{className:"menuCancelArea",onClick:t}))},A=a(46),q=a.n(A);a(60);function D(e,t){var a="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(!e)return;if("string"===typeof e)return L(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return L(e,t)}(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var n=0,c=function(){};return{s:c,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,l=!0,o=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return l=e.done,e},e:function(e){o=!0,r=e},f:function(){try{l||null==a.return||a.return()}finally{if(o)throw r}}}}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function U(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),r=t[0],l=t[1],f=Object(n.useState)({}),p=Object(s.a)(f,2),g=p[0],h=p[1],O=Object(n.useState)(Date.now()),j=Object(s.a)(O,2),w=j[0],C=j[1],A=Object(n.useState)(void 0),L=Object(s.a)(A,2),U=L[0],T=L[1],F=Object(n.useState)(localStorage.getItem("checkoutID")),_=Object(s.a)(F,2),G=_[0],M=_[1],$=Object(n.useState)(localStorage.getItem("checkoutURL")),B=Object(s.a)($,2),K=B[0],P=B[1],R=Object(n.useState)(void 0),V=Object(s.a)(R,2),z=V[0],H=V[1],J=Object(n.useState)(!1),Q=Object(s.a)(J,2),W=Q[0],X=Q[1],Y=Object(n.useState)(!1),Z=Object(s.a)(Y,2),ee=Z[0],te=Z[1],ae=Object(n.useState)(""),ne=Object(s.a)(ae,2),ce=ne[0],re=ne[1],le=Object(n.useState)([]),oe=Object(s.a)(le,2),ie=oe[0],se=oe[1],ue=Object(n.useState)(""),me=Object(s.a)(ue,2),de=me[0],fe=me[1],ve=Object(n.useState)("@keith _lafuente"),be=Object(s.a)(ve,2),pe=be[0],ge=be[1],he=Object(n.useState)("keithlafuente@gmail.com"),Ee=Object(s.a)(he,2),ye=Ee[0],Oe=Ee[1],je=Object(n.useState)("\ud83d\udc1a"),ke=Object(s.a)(je,2),Se=ke[0],Ne=ke[1];Object(n.useEffect)(function(){U&&U.product.fetchAll().then(function(e){var t,a={},n=D(e=e.reverse());try{for(n.s();!(t=n.n()).done;){var c=t.value;void 0!==a[c.productType]?a[c.productType]=[].concat(Object(i.a)(a[c.productType]),[c]):a[c.productType]=[c]}}catch(r){n.e(r)}finally{n.f()}h(a),l(e)})},[U]),Object(n.useEffect)(function(){var e=v.a.buildClient({domain:"keith-lafuente.myshopify.com",storefrontAccessToken:"a165f8cd9bfb68ec8b9cf39f2545dc5b"});T(e),C(Date.now()),G&&K?e.checkout.fetch(G).then(function(e){if(null===e)Ie();else{var t=0;e.lineItems.map(function(e){return t+=e.quantity,e}),H(t)}}):Ie();var t=a(61);t.configure({endpointUrl:"https://api.airtable.com",apiKey:"keyCVfnd8GGLw029l"});var n=t.base("appUHQ9x9G0OAVdwX");n("Design").select({view:"Grid view"}).firstPage(function(e,t){if(e)console.error(e);else{var a=[];t.forEach(function(e){var t=e.get("Key"),n=e.get("Value (Color)"),c=e.get("Value (Image)");t&&n&&a.push("".concat(t+"-color",": ").concat(n,";")),t&&c&&c.length>0&&a.push("".concat(t+"-image",": url(").concat(c[0].url,");"))});var n=a.join("\n");re(n)}}),n("Faq").select({view:"Grid view"}).firstPage(function(e,t){if(e)console.error(e);else{var a=[];t.forEach(function(e){var t=e.get("Question"),n=e.get("Answer");t&&n&&a.push({question:t,answer:n})}),se(a)}}),n("About").select({view:"Grid view"}).firstPage(function(e,t){e?console.error(e):t.forEach(function(e){var t=e.get("Key"),a=e.get("Value");"about"===t?fe(a):"instagram"===t?ge(a):"email"===t?Oe(a):"favicon"===t&&Ne(a)})})},[]);var we=function(){C(Date.now())},Ce=Object(d.a)(I||(I=Object(o.a)(["\n    body {\n      ","\n    }\n  "])),function(e){return e.globalCss}),Ie=function(){U.checkout.create().then(function(e){M(e.id),P(e.webUrl),H(0),we(),localStorage.setItem("checkoutID",e.id),localStorage.setItem("checkoutURL",e.webUrl)})};return c.a.createElement(c.a.Fragment,null,c.a.createElement(b.a,null,c.a.createElement("title",null,"Keith Lafuente"),c.a.createElement("link",{rel:"icon",href:"data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>".concat(Se,"</text></svg>"),sizes:"16x16"})),c.a.createElement(Ce,{globalCss:ce}),c.a.createElement(u.a,{basename:"/"},c.a.createElement("div",null,c.a.createElement("div",{className:"background"}),c.a.createElement("div",{className:"page"},c.a.createElement(m.c,null,c.a.createElement(m.a,{path:"/product/:id",element:c.a.createElement(k,{key:w,shopClient:U,checkoutID:G,updateShopClient:we,products:r})}),c.a.createElement(m.a,{path:"/collection/:id",element:c.a.createElement(E,{key:w,shopClient:U,checkoutID:G,updateShopClient:we,products:r,categories:g})}),c.a.createElement(m.a,{path:"about",element:c.a.createElement(S,{about:de,instagram:pe,email:ye})}),c.a.createElement(m.a,{path:"faq",element:c.a.createElement(N,{faqs:ie})}),c.a.createElement(m.a,{path:"/",element:c.a.createElement(E,{key:w,shopClient:U,checkoutID:G,updateShopClient:we,products:r})})),c.a.createElement("footer",null,c.a.createElement("div",null,"keith lafuente 2021"),c.a.createElement("div",null,c.a.createElement(u.b,{to:"/about",className:"footer-link"},"about")),c.a.createElement("div",null,c.a.createElement(u.b,{to:"/faq",className:"footer-link"},"faq")),c.a.createElement("div",null,c.a.createElement("a",{href:"https://wayawaya.co/",target:"_blank",rel:"noreferrer",className:"footer-link"},"stockists")))),c.a.createElement(x,{open:W,onOpen:function(){X(!0)},onClose:function(){X(!1)},shopClient:U,categories:g}),c.a.createElement(u.b,{to:"/",className:"logo"},c.a.createElement("img",{src:q.a,alt:"Logo"})),c.a.createElement(y,{key:w,shopClient:U,checkoutID:G,checkoutURL:K,updateShopClient:we,cartSize:z,onClose:function(){return te(!1)},onOpen:function(){te(!0)},open:ee}))))}var T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,135)).then(function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),c(e),r(e),l(e)})};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(U,null)),document.getElementById("root")),T()},44:function(e,t,a){e.exports=a.p+"static/media/shop_card_default.1f1fd608.png"},45:function(e,t,a){e.exports=a.p+"static/media/shell.554fc386.png"},46:function(e,t,a){e.exports=a.p+"static/media/keith_logo.0aaafbb1.svg"},52:function(e,t,a){e.exports=a(134)},57:function(e,t,a){},60:function(e,t,a){}},[[52,1,2]]]);
//# sourceMappingURL=main.711adf83.chunk.js.map