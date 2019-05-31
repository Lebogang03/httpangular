import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyproviderService } from '../keyprovider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
 list;

  constructor(private service:KeyproviderService) {
    this.service.getNews().subscribe((data)=>{
      this.list=data;
      console.log(data);
      
    }) 
  }

  ngOnInit() {
  }
  
}
