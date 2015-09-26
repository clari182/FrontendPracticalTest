var AppRouter = Backbone.Router.extend({
  initialize: function(el) {
    this.el = el;

    this.homeView = null;
    this.aboutMeView = null;
    this.html5View = null;
    this.css3View = null;
    this.javascripttView = null;
    this.performanceView = null;
  },
  routes: {
    "": "home",
    "home": "home",
    "aboutMe": "aboutMe",
    "html5": "html5",
    "css3": "css3",
    "javascriptt": "javascriptt",
    "performance": "performance"
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
      if (this.homeView === null){
        this.homeView = new Backbone.View(); //todo: change with homeView
      }
      this.switchView(this.homeView);
      this.setActiveOption('#home');
    },

    aboutMe: function() {
      if (this.aboutMeView === null){
        this.aboutMeView = new Backbone.View(); //todo: change with aboutMeView
      }
      this.switchView(this.aboutMeView);
      this.setActiveOption('#aboutMe');
    },

    html5: function() {
      if (this.html5View === null){
        this.html5View = new Backbone.View(); //todo: change with html5View
      }
      this.switchView(this.html5View);
      this.setActiveOption('#html5');
    },

    css3: function() {
      if (this.css3View === null){
        this.css3View = new Backbone.View(); //todo: change with css3View
      }
      this.switchView(this.css3View);
      this.setActiveOption('#css3');
    },

    javascriptt: function () {
      if (this.javascripttView === null){
        this.javascripttView = new Backbone.View(); //todo: change with javascripttView
      }
      this.switchView(this.javascripttView);
      this.setActiveOption('#javascriptt');
    },

    performance: function () {
      if (this.performanceView === null){
        this.performanceView = new Backbone.View(); //todo: change with performanceView
      }
      this.switchView(this.performanceView);
      this.setActiveOption('#performance');
    }
  });
