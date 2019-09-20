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
@Table(name = "consumidor")
public class Consumidor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "consumidor_id")
	private Integer consumidorCod;

	@Column(name = "consumidor_dni", length = 8)
	private String consumidorDni;

	@Column(name = "consumidor_nombre", length = 20)
	private String consumidorNombre;

	@Column(name = "consumidor_apellidos", length = 40)
	private String condumidorApellidos;

	@OneToMany(mappedBy = "consumidor", fetch = FetchType.LAZY)
	private List<Reserva> reservas;

	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "pedido_id")
	private Pedido pedido;

	@OneToOne(mappedBy = "consumidor", fetch = FetchType.LAZY)
	private Usuario usuario;
	
	public Consumidor() 
{
		
reservas = new ArrayList<>();
}

	public Integer getConsumidorCod() {
		return consumidorCod;
	}

	public void setConsumidorCod(Integer consumidorCod) {
		this.consumidorCod = consumidorCod;
	}

	public String getConsumidorDni() {
		return consumidorDni;
	}

	public void setConsumidorDni(String consumidorDni) {
		this.consumidorDni = consumidorDni;
	}

	public String getConsumidorNombre() {
		return consumidorNombre;
	}

	public void setConsumidorNombre(String consumidorNombre) {
		this.consumidorNombre = consumidorNombre;
	}

	public String getCondumidorApellidos() {
		return condumidorApellidos;
	}

	public void setCondumidorApellidos(String condumidorApellidos) {
		this.condumidorApellidos = condumidorApellidos;
	}

	public List<Reserva> getReservas() {
		return reservas;
	}

	public void setReservas(List<Reserva> reservas) {
		this.reservas = reservas;
	}

	public Pedido getPedido() {
		return pedido;
	}

	public void setPedido(Pedido pedido) {
		this.pedido = pedido;
	}

	public Usuario getUsuario() {
		return usuario;
	}

	public void setUsuario(Usuario usuario) {
		this.usuario = usuario;
	}
	
}
