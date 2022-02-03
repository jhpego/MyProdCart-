import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';

const routes: Routes = [
  {path: "about", component: AboutComponent},
  {path: "shopping", component: ShoppingComponent},
  { path: '**', redirectTo: 'about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
