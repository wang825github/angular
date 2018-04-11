import {NewsComponent} from '../news/news.component';
import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

// 路由配置表：路由定义（route definitions）的数组
const routes: Routes = [
  { path: 'news', component: NewsComponent}
];
// 路由模块：负责管理视图的切换
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
