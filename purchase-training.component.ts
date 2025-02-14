import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchase-training',
  templateUrl: './purchase-training.component.html',
  styleUrls: ['./purchase-training.component.scss']
})
export class PurchaseTrainingComponent implements OnInit {
  data: any;
  showRegisterOptions = false;
  registerSomeoneElseForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerSomeoneElseForm = this.fb.group({
      person: this.fb.array([
      ])
    })
    this.addMember();
  }

  get membersList() {
    return this.registerSomeoneElseForm.get('person') as FormArray
  }

  addMember() {
    const member = this.fb.group({
      firstName: ['', Validators.required],
      lasttName: ['', Validators.required],
      memberEmailId: ['', Validators.email],
    })
    this.membersList.push(member);
  }

  // convenience getter for easy access to form fields
  get registerSomeoneElseFormControls() {
    return this.registerSomeoneElseForm.controls;
  }

  deleteMember(i) {
    this.membersList.removeAt(i)
  }

  reload() {
    window.location.reload();
  }

  @Input()
  set json(input: string) {
    if (input) {
      this.data = JSON.parse(input);
    }
  }
}
