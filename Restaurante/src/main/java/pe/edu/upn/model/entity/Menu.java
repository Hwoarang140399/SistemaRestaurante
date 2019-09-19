package pe.edu.upn.model.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "Menu")
public class Menu {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Menu_id")
	private Integer menu_id;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "Admin_id")
	private Admin admin;

	@OneToMany(mappedBy = "menu", fetch = FetchType.LAZY)
	private List<Plato> platos;

	@OneToMany(mappedBy = "menu", fetch = FetchType.LAZY)
	private List<Turno> turnos;
	
	public  Menu(){
platos= new ArrayList<>();
		turnos= new ArrayList<>();
		
		
	}
	
}
