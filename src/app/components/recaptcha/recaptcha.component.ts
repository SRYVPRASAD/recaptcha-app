import { Component } from '@angular/core';
import { RecaptchaModule } from 'ng-recaptcha';

@Component({
  selector: 'app-recaptcha',
  standalone: true,
  imports: [RecaptchaModule],
  templateUrl: './recaptcha.component.html',
})
export class RecaptchaComponent {
  resolved(captchaResponse: string | null) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }
}
