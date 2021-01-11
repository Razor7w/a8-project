import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';

// IMPORT MATERIAL COMPONENTS
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { MatAutocompleteModule, MatButtonModule, MatCheckboxModule, MatDatepickerModule, 
  MatFormFieldModule, MatInputModule, MatRadioModule, MatSelectModule, MatSliderModule, 
  MatSlideToggleModule } from '@angular/material';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms'

// FIREBASE
import {AngularFireModule} from '@angular/fire'
import {AngularFireAuthModule} from '@angular/fire/auth'
import {environment} from 'src/environments/environment'

// FORMS
import {ReactiveFormsModule} from '@angular/forms';
import { DittoComponent } from './components/ditto/ditto.component';
import { ChildrenComponent } from './components/children/children.component'
import { fromEventPattern } from 'rxjs';
import { ParentComponent } from './components/parent/parent.component';
import { TrimPipe } from './pipes/trim.pipe';
import { EmptyStringPipe } from './pipes/empty-string.pipe';
import { SemicolonForSpacePipe } from './pipes/semicolon-for-space.pipe';
import { MouseDirective } from './directives/handlerEvent/mouse.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    DashboardComponent,
    DittoComponent,
    ChildrenComponent,
    ParentComponent,
    TrimPipe,
    EmptyStringPipe,
    SemicolonForSpacePipe,
    MouseDirective
  ],
  imports: [
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    LayoutModule,
    MatGridListModule,
    MatMenuModule,
    MatTabsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
