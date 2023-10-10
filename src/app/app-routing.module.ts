import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { TaskManagerComponentComponent } from './task-manager-component/task-manager-component.component';
import { TodayComponent } from './today/today.component';
import { TaskCreateComponent } from './taskcreate/taskcreate.component';

const routes: Routes = [
  { path: '', component: TaskManagerComponentComponent },
  {path:'inbox', component: InboxComponent},
  {path:'today', component: TodayComponent},
  {path:'taskcreate', component: TaskCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
