package com.example.demo.Service;

import com.example.demo.Entity.Department;
import com.example.demo.Exception.DepartmentNotFoundException;

import java.util.List;

public interface DepartmentService {
    public Department saveDepartment(Department department);
    List<Department> getDepartments();
    Department getDepartmentById(Long id) throws DepartmentNotFoundException;

    Department updateDepartment(Department department, long id);

    Department deleteDepartment(long id);
}
