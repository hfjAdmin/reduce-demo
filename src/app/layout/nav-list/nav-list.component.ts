import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-list',
  templateUrl: './nav-list.component.html',
  styleUrls: ['./nav-list.component.less']
})
export class NavListComponent implements OnInit {

  constructor(  private router: Router) { }

  ngOnInit() {
  }

  debouncePage() {
    console.log(666);
    this.router.navigateByUrl('/debounce-page');
}
}
