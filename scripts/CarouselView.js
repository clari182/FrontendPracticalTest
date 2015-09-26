var CarouselView = Backbone.View.extend	({
	/* 
	 * Keeps the template provided in the creation
	 */
	initialize: function(options) {
		
		this.template = options.template;
		this.firstHeader = options.firstHeader;
		this.firstText = options.firstText;
		this.secondHeader = options.secondHeader;
		this.secondText = options.secondText;
		this.thirdHeader = options.thirdHeader;
		this.thirdText = options.thirdText;
	},

	/*
	 * It renders the view with the provided template and adds it to the HTML
	 */
	render: function() {		
		var content = $(this.template);
		content.find('.firstHeader').html(this.firstHeader);
		content.find('.firstText').html(this.firstText);
		content.find('.secondHeader').html(this.secondHeader);
		content.find('.secondText').html(this.secondText);
		content.find('.thirdHeader').html(this.thirdHeader);
		content.find('.thirdText').html(this.thirdText);
		$(this.el).html(content.html());

		return this;
	},

	/*
	* Used to empy and remove an element from the DOM
	*/
	remove: function() {		
		$(this.el).empty().detach();

		return this;
	}
});