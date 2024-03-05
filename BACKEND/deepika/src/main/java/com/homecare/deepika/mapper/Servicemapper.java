package com.homecare.deepika.mapper;
import com.homecare.deepika.dto.Servicedto;
import com.homecare.deepika.entity.Serviceentity;

public class Servicemapper {

    public static Servicedto maptoServicedto(Serviceentity serviceentity) {
        // Implement the mapping logic
        return new Servicedto(
                serviceentity.getId(),
                serviceentity.getName(),
                serviceentity.getProvider(),
                serviceentity.getDescription(),
                serviceentity.getCharges(),
                serviceentity.getTiming()
        );
    }

    public static Serviceentity maptoServiceentity(Servicedto servicedto) {
        // Implement the mapping logic
        return new Serviceentity(
                servicedto.getId(),
                servicedto.getName(),
                servicedto.getProvider(),
                servicedto.getDescription(),
                servicedto.getCharges(),
                servicedto.getTiming()
        );
    }
}
