package com.example.demo.Controller;

import com.example.demo.Entity.Department;
import com.example.demo.Service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;
    // add Departments To database
    @PostMapping("/Departments")
    public Department saveDepartment(@RequestBody Department department){
        return departmentService.saveDepartment(department);
    }
    // get Department From Database
    @GetMapping("/Departments")
    public List<Department> getDepartments(){
        return departmentService.getDepartments();
    }
    // get Department by id
    @GetMapping("/Departments/{id}")
    public ResponseEntity<Department> getDepartmentById(@PathVariable long id) throws Exception{
        Department department = departmentService.getDepartmentById(id);
        return ResponseEntity.ok(department);
    }

    // update Department By id
    @PutMapping("/Departments/{id}")
    public ResponseEntity<Department> updateDepartmentById(@PathVariable long id,@RequestBody Department department){
        Department updatedDepartment = departmentService.updateDepartment(department,id);
        return ResponseEntity.ok(updatedDepartment);
    }

    // Delete Departments By Id
    @DeleteMapping("/Departments/{id}")
    public ResponseEntity<Department> deleteDepartmentById(@PathVariable long id){
        Department deleteDepartment = departmentService.deleteDepartment(id);
        return ResponseEntity.ok(deleteDepartment);
    }
}
