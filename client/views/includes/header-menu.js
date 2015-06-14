Template.homeMenu.events({
	'click #signOut': function(event, template) {
    	Meteor.logout();
    	Router.go("/");
  	},
  	'click #user-actions a:not(.dropdown-toggle)': function(event) {
		var href = $(event.target).attr('href');
		window.location.href = href;
  	}
});