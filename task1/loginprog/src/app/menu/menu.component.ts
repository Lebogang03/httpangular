import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  list = [{name:"Home",path:"menu/home"},
          {name:"Education",path:"menu/education"},
          {name:"Contact",path:"menu/contact"}];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  onNavigate(item){
    this.router.navigateByUrl(item.path);
  }
}
