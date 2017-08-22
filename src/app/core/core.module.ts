import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title.component';

import { UserService, UserServiceConfig } from './user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [TitleComponent],
  declarations: [TitleComponent],
  providers: [UserService]
})
export class CoreModule {

  // 부모 주입기에 CoreModule이 존재하는지 체크하기 위해서 @SkipSelf를 사용합니다.
  // @Optional은 객체가 있으면 전달하고 없으면 null을 전달합니다.
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    console.log('CoreModule # constructor() called.');
    if (parentModule) {
      // 코어 모듈은 전체 모듈이 공유해서 언제나 사용하는 기능을 가진 모듈입니다.
      // 코어 모듈은 하나만 존재하면 됩니다.
      throw new Error('CoreModule이 이미 로딩되었습니다.');
    }
  }

  static forRoot(config: UserServiceConfig): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        { provide: UserServiceConfig, useValue: config }
      ]
    };
  }

}
