/**
 * Created by Ramon Serrano <ramon.calle.88@gmail.com>
 */

Router.configure({
    layoutTemplate: "layout",
    notFoundTemplate: 'notFound',
    progressSpinner: true
});

Router.route('/', {
    name: "home"
});