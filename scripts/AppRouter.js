/* 
* The AppRouter file is a Backbone Router that works with the different sections of the page.
*/
var AppRouter = Backbone.Router.extend({
  /* 
  * Initializes all the views and models that will be used in this example
  */
  initialize: function(el) {

    this.el = el;

    this.homeView = new AppView({template: '#home-template'});
    this.aboutMeView =  new AppView({template: '#about-me-template'});
    this.html5View = new AppView({template: '#html5-template'});
    this.css3View = new AppView({template: '#css3-template'});
    this.javascripttView = new MapView({template: '#gmaps-template'});
    this.performanceView = new AppView({template: '#performance-template'});
  },
  /* To simplify the navigation between sections, routes are being defined. This is the essential part of the router.
  There are specific actions related to each one of this routes*/
  routes: {
    '': 'home',
    'home': 'home',
    'aboutMe': 'aboutMe',
    'html5': 'html5',
    'css3': 'css3',
    'javascriptt': 'javascriptt',
    'performance': 'performance'
  },

  currentView: null,
  
  /* Everytime the section is changed, the associated view changes with it.*/
  switchView: function(view) {
    if (this.currentView) {
        // The old view is removed
        this.currentView.remove();
      }

      // The new views' elements are put in the html
      this.el.html(view.el);

      // Renders the view
      view.render();

      this.currentView = view;
    },

    /*
     * This function changes the selected section in the topbar.
     */
     setActiveOption: function(url) {
      // Unmark all entries
      $('li').removeClass('active');

      // Mark active entry
      $('li a[href="' + url  + '"]').parents('li').addClass('active');
    },

    // Home route
    home: function() {
      if (this.homeView === null){
        this.homeView = new AppView({template: '#home-template'});
      }
      this.switchView(this.homeView);
      this.setActiveOption('#home');
    },

    // About me route
    aboutMe: function() {
      if (this.aboutMeView === null){
        this.aboutMeView = new AppView({template: '#aboutMe-template'});
      }
      this.switchView(this.aboutMeView);
      this.setActiveOption('#aboutMe');
    },

    // Html5 route
    html5: function() {
      var firstHeader = 'Required';
      var firstText = 'Before Html5, everytime you needed to have a mandatory input, '+
      'it was essential to have some javascript behind to control that the input wasn\'t empty.'+
      '\nRequired is an attribute that can be associated with a lot of input types. Its main purpose is'+
      ' to verify that the field is not empty when the form is submitted. No need for extra code.'+
      '\nThis is the code example:'+
      '<div class=\'bs-example\'><pre>&lt;input type=\'date\' required/&gt;</pre></div>';

      var secondHeader = 'secondHeader';
      var secondText = 'secondText';

      var thirdHeader = 'thirdHeader';
      var thirdText = 'thirdText';


      if (this.html5View === null){
        this.html5View = new AppView({template: '#html5-template'});
      }

      var carouselView = new CarouselView({
        template: '#carousel-template',
        firstHeader: firstHeader,
        firstText: firstText,
        secondHeader: secondHeader,
        secondText: secondText,
        thirdHeader: thirdHeader,
        thirdText: thirdText
      });
      carouselView.render();      

      this.switchView(this.html5View);
      this.html5View.$el.find('.carousel-holder').html(carouselView.el);
      this.setActiveOption('#html5');
      $('#myCarousel').carousel({interval: false});
    },

    // Css3 route
    css3: function() {
      var firstHeader = 'Columns';
      var firstText = 'firstText';

      var secondHeader = 'Media queries';
      var secondText = 'secondText';

      var thirdHeader = 'Generated counters';
      var thirdText = 'thirdText';
      if (this.css3View === null){
        this.css3View = new AppView({template: '#css3-template'});
      }
      
      this.switchView(this.css3View);   
      this.setActiveOption('#css3');
    },

    // Map route
    javascriptt: function () {
      if (this.javascripttView === null){
        this.javascripttView = new MapView({template: '#gmaps-template'});
      }
      this.switchView(this.javascripttView);      
      this.setActiveOption('#javascriptt');
    },

    // Performance route
    performance: function () {
      var firstHeader = 'Minify javascript and css files';
      var firstText = 'firstText';

      var secondHeader = 'Use Sprites';
      var secondText = 'secondText';

      var thirdHeader = 'Use Cache';
      var thirdText = 'thirdText';

      if (this.performanceView === null){
        this.performanceView = new AppView({template: '#performance-template'});
      }

      var carouselView = new CarouselView({
        template: '#carousel-template',
        firstHeader: firstHeader,
        firstText: firstText,
        secondHeader: secondHeader,
        secondText: secondText,
        thirdHeader: thirdHeader,
        thirdText: thirdText
      });
      carouselView.render();   

      this.switchView(this.performanceView);
      this.performanceView.$el.find('.carousel-holder').html(carouselView.el);
      this.setActiveOption('#performance');
    }
  });
