package com.fyp.siri.models;

import java.sql.Date;

import jakarta.persistence.*;

@Entity
@Table(name="patient")
public class Patient {


	private String name;
	@Id
	private String email;
	private String password;
	private String gender;
	private Date dob;
	private String address;
	private long phone;
	
	public Patient() {
		super();
	}
	
	public Patient(String name, String email, String password, String gender, Date dob, String address, long phone) {
		super();
		this.name = name;
		this.email = email;
		this.password = password;
		this.gender = gender;
		this.dob = dob;
		this.address = address;
		this.phone = phone;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getPhone() {
		return phone;
	}

	public void setPhone(long phone) {
		this.phone = phone;
	}

	public String getEmail() {
		return email;
	}
	
	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}
	
	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "Patient [name=" + name + ", email=" + email + ", password=" + password + ", address=" + address + ", phone=" + phone + "]";
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

}
