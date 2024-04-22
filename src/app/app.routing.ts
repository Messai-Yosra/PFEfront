import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
import { FileConfigComponent } from "./file-config/file-config.component";
import { HeaderComponent } from "./header/header.component";

import { DisplayDataComponent } from "./display-data/display-data.component";
import { ConvertDataComponent } from "./convert-data/convert-data.component";
import { FileUploadComponentComponent } from "./file-upload-component/file-upload-component.component";
import { HomepageComponent } from "./homepage/homepage.component";
import { WelcomePageComponent } from "./welcome-page/welcome-page.component";
import { CreateTableComponent } from "./create-table/create-table.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AuthGuard } from "./auth/auth.guard";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { HistoryComponent } from "./history/history.component";
import { ProfilComponent } from "./profil/profil.component";
import { RegistrationComponent } from "./registration/registration.component";
import { ListPersonsComponent } from "./list-persons/list-persons.component";



const APP_ROUTING: Routes = [
  { path: '', component: LoginComponent },
  { path: 'convertData/:id', component: ConvertDataComponent },
  { path: 'file-upload', component: FileUploadComponentComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'newTemplate', component: CreateTableComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'persons', component: ListPersonsComponent },
  
  {
    path: '', component: HeaderComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'FileConfig', component: FileConfigComponent },
      { path: 'DisplayData', component: DisplayDataComponent },
    ],
  },
  { path: 'login', component: LoginComponent },

  {
    path: 'dashboard',
    component: SidebarComponent,
    children: [
      { path: '', component: DashboardComponent ,canActivate:[AuthGuard],data :{permittedRoles:['ADMIN'] } }
    ]
  },
  {
    path: 'history',
    component: SidebarComponent,
    children: [
      { path: '', component: HistoryComponent ,canActivate:[AuthGuard],data :{permittedRoles:['ADMIN'] } }
    ]
  },
  {
    path: 'profile',
    component: SidebarComponent,
    children: [
      { path: '', component: ProfilComponent ,canActivate:[AuthGuard],data :{permittedRoles:['ADMIN'] } }
    ]
  },

  {
    path: 'userProfile',
    component: HeaderComponent,
    children: [
      { path: '', component: ProfilComponent ,canActivate:[AuthGuard]  }
    ]
  },

];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
