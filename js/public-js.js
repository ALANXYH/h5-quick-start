/**
 *  version:1.0
 *  creat by ALAN
 *  github:https://github.com/AnselRain
 */

// 切换页面font-size值
(function () {
  var width = document.documentElement.clientWidth
  var html = document.querySelector('html')
  html.style.fontSize = width / 7.5 + 'px'
})()

// swiper初始化js，详情请看官方文档
var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination'
  }
})
