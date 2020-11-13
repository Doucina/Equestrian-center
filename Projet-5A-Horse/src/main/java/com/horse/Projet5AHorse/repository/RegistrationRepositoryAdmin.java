package com.horse.Projet5AHorse.repository;

import com.horse.Projet5AHorse.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepositoryAdmin extends JpaRepository <Admin, Integer> {
    public Admin findByAdminEmailId(String adminEmailId);
    public Admin findByAdminEmailIdAndAdminPassword(String adminEmailId, String adminPassword);

}
