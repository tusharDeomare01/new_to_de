package com.app.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.Entity.Task;

//Here JpaRepository class is extended which contains methods(such as save(), findAll(), findbyId(), etc).
public interface TaskRepository extends JpaRepository<Task, Long>{

}
