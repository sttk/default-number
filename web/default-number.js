!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.defaultNumber=e()}}(function(){return function e(t,n,r){function o(u,i){if(!n[u]){if(!t[u]){var a="function"==typeof require&&require;if(!i&&a)return a(u,!0);if(f)return f(u,!0);var l=new Error("Cannot find module '"+u+"'");throw l.code="MODULE_NOT_FOUND",l}var p=n[u]={exports:{}};t[u][0].call(p.exports,function(e){var n=t[u][1][e];return o(n||e)},p,p.exports,e,t,n,r)}return n[u].exports}for(var f="function"==typeof require&&require,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,t,n){"use strict";function r(e,t,n,r){return e=o(e,t,"number"),"number"!=typeof n||isNaN(n)||(e=Math.max(n,e)),"number"!=typeof r||isNaN(r)||(e=Math.min(r,e)),e}var o=e("default-val");t.exports=r},{"default-val":2}],2:[function(e,t,n){"use strict";function r(e,t,n){return null==e?t:"number"==typeof e&&isNaN(e)?t:("string"!=typeof n&&(n=o(t)),o(e)===n||typeof e===n?e:t)}function o(e){return Object.prototype.toString.call(e)}t.exports=r},{}]},{},[1])(1)});