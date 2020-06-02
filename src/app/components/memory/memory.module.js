import angular from 'angular';

// Services
import {MemoryService} from "./memory.service";
import {MemoryComponent} from "./memory.component";

// Modules
import ConstantsModule from '../../constants/constants.module';
import BrickModule from '../brick/brick.module';

// Module Name
const moduleName = 'puzzle';

// Create completely independent angular scopes to ensure compliance with Angular V2^
angular.module(moduleName, [
  ConstantsModule,
  BrickModule
])
  .service('MemoryService', MemoryService)
  .component('memory', MemoryComponent);

export default moduleName;
