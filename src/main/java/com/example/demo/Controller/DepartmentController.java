package com.example.demo.Controller;

import com.example.demo.Entity.Department;
import com.example.demo.Service.DepartmentService;
import com.example.demo.Service.DepartmentServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    @PostMapping("/Departments")
    public Department saveDepartment(@RequestBody Department department){
        return departmentService.saveDepartment(department);
    }

    @GetMapping("/Departments")
    public List<Department> getDepartments(){
        return departmentService.getDepartments();
    }
    @GetMapping("/Departments/{id}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable long id){
        Department department = departmentService.getDepartmentById(id);
        return ResponseEntity.ok(department);
    }
}
