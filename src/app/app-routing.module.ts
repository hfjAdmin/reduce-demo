import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DebounceComponent } from './page/debounce/debounce.component';
import { ThrottleComponent } from './page/throttle/throttle.component';
import { HeaderNavListComponent } from './layout/header-nav-list/header-nav-list.component';
import { HeaderListComponent } from './layout/header-list/header-list.component';
import { RxjsDebounceComponent } from './page/rxjs-debounce/rxjs-debounce.component';


const routes: Routes = [{
  path: '',
  component: HeaderNavListComponent,
  children: [
    {
      path: 'header-list',
      component: HeaderListComponent,
    },
      {
          path: 'debounce-page',
          component: DebounceComponent
        },
        {
          path: 'rxjs-debounce-page',
          component: RxjsDebounceComponent
        },
        {
          path: 'throttle-page',
          component: ThrottleComponent
        }
    ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
