(this.webpackJsonpweb_cat=this.webpackJsonpweb_cat||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a.n(l),c=(a(12),a(3)),s=a(4),i=a(5),m=a(6),d=(a(13),function(e){var t=e.prompt;return r.a.createElement("div",{className:" text-center max-w-md mx-auto flex p-6 bg-gray-100 mt-10 rounded-lg mb-8 shadow-xl"},r.a.createElement("div",{className:"flex justify-center text-center ml-6 pt-1"},r.a.createElement("h1",{className:"text-center text-2xl text-blue-700 leading-tight"},t)))}),u=function(e){var t=e.handleChange,a=e.handleClick;return r.a.createElement("div",null,r.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2"},r.a.createElement("input",{onChange:t,className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"https://www.google.com/","aria-label":"url"}),r.a.createElement("button",{onClick:a,className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"button"},"Search")))},h=function(e){var t=e.word;return r.a.createElement("span",{className:"inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"},t)},g=function(e){var t=e.keywords;return r.a.createElement("div",{className:"min-w-full max-w-md rounded overflow-hidden shadow-lg "},r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-xl mb-2 text-center"},"Key Words")),r.a.createElement("div",{className:"px-6 py-4"},t.map((function(e,t){return r.a.createElement(h,{key:t,word:e})}))))},b=function(e){var t=e.websites;return r.a.createElement("div",{className:"inline-block min-w-full max-w-md rounded overflow-hidden shadow-lg "},r.a.createElement("div",{className:"px-6 py-4"},r.a.createElement("div",{className:"font-bold text-xl mb-2 text-center"},"Similar Sites")),r.a.createElement("div",{className:"text-center px-6 py-4"},t.map((function(e,t){return r.a.createElement("h3",{key:t,className:"underline text-blue-600 leading-tight"},r.a.createElement("a",{href:e},e))}))))},f=function(e){Object(m.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).fetchUrlDetails=function(){var e=n.state.url;""!==e&&(n.setState({searching:!0,searched:!0}),fetch("https://web-cat-cluster.herokuapp.com/"+e).then((function(e){return e.json()})).then((function(e){return n.setState({keywords:e.keywords||[],websites:e.websites||[],searching:!1})})))},n.handleClick=function(){n.fetchUrlDetails()},n.handleChange=function(e){n.setState({url:e.target.value})},n.state={keywords:[],websites:[],searched:!1,searching:!1,url:""},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searched,a=e.searching,n=e.keywords,l=e.websites,o=e.url;console.log(a,n);var c="";return c=!0===a?"Looking for result":!1===t?"Type a url to get info":0===n.length&&0===l.length?"something went wrong try another url":o,r.a.createElement(r.a.Fragment,null,r.a.createElement(u,{handleClick:this.handleClick,handleChange:this.handleChange}),r.a.createElement(d,{prompt:c}),r.a.createElement("div",null,0!==n.length&&r.a.createElement(g,{keywords:n}),0!==l.length&&r.a.createElement(b,{websites:l})))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(14);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.98c29ded.chunk.js.map