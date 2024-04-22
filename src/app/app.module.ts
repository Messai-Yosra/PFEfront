import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ROUTING } from "./app.routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';
import { FileConfigComponent } from './file-config/file-config.component';
import { HeaderComponent } from './header/header.component';
import { UploadedFilesComponent } from './uploaded-files/uploaded-files.component';
import { DatePipe } from "@angular/common";
import { DisplayDataComponent } from './display-data/display-data.component';
import { ConvertDataComponent } from './convert-data/convert-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';
import { FileUploadComponentComponent } from './file-upload-component/file-upload-component.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MatButtonModule } from '@angular/material/button';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { CreateTableComponent } from './create-table/create-table.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogCreatedComponent } from './dialog-created/dialog-created.component';
import { MatDialogModule } from '@angular/material/dialog';
import { UserService } from './user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatNativeDateModule } from '@angular/material/core';

import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatBadgeModule } from '@angular/material/badge';
import { MatExpansionModule } from '@angular/material/expansion';

import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatChipsModule } from '@angular/material/chips';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoryComponent } from './history/history.component';
import { ProfilComponent } from './profil/profil.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import {MatCardModule} from '@angular/material/card';
import { RegistrationComponent } from './registration/registration.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FileConfigComponent,
    UploadedFilesComponent,
    HeaderComponent,
    DisplayDataComponent,
    ConvertDataComponent,
    FileUploadComponentComponent,
    HomepageComponent,
    WelcomePageComponent,
    CreateTableComponent,
    DialogCreatedComponent,
    SidebarComponent,
    DashboardComponent,
    HistoryComponent,
    ProfilComponent,
    RegistrationComponent,
    ListPersonsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ROUTING,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCheckboxModule,
    MatStepperModule,
    MatDatepickerModule,

    MatChipsModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatBadgeModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatCardModule,
    NgxChartsModule,
  ],
  providers: [UserService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
