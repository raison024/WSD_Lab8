angular.module("spaApp",["ngRoute"])
.config(function($routeProvider){
    $routeProvider.when("/home",{
        templateUrl:'christ/home.html',
        controller:'homectrl'
    })
    .when("/theatre",{
        
        templateUrl:'christ/theatre.html',
        controller:'myctrl1'
        
    })
    .when("/movie",{
        
        templateUrl:'christ/movie.html',
        controller:'myctrl2'
    })
    
   
   

}) 

.controller('myctrl',function()
{

})
.controller('myctrl1',function($scope,$http)
{
   $http.get('https://alen2247208.github.io/WSD-Lab-8/student.json')
   .success(function(response){
     $scope.employees=response.records;
   })
})

.controller('myctrl2',function($scope,$http)
{
   $http.get('https://alen2247208.github.io/WSD-Lab-8/student.json')
   .success(function(response){
     $scope.employees=response.records;
   })
})

.controller("homectrl",function($scope)
{
   $scope.home="Welcome to our Website. Here we have a list of movies that are show in our Theaters." ,
   $scope.home1="We also have our top movies that we would like you to watch.",
   $scope.home2="We hope you enjoy and have a nice day";
})
