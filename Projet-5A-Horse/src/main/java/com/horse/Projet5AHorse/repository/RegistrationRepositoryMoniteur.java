package com.horse.Projet5AHorse.repository;

import com.horse.Projet5AHorse.model.Moniteur;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepositoryMoniteur extends JpaRepository <Moniteur, Integer> {
    public Moniteur findByMoniteurEmailId(String moniteurEmailId);
    public Moniteur findByMoniteurEmailIdAndMoniteurPassword(String moniteurEmailId, String moniteurPassword);

}


