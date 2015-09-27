var MapView = Backbone.View.extend({
    id: 'map',
    /*
    * Receives the template and renders the map automatically
    */
    initialize: function (options) {          
        this.template = options.template;
        this.render();      
    },

    /*
    * Once the View is initialized this function creates the map with its information
    */
    activateMap: function () {
        centerMap = new google.maps.LatLng(55.6712674, 12.5608388);

        mapOptions = {
            center: centerMap,
            zoom: 3,
            5: google.maps.MapTypeId.ROADMAP
        };

        map = new google.maps.Map(this.$el.find('#google-map-box')[0],
          mapOptions);

        /* The Markers are created using the same variable. 
        * Another way to do so is to create a MarkerView and a MarkerCollection 
        * For this example it's not necessary because the markers are not modifiable. If they were it would be the best option.
        */
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(69.3040804, 17.4371308),
            map: map,
            title: 'Senja Island, Norway'
        });

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(68.3197286, 14.233628),
            map: map,
            title: 'Gimsøysand Island, Norway'
        });

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(67.9553871, 23.6843626),
            map: map,
            title: 'Muonio, Finland'
        });

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(55.6712674, 12.5608388),
            map: map,
            title: 'Copenhagen, Danemark'
        });

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(59.326142, 17.9875454),
            map: map,
            title: 'Stockholm, Sweden'
        });

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(47.5029578, 13.1902483),
            map: map,
            title: 'Senja Island in Norway'
        });

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.9100711, 12.5359979),
            map: map,
            title: 'Senja Island in Norway'
        });

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(47.6370095, 13.0398633),
            map: map,
            title: 'Berchtesgaden, Germany'
        });

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(45.4057148, 12.3817426),
            map: map,
            title: 'Venice, Italy'
        });

        marker = new google.maps.Marker({
            position: new google.maps.LatLng(52.0841867, 5.0824915),
            map: map,
            title: 'Utrecht, Netherlands'
        });

        google.maps.event.trigger(map, 'resize');

        google.maps.event.trigger($('#google-map-box'), 'resize');
    },

    /*
    * It renders the map in two steps:
    * 1) It puts the template html in the map element
    * 2) It creates the map with activateMap    
*/
render: function () {
    this.$el.html($(this.template).html());
    this.activateMap();       
}
});