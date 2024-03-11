package com.homecare.deepika.mapper;

import com.homecare.deepika.dto.Feedbackdto;
import com.homecare.deepika.entity.Feedbackentity;

public class Feedbackmapper {

    public static Feedbackdto mapToFeedbackDto(Feedbackentity feedbackEntity) {
        // Implement the mapping logic
        return new Feedbackdto(
                feedbackEntity.getId(),
                feedbackEntity.getUsername(),
                feedbackEntity.getQuery()
        );
    }

    public static Feedbackentity mapToFeedbackEntity(Feedbackdto feedbackDto) {
        // Implement the mapping logic
        return new Feedbackentity(
                feedbackDto.getId(),
                feedbackDto.getUsername(),
                feedbackDto.getQuery()
        );
    }
}