package com.abacus.academy.service;

import java.util.List;

import com.abacus.academy.model.Courses;

public interface CoursesService {
	public  List<Courses> getAllCourses();
    public void delete(Integer id);
    public void savecourses(Courses coursesData);
}

