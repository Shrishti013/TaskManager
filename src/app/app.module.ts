import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponentComponent } from './task-manager-component/task-manager-component.component';
import { InboxComponent } from './inbox/inbox.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { ImportantComponent } from './important/important.component';
import { MeetingComponent } from './meeting/meeting.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TaskCreateComponent } from './taskcreate/taskcreate.component';
import { ScheduleModule, RecurrenceEditorModule, DayService, WeekService, WorkWeekService,MonthService, MonthAgendaService } from '@syncfusion/ej2-angular-schedule';
import {StreamChatModule} from 'stream-chat-angular';

import { AngularEditorModule } from '@kolkov/angular-editor';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

import { TaskService } from './task.service';

const routes: Routes = [
  { path:'home', loadChildren:()=>import ('./task-manager-component/task-manager-component.module').then((data) => data.TaskManagerComponentModule)},
  { path: '', component: HomeComponent, pathMatch: 'full' }, 
  { path: 'task', component: TaskManagerComponentComponent },
  {path:'inbox', component: InboxComponent},
  {path:'upcoming', component: UpcomingComponent},
  {path:'taskcreate', component: TaskCreateComponent},
  {path:'meeting', component: MeetingComponent},
  {path:'important', component: ImportantComponent},
  {path:'textEditor', component: TextEditorComponent},
  {path:'home', component: HomeComponent},
  {path:'contact', component: ContactComponent},
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponentComponent,
    TaskCreateComponent,
    InboxComponent,
    UpcomingComponent,
    ImportantComponent,
    MeetingComponent,
    TextEditorComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
    ForgotPasswordComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, ScheduleModule, RecurrenceEditorModule,
    StreamChatModule,
    AngularEditorModule,
    HttpClientModule,
  ],
  exports:[RouterModule],
  providers: [DayService, WeekService, WorkWeekService,MonthService, MonthAgendaService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
