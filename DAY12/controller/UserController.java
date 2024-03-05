package com.homecare.deepika.controller;


// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.homecare.deepika.dto.request.Registerrequest;
// import com.homecare.deepika.dto.response.RegisterResponse;
// import com.homecare.deepika.service.UserService;

// import com.homecare.deepika.utils.MyConstant;

// import lombok.RequiredArgsConstructor;

// import org.springframework.web.bind.annotation.RequestBody;


// @RestController
// @RequestMapping(MyConstant.USER)
// @RequiredArgsConstructor
// public class UserController {

//     private final UserService userService;

//     @PostMapping(MyConstant.REGISTER)
//     public ResponseEntity<?> postMethodName(@RequestBody Registerrequest request) {
//         RegisterResponse response = new RegisterResponse();

//         try {
//             response = userService.register(request);
//             return new ResponseEntity<>(response, HttpStatus.CREATED);
//         } catch (Exception e) {
//             return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
//         }
//     }
    
// }

// // Create request and response dto, models, one CRUD for user table, get all , get all by ID
import org.springframework.web.bind.annotation.RestController;

import com.homecare.deepika.entity.Users;
import com.homecare.deepika.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@CrossOrigin(origins="*")
@RestController
public class UserController {
    @Autowired
	UserService us;
	@Tag(name="Post User",description="Post User endpoint")
    @PostMapping("user/post")
	public boolean addUser(@RequestBody Users ue)
	{
        return us.AddUser(ue);
	}
	@Tag(name="Get User",description="Get User endpoint")
    @GetMapping("user/get")
    public List<Users> getAllUser()
    {
        return us.getUser();
    }
	@Tag(name="Get User By Id",description="Get User By Id endpoint")
	@GetMapping("user/get/{id}")
	public Optional<Users> getbyId(@PathVariable Long id)
	{
		return us.getById(id);
	}
    
}