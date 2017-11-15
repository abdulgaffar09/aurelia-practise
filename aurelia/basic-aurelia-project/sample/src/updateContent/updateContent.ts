export class UpdateContent {    
  message = 'Sample Dashboard';
  content: string;
  constructor() {
    this.message = 'Sample Dashboard';
    this.content = 'This is content';
 }
  updateContent() {
    if(this.message == 'This is NEW message...'){
      this.message = 'Hello World';
      this.content = 'This is content';
    }else{
      this.message = 'This is NEW message...'
      this.content = 'This is NEW content...';
    }
   
 }
}