
package com.abacus.academy.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abacus.academy.model.AcademyInstitute;
import com.abacus.academy.repository.AcademyInstituteRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
public class AcademyInstituteServiceImpl implements AcademyInstituteService {

	@Autowired
	private AcademyInstituteRepository instituteRepository;

	@Override
	public String saveInstitute(AcademyInstitute institute) {
		instituteRepository.save(institute);
		return null;
	}

	@Override
	public void delete(Integer id) {
		instituteRepository.deleteById(id);
	}

	@Override
	public List<AcademyInstitute> getAllInstitutes() {
		return instituteRepository.findAll();
	}

}
