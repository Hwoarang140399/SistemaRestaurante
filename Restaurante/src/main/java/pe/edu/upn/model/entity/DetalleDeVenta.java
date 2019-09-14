package pe.edu.upn.model.entity;



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
@Table(name = "DetalleDeVenta")
public class DetalleDeVenta {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "DetalleDeVenta_id")
	private Integer detalleDeVenta_id;

	@Column(name = "DetalleDeVenta_precio")
	private float detalleDeVenta_precio;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "VentaTotal_id")
	private VentaTotal ventaTotal;
	
	@OneToOne(mappedBy = "detalleDeVenta", fetch = FetchType.LAZY)
	private Plato plato;

}
