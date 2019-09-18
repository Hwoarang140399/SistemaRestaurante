package pe.edu.upn.model.entity;


import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Cocina")

public class Cocina {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Cocina_id")
	private Integer cocina_cod;

	@Column(name = "Cocina_estado", length = 10)
	private String cocina_estado;
	
	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "Pedido_id")
	private Pedido pedido;

}
