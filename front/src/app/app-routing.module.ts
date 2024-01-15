import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page2Component } from './Pages/page2/page2.component';
import { AppComponent } from './app.component';
import { Page1Component } from './Pages/page1/page1.component';

const routes: Routes = [
  {path:'main',component:Page1Component},
  {path:'catalog',component: Page2Component},
  {path:'',redirectTo: '/catalog', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// export const routing = RouterModule.forRoot(APP_ROUTES, { enableTracing: true })
export class AppRoutingModule { }
