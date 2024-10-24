import { Routes } from '@angular/router';
import { RecaptchaComponent } from './components';

export const routes: Routes = [
  { path: '', component: RecaptchaComponent },
  { path: 'recaptcha', component: RecaptchaComponent },
  //   { path: 'contact', component: ContactComponent },
];
