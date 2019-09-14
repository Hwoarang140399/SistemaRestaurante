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
@Table(name = "Plato")

public class Plato {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Plato_id")
	private Integer plato_id;

	@Column(name = "Plato_nombre", length = 20)
	private String plato_nombre;

	@Column(name = "Plato_descripcion", length = 500)
	private String plato_descripcion;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Menu_id")
	private Menu menu;

	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "DetalleDeVenta_id")
	private DetalleDeVenta detalleDeVenta;

}
