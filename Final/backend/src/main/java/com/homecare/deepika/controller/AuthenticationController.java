package com.homecare.deepika.controller;


import static com.homecare.deepika.utils.MyConstant.AUTH;
import static com.homecare.deepika.utils.MyConstant.LOGIN;
import static com.homecare.deepika.utils.MyConstant.REGISTER;
import static org.springframework.http.HttpStatus.ACCEPTED;
import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.homecare.deepika.dto.request.LoginRequest;
import com.homecare.deepika.dto.request.Registerrequest;
import com.homecare.deepika.dto.response.LoginResponse;
import com.homecare.deepika.dto.response.RegisterResponse;
import com.homecare.deepika.service.AuthenticationService;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping(AUTH)
public class AuthenticationController {

    private final AuthenticationService authService;
    @Tag(name="Register",description="Register endpoint")
    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody Registerrequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Registration failed due to an unexpected error.");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
    @Tag(name="Login",description="Login endpoint")
    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        try {
            response = authService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Login failed!");
            response.setToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
}