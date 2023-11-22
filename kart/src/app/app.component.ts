import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 posts=[
  {
    title:'DAĞ BİSİKLETİ',
    imageUrl:'assets/biking.jpeg',
    userName:'cbdag',
    content:'Çok iyi sürdüm',
  },
  {
    title:'TIRMANIŞ',
    imageUrl:'assets/mountain.jpeg',
    userName:'cbuludag',
    content:'Bugünde iyi tırmandım.',
  },
  {
    title:'DOĞA YÜRÜYÜŞÜ',
    imageUrl:'assets/tree.jpeg',
    userName:'cbdoga',
    content:'Parkta dolaşmak güzeldir.',
  },

 ]
}
