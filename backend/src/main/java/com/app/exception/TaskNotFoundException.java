package com.app.exception;

public class TaskNotFoundException extends RuntimeException{

	//Here One Constructor is Made which show the Exception "TaskNotFound".
	public TaskNotFoundException(Long id) {
		super("Task Not Found with id "+ id);
	}
}
