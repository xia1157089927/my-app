import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: 'workflow', loadChildren: './bpm/bpm.module#BpmModule' },
  { path: '', redirectTo: 'workflow', pathMatch: 'full' }
];
//export const routing = RouterModule.forRoot(appRoutes);

/**NgModule是一个装饰器函数，它接收一个用来描述模块属性的元数据对象。其中最重要的属性是： */
@NgModule({
  /** 声明本模块中拥有的视图类。 Angular 有三种视图类：组件、指令和管道。 */
  declarations: [
    AppComponent
  ],
  /**本模块声明的组件模板需要的类所在的其它模块。 */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  /**服务的创建者，并加入到全局服务列表中，可用于应用任何部分。 */
  providers: [],
  /**指定应用的主视图（称为根组件），它是所有其它视图的宿主。只有根模块才能设置bootstrap属性。 */
  bootstrap: [AppComponent]
})
export class AppModule { }
