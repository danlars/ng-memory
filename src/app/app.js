import angular from 'angular';
import ngAnimate from 'angular-animate';
// Import global styles int the main js file
import '../style/app.scss';

// Modules
import PuzzleModule from './components/memory/memory.module';

angular.module('app', [
  ngAnimate,
  PuzzleModule
])
  .component('app', {
    template: require('./app.html')
  });
