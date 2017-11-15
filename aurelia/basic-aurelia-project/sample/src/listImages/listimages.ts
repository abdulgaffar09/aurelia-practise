export class ListImages {    
  message: string;
  images: any;
  constructor() {
    this.message = 'List of Images';
    this.images = [
      {
        src:'../../images/1.png'
      },
      {
        src:'../../images/2.jfif'
      },
      {
        src:'../../images/3.png'
      },{
        src:'../../images/4.jfif'
      }
    ];
  }
}
