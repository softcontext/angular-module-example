import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { CoreModule } from './core/core.module';
import { MemberModule } from './member/member.module';
import { PlayerModule } from './player/player.module';
import { ShareModule } from './share/share.module';

import { AppComponent } from './app.component';
// import { IntroComponent } from './component/intro/intro.component';
// import { HelloComponent } from './component/hello/hello.component';
// import { CoreTestComponent } from './component/core-test/core-test.component';
import { IntroComponent, HelloComponent, CoreTestComponent } from './component/index';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule, FormsModule, HttpModule,
    CoreModule.forRoot({nickName: 'Happy'}),
    MemberModule, PlayerModule,
    ShareModule
  ],
  declarations: [
    AppComponent,
    IntroComponent, HelloComponent, CoreTestComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
    console.log('AppModule # constructor() called.');
  }
}
