package com.app.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;

//This Class Handle Exceptons
@ControllerAdvice
//@ControllerAdvice : It is a Spring annotation that allows you to handle exceptions across an entire application in one global handling component
public class TaskNotFoundAdvice {

	
	@ResponseBody
	//The @ResponseBody annotation is used in the Spring framework to bind a method's return value to the HTTP response body.
	@ExceptionHandler(TaskNotFoundException.class)
	//The @ExceptionHandler annotation is used in Spring Boot to handle specific exceptions and send custom responses to the client.
	@ResponseStatus(HttpStatus.NOT_FOUND)
	//The @ResponseStatus annotation in Spring marks a method or exception class with a status code and reason that should be returned.
	public Map<String,String> exceptionHandler(TaskNotFoundException exception){
		
		Map<String,String> errorMap=new HashMap<>(); 
		errorMap.put("Error",exception.getMessage());
		
		return errorMap;
	}
}
