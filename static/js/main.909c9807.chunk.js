(this["webpackJsonplorem-ism"]=this["webpackJsonplorem-ism"]||[]).push([[0],{14:function(e){e.exports=JSON.parse('{"isms":["Always raising our level of awareness.","The inches we need are everywhere around us.","Responding with a sense of urgency is the ante to play.","Every client. Every time. No exceptions. No excuses.","Obsessed with finding a better way.","Yes before no.","Ignore the noise.","We are the \\"they\\".","It\'s not about WHO is right, it\'s about WHAT is right.","You\'ll see it when you believe it.","You have to take the roast out of the oven.","We\'ll figure it out.","Every second counts.","A penny saved is a penny.","We eat our own dogfood.","Numbers and money follow; they do not lead.","Simplicity is genius.","Do the right thing.","Innovation is awarded. Execution is worshipped."]}')},15:function(e,t,n){e.exports=n(30)},20:function(e,t,n){},21:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(1),s=n.n(r),i=(n(20),n(5)),c=n(6),u=n(8),l=n(7),m=n(2),h=n(9),p=(n(21),function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(l.a)(t).call(this))).state={icons:""},e}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.rockomni.com/mcds/assets/GlobalContent/NonStockImages/Icons/spark-core-icons-V12.svg").then((function(e){return e.text()})).then((function(t){e.setState({icons:t})})).then((function(){window.dispatchEvent(new CustomEvent("icons-loaded"))}))}},{key:"render",value:function(){var e=this.state.icons;return o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e}})}}]),t}(o.a.Component)),d=n(10),f=n(14),g=n(22),k=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).subtitleRef=o.a.createRef(),n.outputRef=o.a.createRef(),n.generateRandomIsm=n.generateRandomIsm.bind(Object(m.a)(n)),n.generateIsmBlock=n.generateIsmBlock.bind(Object(m.a)(n)),n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.subtitleRef.current.innerText=this.generateRandomIsm()}},{key:"generateRandomIsm",value:function(){var e=f.isms.join(" "),t=new g(e).start((function(e){var t=Object.keys(e).filter((function(e){return e[0]>="A"&&e[0]<="Z"}));return t[~~(Math.random()*t.length)]})).end().process()+".";return console.log(t),t}},{key:"generateIsmBlock",value:function(e){for(var t="",n=0;n<e;n++)t+=this.generateRandomIsm(),t+=" ";return t}},{key:"render",value:function(){var e=this;return o.a.createElement("main",{className:"sprk-o-CenteredColumn sprk-u-ptl"},o.a.createElement(p,null),o.a.createElement("h1",{className:"sprk-b-TypeDisplayTwo sprk-b-PageTitle"},"Lorem Ism"),o.a.createElement("h1",{ref:this.subtitleRef,className:"sprk-b-TypeDisplaySix sprk-u-mtl"},"Random ism here"),o.a.createElement("hr",null),o.a.createElement(d.a,{additionalClasses:"sprk-u-mrm",onClick:function(){e.outputRef.current.innerText=e.generateIsmBlock(1)}},"Make me an ISM"),o.a.createElement(d.a,{additionalClasses:"sprk-u-mrm",onClick:function(){e.outputRef.current.innerText=e.generateIsmBlock(10)}},"A paragraph"),o.a.createElement(d.a,{additionalClasses:"sprk-u-mrm",onClick:function(){e.outputRef.current.innerText=e.generateIsmBlock(10)+"\n\n"+e.generateIsmBlock(10)+"\n\n"+e.generateIsmBlock(10)}},"3 paragraphs"),o.a.createElement("p",{ref:this.outputRef,className:"sprk-u-pvl"},"output goes here"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[15,1,2]]]);
//# sourceMappingURL=main.909c9807.chunk.js.map