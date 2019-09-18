import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { ProductComponent } from './product/product.component';
import { MemberComponent } from './member/member.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    ProductComponent,
    MemberComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'my-component',
      component : MyComponentComponent
    },
      {
        path: 'member',
        component : MemberComponent
      },
      {
        path: 'product',
        component : ProductComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
