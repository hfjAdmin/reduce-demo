import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DebounceComponent } from './page/debounce/debounce.component';
import { ThrottleComponent } from './page/throttle/throttle.component';
import { HeaderNavListComponent } from './layout/header-nav-list/header-nav-list.component';
import { HeaderListComponent } from './layout/header-list/header-list.component';
import { NavListComponent } from './layout/nav-list/nav-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DebounceComponent,
    HeaderListComponent,
    ThrottleComponent,
    NavListComponent,
    HeaderNavListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
