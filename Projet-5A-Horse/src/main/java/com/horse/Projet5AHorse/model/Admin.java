package com.horse.Projet5AHorse.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Admin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int adminId;
    private String adminEmailId;
    private String adminName;
    private String adminPassword;

    public Admin() {
    }

    @JsonCreator
    public Admin(@JsonProperty("adminId") int adminId,
                    @JsonProperty("adminName") String adminName,
                    @JsonProperty("adminEmailId") String adminEmailId,
                    @JsonProperty("adminPassword") String adminPassword) {
        this.adminId = adminId;
        this.adminEmailId = adminEmailId;
        this.adminName = adminName;
        this.adminPassword = adminPassword;
    }

    public String getAdminEmailId() {
        return adminEmailId;
    }

    public String getAdminPassword() {
        return adminPassword;
    }

}
