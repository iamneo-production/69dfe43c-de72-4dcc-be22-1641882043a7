package com.abacus.academy.service;

import java.util.List;

import com.abacus.academy.model.AcademyInstitute;

public interface AcademyInstituteService {
	public String saveInstitute(AcademyInstitute institute);

	public List<AcademyInstitute> getAllInstitutes();

	public void delete(Integer id);
}
