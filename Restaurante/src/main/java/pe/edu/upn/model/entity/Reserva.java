package pe.edu.upn.model.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Reserva")
public class Reserva {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Reserva_id")
	private Integer reserva_cod;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Consumidor_id")
	private Consumidor consumidor;

	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "Mesa_id")
	private Mesa mesa;

}
