(this["webpackJsonpreact-sports-game-assessment"]=this["webpackJsonpreact-sports-game-assessment"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/Basketball_Bounce_Sound_Effect.6247aedc.mp3"},function(e,t,a){e.exports=a.p+"static/media/Basketball_Net_Swish_Sound_Effect.89703d43.mp3"},function(e,t,a){e.exports=a.p+"static/media/Pacman_Eating_Cherry_Sound_Effect.a86fee25.mp3"},function(e,t,a){e.exports=a.p+"static/media/Lebron-blockers.f69610da.jpeg"},function(e,t,a){e.exports=a.p+"static/media/CP3-Stealers.a61e9787.jpg"},function(e,t,a){e.exports=a.p+"static/media/Steph-Shooters.e1de8abe.jpg"},function(e,t,a){e.exports=a.p+"static/media/MJ-Dunkers.dfec87d0.jpg"},,,function(e,t,a){e.exports=a(22)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(2),r=a.n(o),m=(a(20),a(21),a(3)),c=a(4),l=a(5),i=a(14),u=a(13);var h=function(e){return s.a.createElement("div",{className:"ScoreBoard"},s.a.createElement("div",{className:"teamStats"},s.a.createElement("h3",null,"AWAY"),s.a.createElement("h3",null,e.awayTeamStats.points)),s.a.createElement("h3",null,"SCOREBOARD"),s.a.createElement("div",{className:"teamStats"},s.a.createElement("h3",null,"HOME"),s.a.createElement("h3",null,e.homeTeamStats.points)))};var p=function(e){var t;if(e.stats.shots){var a=Math.round(e.stats.points/e.stats.shots*100);t=s.a.createElement("div",null,s.a.createElement("strong",null,"Shooting %: ",a," "))}return s.a.createElement("div",{className:"Team"},s.a.createElement("h2",null,e.name),s.a.createElement("div",{className:"Indentity"},s.a.createElement("img",{src:e.logo,alt:e.name})),s.a.createElement("div",null,s.a.createElement("strong",null,"Shots:")," ",e.stats.shots),s.a.createElement("div",null,s.a.createElement("strong",null,"Points:")," ",e.stats.points),t,s.a.createElement("button",{onClick:e.shotHandler},"Shoot"))},d=a(6),S=a.n(d),E=a(7),f=a.n(E),v=a(8),g=a.n(v),w=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).shoot=function(e){var t="".concat(e,"TeamStats"),a=n.state[t].points;n.shotSound.play(),Math.random()>.5&&(a+=1,setTimeout((function(){n.pointSound.play()}),100)),n.setState((function(e,n){return Object(m.a)({},t,{shots:e[t].shots+1,points:a})}))},n.resetGame=function(){n.setState((function(e,t){return{resetCount:e.resetCount+1,homeTeamStats:{shots:0,points:0},awayTeamStats:{shots:0,points:0}}})),n.resetSound.play()},n.state={resetCount:0,homeTeamStats:{shots:0,points:0},awayTeamStats:{shots:0,points:0}},n.shotSound=new Audio(S.a),n.pointSound=new Audio(f.a),n.resetSound=new Audio(g.a),n}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"Game"},s.a.createElement(h,{awayTeamStats:this.state.awayTeamStats,homeTeamStats:this.state.homeTeamStats}),s.a.createElement("h1",null,"Welcome to ",this.props.venue),s.a.createElement("div",{className:"stats"},s.a.createElement(p,{name:this.props.awayTeam.name,logo:this.props.awayTeam.logoSrc,stats:this.state.awayTeamStats,shotHandler:function(){return e.shoot("away")}}),s.a.createElement("div",{className:"versus"},s.a.createElement("h2",null,"VS"),s.a.createElement("div",null,s.a.createElement("strong",null,"Resets")," ",this.state.resetCount,s.a.createElement("button",{onClick:this.resetGame},"Reset Game"))),s.a.createElement(p,{name:this.props.homeTeam.name,logo:this.props.homeTeam.logoSrc,stats:this.state.homeTeamStats,shotHandler:function(){return e.shoot("home")}})))}}]),a}(n.Component),T=a(9),y=a.n(T),b=a(10),k=a.n(b),_=a(11),C=a.n(_),N=a(12),j=a.n(N);var x=function(e){var t={name:"Strong Blockers",logoSrc:y.a},a={name:"Smooth Stealers",logoSrc:k.a},n={name:"Lethal Shooters",logoSrc:C.a},o={name:"High Jumpers",logoSrc:j.a};return s.a.createElement("div",{className:"App"},s.a.createElement(w,{venue:"Hardwood War",homeTeam:a,awayTeam:t}),s.a.createElement(w,{venue:"Mamba Arena",homeTeam:n,awayTeam:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.b4ce4cbe.chunk.js.map