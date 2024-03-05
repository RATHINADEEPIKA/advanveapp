package com.homecare.deepika.service;

import com.homecare.deepika.dto.request.LoginRequest;
import com.homecare.deepika.dto.request.Registerrequest;
import com.homecare.deepika.dto.response.LoginResponse;
import com.homecare.deepika.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(Registerrequest request);

    LoginResponse login(LoginRequest request);
}
