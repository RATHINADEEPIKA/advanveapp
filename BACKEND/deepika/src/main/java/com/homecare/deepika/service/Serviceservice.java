package com.homecare.deepika.service;
import com.homecare.deepika.dto.Servicedto;
import com.homecare.deepika.entity.Serviceentity;
import com.homecare.deepika.mapper.Servicemapper;
import com.homecare.deepika.repository.ServiceRepo;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional; // Import transactional annotation

import java.util.List;
import java.util.stream.Collectors;

@Service
public class Serviceservice {

    private final ServiceRepo serviceRepo;

    public Serviceservice(ServiceRepo serviceRepo) {
        this.serviceRepo = serviceRepo;
    }

    public List<Servicedto> getAllServices() {
        List<Serviceentity> services = serviceRepo.findAll();
        return services.stream()
                .map(Servicemapper::maptoServicedto)
                .collect(Collectors.toList());
    }

    public Servicedto getServiceByName(String name) {
        Serviceentity serviceentity = serviceRepo.findByName(name);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    @SuppressWarnings("null")
    public Servicedto createService(Servicedto servicedto) {
        Serviceentity serviceentity = Servicemapper.maptoServiceentity(servicedto);
        serviceentity = serviceRepo.save(serviceentity);
        return Servicemapper.maptoServicedto(serviceentity);
    }

    public Servicedto updateServiceByName(String name, Servicedto updatedServicedto) {
        Serviceentity existingService = serviceRepo.findByName(name);

        if (existingService != null) {
            // Update the fields you want to allow updating
            existingService.setProvider(updatedServicedto.getProvider());
            existingService.setDescription(updatedServicedto.getDescription());
            existingService.setCharges(updatedServicedto.getCharges());
            existingService.setTiming(updatedServicedto.getTiming());

            existingService = serviceRepo.save(existingService);
            return Servicemapper.maptoServicedto(existingService);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    @Transactional // Add @Transactional annotation
    public void deleteServiceByName(String name) {
        serviceRepo.deleteByName(name);
    }
}