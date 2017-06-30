/**
 * Created by libw on 2017/5/22.
 */
var services=angular.module('services',[]);
services.factory('stores',function ($http,$q) {
    return {
        getThemes:(function () {
            var d = $q.defer();//创立延迟对象，解决异步
            $http({
                url: 'php/api.php?url=http://news-at.zhihu.com/api/4/themes'
            }).then(function (data) {
                d.resolve(data.data);
                console.log(data.data);
            })
            return d.promise;
        })(),
        getId: function (id) {
            var d = $q.defer();//创立延迟对象，解决异步
            $http({
                method:'GET',
                url: 'php/api.php?url=http://news-at.zhihu.com/api/4/theme/' + id
            }).then(function (data) {
                d.resolve(data.data)
                console.log(data.data)
            })
            return d.promise;
        },
        getNew: function () {
            var d = $q.defer();//创立延迟对象，解决异步
            $http({
                method:'GET',
                url: 'php/api.php?url=http://news-at.zhihu.com/api/3/news/hot'
            }).then(function (data) {
                d.resolve(data.data);
                console.log(data.data)
            })
            return d.promise;
        },
        getShow: function (id) {
            var d = $q.defer();//创立延迟对象，解决异步
            $http({
                method:'GET',
                url: 'php/api.php?url=http://news-at.zhihu.com/api/4/news/' + id
            }).then(function (data) {
                d.resolve(data)
                console.log(data)
            })
            return d.promise;
        },
        getPing:function (id) {
            var d = $q.defer();//创立延迟对象，解决异步
            $http({
                method:'GET',
                url: 'php/api.php?url=http://news-at.zhihu.com/api/4/story/'+ id+'/short-comments'
            }).then(function (data) {
                d.resolve(data)
                console.log(data)
            })
            return d.promise;
        }
    }
})
