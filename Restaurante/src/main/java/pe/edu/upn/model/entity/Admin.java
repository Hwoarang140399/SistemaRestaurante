package pe.edu.upn.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name = "Admin")
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Admin_id")
	private Integer admin_cod;

	@Column(name = "Admin_dni", length = 8)
	private String admin_dni;

	@Column(name = "Admin_nombre", length = 20)
	private String admin_nombre;

	@Column(name = "Admin_apellidos", length = 40)
	private String admin_apellidos;

	@OneToMany(mappedBy = "admin", fetch = FetchType.LAZY)
	private List<Menu> menus;
	
	@OneToOne(mappedBy = "admin", fetch = FetchType.LAZY)
	private Usuario usuario;
	
	public Admin() {
		
		menus= new ArrayList<>();
		
	}
	
	

}
