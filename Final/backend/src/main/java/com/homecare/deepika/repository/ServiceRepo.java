package com.homecare.deepika.repository;

import com.homecare.deepika.entity.Serviceentity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceRepo extends JpaRepository<Serviceentity, Long> {
    Serviceentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}