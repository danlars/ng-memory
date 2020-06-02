import angular from 'angular';
import bricks from './bricks.constant';
import brickCover from './brick-cover.contant';

const moduleName = 'app.constants';
angular.module(moduleName, [])
  .constant('BRICKS', bricks)
  .constant('BRICK_COVER', brickCover);

export default moduleName;
