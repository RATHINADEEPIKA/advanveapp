package com.homecare.deepika.mapper;

import com.homecare.deepika.dto.Bookdto;
import com.homecare.deepika.entity.Bookentity;

public class Bookmapper {

    public static Bookdto mapToBookingDto(Bookentity bookentity) {
        // Implement the mapping logic
        return new Bookdto(
                bookentity.getId(),
                bookentity.getUsername(),
                bookentity.getAge(),
                bookentity.getEmail(),
                bookentity.getMobile(),
                bookentity.getServicename(), 
                bookentity.getPaymentmethod()
        );
    }

    public static Bookentity mapToBookEntity(Bookdto bookingDto) {
        // Implement the mapping logic
        return new Bookentity(
                bookingDto.getId(),
                bookingDto.getUsername(),
                bookingDto.getAge(),
                bookingDto.getEmail(),
                bookingDto.getMobile(),
                bookingDto.getServiceName(), 
                bookingDto.getPaymentMethod()
        );
    }
}