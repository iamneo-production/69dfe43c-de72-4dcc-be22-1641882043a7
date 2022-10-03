package com.abacus.academy.model;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
@Entity
public class Courses{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String coursesname;
    private String coursesDescription;
    private String coursesDuration;
    private String institutename;
    public Courses()
    {
    }

    public int getId(){
    return id;
    }
    public void setId(int id){
        this.id=id;
    }
    public String getCoursesname(){
        return coursesname;
    }
    public void setCoursesname(String coursesname)
    {
        this.coursesname=coursesname;
    }
    public void setCourseDescription(String coursesDescription)
    {
        this.coursesDescription=coursesDescription;
    }
    
    public String getCoursesDescription(){
        return coursesDescription;
    }
    public void setCourseDuration(String coursesDuration)
    {
        this.coursesDuration=coursesDuration;
    }
    
    public String getCoursesDuration(){
        return coursesDuration;
    }
    public void setInstitutename(String institutename)
    {
        this.institutename=institutename;
    }
    
    public String getInstitutename(){
        return institutename;
    }
    

}
