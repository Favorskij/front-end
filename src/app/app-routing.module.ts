import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemUrlComponent } from "./item-url/item-url.component";
import { ItemPageComponent } from "./item-page/item-page.component";

const routes: Routes = [
  { path: '', component: ItemUrlComponent },
  { path: 'item/:itemId', component: ItemPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
