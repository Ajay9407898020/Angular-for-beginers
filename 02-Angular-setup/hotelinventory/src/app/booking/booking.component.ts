import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './validators/custom-validators';

import { BookingService } from './booking.service';
import { exhaustMap, mergeMap, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hinv-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  bookingForm!: FormGroup;

  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(private fb: FormBuilder, private bookingService: BookingService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const roomId = this.route.snapshot.params['roomid'];
    this.bookingForm = this.fb.group({
      roomId: this.fb.control({ value: roomId, disabled: true }),
      guestEmail: new FormControl('', { updateOn: 'blur', validators: Validators.required }),
      checkinDate: [''],
      checkoutDate: [''],
      bookingStatus: [''],
      bookingAmount: [''],
      bookingDate: [''],
      mobileNumber: this.fb.control('', { updateOn: 'blur', validators: Validators.required }),
      guestName: ['', [Validators.minLength(3), CustomValidators.validateName, CustomValidators.vaidateSpecialChar('*')]],
      address: this.fb.group({
        addressLine1: ['', { validators: Validators.required }],
        addressLine2: [''],
        city: [''],
        state: [''],
        country: [''],
        zipCode: [''],
      }),
      guests: this.fb.array([this.fb.group({
        guestName: ['', { validators: Validators.required }],
        age: ['']
      })]),
      tnc: ['', Validators.requiredTrue]
    }, { updateOn: 'blur', validators: [CustomValidators.validateDate] })


    // this.bookingForm.valueChanges.pipe(
    //   mergeMap(data => this.bookingService.bookRoom(data))
    // ).subscribe(value => {
    //   console.log(value);
    // })
    // this.bookingForm.valueChanges.pipe(
    //   switchMap(data => this.bookingService.bookRoom(data))
    // ).subscribe(value => {
    //   console.log(value);
    // })
    this.bookingForm.valueChanges.pipe(
      exhaustMap(data => this.bookingService.bookRoom(data))
    ).subscribe(value => {
      console.log(value);
    })
  }

  addGuest() {
    this.guests.push(this.fb.group({
      guestName: [''],
      age: ['']
    }))
  }

  addBooking() {
    console.log('form', this.bookingForm.getRawValue());
  }

  addPassport() {
    this.bookingForm.addControl('passport', this.fb.control(''));
  }

  removePassport() {
    if (this.bookingForm.get('passport'))
      this.bookingForm.removeControl('passport');
  }

  removeGuest(i: number) {
    this.guests.removeAt(i);
  }

}
