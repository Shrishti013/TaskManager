import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TaskManagerComponentComponent } from './task-manager-component.component';

const routes: Routes = [
  { path: '', component: TaskManagerComponentComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskManagerComponentModule { }
