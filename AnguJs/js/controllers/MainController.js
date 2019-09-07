app
    .controller('MainController', function ($http,nyt) {
        this.dat={ }
       this.dat= nyt.service1()
      alert(this.dat)
        
          this.comments = [
            {
                "name": "Barry Arnold",
                "gender": "male",
                "company": "TELPOD",
                "email": "barryarnold@telpod.com",
                "phone": "+1 (821) 582-3742",
                "address": "281 Falmouth Street, Coldiron, Pennsylvania, 5390",
                "about": "Reprehenderit aute do pariatur enim pariatur nisi veniam occaecat adipisicing magna ipsum irure. Consequat aliquip laborum elit nisi consequat eiusmod laboris voluptate in ad est exercitation nostrud quis. Minim ex consectetur nulla nostrud. Exercitation commodo labore tempor consequat ipsum non aliqua sit esse anim officia. Ut fugiat excepteur id nisi labore incididunt ullamco ea laboris. Culpa exercitation amet minim dolore.\r\n"
            },
            {
                "name": "Camille Rodriguez",
                "gender": "female",
                "company": "NIMON",
                "email": "camillerodriguez@nimon.com",
                "phone": "+1 (855) 551-2158",
                "address": "778 Eagle Street, Calvary, Arkansas, 3534",
                "about": "Velit velit sit occaecat veniam qui aute eu esse in adipisicing deserunt. Ullamco sit nulla officia culpa minim ad nostrud aliquip nisi. Pariatur quis tempor proident est officia eu eiusmod minim.\r\n"
            },
            {
                "name": "Pacheco Mercado",
                "gender": "male",
                "company": "VITRICOMP",
                "email": "pachecomercado@vitricomp.com",
                "phone": "+1 (857) 480-3232",
                "address": "238 Haring Street, Stockdale, Utah, 8635",
                "about": "Eu consequat id deserunt magna reprehenderit eiusmod officia quis tempor eiusmod minim laboris proident mollit. Dolore aliqua qui mollit labore est adipisicing ullamco anim sit. Irure cupidatat reprehenderit cillum dolore et fugiat ipsum qui nulla exercitation duis veniam mollit officia. Et aute adipisicing qui nulla laborum laborum nulla sunt irure cupidatat in do commodo proident. Esse sit velit qui ea do anim proident non reprehenderit enim ullamco et.\r\n"
            },
            {
                "name": "Vickie Hall",
                "gender": "female",
                "company": "KIDSTOCK",
                "email": "vickiehall@kidstock.com",
                "phone": "+1 (841) 595-3670",
                "address": "955 Strauss Street, Harrison, Texas, 3310",
                "about": "Pariatur est eiusmod consectetur in veniam do veniam aliqua exercitation dolor duis cupidatat aute et. Amet aute qui occaecat mollit exercitation labore do. Duis consequat sint aliquip sit ullamco aliqua. Qui elit pariatur labore aliquip officia cillum consequat nostrud cillum magna qui tempor elit excepteur. Ipsum dolor reprehenderit velit veniam excepteur occaecat tempor. Cupidatat duis excepteur labore incididunt aute duis voluptate est nisi.\r\n"
            },
            {
                "name": "Erica Peters",
                "gender": "female",
                "company": "FUELTON",
                "email": "ericapeters@fuelton.com",
                "phone": "+1 (985) 545-2248",
                "address": "833 Dekoven Court, Wildwood, Virginia, 9890",
                "about": "Cillum anim sint non aute esse sunt velit dolore nisi excepteur. Voluptate non nisi elit ex Lorem ullamco cillum esse et culpa. Lorem velit id tempor eiusmod incididunt deserunt ea excepteur est amet. Sunt proident voluptate velit ut qui cupidatat duis mollit nulla velit culpa. Officia in dolor elit id amet enim laborum aute ut. Reprehenderit Lorem ut qui laborum sint anim laboris pariatur adipisicing ut nostrud tempor. Excepteur elit veniam excepteur et consequat sit elit.\r\n"
            },
            {
                "name": "Bianca Owens",
                "gender": "female",
                "company": "METROZ",
                "email": "biancaowens@metroz.com",
                "phone": "+1 (914) 411-2494",
                "address": "164 Lorraine Street, Kylertown, Nevada, 7354",
                "about": "Cupidatat ex in pariatur consectetur officia. Dolor ea nisi ex do culpa irure magna commodo ex aliqua non eiusmod aliqua. In tempor sunt anim non ut dolore. Esse adipisicing ipsum labore laborum exercitation fugiat. Ullamco sunt est est sint anim cillum tempor incididunt qui ad laborum.\r\n"
            }
        ]
        this.addToComments = function (addComment) {
            var obj = {
                name: addComment,
                gender: "sfs"
            }
            this.comments.push(obj);
            addComment = '';
            console.log(this.comments);
        }

        this.do = {
            title: " What you have to Do",
            list: ["play xbox", "play football", "take a bath"]
        }
        this.books = {
            title: " Your Books",
            list: []
        }


        function hasOnlyNum(item) {
            return /^[0-9]*$/.test(item)
        }

        this.addO = function (itemList, item) {
            //ISBN number 10 or 13 numbers
            if ((item.length == 10 || item.length == 13) && hasOnlyNum(item)) {
                console.log("ISBN");
                $http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + item).then(function successCallback(response) {

                    itemList.push("Title : " + response.data.items[0].volumeInfo.title + " /// Authors : " + response.data.items[0].volumeInfo.authors)
                },
                    function (response) {
                        console.log("prb de request: " + response.status)
                        //lien important : https://stackoverflow.com/questions/45766361/undefined-http-data-when-resolved-with-then-method
                    }
                );
            } else {
                console.log("Non ISBN");
                itemList.push(item)
            }

        }



    })




























