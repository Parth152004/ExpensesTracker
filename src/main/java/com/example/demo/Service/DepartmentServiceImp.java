package com.example.demo.Service;

import com.example.demo.Entity.Department;
import com.example.demo.Repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class DepartmentServiceImp implements DepartmentService{

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public Department saveDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public List<Department> getDepartments() {
        List<Department> departments = departmentRepository.findAll();
        System.out.println("Fetched Departments: " + departments);
        return departments;
    }

    @Override
    public Department getDepartmentById(Long Id){
        return departmentRepository.findById(Id).orElseThrow(()->new RuntimeException("Department Id Not found"));
    }

}
