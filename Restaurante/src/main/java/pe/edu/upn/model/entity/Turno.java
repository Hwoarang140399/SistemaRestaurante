package pe.edu.upn.model.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Turno")
public class Turno {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Turno_id")
	private Integer turno_cod;

	@Column(name = "Turno_descripcion", length = 10)
	private String turno_descripcion;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Menu_id")
	private Menu menu;


}
