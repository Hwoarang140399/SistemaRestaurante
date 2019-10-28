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
    if (confirm("Desea editar la reserva?")) {
      this.appointmentService.selectedAppointment = Object.assign({}, appointment)
    }
  }

  onDelete($key: string) {
    if (confirm("Desea eliminar la reserva?")) {
      this.appointmentService.deleteAppointment($key);
    }
  }

}
