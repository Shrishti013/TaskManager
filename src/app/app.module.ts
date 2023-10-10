import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskManagerComponentComponent } from './task-manager-component/task-manager-component.component';
import { InboxComponent } from './inbox/inbox.component';
import { TodayComponent } from './today/today.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { ImportantComponent } from './important/important.component';
import { MeetingComponent } from './meeting/meeting.component';
import { TrashComponent } from './trash/trash.component';
import { FamilyComponent } from './family/family.component';
import { VacationComponent } from './vacation/vacation.component';
import { FestivalComponent } from './festival/festival.component';
import { ConcertsComponent } from './concerts/concerts.component';
import { FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TaskCreateComponent } from './taskcreate/taskcreate.component';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    TaskManagerComponentComponent,
    TaskCreateComponent,
    InboxComponent,
    TodayComponent,
    UpcomingComponent,
    ImportantComponent,
    MeetingComponent,
    TrashComponent,
    FamilyComponent,
    VacationComponent,
    FestivalComponent,
    ConcertsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
