(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,r){},QfWi:function(e,t,r){"use strict";r.r(t);r("L1EO");new(function(){function e(e){var t=e.selector,r=e.targetDate;this.selector=t,this.targetDate=r,this.refs={daysElem:document.querySelector(this.selector+' span[data-value="days"]'),hoursElem:document.querySelector(this.selector+' span[data-value="hours"]'),minsElem:document.querySelector(this.selector+' span[data-value="mins"]'),secsElem:document.querySelector(this.selector+' span[data-value="secs"]')},this.run()}var t=e.prototype;return t.changeDate=function(){var e=this.targetDate.getTime()-(new Date).getTime();e>0?this.calculateTime(e):this.viewError()},t.calculateTime=function(e){var t=Math.floor(e/864e5),r=Math.floor(e%864e5/36e5),s=Math.floor(e%36e5/6e4),n=Math.floor(e%6e4/1e3);this.changeElems(t,r,s,n)},t.changeElems=function(e,t,r,s){this.refs.daysElem.innerHTML=e,this.refs.hoursElem.innerHTML=t,this.refs.minsElem.innerHTML=r,this.refs.secsElem.innerHTML=s},t.run=function(){var e=this;this.changeDate(),setInterval((function(){e.changeDate()}),1e3)},t.viewError=function(){document.querySelector(this.selector).innerHTML="Timer is over"},e}())({selector:"#timer-1",targetDate:new Date("Jun 19, 2020")})}},[["QfWi",1]]]);
//# sourceMappingURL=main.1ad4108458e2b5f04791.js.map