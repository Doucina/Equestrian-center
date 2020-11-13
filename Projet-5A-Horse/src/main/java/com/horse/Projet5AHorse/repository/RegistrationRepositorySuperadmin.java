package com.horse.Projet5AHorse.repository;

import com.horse.Projet5AHorse.model.Superadmin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepositorySuperadmin extends JpaRepository <Superadmin, Integer> {
    public Superadmin findSuperadminBySuperadminEmailId(String superadminEmailId);
    public Superadmin findSuperadminBySuperadminEmailIdAndSuperadminPassword(String superadminEmailId, String superadminPassword);

}
