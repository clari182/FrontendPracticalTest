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
      initialize: function(el) {
        this.el = el;

        this.HomeView = new Backbone.View();
      },
      routes: {
        "": "home",
        "home": "home",
        "aboutMe": "aboutMe",
        "html5": "html5",
        "css3": "css3",
        "javascriptPerformance": "javascriptPerformance"
      },
      currentView: null,
      switchView: function(view) {
        if (this.currentView) {
      // Detach the old view
      this.currentView.remove();
    }

    // Puts the new views' html element in the html
    this.el.html(view.el);

    // Renders the view
    view.render();

    this.currentView = view;
  },
  /*
   * Change the active element in the topbar
   */
   setActiveOption: function(url) {
    // Unmark all entries
    $('li').removeClass('active');

    // Mark active entry
    $("li a[href='" + url + "']").parents('li').addClass('active');
  },

  home: function() {
    this.switchView(this.HomeView);
    this.setActiveOption('#home');
  },

  aboutMe: function() {
    this.switchView(this.AboutMeView);
    this.setActiveOption('#aboutMe');
  },

  html5: function() {
    this.switchView(this.Html5View);
    this.setActiveOption('#html5');
  },

  css3: function() {
    this.switchView(this.Css3View);
    this.setActiveOption('#css3');
  },

  javascriptPerformance: function () {
    this.switchView(this.JavascriptPerformanceView);
    this.setActiveEntry('#javascriptPerformance');
  }

});