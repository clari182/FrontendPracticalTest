define([
    'jquery',
    'underscore',
    'backbone',
    'views/app',
		'views/homeView',		
		'views/aboutMeView',
		'views/html5View',
		'views/css3View',
		'views/javascriptPerformanceView',
		'views/loginView',
    'models/loginModel'
    ], function($, _, Backbone,AppView, HomeView, AboutMeView, Html5View,Css3View, JavascriptPerformanceView, LoginView) {
     
      var AppRouter = Backbone.Router.extend({
        routes: {
          
        }
      });
      
			var initialize = function(){
								
			 });
			 
			 

				Backbone.history.start();
      };
      return { 
        initialize: initialize
      };
    });