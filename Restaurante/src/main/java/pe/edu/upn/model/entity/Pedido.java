package pe.edu.upn.model.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Pedido")
public class Pedido {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Pedido_id")
	private Integer pedido_cod;

	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "Camarero_id")
	private Camarero camarero;
	
	@OneToOne(mappedBy = "pedido", fetch = FetchType.LAZY)
	private Consumidor consumidor;
	
	@OneToOne(mappedBy = "pedido", fetch = FetchType.LAZY)
	private Cocina cosina;
@OneToOne(mappedBy = "pedido",fetch = FetchType.LAZY)
private VentaTotal ventaTotal;

}
	