app.factory('nyt', ['$http','$q', function ($http,$q) {
  
    
    return {
        service1: function (){ 
            var deferred = $q.defer();
            $http({
            
            method: 'GET',
            data :'json',
            url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699'
            // url: 'https://developer.nytimes.com/docs/articlesearch-product/8/routes/articlesearch.json',
            //  params: { 'api-key': 'qbMhj6GdH5xm7xxrU8GRtqrFCqCAbeqL' }
        })
            .then(function(response) {
                console.log("ccccccccccc" + JSON.stringify(response.data))
               deferred.resolve(response.data)

            },
                function () {
                    console.log("sfefzezf")
                deferred.reject("there was an error")

                })
                 return deferred.promise;
            },
 
        service2() {
              var kk='d'
             function dr() 
             {
            console.log("how are u now")
           // alert("heelloooezfok");
           this.kk='dsssd'
                
        }
        return kk;
        }


    }

}]);