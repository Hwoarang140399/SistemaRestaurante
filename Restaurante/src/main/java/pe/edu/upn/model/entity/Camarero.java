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
@Table(name = "Camarero")
public class Camarero {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Camarero_id")
	private Integer camarero_cod;

	@Column(name = "Camarero_nombre", length = 20)
	private String camarero_nombre;

	@Column(name = "Camarero_serie", length = 10)
	private String camarero_serie;

	@OneToOne(mappedBy = "camarero", fetch = FetchType.LAZY)
	private Pedido pedido;

}
