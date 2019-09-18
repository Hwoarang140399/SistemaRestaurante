package pe.edu.upn.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Mesa")
public class Mesa {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Mesa_id")
	private Integer mesa_cod;

	@Column(name = "Mesa_numero")
	private Integer mesa_numero;
	@OneToOne(mappedBy = "mesa", fetch = FetchType.LAZY)
	private Reserva reserva;

}
