package com.horse.Projet5AHorse.service;

import com.horse.Projet5AHorse.model.Admin;
import com.horse.Projet5AHorse.model.Moniteur;
import com.horse.Projet5AHorse.model.Superadmin;
import com.horse.Projet5AHorse.model.User;
import com.horse.Projet5AHorse.repository.RegistrationRepository;
import com.horse.Projet5AHorse.repository.RegistrationRepositoryAdmin;
import com.horse.Projet5AHorse.repository.RegistrationRepositoryMoniteur;
import com.horse.Projet5AHorse.repository.RegistrationRepositorySuperadmin;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RegistrationService {

    @Autowired
    private RegistrationRepository repo;
    @Autowired
    private RegistrationRepositoryAdmin repoAdmin;
    @Autowired
    private RegistrationRepositoryMoniteur repoMoniteur;
    @Autowired
    private RegistrationRepositorySuperadmin repoSA;



    public User saveUser(User user){
        return repo.save(user);
    }

    public Admin saveAdmin(Admin admin){
        return repoAdmin.save(admin);
    }

    public Superadmin saveSA(Superadmin sa){
        return repoSA.save(sa);
    }

    public Moniteur saveMoniteur(Moniteur moniteur){
        return repoMoniteur.save(moniteur);
    }



    public User fetchUserByEmailId(String email) {
        return repo.findByEmailId(email);
    }
    public User fetchUserByEmailAndPassword(String email, String password) {
        return repo.findByEmailIdAndPassword(email, password) ;
    }


    public Admin fetchAdminByEmailId(String email){
        return repoAdmin.findByAdminEmailId(email);
    }
    public Admin fetchAdminByEmailIdAndPassword(String email, String Password){
        return repoAdmin.findByAdminEmailIdAndAdminPassword(email, Password);
    }


    public Superadmin fetchSAByEmailId(String email){
        return repoSA.findSuperadminBySuperadminEmailId(email);
    }
    public Superadmin fetchSAByEmailIdAndPassword(String email, String password){
        return repoSA.findSuperadminBySuperadminEmailIdAndSuperadminPassword(email, password);
    }


    public Moniteur fetchMoniteurByEmailId(String email){
        return repoMoniteur.findByMoniteurEmailId(email);
    }
    public Moniteur fetchMoniteurByEmailIdAndPassword(String email, String password){
        return repoMoniteur.findByMoniteurEmailIdAndMoniteurPassword(email, password);
    }

}
