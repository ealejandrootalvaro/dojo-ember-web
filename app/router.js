import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('list');
  this.route('detail',{path:'detail/:postId'});
  this.route('users');
  this.route('user-detail',{path:'user-detail/:userId'});
});

export default Router;
