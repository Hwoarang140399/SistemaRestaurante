import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Appointment } from 'src/app/models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {
  appointmentList: Appointment[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointmentService.getAppointments().snapshotChanges().subscribe(item => {
      this.appointmentList = [];
      item.forEach(element => {
        let z = element.payload.toJSON();
        z["$key"] = element.key;
        this.appointmentList.push(z as Appointment);
      })
    })
  }

  onEdit(appointment: Appointment) {
    this.appointmentService.selectedAppointment = Object.assign({}, appointment)
  }

  onDelete($key: string) {
    this.appointmentService.deleteAppointment($key);
  }

}
