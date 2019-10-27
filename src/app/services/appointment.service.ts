import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Appointment } from '../models/appointment';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  appointmentList: AngularFireList<any>;
  selectedAppointment: Appointment = new Appointment();

  constructor(private firebase: AngularFireDatabase) { }

  getAppointments() {
    return this.appointmentList = this.firebase.list('appointments')
  }

  insertAppointment(appointment: Appointment) {
    this.appointmentList.push({
      name: appointment.name,
      client: appointment.client,
      time: appointment.time,
      date: appointment.date,
      price: appointment.price,
      quantity: appointment.quantity
    });
  }

  updateAppointment(appointment: Appointment) {
    this.appointmentList.update(appointment.$key, {
      name: appointment.name,
      client: appointment.client,
      time: appointment.time,
      date: appointment.date,
      price: appointment.price,
      quantity: appointment.quantity
    })
  }

  deleteAppointment($key: string) {
    this.appointmentList.remove($key);
  }
}
