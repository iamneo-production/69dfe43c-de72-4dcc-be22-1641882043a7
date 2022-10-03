package com.abacus.academy.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.abacus.academy.model.AcademyInstitute;
import com.abacus.academy.service.AcademyInstituteService;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
@RequestMapping("/institute")
public class AcademyinstituteController {
	@Autowired
	private AcademyInstituteService instituteService;

	@PostMapping("/saveinstitute")
	public String saveInstitute(@RequestBody AcademyInstitute instituteData) {
		instituteService.saveInstitute(instituteData);
		System.out.println("success");
		return "success";
	}

	@GetMapping("/getAll")
	public List<AcademyInstitute> list() {
		return instituteService.getAllInstitutes();
	}

	@DeleteMapping("/{id}")
	public String delete(@PathVariable Integer id) {
		instituteService.delete(id);
		return "Deleted Student with id " + id;
	}

}
