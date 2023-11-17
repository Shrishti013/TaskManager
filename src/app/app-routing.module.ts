import { NgModule } from '@angular/core';
import { NoPreloading, RouterModule, Routes } from '@angular/router';
import { InboxComponent } from './inbox/inbox.component';
import { TaskManagerComponentComponent } from './task-manager-component/task-manager-component.component';
import { TaskCreateComponent } from './taskcreate/taskcreate.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { MeetingComponent } from './meeting/meeting.component';
import { ImportantComponent } from './important/important.component';
import { TextEditorComponent } from './text-editor/text-editor.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignupComponent } from './signup/signup.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { ChatComponent } from './chat/chat.component';


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
  { path: 'signup', component: SignupComponent },
  { path: 'thankyou', component: ThankyouComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'forgot-password', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
