import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-list',
  templateUrl: './header-list.component.html',
  styleUrls: ['./header-list.component.less']
})
export class HeaderListComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }
  debouncePage() {
      console.log(666);
      this.router.navigateByUrl('/debounce-page');
  }
}
