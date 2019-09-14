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
@Table(name = "Usuario")
public class Usuario {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Usuario_id")
	private Integer usuario_cod;

	@Column(name = "Usuario_nombre", length = 20)
	private String usuario_nombre;

	@Column(name = "Usuario_contraseña", length = 20)
	private String usuario_contraseña;

	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "Admin_id")
	private Admin admin;

	@OneToOne(cascade = { CascadeType.ALL })
	@JoinColumn(name = "Consumidor_id")
	private Consumidor consumidor;
	
}
