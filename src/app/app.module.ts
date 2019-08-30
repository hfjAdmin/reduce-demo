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
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { RxjsDebounceComponent } from './page/rxjs-debounce/rxjs-debounce.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    DebounceComponent,
    HeaderListComponent,
    ThrottleComponent,
    NavListComponent,
    HeaderNavListComponent,
    RxjsDebounceComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, NgZorroAntdModule, HttpClientModule, BrowserAnimationsModule],

  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {}
