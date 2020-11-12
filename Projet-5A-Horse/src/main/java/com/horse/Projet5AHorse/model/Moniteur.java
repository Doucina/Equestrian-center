package com.horse.Projet5AHorse.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Moniteur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int moniteurId;
    private String moniteurEmailId;
    private String moniteurName;
    private String moniteurPassword;

    public Moniteur() {
    }

    @JsonCreator
    public Moniteur(@JsonProperty("moniteurId") int moniteurId,
                    @JsonProperty("moniteurName") String moniteurName,
                    @JsonProperty("moniteurEmailId") String moniteurEmailId,
                    @JsonProperty("moniteurPassword") String moniteurPassword) {
        this.moniteurId = moniteurId;
        this.moniteurEmailId = moniteurEmailId;
        this.moniteurName = moniteurName;
        this.moniteurPassword = moniteurPassword;
    }

    public String getMoniteurEmailId() {
        return moniteurEmailId;
    }

    public String getMoniteurPassword() {
        return moniteurPassword;
    }

}
