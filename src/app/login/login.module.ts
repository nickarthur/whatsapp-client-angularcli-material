import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TruncateModule} from 'ng2-truncate';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule} from '@angular/material';
import {SharedModule} from '../shared/shared.module';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './containers/login.component';
import {FlexLayoutModule} from '@angular/flex-layout';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
];

@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    // Material
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    // Animations
    BrowserAnimationsModule,
    // Flex layout
    FlexLayoutModule,
    // Routing
    RouterModule.forChild(routes),
    // Forms
    FormsModule,
    ReactiveFormsModule,
    // Truncate Pipe
    TruncateModule,
    // Feature modules
    SharedModule,
  ],
  providers: [
  ],
})
export class LoginModule {
}