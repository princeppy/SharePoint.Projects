/* jshint -W079 */
var mockData = (function() {
    return {
        getMockPeople: getMockPeople,
        getMockStates: getMockStates
    };

    function getMockStates() {
        return [
            {
                state: 'projects',
                config: {
                    url: '/',
                    templateUrl: 'app/projects/projects.html',
                    title: 'projects',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-folder-open-o"></i> Projects'
                    }
                }
            }
        ];
    }

    function getMockPeople() {
        return [
            {firstName: 'Steve', lastName: 'Pietrek', age: 44, location: 'Raleigh'},
            {firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
            {firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
            {firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
            {firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
            {firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
            {firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'}
        ];
    }
})();
