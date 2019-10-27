import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { NgForm } from '@angular/forms';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointmentService.getAppointments();
    this.resetForm();
  }

  onSubmit(appointmentForm: NgForm) {
    if (appointmentForm.value.$key == null) {
      this.appointmentService.insertAppointment(appointmentForm.value)
    } else
      this.appointmentService.updateAppointment(appointmentForm.value);
    this.resetForm(appointmentForm);
  }
  resetForm(appointmentForm?: NgForm) {
    if (appointmentForm != null) {
      appointmentForm.reset();
      this.appointmentService.selectedAppointment = new Appointment();
    }
  }

}
