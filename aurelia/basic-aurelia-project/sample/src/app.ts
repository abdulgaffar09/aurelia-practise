
import {autoinject} from 'aurelia-framework';

import {UpdateContent} from './updateContent/updatecontent';
import {ListImages} from './listImages/listimages';

@autoinject()
export class App {
  header: string;
  constructor() {
    this.header = 'Sample Dashboard';
    
 }
}
