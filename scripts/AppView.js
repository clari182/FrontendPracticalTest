/*
* The AppView is used for all sections except the Map section.
* This has been done this way because all sections have the same behavior and creating a view for every section would 
* result in duplicated code. Because of this, AppView will work for every section, except for the Map section wich has
* a different behavior. 
*/
var AppView = Backbone.View.extend	({
	/* 
	 * Keeps the template provided in the creation
	 */
	 initialize: function(options) {
	 	this.template = options.template;
	 },

	/*
	 * It renders the view with the provided template and adds it to the HTML
	 */
	 render: function() {
	 	var content = $(this.template).html();
	 	$(this.el).html(content);

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