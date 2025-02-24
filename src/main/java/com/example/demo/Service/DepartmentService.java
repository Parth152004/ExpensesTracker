package com.example.demo.Service;

import com.example.demo.Entity.Department;

import java.util.List;

public interface DepartmentService {
    public Department saveDepartment(Department department);
    List<Department> getDepartments();
    Department getDepartmentById(Long id);

    Department updateDepartment(Department department, long id);

    Department deleteDepartment(long id);
}
