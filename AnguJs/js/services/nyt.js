app.factory('nyt', ['$http', function ($http) {
   
   
    return {
        service1: function () {
            $http({

                method: 'GET',
                 
               // url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:0747532699'
                 url: 'https://developer.nytimes.com/docs/articlesearch-product/8/routes/articlesearch.json',
                 params: { 'api-key': 'qbMhj6GdH5xm7xxrU8GRtqrFCqCAbeqL' }
            })
                .then(function (response) {
                    console.log(response.data)
                    return response.data;
                     
                },
                    function (response) {
                        console.log("sfefzezf")
                        return response.status;
                        
                    })
        },
    service2(){
        console.log("how are u now")
     alert("heelloooezfok");
    } 

}
}

]);