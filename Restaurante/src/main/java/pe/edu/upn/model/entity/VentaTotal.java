package pe.edu.upn.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "VentaTotal")
public class VentaTotal {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "VentaTotal_id")
	private Integer ventaTotal_cod;


	@OneToMany(mappedBy = "ventaTotal", fetch = FetchType.LAZY)
	private List<DetalleDeVenta> detalleDeVentas;

	@Column(name = "VentaTotal_total")
	private float ventaTotal_total;
	
	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "Pedido_id")
	private Pedido pedido;
 
	public VentaTotal() {
	 
 detalleDeVentas= new ArrayList<>();
	 
 }
}