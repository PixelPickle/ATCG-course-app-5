import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', {static: false}) signupForm: NgForm;
  answer = '';
  genders = ['Alpaca', 'Root/Bin', 'passw0rd'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.signupForm.controls['username'].value = suggestedName; <-- Doesn't work
    // this.signupForm.setValue( {} ) <-- Requires every value, not just one.
    this.signupForm.form.patchValue({ userData: {username: suggestedName}});
  }

  onSubmit(form: NgForm) {
    console.log(form);

    // Do Something

    this.signupForm.reset();
  }
}
