package com.horse.Projet5AHorse.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Superadmin {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int superadminId;
    private String superadminEmailId;
    private String superadminName;
    private String superadminPassword;


    public Superadmin() {
    }

    @JsonCreator
    public Superadmin(@JsonProperty("SuperadminId") int SuperadminId,
                 @JsonProperty("SuperadminName") String SuperadminName,
                 @JsonProperty("SuperadminEmailId") String SuperadminEmailId,
                 @JsonProperty("SuperadminPassword") String SuperadminPassword) {
        this.superadminId = SuperadminId;
        this.superadminEmailId = SuperadminEmailId;
        this.superadminName = SuperadminName;
        this.superadminPassword = SuperadminPassword;
    }

    public String getSuperadminEmailId() {
        return superadminEmailId;
    }

    public String getSuperadminPassword() {
        return superadminPassword;
    }

}
