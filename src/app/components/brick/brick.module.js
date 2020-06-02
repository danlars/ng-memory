import angular from 'angular';

// Services
import {BrickComponent} from './brick.component';
import BrickService from './brick.service';

// Modules
import ConstantsModule from "../../constants/constants.module";

// Module Name
const moduleName = 'memory.brick';

// Create completely independent angular scopes to ensure compliance with Angular V2^
angular.module(moduleName, [
  ConstantsModule,
])
  .service('BrickService', BrickService)
  .component('brick', BrickComponent);

export default moduleName;
