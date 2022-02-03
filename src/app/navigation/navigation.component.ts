import { Component, OnInit } from '@angular/core';
import { Navigation } from '../models/models';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public navigation: Navigation[] = [];

  constructor() { }

  ngOnInit(): void {
    this.navigation = [
      { url: "about", label: "About"},
      { url: "shopping", label: "Shopping"},
    ];
  }

  

}
