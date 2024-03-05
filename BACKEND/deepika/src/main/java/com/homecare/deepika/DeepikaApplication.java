package com.homecare.deepika;

// import org.springframework.boot.SpringApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info =@Info(
				title = "Elderly Ease",
				version = "1.1.2",
				description = "Home Care Services for Elders",
				contact = @Contact(
						name = "RathinaDeepika",
						email = "rathinadeepikar@gmail.com"
						)
				)
		)
public class DeepikaApplication {

	public static void main(String[] args) {
		SpringApplication.run(DeepikaApplication.class, args);
	}

}