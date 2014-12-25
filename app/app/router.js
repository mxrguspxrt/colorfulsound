import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


var crudResource = function(scope, name, subresource) {

  var singular = name;
  var plural = Ember.String.pluralize(name);

  scope.resource(plural, function() {
    this.route("new");
    this.route("index", {path: "/"});
  });

  scope.resource(singular, {path: "/"+singular+"/:"+singular+"_id"}, function() {
    this.route("show", {path: "/"});
    this.route("edit", {path: "/edit"});
    if(subresource) {
      subresource(this);
    }
  });

};


Router.map(function() {
  crudResource(this, "user");
});

export default Router;
