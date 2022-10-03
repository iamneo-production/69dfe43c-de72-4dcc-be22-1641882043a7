package com.abacus.academy.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.abacus.academy.model.Courses;
import com.abacus.academy.repository.CoursesRepository;

import java.util.List;
@Service
public class CoursesServiceImpl implements CoursesService {
	
	@Autowired
	private CoursesRepository coursesRepository;

    @Override
	public void savecourses(Courses courses) {
		coursesRepository.save(courses);
		
	}

	@Override 
	public void delete(Integer id){
		coursesRepository.deleteById(id);
	}

	@Override
	public List<Courses> getAllCourses(){
		return coursesRepository.findAll();
	}

}