package com.horse.Projet5AHorse.repository;

import com.horse.Projet5AHorse.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository <User, Integer> {
    public User findByEmailId(String emailId);
    public User findByEmailIdAndPassword(String emailId, String password);

}
