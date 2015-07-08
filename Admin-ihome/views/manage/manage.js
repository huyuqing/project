
adminApp.controller('AddformController', ['$scope', '$http', '$state',function ($scope, $http, $state) {

    $scope.areas = {};
        
    //表单验证+提交
	$scope.submitForm = function(isValid) {
        // check to make sure the form is completely valid
        if (isValid) {
            alert('our form is amazing');
            $state.go("manage_add.step4");
            $scope.areaname = $scope.areas.areaName;
        }

        $http({
            method  : 'POST',
            url     : 'process.php',
            data    : $.param($scope.areas),  // pass in data as strings
            headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
        })

        .success(function(data) {
            console.log(data);
                  
            if (!data.success) {
            // if not successful, bind errors to error variables
                alert("出错");
            } else {
                // if successful, bind success message to message
                $scope.message = data.message;
            }
        }); 
    };


}]);



 adminApp.controller("MapCtrl",function($scope){
        var map = new BMap.Map("allmap");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
            
        map.addControl(new BMap.NavigationControl());        
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放

        //定位城市
        function myFun(result){
            var cityName = result.name;
            map.setCenter(cityName);
        }
        var myCity = new BMap.LocalCity();
        myCity.get(myFun);         
        
        //逆地址解析 
        var geoc = new BMap.Geocoder();    
        map.addEventListener("click", function(e){        
            var pt = e.point;
            geoc.getLocation(pt, function(rs){
                var addComp = rs.addressComponents;
                $scope.areas.areaAddress = addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber;
                alert(addComp.province + addComp.city + addComp.district + addComp.street + addComp.streetNumber);
                
            });        
        });
    
        //检索小区
        var local = new BMap.LocalSearch(map, {
            renderOptions:{map: map}
        });
        $scope.search=function(){
            // 百度地图API功能
           
            local.search($scope.mapserch);
        }

    });