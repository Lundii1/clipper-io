import { Component, NgModule, OnInit } from '@angular/core';

@Component({
  selector: 'app-instagram',
  templateUrl: './instagram.component.html',
  styleUrls: ['./instagram.component.css']
})
export class InstagramComponent implements OnInit {
  name = "";
  async paste() {
    this.name = "";
    this.name = await navigator.clipboard.readText();
  }

  isLoading = false;
  constructor() { 
    
  }

  ngOnInit() {
  }

}