/*  1ere version
app.controller('MainController', ['$scope',function($scope){

    $scope.comments=[
        {
          "name": "Barry Arnold",
          "gender": "male",
          "company": "TELPOD",
          "email": "barryarnold@telpod.com",
          "phone": "+1 (821) 582-3742",
          "address": "281 Falmouth Street, Coldiron, Pennsylvania, 5390",
          "about": "Reprehenderit aute do pariatur enim pariatur nisi veniam occaecat adipisicing magna ipsum irure. Consequat aliquip laborum elit nisi consequat eiusmod laboris voluptate in ad est exercitation nostrud quis. Minim ex consectetur nulla nostrud. Exercitation commodo labore tempor consequat ipsum non aliqua sit esse anim officia. Ut fugiat excepteur id nisi labore incididunt ullamco ea laboris. Culpa exercitation amet minim dolore.\r\n"
        },
        {
          "name": "Camille Rodriguez",
          "gender": "female",
          "company": "NIMON",
          "email": "camillerodriguez@nimon.com",
          "phone": "+1 (855) 551-2158",
          "address": "778 Eagle Street, Calvary, Arkansas, 3534",
          "about": "Velit velit sit occaecat veniam qui aute eu esse in adipisicing deserunt. Ullamco sit nulla officia culpa minim ad nostrud aliquip nisi. Pariatur quis tempor proident est officia eu eiusmod minim.\r\n"
        },
        {
          "name": "Pacheco Mercado",
          "gender": "male",
          "company": "VITRICOMP",
          "email": "pachecomercado@vitricomp.com",
          "phone": "+1 (857) 480-3232",
          "address": "238 Haring Street, Stockdale, Utah, 8635",
          "about": "Eu consequat id deserunt magna reprehenderit eiusmod officia quis tempor eiusmod minim laboris proident mollit. Dolore aliqua qui mollit labore est adipisicing ullamco anim sit. Irure cupidatat reprehenderit cillum dolore et fugiat ipsum qui nulla exercitation duis veniam mollit officia. Et aute adipisicing qui nulla laborum laborum nulla sunt irure cupidatat in do commodo proident. Esse sit velit qui ea do anim proident non reprehenderit enim ullamco et.\r\n"
        },
        {
          "name": "Vickie Hall",
          "gender": "female",
          "company": "KIDSTOCK",
          "email": "vickiehall@kidstock.com",
          "phone": "+1 (841) 595-3670",
          "address": "955 Strauss Street, Harrison, Texas, 3310",
          "about": "Pariatur est eiusmod consectetur in veniam do veniam aliqua exercitation dolor duis cupidatat aute et. Amet aute qui occaecat mollit exercitation labore do. Duis consequat sint aliquip sit ullamco aliqua. Qui elit pariatur labore aliquip officia cillum consequat nostrud cillum magna qui tempor elit excepteur. Ipsum dolor reprehenderit velit veniam excepteur occaecat tempor. Cupidatat duis excepteur labore incididunt aute duis voluptate est nisi.\r\n"
        },
        {
          "name": "Erica Peters",
          "gender": "female",
          "company": "FUELTON",
          "email": "ericapeters@fuelton.com",
          "phone": "+1 (985) 545-2248",
          "address": "833 Dekoven Court, Wildwood, Virginia, 9890",
          "about": "Cillum anim sint non aute esse sunt velit dolore nisi excepteur. Voluptate non nisi elit ex Lorem ullamco cillum esse et culpa. Lorem velit id tempor eiusmod incididunt deserunt ea excepteur est amet. Sunt proident voluptate velit ut qui cupidatat duis mollit nulla velit culpa. Officia in dolor elit id amet enim laborum aute ut. Reprehenderit Lorem ut qui laborum sint anim laboris pariatur adipisicing ut nostrud tempor. Excepteur elit veniam excepteur et consequat sit elit.\r\n"
        },
        {
          "name": "Bianca Owens",
          "gender": "female",
          "company": "METROZ",
          "email": "biancaowens@metroz.com",
          "phone": "+1 (914) 411-2494",
          "address": "164 Lorraine Street, Kylertown, Nevada, 7354",
          "about": "Cupidatat ex in pariatur consectetur officia. Dolor ea nisi ex do culpa irure magna commodo ex aliqua non eiusmod aliqua. In tempor sunt anim non ut dolore. Esse adipisicing ipsum labore laborum exercitation fugiat. Ullamco sunt est est sint anim cillum tempor incididunt qui ad laborum.\r\n"
        }
      ]
    $scope.addToComments= function() {
     $scope.comments.push($scope.addComment)
    }

}])
*/