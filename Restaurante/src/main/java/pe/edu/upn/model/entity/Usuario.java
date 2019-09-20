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
@Table(name = "usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "usuario_id")
	private Integer usuarioCod;

	@Column(name = "usuario_nombre", length = 20)
	private String usuarioNombre;

	@Column(name = "usuario_contraseña", length = 20)
	private String usuarioContraseña;

	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "admin_id")
	private Admin admin;

	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "consumidor_id")
	private Consumidor consumidor;

	public Integer getUsuarioCod() {
		return usuarioCod;
	}

	public void setUsuarioCod(Integer usuarioCod) {
		this.usuarioCod = usuarioCod;
	}

	public String getUsuarioNombre() {
		return usuarioNombre;
	}

	public void setUsuarioNombre(String usuarioNombre) {
		this.usuarioNombre = usuarioNombre;
	}

	public String getUsuarioContraseña() {
		return usuarioContraseña;
	}

	public void setUsuarioContraseña(String usuarioContraseña) {
		this.usuarioContraseña = usuarioContraseña;
	}

	public Admin getAdmin() {
		return admin;
	}

	public void setAdmin(Admin admin) {
		this.admin = admin;
	}

	public Consumidor getConsumidor() {
		return consumidor;
	}

	public void setConsumidor(Consumidor consumidor) {
		this.consumidor = consumidor;
	}
	
}
