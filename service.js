angular.module('userProfiles').service('mainService', function ($http) {

    this.getUsers = function (pageNum) {
        var promise = $http({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=' + pageNum
        })

        return promise.then(function (response) {
            if (response.status === 200) {
                return response.data;
            }
        })
    };
});
