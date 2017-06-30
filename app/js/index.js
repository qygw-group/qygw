/**
 * Created by libw on 2017/5/23.
 */
window.onload=function () {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });
    var flag=true;
   $(".xuanxiang").click(function () {
       if(flag){
           $(".select").css("left","0");
           $(".mask").css("display","block")
           flag=false
       }
       $(".mask").click(function () {
           $(".select").css("left","-4.78rem");
           $(".mask").css("display","none")
           flag=true
       }

       )
   })
}

var zhihu=angular.module('zhihu',['ngRoute','services','ngSanitize']);

zhihu.directive("news",function () {
    return{
        template:"<div class='content'><a href='{{link}}'>{{title}}<img src='{{imgurl}}' alt=''></a></div>",
        scope:{
            imgurl:"@imgurl",
            title:"@title",
            link:"@link"
        }
    }
})

zhihu.config(function($routeProvider){//路由
    $routeProvider.when('/',{
        templateUrl:'tpl/homelist.html',
        controller:function ($scope,stores) {
            stores.getNew().then(function(data){
                $scope.dddata = data.recent;
                console.log(data)
            })
        }
    }).when('/show/:id',{
        templateUrl:'tpl/show.html',
        controller:'show'
    }).when('/list/:id',{
        templateUrl:'tpl/list.html',
        controller:function ($scope,$routeParams,stores) {
            var id=$routeParams.id;
            stores.getId(id).then(function(data){
                $scope.ddata = data.stories;
                console.log(data)
                $scope.description=data.description;
                $scope.per=data.editors;
                $scope.imageurl=data.background
            })
        }
    }).when('/show/:id',{
        templateUrl:'tpl/show.html',
        controller:function ($scope,$routeParams,stores) {
            var id=$routeParams.id;
            stores.getShow(id).then(function(data){
                $scope.ddddata = data;
                console.log(data)
            })
        }
    }).when('/ping/:id',{
        templateUrl:'tpl/ping.html',
        controller:function ($scope,$routeParams,stores) {
            var id=$routeParams.id;
            stores.getPing(id).then(function(data){
                $scope.pdata = data.data;
                console.log(data.data.comments)
            })
        }
    })
})

zhihu.run(function ($rootScope,stores) {
    stores.getThemes.then(function(data){

        $rootScope.data = data.others;
        console.log($rootScope.data)
    })
})
// zhihu.controller('con',function ($scope) {
//
//     $scope.show=function (i) {
//         $scope.index=i;
//     };
//
//












