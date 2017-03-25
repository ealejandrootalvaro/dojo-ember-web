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

  this.route('posts', function() {});
  this.route('post-users',{path: 'user/:userId'});
});

export default Router;
