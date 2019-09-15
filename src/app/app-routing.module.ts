import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartWebComponent } from './smart-web/smart-web.component';
import { MoshangComponent } from './moshang/moshang.component';
import { PanelComponent } from './panel/panel.component';

const routes: Routes = [
  // {path:"", redirectTo:"/mosh", pathMatch:"full" },
  {path:"mosh", component: MoshangComponent},
  {path:"web", component:SmartWebComponent},
  {path:"panel", component:PanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
