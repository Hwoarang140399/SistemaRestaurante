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
@Table(name = "Consumidor")
public class Consumidor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Consumidor_id")
	private Integer consumidor_cod;

	@Column(name = "Consumidor_dni", length = 8)
	private String consumidor_dni;

	@Column(name = "Consumidor_nombre", length = 20)
	private String condumidor_nombre;

	@Column(name = "Consumidor_apellidos", length = 40)
	private String condumidor_apellidos;

	@OneToMany(mappedBy = "consumidor", fetch = FetchType.LAZY)
	private List<Reserva> reservas;

	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "Pedido_id")
	private Pedido pedido;

	@OneToOne(mappedBy = "consumidor", fetch = FetchType.LAZY)
	private Usuario usuario;
	
	public Consumidor() 
{
		
reservas = new ArrayList<>();
}
	
}
